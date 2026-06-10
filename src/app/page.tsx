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
      </footer>
    </main>
  )
}
