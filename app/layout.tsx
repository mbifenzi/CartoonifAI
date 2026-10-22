import type React from "react"
import type { Metadata, Viewport } from "next"
import { Fraunces, Manrope } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { APP_STORE_ID, SITE_URL } from "@/lib/landing"

// The same typefaces the app uses (client/lib/design.ts).
const display = Fraunces({ subsets: ["latin"], variable: "--font-display", display: "swap" })
const sans = Manrope({ subsets: ["latin"], variable: "--font-sans", display: "swap" })

const title = "CartoonifAI: Turn Your Selfie Into Anime, 3D & Comic Art"
const description =
  "Turn your photos into anime, 3D cartoon and comic art in seconds, then animate them into 5-second videos. Costume, couple and pet portraits, seasonal styles and more. Free to start on iPhone and iPad."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  keywords: [
    "cartoon yourself",
    "photo to cartoon",
    "anime photo AI",
    "3D cartoon avatar",
    "comic portrait",
    "AI selfie art",
    "cartoon profile picture",
    "animate photo",
  ],
  authors: [{ name: "Mohamed Bifenzi" }],
  creator: "Mohamed Bifenzi",
  publisher: "Mohamed Bifenzi",
  applicationName: "CartoonifAI",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: "/" },
  // Shows Safari's Smart App Banner on iPhone and iPad.
  itunes: { appId: APP_STORE_ID },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "CartoonifAI",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "CartoonifAI: Who do you want to become?" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${display.variable} ${sans.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
