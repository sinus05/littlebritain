"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { nav, site } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

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
          aria-label="Little Britain Daycare — Home"
          className="flex flex-col leading-none"
        >
          <span className="font-heading text-lg font-bold text-ink">
            Little Britain
          </span>
          <span className="text-[0.64rem] font-extrabold tracking-[0.18em] text-ink-soft uppercase">
            Daycare · Tashkent
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-bold text-ink transition-colors hover:text-red"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <div className="text-right leading-tight">
            <span className="block text-[0.62rem] font-extrabold tracking-[0.14em] text-ink-soft uppercase">
              Call us today
            </span>
            <span className="font-extrabold text-ink">{site.phone}</span>
          </div>
          <Button
            render={<Link href="/contact" />}
            nativeButton={false}
            className="h-auto rounded-full bg-red px-6 py-3 font-heading text-base font-semibold text-white shadow-md hover:bg-red-deep"
          >
            Book a visit
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={site.phoneHref}
            aria-label="Call us"
            className="flex size-10 items-center justify-center rounded-full text-red"
          >
            <Phone className="size-6" />
          </a>
          <Sheet>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" aria-label="Open menu" />
              }
            >
              <Menu className="size-6 text-red" />
            </SheetTrigger>
            <SheetContent className="bg-cream">
              <SheetHeader>
                <SheetTitle className="font-heading text-ink">
                  Little Britain
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4">
                {nav.map((item) => (
                  <SheetClose
                    key={item.href}
                    render={<Link href={item.href} />}
                    className="rounded-lg px-3 py-3 font-heading text-base font-semibold text-ink hover:bg-white"
                  >
                    {item.label}
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-3 p-4">
                <Button
                  render={<Link href="/contact" />}
                  nativeButton={false}
                  className="h-auto rounded-full bg-red py-3 font-heading text-base font-semibold text-white"
                >
                  Book a visit
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
