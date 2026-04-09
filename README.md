# India Rodeia Website

Portfolio website for `indiarodeia.com`.

This repository contains the frontend for India Rodeia's personal website and portfolio. The project is built as a React single-page application with Vite and TypeScript, focused on editorial presentation, bilingual content, case studies, and practical SEO defaults.

## Stack

- Vite
- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui
- React Router
- Vitest
- Playwright

## Main Features

- Homepage with services, process, sectors, about, and contact sections
- Portfolio listing page
- Individual case study pages under `/portfolio/:slug`
- Portuguese and English content switching
- Light and dark theme support
- Route-aware SEO metadata, `robots.txt`, and `sitemap.xml`

## Project Structure

- `src/pages/` page-level routes
- `src/components/` shared UI and content sections
- `src/data/projects.ts` portfolio and case study content
- `src/i18n/` language context and translations
- `public/` static public assets such as favicon, sitemap, and OG image

## Scripts

- `npm run dev` starts the local Vite development server
- `npm run build` creates the production build
- `npm run preview` serves the production build locally
- `npm run lint` runs ESLint
- `npm run test` runs Vitest once
- `npm run test:watch` runs Vitest in watch mode

## Local Development

1. Install dependencies with `npm install`
2. Start the project with `npm run dev`
3. Open the local URL shown by Vite

## SEO Notes

- Canonical domain is `https://indiarodeia.com`
- Social preview image is `public/og-image.jpg`
- Sitemap is available at `public/sitemap.xml`
- Route-level SEO metadata is handled in `src/components/Seo.tsx`

## Notes

- The app currently uses `BrowserRouter`, so it behaves as a SPA
- If stronger SEO is needed later, prerendering or SSR would be the next step
