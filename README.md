# Fotograaf Peter — Astro site

Productie-klare website voor **Fotograaf Peter** (Peter Rutgers Media, Nijverdal).
Gebouwd met [Astro 5](https://astro.build), volledig statisch, SEO-first.

> **Tagline:** Beleef jouw moment.
> **URL:** https://www.fotograafpeter.nl

---

## Wat zit er in

**24 pagina's**, allemaal statisch gegenereerd:

### Hoofdmenu (7)
- `/` — Home
- `/over-peter/` — Over Peter
- `/bedrijfsfotografie/` — Bedrijfsfotografie
- `/personal-branding/` — Personal Branding
- `/reclamefotografie/` — Reclamefotografie
- `/honden/` — Hondenfotografie
- `/contact/` — Contact

### Landingspagina's voor lokale SEO (12)
Verborgen uit hoofdmenu, zichtbaar in footer onder "Alle pagina's bekijken".
Wel volledig geïndexeerd door zoekmachines.

- `/landingspaginas/fotograaf-nijverdal/`
- `/landingspaginas/bedrijfsfotograaf-nijverdal/`
- `/landingspaginas/personal-branding-fotograaf-nijverdal/`
- `/landingspaginas/reclamefotograaf-nijverdal/`
- `/landingspaginas/fotograaf-hellendoorn/`
- `/landingspaginas/fotograaf-wierden/`
- `/landingspaginas/fotograaf-rijssen/`
- `/landingspaginas/fotograaf-almelo/`
- `/landingspaginas/fotograaf-twente/`
- `/landingspaginas/fotograaf-overijssel/`
- `/landingspaginas/zakelijk-fotograaf-twente/`
- `/landingspaginas/hondenfotograaf-twente/`

### Juridisch (4) + 404
- `/algemene-voorwaarden/`
- `/privacybeleid/`
- `/cookiebeleid/`
- `/disclaimer/`
- `/404` (custom)

---

## SEO-aanpak

Alles ingericht voor (1) lokale Google-zoekresultaten in Nijverdal/Twente/Overijssel
en (2) zichtbaarheid in AI-tools (ChatGPT, Perplexity, Claude):

- **Volledige JSON-LD** op iedere pagina: `LocalBusiness` + `ProfessionalService` +
  `Photograph` schema met geo-coördinaten, adres, openingstijden en serviceArea.
- **FAQPage structured data** op homepage, dienstpagina's en alle landingspagina's
  — cruciaal voor AI-tools die FAQ's gebruiken om vragen te beantwoorden.
- **Service schema** per dienst- en landingspagina, gekoppeld aan de hoofd-`LocalBusiness`.
- **Person schema** op de Over Peter-pagina.
- **BreadcrumbList** op alle subpagina's.
- **Geo-tags** (`geo.region`, `geo.placename`, `geo.position`, `ICBM`) voor lokale SEO.
- **Open Graph + Twitter Cards** met custom OG-image.
- **hreflang `nl-NL`** + `x-default`.
- **Sitemap** automatisch gegenereerd (`/sitemap-index.xml`).
- **robots.txt** met expliciete `Allow` voor AI-crawlers
  (GPTBot, ChatGPT-User, PerplexityBot, ClaudeBot, OAI-SearchBot, Google-Extended, Applebot-Extended).
- **Canonical URLs** op iedere pagina, gegenereerd uit het pad.

---

## Lokaal draaien

Je hebt **Node.js 20 of hoger** nodig. Check met `node -v`.

```bash
# 1. Dependencies installeren
npm install

# 2. Dev-server starten (live reload, op http://localhost:4321)
npm run dev

# 3. Productie-build maken (output in dist/)
npm run build

# 4. Productie-build lokaal previewen
npm run preview
```

Alles wat in `dist/` belandt is volledig statisch en kan op elke hosting draaien.

---

## Deployen

De site is volledig statisch — geen server, geen database, geen onderhoud.
Drie populaire opties (allemaal gratis voor dit verkeersvolume):

### Optie 1: Cloudflare Pages (aanbevolen, snelste CDN)
1. Push de map naar een Git-repo (GitHub/GitLab).
2. Ga naar [pages.cloudflare.com](https://pages.cloudflare.com) → Create a project.
3. Verbind de repo.
4. Build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** `20` (in environment variables: `NODE_VERSION=20`)
5. Voeg het custom domein `fotograafpeter.nl` toe via Custom domains.

### Optie 2: Netlify
1. Sleep de `dist/` map op [app.netlify.com/drop](https://app.netlify.com/drop) voor een
   instant deploy. Of:
2. Verbind je Git-repo via Netlify dashboard.
3. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`

### Optie 3: Vercel
1. Push naar Git, importeer in [vercel.com](https://vercel.com).
2. Vercel detecteert Astro automatisch. Niets extra in te stellen.

### Custom domein
Voor `fotograafpeter.nl`: zet een **CNAME** (subdomein) of **A-record** (apex)
naar de hosting volgens hun documentatie. SSL wordt automatisch geregeld.

---

## Aanpassingen maken

### Bedrijfsgegevens, openingstijden, NAW
Eén bestand: **`src/config.ts`**.
Alles wat daar staat (telefoon, e-mail, adres, KvK, BTW, openingstijden, werkgebied)
wordt overal op de site én in de structured data gebruikt.

### Hoofdmenu aanpassen
In `src/config.ts` → `MAIN_MENU` array.

### Nieuwe landingspagina toevoegen
**Twee stappen, geen nieuw bestand:**

1. Voeg een entry toe in `src/data/landings.ts`:
```ts
{
  slug: 'fotograaf-deventer',
  city: 'Deventer',
  region: 'Overijssel',
  service: 'Fotograaf',
  title: 'Fotograaf Deventer | Bedrijf & Personal Branding',
  description: 'Fotograaf in Deventer voor ...',
  h1: 'Fotograaf Deventer',
  intro: 'Vanuit Nijverdal werk ik regelmatig in Deventer...',
  primaryService: 'algemeen',
}
```

2. Voeg een entry toe in `src/config.ts` → `LANDING_PAGES` array, zodat hij in de
   footer verschijnt:
```ts
{
  label: 'Fotograaf Deventer',
  href: '/landingspaginas/fotograaf-deventer/',
  description: 'Fotograaf voor bedrijven in Deventer.',
},
```

Run `npm run build` en de pagina is live met eigen URL, eigen JSON-LD,
eigen FAQ, eigen canonical, en automatisch in de sitemap.

### Tekst op een bestaande pagina aanpassen
Open het bijbehorende bestand in `src/pages/` (bijvoorbeeld
`bedrijfsfotografie.astro`) en wijzig de tekst. Sparen, build draaien, klaar.

### Kleuren / typografie aanpassen
Alle design tokens (kleuren, fonts, spacing) staan bovenaan in
`src/styles/global.css`. Eén plek aanpassen = overal aangepast.

### Logo / favicon vervangen
Vervang de bestanden in `public/`:
- `favicon.svg` (64x64)
- `apple-touch-icon.png` (180x180)
- `og-default.jpg` (1200x630, voor social previews)
- `logo.svg`

### Foto's toevoegen
Plaats je foto's in `public/images/` en verwijs ernaar als `/images/foto.jpg`.
Voor optimalisatie kun je Astro's [Image component](https://docs.astro.build/en/guides/images/)
gebruiken — dan moet `src/assets/` gebruiken in plaats van `public/`.

---

## Projectstructuur

```
fotograafpeter/
├─ public/                    Statische bestanden (favicon, OG-image, robots.txt)
│  ├─ favicon.svg
│  ├─ apple-touch-icon.png
│  ├─ og-default.jpg
│  ├─ logo.svg
│  └─ robots.txt
├─ src/
│  ├─ components/             Herbruikbare onderdelen
│  │  ├─ Header.astro
│  │  ├─ Footer.astro
│  │  ├─ Hero.astro
│  │  ├─ ServiceGrid.astro
│  │  ├─ Faq.astro            ← genereert automatisch FAQPage JSON-LD
│  │  ├─ PageHeader.astro
│  │  └─ CtaBlock.astro
│  ├─ data/
│  │  └─ landings.ts          ← inhoud van alle landingspagina's
│  ├─ layouts/
│  │  └─ BaseLayout.astro     ← SEO meta + structured data
│  ├─ pages/                  ← elke .astro = een URL
│  │  ├─ index.astro
│  │  ├─ over-peter.astro
│  │  ├─ bedrijfsfotografie.astro
│  │  ├─ personal-branding.astro
│  │  ├─ reclamefotografie.astro
│  │  ├─ honden.astro
│  │  ├─ contact.astro
│  │  ├─ 404.astro
│  │  ├─ algemene-voorwaarden.astro
│  │  ├─ privacybeleid.astro
│  │  ├─ cookiebeleid.astro
│  │  ├─ disclaimer.astro
│  │  └─ landingspaginas/
│  │     └─ [slug].astro      ← genereert alle 12 landingspagina's
│  ├─ styles/
│  │  └─ global.css           ← design system (kleuren, fonts, tokens)
│  └─ config.ts               ← centrale config (NAW, menu, landingspagina's)
├─ astro.config.mjs
├─ package.json
├─ tsconfig.json
└─ README.md (dit bestand)
```

---

## Na de eerste publicatie

Een paar nuttige acties om de SEO een vliegende start te geven:

1. **Google Search Console** — verifieer het domein en upload je sitemap
   (`https://www.fotograafpeter.nl/sitemap-index.xml`).
2. **Bing Webmaster Tools** — idem, dit is óók de bron voor ChatGPT Search.
3. **Google Business Profile** — zorg dat NAW, openingstijden en categorie
   identiek zijn aan wat in `src/config.ts` staat. Consistentie = beter
   lokaal indexeren.
4. **Schema-validatie** — test je pagina's via
   [validator.schema.org](https://validator.schema.org) of
   [Rich Results Test](https://search.google.com/test/rich-results) om te
   bevestigen dat alle JSON-LD groen is.
5. **Backlinks** — vraag samenwerkings­partners (lokale bedrijven die je
   gefotografeerd hebt) of ze willen linken naar je site. Voor lokale SEO is
   dit de sterkste hefboom.

---

## Performance & toegankelijkheid

De site is bewust minimaal:

- Geen JavaScript-frameworks op runtime (alleen klein vanilla JS voor menu/expand).
- Geen tracking, geen analytics by default (zet zelf in als je dat wilt).
- Geen externe afhankelijkheden behalve Google Fonts (preconnect ingesteld).
- Lazy loading van afbeeldingen (zodra je ze toevoegt).
- `prefers-reduced-motion` gerespecteerd.
- Semantische HTML (h1-hierarchie, landmark roles, skip-link).

Verwacht Lighthouse-score: **95+ op alle assen** in productie.

---

## Vragen?

Code is bedoeld om door één persoon te kunnen onderhouden. Centrale config in
`src/config.ts`, landingspagina's in `src/data/landings.ts`, alle CSS-tokens in
`src/styles/global.css`. Drie bestanden om te kennen — de rest volgt vanzelf.

---

**Gebouwd voor Peter Rutgers Media · 2026.**
