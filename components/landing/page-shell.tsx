import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import SiteHeader from "./site-header"
import { SiteFooter } from "./sections"

/** The landing page's header, footer and dark ground, for the site's other pages. */
export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip bg-ink font-sans text-cloud antialiased">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  )
}

/** Eyebrow, page title and lead paragraph at the top of a sub-page. */
export function PageIntro({
  eyebrow,
  title,
  children,
  className,
}: {
  eyebrow: string
  title: ReactNode
  children?: ReactNode
  className?: string
}) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <p className="text-[13px] font-extrabold uppercase tracking-[0.14em] text-violet">{eyebrow}</p>
      <h1 className="font-display text-[clamp(40px,6vw,72px)] font-semibold leading-[1] tracking-[-0.03em] text-cloud text-balance">
        {title}
      </h1>
      {children && <div className="max-w-[560px] text-lg leading-relaxed text-mist md:text-xl">{children}</div>}
    </div>
  )
}
