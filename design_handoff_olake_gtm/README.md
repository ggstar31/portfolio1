# Handoff: OLake Developer GTM Case Study Page

## Overview
Subpage 01 of a personal portfolio site ("Proof of Work / 01 · Developer GTM"). A case-study page about building GTM for OLake by Datazip, an open source data replication tool. It sits under the existing portfolio homepage and shares its brand system (deep plum-ink base, coral/magenta/amber gradients, Poppins + Inter + Instrument Serif).

## About the Design Files
`olake-developer-gtm-reference.html` is a **design reference created in HTML** (it uses a custom runtime, `support.js`, that is not included and not needed). It is a prototype showing intended look and behavior, NOT production code to copy directly. The task is to **recreate this design in the target codebase's existing environment** (framework, routing, component patterns already used by the portfolio site). If no environment exists yet, pick the most sensible stack for a static portfolio (e.g. plain HTML/CSS/JS or the framework used by the rest of the site) and implement there. Ignore `<x-dc>`, `<helmet>`, `<sc-if>`, `hint-*`, `style-hover`, and `{{ }}` syntax: they are prototype runtime constructs. `style-hover="..."` = CSS `:hover` styles. `<sc-if value="{{ open }}">` = conditional render.

## Fidelity
**High-fidelity.** Recreate pixel-perfectly: exact colors, type, spacing, copy. All copy in the reference file is final and approved; do not rewrite it. Do not use em dashes anywhere in copy.

## Page structure (single desktop page, top to bottom)
Content column: `max-width: 1100px; margin: 0 auto; padding: 0 40px` (TL;DR uses 880px). Section vertical rhythm: 110px top padding between sections. Page bg `#170F1C`, base font Inter.

### 1. Hero (event photo behind, tinted)
- Full-bleed section, `position: relative; overflow: hidden`.
- Background: `assets/olake-event-hero.jpeg` as absolutely positioned cover image, `opacity: 0.42; filter: saturate(0.9)`, under a gradient overlay `linear-gradient(180deg, rgba(23,15,28,0.72) 0%, rgba(23,15,28,0.82) 55%, #170F1C 100%)` so the photo fades into the page bg.
- Content (padding 40px 40px 96px):
  - Back link "← Back to home" (13px, 500, #C9BBD4, hover #FF6B4A). Links to the portfolio homepage.
  - 88px below: kicker "PROOF OF WORK / 01" (Poppins 600, 12px, letter-spacing 0.22em, uppercase, #FF8A6B).
  - H1 "Developer GTM" (Poppins 700, 64px, line-height 1.05, letter-spacing -0.02em, white). The word "GTM" has gradient text: `linear-gradient(115deg, #FF6B4A 20%, #E0417F 80%)` clipped to text.
  - Standfirst "Open source that grows on trust, not spend." (Instrument Serif italic, 28px, #E3D5E8, max-width 620px).
  - Meta block: "OLake by Datazip" (Poppins 600, 19px, white) followed inline by "(backed by one of India's largest VCs, $900M+ AUM)" (Inter 400, 15px, #C9BBD4). Second line: "Founding Member, GTM · since July 2024" (13.5px, 500, #B3A2BE).

### 2. TL;DR card
- 880px column, 72px below hero.
- Card: bg #1E1426, border 1px rgba(255,255,255,0.09), radius 18px, padding 36px 42px.
- Header row: "TL;DR" (Poppins 600, 11.5px, letter-spacing 0.22em, uppercase, #FF8A6B) + hairline filling the row (`height: 1px; background: linear-gradient(90deg, rgba(255,107,74,0.4), rgba(255,255,255,0.06))`).
- Body 16.5px/1.75 #DCCFE3; key numbers ($100K to $500K ARR, 1,500+ GitHub stars, 6K+ MQLs, 700+ community members, 30+ clients in production, 55+ POCs) in white 600. Copy verbatim from reference.

### 3. Workstreams: three vertical cards
- Kicker "WORKSTREAMS" (same kicker style as hero, margin-bottom 30px).
- Grid: 3 equal columns, gap 20px, stretch.
- Each card: bg #1E1426, 1px border rgba(255,255,255,0.09), radius 18px, overflow hidden; 3px gradient top bar (card 1: #FF6B4A→#E0417F, card 2: #E0417F→#FFB020, card 3: #FFB020→#FF6B4A); padding 32px 30px 30px; column flex, gap 14px.
- Contents: mono number (ui-monospace 11px #9C8BA9, letter-spacing 0.16em), H3 (Poppins 600, 19px), body (14.5px/1.7 #C2B2CC), then bottom-anchored stat list (margin-top auto, top border rgba(255,255,255,0.07), rows of 5px accent dot + 13px #DCCFE3 text).
- Card copy (verbatim):
  1. Webinars & Events — "Technical leaders and advocates with 100K+ subscribers walking audiences through the stack. The organic community play." Stats: 23 webinars / 10+ events / Speakers from 6+ countries. Dots #FF6B4A.
  2. Product Launches & Websites — "Two launches embedded with engineering. Product Hunt, Hacker News, Reddit. Landing pages and creative assets end to end." Stats: 2 launches, embedded with engineering / Product Hunt · Hacker News · Reddit / Creative assets end to end. Dots #E0417F.
  3. Content & Distribution — "Technical docs and blogs from real sessions, distributed where developers already are." Stats: LinkedIn 0 to 18K / Millions in impressions / 50K+ views on YouTube. Dots #FFB020.

### 4. Flywheel diagram ("The flywheel to grow an OSS")
- Card (bg #1E1426, border, radius 22px, padding 52px 48px 44px), content centered.
- H2 only, no other copy: "The flywheel to grow an OSS" (Poppins 700, 28px).
- Diagram: 620×590px relative container.
  - Dashed ring: SVG circle center (310,295), r 200, stroke gradient #FF6B4A(0.55)→#E0417F(0.35), width 1.5, dasharray 3 8.
  - Center disc: 150px circle at ring center, radial gradient rgba(255,107,74,0.2)→rgba(224,65,127,0.1), 1px border rgba(255,107,74,0.4), containing "the education flywheel" (Instrument Serif italic 18px).
  - 5 nodes on the ring (clockwise from top, each a 170px-wide card: bg rgba(30,20,38,0.92), 1px border rgba(255,255,255,0.14), radius 12px, padding 13px 16px, centered text, shadow 0 8px 28px rgba(0,0,0,0.3); mono number #FF8A6B 10px, title Poppins 600 15px, sub 11.5px #B3A2BE):
    - 01 Teach (webinars, docs) at (310,95)
    - 02 Trust (industry leaders vouch) at (500,233)
    - 03 Try (open source install) at (428,457)
    - 04 Contribute (stars, PRs, Slack) at (192,457)
    - 05 Advocate (community brings the next room) at (120,233)
    (coordinates are node centers; translate(-50%,-50%))
  - 5 coral "▸" arrow glyphs (17px) between nodes on the ring, rotated tangentially clockwise: at (428,133) rot 36°, (500,357) rot 108°, (310,495) rot 180°, (120,357) rot 252°, (192,133) rot 324°.

### 5. Matrix ("Why developers are harder to sell to")
- Card (bg #1E1426, border, radius 22px, padding 52px 56px), grid `1fr 400px`, gap 56px, vertically centered.
- Left: H2 (Poppins 700, 28px); two reason rows, each 34px rounded-square badge ("a" coral tint: bg rgba(255,107,74,0.12), border rgba(255,107,74,0.35), text #FF8A6B; "b" magenta tint: rgba(224,65,127,...) text #E87BA6) + 15px/1.7 #DCCFE3 text with bold white lead-in:
  - "Switching costs. They run an existing stack, and migration is real work."
  - "The builder's instinct. Anything that looks simple, they'd rather write themselves."
  - Closing line in Instrument Serif italic 19px #E3D5E8: "Our wedge: open source + education attacks both."
- Right: 2×2 plot, 400px wide. Layout grid: 20px column for rotated y-axis label ("build-it-myself instinct →", vertical, mono 10.5px #9C8BA9), plot box 320px tall (1px border rgba(255,255,255,0.16), radius 12px, bg rgba(23,15,28,0.5)), bottom row centered x-axis label ("switching cost →"). Inside the box: center crosshair lines rgba(255,255,255,0.1); top-right quadrant tinted `linear-gradient(135deg, rgba(255,107,74,0.2), rgba(224,65,127,0.1))` containing a 10px gradient dot with 5px glow ring and the label "the OLake buyer / high on both counts" (11.5px, white 500 / #C9BBD4); "low" and "high" mono labels (10px #6E5B7B) in the bottom corners.

### 6. Biggest learning band
- Card: `linear-gradient(135deg, rgba(255,176,32,0.09), rgba(255,107,74,0.06))` bg, 1px border rgba(255,176,32,0.3), radius 22px, padding 48px 56px.
- Kicker "BIGGEST LEARNING" (#FFB020, same kicker style).
- "Speak the language of the tech." (Instrument Serif italic, 32px, white).
- Body (16px/1.7 #DCCFE3, max-width 720px): "With developers, that language is the technical truth, benchmarks you can defend and docs that don't oversell. Trust followed accuracy."

### 7. The full story (collapsed by default)
- Header: kicker "THE FULL STORY"; H2 "The \"Why\" behind the execution" (Poppins 700, 28px); sub "A 2-minute read. Two products, one company, one lesson." (15px #B3A2BE).
- CTA button: "Read the full story" — gradient pill `linear-gradient(115deg, #FF6B4A, #E0417F)`, text #170F1C, Poppins 600 14px, padding 13px 30px, radius 999px; hover brightness(1.08). Toggles to "Collapse the story" when open.
- **Default state: collapsed. The story boxes render ONLY after the user clicks the button.** No content flash on load.
- Expanded content: 2-column grid, gap 20px, 44px below the header. Five numbered boxes (same card style as workstreams: bg #1E1426, border, radius 18px, padding 34px 36px; mono number #FF8A6B, H3 Poppins 600 17px, body 14.5px/1.75 #C2B2CC). Box 05 spans both columns. Copy verbatim from the reference file:
  - 01 Datazip, a unified data stack platform for enterprises
  - 02 Finding the real problem
  - 03 OLake, an open source data replication tool
  - 04 Education, not promotion
  - 05 The engine started feeding itself

### 8. Photo collage ("From the rooms")
- Kicker "FROM THE ROOMS", margin-bottom 30px.
- Grid: 4 columns, rows 150px, gap 10px. Tiles (radius 14px, overflow hidden, images object-fit cover with `filter: saturate(0.88) contrast(1.05) brightness(0.96)` and a tint overlay `linear-gradient(180deg, rgba(23,15,28,0.12), rgba(23,15,28,0.32))`):
  - collage-auditorium.jpeg: cols 1-2, rows 1-2
  - collage-group-photo.jpeg: cols 3-4, row 1
  - collage-san-francisco.jpeg: col 3, row 2
  - collage-webinar-1.png: col 4, row 2
  - collage-webinar-grid.png: cols 1-2, row 3
  - collage-webinar-2.png: col 3, row 3
  - collage-webinar-3.png: col 4, row 3
- Caption below (mono 11.5px #9C8BA9): "Webinars and events. Bengaluru, San Francisco, and the rooms in between."

### 9. Footer CTAs
- Centered flex row, gap 18px, bottom padding 130px.
- Two ghost pill links (Poppins 600, 14.5px, white, radius 999px, padding 14px 32px):
  - "Move to Fintech PMM →": border 1.5px rgba(255,107,74,0.5); hover bg rgba(255,107,74,0.1), border #FF6B4A.
  - "Move to Crypto Growth →": border 1.5px rgba(224,65,127,0.5); hover bg rgba(224,65,127,0.1), border #E0417F.
- These route to the (upcoming) Fintech PMM and Crypto Growth case-study pages; stub the routes for now.

## Interactions & Behavior
- Single interaction: the full-story toggle. State `open: boolean`, default `false` (collapsed). Click "Read the full story" → render the five boxes and relabel the button "Collapse the story". Click again → hide. No animation required; a simple 150-200ms ease fade/height is acceptable.
- Hover states as listed per component (links to coral, button brightness, ghost pills tint).
- Responsive: desktop (~1100px content column, centered at large widths) and mobile (below ~768px) per the Mobile section below. Tablet can interpolate: desktop layout down to where 3 workstream columns get cramped (~900px), then switch to the mobile patterns.

## Mobile (see `olake-developer-gtm-mobile-reference.html`, design width 390px)
Same section order, colors, copy, and fonts. Content padding 22px; sections spaced 64px apart. Differences only:

1. **Hero**: same photo-behind treatment. H1 42px, standfirst 21px, kicker 11px. Meta stacks on three lines: "OLake by Datazip" (Poppins 600 16.5px), the VC bracket line (13px #C9BBD4), then role/date (12.5px #B3A2BE). Back link is a 44px-tall tap target.
2. **TL;DR**: card padding 26px 24px, radius 16px, body 15px/1.72.
3. **Workstreams become HORIZONTAL**: a swipeable row (`overflow-x: auto; scroll-snap-type: x mandatory`, hidden scrollbars). Cards `flex: 0 0 280px`, `scroll-snap-align: start`, gap 14px, row side-padded 22px so cards peek at the edge. Card internals same as desktop scaled slightly (padding 24px 22px, H3 17px, body 13.5px, stats 12.5px). Below the row: a 3-segment pager indicator (active segment 16x3px coral, inactive 6x3px rgba(255,255,255,0.18)); update the active segment on scroll.
4. **Flywheel becomes a vertical chain** (the 620px ring doesn't fit): title 22px + "the education flywheel" (Instrument Serif italic 16px #C9BBD4) centered, then the 5 node cards stacked full-width (same node card style; layout: 30px mono number column + "Title · sub" on one line), a coral "▾" between each, and a closing loop note "↻ back to 01 · Teach" (mono 11px coral, centered).
5. **Matrix stacks vertically**: H2, the a/b reason rows (32px badges, 14px text), then the full-width plot (260px tall, same internals, mono labels 9.5px), then the italic wedge line (17px) at the bottom.
6. **Biggest learning**: padding 30px 26px, pull line 24px, body 14.5px.
7. **Full story**: same collapsed-by-default toggle; the button goes full-width, min-height 48px. Expanded boxes stack in ONE column (padding 26px 24px, H3 16px, body 14px); no column spanning.
8. **Collage reflows to 2 columns** (rows 120px, gap 8px): auditorium spans 2x2, group photo and San Francisco side by side, webinar-grid spans full width, webinar-2 and webinar-3 side by side (webinar-1 is dropped on mobile). Caption 10.5px.
9. **CTAs stack** as two full-width pills, min-height 48px, gap 12px.

All tap targets ≥ 44px.

## State Management
- `storyOpen: boolean`, default false, local to the page. Nothing else. No data fetching.

## Design Tokens
- Background: #170F1C · Surface: #1E1426 · Card border: rgba(255,255,255,0.09)
- Text: primary #F4EDF4 · body #DCCFE3 / #C2B2CC · muted #B3A2BE / #9C8BA9 · faint #6E5B7B
- Coral #FF6B4A (light #FF8A6B) · Magenta #E0417F (light #E87BA6) · Amber #FFB020
- Signature gradient: linear-gradient(115deg, #FF6B4A, #E0417F)
- Fonts (Google Fonts): Poppins 500-800 (headings, kickers, buttons), Inter 400-600 (body), Instrument Serif italic (standfirst, pull lines), ui-monospace stack (numbers, captions, axis labels)
- Radii: cards 18px, feature cards 22px, tiles 14px, pills 999px
- Kicker style: Poppins 600, 12px, letter-spacing 0.22em, uppercase

## Assets
All in `assets/` (provided by the client, use as-is):
- olake-event-hero.jpeg — hero background (Apache Iceberg event, Bengaluru)
- collage-auditorium.jpeg, collage-group-photo.jpeg, collage-san-francisco.jpeg, collage-webinar-grid.png, collage-webinar-1/2/3.png — collage tiles

## Files
- `olake-developer-gtm-reference.html` — the desktop design reference (the custom runtime tags won't execute outside its host, but all markup, inline styles, and copy are readable in source)
- `olake-developer-gtm-mobile-reference.html` — the mobile design reference (390px design width)
- `assets/` — all imagery
