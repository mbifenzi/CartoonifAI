import type { Metadata } from "next"
import Link from "next/link"
import { Mail } from "lucide-react"
import PageShell, { PageIntro } from "@/components/landing/page-shell"

export const metadata: Metadata = {
  title: "Contact | CartoonifAI",
  description: "Questions, feedback or ideas for CartoonifAI? Email support@cartoonifai.com.",
  alternates: { canonical: "/contact" },
}

const EMAIL = "support@cartoonifai.com"

const TIPS = [
  "What you were trying to do, and what happened instead",
  "Your iPhone or iPad model and iOS version",
  "The app version, shown in Profile",
  "A screenshot, if it helps",
]

export default function ContactPage() {
  return (
    <PageShell>
      <section className="mx-auto flex max-w-[1200px] flex-col gap-12 px-4 py-14 sm:px-6 md:flex-row md:gap-16 md:py-24 lg:px-10">
        <PageIntro eyebrow="Contact" title="Get in touch." className="min-w-0 flex-1">
          <p>
            Questions, feedback, a bug, or an idea for a new style? Send an email and we&apos;ll get back to you.
          </p>
        </PageIntro>

        <div className="flex min-w-0 flex-1 flex-col gap-6 rounded-[28px] border border-white/[0.08] bg-ink-surface p-7 md:p-9">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-violet/15">
              <Mail className="h-6 w-6 text-violet" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-mist">Email</p>
              <p className="break-words text-lg font-bold text-cloud">{EMAIL}</p>
            </div>
          </div>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex min-h-[56px] items-center justify-center gap-2.5 rounded-2xl bg-cloud px-6 text-base font-extrabold text-ink transition hover:bg-white"
          >
            <Mail className="h-5 w-5" aria-hidden="true" />
            Write an email
          </a>
          <div className="border-t border-white/10 pt-6">
            <h2 className="text-base font-bold text-cloud">Reporting a problem? It helps to include:</h2>
            <ul className="mt-3 flex list-disc flex-col gap-2 pl-5 text-[15px] leading-relaxed text-mist marker:text-violet">
              {TIPS.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </div>
          <p className="text-[15px] leading-relaxed text-mist">
            Want your data deleted? You can do it yourself in the app, or see{" "}
            <Link href="/privacy" className="font-semibold text-violet underline decoration-violet/40 underline-offset-[3px] hover:text-cloud">
              the Privacy Policy
            </Link>{" "}
            for how.
          </p>
        </div>
      </section>
    </PageShell>
  )
}
