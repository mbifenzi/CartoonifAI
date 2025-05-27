import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
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
            <Link href="#download">Get Started</Link>
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
  )
}
