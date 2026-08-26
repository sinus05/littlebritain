"use client";

import { useLocale } from "next-intl";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const flags: Record<string, string> = { en: "🇬🇧", ru: "🇷🇺" };
const labels: Record<string, string> = { en: "EN", ru: "RU" };
const names: Record<string, string> = { en: "English", ru: "Русский" };

export function LanguageSwitcher({ ariaLabel }: { ariaLabel?: string }) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchTo = (loc: string) => {
    // Read the query string at click-time (rather than via useSearchParams)
    // so this component stays part of the static HTML instead of bailing
    // out into a client-only Suspense fallback.
    const query = Object.fromEntries(
      new URLSearchParams(window.location.search).entries()
    );
    router.replace({ pathname, query }, { locale: loc });
  };

  return (
    <div className="flex items-center gap-1" role="group" aria-label={ariaLabel}>
      {routing.locales.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => switchTo(loc)}
          aria-pressed={loc === locale}
          aria-label={names[loc]}
          className={cn(
            "flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-sm font-extrabold transition-colors",
            loc === locale
              ? "bg-red-soft text-red"
              : "text-ink-soft hover:bg-cream-2"
          )}
        >
          <span aria-hidden="true">{flags[loc]}</span>
          {labels[loc]}
        </button>
      ))}
    </div>
  );
}
