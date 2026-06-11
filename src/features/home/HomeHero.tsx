'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, SplitText } from '@/shared/animation/gsap'

export function HomeHero() {
  const scope = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      const split = SplitText.create('[data-hero-title]', { type: 'lines', mask: 'lines' })
      const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } })

      timeline
        .from('[data-hero-eyebrow]', { y: 16, opacity: 0, duration: 0.7 })
        .from(split.lines, { yPercent: 110, stagger: 0.12, duration: 0.9 }, '-=0.3')
        .from('[data-hero-sub]', { y: 20, opacity: 0, duration: 0.8 }, '-=0.5')
        .from('[data-hero-cta] > *', { y: 14, opacity: 0, stagger: 0.08, duration: 0.6 }, '-=0.5')

      return () => split.revert()
    },
    { scope }
  )

  return (
    <header ref={scope} className="mx-auto w-full max-w-5xl px-6 pt-28 pb-20">
      <div
        data-hero-eyebrow
        className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs tracking-wide text-zinc-400"
      >
        <span className="relative flex h-2 w-2">
          <span className="status-dot absolute inline-flex h-full w-full rounded-full bg-emerald-400" style={{ animation: 'status-pulse 2s ease-in-out infinite' }} />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>
        Open to remote roles · LATAM &amp; US
      </div>

      <h1
        data-hero-title
        className="mt-7 max-w-3xl text-[clamp(2.4rem,6vw,4.5rem)] leading-[1.05] font-semibold tracking-tight text-zinc-50"
      >
        Senior Frontend Developer building <span className="text-grad">fast, accessible</span>{' '}
        interfaces.
      </h1>

      <p
        data-hero-sub
        className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400"
      >
        React · Next.js · advanced TypeScript · TanStack. Eight years shipping SaaS products, with
        an obsession for Core Web Vitals and interfaces that hold up under real data.
      </p>

      <div data-hero-cta className="mt-9 flex flex-wrap gap-4 text-sm">
        <a
          href="https://github.com/rramirezgit"
          className="rounded-full border border-white/15 px-5 py-2.5 text-zinc-200 transition-colors hover:border-white/40"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/ricardoramirez-"
          className="rounded-full border border-white/15 px-5 py-2.5 text-zinc-200 transition-colors hover:border-white/40"
        >
          LinkedIn
        </a>
        <a
          href="mailto:rramirez.engineer@gmail.com"
          className="rounded-full bg-zinc-100 px-5 py-2.5 font-medium text-zinc-950 transition-colors hover:bg-white"
        >
          Get in touch
        </a>
      </div>
    </header>
  )
}
