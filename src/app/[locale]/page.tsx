import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Reveal, RevealItem } from "@/components/reveal";
import { Container, SectionHeading } from "@/components/section-heading";
import { ActivitiesGrid } from "@/components/activities-grid";
import { WhyUsGrid } from "@/components/why-us-grid";
import { DayScheduleGrid } from "@/components/day-schedule-grid";
import { CtaBanner } from "@/components/cta-banner";
import { galleryPhotos, pricingPlans } from "@/lib/site-config";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Home");
  const tRoot = await getTranslations();
  const tPhotos = await getTranslations("GalleryPhotos");
  const trustBadges = tRoot.raw("TrustBadges") as string[];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-10 pb-16 text-center">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <span className="absolute top-[6%] left-[-90px] size-[260px] rounded-full bg-sun-soft" />
          <span className="absolute right-[-60px] bottom-[4%] size-[180px] rounded-full bg-sky-soft" />
          <span className="absolute top-[22%] right-[9%] size-[90px] rounded-full bg-red-soft" />
        </div>

        <Reveal className="relative mx-auto max-w-2xl">
          <div className="relative flex items-center justify-center py-3.5">
            <span className="absolute h-[330px] w-[min(560px,86vw)] rounded-full bg-[radial-gradient(closest-side,rgba(245,181,61,0.2),rgba(245,181,61,0)_72%)]" />
            <span className="absolute h-[min(290px,60vw)] w-[min(340px,60vw)] rounded-full bg-cream-2 opacity-50" />
            <Image
              src="/logo.png"
              alt="Little Britain Daycare"
              width={640}
              height={640}
              preload
              sizes="(max-width: 640px) 220px, 320px"
              className="relative z-10 mx-auto h-auto w-[clamp(220px,30vw,320px)] drop-shadow-[0_14px_26px_rgba(61,43,38,0.16)]"
            />
          </div>

          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-sun-soft px-4 py-1.5 text-sm font-extrabold text-sun-deep">
            <span className="size-1.5 rounded-full bg-sun" /> {t("hero.eyebrow")}
          </span>

          <h1 className="mb-4 text-[clamp(2.4rem,5.4vw,3.7rem)] text-ink">
            {t("hero.titlePre")} <span className="text-red">{t("hero.titleHighlight")}</span>{" "}
            {t("hero.titlePost")}
          </h1>

          <p className="mx-auto mb-6 max-w-[30em] text-[1.16rem] text-ink-soft">
            {t("hero.description")}
          </p>

          <div className="mb-6 flex flex-wrap justify-center gap-3.5">
            <Button
              render={<Link href="/contact" />}
              nativeButton={false}
              className="h-auto rounded-full bg-red px-6 py-3.5 font-heading text-base font-semibold text-white shadow-md hover:bg-red-deep"
            >
              {t("hero.bookVisit")} <ArrowRight className="size-4.5" />
            </Button>
            <Button
              render={<Link href="/programs" />}
              nativeButton={false}
              variant="outline"
              className="h-auto rounded-full border-2 border-red bg-transparent px-6 py-3.5 font-heading text-base font-semibold text-red hover:bg-red-soft"
            >
              {t("hero.seeOurDay")}
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {trustBadges.map((badge) => (
              <span
                key={badge}
                className="flex items-center gap-1.5 text-[0.92rem] font-bold text-ink"
              >
                <CheckCircle2 className="size-[18px] text-sky" /> {badge}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Activities teaser */}
      <section className="bg-white py-16">
        <Container>
          <SectionHeading
            kicker={t("activitiesTeaser.kicker")}
            title={t("activitiesTeaser.title")}
            description={t("activitiesTeaser.description")}
          />
          <ActivitiesGrid />
          <div className="mt-10 text-center">
            <Link
              href="/programs"
              className="font-heading font-semibold text-red hover:underline"
            >
              {t("activitiesTeaser.link")}
            </Link>
          </div>
        </Container>
      </section>

      {/* Why us */}
      <section className="py-16">
        <Container>
          <SectionHeading
            kicker={t("whyUs.kicker")}
            title={t("whyUs.title")}
          />
          <WhyUsGrid />
        </Container>
      </section>

      {/* Day teaser */}
      <section className="bg-cream-2 py-16">
        <Container>
          <SectionHeading
            kicker={t("dayTeaser.kicker")}
            title={t("dayTeaser.title")}
            description={t("dayTeaser.description")}
          />
          <DayScheduleGrid limit={4} />
          <div className="mt-8 text-center">
            <Link
              href="/programs"
              className="font-heading font-semibold text-red hover:underline"
            >
              {t("dayTeaser.link")}
            </Link>
          </div>
        </Container>
      </section>

      {/* Pricing teaser */}
      <section className="py-14">
        <Container className="max-w-3xl text-center">
          <SectionHeading
            kicker={t("pricingTeaser.kicker")}
            title={t("pricingTeaser.title")}
            description={t("pricingTeaser.description", {
              price: pricingPlans[0].price,
            })}
          />
          <Button
            render={<Link href="/pricing" />}
            nativeButton={false}
            className="h-auto rounded-full bg-red px-6 py-3.5 font-heading text-base font-semibold text-white hover:bg-red-deep"
          >
            {t("pricingTeaser.cta")}
          </Button>
        </Container>
      </section>

      {/* Gallery teaser */}
      <section className="bg-white py-14">
        <Container>
          <SectionHeading
            kicker={t("galleryTeaser.kicker")}
            title={t("galleryTeaser.title")}
          />
          <Reveal
            stagger
            className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2"
          >
            {galleryPhotos.slice(0, 2).map((photo) => (
              <RevealItem
                key={photo.src}
                className="overflow-hidden rounded-[22px] bg-white shadow-[0_8px_22px_-12px_rgba(61,43,38,0.3)] transition-transform duration-200 ease-out hover:-translate-y-1.5"
              >
                <Link href="/gallery" className="block">
                  <Image
                    src={photo.src}
                    alt={tPhotos(`${photo.id}.alt`)}
                    width={600}
                    height={450}
                    sizes="(max-width: 640px) 100vw, 600px"
                    className="h-[230px] w-full object-cover"
                  />
                  <span className="block p-4 font-heading font-bold text-ink">
                    {tPhotos(`${photo.id}.caption`)}
                  </span>
                </Link>
              </RevealItem>
            ))}
          </Reveal>
        </Container>
      </section>

      <CtaBanner
        title={t("cta.title")}
        description={t("cta.description")}
        decorative
      />
    </>
  );
}
