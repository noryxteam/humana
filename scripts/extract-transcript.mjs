import fs from 'fs';

const file = process.argv[2];
const lineNum = Number(process.argv[3]);
const field = process.argv[4] || 'old_string';
const out = process.argv[5];

const lines = fs.readFileSync(file, 'utf8').split('\n');
const obj = JSON.parse(lines[lineNum]);
const input = obj.message?.content?.find((c) => c.input?.[field])?.input;
const text = input?.[field];
if (!text) {
  console.error('not found');
  process.exit(1);
}
if (out) fs.writeFileSync(out, text);
else console.log(text);
