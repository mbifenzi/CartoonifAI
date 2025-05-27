"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import BeforeAfterSlider from "@/components/before-after-slider"
import { ChevronLeft, ChevronRight } from "lucide-react"

const styles = [
  {
    id: "ghibli",
    name: "Ghibli",
    title: "Ghibli Style",
    description:
      "Transform yourself into the enchanting world of Studio Ghibli with our magical AI. Experience the dreamy, watercolor aesthetic that captures the essence of films like Spirited Away and My Neighbor Totoro.",
    gradient: "from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600",
    color: "teal",
  },
  {
    id: "disney",
    name: "Disney",
    title: "Disney Style",
    description:
      "Become a Disney character with our magical transformation. Our AI captures the iconic Disney animation style with expressive eyes, smooth lines, and that classic Disney charm.",
    gradient: "from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600",
    color: "blue",
  },
  {
    id: "pixar",
    name: "Pixar",
    title: "Pixar Style",
    description:
      "Step into the world of Pixar with our AI transformation. Get the signature 3D animated look with stylized proportions and that heartwarming Pixar character design.",
    gradient: "from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600",
    color: "red",
  },
  {
    id: "anime",
    name: "Anime",
    title: "Anime Style",
    description:
      "Transform into an anime character with our AI. Get the iconic anime aesthetic with large expressive eyes, colorful hair, and the distinctive Japanese animation style.",
    gradient: "from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600",
    color: "pink",
  },
  {
    id: "comics",
    name: "Comics",
    title: "Comic Book Style",
    description:
      "Become a comic book hero like those in Invincible with our AI transformation. Get the bold lines, dynamic poses, and vibrant colors of comic book art.",
    gradient: "from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600",
    color: "yellow",
  },
  {
    id: "simpsons",
    name: "Simpsons",
    title: "Simpsons Style",
    description:
      "Transform yourself into the iconic world of The Simpsons! Get the classic yellow skin, distinctive eyes, and that unmistakable Springfield cartoon look that's been beloved for decades.",
    gradient: "from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600",
    color: "orange",
  },
]

export default function ResponsiveStyleTabs() {
  const [activeStyle, setActiveStyle] = useState(0)

  const nextStyle = () => {
    setActiveStyle((prev) => (prev + 1) % styles.length)
  }

  const prevStyle = () => {
    setActiveStyle((prev) => (prev - 1 + styles.length) % styles.length)
  }

  const currentStyle = styles[activeStyle]

  return (
    <section
      id="styles"
      className="py-20 bg-gradient-to-b from-white to-purple-50 dark:from-background dark:to-gray-900"
    >
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Transform Into Any Style</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
            See the magic in action with our stunning transformations
          </p>
        </div>

        {/* Desktop Tabs */}
        <div className="hidden lg:block">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {styles.map((style, index) => (
              <button
                key={style.id}
                onClick={() => setActiveStyle(index)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeStyle === index
                    ? "bg-purple-600 text-white shadow-lg"
                    : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-gray-700"
                }`}
              >
                {style.name}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Navigation */}
        <div className="lg:hidden mb-8">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={prevStyle}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2">
              {styles.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStyle(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    activeStyle === index ? "bg-purple-600 w-6" : "bg-gray-300 dark:bg-gray-600"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextStyle}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400">{currentStyle.name} Style</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {activeStyle + 1} of {styles.length}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="space-y-4 order-2 lg:order-1">
            <h3 className="text-2xl font-bold hidden lg:block">{currentStyle.title}</h3>
            <p className="text-gray-500 dark:text-gray-400">{currentStyle.description}</p>
            <div className="flex gap-4">
              <Button asChild className={`bg-gradient-to-r ${currentStyle.gradient}`}>
                <Link href="#download">Try {currentStyle.name} Style</Link>
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <BeforeAfterSlider
              beforeImage="/main.png"
              afterImage={`/${currentStyle.id}.png`}
              className="rounded-xl overflow-hidden shadow-xl"
            />
          </div>
        </div>

        {/* Mobile Style Selector */}
        <div className="lg:hidden mt-8">
          <div className="flex overflow-x-auto gap-2 pb-4 scrollbar-hide">
            {styles.map((style, index) => (
              <button
                key={style.id}
                onClick={() => setActiveStyle(index)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeStyle === index
                    ? "bg-purple-600 text-white shadow-lg"
                    : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-gray-700"
                }`}
              >
                {style.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
