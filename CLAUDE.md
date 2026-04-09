# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install        # install dependencies
npm run dev        # start dev server at http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview the production build locally
npm run lint       # run ESLint
```

## Architecture

Vite + React single-page app. No router — the app is one page with anchor-link navigation.

```
src/
  App.jsx             # root: holds lang state, composes all sections
  main.jsx            # mounts React, imports style.css
  style.css           # all styles (migrated from original static site)
  content.js          # all EN/FR text content and project list
  components/
    Navbar.jsx        # fixed top navbar with EN/FR toggle button
    Hero.jsx          # hero section (greeting, selfie, social links)
    About.jsx         # work experience section
    Projects.jsx      # project cards grid
    Footer.jsx        # footer
public/
  images/             # all static assets (images, SVGs, PDF resume)
CNAME                 # bradleydesmornes.com — do not modify
```

## Key Patterns

**Bilingual**: Language state (`'en'` | `'fr'`) lives in `App.jsx` and is passed as a `lang` prop to every component. All translated strings are in `src/content.js` — edit text there, not in components.

**Adding a project**: Add an entry to the `projects` array in `src/content.js` with an `id`, `label` (`{en, fr}`), and `href`. Add a matching `#projectN` CSS rule in `src/style.css` with the background image. Place the image in `public/images/`.

**Static assets**: Everything in `public/` is served at the root path. Reference images as `/images/filename.ext` in JSX and CSS (not `./images/`).

**Brand colors**: `#3B4B59` (dark blue-grey), `#a3b1ed` (highlight periwinkle).

**Responsive**: Mobile breakpoint at `@media (max-width: 768px)` at the bottom of `src/style.css`.
