# Brand Guidelines & Design System: Ibrahim Benabida (`ibrahim.`)

> **Version:** 2.0.0  
> **Author:** Ibrahim Benabida  
> **Institution:** University of Sciences and Technology Houari Boumediene (USTHB), Algiers  
> **Domain:** [ibrahimbenabida.online](https://www.ibrahimbenabida.online)  
> **Palette Reference:** [Coolors Palette #E8E3D9 - #5A1212 - #332D2B](https://coolors.co/e8e3d9-5a1212-332d2b)

---

## 1. Executive Summary & Brand Identity

The **Ibrahim Benabida** brand identity is built on a rare convergence: **mathematical data science** paired with **high-end editorial digital design and frontend engineering**.

```
    ┌───────────────────────────┐         ┌───────────────────────────┐
    │       DATA SCIENCE        │         │      DIGITAL DESIGN       │
    │  Mathematical Modeling    │    ∩    │    Brand Systems, Figma   │
    │  USTHB Computer Science   │         │    Typography & Layout    │
    └─────────────┬─────────────┘         └─────────────┬─────────────┘
                  │                                     │
                  └─────────────────┬───────────────────┘
                                    ▼
                      ┌───────────────────────────┐
                      │    ibrahim. (PORTFOLIO)   │
                      │  High-Performance Frontend│
                      │  Algorithmic Visual Polish│
                      └───────────────────────────┘
```

### Core Essence
* **Tagline:** *Mathematical Rigor Meets Visual Clarity.*
* **Identity Concept:** Clean, architectural, disciplined, and intellectually curious. Inspired by Swiss International Typographic Style and Dennis Snellenberg’s editorial craftsmanship, grounded in brutalist architectural geometry (USTHB campus) and natural botanical mathematics (phyllotaxis).
* **Wordmark:** `ibrahim.` (strictly lowercase with a trailing full stop).

---

## 2. The Golden Angle Symbol System

The core emblem of the brand is the **Phyllotaxis Golden Angle Spiral**, representing the bridge between computational mathematics and organic aesthetic perfection.

```
                  *  *  *  *
               *     137.5°   *
             *    \     /       *
            *      \   /         *
            *        ●           *
            *       / \          *
             *     /   \        *
               *               *
                  *  *  *  *
```

### 2.1 Mathematical Formula
The emblem is generated through Fermat’s spiral with phyllotactic angular dispersion:

$$\theta_n = n \times 137.5077^\circ \quad (\text{The Golden Angle})$$
$$r_n = c \sqrt{n}$$

Where:
* $137.5077^\circ = 360^\circ \times (1 - \frac{1}{\Phi})$, with $\Phi = \frac{1 + \sqrt{5}}{2} \approx 1.6180339887$ (The Golden Ratio).
* In botany, this divergence angle produces the most mathematically dense, non-overlapping seed distribution in sunflowers and pinecones.
* In the brand system, each node represents an algorithmic datum in harmony with visual proportion.

### 2.2 Vector Brand Assets Directory (`/brand/`)

| Asset Name | Relative Path | Purpose & Context |
| :--- | :--- | :--- |
| **Golden Angle Symbol** | `/brand/golden-angle-symbol.svg` | Standalone phyllotaxis vector mark (neutral) |
| **Golden Angle Symbol (Linen)** | `/brand/golden-angle-symbol-linen.svg` | Symbol rendered in `#E8E3D9` for dark containers |
| **Golden Angle Symbol (Cherry)** | `/brand/golden-angle-symbol-cherry.svg`| Symbol rendered in `#5A1212` for light surfaces |
| **Badge (Light Mode)** | `/brand/golden-angle-badge-light.svg` | Circular frosted badge for navigation & favicon |
| **Badge (Dark Mode)** | `/brand/golden-angle-badge-dark.svg` | Inverted circular badge for dark surfaces |
| **Clear Space Grid** | `/brand/golden-angle-clear-space.svg` | Official proportional construction & isolation grid |
| **High-Density Matrix** | `/brand/golden-angle-detailed.svg` | Complex 200+ node dispersion vector for large displays |
| **Full Lockup Logo** | `/brand/ibrahim-full-logo.svg` | Emblem + `ibrahim.` wordmark lockup |

### 2.3 Clear Space & Minimum Sizing
* **Isolation Margin:** The minimum clear space surrounding the Golden Angle emblem is equal to **$1X$** (where $X$ is the radius of the outer node cluster). No text, borders, or competing marks may enter this perimeter.
* **Minimum Digital Size:**
  * Favicon / Mobile Badge: `24px × 24px`
  * Header Emblem: `32px × 32px`
  * Hero Brand Seal: `56px × 56px` (mobile), `128px × 128px` (desktop)
* **Minimum Print Size:** `12mm × 12mm` to preserve individual spiral node definition.

---

## 3. Color Palette & Design Tokens

The brand palette is deliberately restricted to three foundational tones and one paper tint, establishing an editorial warmth that avoids cold generic monochromatic grays.

```
┌───────────────────────┬───────────────────────┬───────────────────────┐
│      SOFT LINEN       │     BLACK CHERRY      │       GRAPHITE        │
│        #E8E3D9        │        #5A1212        │        #332D2B        │
│    Light Canvas /     │  Primary Brand Ground │    High-Contrast Ink  │
│    Dark Typography    │   Editorial Accent    │   Structural Hairlines│
└───────────────────────┴───────────────────────┴───────────────────────┘
```

### 3.1 Primary Color Tokens

| Token Name | Hex Code | RGB | HSL | Role & Usage |
| :--- | :--- | :--- | :--- | :--- |
| `--soft-linen` | `#E8E3D9` | `232, 227, 217` | `40°, 24%, 88%` | Primary background in Light Mode; primary typography and icon color in Dark Mode. |
| `--black-cherry` (Terracotta) | `#5A1212` | `90, 18, 18` | `0°, 67%, 21%` | Primary background in Dark Mode & Mobile Hero; primary brand identity accent; text highlight. |
| `--graphite` | `#332D2B` | `51, 45, 43` | `15°, 9%, 18%` | Typographic ink in Light Mode; dark structural panels; footer backgrounds. |
| `--paper` | `#F4F1EA` | `244, 241, 234` | `42°, 31%, 94%` | Secondary card background and modal surface highlight. |

### 3.2 Semantic Mode Mapping

```css
/* Light Mode (Editorial Architectural Paper) */
:root {
  --page-bg: #E8E3D9;
  --page-text: #332D2B;
  --terracotta: #5A1212;
  --graphite-border: rgba(51, 45, 43, 0.25);
  --graphite-border-strong: rgba(51, 45, 43, 0.90);
}

/* Dark Mode (Dennis Snellenberg Inverted Cherry) */
.dark {
  --page-bg: #5A1212;
  --page-text: #E8E3D9;
  --terracotta: #5A1212;
  --graphite-border: rgba(232, 227, 217, 0.25);
  --graphite-border-strong: rgba(232, 227, 217, 0.85);
}
```

### 3.3 Contrast & Accessibility Standards
* **Light Mode:** `#332D2B` (Graphite) on `#E8E3D9` (Soft Linen) achieves a contrast ratio of **9.82:1** (Exceeds WCAG AAA standard).
* **Dark Mode:** `#E8E3D9` (Soft Linen) on `#5A1212` (Black Cherry) achieves a contrast ratio of **8.64:1** (Exceeds WCAG AAA standard).
* **Focus Indicator:** Dedicated 2px solid outline in `--terracotta` (Light) and `--soft-linen` (Dark) with a 2px offset.

---

## 4. Typography System

The primary typeface across all digital and print collateral is **Space Grotesk**, designed by Florian Karsten based on the proportions of Space Mono. It merges brutalist technical monospace structure with proportional reading rhythm.

```
       Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm
       Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
       0123456789 .,:;!?@#$%&*()
```

### 4.1 Typographic Scale & Hierarchy

| Role | Weight | Tracking | Leading | Desktop Scale | Mobile Scale | Example |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Brand Hero Mark** | Bold (700) | `-0.10em` | `0.8` | `clamp(4.5rem, 13vw, 10.5rem)` | `clamp(3.8rem, 17vw, 5.5rem)` | `ibrahim.` |
| **Section Title** | Bold (700) | `-0.06em` | `0.9` | `clamp(2.5rem, 6vw, 4.5rem)` | `2.25rem - 3rem` | `The designer.` |
| **Project Headline** | Bold (700) | `-0.04em` | `1.0` | `2rem - 2.5rem` | `1.5rem - 1.75rem` | `TektoFlow Agency` |
| **Subheadings / Metas**| Medium (500)| `-0.02em` | `1.2` | `1.125rem - 1.25rem` | `1rem` | `Mathematical Spiral` |
| **Body Reading** | Regular (400)| Normal | `1.6` | `1rem` (16px) | `0.9375rem` (15px) | Narrative bio paragraphs |
| **Micro Labels** | SemiBold (600)| `+0.08em` | `1.0` | `0.75rem` (12px, UPPERCASE) | `0.6875rem` (11px, UPPERCASE) | `/ VIEW ALL WORKS` |

### 4.2 Editorial Rules & Punctuation Conventions

1. **The Trailing Period Rule:**
   Major headline anchors and brand names intentionally use a lowercase word followed by a period to signify typographic finality:
   * `ibrahim.`
   * `designer.`
   * `works.`
   * `services.`
   * `chat.`
2. **The "The" Rule:**
   Section headings introducing identity must include the definite article:
   * **Correct:** `The designer.`
   * **Incorrect:** `designer.` (when used as section header)
3. **Never Capitalize the Wordmark:**
   * **Correct:** `ibrahim.`
   * **Incorrect:** `Ibrahim.`, `IBRAHIM.`, `Ibrahim`
4. **Micro-Navigation Slashing:**
   Architectural category indices and marquee strings are delimited by forward slashes with optical spacing:
   * `/ MATHEMATICAL MODELING / DIGITAL DESIGN / USTHB ALGIERS / DATA SCIENCE /`

---

## 5. Algorithmic Pattern System

The brand incorporates a library of custom generative SVG patterns derived from phyllotaxis geometry, wave mechanics, and dot matrices.

```
    RINGS PATTERN             BLOOM PATTERN             HALFTONE PATTERN
    (Harmonic Orbits)         (Phyllotaxis Flower)      (Algorithmic Matrix)

       ◎   ◎   ◎                ✾     ✾     ✾            ●  •  ·  •  ●
     ◎   ◎   ◎   ◎            ✾    ✾   ✾    ✾          •  ●  •  ·  •
       ◎   ◎   ◎                ✾     ✾     ✾            ·  •  ●  •  ·
```

### 5.1 Pattern Taxonomy

| Pattern Motif | Concept & Math | Best Use Context |
| :--- | :--- | :--- |
| **`rings`** | Concentric circular orbital resonances with alternating line weights | Hero brand seal container, `/links` page background |
| **`bloom`** | Pure 137.5° sunflower seed distribution | Full-bleed editorial section transitions, poster designs |
| **`cluster`** | High-density grouped data nodes | Technical data science representations, code callouts |
| **`halftone`** | Geometric dot raster with scale modulation | Separation strips, modal headers, card footers |
| **`ripple`** | Planar wave interference lines | Dynamic visual breaks, backdrop textures |

### 5.2 Colorways Matrix

Each pattern exists in 4 curated two-tone colorways:
* `cherry-linen`: `#5A1212` foreground on `#E8E3D9` background
* `linen-cherry`: `#E8E3D9` foreground on `#5A1212` background
* `graphite-linen`: `#332D2B` foreground on `#E8E3D9` background
* `paper-graphite`: `#F4F1EA` foreground on `#332D2B` background

### 5.3 Pattern Application Guidelines
* **Opacity Range:** Patterns should never fight foreground typography. Maintain between **12% and 25% opacity** (`opacity-15` to `opacity-25`).
* **Masking:** Use radial or linear gradient masks (`-webkit-mask-image: linear-gradient(to bottom, ...)` or `patterns.css`) to smoothly fade patterns into solid negative space.

---

## 6. Grid & Layout Architecture

The visual layout adheres to a strict **architectural grid system** with visible hairlines, paying homage to architectural blueprints and print editorials.

```
┌───────┬─────────────────────────────────────────────────────────────┬───────┐
│ Gutter│ 12-COLUMN ARCHITECTURAL CONTENT GRID                        │ Gutter│
│ (1 col│  - 1px hairline dividers (border-grid)                      │ (1 col│
│ spacer│  - Asymmetrical column spans: 7 cols (text) + 5 cols (media)│ spacer│
└───────┴─────────────────────────────────────────────────────────────┴───────┘
```

### 6.1 Grid Specs
* **Grid Count:** 12 columns desktop, 6 columns tablet, single/double column mobile.
* **Hairline Borders:** `1px solid var(--graphite-border)` (`border-grid`).
* **Asymmetric Desktop Ratios:**
  * Hero Section: 8-column wide landscape (USTHB campus) + 4-column compact portrait (Twilight Lake).
  * Identity Banner: 7-column monumental title + 3-column disciplines stack + 2-column brand emblem seal.
* **Mobile Hero Viewport:**
  * Full-bleed editorial portrait (`h-[calc(100dvh-3.5rem)]`).
  * Deep cherry gradient overlay (`bg-gradient-to-t from-[#5A1212] via-[#5A1212]/60 to-transparent`).
  * Bottom typography anchoring with golden angle symbol badge.

### 6.2 Responsive Ergonomics
* Zero horizontal scroll (`overflow-x: clip`).
* Minimum touch target of **44px × 44px** on all interactive buttons.
* Minimum **16px** font size on form inputs to prevent mobile Safari viewport zooming.

---

## 7. Photography & Art Direction

The brand imagery balances **structured academic environments** with **high-contrast personal portraiture**.

```
┌─────────────────────────────────┐     ┌─────────────────────────────────┐
│     STUDIO PORTRAITURE          │     │    ARCHITECTURAL LANDMARKS      │
│  - Deep cherry backdrop         │     │  - USTHB brutalist arches       │
│  - Warm directional key light   │     │  - Algerian landscape & dusk    │
│  - Direct, confident eye-line   │     │  - Natural daylight & balance   │
└─────────────────────────────────┘     └─────────────────────────────────┘
```

### 7.1 Photography Principles
1. **Studio Editorial Portraiture:**
   * **Subject:** Ibrahim Benabida.
   * **Lighting:** Warm directional rim light, high-contrast chiaroscuro, focused gaze.
   * **Backdrop:** Rich burgundy/cherry (`#5A1212`).
   * **Cropping:** Tight editorial crop focusing on expression, curly hair texture, and structured posture.
2. **Campus & Environmental Architecture:**
   * **Subject:** USTHB brutalist concrete arches, campus lawns, Algiers lake landscapes at sunset.
   * **Color Grade:** Desaturated concrete tones paired with warm sunlit greens and soft dusk skies.
   * **Composition:** One-point perspective grids that mirror the website's architectural border lines.

### 7.2 Web Delivery Standards
* **Format:** Modern `.webp` format across all production assets.
* **Dimensions:**
  * Mobile Hero: `450 × 671` px (`~47 KiB`, LCP preloaded).
  * Desktop Hero Portrait: `686 × 1024` px (`~82 KiB`).
  * Architectural Campus: `498 × 280` px mobile / `1024 × 576` px desktop.

---

## 8. Brand Voice & Messaging Matrix

### 8.1 Persona Archetype
* **Primary:** The Creator-Scholar (disciplined, analytical, mathematically curious).
* **Secondary:** The Architectural Craftsman (minimalist, obsessed with proportions, typography, and speed).

### 8.2 Three Foundational Pillars

```
01. DATA SCIENCE
    Statistical distributions, calculus, algorithms, Python, SQL, and data modeling.
    Grounding: Academic study at USTHB Computer Science.

02. BRAND & UI DESIGN
    Design systems, modular Figma component libraries, typography scales, editorial layout.
    Grounding: Clear spaces, harmonic ratios, and intentional visual storytelling.

03. FRONTEND ENGINEERING
    Production React 19, TypeScript, Tailwind CSS, Vite, Sub-second performance (100 Core Web Vitals).
    Grounding: Clean architecture, zero layout shift, accessibility, and fluid responsiveness.
```

### 8.3 Tone Rules

| Dimension | We Are | We Are Not |
| :--- | :--- | :--- |
| **Formality** | Respectful, thoughtful, articulate | Stuffy, bureaucratic, or academic jargon for its own sake |
| **Confidence** | Quietly confident, evidenced by real work | Boastful, hype-driven, using buzzwords ("rockstar", "guru") |
| **Aesthetic** | Editorial, architectural, precise | Flashy, cluttered, neon-soaked, or AI-generated generic |
| **Clarity** | Direct, concise, structured | Vague, fluffy, using generic agency templates |

---

## 9. Brand Governance (Do’s & Don’ts)

```
┌─────────────────────────────────┐     ┌─────────────────────────────────┐
│             DO                  │     │             DON'T               │
├─────────────────────────────────┤     ├─────────────────────────────────┤
│ ✓ Use "ibrahim." in lowercase   │     │ ✗ Never capitalize "Ibrahim."   │
│ ✓ Use "The designer." header    │     │ ✗ Never omit "The" in bio header│
│ ✓ Keep borders at 1px hairlines │     │ ✗ Never use heavy drop-shadows  │
│ ✓ Maintain 137.5° spiral symbol │     │ ✗ Never distort or skew symbol  │
│ ✓ Use Linen (#E8E3D9) & Cherry  │     │ ✗ Never use generic blue/purple │
│ ✓ Keep patterns at 12-25% opacity│    │ ✗ Never make patterns high-alpha│
└─────────────────────────────────┘     └─────────────────────────────────┘
```

1. **Never alter the Golden Angle phyllotaxis geometry.** The spiral nodes follow a deterministic mathematical sequence; do not manually move nodes or introduce random scatter.
2. **Never change the background color away from `#E8E3D9` (Light) or `#5A1212` (Dark).** The brand identity relies on this specific linen-and-cherry contrast pairing.
3. **Never omit the trailing period on the wordmark.** The dot is an integral structural component of the `ibrahim.` mark.
4. **Never use standard corporate blue or neon gradients.** The palette must remain grounded in organic, architectural, and editorial colors.

---

## 10. Contact & Official Channels

* **Portfolio:** [https://ibrahimbenabida.online](https://www.ibrahimbenabida.online)
* **Direct Links:** [https://ibrahimbenabida.online/links](https://www.ibrahimbenabida.online/links)
* **Email:** `email.me@ibrahimbenabida.online`
* **GitHub:** [github.com/blood-prog](https://github.com/blood-prog)
* **Instagram:** [@benabida.ibrahim](https://www.instagram.com/benabida.ibrahim)
* **WhatsApp:** [+213 561 48 10 82](https://wa.me/213561481082)
