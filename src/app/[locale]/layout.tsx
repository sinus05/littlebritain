import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Baloo_2, Comfortaa, Nunito } from "next/font/google";
import { MotionConfig } from "motion/react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { TelegramFab } from "@/components/telegram-fab";
import { site } from "@/lib/site-config";
import { routing } from "@/i18n/routing";
import "../globals.css";

const baloo2 = Baloo_2({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

// Baloo 2 has no Cyrillic glyphs, so Russian headings use Comfortaa instead —
// a similarly rounded, playful display font that does support Cyrillic.
const comfortaa = Comfortaa({
  variable: "--font-heading",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta" });

  return {
    metadataBase: new URL(site.url),
    title: {
      default: t("titleDefault"),
      template: `%s | ${site.name}`,
    },
    description: t("description"),
    alternates: {
      canonical: locale === routing.defaultLocale ? "/" : `/${locale}`,
      languages: {
        en: "/",
        ru: "/ru",
        "x-default": "/",
      },
    },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      type: "website",
      url: locale === routing.defaultLocale ? site.url : `${site.url}/${locale}`,
      images: [{ url: "/logo.png", width: 640, height: 640 }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: ["/logo.png"],
    },
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/favicon.png", type: "image/png" },
      ],
      apple: "/apple-touch-icon.png",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "Meta" });
  const headingFont = locale === "ru" ? comfortaa : baloo2;

  return (
    <html
      lang={locale}
      data-scroll-behavior="smooth"
      className={`${headingFont.variable} ${nunito.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ChildCare",
              name: site.name,
              description: t("description"),
              url: site.url,
              logo: `${site.url}/logo.png`,
              image: `${site.url}/logo.png`,
              telephone: "+998990494037",
              email: site.email,
              priceRange: "$270 – $550 per month",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Shota Rustaveli 13A",
                addressLocality: "Tashkent",
                addressCountry: "UZ",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "41.2995",
                longitude: "69.2401",
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "08:00",
                closes: "18:00",
              },
              sameAs: [
                site.instagramHref,
                site.telegramHref,
                "https://maps.app.goo.gl/5KEF6ijqTWDf9EKK7",
              ],
            }),
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col overflow-x-hidden bg-cream font-sans text-ink">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-red focus:px-5 focus:py-3 focus:font-heading focus:font-semibold focus:text-white focus:shadow-md"
        >
          {t("skipToContent")}
        </a>
        <NextIntlClientProvider>
          <MotionConfig reducedMotion="user">
            <SiteHeader />
            <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
              {children}
            </main>
            <SiteFooter />
            <TelegramFab />
          </MotionConfig>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
