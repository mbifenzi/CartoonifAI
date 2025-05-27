import { Card, CardContent } from "@/components/ui/card"
import { Camera, Zap, Share2 } from "lucide-react"

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Magical Features</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
            Transform your photos with just a few taps and share your cartoon self with the world
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <Card className="border-purple-100 dark:border-purple-900/30 hover:shadow-lg transition-all">
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">
                <Camera className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold">Instant Transformation</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Upload any photo and get your cartoon version in seconds with our advanced AI technology.
              </p>
            </CardContent>
          </Card>
          <Card className="border-pink-100 dark:border-pink-900/30 hover:shadow-lg transition-all">
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 dark:bg-pink-900/30">
                <Zap className="h-6 w-6 text-pink-600 dark:text-pink-400" />
              </div>
              <h3 className="text-xl font-bold">Multiple Styles</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Choose from Ghibli, Disney, Pixar, Anime, and Comic Book styles to find your perfect cartoon look.
              </p>
            </CardContent>
          </Card>
          <Card className="border-orange-100 dark:border-orange-900/30 hover:shadow-lg transition-all">
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/30">
                <Share2 className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-xl font-bold">Easy Sharing</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Share your cartoon creations directly to social media or save them to your gallery with one tap.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
