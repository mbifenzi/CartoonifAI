"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { APP_STORE_URL } from "@/lib/landing"
import { AppleLogo } from "./icons"

/** One App Store button pinned to the bottom on phones, once the hero's own button has scrolled away. */
export default function MobileCta({ label }: { label: string }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink/90 px-4 pb-[max(12px,env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl transition-transform duration-300 md:hidden",
        visible ? "translate-y-0" : "pointer-events-none translate-y-full",
      )}
      aria-hidden={!visible}
    >
      <a
        href={APP_STORE_URL}
        tabIndex={visible ? 0 : -1}
        className="flex min-h-12 w-full items-center justify-center gap-2.5 rounded-2xl bg-cloud font-extrabold text-ink"
      >
        <AppleLogo className="h-5 w-5" />
        {label}
      </a>
    </div>
  )
}
