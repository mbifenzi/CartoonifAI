/**
 * English landing copy. Every other language must match this shape (enforced by `Dictionary`).
 *
 * Product wording follows the app and its App Store listing (appstore-screenshots/metadata.py and
 * client/locales in CartoonifAI-mobile): style names like "Anime Glow" stay as they are in every
 * language, while the currency, buttons, 2-photo styles and seasons use the app's own translations.
 * Never name a studio, franchise or living artist.
 */
const en = {
  meta: {
    title: "CartoonifAI: Turn Your Selfie Into Anime, 3D & Comic Art",
    description:
      "Turn your photos into anime, 3D cartoon and comic art in seconds, then animate them into 5-second videos. Costume, couple and pet portraits, seasonal styles and more. Free to start on iPhone and iPad.",
    ogAlt: "CartoonifAI: Who do you want to become?",
    keywords: [
      "cartoon yourself",
      "photo to cartoon",
      "anime photo AI",
      "3D cartoon avatar",
      "comic portrait",
      "AI selfie art",
      "cartoon profile picture",
      "animate photo",
    ],
    appDescription: "Turn your selfie into anime, 3D and comic art in seconds, then animate it into a 5-second video.",
  },
  nav: {
    label: "Main",
    home: "CartoonifAI home",
    styles: "Styles",
    animate: "Animate it",
    duo: "2-Photo",
    seasons: "Seasons",
    plus: "Plus",
    faq: "FAQ",
  },
  appStore: {
    getApp: "Get the app",
    downloadOn: "Download on the",
    appStore: "App Store",
    download: "Download on the App Store",
  },
  hero: {
    newBadge: "NEW",
    news: "Animate it, 2-photo styles and Halloween",
    titleStart: "Who do you want to ",
    titleHighlight: "become?",
    lead: "CartoonifAI redraws your selfie in hand-picked styles like Anime Glow, 3D Dream and Comic Hero. Then it brings your portrait to life as a 5-second video.",
    seeStyles: "See the styles",
    perks: ["Free Sparkles to start", "iPhone and iPad", "6 languages"],
    videoLabel: "A short tour of the CartoonifAI app",
    before: "Before",
    animateChip: "Animate it · 5s",
  },
  styles: {
    eyebrow: "Styles",
    heading: "One selfie. Every style.",
    lead: "Pick a look and drag across the photo to compare. New styles are added regularly.",
    chooseLabel: "Choose a style",
    descriptions: {
      "anime-glow": "Soft light, expressive eyes and cinematic color.",
      "3d-dream": "A charming 3D animated character with studio polish.",
      "comic-hero": "Bold ink lines and comic book shading.",
      storybook: "A warm, hand-painted illustration look.",
      "pop-toon": "Bright, playful shapes with an unforgettable smile.",
    },
    /** `{style}` is replaced with the style's name. */
    styledAlt: "The same photo in the {style} style",
    original: "Original",
    originalAlt: "The original photo",
    sliderLabel: "Drag to compare the original photo and the cartoon",
    dragHint: "Drag across the photo to compare",
    price: "From 10 Sparkles a look",
  },
  animate: {
    eyebrow: "Animate it",
    heading: "Now your cartoon moves.",
    lead: "Turn any creation into a 5-second video. Pick an effect, from a gentle smile to a spooky Halloween zoom, then save it or share it anywhere.",
    effects: ["Gentle smile", "Spooky zoom", "More effects every season"],
    lengthValue: "5s",
    lengthLabel: "video, ready to share",
    costLabel: "Sparkles per animation",
    screenAlt: "A finished 3D Dream portrait with the Animate it button",
  },
  duo: {
    eyebrow: "2-photo styles",
    heading: "Two photos, one portrait.",
    lead: "Each one comes out as a cartoon or for real. Your call.",
    costume: { title: "Costume", text: "Add a costume photo and see yourself wearing it." },
    couple: { title: "Couple", text: "Two photos become one portrait of you together." },
    pet: { title: "Me & My Pet", text: "You and your pet, together as co-stars." },
    finish: "Cartoon or Realistic",
  },
  seasons: {
    badge: "Limited time",
    heading: "Halloween is here.",
    lead: "Vampire, Witch, Cute Zombie, Day of the Dead and more. Spooky-cute looks that disappear when the season ends.",
    calendar: [
      { name: "Halloween", when: "Now" },
      { name: "Christmas", when: "December" },
      { name: "Valentine's", when: "February" },
      { name: "And more, all year", when: "Every season" },
    ],
    screenAlt: "The Halloween collection in the app",
  },
  howItWorks: {
    heading: "Three taps. That's it.",
    steps: [
      { title: "Pick a style", text: "Browse the studio by mood: anime, 3D, comic, painterly and seasonal." },
      { title: "Choose a photo", text: "A clear, well-lit portrait from your library, or take one on the spot." },
      { title: "Tap Transform me", text: "Your portrait is ready in seconds. Save it, share it, or animate it." },
    ],
  },
  pricing: {
    eyebrow: "Pricing",
    heading: "Start free. Go Plus when you're hooked.",
    sparklesTitle: "Sparkles",
    sparklesLead: "Pay as you go. Each look and video costs Sparkles.",
    freePerks: [
      "Free Sparkles when you join, so your first looks are on us",
      "A free gift every day",
      "20 free Sparkles for you and each friend you invite",
      "Top up with a Sparkle pack any time",
    ],
    plusLead: "For people who make a lot of looks.",
    plusBadge: "Best value yearly",
    yearlyPrice: "$39.99",
    perYear: "/ year",
    monthlyPrice: "or $4.99 / month",
    plusPerks: [
      "250 Sparkles every 30 days",
      "Members-only styles",
      "+25% bonus Sparkles on every pack",
      "Share without the watermark",
    ],
    note: "US prices shown; your local App Store price may differ. Renews automatically; cancel any time in your App Store settings.",
  },
  faq: {
    heading: "Questions",
    items: [
      {
        question: "How does CartoonifAI work?",
        answer:
          "Pick a style, choose a clear portrait and tap Transform me. The AI redraws your photo in that style in seconds. Then save it, share it, or animate it into a 5-second video.",
      },
      {
        question: "Is it free?",
        answer:
          "The app is free to download, and you get free Sparkles to start plus a free daily gift. Each look or video costs Sparkles. When you run low, grab a Sparkle pack or join CartoonifAI Plus.",
      },
      {
        question: "What happens to my photos?",
        answer:
          "Your photos are used only to create the looks you ask for, and never to train AI models. Uploaded photos are deleted automatically within 1 day as a guest, or 30 days when signed in. You can delete everything at any time in Settings.",
      },
      {
        question: "Which devices are supported?",
        answer: "CartoonifAI is available for iPhone and iPad on the App Store.",
      },
      {
        question: "How do I cancel Plus?",
        answer:
          "Plus renews automatically unless you cancel at least 24 hours before the end of the current period. Manage or cancel it any time in your App Store account settings.",
      },
    ],
  },
  finalCta: {
    heading: "Who will you be today?",
    lead: "Free to download, with free Sparkles to start.",
    iconAlt: "CartoonifAI app icon",
  },
  footer: {
    label: "Footer",
    about: "About",
    contact: "Contact",
    privacy: "Privacy",
    terms: "Terms",
    language: "Language",
  },
}

export default en

type DeepStrings<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? DeepStrings<U>[]
    : { [K in keyof T]: DeepStrings<T[K]> }

/** The shape every language must provide. */
export type Dictionary = DeepStrings<typeof en>
