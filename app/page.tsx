import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Star, ChevronRight, Camera, Zap, Share2, Heart } from "lucide-react"
import HeroAnimation from "@/components/hero-animation"
import TestimonialCard from "@/components/testimonial-card"
import BeforeAfterSlider from "@/components/before-after-slider"
import FAQAccordion from "@/components/faq-accordion"
import FloatingAppButtons from "@/components/floating-app-buttons"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/favicon.png" alt="CartoonifAI Logo" width={32} height={32} className="w-8 h-8" />
            <span className="text-xl font-bold">
              <span className="text-purple-800 dark:text-purple-300">Cartoonif</span>
              <span className="text-orange-500">AI</span>
            </span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="#styles" className="text-sm font-medium hover:text-primary">
              Styles
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
              Testimonials
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-primary">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild variant="outline" className="hidden sm:flex">
              <Link href="#download">Try for Free</Link>
            </Button>
            <Button
              asChild
              className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
            >
              <Link href="#download">Download Now</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
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
                  Upload any photo and watch as our AI transforms you into stunning cartoon art styles from Ghibli,
                  Disney, Pixar, Anime, and Comic Books.
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

        {/* Features Section */}
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

        {/* Styles Showcase Section */}
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

            <Tabs defaultValue="ghibli" className="w-full">
              <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-2 md:grid-cols-5 mb-12">
                <TabsTrigger value="ghibli">Ghibli</TabsTrigger>
                <TabsTrigger value="disney">Disney</TabsTrigger>
                <TabsTrigger value="pixar">Pixar</TabsTrigger>
                <TabsTrigger value="anime">Anime</TabsTrigger>
                <TabsTrigger value="comic">Comic Book</TabsTrigger>
              </TabsList>

              <TabsContent value="ghibli" className="mt-4">
                <div className="grid gap-8 md:grid-cols-2 items-center">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">Ghibli Style</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Transform yourself into the enchanting world of Studio Ghibli with our magical AI. Experience the
                      dreamy, watercolor aesthetic that captures the essence of films like Spirited Away and My Neighbor
                      Totoro.
                    </p>
                    <div className="flex gap-4">
                      <Button
                        asChild
                        className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600"
                      >
                        <Link href="#download">Try Ghibli Style</Link>
                      </Button>
                    </div>
                  </div>
                  <BeforeAfterSlider
                    beforeImage="/smiling-woman-headshot.png"
                    afterImage="/smiling-woman-ghibli-watercolor.png"
                    className="rounded-xl overflow-hidden shadow-xl"
                  />
                </div>
              </TabsContent>

              <TabsContent value="disney" className="mt-4">
                <div className="grid gap-8 md:grid-cols-2 items-center">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">Disney Style</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Become a Disney character with our magical transformation. Our AI captures the iconic Disney
                      animation style with expressive eyes, smooth lines, and that classic Disney charm.
                    </p>
                    <div className="flex gap-4">
                      <Button
                        asChild
                        className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                      >
                        <Link href="#download">Try Disney Style</Link>
                      </Button>
                    </div>
                  </div>
                  <BeforeAfterSlider
                    beforeImage="/placeholder-k0r4h.png"
                    afterImage="/smiling-man-disney-portrait.png"
                    className="rounded-xl overflow-hidden shadow-xl"
                  />
                </div>
              </TabsContent>

              <TabsContent value="pixar" className="mt-4">
                <div className="grid gap-8 md:grid-cols-2 items-center">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">Pixar Style</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Step into the world of Pixar with our AI transformation. Get the signature 3D animated look with
                      stylized proportions and that heartwarming Pixar character design.
                    </p>
                    <div className="flex gap-4">
                      <Button
                        asChild
                        className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600"
                      >
                        <Link href="#download">Try Pixar Style</Link>
                      </Button>
                    </div>
                  </div>
                  <BeforeAfterSlider
                    beforeImage="/placeholder.svg?height=600&width=600&query=professional headshot of a young woman with glasses"
                    afterImage="/placeholder.svg?height=600&width=600&query=pixar style 3D animated portrait of a young woman with glasses, stylized proportions"
                    className="rounded-xl overflow-hidden shadow-xl"
                  />
                </div>
              </TabsContent>

              <TabsContent value="anime" className="mt-4">
                <div className="grid gap-8 md:grid-cols-2 items-center">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">Anime Style</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Transform into an anime character with our AI. Get the iconic anime aesthetic with large
                      expressive eyes, colorful hair, and the distinctive Japanese animation style.
                    </p>
                    <div className="flex gap-4">
                      <Button
                        asChild
                        className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600"
                      >
                        <Link href="#download">Try Anime Style</Link>
                      </Button>
                    </div>
                  </div>
                  <BeforeAfterSlider
                    beforeImage="/placeholder.svg?height=600&width=600&query=professional headshot of a young man with dark hair"
                    afterImage="/placeholder.svg?height=600&width=600&query=anime style portrait of a young man with dark hair, large expressive eyes, colorful"
                    className="rounded-xl overflow-hidden shadow-xl"
                  />
                </div>
              </TabsContent>

              <TabsContent value="comic" className="mt-4">
                <div className="grid gap-8 md:grid-cols-2 items-center">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">Comic Book Style</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Become a comic book hero like those in Invincible with our AI transformation. Get the bold lines,
                      dynamic poses, and vibrant colors of comic book art.
                    </p>
                    <div className="flex gap-4">
                      <Button
                        asChild
                        className="bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600"
                      >
                        <Link href="#download">Try Comic Style</Link>
                      </Button>
                    </div>
                  </div>
                  <BeforeAfterSlider
                    beforeImage="/placeholder.svg?height=600&width=600&query=professional headshot of a person with a serious expression"
                    afterImage="/placeholder.svg?height=600&width=600&query=comic book style portrait like Invincible, bold lines, vibrant colors, superhero aesthetic"
                    className="rounded-xl overflow-hidden shadow-xl"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
              <p className="mx-auto mt-4 max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
                Three simple steps to transform your photos into cartoon masterpieces
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="relative text-center">
                <div className="mb-4 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">
                  <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">1</span>
                </div>
                <h3 className="text-xl font-bold">Upload Your Photo</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Take a selfie or choose a photo from your gallery to get started.
                </p>
                <div className="hidden md:block absolute top-8 right-0 w-24 h-4 border-t-2 border-dashed border-gray-300 dark:border-gray-700"></div>
              </div>
              <div className="relative text-center">
                <div className="mb-4 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-pink-100 dark:bg-pink-900/30">
                  <span className="text-2xl font-bold text-pink-600 dark:text-pink-400">2</span>
                </div>
                <h3 className="text-xl font-bold">Choose Your Style</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Select from Ghibli, Disney, Pixar, Anime, or Comic Book styles.
                </p>
                <div className="hidden md:block absolute top-8 right-0 w-24 h-4 border-t-2 border-dashed border-gray-300 dark:border-gray-700"></div>
              </div>
              <div className="text-center">
                <div className="mb-4 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/30">
                  <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">3</span>
                </div>
                <h3 className="text-xl font-bold">Get Your Cartoon</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Watch the magic happen as our AI transforms your photo in seconds.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="py-20 bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-background"
        >
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Users Say</h2>
              <p className="mx-auto mt-4 max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
                Join thousands of happy users who have transformed their photos with CartoonifAI
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <TestimonialCard
                name="Sarah J."
                avatar="/placeholder.svg?height=100&width=100&query=portrait of a smiling woman with blonde hair"
                rating={5}
                text="I've tried so many photo editing apps, but the Ghibli style in CartoonifAI is on another level! I used it for my Instagram profile and got over 200 likes in an hour. Worth watching a few ads for this quality!"
              />
              <TestimonialCard
                name="Michael T."
                avatar="/placeholder.svg?height=100&width=100&query=portrait of a smiling man with dark hair and beard"
                rating={5}
                text="As a huge Invincible fan, I was skeptical, but wow! The comic book filter actually made me look like I could be in the series. My gaming buddies all downloaded it after seeing my Discord profile pic. The ads aren't even that annoying."
                featured={true}
              />
              <TestimonialCard
                name="Aisha K."
                avatar="/placeholder.svg?height=100&width=100&query=portrait of a smiling woman with dark hair"
                rating={5}
                text="My kids are obsessed with Disney movies, so I transformed our family photo into Disney style for our Christmas cards. Everyone thought we had it professionally done! Totally worth sitting through a few ads for this quality."
              />
            </div>
          </div>
        </section>

        {/* Download CTA Section */}
        <section id="download" className="py-20">
          <div className="container">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 px-6 py-16 sm:px-12 sm:py-24">
              <div className="relative grid gap-8 md:grid-cols-2 items-center">
                <div className="text-white space-y-6">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Ready to Cartoonify Yourself?
                  </h2>
                  <p className="max-w-[600px] text-white/90 md:text-xl">
                    Download CartoonifAI now and transform your photos into stunning cartoon art in seconds. Available
                    on iOS and Android.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6">
                    <Button
                      asChild
                      size="lg"
                      variant="secondary"
                      className="bg-white text-gray-900 hover:bg-white/90 shadow-lg flex items-center justify-center gap-3 px-6"
                    >
                      <Link href="#">
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
                    <Button
                      asChild
                      size="lg"
                      variant="secondary"
                      className="bg-white text-gray-900 hover:bg-white/90 shadow-lg flex items-center justify-center gap-3 px-6"
                    >
                      <Link href="#">
                        <div className="flex items-center">
                          <svg viewBox="0 0 24 24" className="h-7 w-7 mr-2" fill="currentColor">
                            <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 5.26 2.3-4.02c.23-.4.81-.53 1.21-.3.19.11.34.29.43.5l2.3 4.01-4.14 2.28-2.1-2.47zm.59 4.93-2.12 2.47 4.14 2.28 2.3-4.02c.23-.4.1-.98-.3-1.21a.995.995 0 0 0-.5-.07l-3.52.55z" />
                          </svg>
                          <div className="flex flex-col items-start">
                            <span className="text-xs">GET IT ON</span>
                            <span className="text-base font-semibold -mt-1">Google Play</span>
                          </div>
                        </div>
                      </Link>
                    </Button>
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
                  <Image
                    src="/placeholder.svg?height=600&width=300&query=smartphone mockup showing cartoon transformation app interface"
                    alt="CartoonifAI App"
                    width={300}
                    height={600}
                    className="rounded-3xl shadow-2xl"
                  />
                  <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                    <Heart className="h-6 w-6 text-pink-500 fill-pink-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Frequently Asked Questions
              </h2>
              <p className="mx-auto mt-4 max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
                Everything you need to know about CartoonifAI
              </p>
            </div>
            <div className="mx-auto max-w-3xl">
              <FAQAccordion />
            </div>
          </div>
        </section>
      </main>

      <FloatingAppButtons />

      <footer className="border-t bg-background">
        <div className="container py-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image src="/favicon.png" alt="CartoonifAI Logo" width={24} height={24} className="w-6 h-6" />
                <span className="text-xl font-bold">
                  <span className="text-purple-800 dark:text-purple-300">Cartoonif</span>
                  <span className="text-orange-500">AI</span>
                </span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Transform your photos into stunning cartoon art with our AI-powered app.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                  <span className="sr-only">Twitter</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                  <span className="sr-only">Instagram</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                  <span className="sr-only">TikTok</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path>
                    <path d="M15 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
                    <path d="M15 8v8a4 4 0 0 1-4 4"></path>
                    <line x1="15" x2="15" y1="4" y2="12"></line>
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">App</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#features"
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#styles"
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  >
                    Styles
                  </Link>
                </li>
                <li>
                  <Link
                    href="#faq"
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  >
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t pt-8 text-center text-sm text-gray-500 dark:text-gray-400">
            <p>© {new Date().getFullYear()} CartoonifAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
