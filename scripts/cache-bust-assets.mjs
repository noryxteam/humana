import fs from "fs";
import path from "path";

const ver = "20260912b";
const skip = /temp-|reference-/;
const re =
  /(href|src)="((?:\.\.\/)?(?:css|js)\/[^"]+\.(?:css|js))(?:\?v=[^"]*)?"/g;

function walk(dir) {
  for (const name of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, name.name);
    if (name.isDirectory()) {
      if (name.name === "node_modules" || name.name === ".git") continue;
      walk(p);
      continue;
    }
    if (!name.name.endsWith(".html") || skip.test(p)) continue;
    const c = fs.readFileSync(p, "utf8");
    const n = c.replace(re, (_, attr, file) => `${attr}="${file}?v=${ver}"`);
    if (n !== c) {
      fs.writeFileSync(p, n);
      console.log("updated", path.relative(process.cwd(), p));
    }
  }
}

walk(process.cwd());
