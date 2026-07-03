import { HomeHero } from '@/features/home/HomeHero'
import { WorkGrid } from '@/features/home/WorkGrid'

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <WorkGrid />
      <footer className="mx-auto w-full max-w-5xl border-t border-white/[0.06] px-6 py-10 text-sm text-zinc-500">
        <p>
          Every project above is open source, deployed, and covered by CI — the code is the
          portfolio.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="font-mono text-xs text-zinc-600">
            Ricardo Ramirez · Buenos Aires, Argentina
          </p>
          <div className="flex gap-5 text-xs">
            <a
              href="https://github.com/rramirezgit"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-zinc-300"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/ricardoramirez-"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-zinc-300"
            >
              LinkedIn
            </a>
            <a
              href="mailto:rramirez.engineer@gmail.com"
              className="transition-colors hover:text-zinc-300"
            >
              rramirez.engineer@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
