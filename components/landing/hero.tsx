import Link from "next/link"
import { ChevronRight, Play } from "lucide-react"
import AppStoreButton from "./app-store-button"
import PhoneFrame from "./phone-frame"
import PreviewVideo from "./preview-video"
import { Sparkle } from "./icons"

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-[1200px] flex-col items-center gap-12 px-4 pb-20 pt-10 sm:px-6 md:flex-row md:gap-16 md:pb-28 md:pt-20 lg:px-10"
    >
      <div className="flex min-w-0 flex-1 flex-col gap-7">
        <Link
          href="/#animate"
          className="inline-flex items-center gap-2.5 self-start rounded-full border border-white/10 bg-ink-surface py-1.5 pl-1.5 pr-3.5 text-[13px] font-semibold text-cloud transition hover:border-white/20"
        >
          <span className="rounded-full bg-coral px-2.5 py-1 text-[11px] font-extrabold tracking-wider text-ink">NEW</span>
          Animate it, 2-photo styles and Halloween
          <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
        <h1 className="font-display text-[clamp(46px,7vw,92px)] font-semibold leading-[0.98] tracking-[-0.03em] text-cloud text-balance">
          Who do you want to <em className="text-violet">become?</em>
        </h1>
        <p className="max-w-[520px] text-lg leading-relaxed text-mist md:text-xl">
          CartoonifAI redraws your selfie in hand-picked styles like Anime Glow, 3D Dream and Comic Hero. Then it brings
          your portrait to life as a 5-second video.
        </p>
        <div className="flex flex-wrap items-center gap-3.5">
          <AppStoreButton />
          <Link
            href="/#styles"
            className="inline-flex min-h-[60px] items-center rounded-2xl border border-white/15 px-6 text-[15px] font-bold text-cloud transition hover:border-white/30"
          >
            See the styles
          </Link>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] font-semibold text-mist">
          <li className="inline-flex items-center gap-1.5">
            <Sparkle className="h-[15px] w-[15px] text-gold" />
            Free Sparkles to start
          </li>
          <li>iPhone and iPad</li>
          <li>6 languages</li>
        </ul>
      </div>

      <div className="relative flex w-full min-w-0 flex-1 justify-center py-5">
        <div
          aria-hidden="true"
          className="absolute inset-[6%_4%] rounded-full bg-[radial-gradient(closest-side,rgba(158,124,255,0.4),rgba(255,140,125,0.14)_60%,transparent)] blur-3xl"
        />
        <PhoneFrame className="w-[min(300px,68vw)]">
          <PreviewVideo
            src="/landing/animate-preview.mp4"
            poster="/landing/screen-home.webp"
            label="A short tour of the CartoonifAI app"
          />
        </PhoneFrame>

        <div className="absolute bottom-[10%] left-0 w-[132px] rounded-[20px] border border-white/10 bg-ink-surface p-2 shadow-[0_24px_48px_rgba(0,0,0,0.5)] sm:left-[calc(50%-290px)] sm:w-[168px]">
          <div className="relative aspect-square overflow-hidden rounded-[14px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/landing/anime-glow.webp" alt="" className="absolute inset-0 h-full w-full object-cover" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/landing/original.webp"
              alt=""
              className="absolute inset-0 h-full w-full object-cover [clip-path:inset(0_50%_0_0)]"
            />
            <div className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-px bg-white" />
          </div>
          <div className="flex justify-between px-1 pb-0.5 pt-2 text-[11px] font-bold text-mist">
            <span>Before</span>
            <span className="text-violet">Anime Glow</span>
          </div>
        </div>

        <div className="absolute right-0 top-[14%] flex items-center gap-2.5 rounded-full bg-coral py-2 pl-2 pr-4 text-sm font-extrabold text-ink shadow-[0_18px_40px_rgba(255,140,125,0.35)] sm:right-[calc(50%-270px)]">
          <span className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-ink">
            <Play className="h-3 w-3 fill-coral text-coral" aria-hidden="true" />
          </span>
          Animate it · 5s
        </div>
      </div>
    </section>
  )
}
