import { cp, mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
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

const { routes, preservedFiles } = JSON.parse(
  await readFile(new URL("./export-manifest.json", import.meta.url), "utf8"),
);

// Published pages and their original styles remain byte-for-byte immutable.
// Fail before exporting if an earlier concept or its source has changed.
for (const [file, expected] of Object.entries(preservedFiles)) {
  const actual = createHash("sha256").update(await readFile(path.join(projectRoot, file))).digest("hex");
  if (actual !== expected) throw new Error(`Published concept changed: ${file}`);
}

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
  const routeSocialImage = route.pathname === "/concepts/design-05"
    ? `${publicSiteUrl}/everyday-edit-portrait.jpg`
    : route.pathname === "/concepts/design-04"
    ? `${publicSiteUrl}/quiet-practice-hero.jpg?v=d04-20261111`
    : `${publicSiteUrl}/og.png?v=ee-electrolysis-20261111`;
  let html = await response.text();

  html = html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<link\b[^>]*rel=["']modulepreload["'][^>]*\/?\s*>/gi, "")
    .replaceAll('href="/assets/', `href="${basePath}/assets/`)
    .replaceAll('src="/assets/', `src="${basePath}/assets/`)
    .replaceAll('href="/concepts/', `href="${basePath}/concepts/`)
    .replaceAll('href="/"', `href="${basePath}/"`)
    .replaceAll('src="/everyday-edit-portrait.jpg"', `src="${basePath}/everyday-edit-portrait.jpg"`)
    .replaceAll('href="/everyday-edit-portrait.jpg"', `href="${basePath}/everyday-edit-portrait.jpg"`)
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
    .replaceAll(
      'src="/quiet-practice-hero.jpg?v=d04-20261111"',
      `src="${basePath}/quiet-practice-hero.jpg?v=d04-20261111"`,
    )
    .replaceAll(
      'href="/quiet-practice-hero.jpg?v=d04-20261111"',
      `href="${basePath}/quiet-practice-hero.jpg?v=d04-20261111"`,
    )
    .replaceAll(
      'src="/editorial-portrait-v2.jpg?v=d04-20261111"',
      `src="${basePath}/editorial-portrait-v2.jpg?v=d04-20261111"`,
    )
    .replaceAll(
      'src="/electrolysis-detail-v2.jpg?v=d04-20261111"',
      `src="${basePath}/electrolysis-detail-v2.jpg?v=d04-20261111"`,
    )
    .replace(
      /(<meta property="og:image" content=")[^"]+("\/?>)/,
      `$1${routeSocialImage}$2`,
    )
    .replace(
      /(<meta name="twitter:image" content=")[^"]+("\/?>)/,
      `$1${routeSocialImage}$2`,
    )
    .replace(
      /(<meta property="og:url" content=")[^"]+("\/?>)/,
      `$1${routePublicUrl}$2`,
    )
    .replace(
      /(<link rel="canonical" href=")[^"]+("\/?>)/,
      `$1${routePublicUrl}$2`,
    );

  return html;
}

// Keep original content-hashed CSS and fonts used by preserved HTML snapshots.
await mkdir(outputDirectory, { recursive: true });
const sourceAssets = path.join(clientDirectory, "assets");
const outputAssets = path.join(outputDirectory, "assets");
await mkdir(outputAssets, { recursive: true });
for (const asset of await readdir(sourceAssets)) {
  if (asset.endsWith(".css") || asset.endsWith(".woff2")) {
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
await cp(
  path.join(clientDirectory, "quiet-practice-hero.jpg"),
  path.join(outputDirectory, "quiet-practice-hero.jpg"),
);
await cp(
  path.join(clientDirectory, "editorial-portrait-v2.jpg"),
  path.join(outputDirectory, "editorial-portrait-v2.jpg"),
);
await cp(
  path.join(clientDirectory, "electrolysis-detail-v2.jpg"),
  path.join(outputDirectory, "electrolysis-detail-v2.jpg"),
);
await cp(
  path.join(clientDirectory, "everyday-edit-portrait.jpg"),
  path.join(outputDirectory, "everyday-edit-portrait.jpg"),
);
let rootHtml = "";
for (const route of routes) {
  const outputPath = path.join(outputDirectory, route.output);
  const html = route.preserve
    ? await readFile(outputPath, "utf8")
    : await renderRoute(route);
  await mkdir(path.dirname(outputPath), { recursive: true });
  if (!route.preserve) await writeFile(outputPath, html);
  if (route.pathname === "/") {
    rootHtml = html;
  }
}

await writeFile(path.join(outputDirectory, "404.html"), rootHtml);
await writeFile(path.join(outputDirectory, ".nojekyll"), "");

console.log(
  `GitHub Pages export created for ${pagesUrl}/ (${routes.length} routes).`,
);
