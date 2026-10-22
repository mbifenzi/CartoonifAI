import type { Metadata } from "next"
import { notFound } from "next/navigation"
import LandingPage from "@/components/landing/landing-page"
import { DEFAULT_LOCALE, LOCALES, isLocale, landingMetadata } from "@/lib/i18n"

type Props = { params: Promise<{ locale: string }> }

// English is served at `/`, so `/en` is not a page.
export const dynamicParams = false

export function generateStaticParams() {
  return LOCALES.filter((locale) => locale !== DEFAULT_LOCALE).map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return isLocale(locale) ? landingMetadata(locale) : {}
}

export default async function Page({ params }: Props) {
  const { locale } = await params
  if (!isLocale(locale) || locale === DEFAULT_LOCALE) notFound()
  return <LandingPage locale={locale} />
}
