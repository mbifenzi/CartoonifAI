import LandingPage from "@/components/landing/landing-page"
import { landingMetadata } from "@/lib/i18n"

export const metadata = landingMetadata("en")

export default function Page() {
  return <LandingPage locale="en" />
}
