import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
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
}

test("server-renders the Canyon & Vine concept site", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Canyon &amp; Vine Electrology \| American Canyon, CA<\/title>/i);
  assert.match(html, /Opening after California licensure/);
  assert.match(html, /Feel at home/);
  assert.match(html, /Consultation &amp; test session/);
  assert.match(html, /Gender-affirming care/);
  assert.match(html, /Grooming &amp; active lifestyles/);
  assert.match(html, /Microbiology from UC Davis/);
  assert.match(html, /California Electrology Academy/);
  assert.match(html, /Pre-opening concept · Booking opens after licensure/);
  assert.match(html, /name="robots" content="noindex, nofollow"/i);
  assert.doesNotMatch(
    html,
    /codex-preview|react-loading-skeleton|bikini|intimate|pre-operative|surgeon|surgical clearance/i,
  );
});

test("removes starter preview code and dependency", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /Canyon &amp; Vine/);
  assert.match(layout, /robots:/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.doesNotMatch(page, /SkeletonPreview|codex-preview/);
  assert.doesNotMatch(layout, /Starter Project|codex-preview/);

  await assert.rejects(
    access(new URL("../app/_sites-preview/SkeletonPreview.tsx", import.meta.url)),
  );
});
