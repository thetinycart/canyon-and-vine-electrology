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

const routes = [
  { pathname: "/", output: "index.html" },
  { pathname: "/concepts", output: "concepts/index.html" },
  {
    pathname: "/concepts/design-02",
    output: "concepts/design-02/index.html",
  },
  {
    pathname: "/concepts/design-03",
    output: "concepts/design-03/index.html",
  },
];

const workerUrl = pathToFileURL(
  path.join(projectRoot, "dist", "server", "index.js"),
);
workerUrl.searchParams.set("static-export", `${Date.now()}`);

const { default: worker } = await import(workerUrl.href);

async function renderRoute(route) {
  const response = await worker.fetch(
    new Request(`http://localhost${route.pathname}`, {
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
    throw new Error(
      `Static render failed for ${route.pathname} with status ${response.status}.`,
    );
  }

  const routePublicUrl = route.pathname === "/"
    ? `${publicSiteUrl}/`
    : `${publicSiteUrl}${route.pathname}/`;
  let html = await response.text();

  html = html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<link\b[^>]*rel=["']modulepreload["'][^>]*\/?\s*>/gi, "")
    .replaceAll('href="/assets/', `href="${basePath}/assets/`)
    .replaceAll('src="/assets/', `src="${basePath}/assets/`)
    .replaceAll('href="/concepts/', `href="${basePath}/concepts/`)
    .replaceAll('href="/"', `href="${basePath}/"`)
    .replaceAll(
      'href="/brand-mark.png?v=ee-electrolysis-20261111"',
      `href="${basePath}/brand-mark.png?v=ee-electrolysis-20261111"`,
    )
    .replaceAll(
      'href="/hero-profile.jpg?v=ee-electrolysis-20261111"',
      `href="${basePath}/hero-profile.jpg?v=ee-electrolysis-20261111"`,
    )
    .replaceAll(
      'src="/brand-mark.png?v=ee-electrolysis-20261111"',
      `src="${basePath}/brand-mark.png?v=ee-electrolysis-20261111"`,
    )
    .replaceAll(
      'src="/hero-profile.jpg?v=ee-electrolysis-20261111"',
      `src="${basePath}/hero-profile.jpg?v=ee-electrolysis-20261111"`,
    )
    .replace(
      /(<meta property="og:image" content=")[^"]+("\/?>)/,
      `$1${publicSiteUrl}/og.png?v=ee-electrolysis-20261111$2`,
    )
    .replace(
      /(<meta name="twitter:image" content=")[^"]+("\/?>)/,
      `$1${publicSiteUrl}/og.png?v=ee-electrolysis-20261111$2`,
    )
    .replace(
      /(<link rel="canonical" href=")[^"]+("\/?>)/,
      `$1${routePublicUrl}$2`,
    );

  return html;
}

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
let rootHtml = "";
for (const route of routes) {
  const html = await renderRoute(route);
  const outputPath = path.join(outputDirectory, route.output);
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, html);
  if (route.pathname === "/") {
    rootHtml = html;
  }
}

await writeFile(path.join(outputDirectory, "404.html"), rootHtml);
await writeFile(path.join(outputDirectory, ".nojekyll"), "");

console.log(
  `GitHub Pages export created for ${pagesUrl}/ (${routes.length} routes).`,
);
