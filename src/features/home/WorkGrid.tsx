'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/shared/animation/gsap'
import { PROJECTS, CV_LINK } from '@/content/projects'

const BASELINE_STACK = new Set(['React 19', 'TypeScript', 'Next.js 16'])

function distinctiveStack(stack: string[], count: number) {
  const distinctive = stack.filter((item) => !BASELINE_STACK.has(item))
  return (distinctive.length >= count ? distinctive : stack).slice(0, count)
}

export function WorkGrid() {
  const scope = useRef<HTMLElement>(null)
  const [featured, ...rest] = PROJECTS

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      gsap.from('[data-work-eyebrow]', {
        opacity: 0,
        y: 14,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: { trigger: scope.current, start: 'top 80%', once: true },
      })

      gsap.from('[data-card]', {
        y: 40,
        autoAlpha: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
        clearProps: 'all',
        scrollTrigger: { trigger: '[data-grid]', start: 'top 90%', once: true },
      })

      ScrollTrigger.refresh()
    },
    { scope }
  )

  const handleMove = (event: React.PointerEvent<HTMLElement>) => {
    const target = event.currentTarget
    const rect = target.getBoundingClientRect()
    target.style.setProperty('--mx', `${event.clientX - rect.left}px`)
    target.style.setProperty('--my', `${event.clientY - rect.top}px`)
  }

  return (
    <section ref={scope} aria-label="Selected work" className="mx-auto w-full max-w-5xl px-6 pb-24">
      <h2 data-work-eyebrow className="mb-8 text-xs font-medium tracking-[0.3em] text-zinc-500 uppercase">
        Selected work
      </h2>

      <div data-grid className="grid gap-4 md:grid-cols-2">
        <Link
          data-card
          href={`/work/${featured.slug}`}
          onPointerMove={handleMove}
          className="spotlight-card group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.02] p-8 transition-colors duration-300 hover:border-white/25 md:col-span-2"
        >
          <div
            aria-hidden
            className={`absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br opacity-20 blur-3xl transition-opacity duration-300 group-hover:opacity-40 ${featured.accent}`}
          />
          <ProjectCardBody
            name={featured.name}
            tagline={featured.tagline}
            stack={distinctiveStack(featured.stack, 4)}
            metrics={featured.metrics.slice(0, 3).map((metric) => `${metric.value} ${metric.label}`)}
          />
        </Link>

        {rest.map((project) => (
          <Link
            key={project.slug}
            data-card
            href={`/work/${project.slug}`}
            onPointerMove={handleMove}
            className="spotlight-card group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.02] p-8 transition-colors duration-300 hover:border-white/25"
          >
            <div
              aria-hidden
              className={`absolute -top-24 -right-24 h-56 w-56 rounded-full bg-gradient-to-br opacity-15 blur-3xl transition-opacity duration-300 group-hover:opacity-35 ${project.accent}`}
            />
            <ProjectCardBody
              name={project.name}
              tagline={project.tagline}
              stack={distinctiveStack(project.stack, 3)}
              metrics={project.metrics.slice(0, 2).map((metric) => `${metric.value} ${metric.label}`)}
            />
          </Link>
        ))}

        <a
          data-card
          href={CV_LINK.live}
          target="_blank"
          rel="noreferrer"
          onPointerMove={handleMove}
          className="spotlight-card group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.02] p-8 transition-colors duration-300 hover:border-white/25"
        >
          <ProjectCardBody name={CV_LINK.name} tagline={CV_LINK.tagline} metrics={['Live ↗']} />
        </a>
      </div>
    </section>
  )
}

function ProjectCardBody({
  name,
  tagline,
  stack,
  metrics,
}: {
  name: string
  tagline: string
  stack?: string[]
  metrics: string[]
}) {
  return (
    <div className="relative">
      <div className="flex items-center gap-2">
        <h3 className="text-2xl font-semibold tracking-tight text-zinc-50">{name}</h3>
        <span className="translate-x-0 text-zinc-600 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-zinc-300">
          →
        </span>
      </div>
      <p className="mt-2 max-w-xl text-sm leading-relaxed text-zinc-400">{tagline}</p>
      {stack && (
        <ul className="mt-5 flex flex-wrap gap-1.5">
          {stack.map((item) => (
            <li
              key={item}
              className="rounded-full border border-white/[0.08] bg-white/[0.02] px-2.5 py-0.5 text-[11px] text-zinc-400"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
      <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-1">
        {metrics.map((metric) => (
          <li key={metric} className="text-xs tracking-wide text-zinc-500 tabular-nums">
            {metric}
          </li>
        ))}
      </ul>
    </div>
  )
}
