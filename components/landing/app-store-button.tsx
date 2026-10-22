import { APP_STORE_URL } from "@/lib/landing"
import { cn } from "@/lib/utils"
import { AppleLogo } from "./icons"

export default function AppStoreButton({ size = "lg", className }: { size?: "sm" | "lg"; className?: string }) {
  if (size === "sm") {
    return (
      <a
        href={APP_STORE_URL}
        className={cn(
          "inline-flex min-h-11 items-center gap-2 rounded-full bg-cloud px-4 text-sm font-bold text-ink transition hover:bg-white",
          className,
        )}
      >
        <AppleLogo className="h-[18px] w-[18px]" />
        Get the app
      </a>
    )
  }

  return (
    <a
      href={APP_STORE_URL}
      className={cn(
        "inline-flex min-h-[60px] items-center gap-3 rounded-2xl bg-cloud pl-5 pr-6 text-ink shadow-[0_12px_40px_rgba(158,124,255,0.25)] transition hover:bg-white",
        className,
      )}
    >
      <AppleLogo className="h-7 w-7" />
      <span className="flex flex-col text-left leading-[1.1]">
        <span className="text-xs font-semibold">Download on the</span>
        <span className="text-[21px] font-extrabold tracking-tight">App Store</span>
      </span>
    </a>
  )
}
