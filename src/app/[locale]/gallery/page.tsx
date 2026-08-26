import { getTranslations, setRequestLocale } from "next-intl/server";

import { GalleryGrid } from "@/components/gallery-grid";
import { Reveal } from "@/components/reveal";
import { Container, SectionHeading } from "@/components/section-heading";
import { galleryPhotos } from "@/lib/site-config";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Gallery.meta" });
  return pageMetadata({
    locale,
    title: t("title"),
    description: t("description"),
    path: "/gallery",
  });
}

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Gallery");

  return (
    <section className="py-16">
      <Container>
        <SectionHeading as="h1" kicker={t("kicker")} title={t("title")} />
        <Reveal stagger>
          <GalleryGrid photos={galleryPhotos} />
        </Reveal>
      </Container>
    </section>
  );
}
