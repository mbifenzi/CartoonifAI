import type { ReactNode } from "react"
import Link from "next/link"
import Image from "next/image"

const footerLink = "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"

/** Shared chrome and typography for the Privacy Policy and Terms of Use. */
export function LegalPage({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
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

      <main className="flex-1 container py-12">
        <article className="max-w-3xl mx-auto leading-7">
          <h1 className="text-3xl font-bold mb-2">{title}</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">Last updated: {updated}</p>
          {children}
        </article>
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
              <Link href="/about" className={footerLink}>
                About
              </Link>
              <Link href="/contact" className={footerLink}>
                Contact
              </Link>
              <Link href="/terms" className={footerLink}>
                Terms
              </Link>
              <Link href="/privacy" className={footerLink}>
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

export function H2({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <h2 id={id} className="text-xl font-bold mt-10 mb-4 scroll-mt-20">
      {children}
    </h2>
  )
}

export function H3({ children }: { children: ReactNode }) {
  return <h3 className="text-lg font-semibold mt-6 mb-2">{children}</h3>
}

export function P({ children }: { children: ReactNode }) {
  return <p className="mb-4">{children}</p>
}

export function List({ children }: { children: ReactNode }) {
  return <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  const external = href.startsWith("http") || href.startsWith("mailto:")
  return external ? (
    <a href={href} className="text-purple-700 dark:text-purple-300 underline underline-offset-2">
      {children}
    </a>
  ) : (
    <Link href={href} className="text-purple-700 dark:text-purple-300 underline underline-offset-2">
      {children}
    </Link>
  )
}
