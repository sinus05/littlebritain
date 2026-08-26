import type { MetadataRoute } from "next";

import { site } from "@/lib/site-config";
import { routing } from "@/i18n/routing";

const routes = [
  { path: "", priority: 1.0 },
  { path: "/about", priority: 0.8 },
  { path: "/programs", priority: 0.8 },
  { path: "/pricing", priority: 0.8 },
  { path: "/gallery", priority: 0.6 },
  { path: "/faq", priority: 0.6 },
  { path: "/contact", priority: 0.8 },
];

function localizedPath(path: string, locale: string) {
  return locale === routing.defaultLocale ? path || "/" : `/${locale}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap((route) =>
    routing.locales.map((locale) => ({
      url: `${site.url}${localizedPath(route.path, locale)}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route.priority,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, `${site.url}${localizedPath(route.path, l)}`])
        ),
      },
    }))
  );
}
