import type { ReactNode } from "react"
import Link from "next/link"
import PageShell, { PageIntro } from "@/components/landing/page-shell"

/** Shared chrome and typography for the Privacy Policy and Terms of Use. */
export function LegalPage({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <PageShell>
      <div className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 md:py-24 lg:px-10">
        <article className="mx-auto max-w-[70ch] text-[17px] leading-[1.75] text-mist [&_strong]:font-bold [&_strong]:text-cloud">
          <PageIntro eyebrow="Legal" title={title} />
          <p className="mb-10 mt-5 border-b border-white/10 pb-8 text-sm font-semibold text-mist">Last updated: {updated}</p>
          {children}
        </article>
      </div>
    </PageShell>
  )
}

export function H2({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <h2
      id={id}
      className="mb-4 mt-14 scroll-mt-24 font-display text-[28px] font-semibold leading-tight tracking-[-0.015em] text-cloud md:text-[32px]"
    >
      {children}
    </h2>
  )
}

export function H3({ children }: { children: ReactNode }) {
  return <h3 className="mb-2 mt-8 text-lg font-bold text-cloud">{children}</h3>
}

export function P({ children }: { children: ReactNode }) {
  return <p className="mb-5">{children}</p>
}

export function List({ children }: { children: ReactNode }) {
  return <ul className="mb-5 list-disc space-y-2.5 pl-6 marker:text-violet">{children}</ul>
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  const className =
    "break-words font-semibold text-violet underline decoration-violet/40 underline-offset-[3px] transition hover:text-cloud hover:decoration-cloud/60"
  const external = href.startsWith("http") || href.startsWith("mailto:")
  return external ? (
    <a href={href} className={className}>
      {children}
    </a>
  ) : (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}
