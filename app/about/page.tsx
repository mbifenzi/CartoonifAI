import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import PageShell, { PageIntro } from "@/components/landing/page-shell"
import AppStoreButton from "@/components/landing/app-store-button"
import { Sparkle } from "@/components/landing/icons"

export const metadata: Metadata = {
  title: "About | CartoonifAI",
  description: "CartoonifAI is an iPhone and iPad app by Mohamed Bifenzi that turns your selfie into cartoon art.",
  alternates: { canonical: "/about" },
}

const POINTS = [
  {
    title: "What it does",
    text: "Pick a style, choose a photo and tap Transform me. CartoonifAI redraws your portrait as anime, 3D, comic, painterly or seasonal art in seconds, and can turn it into a 5-second video.",
  },
  {
    title: "Two photos, one portrait",
    text: "Costume, Couple and Me & My Pet styles combine two photos into one picture, as a cartoon or for real.",
  },
  {
    title: "Your photos stay yours",
    text: "Photos are used only to create the looks you ask for, and never to train AI models. Uploads are deleted automatically within 1 day as a guest, or 30 days when signed in.",
    link: { href: "/privacy", label: "Read the Privacy Policy" },
  },
  {
    title: "Free to start",
    text: "The app is free to download, with free Sparkles to start and a free gift every day. Sparkle packs and CartoonifAI Plus are there when you want more.",
    link: { href: "/#plus", label: "See pricing" },
  },
]

export default function AboutPage() {
  return (
    <PageShell>
      <section className="mx-auto flex max-w-[1200px] flex-col gap-12 px-4 pb-16 pt-14 sm:px-6 md:flex-row md:items-center md:gap-16 md:pb-24 md:pt-24 lg:px-10">
        <PageIntro eyebrow="About" title="Made by Mohamed Bifenzi." className="min-w-0 flex-1">
          <p>
            CartoonifAI is an app for iPhone and iPad that turns your selfie into cartoon art, then brings it to life.
          </p>
        </PageIntro>
        <div className="relative flex justify-center md:w-[340px]">
          <div
            aria-hidden="true"
            className="absolute inset-[-10%] rounded-full bg-[radial-gradient(closest-side,rgba(158,124,255,0.35),transparent)] blur-2xl"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/landing/icon.webp"
            alt="CartoonifAI app icon"
            width={200}
            height={200}
            className="relative h-40 w-40 rounded-[36px] shadow-[0_24px_60px_rgba(158,124,255,0.35)] md:h-[200px] md:w-[200px] md:rounded-[44px]"
          />
        </div>
      </section>

      <section className="border-y border-white/[0.06] bg-ink-deep">
        <div className="mx-auto grid max-w-[1200px] gap-5 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24 lg:px-10">
          {POINTS.map((point) => (
            <article
              key={point.title}
              className="flex flex-col gap-3 rounded-[26px] border border-white/[0.08] bg-ink-surface p-7"
            >
              <h2 className="flex items-center gap-2.5 font-display text-[26px] font-semibold text-cloud">
                <Sparkle className="h-5 w-5 flex-none text-gold" />
                {point.title}
              </h2>
              <p className="text-base leading-relaxed text-mist">{point.text}</p>
              {point.link && (
                <Link
                  href={point.link.href}
                  className="mt-auto inline-flex items-center gap-1.5 self-start pt-2 text-[15px] font-bold text-violet transition hover:text-cloud"
                >
                  {point.link.label}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 md:py-24 lg:px-10">
        <div className="flex flex-col items-center gap-6 rounded-[40px] border border-white/[0.08] bg-ink-surface px-6 py-14 text-center md:py-20">
          <h2 className="font-display text-[clamp(32px,4.4vw,56px)] font-semibold leading-none tracking-[-0.03em] text-cloud">
            Who will you be today?
          </h2>
          <p className="max-w-[460px] text-lg leading-relaxed text-mist">
            Questions or ideas for a new style?{" "}
            <Link href="/contact" className="font-semibold text-violet underline decoration-violet/40 underline-offset-[3px] hover:text-cloud">
              Get in touch
            </Link>
            .
          </p>
          <AppStoreButton />
        </div>
      </section>
    </PageShell>
  )
}
