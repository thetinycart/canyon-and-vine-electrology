import { cp, mkdir, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const projectRoot = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const outputDirectory = path.join(projectRoot, "github-pages");
const clientDirectory = path.join(projectRoot, "dist", "client");

const repository =
  process.env.GITHUB_REPOSITORY?.split("/").at(-1) ??
  "canyon-and-vine-electrology";
const owner =
  process.env.GITHUB_REPOSITORY_OWNER ??
  process.env.GITHUB_REPOSITORY?.split("/").at(0) ??
  "thetinycart";
const basePath = `/${repository}`;
const pagesUrl = `https://${owner}.github.io${basePath}`;
const publicSiteUrl =
  process.env.PUBLIC_SITE_URL ??
  "https://tycheventuresllc.com/canyon-and-vine-electrology";

const workerUrl = pathToFileURL(
  path.join(projectRoot, "dist", "server", "index.js"),
);
workerUrl.searchParams.set("static-export", `${Date.now()}`);

const { default: worker } = await import(workerUrl.href);
const response = await worker.fetch(
  new Request("http://localhost/", {
    headers: { accept: "text/html" },
  }),
  {
    ASSETS: {
      fetch: async () => new Response("Not found", { status: 404 }),
    },
  },
  {
    waitUntil() {},
    passThroughOnException() {},
  },
);

if (!response.ok) {
  throw new Error(`Static render failed with status ${response.status}.`);
}

let html = await response.text();

html = html
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
  .replace(/<link\b[^>]*rel=["']modulepreload["'][^>]*\/?\s*>/gi, "")
  .replaceAll('href="/assets/', `href="${basePath}/assets/`)
  .replaceAll('src="/assets/', `src="${basePath}/assets/`)
  .replaceAll(
    'href="/brand-mark.png?v=ee-wordmark-20260718"',
    `href="${basePath}/brand-mark.png?v=ee-wordmark-20260718"`,
  )
  .replaceAll(
    'href="/hero-profile.jpg?v=ee-wordmark-20260718"',
    `href="${basePath}/hero-profile.jpg?v=ee-wordmark-20260718"`,
  )
  .replaceAll(
    'src="/brand-mark.png?v=ee-wordmark-20260718"',
    `src="${basePath}/brand-mark.png?v=ee-wordmark-20260718"`,
  )
  .replaceAll(
    'src="/hero-profile.jpg?v=ee-wordmark-20260718"',
    `src="${basePath}/hero-profile.jpg?v=ee-wordmark-20260718"`,
  )
  .replace(
    /(<meta property="og:image" content=")[^"]+("\/?>)/,
    `$1${publicSiteUrl}/og.png?v=ee-wordmark-20260718$2`,
  )
  .replace(
    /(<meta name="twitter:image" content=")[^"]+("\/?>)/,
    `$1${publicSiteUrl}/og.png?v=ee-wordmark-20260718$2`,
  )
  .replace(
    /(<link rel="canonical" href=")[^"]+("\/?>)/,
    `$1${publicSiteUrl}/$2`,
  );

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });
const sourceAssets = path.join(clientDirectory, "assets");
const outputAssets = path.join(outputDirectory, "assets");
await mkdir(outputAssets, { recursive: true });
for (const asset of await readdir(sourceAssets)) {
  if (asset.endsWith(".css")) {
    await cp(path.join(sourceAssets, asset), path.join(outputAssets, asset));
  }
}
await cp(path.join(clientDirectory, "og.png"), path.join(outputDirectory, "og.png"));
await cp(
  path.join(clientDirectory, "brand-mark.png"),
  path.join(outputDirectory, "brand-mark.png"),
);
await cp(
  path.join(clientDirectory, "hero-profile.jpg"),
  path.join(outputDirectory, "hero-profile.jpg"),
);
await writeFile(path.join(outputDirectory, "index.html"), html);
await writeFile(path.join(outputDirectory, "404.html"), html);
await writeFile(path.join(outputDirectory, ".nojekyll"), "");

console.log(`GitHub Pages export created for ${pagesUrl}/`);
