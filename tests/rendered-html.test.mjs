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

test("server-renders the launch-ready Canyon & Vine site", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Canyon &amp; Vine Electrology \| American Canyon, CA<\/title>/i);
  assert.match(html, /Now welcoming clients/);
  assert.match(html, /Feel at home/);
  assert.match(html, /Consultation &amp; test session/);
  assert.match(html, /Gender-affirming care/);
  assert.match(html, /Grooming &amp; active lifestyles/);
  assert.match(html, /Microbiology from UC Davis/);
  assert.match(html, /California Electrology Academy/);
  assert.match(html, /California-licensed electrologist/);
  assert.match(html, /American Canyon · By appointment/);
  assert.match(html, /License # \[ADD NUMBER\]/);
  assert.match(html, /Intimate-area services are not offered/);
  assert.match(html, /Three forms of electrolysis/);
  assert.match(
    html,
    /rel="canonical" href="https:\/\/tycheventuresllc\.com\/canyon-and-vine-electrology\/"/i,
  );
  assert.doesNotMatch(html, /name="robots" content="noindex, nofollow"/i);
  assert.doesNotMatch(html, /nofollow/i);
  assert.doesNotMatch(
    html,
    /codex-preview|react-loading-skeleton|bikini|pre-operative|surgeon|surgical clearance|license · Pending|opening after licensure|Coming Spring 2027|future studio|planned services|At opening/i,
  );
});

test("removes starter preview code and dependency", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /Canyon &amp; Vine/);
  assert.doesNotMatch(layout, /robots:/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.doesNotMatch(page, /SkeletonPreview|codex-preview/);
  assert.doesNotMatch(layout, /Starter Project|codex-preview/);

  await assert.rejects(
    access(new URL("../app/_sites-preview/SkeletonPreview.tsx", import.meta.url)),
  );
});
