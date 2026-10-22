import SiteHeader from "@/components/landing/site-header"
import Hero from "@/components/landing/hero"
import MobileCta from "@/components/landing/mobile-cta"
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
} from "@/components/landing/sections"
import { APP_STORE_URL, FAQS, SITE_URL } from "@/lib/landing"

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "CartoonifAI",
    operatingSystem: "iOS",
    applicationCategory: "PhotographyApplication",
    url: SITE_URL,
    downloadUrl: APP_STORE_URL,
    image: `${SITE_URL}/icon-512.png`,
    description:
      "Turn your selfie into anime, 3D and comic art in seconds, then animate it into a 5-second video.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  },
]

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip bg-ink font-sans text-cloud antialiased">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <StylesSection />
        <AnimateSection />
        <DuoSection />
        <SeasonsSection />
        <HowItWorks />
        <PricingSection />
        <FaqSection />
        <FinalCta />
      </main>
      <SiteFooter />
      <MobileCta />
    </div>
  )
}
