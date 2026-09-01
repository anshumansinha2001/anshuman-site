# Anshuman Sinha — Portfolio

Premium personal portfolio for **Anshuman Sinha**, SEO Specialist & Computer Science Engineer (Bengaluru, India).

Built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4** and **Motion**.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |

## Structure

```
src/
  app/
    layout.tsx           Metadata, fonts, Person JSON-LD schema
    page.tsx             Section composition
    globals.css          Design tokens + utilities (Tailwind v4 @theme)
    opengraph-image.tsx  Generated 1200x630 social card
    icon.jpg             Favicon (profile photo)
    sitemap.ts robots.ts
  components/            Nav, Hero, Marquee, About, Services, Experience,
                         Projects, Skills, Credentials, Contact, Footer
  lib/content.ts         All site copy and data — edit here
public/
  anshuman-sinha.jpg           Profile photo
  Anshuman-Sinha-Resume.docx   Downloadable resume
```

## Editing content

Almost everything (bio, stats, services, experience, projects, skills,
education, certifications, nav links) lives in `src/lib/content.ts`.
Change it there and every section updates.

## Design tokens

Colors, fonts and easing are defined in the `@theme` block of
`src/app/globals.css`:

- `--color-ink` — near-black background
- `--color-accent` — acid lime `#c9f24d`
- `--color-accent-2` — teal `#4de0c0`
- Display font pairing: Geist Sans / Geist Mono / Instrument Serif (italic accents)

## Before deploying

- Update `siteUrl` in `src/app/layout.tsx`, `src/app/sitemap.ts` and
  `src/app/robots.ts` if the domain changes (currently `https://anshumansinha.site`).
- Optionally export the resume as PDF and replace the `.docx` in `public/`.
