"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function HeroAnimation() {
  const [currentStyle, setCurrentStyle] = useState(0)
  const [isClient, setIsClient] = useState(false)
  const styles = ["ghibli", "disney", "pixar", "anime", "comics"]
  const styleNames = ["Ghibli", "Disney", "Pixar", "Anime", "Comics"]

  useEffect(() => {
    setIsClient(true)

    const interval = setInterval(() => {
      setCurrentStyle((prev) => (prev + 1) % styles.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  // Prevent hydration mismatch by not rendering dynamic content until client-side
  if (!isClient) {
    return (
      <div className="relative w-full h-full">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/main.png"
            alt="Original Photo"
            width={400}
            height={400}
            className="rounded-full border-4 border-white shadow-xl z-10 w-40 h-40 object-cover"
          />
        </div>

        {/* Show first style by default during SSR */}
        <div className="absolute inset-0">
          <Image src="/ghibli.png" alt="Ghibli Style" fill className="rounded-xl object-cover" />
          <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 px-3 py-1.5 rounded-full text-sm font-medium shadow-md">
            Ghibli Style
          </div>
        </div>

        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-lg">
            Transform Now!
          </div>
        </div>

        <div className="absolute top-4 right-4 z-20">
          <div className="bg-white dark:bg-gray-800 shadow-lg px-3 py-1.5 rounded-full text-xs font-medium">
            AI-Powered
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/main.png"
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
          <Image src={`/${style}.png`} alt={`${style} Style`} fill className="rounded-xl object-cover" />

          <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 px-3 py-1.5 rounded-full text-sm font-medium shadow-md">
            {styleNames[index]} Style
          </div>
        </div>
      ))}

      <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 z-20">
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-lg animate-pulse">
          Transform Now!
        </div>
      </div>

      <div className="absolute top-4 right-4 z-20">
        <div className="bg-white dark:bg-gray-800 shadow-lg px-3 py-1.5 rounded-full text-xs font-medium">
          AI-Powered
        </div>
      </div>
    </div>
  )
}
