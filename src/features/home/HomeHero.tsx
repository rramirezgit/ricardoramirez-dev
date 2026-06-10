'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

export function HomeHero() {
  const scope = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      gsap.from('[data-hero-stagger]', {
        y: 28,
        opacity: 0,
        stagger: 0.12,
        duration: 0.9,
        ease: 'power3.out',
      })
    },
    { scope }
  )

  return (
    <header ref={scope} className="mx-auto w-full max-w-5xl px-6 pt-28 pb-20">
      <p data-hero-stagger className="text-sm tracking-[0.3em] text-zinc-500 uppercase">
        Ricardo Ramirez · Buenos Aires, AR
      </p>
      <h1
        data-hero-stagger
        className="mt-6 max-w-3xl text-[clamp(2.4rem,6vw,4.5rem)] leading-[1.05] font-semibold tracking-tight text-zinc-50"
      >
        Senior Frontend Developer building fast, accessible interfaces.
      </h1>
      <p data-hero-stagger className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
        React · Next.js · advanced TypeScript · TanStack. Eight years shipping SaaS products,
        with an obsession for Core Web Vitals and interfaces that hold up under real data.
        Open to remote roles across LATAM and the US.
      </p>
      <div data-hero-stagger className="mt-8 flex flex-wrap gap-4 text-sm">
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
