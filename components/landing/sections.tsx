import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowRight, Check, Globe, Heart, PawPrint, Shirt } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import type { Dictionary } from "@/lib/dictionaries/en"
import { LANGUAGE_NAMES, LOCALES, landingPath, type Locale } from "@/lib/i18n"
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

export function StylesSection({ t }: { t: Dictionary["styles"] }) {
  return (
    <section id="styles" className={cn(band, "scroll-mt-16")}>
      <div className={cn(container, sectionPad, "flex flex-col gap-12")}>
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div className="flex max-w-[620px] flex-col gap-3.5">
            <Eyebrow>{t.eyebrow}</Eyebrow>
            <Heading>{t.heading}</Heading>
          </div>
          <p className="max-w-[380px] text-base leading-relaxed text-mist">
            {t.lead}
          </p>
        </div>
        <StyleCompare t={t} />
      </div>
    </section>
  )
}

export function AnimateSection({ t }: { t: Dictionary["animate"] }) {
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
            alt={t.screenAlt}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </PhoneFrame>
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-6">
        <Eyebrow className="text-coral">{t.eyebrow}</Eyebrow>
        <Heading>{t.heading}</Heading>
        <p className="max-w-[500px] text-lg leading-relaxed text-mist">
          {t.lead}
        </p>
        <ul className="flex flex-wrap gap-2.5">
          {t.effects.map((effect) => (
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
            <dt className="text-[13px] text-mist">{t.lengthLabel}</dt>
            <dd className="font-display text-4xl font-semibold text-cloud">{t.lengthValue}</dd>
          </div>
          <div className="flex flex-col-reverse gap-1">
            <dt className="text-[13px] text-mist">{t.costLabel}</dt>
            <dd className="font-display text-4xl font-semibold text-cloud">60</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}

const DUO = [
  { id: "costume", icon: Shirt },
  { id: "couple", icon: Heart },
  { id: "pet", icon: PawPrint },
] as const

export function DuoSection({ t }: { t: Dictionary["duo"] }) {
  return (
    <section id="duo" className={cn(band, "scroll-mt-16")}>
      <div className={cn(container, sectionPad, "flex flex-col gap-12")}>
        <div className="flex max-w-[680px] flex-col gap-3.5">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <Heading>{t.heading}</Heading>
          <p className="text-lg leading-relaxed text-mist">{t.lead}</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {DUO.map(({ id, icon: Icon }) => (
            <article key={id} className="flex flex-col gap-6 rounded-[26px] border border-white/[0.08] bg-ink-surface p-6">
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
                <h3 className="font-display text-[26px] font-semibold text-cloud">{t[id].title}</h3>
                <p className="text-[15px] leading-relaxed text-mist">{t[id].text}</p>
              </div>
              <span className="mt-auto self-start rounded-full bg-ink-raised px-3 py-1.5 text-xs font-bold text-mist">
                {t.finish}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SeasonsSection({ t }: { t: Dictionary["seasons"] }) {
  return (
    <section id="seasons" className={cn(container, sectionPad, "scroll-mt-16")}>
      <div className="flex flex-col items-center gap-12 rounded-[36px] border border-gold/25 bg-[#24182B] p-7 md:flex-row md:gap-20 md:p-16">
        <div className="flex min-w-0 flex-1 flex-col gap-5">
          <span className="self-start rounded-full bg-[#FF9A3D] px-3.5 py-1.5 text-[13px] font-extrabold text-ink">
            {t.badge}
          </span>
          <Heading>{t.heading}</Heading>
          <p className="max-w-[480px] text-lg leading-relaxed text-mist">
            {t.lead}
          </p>
          <ul className="mt-2 border-t border-white/10">
            {/* The first entry is the season that is on now. */}
            {t.calendar.map((s, i) => (
              <li
                key={s.name}
                className={cn(
                  "flex justify-between gap-4 border-b border-white/10 py-3.5 last:border-b-0",
                  i === 0 ? "font-bold text-cloud" : "font-semibold text-mist",
                )}
              >
                <span>{s.name}</span>
                <span className={cn("text-right", i === 0 && "text-[#FFB061]")}>{s.when}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex w-full min-w-0 flex-1 justify-center">
          <PhoneFrame className="w-[min(280px,68vw)] rotate-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/landing/screen-halloween.webp"
              alt={t.screenAlt}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </PhoneFrame>
        </div>
      </div>
    </section>
  )
}

export function HowItWorks({ t }: { t: Dictionary["howItWorks"] }) {
  return (
    <section className={cn(container, "flex flex-col gap-10 pb-16 md:pb-28")}>
      <h2 className="font-display text-[clamp(32px,4vw,48px)] font-semibold leading-tight tracking-[-0.025em] text-cloud">
        {t.heading}
      </h2>
      <ol className="grid gap-5 md:grid-cols-3">
        {t.steps.map((step, i) => (
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

export function PricingSection({ t }: { t: Dictionary["pricing"] }) {
  return (
    <section id="plus" className={cn(band, "scroll-mt-16")}>
      <div className={cn(container, sectionPad, "flex flex-col gap-12")}>
        <div className="flex max-w-[680px] flex-col gap-3.5">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <Heading>{t.heading}</Heading>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="flex flex-col gap-6 rounded-[28px] border border-white/[0.08] bg-ink-surface p-8">
            <div className="flex flex-col gap-1.5">
              <h3 className="font-display text-[28px] font-semibold text-cloud">{t.sparklesTitle}</h3>
              <p className="text-[15px] text-mist">{t.sparklesLead}</p>
            </div>
            <ul className="flex flex-col gap-3.5 text-[15px] text-cloud">
              {t.freePerks.map((perk) => (
                <li key={perk} className="flex gap-3">
                  <Sparkle className="mt-0.5 h-[18px] w-[18px] flex-none text-gold" />
                  {perk}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-6 rounded-[28px] border-[1.5px] border-violet bg-[#2A1F3F] p-8 shadow-[0_30px_70px_rgba(158,124,255,0.2)]">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="flex flex-col gap-1.5">
                <h3 className="font-display text-[28px] font-semibold text-cloud">CartoonifAI Plus</h3>
                <p className="text-[15px] text-mist">{t.plusLead}</p>
              </div>
              <span className="whitespace-nowrap rounded-full bg-violet px-3 py-1.5 text-xs font-extrabold text-ink">
                {t.plusBadge}
              </span>
            </div>
            <p className="flex flex-wrap items-baseline gap-x-4 gap-y-1 text-mist">
              <span>
                <span className="whitespace-nowrap font-display text-[44px] font-semibold text-cloud">{t.yearlyPrice}</span> {t.perYear}
              </span>
              <span>{t.monthlyPrice}</span>
            </p>
            <ul className="flex flex-col gap-3.5 text-[15px] text-cloud">
              {t.plusPerks.map((perk) => (
                <li key={perk} className="flex gap-3">
                  <Check className="mt-0.5 h-[18px] w-[18px] flex-none text-violet" strokeWidth={2.6} aria-hidden="true" />
                  {perk}
                </li>
              ))}
            </ul>
            <p className="text-xs leading-relaxed text-mist">
              {t.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function FaqSection({ t }: { t: Dictionary["faq"] }) {
  return (
    <section id="faq" className="mx-auto flex max-w-[880px] scroll-mt-16 flex-col gap-8 px-4 py-16 sm:px-6 md:py-28 lg:px-10">
      <h2 className="font-display text-[clamp(32px,4vw,48px)] font-semibold leading-tight tracking-[-0.025em] text-cloud">
        {t.heading}
      </h2>
      <Accordion type="single" collapsible defaultValue="faq-0" className="border-t border-white/10">
        {t.items.map((faq, i) => (
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

export function FinalCta({ t, appStore }: { t: Dictionary["finalCta"]; appStore: Dictionary["appStore"] }) {
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
          alt={t.iconAlt}
          width={112}
          height={112}
          loading="lazy"
          className="relative h-28 w-28 rounded-[26px] shadow-[0_24px_60px_rgba(158,124,255,0.35)]"
        />
        <h2 className="relative font-display text-[clamp(36px,5.4vw,68px)] font-semibold leading-none tracking-[-0.03em] text-cloud">
          {t.heading}
        </h2>
        <p className="relative max-w-[460px] text-lg leading-relaxed text-mist">
          {t.lead}
        </p>
        <AppStoreButton t={appStore} className="relative" />
      </div>
    </section>
  )
}

export function SiteFooter({ locale, t }: { locale: Locale; t: Dictionary["footer"] }) {
  return (
    <footer className="border-t border-white/[0.07] pb-24 md:pb-0">
      <div className={cn(container, "flex flex-col gap-6 py-9 text-sm text-mist")}>
        <div className="flex flex-wrap items-center justify-between gap-5">
          <div className="flex flex-wrap items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/landing/icon.webp" alt="" width={28} height={28} loading="lazy" className="h-7 w-7 rounded-lg" />
            <Wordmark className="text-[17px]" />
            <span className="ml-2">© {new Date().getFullYear()} Mohamed Bifenzi</span>
          </div>
          <nav aria-label={t.label} className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/about" className="hover:text-cloud">{t.about}</Link>
            <Link href="/contact" className="hover:text-cloud">{t.contact}</Link>
            <Link href="/privacy" className="hover:text-cloud">{t.privacy}</Link>
            <Link href="/terms" className="hover:text-cloud">{t.terms}</Link>
          </nav>
        </div>
        <nav aria-label={t.language} className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/[0.07] pt-6">
          <Globe className="h-4 w-4 flex-none" aria-hidden="true" />
          {LOCALES.map((l) => (
            <Link
              key={l}
              href={landingPath(l)}
              hrefLang={l}
              lang={l}
              aria-current={l === locale ? "page" : undefined}
              className={cn("hover:text-cloud", l === locale && "font-bold text-cloud")}
            >
              {LANGUAGE_NAMES[l]}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}
