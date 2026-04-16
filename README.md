# Arth Lai — Resume Site

Personal resume & portfolio site. Separate from `arthlai.com` (consulting).

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm start
```

## Deploy

Targeting Zeabur — auto-detects Next.js. Push to main, point Zeabur project at this repo.

## Structure

- `src/app/page.tsx` — Home (hero + capabilities + featured projects)
- `src/app/experience/` — Work experience timeline
- `src/app/projects/` — Projects index + 3 case studies
- `src/app/skills/` — Skills map
- `src/app/contact/` — Contact info
- `src/components/` — Nav, Footer, Section, CaseStudy components
