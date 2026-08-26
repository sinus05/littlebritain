import { getTranslations, setRequestLocale } from "next-intl/server";

import { Container, SectionHeading } from "@/components/section-heading";
import { ActivitiesGrid } from "@/components/activities-grid";
import { DayScheduleGrid } from "@/components/day-schedule-grid";
import { CtaBanner } from "@/components/cta-banner";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Programs.meta" });
  return pageMetadata({
    locale,
    title: t("title"),
    description: t("description"),
    path: "/programs",
  });
}

export default async function ProgramsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Programs");

  return (
    <>
      <section className="bg-white py-16">
        <Container>
          <SectionHeading
            as="h1"
            kicker={t("hero.kicker")}
            title={t("hero.title")}
            description={t("hero.description")}
          />
          <ActivitiesGrid />
        </Container>
      </section>

      <section className="bg-cream-2 py-16">
        <Container>
          <SectionHeading
            kicker={t("day.kicker")}
            title={t("day.title")}
            description={t("day.description")}
          />
          <DayScheduleGrid />
        </Container>
      </section>

      <CtaBanner title={t("cta.title")} description={t("cta.description")} />
    </>
  );
}
