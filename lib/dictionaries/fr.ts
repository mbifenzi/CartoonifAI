import type { Dictionary } from "./en"

/** French puts a space before ; : ! ? — make it non-breaking so the mark never wraps onto its own line. */
function frenchSpacing<T>(value: T): T {
  if (typeof value === "string") return value.replace(/ ([;:!?])/g, " $1") as T
  if (Array.isArray(value)) return value.map(frenchSpacing) as T
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, frenchSpacing(v)])) as T
  }
  return value
}

const fr: Dictionary = frenchSpacing({
  meta: {
    title: "CartoonifAI : votre selfie en anime, 3D et BD",
    description:
      "Transformez vos photos en anime, en personnage 3D ou en bande dessinée en quelques secondes, puis animez-les en vidéos de 5 secondes. Portraits en costume, en duo ou avec votre animal, styles de saison et plus encore. Gratuit pour commencer sur iPhone et iPad.",
    ogAlt: "CartoonifAI : Qui voulez-vous devenir ?",
    keywords: [
      "selfie en dessin",
      "photo en cartoon",
      "photo en anime IA",
      "avatar 3D",
      "portrait BD",
      "art selfie IA",
      "photo de profil cartoon",
      "animer une photo",
    ],
    appDescription:
      "Transformez votre selfie en anime, en 3D ou en BD en quelques secondes, puis animez-le en vidéo de 5 secondes.",
  },
  nav: {
    label: "Principal",
    home: "Accueil CartoonifAI",
    styles: "Styles",
    animate: "Animer",
    duo: "2 photos",
    seasons: "Saisons",
    plus: "Plus",
    faq: "FAQ",
  },
  appStore: {
    getApp: "Télécharger",
    downloadOn: "Télécharger dans",
    appStore: "l’App Store",
    download: "Télécharger dans l’App Store",
  },
  hero: {
    newBadge: "NOUVEAU",
    news: "Animer, styles à 2 photos et Halloween",
    titleStart: "Qui voulez-vous ",
    titleHighlight: "devenir ?",
    lead: "CartoonifAI redessine votre selfie dans des styles choisis avec soin, comme Anime Glow, 3D Dream et Comic Hero. Puis il donne vie à votre portrait en vidéo de 5 secondes.",
    seeStyles: "Voir les styles",
    perks: ["Étincelles offertes pour commencer", "iPhone et iPad", "6 langues"],
    videoLabel: "Un aperçu de l’app CartoonifAI",
    before: "Avant",
    animateChip: "Animer · 5 s",
  },
  styles: {
    eyebrow: "Styles",
    heading: "Un selfie. Tous les styles.",
    lead: "Choisissez un look et faites glisser sur la photo pour comparer. De nouveaux styles arrivent régulièrement.",
    chooseLabel: "Choisir un style",
    descriptions: {
      "anime-glow": "Lumière douce, regard expressif et couleurs ciné.",
      "3d-dream": "Un personnage 3D plein de charme, avec une finition de studio.",
      "comic-hero": "Traits encrés et ombres façon BD.",
      storybook: "Une illustration chaleureuse, peinte à la main.",
      "pop-toon": "Des formes vives et ludiques, avec un sourire inoubliable.",
    },
    styledAlt: "La même photo dans le style {style}",
    original: "Original",
    originalAlt: "La photo d’origine",
    sliderLabel: "Faites glisser pour comparer la photo d’origine et le cartoon",
    dragHint: "Faites glisser sur la photo pour comparer",
    price: "À partir de 10 étincelles par look",
  },
  animate: {
    eyebrow: "Animer",
    heading: "Votre cartoon prend vie.",
    lead: "Transformez n’importe quelle création en vidéo de 5 secondes. Choisissez un effet, d’un doux sourire à un zoom effrayant d’Halloween, puis enregistrez-la ou partagez-la partout.",
    effects: ["Doux sourire", "Zoom effrayant", "De nouveaux effets à chaque saison"],
    lengthValue: "5 s",
    lengthLabel: "de vidéo, prête à partager",
    costLabel: "étincelles par animation",
    screenAlt: "Un portrait 3D Dream terminé, avec le bouton Animer",
  },
  duo: {
    eyebrow: "Styles à 2 photos",
    heading: "Deux photos, un portrait.",
    lead: "Chacun en cartoon ou en vrai. À vous de choisir.",
    costume: { title: "Costume", text: "Ajoutez la photo d’un costume et voyez-vous dedans." },
    couple: { title: "Duo", text: "Deux photos deviennent un portrait de vous deux." },
    pet: { title: "Moi et mon animal", text: "Vous et votre animal, réunis en vedettes." },
    finish: "Cartoon ou Réaliste",
  },
  seasons: {
    badge: "Durée limitée",
    heading: "Halloween est là.",
    lead: "Vampire, Sorcière, Zombie mignon, Jour des morts et plus encore. Des looks qui font peur (mais pas trop), qui disparaissent à la fin de la saison.",
    calendar: [
      { name: "Halloween", when: "En ce moment" },
      { name: "Noël", when: "Décembre" },
      { name: "Saint-Valentin", when: "Février" },
      { name: "Et d’autres toute l’année", when: "À chaque saison" },
    ],
    screenAlt: "La collection Halloween dans l’app",
  },
  howItWorks: {
    heading: "Trois touches. C’est tout.",
    steps: [
      { title: "Choisissez un style", text: "Parcourez le studio par ambiance : anime, 3D, BD, peinture et saisons." },
      { title: "Choisissez une photo", text: "Un portrait net et bien éclairé de votre photothèque, ou une photo prise sur le moment." },
      { title: "Touchez Me transformer", text: "Votre portrait est prêt en quelques secondes. Enregistrez-le, partagez-le ou animez-le." },
    ],
  },
  pricing: {
    eyebrow: "Tarifs",
    heading: "Commencez gratuitement. Passez à Plus quand vous serez accro.",
    sparklesTitle: "Étincelles",
    sparklesLead: "Payez à l’usage. Chaque look et chaque vidéo coûte des étincelles.",
    freePerks: [
      "Des étincelles offertes à l’inscription : vos premiers looks sont pour nous",
      "Un cadeau gratuit chaque jour",
      "20 étincelles offertes pour vous et chaque ami invité",
      "Rechargez avec un pack d’étincelles quand vous voulez",
    ],
    plusLead: "Pour celles et ceux qui créent beaucoup de looks.",
    plusBadge: "Meilleure offre en annuel",
    yearlyPrice: "39,99 $",
    perYear: "/ an",
    monthlyPrice: "ou 4,99 $ / mois",
    plusPerks: [
      "250 étincelles tous les 30 jours",
      "Des styles réservés aux membres",
      "+25 % d’étincelles bonus sur chaque pack",
      "Partage sans filigrane",
    ],
    note: "Prix américains affichés ; le prix de votre App Store local peut différer. Renouvellement automatique ; résiliez à tout moment dans les réglages de l’App Store.",
  },
  faq: {
    heading: "Questions",
    items: [
      {
        question: "Comment fonctionne CartoonifAI ?",
        answer:
          "Choisissez un style, puis un portrait net, et touchez Me transformer. L’IA redessine votre photo dans ce style en quelques secondes. Ensuite, enregistrez-la, partagez-la ou animez-la en vidéo de 5 secondes.",
      },
      {
        question: "C’est gratuit ?",
        answer:
          "L’app est gratuite à télécharger, avec des étincelles offertes pour commencer et un cadeau gratuit chaque jour. Chaque look ou vidéo coûte des étincelles. Quand il vous en manque, prenez un pack d’étincelles ou rejoignez CartoonifAI Plus.",
      },
      {
        question: "Que deviennent mes photos ?",
        answer:
          "Vos photos servent uniquement à créer les looks que vous demandez, et jamais à entraîner des modèles d’IA. Les photos importées sont supprimées automatiquement sous 1 jour en tant qu’invité, ou sous 30 jours une fois connecté. Vous pouvez tout supprimer à tout moment dans Réglages.",
      },
      {
        question: "Quels appareils sont compatibles ?",
        answer: "CartoonifAI est disponible pour iPhone et iPad sur l’App Store.",
      },
      {
        question: "Comment résilier Plus ?",
        answer:
          "Plus se renouvelle automatiquement sauf résiliation au moins 24 heures avant la fin de la période en cours. Gérez-le ou résiliez-le à tout moment dans les réglages de votre compte App Store.",
      },
    ],
  },
  finalCta: {
    heading: "Qui serez-vous aujourd’hui ?",
    lead: "Gratuit à télécharger, avec des étincelles offertes pour commencer.",
    iconAlt: "Icône de l’app CartoonifAI",
  },
  footer: {
    label: "Pied de page",
    about: "À propos",
    contact: "Contact",
    privacy: "Confidentialité",
    terms: "Conditions",
    language: "Langue",
  },
})

export default fr
