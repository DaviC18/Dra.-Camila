// Pré-renderiza a página no build: injeta o HTML do App em dist/index.html.
import { readFileSync, rmSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const { render } = await import(new URL("../dist-ssr/entry-server.js", import.meta.url).href);

const file = `${root}dist/index.html`;
const html = readFileSync(file, "utf8");
if (!html.includes("<!--app-html-->")) throw new Error("prerender: marcador <!--app-html--> não encontrado");
writeFileSync(file, html.replace("<!--app-html-->", render()));
rmSync(`${root}dist-ssr`, { recursive: true, force: true });
console.log("prerender: dist/index.html gerado");
