import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { Reveal } from "@/components/reveal";
import { Container, SectionHeading } from "@/components/section-heading";
import { WhyUsGrid } from "@/components/why-us-grid";
import { CtaBanner } from "@/components/cta-banner";
import { site } from "@/lib/site-config";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "About.meta" });
  return pageMetadata({
    locale,
    title: t("title"),
    description: t("description"),
    path: "/about",
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("About");

  return (
    <>
      <section className="bg-white py-16">
        <Container className="max-w-3xl text-center">
          <Reveal>
            <span className="mb-2 block font-heading text-base font-bold text-red">
              {t("story.eyebrow")}
            </span>
            <h1 className="mb-5 text-[clamp(2.1rem,4vw,3rem)] text-ink">
              {t("story.title")}
            </h1>
            <p className="mb-4 text-[1.1rem] text-ink-soft">{t("story.p1")}</p>
            <p className="text-[1.1rem] text-ink-soft">
              {t("story.p2Pre")}{" "}
              <a
                href={site.sisterBrand.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-red hover:underline"
              >
                {site.sisterBrand.name}
              </a>{" "}
              {t("story.p2Post")}
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <span className="mb-2 block font-heading text-base font-bold text-red">
                {t("approach.eyebrow")}
              </span>
              <h2 className="mb-4 text-[clamp(1.9rem,3.6vw,2.6rem)] text-ink">
                {t("approach.title")}
              </h2>
              <p className="mb-4 text-ink-soft">{t("approach.p1")}</p>
              <p className="text-ink-soft">{t("approach.p2")}</p>
            </Reveal>
            <Reveal>
              <div className="overflow-hidden rounded-[28px] shadow-[0_18px_40px_-18px_rgba(61,43,38,0.28)]">
                <Image
                  src="/reading-corner.jpg"
                  alt="Reading corner with children's books and bean bags at Little Britain Daycare"
                  width={700}
                  height={525}
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="h-auto w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-cream-2 py-16">
        <Container>
          <SectionHeading
            kicker={t("whyUs.kicker")}
            title={t("whyUs.title")}
          />
          <WhyUsGrid variant="card" />
        </Container>
      </section>

      <CtaBanner title={t("cta.title")} description={t("cta.description")} />
    </>
  );
}
