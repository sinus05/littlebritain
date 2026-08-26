import { getTranslations, setRequestLocale } from "next-intl/server";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal, RevealItem } from "@/components/reveal";
import { Container, SectionHeading } from "@/components/section-heading";
import { faqIds } from "@/lib/site-config";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Faq.meta" });
  return pageMetadata({
    locale,
    title: t("title"),
    description: t("description"),
    path: "/faq",
  });
}

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Faq");

  const faqs = faqIds.map((id) => ({
    id,
    question: t(`items.${id}.question`),
    answer: t(`items.${id}.answer`),
  }));

  return (
    <section className="py-16">
      <Container className="max-w-3xl">
        <SectionHeading as="h1" kicker={t("kicker")} title={t("title")} />
        <Reveal stagger className="flex flex-col gap-3.5">
          <Accordion multiple className="flex flex-col gap-3.5">
            {faqs.map((faq) => (
              <RevealItem key={faq.id}>
                <AccordionItem
                  value={faq.id}
                  className="rounded-2xl border-none bg-white px-6 shadow-[0_8px_22px_-12px_rgba(61,43,38,0.3)]"
                >
                  <AccordionTrigger className="py-5 font-heading text-[1.08rem] font-bold text-ink hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-2 text-[1rem] text-ink-soft">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </RevealItem>
            ))}
          </Accordion>
        </Reveal>
      </Container>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }),
        }}
      />
    </section>
  );
}
