import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

/** An iPhone-shaped frame sized for the app's 1320×2868 screenshots. */
export default function PhoneFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "relative aspect-[1320/2868] rounded-[46px] bg-[#0B0710] p-2.5 shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_40px_80px_rgba(0,0,0,0.55)]",
        className,
      )}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[37px]">{children}</div>
    </div>
  )
}
