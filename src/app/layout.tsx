import type { Metadata } from "next";
import { Baloo_2, Nunito } from "next/font/google";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { TelegramFab } from "@/components/telegram-fab";
import { site } from "@/lib/site-config";
import "./globals.css";

const baloo2 = Baloo_2({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const nunito = Nunito({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Where Playtime Meets Education | Tashkent`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} — Tashkent`,
    description:
      "English-medium daycare for ages 2–6. Native teachers, Montessori play, hot meals. Book a visit.",
    type: "website",
    url: site.url,
    images: [{ url: "/logo.png", width: 640, height: 640 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Tashkent`,
    description:
      "English-medium daycare for ages 2–6. Native teachers, Montessori play, hot meals. Book a visit.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${baloo2.variable} ${nunito.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ChildCare",
              name: site.name,
              description: site.description,
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
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <TelegramFab />
      </body>
    </html>
  );
}
