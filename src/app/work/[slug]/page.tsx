import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { PROJECTS, getProject } from '@/content/projects'

interface CaseStudyProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: CaseStudyProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}
  return {
    title: `${project.name} — Case study — Ricardo Ramirez`,
    description: project.tagline,
  }
}

export default async function CaseStudyPage({ params }: CaseStudyProps) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-20">
      <Link href="/" className="text-sm text-zinc-500 hover:text-zinc-300">
        ← All work
      </Link>

      <header className="mt-8">
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-50">{project.name}</h1>
        <p className="mt-3 text-lg text-zinc-400">{project.tagline}</p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-zinc-100 px-5 py-2 font-medium text-zinc-950 hover:bg-white"
            >
              Live demo ↗
            </a>
          )}
          <a
            href={project.code}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 px-5 py-2 text-zinc-200 hover:border-white/40"
          >
            Source code ↗
          </a>
        </div>
      </header>

      <dl className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {project.metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4"
          >
            <dd className="text-xl font-semibold text-zinc-50 tabular-nums">{metric.value}</dd>
            <dt className="mt-1 text-xs text-zinc-500">{metric.label}</dt>
          </div>
        ))}
      </dl>

      <Section title="Problem">
        <p>{project.problem}</p>
      </Section>

      <Section title="Solution">
        <p>{project.solution}</p>
      </Section>

      <Section title="Key decisions">
        <ul className="space-y-6">
          {project.decisions.map((decision) => (
            <li key={decision.title}>
              <h3 className="font-medium text-zinc-100">{decision.title}</h3>
              <p className="mt-1.5">{decision.detail}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Stack">
        <ul className="flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <li
              key={item}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>
    </main>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="mb-4 text-xs font-medium tracking-[0.3em] text-zinc-500 uppercase">
        {title}
      </h2>
      <div className="text-[15px] leading-relaxed text-zinc-400">{children}</div>
    </section>
  )
}
