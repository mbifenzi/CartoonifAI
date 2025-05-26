import Link from "next/link"
import Image from "next/image"
import { Sparkles } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/favicon.png" alt="CartoonifAI Logo" width={32} height={32} className="w-8 h-8" />
              <span className="text-xl font-bold">
                <span className="text-purple-800 dark:text-purple-300">Cartoonif</span>
                <span className="text-orange-500">AI</span>
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="/#styles" className="text-sm font-medium hover:text-primary">
              Styles
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                Our Story
              </h1>
              <p className="mt-6 text-xl text-gray-500 dark:text-gray-400">
                Transforming ordinary photos into extraordinary cartoon art
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <Image
                  src="/placeholder.svg?height=600&width=600&query=diverse team of creative professionals working on digital art and AI"
                  alt="CartoonifAI Team"
                  width={600}
                  height={600}
                  className="rounded-xl shadow-xl"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Who We Are</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  CartoonifAI was born from a simple idea: what if everyone could see themselves as a cartoon character
                  from their favorite style? Our team of artists, developers, and AI specialists came together to make
                  this dream a reality.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Founded in 2023, our mission is to bring joy and creativity to people's lives through the power of
                  AI-generated art. We believe that everyone deserves to experience the magic of seeing themselves
                  transformed into different artistic styles.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  What started as a passion project quickly grew into one of the most popular photo transformation apps,
                  with millions of users worldwide creating and sharing their cartoon personas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-gradient-to-b from-white to-purple-50 dark:from-background dark:to-gray-900">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="text-xl text-gray-500 dark:text-gray-400">
                To democratize digital art creation and make it accessible to everyone, regardless of artistic ability.
              </p>
              <div className="grid gap-8 md:grid-cols-3 mt-12">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Sparkles className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Innovation</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Pushing the boundaries of what's possible with AI-generated art
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center mb-4 mx-auto">
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
                      className="h-6 w-6 text-pink-600 dark:text-pink-400"
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Accessibility</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Making art creation available to everyone, regardless of skill level
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mb-4 mx-auto">
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
                      className="h-6 w-6 text-orange-600 dark:text-orange-400"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                      <line x1="9" x2="9.01" y1="9" y2="9" />
                      <line x1="15" x2="15.01" y1="9" y2="9" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Joy</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Creating moments of delight and surprise through magical transformations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold">Meet Our Team</h2>
              <p className="mt-4 text-gray-500 dark:text-gray-400">The talented individuals behind CartoonifAI</p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=200&query=professional headshot of a young man with glasses, creative director"
                    alt="Alex Chen"
                    width={200}
                    height={200}
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Alex Chen</h3>
                <p className="text-purple-600 dark:text-purple-400">Founder & CEO</p>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Former AI researcher with a passion for art and technology
                </p>
              </div>
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=200&query=professional headshot of a woman with curly hair, tech lead"
                    alt="Maya Johnson"
                    width={200}
                    height={200}
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Maya Johnson</h3>
                <p className="text-purple-600 dark:text-purple-400">CTO</p>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  AI specialist with expertise in computer vision and deep learning
                </p>
              </div>
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=200&query=professional headshot of a man with beard, creative director"
                    alt="David Kim"
                    width={200}
                    height={200}
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">David Kim</h3>
                <p className="text-purple-600 dark:text-purple-400">Creative Director</p>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Former Disney animator with 15 years of experience in digital art
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold">Our Values</h2>
              <p className="mt-4 text-gray-500 dark:text-gray-400">The principles that guide everything we do</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4">User Privacy</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We take your privacy seriously. Your photos are processed securely and deleted from our servers within
                  24 hours. We never share your personal data with third parties without your consent.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4">Artistic Integrity</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We respect the artistic styles we emulate and work with professional artists to ensure our
                  transformations capture the essence of each style while creating something new and unique.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4">Continuous Improvement</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We're constantly refining our AI models and adding new styles based on user feedback. Our goal is to
                  provide the highest quality transformations possible.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4">Inclusivity</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We believe everyone should be able to enjoy our app. We work hard to ensure our transformations work
                  well for people of all backgrounds, ages, and appearances.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 px-6 py-16 sm:px-12 sm:py-24 text-center">
              <div className="relative max-w-3xl mx-auto space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Ready to Transform Your Photos?
                </h2>
                <p className="text-xl text-white/90">
                  Join millions of users who have discovered the magic of CartoonifAI
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/#download"
                    className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-lg font-medium text-purple-600 shadow-md hover:bg-white/90"
                  >
                    Download Now
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-md border border-white bg-transparent px-6 py-3 text-lg font-medium text-white hover:bg-white/10"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-background">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Link href="/" className="flex items-center gap-2">
                <Image src="/favicon.png" alt="CartoonifAI Logo" width={20} height={20} className="w-5 h-5" />
                <span className="text-sm font-bold">
                  <span className="text-purple-800 dark:text-purple-300">Cartoonif</span>
                  <span className="text-orange-500">AI</span>
                </span>
              </Link>
            </div>
            <div className="flex gap-6 text-sm">
              <Link
                href="/about"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                Contact
              </Link>
              <Link
                href="/terms"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                Terms
              </Link>
              <Link
                href="/privacy"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                Privacy
              </Link>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <p>© {new Date().getFullYear()} CartoonifAI. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
