import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { site } from "@/lib/site-config";

export function SiteFooter() {
  const t = useTranslations("Footer");
  const siteT = useTranslations("Site");

  return (
    <footer className="bg-red-deep py-12 text-white/85">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-center justify-between gap-6 border-b border-white/15 pb-6">
          <div className="flex items-center gap-4">
            <div className="inline-flex rounded-2xl bg-white p-2.5 shadow-md">
              <Image
                src="/logo.png"
                alt="Little Britain Daycare"
                width={54}
                height={54}
                className="h-[54px] w-auto"
              />
            </div>
            <div className="leading-none">
              <span className="block font-heading text-lg font-bold text-white">
                Little Britain
              </span>
              <span className="text-white/80">{siteT("tagline")}</span>
            </div>
          </div>
          <div className="text-right font-bold text-white">
            {siteT("hours")}
            <small className="block text-[0.74rem] font-bold tracking-[0.12em] text-white/80 uppercase">
              {t("openHours")}
            </small>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 border-b border-white/15 py-6">
          <span className="text-[0.78rem] font-extrabold tracking-[0.1em] text-white/80 uppercase">
            {t("alsoPartOf")}
          </span>
          <a
            href={site.sisterBrand.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3.5 rounded-2xl bg-white py-2 pr-5 pl-2 shadow-md transition-transform duration-200 ease-out hover:-translate-y-0.5"
          >
            <Image
              src="/worldlink-logo.png"
              alt={site.sisterBrand.name}
              width={40}
              height={31}
              className="h-10 w-auto rounded-lg"
            />
            <span className="font-bold text-ink">{site.sisterBrand.name}</span>
          </a>
        </div>

        <div className="flex flex-wrap justify-between gap-2.5 pt-6 text-sm">
          <span>
            © {new Date().getFullYear()} Little Britain Daycare · {siteT("address")}
          </span>
          <span>
            {site.phone} ·{" "}
            <Link href={site.instagramHref} className="hover:underline">
              {site.instagram}
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
