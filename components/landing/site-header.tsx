import Link from "next/link"
import AppStoreButton from "./app-store-button"

const NAV = [
  { href: "/#styles", label: "Styles" },
  { href: "/#animate", label: "Animate it" },
  { href: "/#duo", label: "2-Photo" },
  { href: "/#seasons", label: "Seasons" },
  { href: "/#plus", label: "Plus" },
  { href: "/#faq", label: "FAQ" },
]

export function Wordmark({ className = "text-[21px]" }: { className?: string }) {
  return (
    <span className={`font-display font-semibold tracking-tight text-cloud ${className}`}>
      Cartoonif<span className="text-violet">AI</span>
    </span>
  )
}

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.07] bg-ink/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/landing/icon.webp" alt="" width={36} height={36} className="h-9 w-9 rounded-[10px]" />
          <Wordmark />
        </Link>
        <nav aria-label="Main" className="hidden gap-7 text-sm font-semibold text-mist md:flex">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-cloud">
              {item.label}
            </Link>
          ))}
        </nav>
        <AppStoreButton size="sm" />
      </div>
    </header>
  )
}
