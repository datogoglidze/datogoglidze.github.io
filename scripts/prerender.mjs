import { launch } from "puppeteer";
import { createServer } from "http";
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, "..", "dist");

const ROUTES = [
  "/home",
  "/learning",
  "/gaming",
  "/tech",
  "/finance",
  "/memes",
  "/music",
  "/my-gear",
];

function startServer(port) {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      let filePath = join(DIST, req.url === "/" ? "index.html" : req.url);
      try {
        const data = readFileSync(filePath);
        const ext = filePath.split(".").pop();
        const mime = {
          html: "text/html",
          js: "application/javascript",
          css: "text/css",
          svg: "image/svg+xml",
          png: "image/png",
          jpg: "image/jpeg",
          json: "application/json",
        };
        res.writeHead(200, { "Content-Type": mime[ext] || "text/plain" });
        res.end(data);
      } catch {
        const fallback = readFileSync(join(DIST, "index.html"));
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(fallback);
      }
    });
    server.listen(port, () => resolve(server));
  });
}

async function prerender() {
  const PORT = 4173;
  const server = await startServer(PORT);
  console.log(`Static server running on http://localhost:${PORT}`);

  const browser = await launch({ headless: true, args: ["--no-sandbox"] });

  for (const route of ROUTES) {
    const page = await browser.newPage();
    const url = `http://localhost:${PORT}${route}`;
    console.log(`Prerendering ${route}...`);

    await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });
    const html = await page.content();

    const outDir = join(DIST, route);
    mkdirSync(outDir, { recursive: true });
    writeFileSync(join(outDir, "index.html"), html);

    await page.close();
    console.log(`  -> ${route}/index.html`);
  }

  await browser.close();
  server.close();
  console.log("Prerendering complete!");
}

prerender().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});
