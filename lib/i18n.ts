import type { Metadata } from "next"
import en, { type Dictionary } from "@/lib/dictionaries/en"
import fr from "@/lib/dictionaries/fr"
import es from "@/lib/dictionaries/es"
import pt from "@/lib/dictionaries/pt"
import it from "@/lib/dictionaries/it"
import de from "@/lib/dictionaries/de"
import { DEFAULT_LOCALE, LOCALES, type Locale } from "@/lib/locales"

export { DEFAULT_LOCALE, LOCALES, isLocale, type Locale } from "@/lib/locales"

const DICTIONARIES: Record<Locale, Dictionary> = { en, fr, es, pt, it, de }

/** Each language in its own words, for the language switcher. */
export const LANGUAGE_NAMES: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  es: "Español",
  pt: "Português",
  it: "Italiano",
  de: "Deutsch",
}

/** Open Graph locales, matching the App Store storefronts the listing is written for. */
const OG_LOCALES: Record<Locale, string> = {
  en: "en_US",
  fr: "fr_FR",
  es: "es_ES",
  pt: "pt_BR",
  it: "it_IT",
  de: "de_DE",
}

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale]
}

/** The landing page's path in a language, optionally with a section anchor: `/#faq`, `/fr#faq`. */
export function landingPath(locale: Locale, hash?: string) {
  const base = locale === DEFAULT_LOCALE ? "/" : `/${locale}`
  return hash ? `${base}#${hash}` : base
}

export function landingMetadata(locale: Locale): Metadata {
  const { meta } = getDictionary(locale)
  const url = landingPath(locale)
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(LOCALES.map((l) => [l, landingPath(l)])),
        "x-default": landingPath(DEFAULT_LOCALE),
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url,
      siteName: "CartoonifAI",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: meta.ogAlt }],
      locale: OG_LOCALES[locale],
      alternateLocale: LOCALES.filter((l) => l !== locale).map((l) => OG_LOCALES[l]),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: ["/og-image.png"],
    },
  }
}
