"use client"

import type { ReactNode } from "react"
import { useSelectedLayoutSegment } from "next/navigation"
import { DEFAULT_LOCALE, isLocale } from "@/lib/locales"

/**
 * The <html> element, with `lang` set from the first path segment: `/fr` is French, while `/`,
 * `/privacy`, `/i/…` and every other page are English. A single root layout keeps the other
 * pages where they are, and the segment is known when each page is prerendered.
 */
export default function HtmlLang({ className, children }: { className?: string; children: ReactNode }) {
  const segment = useSelectedLayoutSegment()
  const lang = isLocale(segment) ? segment : DEFAULT_LOCALE
  return (
    <html lang={lang} className={className} suppressHydrationWarning>
      {children}
    </html>
  )
}
