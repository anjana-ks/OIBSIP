# AuraGrid.

> **Inspiration, sorted by shade.** A minimalist, Pinterest-inspired visual moodboard hub where objects, architecture, nature, and design fragments are grouped by cohesive color palettes and aesthetic vibes.

Built as a static landing page for **Oasis Infobyte — Level 1, Task 1** (Web Development Internship).

---

## Tech Highlights

This project is engineered for clarity, performance, and submission readiness — with zero dependencies and no UI frameworks.

| Highlight | Implementation |
|---|---|
| **Pure HTML5 / CSS3** | 100% hand-written markup and styles — no Bootstrap, Tailwind, or external CSS libraries |
| **Semantic structure** | Uses `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, and `<article>` throughout |
| **Zero JavaScript** | Mobile navigation powered by a CSS-only checkbox hack — no scripts required |
| **Modern layout** | CSS Grid and Flexbox for masonry grids, split-screen sections, and responsive columns |
| **CSS custom properties** | Centralized design tokens for colors, typography, spacing, shadows, and transitions |
| **Image performance** | Native `loading="lazy"` on all moodboard and spotlight images |
| **Accessibility** | Descriptive `alt` attributes, `aria-label` regions, visually hidden form labels, and screen-reader utilities |
| **Deploy-ready** | Fully static — works locally, on GitHub Pages, Vercel, Netlify, or any static host |

---

## Project Structure

```
Anjanaks_Task1/
│
├── index.html          # Semantic HTML5 page structure & content
├── style.css           # Custom stylesheet — layout, design system, responsiveness
├── README.md           # Project documentation (this file)
│
└── assets/             # Local moodboard photography (PNG)
    ├── nordic-living.png
    ├── brutalist-concrete.png
    ├── midnight-tokyo.png
    ├── earthy-sage.png
    ├── burnt-ochre.png
    ├── cyber-neon.png
    ├── soft-terracotta.png
    ├── monochrome-noir.png
    ├── linen-textures.png
    ├── editorial-glow.png
    ├── warm-neutral.png
    └── dewy-glow.png
```

---

## Design System & Architecture

All visual decisions are tokenized in `:root` within `style.css`, keeping the codebase maintainable and consistent.

### Color Palette

| Token | Value | Usage |
|---|---|---|
| `--color-bg` | `#F9F9F9` | Studio-gallery off-white page background |
| `--color-white` | `#FFFFFF` | Card surfaces, content panels |
| `--color-text` | `#111111` | Primary body and heading text |
| `--color-muted` | `#6B6B6B` | Sub-headlines, tags, secondary copy |
| `--color-border` | `#E5E5E5` | Dividers, card edges, input borders |
| `--color-border-dark` | `#CCCCCC` | Emphasized borders on interactive elements |

### Typography

| Role | Font | Fallback |
|---|---|---|
| Headings | **Cormorant Garamond** (Google Fonts) | Georgia, serif |
| UI, tags, buttons, body | **Plus Jakarta Sans** (Google Fonts) | system-ui, sans-serif |

### Motion & Interaction

| Property | Value | Applied to |
|---|---|---|
| `--ease-premium` | `cubic-bezier(0.25, 1, 0.5, 1) 0.4s` | Buttons, links, cards, images, swatches |
| Card hover lift | `translateY(-6px)` | Pinterest-style moodboard cards |
| Image hover zoom | `scale(1.03)` | Grid card images (within `overflow: hidden`) |
| Shadow depth | `--shadow-card` → `--shadow-card-hover` | Card elevation on hover |

### Spacing & Layout

| Token | Value |
|---|---|
| `--max-width` | `1280px` |
| `--nav-height` | `68px` |
| `--space-xs` → `--space-2xl` | `0.5rem` → `6rem` |

### Responsive Breakpoints

| Viewport | Grid columns | Notable layout changes |
|---|---|---|
| **Desktop** (default) | 4-column masonry grid | Split-screen Palette Spotlight, full navigation |
| **Tablet** (`≤ 1024px`) | 3-column grid | Spotlight stacks vertically; footer becomes 2-column |
| **Mobile** (`≤ 768px`) | 2-column grid | Collapsible hamburger nav; newsletter form stacks |
| **Small mobile** (`≤ 480px`) | 1-column grid | Single-column cards; compact spotlight collage |

---

## Page Sections Breakdown

The landing page is organized into **7 core structural zones**, each mapped to semantic HTML landmarks.

### 1. Header & Navigation

- Sticky top bar with frosted-glass backdrop blur
- **AuraGrid.** wordmark, anchor links (Explore, Palettes, Submit), and a bordered **Curate Mood** CTA
- CSS-only mobile menu via hidden checkbox + hamburger label

### 2. Hero Section

- Centered serif headline: *"Inspiration, sorted by shade."*
- Supporting sub-headline and five interactive aesthetic tag pills (`#MinimalistCream`, `#CyberpunkNeon`, `#EarthySage`, `#MonochromeNoir`, `#BurntOchre`)

### 3. Pinterest-Style Masonry Grid (`#explore`)

- The core inspiration engine — **8 moodboard cards** at staggered heights (`card--tall`, `card--medium`, `card--short`)
- Each card contains a photograph, category label, 3-circle color swatch bar, vibe name, and hex tag

### 4. Palette Spotlight (`#palettes`)

- Split-screen feature highlighting **"The Editorial Warmth"**
- Left: compact 6-image interlocking collage grid
- Right: editorial copy with three tone breakdowns (Linen Base, Raw Umber, Blush Highlight) using image thumbnails

### 5. Newsletter CTA (`#curate`)

- Heavily padded section with email capture field and pill-shaped Subscribe button
- Visually hidden label for screen-reader accessibility

### 6. Submit Banner (`#submit`)

- Minimal call-to-action inviting creators to share moodboards with the AuraGrid community

### 7. Footer

- Four-column layout: brand tagline, Platform links, Resources links, and social icon placeholders (Instagram, Pinterest, Behance, Dribbble — inline SVG)
- Copyright row with Privacy and Terms links

---

## Media Directory — Asset Mapping

Twelve unique PNG images power the visual moodboard. Some assets appear in both the grid and the Palette Spotlight section.

| Asset File | Subject / Vibe | Used In |
|---|---|---|
| `nordic-living.png` | Soft linen & earth-tone textures | Grid card · Spotlight collage |
| `brutalist-concrete.png` | Sculptural concrete architecture | Grid card |
| `midnight-tokyo.png` | Neon-lit Tokyo street at night | Grid card |
| `earthy-sage.png` | Fresh sage on wooden board | Grid card |
| `burnt-ochre.png` | Desert dunes at golden hour | Grid card |
| `cyber-neon.png` | Cyberpunk digital data stream | Grid card |
| `soft-terracotta.png` | Draped terracotta cotton jersey | Grid card · Spotlight collage |
| `monochrome-noir.png` | Black & cream fashion editorial | Grid card |
| `linen-textures.png` | Folded cream linen fabric | Spotlight collage · Tone thumbnail |
| `editorial-glow.png` | Dewy editorial beauty portrait | Spotlight collage |
| `warm-neutral.png` | Warm wooden decor composition | Spotlight collage · Tone thumbnail |
| `dewy-glow.png` | Soft peach editorial glow | Spotlight collage · Tone thumbnail |

> **Note:** All image paths are relative (`assets/filename.png`). The entire `assets/` folder must be deployed alongside `index.html` for images to render correctly.

---

## Local Setup & Deployment

### Run Locally

**Option A — Open directly**

Double-click `index.html` or open it in any modern browser (Chrome, Edge, Firefox).

**Option B — Live Server (recommended)**

1. Open the project folder in VS Code or Cursor
2. Install the **Live Server** extension
3. Right-click `index.html` → **Open with Live Server**
4. The page opens at `http://127.0.0.1:5500` with hot reload

**Option C — Python static server**

```bash
cd Anjanaks_Task1
python -m http.server 8000
```

Then visit `http://localhost:8000`.

---

### Deploy to GitHub Pages

1. Push the full project to a GitHub repository (include `index.html`, `style.css`, and `assets/`)

   ```
   oibsip/
   └── anjanaks_task1/
       ├── index.html
       ├── style.css
       ├── README.md
       └── assets/
   ```

2. Go to **Repository → Settings → Pages**
3. Set source to **Deploy from branch** → `main` → `/ (root)`
4. Your live URL:

   ```
   https://YOUR_USERNAME.github.io/oibsip/anjanaks_task1/
   ```

---

### Deploy to Vercel

1. Sign in at [vercel.com](https://vercel.com) with your GitHub account
2. Click **Add New Project** → import your repository
3. Set the **Root Directory** to `anjanaks_task1` (if nested in a monorepo)
4. Framework preset: **Other** (no build step required)
5. Click **Deploy** — Vercel serves the static files instantly

---

## License & Attribution

This project was created as part of the **Oasis Infobyte Web Development Internship — Level 1, Task 1**.

- **Fonts:** [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) & [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) via Google Fonts
- **Images:** Curated moodboard photography stored locally in `assets/`

---

<p align="center">
  <strong>AuraGrid.</strong> — Visual discovery, organized by vibe.
</p>
