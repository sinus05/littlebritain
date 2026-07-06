import type { Metadata } from "next";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal, RevealItem } from "@/components/reveal";
import { Container, SectionHeading } from "@/components/section-heading";
import { faqs } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about Little Britain Daycare: ages, pricing, meals, teaching approach, and how to book a visit.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <section className="py-16">
      <Container className="max-w-3xl">
        <SectionHeading kicker="Got questions?" title="Frequently asked questions" />
        <Reveal stagger className="flex flex-col gap-3.5">
          <Accordion multiple className="flex flex-col gap-3.5">
            {faqs.map((faq) => (
              <RevealItem key={faq.question}>
                <AccordionItem
                  value={faq.question}
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
