/** The app's six languages. English lives at `/`, the others at `/fr`, `/es`, … (landing page only). */
export const LOCALES = ["en", "fr", "es", "pt", "it", "de"] as const
export type Locale = (typeof LOCALES)[number]
export const DEFAULT_LOCALE: Locale = "en"

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (LOCALES as readonly string[]).includes(value)
}
