export const site = {
  name: "Little Britain Daycare",
  shortName: "Little Britain",
  url: "https://littlebritaindaycare.com",
  phone: "+998 99 049 40 37",
  phoneHref: "tel:+998990494037",
  telegramHref: "https://t.me/+998990494037",
  email: "worldlinklbd@gmail.com",
  addressMapQuery: "Shota+Rustaveli+13A+Tashkent",
  instagram: "@littlebritain.uzb",
  instagramHref: "https://instagram.com/littlebritain.uzb",
  sisterBrand: {
    name: "WorldLink Academy",
    href: "https://worldlinkacademy.org/",
  },
} as const;

export const navLinks = [
  { href: "/about", key: "about" },
  { href: "/programs", key: "programs" },
  { href: "/pricing", key: "pricing" },
  { href: "/gallery", key: "gallery" },
  { href: "/faq", key: "faq" },
  { href: "/contact", key: "contact" },
] as const;

export const activities = [
  { id: "artPottery", color: "red" },
  { id: "movePlay", color: "sun" },
  { id: "storiesCinema", color: "sky" },
] as const;

export const whyUs = [
  { id: "nativeEnglish" },
  { id: "montessoriPlay" },
  { id: "flexibleHours" },
  { id: "mealsIncluded" },
] as const;

export const daySchedule = [
  { time: "8:00" },
  { time: "9:50" },
  { time: "10:20" },
  { time: "12:30" },
  { time: "13:00" },
  { time: "15:00" },
  { time: "16:20" },
  { time: "18:00" },
] as const;

export const pricingPlans = [
  {
    slug: "half-day",
    key: "halfDay",
    price: 270,
    discountPrice: 200,
    savings: 70,
    featured: false,
  },
  {
    slug: "full-day",
    key: "fullDay",
    price: 550,
    discountPrice: 450,
    savings: 100,
    featured: true,
  },
] as const;

export const faqIds = [
  "ages",
  "language",
  "cost",
  "meals",
  "approach",
  "location",
] as const;

export const galleryPhotos = [
  { id: "readingCorner", src: "/reading-corner.jpg", width: 1200, height: 901 },
  { id: "playLounge", src: "/play-lounge.jpg", width: 1200, height: 901 },
  { id: "facil1", src: "/facil1.jpg", width: 1600, height: 1200 },
  { id: "facil4", src: "/facil4.jpg", width: 1600, height: 1200 },
  { id: "facil5", src: "/facil5.jpg", width: 1600, height: 1200 },
  { id: "facil6", src: "/facil6.jpg", width: 1600, height: 1200 },
] as const;
