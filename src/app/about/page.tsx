import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal, RevealItem } from "@/components/reveal";
import { Container, SectionHeading } from "@/components/section-heading";
import { site, whyUs } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Little Britain Daycare's Montessori, English-medium approach to early childhood care in Tashkent, and the team behind it.",
  alternates: { canonical: "/about" },
};

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
              Little Britain Daycare was founded to give Tashkent families an
              English-medium, play-based alternative to traditional
              childcare — a place where children aged 2 to 6 can learn,
              laugh, and grow surrounded by native English speakers every
              single day.
            </p>
            <p className="text-[1.1rem] text-ink-soft">
              We&apos;re proud to be part of the same family as{" "}
              <a
                href={site.sisterBrand.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-red hover:underline"
              >
                {site.sisterBrand.name}
              </a>
              , bringing years of English-language education experience into
              a warm, nurturing daycare setting.
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
                Children learn best through play. Our teachers follow a
                Montessori-inspired, play-based approach that lets each child
                explore at their own pace — through art, movement, stories,
                and hands-on activities — while native English-speaking
                teachers guide them all day long.
              </p>
              <p className="text-ink-soft">
                It&apos;s not a classroom with a lesson plan bolted onto
                daycare hours. English is simply the language of play,
                friendship, and discovery here — so children absorb it
                naturally, the same way they&apos;d pick up their mother
                tongue.
              </p>
            </Reveal>
            <Reveal>
              <div className="overflow-hidden rounded-[28px] shadow-[0_18px_40px_-18px_rgba(61,43,38,0.28)]">
                <Image
                  src="/reading-corner.jpg"
                  alt="Reading corner with children's books and bean bags at Little Britain Daycare"
                  width={700}
                  height={525}
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
          <Reveal stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item) => (
              <RevealItem
                key={item.title}
                className="rounded-3xl bg-white p-6 text-center shadow-[0_8px_22px_-12px_rgba(61,43,38,0.3)]"
              >
                <div className="mx-auto mb-4.5 flex size-[74px] rotate-[-5deg] items-center justify-center rounded-[22px] bg-red text-white">
                  <CheckCircle2 className="size-9" />
                </div>
                <h3 className="mb-2 text-[1.2rem] text-ink">{item.title}</h3>
                <p className="text-[0.95rem] text-ink-soft">
                  {item.description}
                </p>
              </RevealItem>
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="bg-red py-16 text-center text-white">
        <Container>
          <Reveal>
            <h2 className="mb-4 text-[clamp(1.9rem,3.6vw,2.6rem)]">
              Come meet our team
            </h2>
            <p className="mx-auto mb-7 max-w-xl opacity-90">
              The best way to understand our approach is to see it in
              action. Book a visit and spend time with our teachers and
              children.
            </p>
            <Button
              render={<Link href="/contact" />}
              nativeButton={false}
              className="h-auto rounded-full bg-white px-7 py-3.5 font-heading text-base font-semibold text-red hover:bg-cream"
            >
              Book a visit
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
