import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { Container, SectionHeading } from "@/components/section-heading";
import { WhyUsGrid } from "@/components/why-us-grid";
import { CtaBanner } from "@/components/cta-banner";
import { site } from "@/lib/site-config";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About Us",
  description:
    "Learn about Little Britain Daycare's Montessori, English-medium approach to early childhood care in Tashkent, and the team behind it.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="bg-white py-16">
        <Container className="max-w-3xl text-center">
          <Reveal>
            <span className="mb-2 block font-heading text-base font-bold text-red">
              Our story
            </span>
            <h1 className="mb-5 text-[clamp(2.1rem,4vw,3rem)] text-ink">
              A little home away from home
            </h1>
            <p className="mb-4 text-[1.1rem] text-ink-soft">
              Little Britain gives Tashkent families an English-medium,
              play-based alternative to traditional childcare — where
              children aged 2 to 6 learn, laugh, and grow with native
              English speakers every day.
            </p>
            <p className="text-[1.1rem] text-ink-soft">
              We&apos;re part of the{" "}
              <a
                href={site.sisterBrand.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-red hover:underline"
              >
                {site.sisterBrand.name}
              </a>{" "}
              family, bringing years of English-language education experience
              into a warm daycare setting.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <span className="mb-2 block font-heading text-base font-bold text-red">
                Our approach
              </span>
              <h2 className="mb-4 text-[clamp(1.9rem,3.6vw,2.6rem)] text-ink">
                Montessori play, native English, every day
              </h2>
              <p className="mb-4 text-ink-soft">
                Children learn best through play. Our Montessori-inspired
                approach lets each child explore at their own pace — through
                art, movement, stories, and hands-on activities.
              </p>
              <p className="text-ink-soft">
                English isn&apos;t a subject here — it&apos;s the language of
                play and friendship, so children pick it up as naturally as
                their first language.
              </p>
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
            kicker="Why families choose us"
            title="Care you can feel good about"
          />
          <WhyUsGrid variant="card" />
        </Container>
      </section>

      <CtaBanner
        title="Come meet our team"
        description="The best way to understand our approach is to see it in action. Book a visit and spend time with our teachers and children."
      />
    </>
  );
}
