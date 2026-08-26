export const site = {
  name: "Little Britain Daycare",
  shortName: "Little Britain",
  tagline: "Where playtime meets education",
  url: "https://littlebritaindaycare.com",
  description:
    "A warm, English-medium daycare in Tashkent for children aged 2–6. Montessori play-based learning, native English teachers, and freshly cooked meals.",
  phone: "+998 99 049 40 37",
  phoneHref: "tel:+998990494037",
  telegramHref: "https://t.me/+998990494037",
  email: "worldlinklbd@gmail.com",
  address: "Shota Rustaveli 13A, Tashkent",
  addressMapQuery: "Shota+Rustaveli+13A+Tashkent",
  instagram: "@littlebritain.uzb",
  instagramHref: "https://instagram.com/littlebritain.uzb",
  hours: "Mon – Fri · 8:00 AM – 6:00 PM",
  sisterBrand: {
    name: "WorldLink Academy",
    href: "https://worldlinkacademy.org/",
  },
} as const;

export const nav = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/pricing", label: "Pricing" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export const trustBadges = [
  "Native English teachers",
  "Montessori approach",
  "Hot meals included",
] as const;

export const activities = [
  {
    title: "Art & pottery",
    description:
      "Hands-on creativity every day — painting, beads, clay, and crafts that turn ideas into little masterpieces.",
    color: "red",
  },
  {
    title: "Move & play",
    description:
      "Taekwondo, yoga, football, and indoor games keep bodies strong and energy happily busy.",
    color: "sun",
  },
  {
    title: "Stories & cinema",
    description:
      "Reading corners, circle time, and cosy cinema afternoons that build language and imagination.",
    color: "sky",
  },
] as const;

export const activityChips = [
  "English lessons",
  "Chess",
  "Taekwondo",
  "Yoga",
  "Pottery",
  "Beads",
  "Circle time",
  "Outdoor trips",
  "Music & movement",
] as const;

export const whyUs = [
  {
    title: "Native English",
    description:
      "Children absorb language naturally from qualified native-speaking teachers, all day long.",
  },
  {
    title: "Montessori play",
    description:
      "Play-based learning that respects each child's own pace, curiosity, and way of growing.",
  },
  {
    title: "Flexible hours",
    description:
      "Half day (8am–1pm) or full day (8am–6pm) — whatever fits your family's routine.",
  },
  {
    title: "Meals included",
    description:
      "Freshly cooked breakfast, lunch, snacks and dinner — all prepared on site, every day.",
  },
] as const;

export const daySchedule = [
  { time: "8:00", label: "Arrival & free play" },
  { time: "9:50", label: "Circle time" },
  { time: "10:20", label: "Morning lessons" },
  { time: "12:30", label: "Lunch together" },
  { time: "13:00", label: "Rest & quiet time" },
  { time: "15:00", label: "Afternoon fun" },
  { time: "16:20", label: "Snack & dinner" },
  { time: "18:00", label: "Home time" },
] as const;

export const pricingPlans = [
  {
    name: "Half day",
    slug: "half-day",
    hours: "8:00 AM – 1:00 PM",
    price: 270,
    discountPrice: 200,
    savings: 70,
    featured: false,
    includes: ["Breakfast", "Morning snack", "Lunch", "All daily activities"],
  },
  {
    name: "Full day",
    slug: "full-day",
    hours: "8:00 AM – 6:00 PM",
    price: 550,
    discountPrice: 450,
    savings: 100,
    featured: true,
    includes: [
      "Breakfast & morning snack",
      "Lunch",
      "Afternoon snack & dinner",
      "All daily activities",
    ],
  },
] as const;

export const pricingHowItWorks = [
  "The discounted rate applies when your family commits to a full 3-month enrollment cycle — not month-to-month.",
  "To keep your discounted rate, simply renew consecutively at the end of each 3-month cycle.",
  "If you don't renew within the cycle, the rate resets to standard the next time you enroll.",
] as const;

export const faqs = [
  {
    question: "What ages does Little Britain Daycare accept?",
    answer:
      "We welcome children aged 2 to 6 years old, in both our half-day and full-day programmes.",
  },
  {
    question: "What language do you teach in?",
    answer:
      "Little Britain is an English-medium daycare. Children learn and play with native English-speaking teachers all day long, following a British English approach.",
  },
  {
    question: "How much does daycare cost?",
    answer:
      "Half day (8:00 AM – 1:00 PM) is $270/month and full day (8:00 AM – 6:00 PM) is $550/month at the standard rate. Commit to a 3-month enrollment cycle and pay $200/month for half day or $450/month for full day. Both plans include meals and all daily activities.",
  },
  {
    question: "Are meals included?",
    answer:
      "Yes. Breakfast, snacks, lunch, and (for full-day children) dinner are freshly cooked on site every day — no need to pack food.",
  },
  {
    question: "What teaching approach do you use?",
    answer:
      "We follow a Montessori, play-based approach that lets each child learn at their own pace through hands-on activities, art, movement, and stories.",
  },
  {
    question: "Where are you located and how do I book a visit?",
    answer:
      "We're at Shota Rustaveli 13A, Tashkent. Call or message us on Telegram, or fill in the form on the website and we'll call you back to arrange a tour.",
  },
] as const;

export const galleryPhotos = [
  { src: "/reading-corner.jpg", alt: "Reading corner with children's books and bean bags at Little Britain Daycare", caption: "Reading corner", width: 1200, height: 901 },
  { src: "/play-lounge.jpg", alt: "Cosy lounge with bean bag seating and TV for movie afternoons at Little Britain Daycare", caption: "Cinema & play lounge", width: 1200, height: 901 },
  { src: "/facil1.jpg", alt: "Little Britain Daycare facility", caption: "Our facility", width: 1600, height: 1200 },
  { src: "/facil4.jpg", alt: "Little Britain Daycare facility", caption: "Our facility", width: 1600, height: 1200 },
  { src: "/facil5.jpg", alt: "Little Britain Daycare facility", caption: "Our facility", width: 1600, height: 1200 },
  { src: "/facil6.jpg", alt: "Little Britain Daycare facility", caption: "Our facility", width: 1600, height: 1200 },
] as const;
