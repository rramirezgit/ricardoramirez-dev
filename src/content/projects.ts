export interface ProjectMetric {
  value: string
  label: string
}

export interface ProjectDecision {
  title: string
  detail: string
}

export interface Project {
  slug: string
  name: string
  tagline: string
  problem: string
  solution: string
  stack: string[]
  decisions: ProjectDecision[]
  metrics: ProjectMetric[]
  live: string | null
  code: string
  accent: string
}

export const PROJECTS: Project[] = [
  {
    slug: 'geoinsights',
    name: 'GeoInsights',
    tagline: 'Geospatial visualization platform — 6 interactive map demos over Argentina',
    problem:
      'Geospatial frontends are a specialized niche: WebGL map engines, large datasets, spatial math and cinematic camera work rarely coexist in one well-architected codebase that stays maintainable.',
    solution:
      'A single-page application with six self-contained demos — agricultural heatmaps, real-time fleet tracking, satellite comparison, polygon drawing with instant spatial analysis, and a scroll-driven story map. Each demo owns its page, map layers, controls and store slice, so demos can be added or removed without cross-cutting changes.',
    stack: [
      'React 19',
      'TypeScript',
      'Vite',
      'Mapbox GL',
      'deck.gl',
      'Zustand',
      'TanStack Query',
      'Turf.js',
      'Zod',
      'Vitest',
      'Playwright',
    ],
    decisions: [
      {
        title: 'Zustand + TanStack Query instead of one store',
        detail:
          'Map viewport and UI state live in three small Zustand stores while fetched GeoJSON is owned by TanStack Query with a 5-minute staleTime. Each tool does what it is best at.',
      },
      {
        title: 'Client-side spatial analysis, server-ready seams',
        detail:
          'Area, perimeter and centroid run in the browser with Turf.js behind a typed service layer, designed so a PostGIS backend can replace it without touching the UI.',
      },
      {
        title: 'WebGL stays out of the unit-test scope',
        detail:
          'Stores, spatial math, simulation and validators are unit-tested; Mapbox and deck.gl are mocked at the module boundary and the real canvas is covered by Playwright smoke tests in CI.',
      },
    ],
    metrics: [
      { value: '100', label: 'Lighthouse SEO' },
      { value: '98', label: 'Lighthouse a11y' },
      { value: '70 + 7', label: 'unit + e2e tests in CI' },
      { value: '6', label: 'interactive demos' },
    ],
    live: 'https://geoinsights-ten.vercel.app',
    code: 'https://github.com/rramirezgit/GeoInsights',
    accent: 'from-emerald-400 to-cyan-400',
  },
  {
    slug: 'pulse',
    name: 'Pulse',
    tagline: 'Engineering analytics for open-source teams, on live GitHub data',
    problem:
      'Dashboard portfolios usually fake their data and avoid the hard parts: rate-limited APIs, large lists, mutations that can fail. Recruiters see static mocks, not engineering.',
    solution:
      'An analytics dashboard over the live GitHub API with the full TanStack suite: streamed server components for the overview, a full-featured data table, an infinite virtualized issues explorer with hover prefetching, an optimistic watchlist with demonstrable rollback, and an honest 100k-row stress test.',
    stack: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'TanStack Query',
      'TanStack Table',
      'TanStack Virtual',
      'Tailwind CSS 4',
      'Zod',
      'Recharts',
      'Vitest',
    ],
    decisions: [
      {
        title: 'The GitHub token never reaches the client',
        detail:
          'Every call flows through Server Components or Route Handlers with 15-minute fetch revalidation. A public deploy serves any number of visitors with a handful of real API requests per window, so the rate limit stops being a problem.',
      },
      {
        title: 'Optimistic updates with snapshot rollback',
        detail:
          'The watchlist updates the cache before the request resolves; on failure the onMutate snapshot restores state and an aria-live region announces it. A failure switch makes the path demonstrable, and the lifecycle is unit-tested.',
      },
      {
        title: 'Honest stress testing',
        detail:
          'No free API serves 100k paginable rows, so the stress test generates a seed-deterministic dataset in the browser and says so. Sorting and scrolling 100k rows without dropping frames is the real part.',
      },
    ],
    metrics: [
      { value: '119 fps', label: 'scrolling 100k rows' },
      { value: '39', label: 'DOM rows out of 100,000' },
      { value: '~370 ms', label: 'full 100k client-side sort' },
      { value: '15 min', label: 'server cache window' },
    ],
    live: null,
    code: 'https://github.com/rramirezgit/pulse-analytics',
    accent: 'from-violet-400 to-fuchsia-400',
  },
  {
    slug: 'aurora',
    name: 'AURORA',
    tagline: 'Award-style product landing for a fictional smart lamp',
    problem:
      'Most engineers can build a dashboard; far fewer can build the page that sells the product — scroll choreography, 3D, typography and motion that hold 60fps and still respect accessibility.',
    solution:
      'A one-page scroll experience: SplitText reveals, a scroll-scrubbed manifesto, count-up specs, a Flip-animated colorway selector and a procedural 3D lamp that explodes into its four parts inside a pinned scene as you scroll.',
    stack: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'GSAP + ScrollTrigger',
      'SplitText',
      'Flip',
      'Lenis',
      'React Three Fiber',
      'Tailwind CSS 4',
    ],
    decisions: [
      {
        title: 'Scroll progress travels through a ref, not state',
        detail:
          'The pinned ScrollTrigger writes progress into a ref consumed by useFrame with lerp smoothing — zero React re-renders during scroll, which is how the scene stays at 60fps.',
      },
      {
        title: 'Procedural 3D instead of downloaded models',
        detail:
          'The lamp is built from primitives with emissive materials, so the scene weighs almost nothing, loads instantly and ships no third-party assets. The canvas loads client-only via next/dynamic.',
      },
      {
        title: 'Reduced motion is a full variant, not an afterthought',
        detail:
          'prefers-reduced-motion disables Lenis and every tween, and renders the lamp in a static exploded state — all content remains readable without any animation.',
      },
    ],
    metrics: [
      { value: '0', label: 'external 3D assets' },
      { value: '4', label: 'lamp parts in the exploded view' },
      { value: '100%', label: 'content available with reduced motion' },
      { value: '1.5', label: 'max device pixel ratio cap' },
    ],
    live: 'https://aurora-landing-kappa.vercel.app',
    code: 'https://github.com/rramirezgit/aurora-landing',
    accent: 'from-amber-400 to-rose-400',
  },
]

export const CV_LINK = {
  name: 'Interactive CV',
  tagline: 'My résumé as a scroll-animated single page — GSAP + Next.js',
  live: 'https://cv-next-rose.vercel.app',
  code: 'https://github.com/rramirezgit/cv-next',
}

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug)
}
