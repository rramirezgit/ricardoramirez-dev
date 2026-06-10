<h1 align="center">ricardoramirez.dev</h1>

<p align="center">
  <strong>Personal portfolio hub</strong> — case studies with real measured metrics<br/>
  <strong><a href="https://ricardoramirez-dev.vercel.app">Live</a></strong>
</p>

![Portfolio hub demo](docs/demo.gif)

---

## What it is

The hub that ties my portfolio together: a bento grid of projects and one case study per project following a fixed format — **Problem → Solution → Key decisions → Stack → measured metrics** (Lighthouse scores, fps, test counts; nothing invented).

## Projects it showcases

| Project | Live |
|---|---|
| GeoInsights — geospatial platform | [geoinsights-ten.vercel.app](https://geoinsights-ten.vercel.app) |
| Pulse — engineering analytics | [pulse-analytics-six.vercel.app](https://pulse-analytics-six.vercel.app) |
| AURORA — animation showcase | [aurora-landing-kappa.vercel.app](https://aurora-landing-kappa.vercel.app) |
| Interactive CV | [cv-next-rose.vercel.app](https://cv-next-rose.vercel.app) |

## Technical notes

- Content lives as **typed TypeScript data** (`src/content/projects.ts`) — four case studies don't justify a CMS
- Dynamic **OG images** per case study via `next/og`
- `sitemap.ts`, `robots.ts` and **Person JSON-LD** for SEO
- Subtle GSAP hero reveal, gated behind `prefers-reduced-motion`

## Stack

Next.js 16 (App Router) · React 19 · TypeScript strict · Tailwind CSS 4 · GSAP

```bash
pnpm install && pnpm dev
```
