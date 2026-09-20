# Handoff: Harsha Kalbalia — Portfolio site

## Overview

A single-page portfolio for Harsha Kalbalia (product marketing + GTM for technical products). One route, four sections — hero, Work, Things Built, About / Let's Connect — plus an in-page router that swaps the Work section between three views: company list, company detail, and individual case study. Seven case studies across three companies (Datazip/OLake, Money Club/Vrddi, Mudrex/WAGMI), a five-filter taxonomy over those cases, and four side-project cards.

The design is finished and signed off. The job now is deployment.

## About the design files

`src/` holds the working design, built in HTML as a Design Component (`.dc.html`). It is a **design reference and a runnable prototype**, not production code to copy verbatim. Two legitimate paths:

**A. Ship it as a static site (fastest).** It already runs from a plain static host. See *Deployment path A*.

**B. Rebuild in a framework.** If this becomes part of a larger codebase, recreate the markup in React/Next/Astro using the exact values in *Design tokens* and the section-by-section spec below. See *Deployment path B*.

Recommendation: **A** for launch, **B** only if a CMS or blog gets added later.

## Fidelity

**High fidelity.** Final colors, typography, spacing, copy, responsive behavior and interactions. All copy is client-approved — do not rewrite it. All values below are exact.

---

## Deployment path A — ship the static site

### What runs today

```
src/
  Harsha Kalbalia - Portfolio.dc.html   the page (template + logic class)
  support.js                            the Design Component runtime
  mobile-preview.html                   dev-only viewport harness (do not deploy)
  assets/…                              images, video, resume PDF
```

`support.js` loads React 18.3.1, ReactDOM 18.3.1 and Babel standalone from unpkg at runtime, then compiles the component in the browser.

### Blockers to fix before production

1. **Runtime Babel compilation.** The page transpiles on load in the browser. Acceptable for a prototype, not for a production site — it costs ~1.5MB of JS and a visible compile delay on mobile. Two options:
   - **Pre-bundle**: run the page through a build step that inlines the compiled output, or
   - **Prerender to static HTML**: load the page in a headless browser, capture `document.documentElement.outerHTML` after hydration, and serve that with a small JS bundle for the interactive bits (view routing, filters, mobile menu, video). Preferred — the page is content-heavy and mostly static.
2. **Pin the CDN dependencies.** Versions are pinned, the host is not. Self-host React/ReactDOM or move to a build step; unpkg is not an SLA.
3. **Filename has spaces.** `Harsha Kalbalia - Portfolio.dc.html` must become `index.html` at the web root.
4. **No meta/social tags.** Add `<meta name="description">`, Open Graph and Twitter card tags, canonical URL, and a favicon. The `<title>` is already set: `Harsha Kalbalia · Product marketing + GTM`.
5. **No analytics.** Add whatever Harsha wants (Plausible/Fathom recommended over GA for a personal site).
6. **Fonts load from Google Fonts** (Archivo, Azeret Mono, Newsreader) with preconnect already in place. Self-host via `fontsource` if you want to drop the third-party request.

### Target: Vercel → harshakalbalia.xyz

Static deploy, no server, no database, no env vars. `src/vercel.json` is included and ready — it sets `cleanUrls`, rewrites all `/work/*` paths to `index.html` for client-side routing, caches `/assets/*` immutably for a year, keeps HTML revalidating, and adds baseline security headers.

Steps:

1. Rename the page to `index.html` at the repo root (see blocker 3), keep `support.js`, `assets/` and `vercel.json` beside it. Drop `mobile-preview.html`.
2. Push to a Git repo, import it in Vercel as a static project — no framework preset, no build command, output directory = repo root.
3. Add `harshakalbalia.xyz` and `www.harshakalbalia.xyz` as domains; redirect www → apex. HTTPS is automatic.
4. Verify the rewrites: `/work/mudrex-wagmi/crypto-credibility-students` must serve the app, not a 404.

### Asset checklist

19 assets are referenced; 14 more sit in `assets/` unused (older resolutions of the same photos). Safe to delete before deploy:

```
assets/img/harsha-speaking-markexchange-800.webp
assets/img/olake-award-800.webp
assets/img/olake-bengaluru-full-house-1200.webp
assets/img/olake-iceberg-blr-800.webp
assets/img/olake-london-meetup-800.webp
assets/img/case/crypto-campus-session-800.webp
assets/img/case/fintech-award-hca-800.webp
assets/img/case/fintech-award-sme-800.webp
assets/img/case/fintech-ui-after-800.webp
assets/img/case/fintech-ui-before-800.webp
assets/img/case/olake-auditorium-800.webp
assets/img/case/olake-san-francisco-600.webp
assets/img/case/olake-webinar-grid-1100.webp
assets/img/case/olake-webinar-grid-800.webp
```

In use:

| Asset | Where |
|---|---|
| `assets/Harsha-Kalbalia-Resume.pdf` | Hero CTA, footer |
| `assets/video/wagmi-film.mp4` (7.7MB, H.264) | WAGMI case study |
| `assets/img/olake-standing-room-800.webp` | Hero background layer 1 |
| `assets/img/case/olake-auditorium-1100.webp` | Hero background layer 2 |
| `assets/img/olake-community-night-800.webp` | Hero background layer 3, About background |
| `assets/img/olake-bengaluru-full-house-800.webp` | Company card, OLake |
| `assets/img/olake-san-francisco-800.webp` | Company card, OLake |
| `assets/img/case/olake-group-photo-800.webp` | Case ol1 |
| `assets/img/olake-iceberg-blr-1200.webp` | Case ol1 |
| `assets/img/case/olake-architecture.png` | Case ol2 |
| `assets/img/olake-london-meetup-1152.webp` | Case ol3 |
| `assets/img/case/fintech-ui-before-1576.webp` | Case mc, before |
| `assets/img/case/fintech-ui-after-1740.webp` | Case mc, after |
| `assets/img/case/fintech-award-hca-1100.webp` | Case mc |
| `assets/img/case/fintech-award-sme-1100.webp` | Case mc |
| `assets/img/moneyclub-brochure-804.webp` | Case mc |
| `assets/img/case/fintech-brochure-stack-510.webp` | Case vr |
| `assets/img/case/crypto-wagmi-poster-848.webp` | Case wg, video poster |
| `assets/img/case/crypto-campus-session-1100.webp` | Case wg |

The 7.7MB MP4 is the heaviest thing on the site. It is `preload="auto"` — consider dropping to `preload="metadata"` and/or transcoding to a ~2MB 720p H.264 + WebM pair behind a `<source>` list.

---

## Deployment path B — rebuild in a framework

The component is one class with a small state machine. Everything below is what you need to reproduce it.

### State

```js
{
  view:    "home" | "company" | "case" | "filter",
  company: "olake" | "moneyclub" | "mudrex" | null,
  caseId:  "ol1" | "ol2" | "ol3" | "mc" | "vr" | "wg" | "ge" | null,
  filter:  0..5 | null,     // index into FILTERS
  narrow:  boolean,          // matchMedia("(max-width: 820px)")
  phone:   boolean,          // matchMedia("(max-width: 640px)")
  menuOpen: boolean
}
```

Derived: `homeVisible = view !== "case" && view !== "company"`, `caseVisible = view === "case"`, `listVisible = view !== "case"`.

Transitions:

| Trigger | Result |
|---|---|
| Nav "Work" | `view: home`, clears company/case/filter, closes mobile menu, scrolls to `#work` |
| Company placard click | `view: company`, sets `company`, clears filter, scrolls to `#work` |
| Case card click | `view: case`, sets `caseId`, scrolls to top |
| Filter chip click | toggles: `view: filter` + `filter: i`, or back to `home` when re-clicked |
| "Back" inside a case | returns to `filter` view if filtering, else `company` view |
| "All work" | full reset to `home` |
| "Next story" | `view: case` with the next case id, scroll to top |
| "Next company" | `view: company` with the next company id |

Scroll behavior: view changes that stay within Work scroll to `#work` offset by −60px (sticky header); case opens scroll to top.

There is no URL routing today. **Add it** — the scheme below is decided, implement it as specified.

### URL scheme (decided)

Domain: **harshakalbalia.xyz**. Path-based, no hash, no query strings for primary views.

| View | URL |
|---|---|
| Home | `/` |
| Company | `/work/datazip-olake`, `/work/money-club-vrddi`, `/work/mudrex-wagmi` |
| Case study | `/work/<company-slug>/<case-slug>` |
| Filter | `/work?lens=positioning` (query, not path — it is a temporary lens, not a place) |
| Things Built | `/#built` (anchor, stays as-is) |
| About | `/#about` (anchor, stays as-is) |

Company slugs: `olake` → `datazip-olake`, `moneyclub` → `money-club-vrddi`, `mudrex` → `mudrex-wagmi`.

Case slugs:

```
ol1  developer-audience-from-zero
ol2  datazip-to-olake-pivot
ol3  community-led-gtm
mc   trust-gap-product-brand-gtm
vr   financial-product-buyer-story
wg   crypto-credibility-students
ge   acquisition-beyond-paid
```

Filter lens slugs: `0-to-1`, `market-entry`, `positioning`, `adoption`, `distribution`, `launches-community`.

Implementation:

1. On boot, parse `location.pathname` + `?lens=` into the initial state instead of defaulting to `home`.
2. Every state transition calls `history.pushState` with the matching URL. The scroll behavior stays exactly as it is today — URL changes must not introduce native anchor jumps.
3. Handle `popstate` so browser back/forward moves through views rather than leaving the site.
4. Unknown paths under `/work/` fall back to `/` (see `vercel.json`).
5. Set a per-view `<title>`: case studies as `<Case title> · Harsha Kalbalia`, companies as `<Company label> · Harsha Kalbalia`, home as the existing title.

### Data model

```js
CASES = [
  { id: "ol1", company: "olake" },
  { id: "ol2", company: "olake" },
  { id: "ol3", company: "olake" },
  { id: "mc",  company: "moneyclub" },
  { id: "vr",  company: "moneyclub" },
  { id: "wg",  company: "mudrex" },
  { id: "ge",  company: "mudrex" }
]

COMPANIES = [
  { id: "olake",     label: "Datazip / OLake" },
  { id: "moneyclub", label: "Money Club / Vrddi" },
  { id: "mudrex",    label: "Mudrex / WAGMI" }
]

FILTERS = [
  { label: "0→1",                  tint: "oklch(0.435 0.075 148)", cases: ["ol1","vr"] },
  { label: "Market entry",         tint: "oklch(0.455 0.085 292)", cases: ["ol2","vr"] },
  { label: "Positioning",          tint: "oklch(0.520 0.070 96)",  cases: ["ol2","mc"] },
  { label: "Adoption",             tint: "oklch(0.400 0.050 130)", cases: ["ol3","mc","ge"] },
  { label: "Distribution",         tint: "oklch(0.400 0.080 258)", cases: ["ol1","wg","ge"] },
  { label: "Launches & community", tint: "oklch(0.450 0.075 30)",  cases: ["ol3","wg"] }
]

TITLES = {
  ol1: "Building a developer audience from zero",
  ol2: "The strategic pivot from Datazip to OLake",
  ol3: "Building adoption through community-led GTM",
  mc:  "Turning a trust gap into a product, brand and GTM system",
  vr:  "Giving a financial product a clearer buyer story",
  wg:  "Making crypto credible before asking students to invest",
  ge:  "Learning how acquisition works beyond paid channels"
}
```

The tag chips printed on each case card and case header must stay in sync with `FILTERS` — a case shows exactly the filters whose `cases` array contains it. This mapping was corrected late and is client-approved; do not re-derive it.

### Sections

**Header** — sticky, `z-index: 20`, `padding: 16px clamp(20px,4vw,64px)`, background `oklch(0.172 0.020 150 / .86)` with `backdrop-filter: blur(16px)`, 1px bottom rule at `oklch(0.98 0.01 80 / .10)`. Left: wordmark in Newsreader `clamp(19px,2vw,24px)` plus a 6px terracotta dot. Right: four nav links in Azeret Mono 11px / `0.16em` / uppercase.

Under 640px the links collapse behind a 44×44 hamburger; the drawer is `flex-basis: 100%`, column, links 48px tall each, 12px type, separated from the bar by a 1px rule. Any link tap closes it.

**Hero** (`#top`) — `min-height: clamp(600px,84svh,960px)`, centered flex column, `padding: clamp(40px,6vh,76px) clamp(20px,4vw,64px) clamp(34px,5vh,60px)`. Five stacked absolute layers: three photographs with `grayscale(1) sepia(~0.3)`, `mix-blend-mode: luminosity`, radial masks and opacity keyed off a `--photo` variable (default 0.32); a radial tint; a vertical gradient scrim to the ink base. Content grid: text column `flex: 1.35 1 470px` (max 620px) and diagram column `flex: 1 1 320px` (max 460px).

Text column, top to bottom: eyebrow chip ("Product marketing + GTM for technical products"), `<h1>` in two lines — line 1 Arial 800 at `0.74em` of `clamp(30px,4.2vw,62px)`, line 2 Newsreader italic 400 at `1.22em` in `oklch(0.875 0.065 142)` — a `52ch` intro paragraph at `clamp(16px,1.35vw,18.5px)`, then two CTAs (Resumé, filled `oklch(0.375 0.070 148)`; LinkedIn, outlined) at `padding: 14px 26px`, 14.5px. Under 640px the CTAs stack full-width.

Diagram column: three labelled boxes (Product / ICP / Distribution) over a 560×188 SVG where three paths converge into one arrow, plus an "Early adoption" pill. Animated on mount by a rAF loop driving `--d` (horizontal spread, 1→0) and `--ignite` (0→1) over ~1.5s, then pointer-reactive: `--d` tracks cursor distance from the convergence point. `prefers-reduced-motion` skips straight to the settled state; a 3.2s timeout guarantees settle. Keep this — it is the signature element.

**Work** (`#work`) — h2 plus a "GTM in practice" five-step strip (Find the market → Find the wedge → Build the motion → Follow the signal → Feed it back). Then the filter panel: label, active-filter summary, "Clear" button, and six chips with an 8px tint square each. Chips are `aria-pressed` toggles, 44px tall on phone.

Below, the current view renders:
- **home** — three company placards, each a two-pane button (visual pane with gradient + diagram, text pane with title, excerpt, "Two Case Studies inside →")
- **company** / **filter** — a grid of case cards, `minmax(min(100%,420px),1fr)`
- **case** — full case study: Back / All work bar, eyebrow, big Newsreader title, deck, tag chips, then alternating prose blocks, evidence tables, figures, a dark "Why it mattered" panel, and a "Next story" card

Case-study internals use a consistent kit: section eyebrows in Azeret Mono 11.5px/700/`0.2em` with a 2px bottom border; body prose capped at `68ch`; evidence rows as a two-column grid (`minmax(min(100%,150px),1fr)`) with a mono label and a 16px value line; figures with 10.5px mono captions.

**Things Built** (`#built`) — four side projects (The Pivot, The Agent, Interface Built, A Narrative App). Grid of cards above 820px (`minmax(min(100%,290px),1fr)`), a stacked list below. Card titles Newsreader 400 at `clamp(22px,2.2vw,27px)`; the stacked variant is a flat 27px.

**About / Let's Connect** (`#about`) — ink background with a masked photograph, a Newsreader statement at `clamp(22px,2.4vw,34px)`, a filled email CTA, and a row of social buttons (LinkedIn, X, Instagram, YouTube, Résumé) at `padding: 11px 15px` with 17px inline SVG icons.

Live links: `mailto:harshakalbalia@gmail.com`, `linkedin.com/in/harsha-kalbalia`, `x.com/HKalbalia`, `instagram.com/harshaxk`, `youtube.com/@harshakalbalia`.

---

## Design tokens

Colors are authored in **oklch**. Convert with a color library if the target needs hex — do not eyeball it, the greens and plums shift badly through naive conversion.

```css
--ink:       oklch(0.235 0.014 135)   /* body text */
--ink-deep:  oklch(0.172 0.020 150)   /* hero, about, dark panels */
--ink-soft:  oklch(0.355 0.012 130)
--ivory:     oklch(0.966 0.012 88)    /* page background */
--sand:      oklch(0.938 0.018 88)    /* inset panels */
--rule:      oklch(0.874 0.014 88)    /* hairlines, card borders */
--rust:      oklch(0.435 0.075 148)
--rust-ink:  oklch(0.375 0.070 148)   /* primary action green */
--amber:     oklch(0.845 0.070 145)   /* accent 1, dark-ground text */
--plum:      oklch(0.455 0.085 292)   /* Mudrex */
--lilac:     oklch(0.902 0.032 292)
--sage:      oklch(0.906 0.030 142)
--peach:     oklch(0.944 0.020 86)
--mist:      oklch(0.912 0.020 250)   /* Money Club */
--terra:     oklch(0.605 0.135 44)    /* wordmark dot */
```

Company accents (left border, 4px, on every card): OLake `oklch(0.375 0.070 148)`, Money Club `oklch(0.400 0.080 258)`, Mudrex `oklch(0.455 0.085 292)`.

**Type.** Archivo (body, 400–900), Newsreader (display serif, 300–600 + italic), Azeret Mono (labels/UI, 400–500).

| Role | Size |
|---|---|
| Hero h1 | `clamp(30px,4.2vw,62px)`, two lines at `0.74em` and `1.22em` |
| Section h2 | `clamp(32px,4.6vw,66px)`, Newsreader 400, `-0.02em` |
| Case study title | `clamp(34px,4.8vw,64px)`, Newsreader 400 |
| Card h3 | `clamp(19px,1.7vw,25px)`, Newsreader 500–600 |
| Things Built h3 | `clamp(22px,2.2vw,27px)` (27px flat in the stacked list) |
| Body prose | `clamp(16px,1.15vw,17.5px)`, line-height 1.66 |
| Card excerpt | `clamp(15px,1vw,15px)`, line-height 1.5 |
| Section eyebrow | 11.5px, 700, `0.2em`, uppercase, Azeret Mono |
| Meta / caption | 10–10.5px, `0.06–0.18em`, uppercase, Azeret Mono |

Body copy never computes below 16px at any viewport — that floor is deliberate, hold it.

**Spacing.** Fluid throughout. Section padding `clamp(70px,9vw,130px) clamp(20px,4vw,64px)`; card padding `clamp(22px,2.4vw,32px)`; grid gaps `clamp(16px,2vw,26px)`; content max-width 1240px (1080px inside case studies).

**Borders & shadows.** 1px `--rule` hairlines; `border-radius: 2px` on buttons only, everything else square. Card hover: `translateY(-4px)` + `0 28px 52px -34px oklch(0.28 0.03 150 / .5)`, 0.25s `cubic-bezier(.2,.7,.2,1)`.

## Responsive behavior

Everything is fluid — `clamp()`, `minmax(min(100%,Npx),1fr)` grids, flex wrap. Only two hard breakpoints, both in JS via `matchMedia`:

- **820px** (`narrow`) — Things Built switches from grid to stacked list
- **640px** (`phone`) — nav collapses to hamburger, hero CTAs stack full-width, tap targets go to 44px (chips, Back / All work / Clear) and 48px (drawer links)

Verified with zero horizontal overflow at 360, 390, 412, 768 and 1024px, and at 640px and 667px viewport heights. The hero uses a min-height floor, never a fixed `vh`, so short screens just grow and scroll. `html, body { overflow-x: clip }` is the safety net — keep it (`clip`, not `hidden`; `hidden` breaks the sticky header).

`src/mobile-preview.html` is the harness used for that testing — seven preset sizes in an iframe. Useful during the port, not for deploy.

## Accessibility notes

Already handled: `aria-pressed` on filter chips, `aria-label` on icon links and the menu button, `aria-expanded` on the menu, `aria-hidden` on decorative SVG, `alt` text on all photographs, `prefers-reduced-motion` honored by the hero animation and flow dashes.

Worth adding during the port: visible focus rings (currently browser default on a light ground), a skip-to-content link, and `aria-live` on the Work region so filter changes are announced.

## Known gaps

1. No URL routing — case studies are not linkable or shareable. Highest-priority fix.
2. No sitemap or robots.txt. With the routing above, generate a sitemap listing `/` plus the ten `/work/…` URLs.
3. The Résumé PDF is served from `assets/` with no cache-busting; if Harsha updates it, filenames should be versioned.
4. Video is unoptimized (7.7MB, single source, `preload="auto"`).
5. The hero's three photo layers are full-size webp loaded eagerly as CSS backgrounds — they gate LCP. Consider `<link rel="preload">` on the primary layer and smaller variants for mobile.

## Files

```
src/Harsha Kalbalia - Portfolio.dc.html   the design — template (markup) + logic class at the bottom
src/support.js                            Design Component runtime (React + Babel loader)
src/mobile-preview.html                   viewport harness, dev only — do not deploy
src/vercel.json                           Vercel config: clean URLs, SPA rewrites, cache + security headers
src/assets/                               all images, video, resume PDF
```

Open `src/Harsha Kalbalia - Portfolio.dc.html` directly in a browser to see it running.
