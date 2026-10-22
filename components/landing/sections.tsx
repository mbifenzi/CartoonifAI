import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowRight, Check, Heart, PawPrint, Shirt } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import { FAQS } from "@/lib/landing"
import AppStoreButton from "./app-store-button"
import PhoneFrame from "./phone-frame"
import StyleCompare from "./style-compare"
import { Wordmark } from "./site-header"
import { Sparkle } from "./icons"

const container = "mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10"
const band = "border-y border-white/[0.06] bg-ink-deep"
const sectionPad = "py-16 md:py-28"

function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("text-[13px] font-extrabold uppercase tracking-[0.14em] text-violet", className)}>{children}</p>
}

function Heading({ children, as: Tag = "h2" }: { children: ReactNode; as?: "h2" | "h3" }) {
  return (
    <Tag className="font-display text-[clamp(36px,5vw,62px)] font-semibold leading-[1.02] tracking-[-0.025em] text-cloud text-balance">
      {children}
    </Tag>
  )
}

export function StylesSection() {
  return (
    <section id="styles" className={cn(band, "scroll-mt-16")}>
      <div className={cn(container, sectionPad, "flex flex-col gap-12")}>
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div className="flex max-w-[620px] flex-col gap-3.5">
            <Eyebrow>Styles</Eyebrow>
            <Heading>One selfie. Every style.</Heading>
          </div>
          <p className="max-w-[380px] text-base leading-relaxed text-mist">
            Pick a look and drag across the photo to compare. New styles are added regularly.
          </p>
        </div>
        <StyleCompare />
      </div>
    </section>
  )
}

export function AnimateSection() {
  return (
    <section id="animate" className={cn(container, sectionPad, "flex scroll-mt-16 flex-col-reverse items-center gap-12 md:flex-row md:gap-20")}>
      <div className="relative flex w-full min-w-0 flex-1 justify-center">
        <div
          aria-hidden="true"
          className="absolute inset-[10%_8%] rounded-full bg-[radial-gradient(closest-side,rgba(255,140,125,0.32),transparent)] blur-3xl"
        />
        <PhoneFrame className="w-[min(290px,68vw)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/landing/screen-animate.webp"
            alt="A finished 3D Dream portrait with the Animate it button"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </PhoneFrame>
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-6">
        <Eyebrow className="text-coral">Animate it</Eyebrow>
        <Heading>Now your cartoon moves.</Heading>
        <p className="max-w-[500px] text-lg leading-relaxed text-mist">
          Turn any creation into a 5-second video. Pick an effect, from a gentle smile to a spooky Halloween zoom, then
          save it or share it anywhere.
        </p>
        <ul className="flex flex-wrap gap-2.5">
          {["Gentle smile", "Spooky zoom", "More effects every season"].map((effect) => (
            <li
              key={effect}
              className="rounded-full border border-coral/35 bg-[#2B1D27] px-4 py-2.5 text-sm font-bold text-cloud"
            >
              {effect}
            </li>
          ))}
        </ul>
        <dl className="flex flex-wrap gap-10 pt-2">
          <div className="flex flex-col-reverse gap-1">
            <dt className="text-[13px] text-mist">video, ready to share</dt>
            <dd className="font-display text-4xl font-semibold text-cloud">5s</dd>
          </div>
          <div className="flex flex-col-reverse gap-1">
            <dt className="text-[13px] text-mist">Sparkles per animation</dt>
            <dd className="font-display text-4xl font-semibold text-cloud">60</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}

const DUO = [
  { title: "Costume", text: "Add a costume photo and see yourself wearing it.", icon: Shirt },
  { title: "Couple", text: "Two photos become one portrait of you together.", icon: Heart },
  { title: "Me & My Pet", text: "You and your pet, together as co-stars.", icon: PawPrint },
]

export function DuoSection() {
  return (
    <section id="duo" className={cn(band, "scroll-mt-16")}>
      <div className={cn(container, sectionPad, "flex flex-col gap-12")}>
        <div className="flex max-w-[680px] flex-col gap-3.5">
          <Eyebrow>2-photo styles</Eyebrow>
          <Heading>Two photos, one portrait.</Heading>
          <p className="text-lg leading-relaxed text-mist">Each one comes out as a cartoon or for real. Your call.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {DUO.map(({ title, text, icon: Icon }) => (
            <article key={title} className="flex flex-col gap-6 rounded-[26px] border border-white/[0.08] bg-ink-surface p-6">
              <div className="flex items-center gap-3" aria-hidden="true">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/landing/original.webp" alt="" loading="lazy" className="h-16 w-16 rounded-2xl object-cover" />
                <span className="text-xl font-bold text-mist">+</span>
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-dashed border-violet/60 bg-ink-raised">
                  <Icon className="h-7 w-7 text-violet" />
                </span>
                <ArrowRight className="h-5 w-5 text-mist" />
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet">
                  <Sparkle className="h-7 w-7 text-ink" />
                </span>
              </div>
              <div className="flex flex-col gap-2.5">
                <h3 className="font-display text-[26px] font-semibold text-cloud">{title}</h3>
                <p className="text-[15px] leading-relaxed text-mist">{text}</p>
              </div>
              <span className="mt-auto self-start rounded-full bg-ink-raised px-3 py-1.5 text-xs font-bold text-mist">
                Cartoon or Realistic
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const SEASONS = [
  { name: "Halloween", when: "Now", current: true },
  { name: "Christmas", when: "December" },
  { name: "Valentine's", when: "February" },
  { name: "And more, all year", when: "Every season" },
]

export function SeasonsSection() {
  return (
    <section id="seasons" className={cn(container, sectionPad, "scroll-mt-16")}>
      <div className="flex flex-col items-center gap-12 rounded-[36px] border border-gold/25 bg-[#24182B] p-7 md:flex-row md:gap-20 md:p-16">
        <div className="flex min-w-0 flex-1 flex-col gap-5">
          <span className="self-start rounded-full bg-[#FF9A3D] px-3.5 py-1.5 text-[13px] font-extrabold text-ink">
            Limited time
          </span>
          <Heading>Halloween is here.</Heading>
          <p className="max-w-[480px] text-lg leading-relaxed text-mist">
            Vampire, Witch, Cute Zombie, Day of the Dead and more. Spooky-cute looks that disappear when the season
            ends.
          </p>
          <ul className="mt-2 border-t border-white/10">
            {SEASONS.map((s) => (
              <li
                key={s.name}
                className={cn(
                  "flex justify-between border-b border-white/10 py-3.5 last:border-b-0",
                  s.current ? "font-bold text-cloud" : "font-semibold text-mist",
                )}
              >
                <span>{s.name}</span>
                <span className={s.current ? "text-[#FFB061]" : undefined}>{s.when}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex w-full min-w-0 flex-1 justify-center">
          <PhoneFrame className="w-[min(280px,68vw)] rotate-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/landing/screen-halloween.webp"
              alt="The Halloween collection in the app"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </PhoneFrame>
        </div>
      </div>
    </section>
  )
}

const STEPS = [
  { title: "Pick a style", text: "Browse the studio by mood: anime, 3D, comic, painterly and seasonal." },
  { title: "Choose a photo", text: "A clear, well-lit portrait from your library, or take one on the spot." },
  { title: "Tap Transform me", text: "Your portrait is ready in seconds. Save it, share it, or animate it." },
]

export function HowItWorks() {
  return (
    <section className={cn(container, "flex flex-col gap-10 pb-16 md:pb-28")}>
      <h2 className="font-display text-[clamp(32px,4vw,48px)] font-semibold leading-tight tracking-[-0.025em] text-cloud">
        Three taps. That&apos;s it.
      </h2>
      <ol className="grid gap-5 md:grid-cols-3">
        {STEPS.map((step, i) => (
          <li key={step.title} className="flex flex-col gap-3 rounded-3xl border border-white/[0.09] p-7">
            <span className="font-display text-[56px] font-semibold leading-none text-violet">{i + 1}</span>
            <span className="text-xl font-bold text-cloud">{step.title}</span>
            <span className="text-[15px] leading-relaxed text-mist">{step.text}</span>
          </li>
        ))}
      </ol>
    </section>
  )
}

const FREE_PERKS = [
  "Free Sparkles when you join, so your first looks are on us",
  "A free gift every day",
  "20 free Sparkles for you and each friend you invite",
  "Top up with a Sparkle pack any time",
]
const PLUS_PERKS = [
  "250 Sparkles every 30 days",
  "Members-only styles",
  "+25% bonus Sparkles on every pack",
  "Share without the watermark",
]

export function PricingSection() {
  return (
    <section id="plus" className={cn(band, "scroll-mt-16")}>
      <div className={cn(container, sectionPad, "flex flex-col gap-12")}>
        <div className="flex max-w-[680px] flex-col gap-3.5">
          <Eyebrow>Pricing</Eyebrow>
          <Heading>Start free. Go Plus when you&apos;re hooked.</Heading>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="flex flex-col gap-6 rounded-[28px] border border-white/[0.08] bg-ink-surface p-8">
            <div className="flex flex-col gap-1.5">
              <h3 className="font-display text-[28px] font-semibold text-cloud">Sparkles</h3>
              <p className="text-[15px] text-mist">Pay as you go. Each look and video costs Sparkles.</p>
            </div>
            <ul className="flex flex-col gap-3.5 text-[15px] text-cloud">
              {FREE_PERKS.map((perk) => (
                <li key={perk} className="flex gap-3">
                  <Sparkle className="mt-0.5 h-[18px] w-[18px] flex-none text-gold" />
                  {perk}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-6 rounded-[28px] border-[1.5px] border-violet bg-[#2A1F3F] p-8 shadow-[0_30px_70px_rgba(158,124,255,0.2)]">
            <div className="flex items-start justify-between gap-3">
              <div className="flex flex-col gap-1.5">
                <h3 className="font-display text-[28px] font-semibold text-cloud">CartoonifAI Plus</h3>
                <p className="text-[15px] text-mist">For people who make a lot of looks.</p>
              </div>
              <span className="whitespace-nowrap rounded-full bg-violet px-3 py-1.5 text-xs font-extrabold text-ink">
                Best value yearly
              </span>
            </div>
            <p className="flex flex-wrap items-baseline gap-x-4 gap-y-1 text-mist">
              <span>
                <span className="font-display text-[44px] font-semibold text-cloud">$39.99</span> / year
              </span>
              <span>or $4.99 / month</span>
            </p>
            <ul className="flex flex-col gap-3.5 text-[15px] text-cloud">
              {PLUS_PERKS.map((perk) => (
                <li key={perk} className="flex gap-3">
                  <Check className="mt-0.5 h-[18px] w-[18px] flex-none text-violet" strokeWidth={2.6} aria-hidden="true" />
                  {perk}
                </li>
              ))}
            </ul>
            <p className="text-xs leading-relaxed text-mist">
              US prices shown; your local App Store price may differ. Renews automatically; cancel any time in your App
              Store settings.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function FaqSection() {
  return (
    <section id="faq" className="mx-auto flex max-w-[880px] scroll-mt-16 flex-col gap-8 px-4 py-16 sm:px-6 md:py-28 lg:px-10">
      <h2 className="font-display text-[clamp(32px,4vw,48px)] font-semibold leading-tight tracking-[-0.025em] text-cloud">
        Questions
      </h2>
      <Accordion type="single" collapsible defaultValue="faq-0" className="border-t border-white/10">
        {FAQS.map((faq, i) => (
          <AccordionItem key={faq.question} value={`faq-${i}`} className="border-white/10">
            <AccordionTrigger className="min-h-16 py-5 text-left text-lg font-bold text-cloud hover:no-underline [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-violet">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="pb-6 pr-10 text-base leading-relaxed text-mist">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}

export function FinalCta() {
  return (
    <section className={cn(container, "pb-16 md:pb-28")}>
      <div className="relative flex flex-col items-center gap-6 overflow-hidden rounded-[40px] border border-white/[0.08] bg-ink-surface px-6 py-14 text-center md:py-24">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-[-40%] h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(158,124,255,0.3),transparent)] blur-2xl"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/landing/icon.webp"
          alt="CartoonifAI app icon"
          width={112}
          height={112}
          loading="lazy"
          className="relative h-28 w-28 rounded-[26px] shadow-[0_24px_60px_rgba(158,124,255,0.35)]"
        />
        <h2 className="relative font-display text-[clamp(36px,5.4vw,68px)] font-semibold leading-none tracking-[-0.03em] text-cloud">
          Who will you be today?
        </h2>
        <p className="relative max-w-[460px] text-lg leading-relaxed text-mist">
          Free to download, with free Sparkles to start.
        </p>
        <AppStoreButton className="relative" />
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.07] pb-24 md:pb-0">
      <div className={cn(container, "flex flex-wrap items-center justify-between gap-5 py-9 text-sm text-mist")}>
        <div className="flex flex-wrap items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/landing/icon.webp" alt="" width={28} height={28} loading="lazy" className="h-7 w-7 rounded-lg" />
          <Wordmark className="text-[17px]" />
          <span className="ml-2">© {new Date().getFullYear()} Mohamed Bifenzi</span>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
          <Link href="/about" className="hover:text-cloud">About</Link>
          <Link href="/contact" className="hover:text-cloud">Contact</Link>
          <Link href="/privacy" className="hover:text-cloud">Privacy</Link>
          <Link href="/terms" className="hover:text-cloud">Terms</Link>
        </nav>
      </div>
    </footer>
  )
}
