import type { Metadata } from "next";

import { site } from "@/lib/site-config";
import { routing } from "@/i18n/routing";

export function pageMetadata({
  locale,
  title,
  description,
  path,
}: {
  locale: string;
  title: string;
  description: string;
  path: string;
}): Metadata {
  const localePrefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  const canonical = `${localePrefix}${path}`;
  const url = `${site.url}${canonical}`;
  const socialTitle = `${title} | ${site.name}`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: path,
        ru: `/ru${path}`,
        "x-default": path,
      },
    },
    openGraph: {
      title: socialTitle,
      description,
      type: "website",
      url,
      images: [{ url: "/logo.png", width: 640, height: 640 }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: ["/logo.png"],
    },
  };
}
