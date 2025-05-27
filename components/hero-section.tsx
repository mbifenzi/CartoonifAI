import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, Star, ChevronRight } from "lucide-react"
import HeroAnimation from "@/components/hero-animation"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-background py-20 md:py-32">
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
      <div className="container relative">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-full bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm">
              ✨ Transform your photos like magic
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              <span className="text-purple-800 dark:text-purple-300">Turn Yourself Into a Cartoon Character</span>
            </h1>
            <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
              Upload any photo and watch as our AI transforms you into stunning cartoon art styles from Ghibli, Disney,
              Pixar, Anime, and Comic Books.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
              >
                <Link href="#download">
                  <Download className="mr-2 h-4 w-4" />
                  Download App
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#styles">
                  See Examples
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-background bg-gray-200 dark:bg-gray-800"
                  />
                ))}
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              </div>
              <div className="text-gray-500 dark:text-gray-400">
                <span className="font-medium">4.9/5</span> from 2,000+ reviews
              </div>
            </div>
          </div>
          <div className="relative mx-auto lg:mx-0 w-full max-w-[400px] aspect-square">
            <HeroAnimation />
          </div>
        </div>
      </div>
    </section>
  )
}
