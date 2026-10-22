import type { Dictionary } from "./en"

/** Brazilian Portuguese, like the app and the pt-BR App Store listing. */
const pt: Dictionary = {
  meta: {
    title: "CartoonifAI: sua selfie em anime, 3D e quadrinhos",
    description:
      "Transforme suas fotos em anime, personagem 3D ou quadrinhos em segundos e depois anime tudo em vídeos de 5 segundos. Retratos com fantasia, de casal ou com seu pet, estilos de temporada e mais. Grátis para começar no iPhone e iPad.",
    ogAlt: "CartoonifAI: Quem você quer ser hoje?",
    keywords: [
      "foto em desenho",
      "foto em cartoon",
      "foto em anime IA",
      "avatar 3D",
      "retrato em quadrinhos",
      "arte de selfie IA",
      "foto de perfil desenho",
      "animar foto",
    ],
    appDescription:
      "Transforme sua selfie em anime, 3D ou quadrinhos em segundos e depois anime tudo em um vídeo de 5 segundos.",
  },
  nav: {
    label: "Principal",
    home: "Início do CartoonifAI",
    styles: "Estilos",
    animate: "Animar",
    duo: "2 fotos",
    seasons: "Temporadas",
    plus: "Plus",
    faq: "Dúvidas",
  },
  appStore: {
    getApp: "Baixar o app",
    downloadOn: "Baixar na",
    appStore: "App Store",
    download: "Baixar na App Store",
  },
  hero: {
    newBadge: "NOVO",
    news: "Animar, estilos com 2 fotos e Halloween",
    titleStart: "Quem você quer ",
    titleHighlight: "ser hoje?",
    lead: "O CartoonifAI redesenha sua selfie em estilos escolhidos a dedo, como Anime Glow, 3D Dream e Comic Hero. Depois, dá vida ao seu retrato em um vídeo de 5 segundos.",
    seeStyles: "Ver os estilos",
    perks: ["Brilhos grátis para começar", "iPhone e iPad", "6 idiomas"],
    videoLabel: "Um tour rápido pelo app CartoonifAI",
    before: "Antes",
    animateChip: "Animar · 5 s",
  },
  styles: {
    eyebrow: "Estilos",
    heading: "Uma selfie. Todos os estilos.",
    lead: "Escolha um visual e arraste sobre a foto para comparar. Novos estilos chegam com frequência.",
    chooseLabel: "Escolha um estilo",
    descriptions: {
      "anime-glow": "Luz suave, olhar expressivo e cores de cinema.",
      "3d-dream": "Um personagem 3D encantador, com acabamento de estúdio.",
      "comic-hero": "Traços de nanquim e sombras de quadrinhos.",
      storybook: "Uma ilustração aconchegante, pintada à mão.",
      "pop-toon": "Formas vivas e divertidas, com um sorriso inesquecível.",
    },
    styledAlt: "A mesma foto no estilo {style}",
    original: "Original",
    originalAlt: "A foto original",
    sliderLabel: "Arraste para comparar a foto original com o desenho",
    dragHint: "Arraste sobre a foto para comparar",
    price: "A partir de 10 brilhos por visual",
  },
  animate: {
    eyebrow: "Animar",
    heading: "Agora seu desenho se mexe.",
    lead: "Transforme qualquer criação em um vídeo de 5 segundos. Escolha um efeito, de um sorriso suave a um zoom assustador de Halloween, e depois salve ou compartilhe onde quiser.",
    effects: ["Sorriso suave", "Zoom assustador", "Novos efeitos a cada temporada"],
    lengthValue: "5 s",
    lengthLabel: "de vídeo, pronto para compartilhar",
    costLabel: "brilhos por animação",
    screenAlt: "Um retrato 3D Dream pronto, com o botão Animar",
  },
  duo: {
    eyebrow: "Estilos com 2 fotos",
    heading: "Duas fotos, um retrato.",
    lead: "Cada um sai em desenho ou de verdade. Você escolhe.",
    costume: { title: "Fantasia", text: "Adicione a foto de uma fantasia e veja-se com ela." },
    couple: { title: "Casal", text: "Duas fotos viram um retrato de vocês juntos." },
    pet: { title: "Eu e meu pet", text: "Você e seu pet, juntos como estrelas." },
    finish: "Desenho ou Realista",
  },
  seasons: {
    badge: "Tempo limitado",
    heading: "O Halloween chegou.",
    lead: "Vampiro, Bruxa, Zumbi fofo, Dia dos Mortos e mais. Visuais assustadoramente fofos que somem quando a temporada acaba.",
    calendar: [
      { name: "Halloween", when: "Agora" },
      { name: "Natal", when: "Dezembro" },
      { name: "Dia dos Namorados", when: "Fevereiro" },
      { name: "E mais, o ano todo", when: "Toda temporada" },
    ],
    screenAlt: "A coleção de Halloween no app",
  },
  howItWorks: {
    heading: "Três toques. Só isso.",
    steps: [
      { title: "Escolha um estilo", text: "Navegue pelo estúdio por clima: anime, 3D, quadrinhos, pintura e temporadas." },
      { title: "Escolha uma foto", text: "Um retrato nítido e bem iluminado da sua fototeca, ou tire um na hora." },
      { title: "Toque em Me transformar", text: "Seu retrato fica pronto em segundos. Salve, compartilhe ou anime." },
    ],
  },
  pricing: {
    eyebrow: "Preços",
    heading: "Comece grátis. Assine o Plus quando se apaixonar.",
    sparklesTitle: "Brilhos",
    sparklesLead: "Pague conforme usar. Cada visual e cada vídeo custa brilhos.",
    freePerks: [
      "Brilhos grátis ao entrar: os primeiros visuais são por nossa conta",
      "Um presente grátis todo dia",
      "20 brilhos grátis para você e cada amigo que convidar",
      "Recarregue com um pacote de brilhos quando quiser",
    ],
    plusLead: "Para quem cria muitos visuais.",
    plusBadge: "Melhor no plano anual",
    yearlyPrice: "US$ 39,99",
    perYear: "/ ano",
    monthlyPrice: "ou US$ 4,99 / mês",
    plusPerks: [
      "250 brilhos a cada 30 dias",
      "Estilos exclusivos para membros",
      "+25% de brilhos bônus em cada pacote",
      "Compartilhe sem marca d’água",
    ],
    note: "Preços dos EUA; o preço na sua App Store local pode ser diferente. Renovação automática; cancele quando quiser nos ajustes da App Store.",
  },
  faq: {
    heading: "Dúvidas",
    items: [
      {
        question: "Como o CartoonifAI funciona?",
        answer:
          "Escolha um estilo, escolha um retrato nítido e toque em Me transformar. A IA redesenha sua foto nesse estilo em segundos. Depois, salve, compartilhe ou anime em um vídeo de 5 segundos.",
      },
      {
        question: "É grátis?",
        answer:
          "O app é grátis para baixar, e você ganha brilhos grátis para começar, além de um presente grátis todo dia. Cada visual ou vídeo custa brilhos. Quando estiverem acabando, pegue um pacote de brilhos ou assine o CartoonifAI Plus.",
      },
      {
        question: "O que acontece com as minhas fotos?",
        answer:
          "Suas fotos são usadas apenas para criar os visuais que você pede, e nunca para treinar modelos de IA. As fotos enviadas são apagadas automaticamente em até 1 dia como convidado, ou em até 30 dias com login. Você pode apagar tudo a qualquer momento em Ajustes.",
      },
      {
        question: "Quais aparelhos são compatíveis?",
        answer: "O CartoonifAI está disponível para iPhone e iPad na App Store.",
      },
      {
        question: "Como cancelo o Plus?",
        answer:
          "O Plus é renovado automaticamente, a menos que seja cancelado pelo menos 24 horas antes do fim do período atual. Gerencie ou cancele quando quiser nos ajustes da sua conta da App Store.",
      },
    ],
  },
  finalCta: {
    heading: "Qual vai ser seu visual hoje?",
    lead: "Grátis para baixar, com brilhos grátis para começar.",
    iconAlt: "Ícone do app CartoonifAI",
  },
  footer: {
    label: "Rodapé",
    about: "Sobre",
    contact: "Contato",
    privacy: "Privacidade",
    terms: "Termos",
    language: "Idioma",
  },
}

export default pt
