import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
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
  )
}
