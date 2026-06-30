const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

function clean(html) {
  return html
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/\sstyle="[^"]*"/gi, '')
    .replace(/data-start="[^"]*"/gi, '')
    .replace(/data-end="[^"]*"/gi, '')
    .trim();
}

function extractMain(slug) {
  const html = fs.readFileSync(path.join(ROOT, 'temp-' + slug + '.html'), 'utf8');
  const out = [];
  const re = /et_pb_text_inner[^>]*>([\s\S]*?)<\/div>\s*<\/div>/gi;
  let m;
  while ((m = re.exec(html))) {
    const t = clean(m[1]);
    if (t.length < 60 || t.includes('dataLayer') || t.includes('logo-carousel') || t.includes('@media')) continue;
    if (/^<p>(tradutores|intérpretes|palavras)/i.test(t)) continue;
    if (t.includes('Orçamento') && t.length < 80) continue;
    if (t.includes('SOBRE NÓS')) continue;
    out.push(t);
  }
  return out;
}

['isp', 'isr', 'traducao', 'cursos-formativos'].forEach((slug) => {
  const blocks = extractMain(slug);
  fs.writeFileSync(path.join(ROOT, 'temp-blocks-' + slug + '.json'), JSON.stringify(blocks, null, 2));
  console.log(slug, blocks.length);
});
