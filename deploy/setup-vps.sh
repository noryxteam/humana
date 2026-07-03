#!/usr/bin/env bash
# Configuração inicial do VPS (Ubuntu/Debian)
# Uso no servidor: bash setup-vps.sh seu-dominio.com.br

set -euo pipefail

DOMAIN="${1:-}"
APP_DIR="/var/www/humana"
REPO="https://github.com/marcosg432/humana.git"

if [[ -z "$DOMAIN" ]]; then
  echo "Uso: bash setup-vps.sh seu-dominio.com.br"
  exit 1
fi

if [[ $EUID -ne 0 ]]; then
  echo "Execute como root: sudo bash setup-vps.sh $DOMAIN"
  exit 1
fi

echo "==> Instalando pacotes..."
apt-get update -qq
apt-get install -y nginx git certbot python3-certbot-nginx ufw

echo "==> Clonando/atualizando o site..."
if [[ -d "$APP_DIR/.git" ]]; then
  git -C "$APP_DIR" pull --ff-only
else
  git clone "$REPO" "$APP_DIR"
fi

echo "==> Configurando Nginx..."
sed "s/humanacomtrad.com.br www.humanacomtrad.com.br/$DOMAIN www.$DOMAIN/g" \
  "$APP_DIR/deploy/nginx-site.conf" > /etc/nginx/sites-available/humana

ln -sf /etc/nginx/sites-available/humana /etc/nginx/sites-enabled/humana
rm -f /etc/nginx/sites-enabled/default

nginx -t
systemctl enable nginx
systemctl reload nginx

echo "==> Firewall (SSH + HTTP + HTTPS)..."
ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw --force enable

echo "==> SSL com Let's Encrypt..."
certbot --nginx -d "$DOMAIN" -d "www.$DOMAIN" --non-interactive --agree-tos -m "admin@$DOMAIN" || {
  echo "Certbot falhou. Verifique se o DNS do domínio aponta para este servidor."
  echo "Depois rode: certbot --nginx -d $DOMAIN -d www.$DOMAIN"
}

echo ""
echo "Pronto! Site em: https://$DOMAIN"
echo "Para atualizar depois: cd $APP_DIR && git pull && systemctl reload nginx"
