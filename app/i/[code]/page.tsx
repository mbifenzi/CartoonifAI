import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import CopyCode from "./copy-code"

const APP_STORE_URL = "https://apps.apple.com/app/id6746586563"

function normalize(code: string) {
  return decodeURIComponent(code).toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 12)
}

export async function generateMetadata({ params }: { params: Promise<{ code: string }> }): Promise<Metadata> {
  const code = normalize((await params).code)
  return {
    title: "You're invited to CartoonifAI",
    description: `Turn your photos into cartoons. Use invite code ${code} for free Sparkles.`,
    robots: { index: false },
  }
}

export default async function InvitePage({ params }: { params: Promise<{ code: string }> }) {
  const code = normalize((await params).code)

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-purple-50 to-white px-4 py-12 dark:from-gray-900 dark:to-background">
      <div className="w-full max-w-md overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-8 text-center text-white shadow-xl">
        <Link href="/" className="inline-flex items-center gap-2">
          <Image src="/favicon.png" alt="CartoonifAI" width={40} height={40} className="h-10 w-10 rounded-xl" />
          <span className="text-xl font-bold">CartoonifAI</span>
        </Link>
        <h1 className="mt-6 text-3xl font-bold tracking-tight">A friend invited you</h1>
        <p className="mt-3 text-white/90">
          Turn your photos into cartoons, anime and more. Enter this code in the app and you both get free Sparkles
          after your first creation.
        </p>

        <div className="mt-8 rounded-2xl bg-white/15 p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/80">Your invite code</p>
          <p className="mt-2 select-all font-mono text-4xl font-bold tracking-[0.3em]">{code || "------"}</p>
          {code && <CopyCode code={code} />}
        </div>

        <div className="mt-8 flex flex-col gap-3">
          <a
            href={APP_STORE_URL}
            className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3 font-semibold text-gray-900 shadow-lg hover:bg-white/90"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.21 2.33-.91 3.57-.84 1.5.09 2.63.64 3.38 1.64-3.03 1.96-2.36 5.5.3 6.77-.8 1.91-1.95 3.85-3.33 5.6ZM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.32 2.32-1.66 4.23-3.74 4.25Z" />
            </svg>
            Download on the App Store
          </a>
          {code && (
            <a href={`cartoonifai://invite?code=${code}`} className="text-sm font-semibold text-white/90 underline underline-offset-4">
              Already have the app? Open it
            </a>
          )}
        </div>
        <p className="mt-6 text-xs text-white/75">After installing: Profile → Invite friends → Have an invite code?</p>
      </div>
    </main>
  )
}
