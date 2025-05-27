import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star, Heart } from "lucide-react"

export default function DownloadCTASection() {
  return (
    <section id="download" className="py-20">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 px-6 py-16 sm:px-12 sm:py-24">
          <div className="relative grid gap-8 md:grid-cols-2 items-center">
            <div className="text-white space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Cartoonify Yourself?
              </h2>
              <p className="max-w-[600px] text-white/90 md:text-xl">
                Download CartoonifAI now and transform your photos into stunning cartoon art in seconds. Free to use
                with no limits!
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="bg-white text-gray-900 hover:bg-white/90 shadow-lg flex items-center justify-center gap-3 px-6"
                >
                  <Link href="https://apps.apple.com/app/cartoonifai">
                    <div className="flex items-center">
                      <svg viewBox="0 0 24 24" className="h-7 w-7 mr-2" fill="currentColor">
                        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.21 2.33-.91 3.57-.84 1.5.09 2.63.64 3.38 1.64-3.03 1.96-2.36 5.5.3 6.77-.8 1.91-1.95 3.85-3.33 5.6ZM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.32 2.32-1.66 4.23-3.74 4.25Z" />
                      </svg>
                      <div className="flex flex-col items-start">
                        <span className="text-xs">Download on the</span>
                        <span className="text-base font-semibold -mt-1">App Store</span>
                      </div>
                    </div>
                  </Link>
                </Button>

                <div className="relative group">
                  <Button
                    asChild
                    size="lg"
                    variant="secondary"
                    className="bg-white/20 text-white border-white/30 hover:bg-white/30 shadow-lg flex items-center justify-center gap-3 px-6 cursor-not-allowed opacity-50"
                    disabled
                  >
                    <div className="flex items-center">
                      <svg viewBox="0 0 24 24" className="h-7 w-7 mr-2" fill="currentColor">
                        <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 5.26 2.3-4.02c.23-.4.81-.53 1.21-.3.19.11.34.29.43.5l2.3 4.01-4.14 2.28-2.1-2.47zm.59 4.93-2.12 2.47 4.14 2.28 2.3-4.02c.23-.4.1-.98-.3-1.21a.995.995 0 0 0-.5-.07l-3.52.55z" />
                      </svg>
                      <div className="flex flex-col items-start">
                        <span className="text-xs">GET IT ON</span>
                        <span className="text-base font-semibold -mt-1">Google Play</span>
                      </div>
                    </div>
                  </Button>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-black text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Coming Soon
                  </div>
                </div>

                <div className="relative group">
                  <Button
                    asChild
                    size="lg"
                    variant="secondary"
                    className="bg-white/20 text-white border-white/30 hover:bg-white/30 shadow-lg flex items-center justify-center gap-3 px-6 cursor-not-allowed opacity-50"
                    disabled
                  >
                    <div className="flex items-center">
                      <svg viewBox="0 0 24 24" className="h-7 w-7 mr-2" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                      <div className="flex flex-col items-start">
                        <span className="text-xs">DOWNLOAD ON</span>
                        <span className="text-base font-semibold -mt-1">AppGallery</span>
                      </div>
                    </div>
                  </Button>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-black text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Coming Soon
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-white text-white" />
                  <Star className="h-4 w-4 fill-white text-white" />
                  <Star className="h-4 w-4 fill-white text-white" />
                  <Star className="h-4 w-4 fill-white text-white" />
                  <Star className="h-4 w-4 fill-white text-white" />
                </div>
                <div className="text-white/90">
                  <span className="font-medium">4.9/5</span> from 2,000+ reviews
                </div>
              </div>
            </div>
            <div className="relative mx-auto md:mx-0 w-full max-w-[300px]">
              <Image src="/favicon.png" alt="CartoonifAI App" width={300} height={600} className="object-contain" />
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                <Heart className="h-6 w-6 text-pink-500 fill-pink-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
