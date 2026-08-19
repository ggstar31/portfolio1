# Handoff: Portfolio Homepage — Harsha Kalbalia

## Overview
Personal portfolio homepage for Harsha Kalbalia (Technical Product Marketing / Developer GTM). Single scrolling page: fixed nav, scrapbook-collage hero, three experience cards ("Proof of Work"), a 2×2 fractional-work grid ("Off the Books"), an auto-scrolling photo strip ("The Record"), an about section with a hand-drawn sketch ("Origin Story"), and a large contact footer.

## About the Design Files
The files in this bundle are **design references created in HTML** — a prototype showing intended look and behavior, not production code to copy directly. The task is to **recreate this design in the target codebase's environment** (Next.js/React recommended if starting fresh) using its established patterns. `Home v3.dc.html` is the source of truth; view it in a browser at ~1440px wide.

## Fidelity
**High-fidelity.** Colors, typography, spacing, copy, and interactions are final. Recreate pixel-perfectly. All copy is final — do not rewrite it.

## Page structure (top to bottom)

### 1. Fixed nav
- Right-aligned links: Proof of Work (#work), Off the Books (#offbooks), Origin Story (#origin) — Inter 14px/500, 85% opacity, 100% on hover. No logo, no name.
- CTA pill "Get in Touch" (#contact): gradient background (see tokens), text #160D08, 600, radius 100px, padding 10px 22px; hover: glow shadow 0 8px 30px rgba(255,107,74,0.45) + translateY(-1px).
- Bar background: linear-gradient(rgba(13,9,22,0.92), transparent); padding 20px 44px; z-index 60.

### 2. Hero (min-height max(100vh, 820px))
3-column grid: minmax(180px,26vw) | minmax(0,1fr) | minmax(180px,26vw); gap clamp(20px,3vw,56px); padding 120px clamp(16px,3vw,44px) 70px.
- **Background (premium gradient):** page base #0D0916 with radial washes — radial-gradient(900px 500px at 50% 108%, rgba(199,79,180,0.22), transparent 60%) + radial-gradient(700px 420px at 50% -8%, rgba(255,107,74,0.16), transparent 60%); plus a blurred aurora blob centered behind content: 760×520px conic-gradient (from 210deg: rgba(255,180,84,0.14) → rgba(255,107,74,0.10) → rgba(199,79,180,0.16) → back), blur(90px), border-radius 50%, pointer-events none.
- **Polaroid stacks** (3 per side, flex column, gap 30px): cream card #FBF7EF, padding 11-12px sides / 34-40px bottom, rotated −7°…+6°, drop shadow 0 24px 60px rgba(0,0,0,0.5). Some have a "tape" strip: ~84×24px, rgba(255,214,140,0.5), rotated ±3-4°, centered at top:-12px. Photo inside: object-fit cover, heights 150–180px. Caption below photo: Caveat cursive 19px, #4A3B33.
  - Rest state: filter saturate(0.8) brightness(0.88). Hover: full color, scale(1.05), rotation eases toward 0, colored glow shadow, z-index 10. Idle float animation: translateY 0→−8px→0, 9–12s ease-in-out infinite (stagger durations).
  - Left column (top→bottom): olake 6.jpeg "full house, Bengaluru" · olake event 4.jpeg (object-position center 88%) "community night" · Screenshot 2026-08-19 at 10.46.07.png-era swap: **Screenshot 2026-08-19 at 10.08.39.png** (object-position center 30%) "London, Product Launch".
  - Right column: olake event.jpeg (object-position center 78%) "Apache Iceberg meetup, BLR" · olake meetup 2.jpeg (center 80%) "standing room only" · olake event san fransisco.jpeg "San Francisco meetup".
- **Center content** (centered text):
  - Kicker "HARSHA KALBALIA": Inter 12px/600, letter-spacing 0.3em, uppercase, #FFB454, margin-bottom 26px.
  - H1 one line, nowrap: "Engineering *Equilibrium*" — Instrument Serif 400, clamp(32px,4vw,78px), line-height 1.04, letter-spacing −0.01em; "Equilibrium" in italic with gradient text (background-clip:text).
  - Subtitle: "Supply meets demand, compounded by trust." — Instrument Serif italic, clamp(19px,2vw,26px), #E8DFF2.
  - Paragraph (max-width 540px, Inter 15.5px/1.8, 300, #B8AFC4): "I learned marketing from microeconomics: every market clears where what people want meets what is supplied. My job is finding that point for new products, and earning the credibility that gets them believed."
  - CTAs: "Resume" (gradient pill, same as Get in Touch, padding 13px 30px) + "LinkedIn" (outline pill, 1px rgba(245,241,236,0.35); hover border/text #FF6B4A). Both lift −2px on hover.
  - Kicker row (flex wrap, column-gap 14px, centered): "0 TO 1 · POSITIONING & MESSAGING · TECH PRODUCT LAUNCHES · GTM & OPERATIONS · COMMUNITY-LED" — Inter 10.5px/600, letter-spacing 0.1em, #9C93A8, separators "·" in #FF6B4A.

### 3. Bridge line
Centered, Caveat 500 clamp(26px,3vw,38px), gradient text: "Started in economics classrooms. Ended up making markets. Full story below."

### 4. Proof of Work (#work) — max-width 1240px container, padding 0 44px
Section label row: "PROOF OF WORK" (Inter 13px/600, ls 0.28em, uppercase, #FFB454) + "Experience" (13px, #9C93A8, 300).
Three full-width clickable cards (grid: 340px image | 1fr text | auto arrow; gap 34px; padding 26px; radius 24px; 1px border rgba(255,255,255,0.08); hover: colored border+glow, translateY(-3px)). Image 190px tall, radius 16px, object-fit cover. Text block: eyebrow "01 · Founding Member" style (11px/600, ls 0.2em, #FFB454) · title Instrument Serif 34px · meta 13.5px #9C93A8 · sub-line Instrument Serif italic 19px #E8DFF2. Arrow "→" 26px in the card's accent color.
1. Developer GTM — OLake by Datazip · Backed by Elevation Capital — "Open source that grows on trust, not spend." — image olake 6.jpeg — routes to /olake — accent #FF6B4A, bg gradient 135deg rgba(255,107,74,0.10)→rgba(199,79,180,0.06)→rgba(255,255,255,0.02).
2. Fintech PMM (Founder's Office) — The Money Club · Backed by Blume Ventures — "Trust is the product when money is the category." — image Screenshot 2026-08-17 at 17.39.04.png (brochure) — /moneyclub — accent #FFB454.
3. Crypto Growth (Growth Manager) — Mudrex · Backed by YC'19, Nexus Ventures — "A community built to outgrow its builder." — image Screenshot 2026-08-19 at 09.21.37.png (team) — /mudrex — accent #C74FB4.

### 5. Off the Books (#offbooks)
Label row: "OFF THE BOOKS" + "Fractional & Independent". Grid 1fr 1fr, grid-auto-rows:1fr (equal heights), gap 26px, cards min-height 280px, radius 24px, border rgba(255,255,255,0.08), hover: accent border + translateY(-3px).
- **The Pivot** (accent #FF6B4A): background photo Screenshot 2026-08-19 at 09.10.55.png (robot art) at opacity 0.5, object-position center 20%, under linear-gradient(100deg, rgba(13,9,22,0.96) 30%, rgba(13,9,22,0.55) 70%, rgba(13,9,22,0.25)); content max-width 65%, padding 36px. Copy: "A voice-to-text AI startup repositioned into AI governance for BFSI, Middle East. Three industry accolades followed." Tools line: "TOOLS · Claude AI, for designing and brainstorming".
- **The Agent** (accent #C74FB4): gradient card 160deg rgba(199,79,180,0.16)→rgba(13,9,22,0.6); giant italic watermark "a." bottom-right (Instrument Serif italic 150px, rgba(199,79,180,0.14)). Copy: "Autonomous founder-to-investor engagement agent for an early-stage VC: finds AI-native founders, drafts sponsor proposals for events, qualifies leads in conversation." Tools: "Claude AI for master doc, Claude Code and Cursor for agent code, Github, Vercel for deploying".
- **The Platform** (accent #FFB454): same pattern, watermark "p.". Copy: "A founders' community platform, designed, built and deployed end to end with AI tools." Tools: "Claude, Vercel, Luma AI, Figma".
- **The App** (gradient title #FF6B4A→#C74FB4): gradient card; content max-width 72%; phone figure = assets/readaloud-mobile.png (a 660×1040 crop of the app UI), 200px wide, absolutely positioned right:-26px bottom:-70px, rotate(8deg), radius 18px, border rgba(255,255,255,0.18), shadow, clipped by card overflow:hidden. Copy: "ReadAloud narrates any article, gamified into quizzes and scores you every few paragraphs. Built because I kept zoning out while reading." Tools: "Claude for brainstorming, Codex for Code, Firecrawl for API, ElevenLabs for Voice, Wisprflow for Vibecoding, Vercel to deploy, Gitlab for code management".
- Tools line style: 12.5px #9C93A8; "TOOLS" prefix 10.5px/600 uppercase ls 0.08em in the card accent color, then " · " + list.

### 6. The Record (full-bleed section)
Label "THE RECORD". Horizontal strip: flex, gap 20px, overflow-x auto, scrollbar hidden, padding 6px 44px 18px. **Auto-scrolls** continuously ~75px/s (1.2px per 16ms tick), bounces at both ends, does NOT pause on hover. Tiles: radius 16px, image height 270px, caption below 12.5px #9C93A8.
Order: olake event.jpeg 420px "Apache Iceberg meetup, Bengaluru — full house" (object-position center 78%) · olake meetup 2.jpeg 420px "…standing room only" (center 80%) · olake 6.jpeg 420px "Bengaluru — the auditorium edition" · olake event san fransisco.jpeg 420px "Iceberg meetup, San Francisco" · olake event 3.jpeg 420px "Iceberg meetup, London" (center 35%) · olake award.jpeg 210px "Data Engineering Company of the Year, 2026" · two-up tile 420px (grid 1fr 1fr, 4px gap): WhatsApp 17.52.56.jpeg + WhatsApp 17.53.28.jpeg "MoneyClub & Vrddi Awards" · harsha speaking.jpeg 540px "Product Marketing Insights, panelist · MarkeXchange".

### 7. Origin Story (#origin)
Grid 1fr 300px, gap 60px, aligned center. Left: label + one paragraph (16.5px/1.95, 300, #C6BDD1, max-width 760px) ending with Instrument Serif italic 19px #F5F1EC sentence "Biggest lesson: markets run on trust…". Copy is in the HTML — keep verbatim.
Right: taped cream note card (#FBF7EF, rotate 4°, hover straightens) containing an inline SVG line sketch (stroke #B4462E, 3px, round caps) of a long-haired person with glasses waving + Caveat "hello!"; caption below: "that's me — the curious one in the room" (Caveat 21px #4A3B33).

### 8. Footer (#contact)
Top border rgba(255,255,255,0.08); bg fade to rgba(255,107,74,0.06). Huge "Let's *talk.*" mailto link — Instrument Serif clamp(56px,8vw,120px), gradient text. Link row (13.5px/500): harshakalbalia@gmail.com · LinkedIn · Book 30 minutes · Resume, PDF [placeholder hrefs — wire real URLs]. Note: "© 2026 Harsha Kalbalia". No locations listed anywhere.

## Interactions & Behavior summary
- Polaroids: idle float loop; hover = full color + scale + glow (transition all .35s ease).
- Cards: hover lift −3px + accent border/glow (.3s ease).
- Record strip: rAF/interval auto-scroll, 1.2px/16ms, direction flips at ends; no hover pause; still manually scrollable.
- Anchor navigation only (single page). Respect prefers-reduced-motion: disable float/auto-scroll.
- Proof of Work cards route to /olake, /moneyclub, /mudrex (subpages to come).

## Design Tokens
- Base bg: #0D0916 · card cream: #FBF7EF · sketch/tape ink: #4A3B33, stroke #B4462E
- Text: primary #F5F1EC · serif-soft #E8DFF2 · body muted #B8AFC4 / #CFC7DA · meta #9C93A8 · origin body #C6BDD1
- Accents: coral #FF6B4A (primary) · magenta #C74FB4 · amber #FFB454
- Signature gradient: linear-gradient(120deg, #FFB454, #FF6B4A 45%, #C74FB4)
- Hairline border: rgba(255,255,255,0.08) · radius: 24px cards, 16px images, 100px pills
- Fonts (Google): Instrument Serif (400 + italic) for display · Inter (300–600) for UI/body · Caveat (500–600) for handwriting
- Selection: bg #FF6B4A on #0D0916. Link hover color: #FF6B4A.

## Assets
All in assets/ of this bundle (renamed from uploads/): hero + record photos, brochure, awards, robot art, readaloud-mobile.png crop. Owned by Harsha — no licensing concerns. Favicon/OG image not yet designed.

## Files
- Home v3.dc.html — the hi-fi design reference (open in browser; ignore its runtime scaffolding — recreate, don't ship)
- assets/* — all images referenced above

## Responsive Behavior (Mobile & Tablet)
A separate mobile reference is included: **Home Mobile.dc.html** (designed at 390px). Implement ONE responsive page with these breakpoints:

### Mobile (≤ 767px) — follow Home Mobile.dc.html
- Nav: sticky bar, blur backdrop; short link labels "Work / Off the Books / Origin" left, "Get in Touch" pill right (12.5px). No hamburger.
- Hero: the desktop side columns rotate to rows — a row of THREE polaroids ABOVE the content (full house Bengaluru −4° · community night +3° · London Product Launch −3°) and a row of THREE BELOW it (Iceberg meetup BLR +3° · standing room only −3° · San Francisco +4°). Same cream/tape/caption style as desktop, equal thirds (flex:1, 10px gap), image height ~86px, Caveat captions 12.5px ellipsized. Centered content sits between the two rows: H1 breaks into two lines (44px, "Equilibrium" gradient italic on line 2 — drop the desktop nowrap), subtitle 19px, paragraph 14.5px, Resume/LinkedIn side-by-side pills (min 44px tall), kicker chips wrap at 9.5px. No other photo strip under the hero.
- Proof of Work: cards stack vertically — image on top (full-width, 160px), text below, arrow inline with title.
- Off the Books: single column; Pivot keeps robot-photo background under a darker vertical gradient; App phone crop shrinks to 150px and still bleeds bottom-right corner; text max-width 78%.
- Record: same auto-scroll strip (native swipe still works); tiles 280px wide × 180px tall (award 140px, MarkeXchange 360px).
- Origin: sketch card (220px, centered) comes FIRST, narrative paragraph below it.
- Footer: "Let's talk." at 56px; links stack vertically with 16px gaps (comfortable tap targets); © line below.
- All hover effects become taps/inert; keep tap targets ≥ 44px; disable idle float if prefers-reduced-motion.

### Tablet / iPad (768–1199px)
Blend of the two references:
- Nav: desktop version (full labels + pill).
- Hero: keep the desktop 3-column layout but 2 polaroids per side (drop "community night" and "standing room only" into the below-hero swipe strip if crowded); side columns ~22vw; H1 clamp floor 30px, still one line; content column min 420px.
- Proof of Work: keep horizontal card layout with image column narrowed to 240px; if below 900px, stack like mobile.
- Off the Books: keep the 2×2 grid (grid-auto-rows:1fr); padding 28px.
- Record: desktop tile sizes ×0.8 (336×216).
- Origin: keep 1fr + 260px sketch side-by-side.
- Footer: desktop layout, "Let's talk." clamp scales down naturally.

### General
- Never let the H1 collide with polaroids: at any width the nowrap line must fit its column (see clamp math in the hero section) — below 768px switch to the two-line mobile treatment instead.
- Images: serve responsive sizes (srcset); the photos are large.
