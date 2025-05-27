"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FloatingAppButtons() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show buttons after scrolling down 500px
      if (window.scrollY > 500) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex gap-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md p-3 rounded-full shadow-lg border border-gray-200 dark:border-gray-800">
      <Button
        asChild
        size="sm"
        variant="secondary"
        className="bg-white text-gray-900 hover:bg-white/90 shadow-md flex items-center px-3"
      >
        <Link href="https://apps.apple.com/app/cartoonifai">
          <svg viewBox="0 0 24 24" className="h-5 w-5 mr-1.5" fill="currentColor">
            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.21 2.33-.91 3.57-.84 1.5.09 2.63.64 3.38 1.64-3.03 1.96-2.36 5.5.3 6.77-.8 1.91-1.95 3.85-3.33 5.6ZM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.32 2.32-1.66 4.23-3.74 4.25Z" />
          </svg>
          App Store
        </Link>
      </Button>

      <div className="relative group">
        <Button
          size="sm"
          variant="secondary"
          className="bg-white/50 text-gray-500 hover:bg-white/50 shadow-md flex items-center px-3 cursor-not-allowed opacity-50"
          disabled
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 mr-1.5" fill="currentColor">
            <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 5.26 2.3-4.02c.23-.4.81-.53 1.21-.3.19.11.34.29.43.5l2.3 4.01-4.14 2.28-2.1-2.47zm.59 4.93-2.12 2.47 4.14 2.28 2.3-4.02c.23-.4.1-.98-.3-1.21a.995.995 0 0 0-.5-.07l-3.52.55z" />
          </svg>
          Google Play
        </Button>
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Coming Soon
        </div>
      </div>

      <div className="relative group">
        <Button
          size="sm"
          variant="secondary"
          className="bg-white/50 text-gray-500 hover:bg-white/50 shadow-md flex items-center px-3 cursor-not-allowed opacity-50"
          disabled
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 mr-1.5" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
          AppGallery
        </Button>
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Coming Soon
        </div>
      </div>
    </div>
  )
}
