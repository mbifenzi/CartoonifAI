import Link from "next/link"
import type { Dictionary } from "@/lib/dictionaries/en"
import { landingPath, type Locale } from "@/lib/i18n"
import AppStoreButton from "./app-store-button"

const NAV = ["styles", "animate", "duo", "seasons", "plus", "faq"] as const

export function Wordmark({ className = "text-[21px]" }: { className?: string }) {
  return (
    <span className={`font-display font-semibold tracking-tight text-cloud ${className}`}>
      Cartoonif<span className="text-violet">AI</span>
    </span>
  )
}

export default function SiteHeader({ locale, t }: { locale: Locale; t: Dictionary }) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.07] bg-ink/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-10">
        <Link href={landingPath(locale)} aria-label={t.nav.home} className="flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/landing/icon.webp" alt="" width={36} height={36} className="h-9 w-9 rounded-[10px]" />
          <Wordmark />
        </Link>
        <nav aria-label={t.nav.label} className="hidden gap-7 whitespace-nowrap text-sm font-semibold text-mist lg:flex">
          {NAV.map((id) => (
            <Link key={id} href={landingPath(locale, id)} className="transition hover:text-cloud">
              {t.nav[id]}
            </Link>
          ))}
        </nav>
        <AppStoreButton t={t.appStore} size="sm" />
      </div>
    </header>
  )
}
