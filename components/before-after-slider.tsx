"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  className?: string
}

export default function BeforeAfterSlider({ beforeImage, afterImage, className = "" }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    setSliderPosition(Math.min(Math.max(x, 0), 100))
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const touch = e.touches[0]
    const x = ((touch.clientX - rect.left) / rect.width) * 100
    setSliderPosition(Math.min(Math.max(x, 0), 100))
  }

  useEffect(() => {
    // Add animation on initial load
    const timer = setTimeout(() => {
      setSliderPosition(75)

      setTimeout(() => {
        setSliderPosition(25)

        setTimeout(() => {
          setSliderPosition(50)
        }, 800)
      }, 800)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      ref={containerRef}
      className={`relative w-full aspect-square cursor-ew-resize overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* Before Image (Full width, but clipped from the right) */}
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
        <Image src={beforeImage || "/placeholder.svg"} alt="Before" fill className="object-cover w-full h-full" />
        <div className="absolute bottom-4 left-4 bg-white/80 dark:bg-black/80 px-3 py-1 rounded-full text-sm font-medium">
          Original
        </div>
      </div>

      {/* After Image (Full width, but clipped from the left) */}
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}>
        <Image src={afterImage || "/placeholder.svg"} alt="After" fill className="object-cover w-full h-full" />
        <div className="absolute bottom-4 right-4 bg-white/80 dark:bg-black/80 px-3 py-1 rounded-full text-sm font-medium">
          Cartoon
        </div>
      </div>

      {/* Slider Control */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 5L3 10L8 15" stroke="#6D28D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 5L21 10L16 15" stroke="#6D28D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <div className="absolute top-4 left-0 right-0 text-center">
        <div className="inline-block bg-white/80 dark:bg-black/80 px-3 py-1 rounded-full text-sm font-medium">
          Slide to compare
        </div>
      </div>
    </div>
  )
}
