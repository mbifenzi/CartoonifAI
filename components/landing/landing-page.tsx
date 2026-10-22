import { APP_STORE_URL, SITE_URL } from "@/lib/landing"
import { getDictionary, landingPath, type Locale } from "@/lib/i18n"
import SiteHeader from "./site-header"
import Hero from "./hero"
import MobileCta from "./mobile-cta"
import {
  AnimateSection,
  DuoSection,
  FaqSection,
  FinalCta,
  HowItWorks,
  PricingSection,
  SeasonsSection,
  SiteFooter,
  StylesSection,
} from "./sections"

export default function LandingPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale)

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "MobileApplication",
      name: "CartoonifAI",
      operatingSystem: "iOS",
      applicationCategory: "PhotographyApplication",
      url: new URL(landingPath(locale), SITE_URL).href,
      downloadUrl: APP_STORE_URL,
      image: `${SITE_URL}/icon-512.png`,
      description: t.meta.appDescription,
      inLanguage: locale,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      inLanguage: locale,
      mainEntity: t.faq.items.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ]

  return (
    <div className="flex min-h-screen flex-col overflow-x-clip bg-ink font-sans text-cloud antialiased">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <SiteHeader locale={locale} t={t} />
      <main className="flex-1">
        <Hero locale={locale} t={t} />
        <StylesSection t={t.styles} />
        <AnimateSection locale={locale} t={t.animate} />
        <DuoSection t={t.duo} />
        <SeasonsSection locale={locale} t={t.seasons} />
        <HowItWorks t={t.howItWorks} />
        <PricingSection t={t.pricing} />
        <FaqSection t={t.faq} />
        <FinalCta t={t.finalCta} appStore={t.appStore} />
      </main>
      <SiteFooter locale={locale} t={t.footer} />
      <MobileCta label={t.appStore.download} />
    </div>
  )
}
