import type { Lang } from "./i18n";
import { BRAND_AR, BRAND_LATIN, MIN_PRICE, PHONE_DISPLAY, type Servings, type VariantId } from "./business";

type Step = { title: string; text: string };
type Occasion = { title: string; text: string };
type Faq = { q: string; a: string };
type Claim = { title: string; note: string };

export type Content = {
  brand: string;
  brandSub: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  ogAlt: string;
  skipToContent: string;
  nav: { href: string; label: string }[];
  langSwitch: { label: string; toAr: string; toFr: string };
  cta: {
    order: string;
    orderShort: string;
    seePrices: string;
    startOrder: string;
    call: string;
    callShort: string;
  };
  hero: {
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    lede: string;
    fromPrice: string;
    badgeLabel: string;
    badgeNote: string;
    points: string[];
    responseNote: string;
  };
  claims: Claim[];
  products: {
    eyebrow: string;
    title: string;
    intro: string;
    swipeHint: string;
    servingsLegend: string;
    perPerson: (servings: number, unit: number) => string;
    orderAria: (name: string, servings: number) => string;
    items: Record<VariantId, { name: string; tag: string; description: string; alt: string; altDetail: string }>;
  };
  preview: {
    eyebrow: string;
    title: string;
    text: string;
    bubbleName: string;
    message: (name: string, servings: number, price: number) => string;
    hint: string;
  };
  prices: {
    eyebrow: string;
    title: string;
    intro: string;
    colFormat: string;
    colPoulet: string;
    colPoisson: string;
    people: string;
    caption: string;
    note: string;
    cellAria: (price: number, name: string, servings: number) => string;
  };
  detailBand: { label: string };
  occasions: {
    eyebrow: string;
    title: string;
    text: string;
    imageAlt: string;
    insetAlt: string;
    items: Occasion[];
  };
  how: { eyebrow: string; title: string; steps: Step[] };
  faq: { eyebrow: string; title: string; items: Faq[]; more: string; moreLink: string; moreEnd: string };
  finalCta: { title: string; text: string; orCall: string };
  footer: {
    about: string;
    siteHeading: string;
    orderHeading: string;
    callLabel: string;
    delivery: string;
    rights: string;
    madeIn: string;
  };
  sticky: { title: string; note: string };
  waMessages: {
    generic: string;
    order: (name: string, servings: number, price: number) => string;
  };
};

const ar: Content = {
  brand: BRAND_AR,
  brandSub: "القنيطرة",
  metaTitle: "بسطيلة القنيطرة | بسطيلة مغربية معمولة في الدار — الطلب عبر واتساب",
  metaDescription: `بسطيلة مغربية أصيلة معمولة في الدار بالقنيطرة: بالدجاج أو بالسمك، من 4 إلى 12 شخص، ابتداءً من ${MIN_PRICE} درهم. اطلب في نقرة واحدة عبر واتساب. التوصيل متوفر بالقنيطرة.`,
  keywords: [
    "بسطيلة القنيطرة",
    "بسطيلة مغربية",
    "بسطيلة بالدجاج",
    "بسطيلة بالسمك",
    "بسطيلة معمولة في الدار",
    "طلب بسطيلة القنيطرة",
    "بسطيلة للأعراس",
    "بسطيلة رمضان",
    "توصيل بسطيلة القنيطرة",
    "pastilla Kénitra",
  ],
  ogAlt: "بسطيلة مغربية معمولة في الدار بالقنيطرة — بالدجاج وبالسمك",
  skipToContent: "انتقل إلى المحتوى",
  nav: [
    { href: "#bastilas", label: "بسطيلاتنا" },
    { href: "#tarifs", label: "الأثمنة" },
    { href: "#commander", label: "طريقة الطلب" },
    { href: "#faq", label: "أسئلة" },
  ],
  langSwitch: { label: "اللغة", toAr: "العربية", toFr: "Français" },
  cta: {
    order: "اطلب عبر واتساب",
    orderShort: "اطلب الآن",
    seePrices: "شوف الأثمنة",
    startOrder: "ابدأ طلبك الآن",
    call: `أو اتصل بنا: ${PHONE_DISPLAY}`,
    callShort: "اتصال",
  },
  hero: {
    eyebrow: "بسطيلة أصيلة · القنيطرة",
    titleLead: "بسطيلة مغربية أصيلة،",
    titleAccent: "معمولة في الدار بالقنيطرة.",
    lede: "ورقة رقيقة ومقرمشة، حشوة سخية، وطعم البسطيلة التي تعرفها. بالدجاج أو بالسمك، من 4 إلى 12 شخص.",
    fromPrice: "ابتداءً من",
    badgeLabel: "ابتداءً من",
    badgeNote: "بسطيلة لـ 4 أشخاص",
    points: ["معمولة في الدار", "مكونات طبيعية", "التوصيل بالقنيطرة"],
    responseNote: "نحضّرها يوم طلبك — تواصل معنا على واتساب وسنجيبك مباشرة.",
  },
  claims: [
    { title: "جودة عالية", note: "Qualité supérieure" },
    { title: "مكونات طبيعية", note: "Ingrédients naturels" },
    { title: "بنة لا تقاوم", note: "Un goût irrésistible" },
  ],
  products: {
    eyebrow: "نوعان · خمسة أحجام",
    title: "بسطيلاتنا",
    intro: "كل بسطيلة تُحضَّر وتُخبز عند الطلب. اختر النوع وعدد الأشخاص: الثمن يظهر لك مباشرة، ورسالة واتساب تكون جاهزة.",
    swipeHint: "مرّري لتكتشفي الوصفة الأخرى",
    servingsLegend: "لكم شخص؟",
    perPerson: (servings, unit) => `${servings} أشخاص · حوالي ${unit} درهم للشخص`,
    orderAria: (name, servings) => `اطلب عبر واتساب — ${name} لـ ${servings} أشخاص`,
    items: {
      poulet: {
        name: "بسطيلة بالدجاج",
        tag: "الكلاسيكية",
        description:
          "البسطيلة التي ينتظرها الجميع على المائدة: ورقة رقيقة ومقرمشة، حشوة دجاج محضّرة في الدار، وتلك اللمسة الحلوة المالحة التي تميّز البسطيلة المغربية.",
        alt: "بسطيلة بالدجاج معمولة في الدار: أوراق ذهبية، سكر ناعم، لوز مقشور وبريوات بالسمسم",
        altDetail: "قلب البسطيلة بالدجاج عن قرب: بريوات بالسمسم ولوز مقشور",
      },
      poisson: {
        name: "بسطيلة بالسمك",
        tag: "السخية",
        description:
          "النسخة البحرية، أغنى وأكثر نكهة. حشوة بالسمك وفواكه البحر، مقدّمة بسخاء، للموائد التي تستحق الأفضل.",
        alt: "بسطيلة بالسمك وفواكه البحر في صينية، مزيّنة بالجمبري وشرائح الليمون",
        altDetail: "حشوة بسطيلة السمك عن قرب: جمبري وجبن وشرائح ليمون",
      },
    },
  },
  preview: {
    eyebrow: "الطلب في نقرة واحدة",
    title: "لا تحتاج لملء أي استمارة",
    text: "عند الضغط على الزر يفتح لك واتساب برسالة مكتوبة مسبقًا. تبقى فقط ترسلها.",
    bubbleName: "بسطيلة القنيطرة",
    message: (name, servings, price) =>
      `السلام عليكم 👋 بغيت نطلب ${name} لـ ${servings} أشخاص (${price} درهم). واش متوفرة؟`,
    hint: "يمكنك تعديل الرسالة قبل إرسالها، طبعًا.",
  },
  prices: {
    eyebrow: "أثمنة واضحة، بدون مفاجآت",
    title: "الأثمنة، من 4 إلى 12 شخص",
    intro: "اضغط على أي ثمن ليفتح لك واتساب برسالة جاهزة.",
    colFormat: "الحجم",
    colPoulet: "دجاج",
    colPoisson: "سمك",
    people: "أشخاص",
    caption: "أثمنة بسطيلة القنيطرة بالدرهم حسب النوع وعدد الأشخاص",
    note: "الأثمنة بالدرهم المغربي. البسطيلة تُحضَّر عند الطلب — يُفضَّل الحجز مسبقًا للمناسبات.",
    cellAria: (price, name, servings) => `${price} درهم — اطلب ${name} لـ ${servings} أشخاص عبر واتساب`,
  },
  detailBand: { label: "لقطات قريبة على البسطيلة بالدجاج والبسطيلة بالسمك" },
  occasions: {
    eyebrow: "لكل موائدكم",
    title: "بسطيلة المناسبات الكبيرة",
    text: "البسطيلة هي الطبق الذي يوضع في وسط المائدة فيصمت الجميع. أحجامنا تصل إلى 12 شخصًا — ويمكن طلب أكثر من واحدة.",
    imageAlt: "بسطيلة بالسمك مقدَّمة في صينية كبيرة، جاهزة للمائدة",
    insetAlt: "لقطة قريبة على قلب بسطيلة الدجاج باللوز والبريوات",
    items: [
      { title: "غداء العائلة", text: "الطبق الذي يرضي الجميع، من الصغير إلى الكبير." },
      { title: "ضيوف في الدار", text: "عندك ضيوف؟ بسطيلة ذهبية في وسط المائدة وكل شيء يتغيّر." },
      { title: "أعراس وحفلات", text: "للموائد الكبيرة، حتى 12 شخصًا في البسطيلة الواحدة." },
      { title: "رمضان", text: "بسطيلة سخية تُقسم عند الإفطار." },
      { title: "اجتماعات والعمل", text: "غداء يخرج عن المألوف، جاهز للمشاركة." },
      { title: "مناسبات خاصة", text: "أعياد ميلاد، أخبار سعيدة… تُحتفَل ببسطيلة حقيقية." },
    ],
  },
  how: {
    eyebrow: "أربع خطوات · دقيقتان",
    title: "طريقة الطلب",
    steps: [
      { title: "اختر بسطيلتك", text: "بالدجاج أو بالسمك، وعدد الأشخاص من 4 إلى 12." },
      { title: "افتح واتساب", text: "نقرة واحدة والرسالة تنطلق بالنوع والحجم المحدَّدين." },
      { title: "أكّد التاريخ", text: "نتفق معك على اليوم والساعة ومكان التسليم بالقنيطرة." },
      { title: "استمتع", text: "بسطيلتك تُحضَّر عند الطلب وتصلك ذهبية، جاهزة للتقديم." },
    ],
  },
  faq: {
    eyebrow: "عندك سؤال؟",
    title: "أسئلة متكررة",
    more: "سؤال آخر؟ ",
    moreLink: "راسلنا على واتساب",
    moreEnd: "، ونجيبك مباشرة.",
    items: [
      {
        q: "كيف أطلب؟",
        a: "كل شيء يتم عبر واتساب. اختر البسطيلة (دجاج أو سمك) وعدد الأشخاص، ثم اضغط على زر «اطلب عبر واتساب»: الرسالة تكون مكتوبة مسبقًا. تبقى فقط ترسلها ونتفق معك على التفاصيل.",
      },
      {
        q: "ما هي الأثمنة؟",
        a: "بسطيلة الدجاج من 250 درهم (4 أشخاص) إلى 700 درهم (12 شخصًا). بسطيلة السمك من 350 درهم (4 أشخاص) إلى 1000 درهم (12 شخصًا). كل الأثمنة معروضة في هذه الصفحة، بدون أي زيادة خفية.",
      },
      {
        q: "أي حجم أختار؟",
        a: "البسطيلة متوفرة لـ 4 أو 6 أو 8 أو 10 أو 12 شخصًا. إذا ترددت بين حجمين، خذ الأكبر: البسطيلة تُقسم دائمًا بسهولة. راسلنا على واتساب ونساعدك في الاختيار.",
      },
      {
        q: "هل هي فعلاً معمولة في الدار؟",
        a: "نعم. كل بسطيلة تُحضَّر في الدار عند الطلب، بمكونات طبيعية. لا شيء يُحضَّر مسبقًا ولا بطريقة صناعية.",
      },
      {
        q: "هل توصّلون في القنيطرة؟",
        a: "نعم، التوصيل متوفر بالقنيطرة. أخبرنا بحيّك على واتساب ونتفق معك على المكان والساعة.",
      },
      {
        q: "كم من الوقت قبل الموعد يجب أن أطلب؟",
        a: "بما أن البسطيلة تُحضَّر عند الطلب، يُفضَّل الطلب مسبقًا، خاصة في عطل نهاية الأسبوع والأعياد والموائد الكبيرة. راسلنا على واتساب ونؤكد لك المدة حسب التاريخ المطلوب.",
      },
      {
        q: "كيف يتم الأداء؟",
        a: "نتفق معك على طريقة الأداء مباشرة عند تأكيد الطلب على واتساب.",
      },
      {
        q: "هل يمكن الطلب لعرس أو مناسبة كبيرة؟",
        a: "بالتأكيد. لعدة بسطيلات أو لحفل كبير، راسلنا على واتساب مع التاريخ وعدد المدعوين وننظّم الطلب معك.",
      },
    ],
  },
  finalCta: {
    title: "تشتهي بسطيلة مغربية أصيلة؟",
    text: `قل لنا النوع وعدد الأشخاص والتاريخ، ونتكفّل بالباقي — ابتداءً من ${MIN_PRICE} درهم.`,
    orCall: "أو اتصل بنا على",
  },
  footer: {
    about: "بسطيلة مغربية معمولة في الدار بالقنيطرة. بالدجاج أو بالسمك، من 4 إلى 12 شخص، تُحضَّر عند الطلب.",
    siteHeading: "الموقع",
    orderHeading: "الطلب",
    callLabel: "اتصل بنا على",
    delivery: "التوصيل متوفر بالقنيطرة",
    rights: "جميع الحقوق محفوظة.",
    madeIn: "معمولة في الدار بالقنيطرة، المغرب.",
  },
  sticky: { title: "بسطيلة معمولة في الدار", note: `ابتداءً من ${MIN_PRICE} درهم · القنيطرة` },
  waMessages: {
    generic: "السلام عليكم 👋 بغيت نطلب بسطيلة. ممكن تخبروني بالتوفر؟",
    order: (name, servings, price) =>
      `السلام عليكم 👋 بغيت نطلب ${name} لـ ${servings} أشخاص (${price} درهم). واش متوفرة؟`,
  },
};

const fr: Content = {
  brand: BRAND_LATIN,
  brandSub: "Kénitra",
  metaTitle: "Bastila Kénitra | Bastila marocaine faite maison — Commande WhatsApp",
  metaDescription: `Bastila marocaine faite maison à Kénitra : au poulet ou au poisson, de 4 à 12 personnes, à partir de ${MIN_PRICE} dh. Commandez en un clic sur WhatsApp. Livraison disponible à Kénitra.`,
  keywords: [
    "bastila Kénitra",
    "pastilla Kénitra",
    "bastila marocaine",
    "pastilla maison",
    "bastila poulet",
    "bastila poisson",
    "commander bastila Kénitra",
    "pastilla mariage Kénitra",
    "bastila Ramadan",
    "livraison bastila Kénitra",
  ],
  ogAlt: "Bastila marocaine faite maison à Kénitra — poulet et poisson",
  skipToContent: "Aller au contenu",
  nav: [
    { href: "#bastilas", label: "Nos bastilas" },
    { href: "#tarifs", label: "Tarifs" },
    { href: "#commander", label: "Commander" },
    { href: "#faq", label: "Questions" },
  ],
  langSwitch: { label: "Langue", toAr: "العربية", toFr: "Français" },
  cta: {
    order: "Commander sur WhatsApp",
    orderShort: "Commander",
    seePrices: "Voir les tarifs",
    startOrder: "Commencer ma commande",
    call: `ou appelez le ${PHONE_DISPLAY}`,
    callShort: "Appeler",
  },
  hero: {
    eyebrow: "Bastilas authentiques · Kénitra",
    titleLead: "La vraie bastila marocaine,",
    titleAccent: "faite maison à Kénitra.",
    lede: "Une feuille fine et croustillante, une garniture généreuse, le goût de la bastila que vous connaissez. Au poulet ou au poisson, de 4 à 12 personnes.",
    fromPrice: "à partir de",
    badgeLabel: "À partir de",
    badgeNote: "Bastila 4 personnes",
    points: ["Faite maison", "Ingrédients naturels", "Livraison à Kénitra"],
    responseNote: "Préparée le jour de votre commande — écrivez-nous sur WhatsApp, on vous répond directement.",
  },
  claims: [
    { title: "Qualité supérieure", note: "جودة عالية" },
    { title: "Ingrédients naturels", note: "مكونات طبيعية" },
    { title: "Un goût irrésistible", note: "بنة لا تقاوم" },
  ],
  products: {
    eyebrow: "Deux recettes · cinq formats",
    title: "Nos bastilas",
    intro: "Chaque bastila est montée et dorée à la commande. Choisissez la recette et le nombre de convives : le prix s'affiche, et votre message WhatsApp est déjà prêt.",
    swipeHint: "Faites glisser pour voir l'autre recette",
    servingsLegend: "Pour combien de personnes ?",
    perPerson: (servings, unit) => `${servings} personnes · environ ${unit} dh par personne`,
    orderAria: (name, servings) => `Commander sur WhatsApp — ${name}, ${servings} personnes`,
    items: {
      poulet: {
        name: "Bastila au poulet",
        tag: "La classique",
        description:
          "La bastila que tout le monde attend à table : des feuilles fines et croustillantes, une garniture au poulet préparée à la maison, et cette touche sucrée-salée qui fait la vraie bastila marocaine.",
        alt: "Bastila au poulet faite maison : feuilles dorées, sucre glace, amandes effilées et briouates au sésame",
        altDetail: "Gros plan sur le cœur de la bastila au poulet : briouates au sésame et amandes effilées",
      },
      poisson: {
        name: "Bastila au poisson",
        tag: "La généreuse",
        description:
          "La version marine, plus riche et plus parfumée. Une garniture au poisson et fruits de mer, généreusement dressée, pour les tables qui veulent marquer le coup.",
        alt: "Bastila au poisson et fruits de mer sur son plateau, garnie de crevettes et de rondelles de citron",
        altDetail: "Gros plan sur la garniture de la bastila au poisson : crevettes, fromage et citron",
      },
    },
  },
  preview: {
    eyebrow: "La commande en un clic",
    title: "Aucun formulaire à remplir",
    text: "Un clic sur le bouton ouvre WhatsApp avec le message déjà écrit. Il ne reste plus qu'à l'envoyer.",
    bubbleName: "Bastila Kénitra",
    message: (name, servings, price) =>
      `Bonjour 👋 Je souhaite commander une ${name.toLowerCase()} pour ${servings} personnes (${price} dh). Est-ce disponible ?`,
    hint: "Vous pouvez évidemment modifier le message avant de l'envoyer.",
  },
  prices: {
    eyebrow: "Des prix clairs, sans surprise",
    title: "Nos prix, de 4 à 12 personnes",
    intro: "Touchez un prix pour ouvrir WhatsApp avec la commande déjà écrite.",
    colFormat: "Format",
    colPoulet: "Poulet",
    colPoisson: "Poisson",
    people: "pers.",
    caption: "Tarifs des bastilas Bastila Kénitra en dirhams, selon la recette et le nombre de personnes",
    note: "Prix en dirhams (MAD). Bastilas préparées sur commande — pensez à réserver à l'avance pour les grandes occasions.",
    cellAria: (price, name, servings) =>
      `${price} dh — commander la ${name.toLowerCase()} pour ${servings} personnes sur WhatsApp`,
  },
  detailBand: { label: "Gros plans sur la bastila au poulet et la bastila au poisson" },
  occasions: {
    eyebrow: "Pour toutes vos tablées",
    title: "La bastila des grandes occasions",
    text: "Une bastila, c'est le plat qu'on pose au centre de la table et qui fait taire les conversations. Nos formats vont jusqu'à 12 personnes — et rien n'empêche d'en commander plusieurs.",
    imageAlt: "Bastila au poisson dressée sur un grand plateau, prête pour la table",
    insetAlt: "Gros plan sur le cœur de la bastila au poulet, amandes et briouates",
    items: [
      { title: "Repas de famille", text: "Le plat qui met tout le monde d'accord, du plus petit au plus grand." },
      { title: "Invités à la maison", text: "Vous recevez ? Une bastila dorée au centre de la table, et le ton est donné." },
      { title: "Fêtes & mariages", text: "Pour les grandes tablées, jusqu'à 12 personnes par bastila." },
      { title: "Ramadan", text: "Une bastila généreuse à partager au moment de rompre le jeûne." },
      { title: "Réunions & bureau", text: "Un déjeuner qui change de l'ordinaire, prêt à partager." },
      { title: "Occasions spéciales", text: "Anniversaires, bonnes nouvelles : ça se fête avec une vraie bastila." },
    ],
  },
  how: {
    eyebrow: "Quatre étapes · deux minutes",
    title: "Comment commander",
    steps: [
      { title: "Choisissez votre bastila", text: "Poulet ou poisson, et le nombre de personnes, de 4 à 12." },
      { title: "Ouvrez WhatsApp", text: "Un clic : le message part avec la recette et le format déjà indiqués." },
      { title: "Confirmez la date", text: "Nous convenons ensemble du jour, de l'heure et du lieu de remise à Kénitra." },
      { title: "Dégustez", text: "Votre bastila est préparée à la commande et vous arrive dorée, prête à servir." },
    ],
  },
  faq: {
    eyebrow: "Vous hésitez ?",
    title: "Questions fréquentes",
    more: "Une autre question ? ",
    moreLink: "Écrivez-nous sur WhatsApp",
    moreEnd: ", nous répondons directement.",
    items: [
      {
        q: "Comment passer commande ?",
        a: "Tout se fait sur WhatsApp. Choisissez votre bastila (poulet ou poisson) et le nombre de personnes, puis cliquez sur un bouton « Commander sur WhatsApp » : le message est déjà pré-rempli. Il ne reste qu'à l'envoyer et à convenir des détails avec nous.",
      },
      {
        q: "Quels sont les prix ?",
        a: "La bastila au poulet va de 250 dh (4 personnes) à 700 dh (12 personnes). La bastila au poisson va de 350 dh (4 personnes) à 1000 dh (12 personnes). Tous les tarifs sont affichés sur cette page, sans supplément caché.",
      },
      {
        q: "Quelle taille choisir ?",
        a: "Les bastilas sont proposées pour 4, 6, 8, 10 ou 12 personnes. En cas d'hésitation entre deux formats, prenez le plus grand : une bastila se partage toujours très bien. Écrivez-nous sur WhatsApp, nous vous aidons à choisir.",
      },
      {
        q: "Est-ce vraiment fait maison ?",
        a: "Oui. Chaque bastila est préparée à la maison, à la commande, avec des ingrédients naturels. Rien n'est produit à l'avance ni industriellement.",
      },
      {
        q: "Livrez-vous à Kénitra ?",
        a: "Oui, la livraison est disponible à Kénitra. Indiquez-nous votre quartier sur WhatsApp et nous convenons ensemble du lieu et de l'heure de remise.",
      },
      {
        q: "Combien de temps à l'avance faut-il commander ?",
        a: "Les bastilas étant préparées sur commande, il vaut mieux s'y prendre à l'avance, surtout pour les week-ends, les fêtes et les grandes tablées. Envoyez-nous un message sur WhatsApp : nous vous confirmons le délai selon la date souhaitée.",
      },
      {
        q: "Comment se passe le paiement ?",
        a: "Les modalités de paiement sont convenues directement avec vous lors de la confirmation de la commande sur WhatsApp.",
      },
      {
        q: "Puis-je commander pour un mariage ou une grande occasion ?",
        a: "Bien sûr. Pour plusieurs bastilas ou une grande réception, écrivez-nous sur WhatsApp en précisant la date et le nombre d'invités : nous organisons la commande avec vous.",
      },
    ],
  },
  finalCta: {
    title: "Envie d'une vraie bastila marocaine ?",
    text: `Dites-nous la recette, le nombre de personnes et la date. On s'occupe du reste — à partir de ${MIN_PRICE} dh.`,
    orCall: "ou appelez le",
  },
  footer: {
    about: "Bastilas marocaines faites maison à Kénitra. Poulet ou poisson, de 4 à 12 personnes, préparées à la commande.",
    siteHeading: "Le site",
    orderHeading: "Commander",
    callLabel: "Appeler le",
    delivery: "Livraison disponible à Kénitra",
    rights: "Tous droits réservés.",
    madeIn: "Fait maison à Kénitra, Maroc.",
  },
  sticky: { title: "Bastila faite maison", note: `Dès ${MIN_PRICE} dh · Kénitra` },
  waMessages: {
    generic: "Bonjour 👋 Je souhaite commander une bastila. Pouvez-vous m'indiquer les disponibilités ?",
    order: (name, servings, price) =>
      `Bonjour 👋 Je souhaite commander une ${name.toLowerCase()} pour ${servings} personnes (${price} dh). Est-ce disponible ?`,
  },
};

const CONTENT: Record<Lang, Content> = { ar, fr };

export function getContent(lang: Lang): Content {
  return CONTENT[lang];
}

export type { Servings };
