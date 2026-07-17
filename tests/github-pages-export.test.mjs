import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const expectedUrl =
  "https://thetinycart.github.io/canyon-and-vine-electrology";

test("exports a self-contained GitHub Pages site", async () => {
  const html = await readFile(
    new URL("../github-pages/index.html", import.meta.url),
    "utf8",
  );

  assert.match(html, /Coming Spring 2027/);
  assert.match(
    html,
    /href="\/canyon-and-vine-electrology\/assets\/index-[^"]+\.css"/,
  );
  assert.match(html, new RegExp(`${expectedUrl}/og\\.png`));
  assert.match(html, new RegExp(`rel="canonical" href="${expectedUrl}/"`));
  assert.doesNotMatch(html, /<script\b/i);
  assert.doesNotMatch(html, /rel="modulepreload"/i);
  assert.doesNotMatch(html, /(?:href|src)="\/assets\//);

  await Promise.all([
    access(new URL("../github-pages/og.png", import.meta.url)),
    access(new URL("../github-pages/.nojekyll", import.meta.url)),
  ]);
});
