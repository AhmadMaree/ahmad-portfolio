# Ahmad Marei — Personal Portfolio

A responsive React, TypeScript, and Vite portfolio featuring Ahmad Marei's software engineering experience, AI engineering work, and DevPilot AI project.

## Requirements

- Node.js 20.19+ or 22.12+ (Vite 6 works with Node 18+, but use an actively supported Node version)
- npm

## Start on Windows (PowerShell)

```powershell
cd .\ahmad-portfolio
npm install
npm run dev
```

Open the URL printed by Vite (typically http://localhost:5173).

## Build

```powershell
npm run build
npm run preview
```

The static site is generated in `dist/`.

## Project structure

```text
ahmad-portfolio/
├── public/             # Professional portrait and downloadable CV
├── src/
│   ├── data/
│   │   └── portfolio.ts # Typed portfolio content, links, and project details
│   ├── App.tsx         # Page sections and interactions
│   ├── main.tsx        # React entry point
│   └── styles.css      # Hybrid responsive visual design
├── index.html          # SEO title and description
├── package.json
├── tsconfig.json
├── tsconfig.app.json
└── vite.config.ts
```

## Portfolio assets

- The hero uses `public/Confident Portrait in Black Suit.png`.
- Resume buttons download `public/Ahmad_Marei_Professional_CV.pdf`.
- DevPilot AI uses an original workflow illustration because no product screenshot is included. Replace it with an authentic screenshot only when one is available.
- Update portfolio details and external links in `src/data/portfolio.ts`; update theme and layout in `src/styles.css`.
- Keep Microsoft Azure Solutions Architect Expert marked **In Progress** until completed.

## Free deployment

**Cloudflare Pages:** Push to GitHub, import repository, set build command `npm run build` and output directory `dist`. No backend required.

**GitHub Pages:** For a project repository hosted at `/repo-name/`, configure Vite `base: '/repo-name/'` and set up a Pages deployment workflow. For a user-site repository named `AhmadMaree.github.io`, the default `/` base works.

## Accessibility

- Semantic landmarks and headings
- Keyboard-accessible links and responsive mobile navigation
- Reduced-motion support for decorative animations
- Descriptive portrait alternative text
- External links use `rel="noreferrer"`
- No contact backend, secrets, or API keys required
