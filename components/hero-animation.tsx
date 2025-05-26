"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function HeroAnimation() {
  const [currentStyle, setCurrentStyle] = useState(0)
  const styles = ["ghibli", "disney", "pixar", "anime", "comic"]
  const styleNames = ["Ghibli", "Disney", "Pixar", "Anime", "Comic"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStyle((prev) => (prev + 1) % styles.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/smiling-professional-headshot.png"
          alt="Original Photo"
          width={400}
          height={400}
          className="rounded-full border-4 border-white shadow-xl z-10 w-40 h-40 object-cover"
        />
      </div>

      {styles.map((style, index) => (
        <div
          key={style}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentStyle === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={`/placeholder.svg?height=400&width=400&query=${style} style cartoon portrait of a smiling person, vibrant colors`}
            alt={`${style} Style`}
            fill
            className="rounded-xl object-cover"
          />

          {/* Style badge - moved to top-left for better placement */}
          <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 px-3 py-1.5 rounded-full text-sm font-medium shadow-md">
            {styleNames[index]} Style
          </div>
        </div>
      ))}

      {/* Transform Now badge - moved to bottom center for better visibility */}
      <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 z-20">
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-lg animate-pulse">
          Transform Now!
        </div>
      </div>

      {/* AI-Powered badge - repositioned for balance */}
      <div className="absolute top-4 right-4 z-20">
        <div className="bg-white dark:bg-gray-800 shadow-lg px-3 py-1.5 rounded-full text-xs font-medium">
          AI-Powered
        </div>
      </div>
    </div>
  )
}
