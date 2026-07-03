# Deploy do Windows para o VPS via SCP
# Uso: .\deploy\deploy.ps1 -Server "usuario@IP_DO_VPS" -Domain "seudominio.com.br"

param(
  [Parameter(Mandatory = $true)]
  [string]$Server,

  [string]$RemotePath = "/var/www/humana",
  [string]$Domain = ""
)

$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent $PSScriptRoot

Write-Host "==> Enviando arquivos para $Server:$RemotePath ..."

# Cria pasta remota
ssh $Server "sudo mkdir -p $RemotePath && sudo chown -R `$(whoami):`$(whoami) $RemotePath"

# Envia projeto (exclui node_modules e .git)
scp -r `
  "$Root\assets" `
  "$Root\blog" `
  "$Root\css" `
  "$Root\historia" `
  "$Root\imagem" `
  "$Root\js" `
  "$Root\scripts" `
  "$Root\deploy" `
  "$Root\*.html" `
  "$Root\package.json" `
  "$Root\vite.config.js" `
  "${Server}:${RemotePath}/"

if ($Domain) {
  Write-Host "==> Configurando Nginx no servidor..."
  ssh $Server "sudo sed 's/humanacomtrad.com.br www.humanacomtrad.com.br/$Domain www.$Domain/g' $RemotePath/deploy/nginx-site.conf | sudo tee /etc/nginx/sites-available/humana > /dev/null && sudo ln -sf /etc/nginx/sites-available/humana /etc/nginx/sites-enabled/humana && sudo nginx -t && sudo systemctl reload nginx"
}

Write-Host "Deploy concluído."
