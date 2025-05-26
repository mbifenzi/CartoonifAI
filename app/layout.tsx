import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CartoonifAI - Transform Your Photos Into Cartoon Art",
  description:
    "Turn yourself into a cartoon character with AI. Transform any photo into stunning Ghibli, Disney, Pixar, Anime, and Comic Book styles in seconds. Free AI-powered photo transformation app.",
  keywords: [
    "cartoon photo editor",
    "AI photo transformation",
    "cartoon avatar",
    "anime style photo",
    "disney style photo",
    "ghibli style photo",
    "photo to cartoon",
    "AI art generator",
  ],
  authors: [{ name: "CartoonifAI Team" }],
  creator: "CartoonifAI Inc.",
  publisher: "CartoonifAI Inc.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://cartoonifai.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CartoonifAI - Transform Your Photos Into Cartoon Art",
    description:
      "Turn yourself into a cartoon character with AI. Transform any photo into stunning Ghibli, Disney, Pixar, Anime, and Comic Book styles in seconds.",
    url: "https://cartoonifai.com",
    siteName: "CartoonifAI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CartoonifAI - AI Photo Transformation App",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CartoonifAI - Transform Your Photos Into Cartoon Art",
    description:
      "Turn yourself into a cartoon character with AI. Transform any photo into stunning cartoon styles in seconds.",
    images: ["/og-image.png"],
    creator: "@cartoonifai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.png",
        color: "#7c3aed",
      },
    ],
  },
  manifest: "/site.webmanifest",
  category: "technology",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#7c3aed" />
        <meta name="msapplication-TileColor" content="#7c3aed" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="CartoonifAI" />
        <meta name="application-name" content="CartoonifAI" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
