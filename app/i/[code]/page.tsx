import type { Metadata } from "next"
import PageShell from "@/components/landing/page-shell"
import AppStoreButton from "@/components/landing/app-store-button"
import en from "@/lib/dictionaries/en"
import { Sparkle } from "@/components/landing/icons"
import CopyCode from "./copy-code"

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
    <PageShell>
      <section className="relative mx-auto flex max-w-[1200px] justify-center px-4 py-14 sm:px-6 md:py-24 lg:px-10">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 h-[420px] w-[min(640px,100%)] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(158,124,255,0.3),transparent)] blur-2xl"
        />
        <div className="relative flex w-full max-w-[480px] flex-col items-center gap-6 rounded-[36px] border border-white/[0.08] bg-ink-surface px-6 py-10 text-center sm:px-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/landing/icon.webp"
            alt="CartoonifAI app icon"
            width={88}
            height={88}
            className="h-[88px] w-[88px] rounded-[22px] shadow-[0_20px_50px_rgba(158,124,255,0.35)]"
          />
          <div className="flex flex-col gap-3">
            <p className="text-[13px] font-extrabold uppercase tracking-[0.14em] text-violet">You&apos;re invited</p>
            <h1 className="font-display text-[clamp(34px,8vw,48px)] font-semibold leading-[1.02] tracking-[-0.025em] text-cloud">
              A friend invited you
            </h1>
            <p className="text-base leading-relaxed text-mist">
              Turn your photos into cartoons, anime and more. Enter this code in the app and you both get free Sparkles
              after your first creation.
            </p>
          </div>

          <div className="w-full rounded-3xl border border-dashed border-violet/50 bg-ink-raised px-4 py-6">
            <p className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-[0.14em] text-mist">
              <Sparkle className="h-3.5 w-3.5 text-gold" />
              Your invite code
            </p>
            <p className="mt-2 select-all break-all font-mono text-[clamp(28px,9vw,40px)] font-bold tracking-[0.2em] text-cloud">
              {code || "------"}
            </p>
            {code && <CopyCode code={code} />}
          </div>

          <div className="flex w-full flex-col items-center gap-4">
            <AppStoreButton t={en.appStore} />
            {code && (
              <a
                href={`cartoonifai://invite?code=${code}`}
                className="text-[15px] font-bold text-violet underline decoration-violet/40 underline-offset-4 transition hover:text-cloud"
              >
                Already have the app? Open it
              </a>
            )}
          </div>
          <p className="text-sm text-mist">After installing: Profile → Invite friends → Have an invite code?</p>
        </div>
      </section>
    </PageShell>
  )
}
