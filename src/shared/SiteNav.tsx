import Link from 'next/link'

const LINKS = [
  { label: 'GitHub', href: 'https://github.com/rramirezgit', external: true },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/ricardoramirez-', external: true },
  { label: 'CV', href: 'https://cv-next-rose.vercel.app', external: true },
]

export function SiteNav() {
  return (
    <nav
      aria-label="Site"
      className="fixed inset-x-0 top-0 z-10 border-b border-white/[0.06] bg-zinc-950/70 backdrop-blur-md"
    >
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-3.5">
        <Link
          href="/"
          className="font-mono text-sm tracking-tight text-zinc-100 transition-colors hover:text-white"
        >
          ricardoramirez<span className="text-grad">.dev</span>
        </Link>
        <div className="flex items-center gap-5 text-xs text-zinc-400">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-zinc-100"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:rramirez.engineer@gmail.com"
            className="rounded-full border border-white/15 px-3.5 py-1.5 text-zinc-200 transition-colors hover:border-white/40 hover:text-white"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}
