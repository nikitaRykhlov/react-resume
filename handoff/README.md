# Handoff: Personal résumé / portfolio site — redesign

## Overview
A single-page personal portfolio for **Nikita Rykhlov** (Back End Developer). It presents
the same résumé content as the owner's previous React site, but in a premium, "expensive"
dark-tech visual style (à la Linear / Vercel) built on the **Fluweee Design System** tokens.

Required product capabilities:
- **Single long scrolling page** with anchored sections.
- **Bilingual** — English + Russian, switchable, auto-detected from the browser on first load.
- **Light / dark theme** — auto-detected from the OS, switchable, persisted.
- **Fully responsive** (mobile → large desktop).
- A set of "wow" details: an interactive animated hero background, cursor spotlight,
  scroll-reveal animations, an interactive (accordion) experience section, large display
  typography, and subtle hover micro-interactions.

## About the design files
The files in this bundle are **design references created in HTML** — a working prototype that
shows the intended look, motion and behavior. They are **not production code to copy verbatim**.
The task is to **recreate this design in the target codebase's environment** using its
established patterns and libraries. The owner's existing app is **React + Vite + TypeScript +
SCSS** (folder `react-resume/`), so the natural target is to rebuild these screens as React
components there. If you start fresh, React (or any modern framework) is fine — match the spec
below, not the HTML structure.

- `prototype-standalone.html` — self-contained, open in any browser to see the live design
  (theme toggle, language toggle, hero animation, accordion, copy buttons all work).
- `source/Nikita Rykhlov.dc.html` — the authored source (a streaming "Design Component"; the
  markup + a logic class with all bilingual copy and the canvas/animation code). Read it for
  exact copy and the hero animation algorithm.
- `source/assets/photo.png` — the hero portrait.
- `tokens/*.css` — the Fluweee design tokens (colors, type, spacing, shadows, fonts). These are
  the single source of truth for all values; everything below is derived from them.

## Fidelity
**High-fidelity (hifi).** Final colors, typography, spacing, motion and interactions. Recreate
the UI pixel-faithfully using the codebase's libraries. All exact values are in `tokens/` and
restated in the **Design Tokens** section.

---

## Global layout & chrome

- **Page root:** `background: var(--bg-canvas)`, `color: var(--text-body)`,
  `font-family: var(--font-sans)` (Inter). `overflow-x: hidden`. The theme is applied by setting
  `data-theme="dark"` / `"light"` on this root element — the token CSS keys all dark values off
  `[data-theme="dark"]`.
- **Content width:** sections are centered, `max-width: 1180px`, horizontal padding
  `clamp(20px, 5vw, 40px)`.
- **Section vertical rhythm:** `clamp(40px, 7vw, 80px)` top/bottom (About is larger,
  `clamp(72px, 11vw, 128px)`).
- **Section eyebrow** (every section header): a horizontal row — a mono index (`01`…`07`) in the
  accent color, a mono uppercase label (`letter-spacing: .16em`, `--text-muted`), then a 1px
  hairline (`--border-subtle`) filling the remaining width.
- **Accent color:** teal — `var(--brand)` (= `--teal-400 #2DD4BF` in dark, `--teal-500 #14B8A6`
  in light). Used for the eyebrow index, links/hover borders, status dot, metric numbers, CTA.
  (An earlier coral option was removed — accent is teal only.)

### Top navigation (fixed)
- Fixed full-width bar, height **64px**, z-index 50.
- Background `color-mix(in srgb, var(--bg-canvas) 72%, transparent)` + `backdrop-filter: blur(14px)`;
  1px bottom border `--border-subtle`.
- **Left:** logo lockup — a 32×32 rounded square (`radius 9px`) filled with the aqua-flow gradient
  (`--gradient-flow`), text "NR" (`#042F2C`, weight 700), `box-shadow: var(--shadow-brand)`; next
  to it the wordmark `nikita_rykhlov` in mono 13px.
- **Right:** nav links (hidden below 880px), a language segmented toggle, and a theme toggle.
  - **Nav links** (`About / Experience / Skills / Awards / Contact`): 14px, `--text-muted`,
    hover → `--text-strong` on `--surface-hover`. Click = smooth-scroll to the section
    (offset −56px for the fixed bar). **Do not use `scrollIntoView`** — use
    `window.scrollTo({ top, behavior: 'smooth' })`.
  - **Language toggle:** pill container (1px `--border-subtle`, `radius 999px`) with two mono
    buttons `EN` / `RU`. Active button = accent background + `--text-on-brand`; inactive =
    transparent + `--text-muted`.
  - **Theme toggle:** 38×38 round button, 1px border; shows a **sun** icon in dark mode / **moon**
    in light mode; hover border → accent.

---

## Screens / Views (sections, top → bottom)

### 1. Hero
- **Purpose:** immediate identity + headline value prop + primary CTAs.
- **Layout:** full-viewport (`min-height: 100vh`), centered. Two-column grid
  `minmax(0,1.25fr) / minmax(0,.85fr)`, gap `clamp(32px,6vw,80px)`. **Below 900px** it collapses
  to one column and the photo moves **above** the text (`order: -1`).
- **Animated background (left of content, behind it):**
  - A full-bleed `<canvas>` drawing **16 horizontal "flow" lines** (a river/current motif). Each
    line is a sine-wave path drifting over time; a smooth cursor-tracked "bump" lifts the lines
    near the pointer. Stroke is teal at very low alpha (~0.10–0.13 in dark, ~0.07–0.10 in light),
    line width ~1.2px·dpr. See `initHero()` in the source for the exact algorithm.
  - A **cursor spotlight**: a 520px radial-gradient blob
    (`radial-gradient(circle, color-mix(var(--brand) 26%, transparent) 0%, transparent 62%)`,
    `filter: blur(8px)`) that follows the pointer with a 120ms ease.
  - A vignette overlay fading the canvas into the canvas color at the bottom.
  - Both effects are decorative and must degrade gracefully (no pointer / reduced-motion → static).
- **Content (left column), in order:**
  - **Status pill:** inline pill, 1px border, mono 12px `--text-muted`; a pulsing **8px** accent
    dot (keyframe: expanding ring shadow, 2.4s). Copy: EN "Available for new projects" / RU
    "Открыт к новым проектам". Keep the label on one line (`white-space: nowrap`).
  - **Role eyebrow:** mono, uppercase, accent color. EN "Back End Developer" / RU "Back End разработчик".
  - **Name (H1):** two lines, `font-size: clamp(52px, 9vw, 118px)`, `line-height: .92`,
    `letter-spacing: -.035em`, weight 700. First name (EN "Nikita" / RU "Никита") solid
    `--text-strong`; **last name is outlined** (EN "Rykhlov" / RU "Рыхлов") — `color: transparent;
    -webkit-text-stroke: 1.4px var(--text-strong)`.
  - **Tagline:** `clamp(16px,1.7vw,20px)`, `line-height 1.65`, `--text-muted`, `max-width 46ch`.
    EN: "I design and maintain high-load distributed systems where performance, reliability and
    fault tolerance come first."
  - **Main-skill chips:** pill chips (`height 32px`, mono 12.5px, 1px border, translucent surface):
    Software Architecture · Golang · Distributed Systems · Kafka · PostgreSQL.
  - **Actions row:** primary CTA button (accent fill, `--text-on-brand`, `radius 12px`, `height 50px`,
    `box-shadow var(--shadow-brand)`, arrow icon; hover brightens + lifts 1px) → scrolls to Contact.
    Secondary button (1px `--border-default`, transparent; hover border→accent) → scrolls to
    Experience. Then a row of **social icon buttons** (42×42, 1px border, `radius 11px`; hover →
    accent border + `--text-strong` + lift 2px).
  - **Scroll hint** (bottom-center): mono location line (EN "Tbilisi · UTC+04:00") + a bobbing
    chevron-down.
- **Photo (right column):** a square (`width min(360px,72vw)`, `aspect-ratio 1`) containing:
  a blurred teal radial glow behind; a **rotating dashed ring** (`border: 1px dashed` accent at
  55% alpha, `animation: spin 38s linear infinite`); the circular portrait inset 7%, 1px
  `--border-default`, `box-shadow var(--shadow-lg)`; and a floating badge card overlapping the
  bottom-right showing **"5+"** (mono, accent) over "years in software" (gentle 5s float).

### 2. About
- **Eyebrow:** `01 / About` (RU "О себе").
- **Layout:** two columns `minmax(0,1fr) / minmax(0,1.35fr)`, gap `clamp(28px,5vw,72px)`
  (one column below 900px).
  - **Left:** H2 title, `clamp(30px,4.2vw,52px)`, `line-height 1.08`, `-.025em`, weight 600,
    `--text-strong`. EN "I build systems meant to last." / RU "Создаю системы, которые живут долго."
  - **Right:** 3 paragraphs, `clamp(15px,1.5vw,18px)`, `line-height 1.72`, `--text-muted`
    (full copy in source).
- **Metrics band** (below): a 4-up grid, 1px hairline-divided cells inside a `radius 16px` bordered
  container. Each cell: a big mono number (`clamp(28px,4vw,46px)`, weight 600, `--text-strong`) +
  a 13px `--text-muted` label. Values: **5+** years of experience · **3** product companies ·
  **99.9%** uptime maintained · **427%** B2B sales growth. Collapses to 2 columns below 560px.

### 3. Experience  (interactive accordion — the signature section)
- **Eyebrow:** `02 / Experience`.
- A vertical stack of 3 expandable cards (one open at a time; first open by default). Card:
  `radius 18px`, `background var(--surface-1)`; border is `--border-subtle` when closed and
  **accent** when open; `box-shadow var(--shadow-md)` only when open.
- **Card header (button):** a mono index (`01`/`02`/`03`), the **company name** (H3,
  `clamp(22px,3vw,34px)`, weight 600, `--text-strong`), the role inline at 14px `--text-muted`,
  then a mono meta line `period · location`. A 36px round chevron on the right rotates 180° when open.
- **Expanded body:**
  - **Metric-led highlights:** rows of `[big accent value] [description]`. The value is mono,
    `clamp(20px,2.6vw,30px)`, weight 600, accent, right-aligned in a fixed column; the text is
    `clamp(14px,1.4vw,16px)` `--text-body`. (e.g. Kuper: `34.5%`, `427%`, `21.8%`, `99.9%`;
    Rainbowsoft uses short tokens `SDK`, `RC`, `Docker`.)
  - **Responsibilities:** mono uppercase micro-label, then a bullet list (5px accent dot bullets),
    14.5px `--text-muted`.
  - **Skill chips:** mono pill chips on `--surface-2`.
  - **Team size** line in mono `--text-subtle`.
- **Companies / content** (all copy EN + RU in source):
  - **Kuper** — Senior Back End Developer — Abu Dhabi, UAE · Remote — Dec 2023 – Present — Team 5.
  - **ELMA365** — Senior Full Stack Developer — Abu Dhabi, UAE · Remote — Nov 2022 – Dec 2023 — Team 6.
  - **Rainbowsoft** — Middle Full Stack Developer — Tbilisi, Georgia · Remote — Oct 2020 – Nov 2022 — Team 8.

### 4. Skills
- **Eyebrow:** `03 / Skills`; H2 title (EN "A full-stack toolkit, with a back-end core.").
- Responsive card grid: `repeat(auto-fit, minmax(280px, 1fr))`, gap 16px. Card: `radius 16px`,
  `--surface-1`, 1px `--border-subtle`, `box-shadow var(--shadow-md)`; hover → border accent +
  lift 3px. Each card: H3 title (18px/600), a `--text-muted` description, and mono pill chips.
- 6 categories: Languages · Back End · Front End · Development · DevOps & Automation · Other
  (chips and copy in source; language names are translated, tech terms stay literal/English).

### 5. Awards  (Honors & Awards)
- **Eyebrow:** `04 / Awards`.
- Card grid (same grid as Skills). Each card leads with a **big accent metric**
  (`clamp(34px,5vw,52px)`, mono, weight 600): **427%**, **97%**, **25.5%**; then a title
  (18px/600), a mono org line (`--text-subtle`), and a `--text-muted` paragraph.

### 6. Education & Certifications
- **Eyebrow:** `05 / Education`.
- Two columns `minmax(0,.9fr) / minmax(0,1.1fr)` (one column below 900px).
  - **Left — Education:** one card (Saratov State Technical University, 2016–2020, degree title,
    skill chips).
  - **Right — Certifications:** 3 link rows (radius 14px, 1px border; hover border→accent), each
    with a title + mono `issuer · date` and an external-link icon. Titles: "SQL & PostgreSQL: The
    Complete Developer's Guide", "Redis: The Complete Developer's Guide", "Go — The Complete Guide"
    (Udemy; hrefs in source — open in a new tab).

### 7. Writing & community
- **Eyebrow:** `06 / Writing`.
- Two columns: H2 (EN "I share what I learn.") + a paragraph and a row of pill link buttons
  (`height 44px`, 1px border, icon + label; hover border→accent + lift): dev.to, Medium, Facebook
  group, Telegram blog.

### 8. Contact  (full-bleed brand panel)
- **Eyebrow:** `07 / Contact`.
- A rounded panel (`radius clamp(20px,3vw,32px)`, 1px border, `--bg-subtle`) with a soft top-center
  teal radial wash overlay. Inside: a large display H2 (`clamp(34px,6vw,72px)`, weight 700,
  `-.03em`; EN "Let's build something that flows."), a `--text-muted` subtitle, then a responsive
  grid (`auto-fit minmax(260px,1fr)`) of 3 info tiles:
  - **Email** tile — mail icon in an accent-soft square, label + `mailto:` link, and a **copy
    button** (copy icon → swaps to a check for ~1.6s on click).
  - **Phone** tile — WhatsApp icon, `wa.me` link, copy button (same behavior).
  - **Time zone** tile — "GMT" glyph, mono `UTC+04:00`.
  - Below: the social icon-button row again.

### Footer
- Mono left line (EN "© 2026 Nikita Rykhlov · Designed & built with care") and a **Back to top**
  pill button (smooth scroll to 0).

---

## Interactions & behavior
- **Smooth scrolling** via `window.scrollTo({behavior:'smooth'})` with a −56px offset for nav and
  −30px for in-page jumps. Never `scrollIntoView`.
- **Theme toggle:** flips `data-theme` on the root, persisted to `localStorage['nr_theme']`.
  Initial value = stored value, else `prefers-color-scheme`.
- **Language toggle:** swaps the entire copy set (re-render), persisted to `localStorage['nr_lang']`.
  Initial value = stored value, else `ru` if `navigator.language` starts with "ru", else `en`.
- **Experience accordion:** clicking a header opens that card and closes the others; clicking the
  open one closes it. Chevron rotates 180°; border/shadow change as described.
- **Copy buttons:** write to clipboard (`navigator.clipboard.writeText`), show a check icon for
  1.6s, then revert. Email copies `nikita_rykhlov@outlook.com`; phone copies `+995599390961`.
- **Scroll-reveal:** every section block/card has an initial `opacity:0; translateY(26px)` and
  transitions to `opacity:1; none` over **0.7s** `cubic-bezier(.16,.84,.44,1)` when it enters the
  viewport (IntersectionObserver, threshold 0.12, `rootMargin 0 0 -7% 0`), once. Respect
  `prefers-reduced-motion` by skipping the offset.
- **Hero canvas + spotlight:** pointer-driven (see above); pause/disable under reduced motion.
- **Hover micro-interactions:** social/link buttons lift 2px and border→accent; skill cards lift
  3px; CTA brightens and lifts 1px. Transitions ~120–200ms ease.
- **Keyframes used:** pulse (status dot), spin (dashed photo ring, 38s), float (badge 5s / chevron 2.6s).

## State management
- `theme: 'dark' | 'light'` — persisted; applied to root `data-theme`.
- `lang: 'en' | 'ru'` — persisted; selects the active copy object.
- `openExp: number` — index of the open experience card (−1 = all closed; default 0).
- `copied: 'email' | 'phone' | null` — transient, auto-clears after 1.6s.
- No data fetching — all content is static (see the two copy objects `en` / `ru` in the source's
  `content()` method). Consider externalizing copy into an i18n resource (e.g. JSON per locale).

## Design tokens (exact values — full source in `tokens/`)
**Brand / accent**
- Teal scale: 400 `#2DD4BF`, **500 `#14B8A6` (base)**, 600 `#0D9488`, 700 `#0F766E`.
- Accent = `--brand` → teal-500 (light) / teal-400 (dark).
- Aqua-flow gradient (brand zones only): `linear-gradient(135deg, #2DD4BF, #14B8A6, #0D9488)`.
- Coral (NOT used in this design): `#FB7185` family.

**Neutrals (slate)**: 50 `#F8FAFC` · 100 `#F1F5F9` · 200 `#E2E8F0` · 300 `#CBD5E1` ·
400 `#94A3B8` · 500 `#64748B` · 600 `#475569` · 700 `#334155` · 800 `#1E293B` · 900 `#0F172A` ·
950 `#0B1220` (dark canvas).

**Semantic — light:** bg-canvas `#FFFFFF`, bg-subtle slate-50, surface-1 `#FFFFFF`, surface-2
slate-50, surface-3 slate-100, text-strong slate-900, text-body slate-800, text-muted slate-500,
text-subtle slate-400, text-on-brand `#FFFFFF`, border-subtle slate-200, border-default slate-300.
**Semantic — dark:** bg-canvas slate-950, bg-subtle slate-900, surface-1 slate-800, surface-2
`#16233B`, surface-3 slate-700, text-strong slate-100, text-body `#E2E8F0`, text-muted slate-400,
text-subtle slate-500, text-on-brand `#042F2C`, border-subtle slate-700, border-default `#2B3A52`.

**Typography**
- Sans: **Inter** (400/500/600/700). Mono: **JetBrains Mono** (400/500/600) — used for eyebrows,
  labels, identifiers/tech terms, metrics, meta lines. Both via Google Fonts (`tokens/fonts.css`).
- Display headings use tight tracking (`-0.02em` to `-0.035em`). Sizes are fluid (`clamp(...)`) —
  exact clamps per element are listed in each section above.

**Radii:** sm 6px · md 8px · lg 12px · pill 9999px. (This design also uses 14/16/18px on cards and
~32px on the contact panel — round, soft, never sharp.)

**Spacing:** 4px base scale (`--space-*`), but layout mostly uses fluid `clamp()` paddings/gaps as
noted per section.

**Shadows** (soft, multi-layer, low-opacity):
- sm `0 1px 2px rgba(15,23,42,.06), 0 1px 1px rgba(15,23,42,.04)`
- md `0 2px 4px rgba(15,23,42,.05), 0 6px 16px rgba(15,23,42,.08)`
- lg `0 8px 24px rgba(15,23,42,.10), 0 16px 48px rgba(15,23,42,.12)`
- brand glow (hero only) `0 12px 40px rgba(20,184,166,.22)` (dark: `.30`). Dark-theme shadows use
  black at higher alpha — see `tokens/shadows.css`.

## Assets
- **Portrait:** `source/assets/photo.png` (square, used as the circular hero photo). It's the
  owner's own photo — carry it over.
- **Brand mark:** "NR" monogram is just Inter text on the aqua-flow gradient square — no image asset.
- **Icons:** the prototype inlines an SVG sprite. Brand glyphs (GitHub, LinkedIn, Telegram,
  WhatsApp, Facebook, X, dev.to, Medium) are Simple-Icons paths; UI glyphs (mail, copy, check,
  external-link, sun, moon, arrow, chevron) are Lucide-style strokes. In the target codebase use
  your existing icon libraries — **Lucide** for UI icons (the design system's chosen set) and
  Simple Icons (or equivalent brand SVGs) for the social brands. No emoji anywhere.

**Social / contact links** (carry over exactly):
LinkedIn `linkedin.com/in/nikita-rykhlov` · GitHub `github.com/nikitaRykhlov` · Telegram
`t.me/nikitaRykhlov` · WhatsApp `wa.me/995599390961` · Facebook `facebook.com/nikitaRykhlovDev` ·
X `x.com/NikitaRykhlov` · dev.to `dev.to/nikita_rykhlov` · Medium `medium.com/@nikita_rykhlov` ·
Telegram blog `t.me/nikitaRykhlovBlog` · Facebook group `facebook.com/groups/nikitarykhlov` ·
Email `nikita_rykhlov@outlook.com` · Phone `+995 599 390 961`.

## Files in this bundle
- `prototype-standalone.html` — live, self-contained prototype (open in a browser).
- `source/Nikita Rykhlov.dc.html` — authored source: full markup + logic class with **all EN/RU
  copy** and the hero-canvas / accordion / theme / i18n / copy logic. The definitive content & motion reference.
- `source/assets/photo.png` — hero portrait.
- `tokens/colors.css · typography.css · spacing.css · shadows.css · fonts.css` — Fluweee design
  tokens (the source of truth for every value above).
