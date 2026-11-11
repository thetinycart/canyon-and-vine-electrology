import assert from "node:assert/strict";
import { createHash } from "node:crypto";
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
  assert.match(html, /Evergreen Electrolysis/);
  assert.doesNotMatch(html, /Ever Green/);
  assert.doesNotMatch(html, /Canyon &amp; Vine|Canyon and Vine|>CV</);
  assert.match(
    html,
    /href="\/canyon-and-vine-electrology\/assets\/index-[^"]+\.css"/,
  );
  assert.match(
    html,
    /src="\/canyon-and-vine-electrology\/brand-mark\.png\?v=ee-electrolysis-20261111"/,
  );
  assert.match(
    html,
    /src="\/canyon-and-vine-electrology\/hero-profile\.jpg\?v=ee-electrolysis-20261111"/,
  );
  assert.doesNotMatch(
    html,
    /(?:href|src)="\/(?:brand-mark\.png|hero-profile\.jpg)(?:\?[^\"]*)?"/,
  );
  assert.match(
    html,
    new RegExp(`${expectedUrl}/og\\.png\\?v=ee-electrolysis-20261111`),
  );
  assert.match(html, new RegExp(`rel="canonical" href="${expectedUrl}/"`));
  assert.match(
    html,
    new RegExp(
      `name="twitter:image" content="${expectedUrl}/og\\.png\\?v=ee-electrolysis-20261111"`,
    ),
  );
  assert.match(html, /width="1003" height="1568"/);
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
    access(new URL("../github-pages/brand-mark.png", import.meta.url)),
    access(new URL("../github-pages/hero-profile.jpg", import.meta.url)),
    access(new URL("../github-pages/.nojekyll", import.meta.url)),
  ]);

  const [
    publicMark,
    exportedMark,
    publicHero,
    exportedHero,
    publicOg,
    exportedOg,
  ] = await Promise.all([
    readFile(new URL("../public/brand-mark.png", import.meta.url)),
    readFile(new URL("../github-pages/brand-mark.png", import.meta.url)),
    readFile(new URL("../public/hero-profile.jpg", import.meta.url)),
    readFile(new URL("../github-pages/hero-profile.jpg", import.meta.url)),
    readFile(new URL("../public/og.png", import.meta.url)),
    readFile(new URL("../github-pages/og.png", import.meta.url)),
  ]);
  const hash = (value) => createHash("sha256").update(value).digest("hex");

  assert.equal(hash(exportedMark), hash(publicMark));
  assert.equal(hash(exportedHero), hash(publicHero));
  assert.equal(hash(exportedOg), hash(publicOg));
  assert.equal(publicMark.readUInt32BE(16), 512);
  assert.equal(publicMark.readUInt32BE(20), 512);
  assert.equal(publicOg.readUInt32BE(16), 1731);
  assert.equal(publicOg.readUInt32BE(20), 909);
  assert.deepEqual([...publicHero.subarray(0, 3)], [0xff, 0xd8, 0xff]);
  assert.deepEqual([...publicHero.subarray(-2)], [0xff, 0xd9]);
});

test("exports the concepts index and alternate design without replacing the homepage", async () => {
  const [home, concepts, alternate] = await Promise.all([
    readFile(new URL("../github-pages/index.html", import.meta.url), "utf8"),
    readFile(new URL("../github-pages/concepts/index.html", import.meta.url), "utf8"),
    readFile(
      new URL("../github-pages/concepts/design-02/index.html", import.meta.url),
      "utf8",
    ),
  ]);

  assert.match(home, /Feel at home/);
  assert.match(concepts, /Classic Monochrome/);
  assert.match(concepts, /Wine Country Journal/);
  assert.match(alternate, /A quieter way/);
  assert.match(alternate, /Before your visit/);
  assert.match(
    concepts,
    /href="\/canyon-and-vine-electrology\/concepts\/design-02\/"/,
  );
  assert.match(
    alternate,
    /rel="canonical" href="https:\/\/tycheventuresllc\.com\/canyon-and-vine-electrology\/concepts\/design-02\/"/,
  );

  for (const html of [concepts, alternate]) {
    assert.doesNotMatch(html, /<script\b/i);
    assert.doesNotMatch(html, /rel="modulepreload"/i);
    assert.doesNotMatch(html, /(?:href|src)="\/assets\//);
  }
});
