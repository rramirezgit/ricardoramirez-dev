import Link from 'next/link'
import { PROJECTS, CV_LINK } from '@/content/projects'

export function WorkGrid() {
  const [featured, ...rest] = PROJECTS

  return (
    <section aria-label="Selected work" className="mx-auto w-full max-w-5xl px-6 pb-24">
      <h2 className="mb-8 text-xs font-medium tracking-[0.3em] text-zinc-500 uppercase">
        Selected work
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        <Link
          href={`/work/${featured.slug}`}
          className="group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.02] p-8 transition-colors hover:border-white/20 md:col-span-2"
        >
          <div
            aria-hidden
            className={`absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br opacity-20 blur-3xl transition-opacity group-hover:opacity-35 ${featured.accent}`}
          />
          <ProjectCardBody
            name={featured.name}
            tagline={featured.tagline}
            metrics={featured.metrics.slice(0, 3).map((metric) => `${metric.value} ${metric.label}`)}
          />
        </Link>

        {rest.map((project) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.02] p-8 transition-colors hover:border-white/20"
          >
            <div
              aria-hidden
              className={`absolute -top-24 -right-24 h-56 w-56 rounded-full bg-gradient-to-br opacity-15 blur-3xl transition-opacity group-hover:opacity-30 ${project.accent}`}
            />
            <ProjectCardBody
              name={project.name}
              tagline={project.tagline}
              metrics={project.metrics.slice(0, 2).map((metric) => `${metric.value} ${metric.label}`)}
            />
          </Link>
        ))}

        <a
          href={CV_LINK.live}
          target="_blank"
          rel="noreferrer"
          className="group rounded-3xl border border-white/[0.07] bg-white/[0.02] p-8 transition-colors hover:border-white/20"
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
  metrics,
}: {
  name: string
  tagline: string
  metrics: string[]
}) {
  return (
    <div className="relative">
      <h3 className="text-2xl font-semibold tracking-tight text-zinc-50 group-hover:text-white">
        {name}
      </h3>
      <p className="mt-2 max-w-xl text-sm leading-relaxed text-zinc-400">{tagline}</p>
      <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-1">
        {metrics.map((metric) => (
          <li key={metric} className="text-xs tracking-wide text-zinc-500 tabular-nums">
            {metric}
          </li>
        ))}
      </ul>
    </div>
  )
}
