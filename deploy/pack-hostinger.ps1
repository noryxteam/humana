# Gera ZIP pronto para upload na Hostinger (public_html)
# Uso: .\deploy\pack-hostinger.ps1

$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent $PSScriptRoot
$OutZip = Join-Path $Root "humana-hostinger.zip"

if (Test-Path $OutZip) { Remove-Item $OutZip -Force }

$staging = Join-Path $env:TEMP "humana-hostinger-pack"
if (Test-Path $staging) { Remove-Item $staging -Recurse -Force }
New-Item -ItemType Directory -Path $staging | Out-Null

$copy = @(
  "assets", "blog", "css", "historia", "imagem", "js", ".htaccess",
  "index.html", "sobre.html", "historia.html", "contato.html", "blog.html",
  "cop30.html", "parceiros.html", "tao-filmes.html",
  "isp.html", "isr.html", "traducao.html", "cursos-formativos.html",
  "politica-privacidade.html", "termos-de-uso.html"
)

foreach ($item in $copy) {
  $src = Join-Path $Root $item
  if (Test-Path $src) {
    Copy-Item $src (Join-Path $staging $item) -Recurse -Force
  }
}

Compress-Archive -Path "$staging\*" -DestinationPath $OutZip -Force
Remove-Item $staging -Recurse -Force

Write-Host "Pacote criado: $OutZip"
Write-Host "Envie o conteudo do ZIP para public_html no hPanel da Hostinger."
