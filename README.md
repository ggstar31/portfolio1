# Handoff: Case Study Subpages 01 to 03

Personal portfolio site, "Proof of Work" case studies. Three subpages, desktop and mobile, sharing one visual system with the existing homepage (deep plum-ink base, coral/magenta/amber gradients, Poppins + Inter + Instrument Serif).

| # | Page | Route suggestion | Desktop reference | Mobile reference |
|---|------|------------------|-------------------|------------------|
| 01 | Developer GTM (OLake by Datazip) | `/work/developer-gtm` | `reference/01-olake-developer-gtm-desktop.html` | `reference/01-olake-developer-gtm-mobile.html` |
| 02 | Fintech PMM (The Money Club) | `/work/fintech-pmm` | `reference/02-fintech-pmm-desktop.html` | `reference/02-fintech-pmm-mobile.html` |
| 03 | Crypto Growth (Mudrex) | `/work/crypto-growth` | `reference/03-crypto-growth-desktop.html` | `reference/03-crypto-growth-mobile.html` |

## About the reference files
They are **design references written in HTML**, produced in a design tool with a custom runtime (`support.js`, not included and not needed). They are not production code. Recreate the designs in this repo's existing stack, framework and component patterns. Ignore these runtime constructs when reading them:

- `<x-dc>`, `<helmet>`, `<script data-dc-script>` wrappers: document scaffolding.
- `style-hover="…"`: a CSS `:hover` rule.
- `<sc-if value="{{ open }}">…</sc-if>`: conditional render, shown only when `open` is true.
- `{{ toggle }}` on `onClick`: the story toggle handler.
- `data-screen-label`: authoring metadata, drop it.
- Image paths point at `uploads/…`; use the renamed files in `assets/` instead (map below).

Everything else (markup structure, inline styles, copy) is literal and final.

## Fidelity
**High fidelity.** Match colors, type, spacing and copy exactly. All copy is approved: do not rewrite it. **No em dashes anywhere in copy** (the references contain none; keep it that way).

## Homepage copy change (apply while you are in there)
On the homepage, the OLake entry must not name the investor explicitly. Replace any "Elevation Capital" mention beside OLake with:

> Backed by one of India's largest VCs (AUM $900M+)

The subpages already use the bracketed form and need no change.

---

# Shared page anatomy

All three pages are the same skeleton, so build it once and vary the content:

1. **Hero** — full-bleed section. A photo sits behind the copy at low opacity under a dark gradient that fades into the page background. There is never a separate hero image below the copy.
2. **TL;DR card** — narrow column (880px), one paragraph plus a 3-cell proof strip.
3. **Workstreams** — three vertical cards on desktop, a horizontal swipe row on mobile.
4. **Signature block** — one diagram or comparison per page (flywheel / before-after / three-way economics).
5. **Biggest learning** — amber-tinted band with a serif italic line.
6. **Full story** — collapsed by default, expands to an editorial article.
7. **Media** — collage or video, page specific.
8. **CTAs** — two ghost pills linking to the other two case studies.

## Desktop layout constants
- Content column `max-width: 1100px; margin: 0 auto; padding: 0 40px`; TL;DR uses 880px.
- Section rhythm: `padding-top: 110px`; last section `padding-bottom: 130px`.
- Hero inner padding `40px 40px 96px`; back link at top, 88px gap, then the copy stack.
- Kicker style (used for every section label): Poppins 600, 12px, letter-spacing 0.22em, uppercase, `#FF8A6B`.
- H1 64px Poppins 700, line-height 1.05, letter-spacing -0.02em; the second word carries gradient text `linear-gradient(115deg, #FF6B4A 20%, #E0417F 80%)` clipped to text.
- Standfirst: Instrument Serif italic 28px `#E3D5E8`, max-width 620px.
- Meta: company name Poppins 600 19px with the bracketed investor line inline at Inter 400 15px `#C9BBD4`; second line role and dates, 13.5px 500 `#B3A2BE`.
- Section H2 28px Poppins 700.

## Mobile layout constants (design width 390px, breakpoint ~768px)
- Content padding 22px; sections spaced 64px; last section bottom padding 90px.
- H1 42px, standfirst 21px, kickers 11px, section H2 22px.
- Meta stacks on three lines (company / bracketed investor / role and dates).
- Every tap target at least 44px; the story button is full width, min-height 48px.
- **Workstreams become a horizontal swipe row**: `overflow-x: auto`, `scroll-snap-type: x mandatory`, hidden scrollbars, cards `flex: 0 0 280px` with `scroll-snap-align: start`, gap 14px, row padded 22px so the next card peeks. Below it a 3-segment pager (active 16x3px coral, inactive 6x3px `rgba(255,255,255,0.18)`), active segment following scroll position.
- Tablet: keep the desktop layout down to roughly 900px, then switch to the mobile patterns.

## Component recipes

**Hero backdrop.** Absolutely positioned `<img>` covering the section (`object-fit: cover`), opacity 0.4 to 0.42, `filter: saturate(0.9)` (page 02 adds `blur(3px)` because the source is a text-heavy brochure, and insets the image `-6%` at `112%` size so the blur has no visible edge). Over it: `linear-gradient(180deg, rgba(23,15,28,0.72-0.78) 0%, rgba(23,15,28,0.82-0.88) 55%, #170F1C 100%)`. Copy sits above both.

**TL;DR card.** Surface `#1E1426`, 1px border `rgba(255,255,255,0.09)`, radius 18px, padding 36px 42px. Header row: "TL;DR" kicker at 11.5px plus a hairline filling the rest (`linear-gradient(90deg, rgba(255,107,74,0.4), rgba(255,255,255,0.06))`). Body 16.5px/1.75 `#DCCFE3` with key figures in `#F4EDF4` 600. Proof strip: 3 cells in a 1px-gap grid on `rgba(255,255,255,0.08)`, cells `#221631`, padding 18px 20px, value Poppins 600 15px over a 12px `#9C8BA9` label. On mobile the strip becomes three stacked rows with value left and label right.

**Workstream card.** `#1E1426`, 1px border, radius 18px, overflow hidden. 3px gradient top bar: card 1 `#FF6B4A → #E0417F`, card 2 `#E0417F → #FFB020`, card 3 `#FFB020 → #FF6B4A`. Padding 32px 30px 30px, gap 14px: mono number (`ui-monospace` 11px `#9C8BA9`, letter-spacing 0.16em), H3 Poppins 600 19px, body 14.5px/1.7 `#C2B2CC`, then a bottom-anchored list (`margin-top: auto`, top border `rgba(255,255,255,0.07)`) of rows made of a 5px accent dot and 13px `#DCCFE3` text. Dot colors follow the card's accent (coral, magenta, amber).

**Biggest learning band.** Background `linear-gradient(135deg, rgba(255,176,32,0.09), rgba(255,107,74,0.06))`, border 1px `rgba(255,176,32,0.3)`, radius 22px, padding 48px 56px. Amber kicker, then Instrument Serif italic 32px line, then 16px/1.7 `#DCCFE3` body (max-width 720 to 760px).

**Full story (identical on all three pages).**
- Header: kicker "THE FULL STORY", H2 `The "Why" behind the execution`, a 15px `#B3A2BE` sub line, then the gradient pill button `linear-gradient(115deg, #FF6B4A, #E0417F)`, text `#170F1C`, Poppins 600 14px, padding 13px 30px, radius 999px, hover `brightness(1.08)`.
- **Collapsed by default. The article renders only after the click; the label swaps to "Collapse the story".** No flash of content on load. A 150 to 200ms fade is fine.
- Expanded: an **editorial article, not cards**. One narrow measure (max-width 700px), 48px below the header, paragraphs stacked with 26px gaps, body 17px/1.9 weight 400 `#C4B5CE`. Mobile: 15px/1.85, gaps 20px.
- Rhythm devices, used sparingly and in this order per page:
  - coral section kickers between passages (Poppins 600, 11.5px, 0.2em, uppercase),
  - a pull-quote with a 2px `#FF6B4A` left rule and 26px left padding, Instrument Serif italic 24px `#F4EDF4`,
  - one or two panel boxes (`#1E1426`, 1px border `rgba(255,255,255,0.11)`, radius 16px, padding 30px 32px, body 15.5px/1.8 `#DCCFE3`) around the passage that deserves emphasis,
  - a closing results strip: border 1px `rgba(255,107,74,0.28)`, radius 14px, background `linear-gradient(135deg, rgba(255,107,74,0.07), rgba(224,65,127,0.05))`, padding 26px 28px, four columns of Poppins 700 21px value over 11.5px `#B3A2BE` label. Mobile: 2x2.

**Footer CTAs.** Two ghost pills, centered row with 18px gap on desktop, stacked full-width on mobile. Pill: Poppins 600 14.5px, white text, radius 999px, padding 14px 32px. Left pill border `1.5px rgba(255,107,74,0.5)`, hover background `rgba(255,107,74,0.1)` and border `#FF6B4A`. Right pill uses the magenta equivalents (`rgba(224,65,127,0.5)` / `#E0417F`). Each page links to the other two:
- 01 → "Move to Fintech PMM" and "Move to Crypto Growth"
- 02 → "Move to Developer GTM" and "Move to Crypto Growth"
- 03 → "Move to Developer GTM" and "Move to Fintech PMM"

The back link "← Back to home" sits at the top of every hero and routes to the homepage.

---

# Page 01 · Developer GTM

Kicker "PROOF OF WORK / 01". Title "Developer GTM" (GTM gradient). Standfirst "Open source that grows on trust, not spend." Meta "OLake by Datazip (backed by one of India's largest VCs, $900M+ AUM)" / "Founding Member, GTM · since July 2024". Hero photo `assets/olake/hero-iceberg-event.jpeg`, mono caption under the hero: "India's first official Apache Iceberg event, co-hosted with the Apache Foundation. Bengaluru."

Workstreams: Webinars & Events / Product Launches & Websites / Content & Distribution.

**Signature block: the flywheel to grow an OSS.** Card `#1E1426`, radius 22px, padding 52px 48px 44px, centered. H2 only, no supporting copy. Diagram is a 620x590 relative box:
- dashed ring: SVG circle center (310,295) r 200, stroke gradient `#FF6B4A` 0.55 to `#E0417F` 0.35, width 1.5, dasharray 3 8;
- center disc 150px, `radial-gradient(circle at 35% 30%, rgba(255,107,74,0.2), rgba(224,65,127,0.1))`, border `rgba(255,107,74,0.4)`, label "the education flywheel" in Instrument Serif italic 18px;
- five node cards (170px wide, `rgba(30,20,38,0.92)`, border `rgba(255,255,255,0.14)`, radius 12px, padding 13px 16px, shadow `0 8px 28px rgba(0,0,0,0.3)`; mono number `#FF8A6B` 10px, title Poppins 600 15px, sub 11.5px `#B3A2BE`) centered at: 01 Teach (webinars, docs) (310,95) · 02 Trust (industry leaders vouch) (500,233) · 03 Try (open source install) (428,457) · 04 Contribute (stars, PRs, Slack) (192,457) · 05 Advocate (community brings the next room) (120,233);
- five coral "▸" glyphs (17px) between nodes, rotated tangentially clockwise: (428,133) 36°, (500,357) 108°, (310,495) 180°, (120,357) 252°, (192,133) 324°.
- **Mobile: a vertical chain instead.** Title 22px, "the education flywheel" in serif italic 16px `#C9BBD4` centered, then the five node cards full-width (30px mono number column plus "Title · sub" on one line), a coral "▾" between each, and a closing loop note "↻ back to 01 · Teach" (mono 11px coral, centered).

**Matrix: why developers are harder to sell to.** Card padding 52px 56px, grid `1fr 400px`, gap 56px, vertically centered. Left: H2, two reason rows (34px rounded-square badge "a" coral-tinted, "b" magenta-tinted, plus 15px/1.7 `#DCCFE3` text with a bold white lead-in), then the italic line "Our wedge: open source + education attacks both." Right: a 2x2 plot, 320px tall, 1px border `rgba(255,255,255,0.16)`, radius 12px, background `rgba(23,15,28,0.5)`, center crosshairs at 0.1 alpha, top-right quadrant tinted `linear-gradient(135deg, rgba(255,107,74,0.2), rgba(224,65,127,0.1))` holding a 10px gradient dot with a 5px glow ring and the label "the OLake buyer / high on both counts", plus "low" and "high" mono labels in the bottom corners. Axis labels in mono 10.5px `#9C8BA9`: vertical "build-it-myself instinct →" left, horizontal "switching cost →" below. Mobile stacks: H2, reasons, full-width 260px plot, then the wedge line last.

Full story article: serif opener "Two products, one company, one lesson.", kickers "Datazip" / "OLake" / "What compounded", the A-B objections panel (2-up on desktop, stacked on mobile), the "education, not promotion" pull-quote, and the results strip 6K+ MQLs / 55+ POC conversions / 30+ clients in production / 4:1 LTV:CAC.

**Collage "FROM THE ROOMS".** Desktop 4 columns, rows 150px, gap 10px, tiles radius 14px with `filter: saturate(0.88) contrast(1.05) brightness(0.96)` and a tint overlay `linear-gradient(180deg, rgba(23,15,28,0.12), rgba(23,15,28,0.32))`: auditorium cols 1-2 rows 1-2 · group photo cols 3-4 row 1 · San Francisco col 3 row 2 · webinar-1 col 4 row 2 · webinar-grid cols 1-2 row 3 · webinar-2 col 3 row 3 · webinar-3 col 4 row 3. Caption: "Webinars and events. Bengaluru, San Francisco, and the rooms in between." Mobile: 2 columns, rows 120px, gap 8px, webinar-1 dropped.

# Page 02 · Fintech PMM

Kicker "PROOF OF WORK / 02". Title "Fintech PMM". Standfirst "Trust is the product when money is the category." Meta "The Money Club (backed by Blume Ventures)" / "Founder's Office, Growth · Sep 2023 to Jul 2024". Hero backdrop `assets/fintech/hero-vrddi-brochure.png` (blurred variant described above), mono caption "Vrddi by Money Club. Research-first collateral, designed end to end."

TL;DR body ends on "grew capital pooled from $30M to $48M+". Proof strip: "Vrddi 0 to 200+ users / in 2 months" · "$30M to $48M+ / capital pooled" · "CNBC Top 200 / Global Fintechs Awards".

Workstreams: Sales Enablement & Pitches / Product Development & Design / SMM & PR.

**Signature block: before and after, gamification added.** Header row with H2 left and a 14.5px `#B3A2BE` note right (max-width 420px). Two stacked frames, gap 20px, radius 18px, background `#1E1426`; the "Before" frame has a neutral border and grey uppercase label, the "After" frame border `rgba(255,107,74,0.28)` with a coral label. Each label bar sits above the image, separated by a 1px divider, with a 13px `#B3A2BE` description beside it. **The screenshots are tall: put each image in a fixed-height scroll container** (`max-height: 560px; overflow-y: auto` desktop; 300px before / 420px after on mobile, whose label reads "scroll to explore") with the image at `width: 100%; height: auto`.

Full story article: opening paragraph, the pull-quote "In this market the trust deficit isn't a marketing problem sitting next to the product. It is the product.", kickers "First principle" / "Rebranding" / "The zero to one" / "What compounded", the 75+ interviews panel (big "75+" plus a mono caption "user interviews, Tier 2 cities" over the passage), and the results strip $48M+ / Top 200 / 7.8 NPS / 200+ Vrddi users.

**Collage "DESIGNS AND AWARDS".** Desktop 4 columns, rows 200px: brochure mockup cols 1-2 row 1 · brochure stack col 3 rows 1-2 · HCA trophy col 4 rows 1-2 (caption overlay "Technology Solution Provider of the Year, HCA 2024") · SME summit cols 1-2 row 2 (caption overlay "SME Summit 2023, Vrddi by Money Club", `object-position: 50% 30%`). Caption line: "Collateral and product design across Singapore, UAE and India. Recognition followed the numbers." Mobile: 2 columns, rows 150px, same tiles reflowed.

# Page 03 · Crypto Growth

Kicker "PROOF OF WORK / 03". Title "Crypto Growth". Standfirst "A community built to outgrow its builder." Meta "Mudrex (YC'19, backed by Nexus Ventures)" / "Growth Manager · Apr 2022 to Sep 2023". Hero backdrop `assets/crypto/hero-mudrex-team.png` at `object-position: 50% 40%`, mono caption "Fourteen months across both halves of the cycle. Bengaluru."

TL;DR proof strip: "300K to 700K+ / installs" · "1M+ acquisitions / 3:1 LTV:CAC in 6 months" · "$1M+ AUM / Economic Times, 3 months".

Workstreams: Community / Influencer Marketing & PR / Brand Partnerships.

**Signature block: why WAGMI paid for itself three times over.** Card padding 52px 48px 44px, gap 34px. Centered H2, then a 3-column panel (1px-gap grid on `rgba(255,255,255,0.09)`, cells `#221631`, padding 32px 30px, radius 16px): "01 · FUNNEL" coral, "02 · PIPELINE" magenta, "03 · PROOF" amber, each with a Poppins 600 17px title and 14px/1.7 `#B3A2BE` body. Footer row: the serif italic line "Then it started running itself. Which was the point." beside three stats (5,000+ members / 30%+ sustained activity / 50+ student ambassadors). Mobile stacks the three panels, centers the italic line, and puts the three stats in a row beneath.

**Media "WAGMI, ON THE GROUND".** Desktop grid `1.1fr 1fr`, gap 20px. Left card: `<video controls preload="metadata" playsinline>` with `width: 100%; height: auto; aspect-ratio: 848 / 478`, background `#0F0A13`, plus an 18px 22px caption bar "The community film. Click to play." (do not pin a fixed height; the clip is landscape and letterboxes). Right card: campus photo `object-fit: cover`, `object-position: 50% 45%`, gradient scrim `rgba(23,15,28,0.08)` to `rgba(23,15,28,0.62)`, caption overlaid bottom-left "A campus chapter, one of every tier-1 institution WAGMI reached."; `min-height: 300px` so the row heights agree. Mobile: stacked, video same aspect ratio, photo 260px tall.

Full story article: opening two paragraphs, the pull-quote "Teaching converts skeptics that pitching cannot reach.", kickers "The observation" / "The India business", the WAGMI panel box, and the results strip 700K+ installs / 1M+ acquisitions / 3:1 LTV:CAC / 55% retention improvement MoM.

Biggest learning: "Paid attention is an expense, community is an asset." plus the depreciation line.

---

## Interactions and state
Per page, one piece of state: `storyOpen: boolean`, default `false`. Click toggles it and swaps the button label. Nothing else is stateful, no data fetching. The mobile workstream rail needs scroll-position tracking only to highlight the pager segment. Hover states as specified per component.

## Design tokens
- Background `#170F1C` · surface `#1E1426` · raised cell `#221631` · card border `rgba(255,255,255,0.09)`
- Text primary `#F4EDF4` · body `#DCCFE3` and `#C2B2CC` · article body `#C4B5CE` · muted `#B3A2BE` and `#9C8BA9` · faint `#6E5B7B`
- Coral `#FF6B4A` (light `#FF8A6B`) · magenta `#E0417F` (light `#E87BA6`) · amber `#FFB020`
- Signature gradient `linear-gradient(115deg, #FF6B4A, #E0417F)`
- Fonts (Google Fonts): Poppins 500-800 headings/kickers/buttons, Inter 400-600 body, Instrument Serif italic for standfirsts and pull-quotes, `ui-monospace` stack for numbers, captions and axis labels
- Radii: cards 18px, feature cards 22px, tiles 14px, pills 999px

## Asset map (reference path → handoff file)
Page 01: `olake event.jpeg` → `assets/olake/hero-iceberg-event.jpeg` · `olake 6.jpeg` → `collage-auditorium.jpeg` · `olake event pic.jpeg` → `collage-group-photo.jpeg` · `olake event san fransisco.jpeg` → `collage-san-francisco.jpeg` · `Screenshot …17.00.18.png` → `collage-webinar-grid.png` · `…17.03.43.png` → `collage-webinar-1.png` · `…17.04.01.png` → `collage-webinar-2.png` · `…17.05.22.png` → `collage-webinar-3.png`

Page 02: `Screenshot …17.39.22-*.png` → `assets/fintech/hero-vrddi-brochure.png` · `…17.39.04-*.png` → `collage-brochure-mockup.png` · `…17.39.50-*.png` → `collage-brochure-stack.png` · `…17.41.58-*.png` → `ui-before.png` · `…17.43.20-*.png` → `ui-after.png` · `WhatsApp Image …17.52.56-*.jpeg` → `award-sme-summit.jpeg` · `…17.53.28-*.jpeg` → `award-hca-trophy.jpeg`

Page 03: `Screenshot 2026-08-19 at 09.21.37.png` → `assets/crypto/hero-mudrex-team.png` · `WhatsApp Video …16.54.04.mp4` → `wagmi-film.mp4` · `WhatsApp Image …16.58.00.jpeg` → `wagmi-campus-session.jpeg`

## Known gaps for the developer
- The WAGMI video has no poster frame, so the player shows a dark panel until metadata loads. If a still is supplied later, add it as `poster`.
- Compress the photography and the mp4 for web (the originals are camera and WhatsApp sized). Serve the collage tiles at roughly 2x their rendered box.
- Award captions are as labelled in this spec; if the trophy and summit captions look swapped against the images, swap them and tell the owner.
