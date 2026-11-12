import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
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

test("server-renders the launch-ready Evergreen Electrolysis site", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Evergreen Electrolysis \| American Canyon, CA<\/title>/i);
  assert.doesNotMatch(html, /Ever Green/);
  assert.match(html, /Now welcoming clients/);
  assert.match(html, /Feel at home/);
  assert.match(html, /Consultation &amp; test session/);
  assert.match(html, /Personalized treatment plans/);
  assert.match(html, /Grooming &amp; active lifestyles/);
  assert.match(html, /Microbiology from UC Davis/);
  assert.match(html, /California Electrology Academy/);
  assert.match(html, /California-licensed electrologist/);
  assert.match(html, /American Canyon · By appointment/);
  assert.match(html, /License # \[ADD NUMBER\]/);
  assert.match(html, /Intimate-area services are not offered/);
  assert.match(html, /Three forms of electrolysis/);
  assert.match(html, /Results and treatment timelines vary by individual/);
  assert.match(html, /Compare website designs/);
  assert.match(
    html,
    /rel="canonical" href="https:\/\/tycheventuresllc\.com\/canyon-and-vine-electrology\/"/i,
  );
  assert.doesNotMatch(html, /name="robots" content="noindex, nofollow"/i);
  assert.doesNotMatch(html, /nofollow/i);
  assert.doesNotMatch(
    html,
    /gender[ -]affirming|inclusive|every identity|never gendered|without assumptions|without judgment/i,
  );
  assert.doesNotMatch(
    html,
    /codex-preview|react-loading-skeleton|bikini|pre-operative|surgeon|surgical clearance|license · Pending|opening after licensure|Coming Spring 2027|future studio|planned services|At opening/i,
  );
});

test("uses the finished Evergreen Electrolysis brand and monochrome design system", async () => {
  const [page, layout, styles, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /Evergreen/);
  assert.doesNotMatch(page, /Ever Green/);
  assert.match(page, /src="\/brand-mark\.png\?v=ee-electrolysis-20261111"/);
  assert.match(page, /src="\/hero-profile\.jpg\?v=ee-electrolysis-20261111"/);
  assert.doesNotMatch(page, /Canyon &amp; Vine|Canyon and Vine|>CV</);
  assert.match(styles, /--ink: #0a0a0a/);
  assert.match(styles, /--paper: #fdfdfb/);
  assert.match(styles, /\.brand-mark-image\s*\{/);
  assert.match(styles, /\.hero-photo\s*\{/);
  assert.doesNotMatch(styles, /\.hero-orbit|\.hero-center|clip-path: polygon\(/);
  assert.doesNotMatch(styles, /#b15f64|#8f464d|#f2d9d3|#efc9c3|#d9918f|#ad5b62/i);
  assert.doesNotMatch(layout, /robots:/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.doesNotMatch(page, /SkeletonPreview|codex-preview/);
  assert.doesNotMatch(layout, /Starter Project|codex-preview/);

  await assert.rejects(
    access(new URL("../app/_sites-preview/SkeletonPreview.tsx", import.meta.url)),
  );
});

test("preserves the original homepage and renders the design archive and alternate", async () => {
  const [conceptsResponse, alternateResponse, flagshipResponse, quietResponse] = await Promise.all([
    render("/concepts"),
    render("/concepts/design-02"),
    render("/concepts/design-03"),
    render("/concepts/design-04"),
  ]);

  assert.equal(conceptsResponse.status, 200);
  assert.equal(alternateResponse.status, 200);
  assert.equal(flagshipResponse.status, 200);
  assert.equal(quietResponse.status, 200);

  const [concepts, alternate, flagship, quiet] = await Promise.all([
    conceptsResponse.text(),
    alternateResponse.text(),
    flagshipResponse.text(),
    quietResponse.text(),
  ]);

  assert.match(concepts, /Website Design Concepts \| Evergreen Electrolysis/);
  assert.match(concepts, /Classic Monochrome/);
  assert.match(concepts, /Wine Country Journal/);
  assert.match(concepts, /Portrait of Precision/);
  assert.match(concepts, /The Quiet Practice/);
  assert.match(concepts, /New concepts are added without replacing earlier versions/);

  assert.match(alternate, /Wine Country Journal \| Evergreen Electrolysis/);
  assert.match(alternate, /A quieter way/);
  assert.match(alternate, /Before your visit/);
  assert.match(alternate, /After your visit/);
  assert.match(alternate, /Intimate areas are not offered/);
  assert.match(alternate, /Results and treatment timelines vary by individual/);
  assert.doesNotMatch(
    alternate,
    /gender[ -]affirming|inclusive|every identity|never gendered|without assumptions|without judgment/i,
  );

  assert.match(flagship, /Portrait of Precision \| Evergreen Electrolysis/);
  assert.match(flagship, /Precisely/);
  assert.match(flagship, /Start where you are/);
  assert.match(flagship, /The Evergreen standard/);
  assert.match(flagship, /Microbiology from UC Davis/);
  assert.match(flagship, /California Electrology Academy/);
  assert.match(flagship, /Results and treatment timelines vary by individual/);
  assert.match(
    flagship,
    /rel="canonical" href="https:\/\/tycheventuresllc\.com\/canyon-and-vine-electrology\/concepts\/design-03\/"/i,
  );

  assert.match(quiet, /The Quiet Practice \| Evergreen Electrolysis/);
  assert.match(quiet, /Permanent hair removal/);
  assert.match(quiet, /A plan made for you/);
  assert.match(quiet, /What would you like to focus on/);
  assert.match(quiet, /Meet Nav/);
  assert.match(quiet, /Concept preview: appointment requests are not sent/);
  assert.doesNotMatch(quiet, /hello@example\.com|\(707\) 555|href="tel:/i);
  assert.match(quiet, /name="robots" content="noindex, follow"/i);
  assert.match(quiet, /Concept preview: a restrained, photograph-led direction/i);
  assert.match(quiet, /property="og:url" content="https:\/\/tycheventuresllc\.com\/canyon-and-vine-electrology\/concepts\/design-04\/"/i);
  assert.match(quiet, /width="1586" height="992"/i);
  assert.match(
    quiet,
    /rel="canonical" href="https:\/\/tycheventuresllc\.com\/canyon-and-vine-electrology\/concepts\/design-04\/"/i,
  );
});
