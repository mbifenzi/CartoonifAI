"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { STYLES } from "@/lib/landing"
import { Sparkle } from "./icons"

export default function StyleCompare() {
  const [active, setActive] = useState(0)
  const [position, setPosition] = useState(50)
  const style = STYLES[active]

  return (
    <div className="flex flex-col gap-8 lg:flex-row">
      <div className="flex min-w-0 flex-col gap-2.5 lg:w-[400px] lg:flex-none" role="group" aria-label="Choose a style">
        {STYLES.map((s, i) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setActive(i)}
            aria-pressed={active === i}
            className={cn(
              "flex w-full items-center gap-4 rounded-[20px] border p-3.5 text-left transition",
              active === i
                ? "border-violet bg-ink-raised"
                : "border-white/[0.08] hover:border-white/20 hover:bg-ink-surface",
            )}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={s.image} alt="" loading="lazy" className="h-16 w-16 flex-none rounded-[14px] object-cover" />
            <span className="flex min-w-0 flex-col gap-1">
              <span className="font-display text-xl font-semibold text-cloud">{s.name}</span>
              <span className="text-sm leading-snug text-mist">{s.description}</span>
            </span>
          </button>
        ))}
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-3.5">
        <div className="relative aspect-square overflow-hidden rounded-[28px] bg-ink-deep ring-1 ring-white/[0.08]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={style.image}
            alt={`The same photo in the ${style.name} style`}
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/landing/original.webp"
            alt="The original photo"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 w-[3px] -translate-x-1/2 bg-white shadow-[0_0_18px_rgba(0,0,0,0.4)]"
            style={{ left: `${position}%` }}
          >
            <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#6D3AE5" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" />
              </svg>
            </div>
          </div>
          <span className="pointer-events-none absolute bottom-4 left-4 rounded-full bg-ink-deep/75 px-3 py-1.5 text-[13px] font-bold text-cloud">
            Original
          </span>
          <span className="pointer-events-none absolute bottom-4 right-4 rounded-full bg-violet px-3 py-1.5 text-[13px] font-extrabold text-ink">
            {style.name}
          </span>
          <input
            type="range"
            min={0}
            max={100}
            value={position}
            onChange={(e) => setPosition(Number(e.target.value))}
            aria-label="Drag to compare the original photo and the cartoon"
            className="absolute inset-0 m-0 h-full w-full cursor-ew-resize opacity-0"
          />
        </div>
        <div className="flex flex-wrap justify-between gap-2 text-[13px] text-mist">
          <span>Drag across the photo to compare</span>
          <span className="inline-flex items-center gap-1.5">
            <Sparkle className="h-[13px] w-[13px] text-gold" />
            From 10 Sparkles a look
          </span>
        </div>
      </div>
    </div>
  )
}
