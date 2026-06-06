# Tanmaya Dwivedy — Portfolio (React + Vite)

A professional, multi-section portfolio with a warm editorial theme and a dark/light toggle.

## Prerequisites
- Install **Node.js** (LTS) from https://nodejs.org — this gives you `node` and `npm`.
  Verify in a terminal: `node -v` and `npm -v` should both print versions.

## Run it locally
```bash
npm install      # downloads dependencies (creates node_modules/) — run once
npm run dev      # starts the dev server, open the printed http://localhost:5173
```

## Build for production
```bash
npm run build    # outputs a static site to dist/
npm run preview  # preview the production build locally
```

## Where to put your stuff
- **Résumé PDF** → `public/assets/resume.pdf` (already wired to the Download button)
- **All text content** → `src/data/content.js` (name, summary, projects, links — edit here, nothing else)
- **LinkedIn / GitHub URLs** → in `src/data/content.js`, replace the `"#"` values
- **Project repo links** → optional `link` field per project in the same file

## Deploy (free)
Push to GitHub, then import the repo on **Vercel** or **Netlify**. Framework auto-detects as Vite.
Build command: `npm run build` · Output dir: `dist`
