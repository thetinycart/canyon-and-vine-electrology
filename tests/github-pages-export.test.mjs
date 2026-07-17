import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const expectedUrl =
  "https://tycheventuresllc.com/canyon-and-vine-electrology";

test("exports a self-contained GitHub Pages site", async () => {
  const html = await readFile(
    new URL("../github-pages/index.html", import.meta.url),
    "utf8",
  );

  assert.match(html, /Now welcoming clients/);
  assert.match(html, /Ever Green Electrology/);
  assert.doesNotMatch(html, /Canyon &amp; Vine|Canyon and Vine|>CV</);
  assert.match(
    html,
    /href="\/canyon-and-vine-electrology\/assets\/index-[^"]+\.css"/,
  );
  assert.match(html, new RegExp(`${expectedUrl}/og\\.png`));
  assert.match(html, new RegExp(`rel="canonical" href="${expectedUrl}/"`));
  assert.match(
    html,
    new RegExp(`name="twitter:image" content="${expectedUrl}/og\\.png"`),
  );
  assert.equal((html.match(/rel="canonical"/g) ?? []).length, 1);
  assert.doesNotMatch(html, /<script\b/i);
  assert.doesNotMatch(html, /rel="modulepreload"/i);
  assert.doesNotMatch(html, /(?:href|src)="\/assets\//);
  assert.doesNotMatch(html, /name="robots" content="noindex, nofollow"/i);
  assert.doesNotMatch(html, /nofollow/i);
  assert.doesNotMatch(
    html,
    /thetinycart\.github\.io|canyon-and-vine-electrology\.sukhpalc\.chatgpt\.site/i,
  );

  await Promise.all([
    access(new URL("../github-pages/og.png", import.meta.url)),
    access(new URL("../github-pages/.nojekyll", import.meta.url)),
  ]);
});
