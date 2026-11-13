/**
 * Todo o conteúdo do site. Fonte: docs/content.md.
 * Componentes não têm texto hardcoded — tudo vem daqui.
 * Itens `pending: true` ou comentados com [PENDENTE] aguardam confirmação da cliente (ver README).
 */

// ---------------------------------------------------------------------------
// Tipos
// ---------------------------------------------------------------------------

export type WhatsAppKind = "urgencia" | "avaliacao";

export type ServiceIcon =
  | "siren"
  | "baby"
  | "tooth"
  | "shield-check"
  | "droplets"
  | "moon"
  | "stethoscope"
  | "sparkles"
  | "gem"
  | "crown"
  | "anchor"
  | "braces";

export interface Service {
  name: string;
  description: string;
  icon: ServiceIcon;
}

export interface ServiceGroup {
  id: string;
  title: string;
  services: Service[];
}

export interface Testimonial {
  name: string;
  text: string;
  rating: 5;
}

export interface FaqItem {
  question: string;
  answer: string;
  /** Resposta ainda não confirmada pela cliente */
  pending?: boolean;
}

export interface Step {
  title: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: `#${string}`;
}

export interface Address {
  street: string;
  neighborhood: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface ContactInfo {
  phoneDisplay: string;
  /** Somente dígitos, com DDI — usado em wa.me e tel: */
  phoneE164: string;
  whatsappMessages: Record<WhatsAppKind, string>;
  instagram: string;
  instagramHandle: string;
  mapsUrl: string;
  directionsUrl: string;
  mapsEmbedUrl: string;
  reviewsUrl: string;
  address: Address;
  addressLine: string;
  geo: { lat: number; lng: number };
  plusCode: string;
}

export interface Amenity {
  title: string;
  items: string[];
  pending?: boolean;
}

// ---------------------------------------------------------------------------
// Imagens (originais em assets-originais/, versões WebP em public/images/)
// ---------------------------------------------------------------------------

export interface SiteImage {
  src: string;
  srcSet: string;
  width: number;
  height: number;
  alt: string;
}

export const images = {
  doctor: {
    src: "/images/dra-camila-1080.webp",
    srcSet: "/images/dra-camila-640.webp 640w, /images/dra-camila-1080.webp 1080w",
    width: 1080,
    height: 1080,
    alt: "Dra. Camila Mattje, cirurgiã-dentista, sorrindo, de blazer preto",
  },
  reception: {
    src: "/images/recepcao-1400.webp",
    srcSet: "/images/recepcao-800.webp 800w, /images/recepcao-1400.webp 1400w",
    width: 1400,
    height: 1875,
    alt: "Recepção do consultório, com parede azul e o logo CM da Dra. Camila Mattje",
  },
  logo: {
    src: "/images/logo-128.webp",
    width: 128,
    height: 128,
  },
} as const satisfies Record<string, SiteImage | { src: string; width: number; height: number }>;

// ---------------------------------------------------------------------------
// Flags
// ---------------------------------------------------------------------------

export const features = {
  /** Antes/depois só entra com autorização da paciente [PENDENTE] */
  beforeAfter: false,
  /** Mostrar primeiro nome nos depoimentos só com autorização [PENDENTE] */
  testimonialNames: false,
} as const;

// ---------------------------------------------------------------------------
// Identidade
// ---------------------------------------------------------------------------

export const identity = {
  name: "Dra. Camila Mattje",
  shortName: "Dra. Camila",
  monogram: "CM",
  profession: "Cirurgiã-dentista",
  cro: "CRO-RJ 48.166",
  positioning: "Dentista 24 horas — Clínica Geral e Urgência",
  highlights: ["Atualizada em Endodontia (canal)", "Facetas em resina"],
} as const;

// ---------------------------------------------------------------------------
// Contato
// ---------------------------------------------------------------------------

export const contact: ContactInfo = {
  phoneDisplay: "(24) 99276-0097",
  phoneE164: "5524992760097",
  whatsappMessages: {
    urgencia: "Olá, Dra. Camila! Estou com dor e preciso de atendimento de urgência.",
    avaliacao: "Olá, Dra. Camila! Gostaria de agendar uma avaliação.",
  },
  instagram: "https://www.instagram.com/dra.camilamattje/",
  instagramHandle: "@dra.camilamattje",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Dra.+Camila+Mattje+Barra+Mansa",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Dra.+Camila+Mattje,+R.+Aldrovando+de+Oliveira,+Ano+Bom,+Barra+Mansa+-+RJ",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Dra.+Camila+Mattje,+R.+Aldrovando+de+Oliveira,+Ano+Bom,+Barra+Mansa+-+RJ&z=16&output=embed",
  reviewsUrl: "https://www.google.com/maps/search/?api=1&query=Dra.+Camila+Mattje+Barra+Mansa",
  address: {
    street: "R. Aldrovando de Oliveira, 20",
    neighborhood: "Ano Bom",
    city: "Barra Mansa",
    state: "RJ",
    postalCode: "27323-350",
    country: "BR",
  },
  addressLine: "R. Aldrovando de Oliveira, 20 — Ano Bom, Barra Mansa — RJ, 27323-350",
  geo: { lat: -22.540707, lng: -44.168302 },
  plusCode: "FR5J+PM Ano Bom, Barra Mansa - RJ",
};

/** 24h vale só para urgência (confirmado). [PENDENTE: horário das consultas eletivas] */
export const hours = {
  urgency: "Urgência: 24 horas, todos os dias",
  elective: "Consultas: com hora marcada",
  note: "Recomendado marcar hora",
  pending: true,
} as const;

// ---------------------------------------------------------------------------
// Reputação
// ---------------------------------------------------------------------------

export const reputation = {
  rating: 4.9,
  ratingDisplay: "4,9",
  reviewCount: 75,
  source: "Google",
  label: "avaliações no Google",
  ariaLabel: "Nota 4,9 de 5 com 75 avaliações no Google (abre em nova aba)",
} as const;

// ---------------------------------------------------------------------------
// Navegação e rótulos de interface
// ---------------------------------------------------------------------------

export const nav: NavLink[] = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Localização", href: "#localizacao" },
];

export const ui = {
  skipToContent: "Pular para o conteúdo",
  openMenu: "Abrir menu",
  closeMenu: "Fechar menu",
  menuTitle: "Menu",
  whatsappShort: "WhatsApp",
  whatsappAria: {
    urgencia: "Falar com a Dra. Camila no WhatsApp sobre urgência (abre em nova aba)",
    avaliacao: "Agendar avaliação com a Dra. Camila no WhatsApp (abre em nova aba)",
  } satisfies Record<WhatsAppKind, string>,
  fabAria: "Conversar com a Dra. Camila no WhatsApp (abre em nova aba)",
  externalLink: "(abre em nova aba)",
  homeAria: "Dra. Camila Mattje — início",
  navAria: "Navegação principal",
  footerNavAria: "Links do rodapé",
} as const;

// ---------------------------------------------------------------------------
// Seções
// ---------------------------------------------------------------------------

export const hero = {
  title: "Dor de dente não marca hora. Eu atendo.",
  subtitle:
    "Clínica geral e urgência odontológica 24 horas em Barra Mansa, com o cuidado de quem entende o seu medo.",
  ctaPrimary: "Estou com dor agora",
  ctaSecondary: "Agendar avaliação",
  /** [PENDENTE: foto da doutora em alta] */
  photoAlt: "Dra. Camila Mattje, cirurgiã-dentista, de jaleco branco",
} as const;

export const urgencyBand = {
  items: ["Atendimento 24 horas", "Noites, fins de semana e feriados", "Adulto e infantil"],
  ariaLabel: "Atendimento 24 horas, noites, fins de semana e feriados, adulto e infantil",
} as const;

export const about = {
  title: "Dra. Camila Mattje, dentista em Barra Mansa",
  paragraphs: [
    "Sou a Dra. Camila Mattje, cirurgiã-dentista em Barra Mansa. Atendo clínica geral e urgência odontológica, inclusive à noite e nos fins de semana.",
    "Muita gente chega com medo — de agulha, de dor, de dentista. Por isso o atendimento é no seu tempo: explico cada etapa do tratamento antes de começar e só seguimos quando você estiver tranquilo.",
    "Sigo me atualizando em Endodontia (tratamento de canal) e trabalho com facetas em resina.",
  ],
  highlights: identity.highlights,
  cro: identity.cro,
  /** [PENDENTE: foto da doutora / consultório] */
  photoAlt: "Dra. Camila Mattje no consultório",
} as const;

export const services = {
  title: "Serviços do consultório",
  cta: "Agendar avaliação",
  groups: [
    {
      id: "urgencia",
      title: "Urgência",
      services: [
        {
          name: "Urgência / Emergência 24 horas",
          description:
            "Atendimento para dor e imprevistos a qualquer hora, inclusive noites, fins de semana e feriados.",
          icon: "siren",
        },
        {
          name: "Atendimento adulto e infantil",
          description: "Consultas para adultos e crianças, com calma e atenção a cada idade.",
          icon: "baby",
        },
      ],
    },
    {
      id: "tratamentos",
      title: "Tratamentos",
      services: [
        {
          name: "Canal (Endodontia)",
          description:
            "Tratamento da polpa do dente para tirar a dor causada por inflamação ou infecção.",
          icon: "tooth",
        },
        {
          name: "Restauração",
          description: "Recupera a forma e a função do dente afetado por cárie ou fratura.",
          icon: "shield-check",
        },
        {
          name: "Limpeza",
          description: "Remoção de placa e tártaro para manter dentes e gengiva saudáveis.",
          icon: "droplets",
        },
        {
          name: "Placa de bruxismo",
          description:
            "Placa feita sob medida para proteger os dentes de quem range ou aperta durante o sono.",
          icon: "moon",
        },
        {
          name: "Cirurgia",
          description:
            "Extrações e pequenas cirurgias orais, com avaliação e orientação antes e depois.",
          icon: "stethoscope",
        },
      ],
    },
    {
      id: "estetica",
      title: "Estética",
      services: [
        {
          name: "Clareamento",
          description: "Clareamento em consultório ou caseiro, com acompanhamento profissional.",
          icon: "sparkles",
        },
        {
          name: "Facetas em resina",
          description: "Ajustes de cor e formato dos dentes com resina, planejados em avaliação.",
          icon: "gem",
        },
      ],
    },
    {
      id: "reabilitacao",
      title: "Reabilitação",
      services: [
        {
          name: "Prótese",
          description:
            "Próteses removíveis, bloco e coroa para repor dentes perdidos ou desgastados.",
          icon: "crown",
        },
        {
          name: "Implante",
          description: "Reposição de dentes com implante, indicada após avaliação individual.",
          icon: "anchor",
        },
        {
          name: "Aparelho ortodôntico",
          description: "Aparelho para alinhar os dentes e ajustar a mordida.",
          icon: "braces",
        },
      ],
    },
  ] satisfies ServiceGroup[],
} as const;

/** [PENDENTE: imagem original + autorização da paciente] — controlado por features.beforeAfter */
export const beforeAfter = {
  title: "Resultado de clareamento",
  caption: "Clareamento dental",
  beforeLabel: "Antes",
  afterLabel: "Depois",
  sliderLabel: "Comparar antes e depois do clareamento",
  beforeAlt: "Dentes antes do clareamento",
  afterAlt: "Dentes depois do clareamento",
  /** [PENDENTE: imagens originais] — null mostra placeholder */
  beforeSrc: null as string | null,
  afterSrc: null as string | null,
} as const;

export const testimonials = {
  title: "Avaliações de pacientes no Google",
  anonymousName: "Paciente no Google",
  starsAria: "5 de 5 estrelas",
  /** Quantos depoimentos aparecem (spec: 4–6), na ordem da lista */
  featuredCount: 6,
  /** No celular a lista empilha; mostra só os primeiros (cabe em duas telas) */
  featuredCountMobile: 4,
  allReviews: "Ver todas as avaliações no Google",
  /** [PENDENTE: autorização — usar só primeiro nome] */
  items: [
    {
      name: "Ana Cristina",
      text: "Foi maravilhosa comigo... me atendeu no sábado à noite e tirou minha dor.",
      rating: 5,
    },
    {
      name: "Alana",
      text: "Maravilhosa, super atenciosa. Eu tenho pavor de agulhas, ela foi super calma, no meu tempo, e tem uma mão maravilhosa, nem dá para sentir quando é aplicada a anestesia... Super recomendo!",
      rating: 5,
    },
    {
      name: "Emmanuelle",
      text: "Fiz um canal que não senti nada e levo minha filha lá, que foi tudo maravilhoso. Super indico.",
      rating: 5,
    },
    {
      name: "Thiago",
      text: "Me atendeu de urgência em um período em que a grande maioria está de recesso. Muito bem atendido e sorriso novo no rosto.",
      rating: 5,
    },
    {
      name: "Maria Clara",
      text: "Procurei ela após semanas de crise de bruxismo e em uma consulta foi super atenciosa e já me indicou os tratamentos necessários.",
      rating: 5,
    },
    {
      name: "Radamés",
      text: "A Dra. Camila é extremamente atenciosa, humana e cuidadosa em cada detalhe do atendimento. Sempre preocupada com o bem-estar do paciente, transmite muita confiança e tranquilidade durante os procedimentos. O consultório é confortável, acolhedor e bem estruturado.",
      rating: 5,
    },
    {
      name: "Miguel",
      text: "Dra me atendeu de emergência de noite e resolveu o problema. Boa profissional, rápida e eficaz. Ótimo atendimento.",
      rating: 5,
    },
    {
      name: "Felipe",
      text: "Profissional dedicada, assertiva, educada e transparente com a melhor opção de tratamento. Criança em tratamento confiante com todo carinho da profissional.",
      rating: 5,
    },
    {
      name: "Helena",
      text: "Só agradecer ao carinho e à paciência... profissional maravilhosa! Indico de olhos fechados!",
      rating: 5,
    },
  ] satisfies Testimonial[],
} as const;

export const howItWorks = {
  title: "Como funciona o atendimento",
  steps: [
    {
      title: "Chame no WhatsApp",
      description: "Conte o que está sentindo. Em caso de dor, diga que é urgência.",
    },
    {
      title: "Avaliação",
      description: "Examino, explico o que encontrei e quais são as opções de tratamento.",
    },
    {
      title: "Tratamento no seu tempo",
      description: "Cada etapa é combinada com você, com calma e sem pressa.",
    },
  ] satisfies Step[],
} as const;

export const faq = {
  title: "Perguntas frequentes sobre o consultório",
  items: [
    {
      question: "Vocês atendem de madrugada e fim de semana?",
      answer: "Sim, para urgências o atendimento é 24 horas. Chame no WhatsApp.",
      pending: true, // [confirmar]
    },
    {
      question: "Atende crianças?",
      answer: "Sim, atendimento adulto e infantil.",
    },
    {
      question: "Tenho muito medo de dentista. E agora?",
      answer: "O atendimento é no seu tempo, com calma e explicando cada etapa.",
    },
    {
      question: "Quais as formas de pagamento?",
      answer: "Crédito, débito e aproximação.",
      pending: true, // [confirmar Pix/parcelamento]
    },
    {
      question: "Aceita convênio?",
      answer: "Informação em confirmação. Pergunte pelo WhatsApp.",
      pending: true, // [PENDENTE]
    },
    {
      question: "O consultório tem acessibilidade?",
      answer: "Sim, entrada, assento e banheiro acessíveis para cadeirantes.",
    },
    {
      question: "Tem estacionamento?",
      answer: "Estacionamento pago na rua e nas proximidades.",
    },
  ] satisfies FaqItem[],
} as const;

export const location = {
  title: "Consultório no Ano Bom, Barra Mansa",
  addressTitle: "Endereço",
  hoursTitle: "Horário",
  directions: "Como chegar",
  call: "Ligar",
  callAria: "Ligar para (24) 99276-0097",
  phoneTitle: "Telefone e WhatsApp",
  mapTitle: "Mapa com a localização do consultório da Dra. Camila Mattje",
  amenitiesTitle: "Comodidades",
  amenities: [
    {
      title: "Acessibilidade",
      items: ["Entrada acessível para cadeirantes", "Assento acessível", "Banheiro acessível"],
    },
    {
      title: "Pagamento",
      items: ["Cartão de crédito", "Cartão de débito", "Aproximação (NFC)"],
    },
    {
      title: "Estacionamento",
      items: ["Estacionamento pago na rua"],
    },
  ] satisfies Amenity[],
  /** [PENDENTE] */
  insurance: { title: "Convênios", text: "Em confirmação", pending: true },
} as const;

export const finalCta = {
  title: "Não espere a dor piorar. Fale com a Dra. Camila agora.",
  ctaPrimary: hero.ctaPrimary,
  ctaSecondary: hero.ctaSecondary,
} as const;

export const footer = {
  rights: "Todos os direitos reservados.",
  /** [PENDENTE: crédito de desenvolvimento] */
  credit: "Desenvolvido por Davi Curty",
  instagramAria: "Instagram da Dra. Camila Mattje (abre em nova aba)",
  contactTitle: "Contato",
  addressTitle: "Endereço",
} as const;

// ---------------------------------------------------------------------------
// SEO
// ---------------------------------------------------------------------------

export const seo = {
  title: "Dentista 24 horas em Barra Mansa | Dra. Camila Mattje",
  description:
    "Urgência odontológica 24 horas e clínica geral em Barra Mansa (Ano Bom). Canal, clareamento, facetas e prótese. Fale com a Dra. Camila no WhatsApp.",
} as const;
