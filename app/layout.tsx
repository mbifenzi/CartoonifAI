import type React from "react"
import type { Metadata, Viewport } from "next"
import { Fraunces, Manrope } from "next/font/google"
import "./globals.css"
import HtmlLang from "@/components/html-lang"
import { ThemeProvider } from "@/components/theme-provider"
import { APP_STORE_ID, SITE_URL } from "@/lib/landing"
import { getDictionary } from "@/lib/i18n"

// The same typefaces the app uses (client/lib/design.ts).
const display = Fraunces({ subsets: ["latin"], variable: "--font-display", display: "swap" })
const sans = Manrope({ subsets: ["latin"], variable: "--font-sans", display: "swap" })

const { meta } = getDictionary("en")

// Site-wide defaults. The landing page sets its own title, description, Open Graph and language
// alternates per language (lib/i18n.ts); the other pages are English.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: meta.title,
  description: meta.description,
  authors: [{ name: "Mohamed Bifenzi" }],
  creator: "Mohamed Bifenzi",
  publisher: "Mohamed Bifenzi",
  applicationName: "CartoonifAI",
  formatDetection: { email: false, address: false, telephone: false },
  // Shows Safari's Smart App Banner on iPhone and iPad.
  itunes: { appId: APP_STORE_ID },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: "/",
    siteName: "CartoonifAI",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: meta.ogAlt }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: {
    icon: [{ url: "/favicon.png", sizes: "192x192", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  appleWebApp: { title: "CartoonifAI", statusBarStyle: "black-translucent" },
  category: "photography",
}

export const viewport: Viewport = {
  themeColor: "#1D1426",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <HtmlLang>
      <body className={`${display.variable} ${sans.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </HtmlLang>
  )
}
