/**
 * Post-build script: zet de Astro sitemap om naar één enkele sitemap.xml.
 *
 * Astro's @astrojs/sitemap plugin maakt standaard:
 *   - dist/sitemap-index.xml  (verwijst naar sitemap-0.xml)
 *   - dist/sitemap-0.xml      (de eigenlijke URL-lijst)
 *
 * Voor een kleine site is die index overbodig en verwarrend
 * ("hij is leeg"). Dit script:
 *   1. Hernoemt sitemap-0.xml naar sitemap.xml
 *   2. Verwijdert sitemap-index.xml
 *
 * Daarna is je sitemap te bereiken op:
 *   https://www.fotograafpeter.nl/sitemap.xml
 */
import { existsSync, renameSync, unlinkSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const dist = resolve(process.cwd(), 'dist');
const indexFile = resolve(dist, 'sitemap-index.xml');
const oldSitemap = resolve(dist, 'sitemap-0.xml');
const newSitemap = resolve(dist, 'sitemap.xml');

if (!existsSync(oldSitemap)) {
  console.log('[sitemap] sitemap-0.xml niet gevonden, skip.');
  process.exit(0);
}

renameSync(oldSitemap, newSitemap);

if (existsSync(indexFile)) {
  unlinkSync(indexFile);
}

// Tel het aantal URLs zodat we feedback geven
const xml = readFileSync(newSitemap, 'utf8');
const count = (xml.match(/<loc>/g) || []).length;

console.log(`[sitemap] Klaar — ${count} URL's in dist/sitemap.xml`);
