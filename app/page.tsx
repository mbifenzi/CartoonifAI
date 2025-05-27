import Header from "@/components/header"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import ResponsiveStyleTabs from "@/components/responsive-style-tabs"
import HowItWorksSection from "@/components/how-it-works-section"
import TestimonialsSection from "@/components/testimonials-section"
import DownloadCTASection from "@/components/download-cta-section"
import FAQSection from "@/components/faq-section"
import FloatingAppButtons from "@/components/floating-app-buttons"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">

      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <ResponsiveStyleTabs />
        <HowItWorksSection />
        <TestimonialsSection />
        <DownloadCTASection />
        <FAQSection />
      </main>

      <FloatingAppButtons />
      <Footer />
    </div>
  )
}
