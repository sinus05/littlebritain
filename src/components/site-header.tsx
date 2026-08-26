"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Menu, Phone } from "lucide-react";

import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { LanguageSwitcher } from "@/components/language-switcher";
import { navLinks, site } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslations("Header");
  const tNav = useTranslations("Nav");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-transparent bg-cream/80 backdrop-blur-md transition-shadow",
        scrolled && "border-red/10 shadow-[0_6px_20px_-16px_rgba(61,43,38,0.5)]"
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          aria-label={t("homeAriaLabel")}
          className="flex flex-col leading-none"
        >
          <span className="font-heading text-lg font-bold text-ink">
            {t("brandName")}
          </span>
          <span className="text-[0.64rem] font-extrabold tracking-[0.18em] text-ink-soft uppercase">
            {t("brandSub")}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-bold text-ink transition-colors hover:text-red"
            >
              {tNav(item.key)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <LanguageSwitcher ariaLabel={t("languageAria")} />
          <div className="text-right leading-tight">
            <span className="block text-[0.62rem] font-extrabold tracking-[0.14em] text-ink-soft uppercase">
              {t("callUsToday")}
            </span>
            <span className="font-extrabold text-ink">{site.phone}</span>
          </div>
          <Button
            render={<Link href="/contact" />}
            nativeButton={false}
            className="h-auto rounded-full bg-red px-6 py-3 font-heading text-base font-semibold text-white shadow-md hover:bg-red-deep"
          >
            {t("bookVisit")}
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={site.phoneHref}
            aria-label={t("callUsAria")}
            className="flex size-10 items-center justify-center rounded-full text-red"
          >
            <Phone className="size-6" />
          </a>
          <Sheet>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" aria-label={t("openMenuAria")} />
              }
            >
              <Menu className="size-6 text-red" />
            </SheetTrigger>
            <SheetContent className="bg-cream">
              <SheetHeader>
                <SheetTitle className="font-heading text-ink">
                  {t("mobileMenuTitle")}
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4">
                {navLinks.map((item) => (
                  <SheetClose
                    key={item.href}
                    render={<Link href={item.href} />}
                    className="rounded-lg px-3 py-3 font-heading text-base font-semibold text-ink hover:bg-white"
                  >
                    {tNav(item.key)}
                  </SheetClose>
                ))}
              </nav>
              <div className="flex flex-col gap-3 px-4 pt-2">
                <LanguageSwitcher ariaLabel={t("languageAria")} />
              </div>
              <div className="mt-auto flex flex-col gap-3 p-4">
                <Button
                  render={<Link href="/contact" />}
                  nativeButton={false}
                  className="h-auto rounded-full bg-red py-3 font-heading text-base font-semibold text-white"
                >
                  {t("bookVisit")}
                </Button>
                <a
                  href={site.phoneHref}
                  className="text-center text-sm font-bold text-ink-soft"
                >
                  {site.phone}
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
