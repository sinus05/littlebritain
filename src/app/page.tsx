import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { CheckCircle2, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal, RevealItem } from "@/components/reveal";
import { Container, SectionHeading } from "@/components/section-heading";
import {
  activities,
  activityChips,
  daySchedule,
  galleryPhotos,
  pricingPlans,
  site,
  trustBadges,
  whyUs,
} from "@/lib/site-config";

export const metadata: Metadata = {
  title: `${site.name} — Where Playtime Meets Education | Tashkent`,
  description: site.description,
  alternates: { canonical: "/" },
};

const activityColor: Record<string, string> = {
  red: "bg-red",
  sun: "bg-sun",
  sky: "bg-sky",
};

export default function HomePage() {
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
              className="relative z-10 mx-auto h-auto w-[clamp(220px,30vw,320px)] drop-shadow-[0_14px_26px_rgba(61,43,38,0.16)]"
            />
          </div>

          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-sun-soft px-4 py-1.5 text-sm font-extrabold text-[#9a6a09]">
            <span className="size-1.5 rounded-full bg-sun" /> British English ·
            Ages 2 to 6
          </span>

          <h1 className="mb-4 text-[clamp(2.4rem,5.4vw,3.7rem)] text-ink">
            Where <span className="text-red">playtime</span> meets education
          </h1>

          <p className="mx-auto mb-6 max-w-[34em] text-[1.16rem] text-ink-soft">
            A warm, nurturing daycare in the heart of Tashkent where little
            ones learn English, make friends, and discover the world — one
            happy day at a time.
          </p>

          <div className="mb-6 flex flex-wrap justify-center gap-3.5">
            <Button
              render={<Link href="/contact" />}
              nativeButton={false}
              className="h-auto rounded-full bg-red px-6 py-3.5 font-heading text-base font-semibold text-white shadow-md hover:bg-red-deep"
            >
              Book a visit <ArrowRight className="size-4.5" />
            </Button>
            <Button
              render={<Link href="/programs" />}
              nativeButton={false}
              variant="outline"
              className="h-auto rounded-full border-2 border-red bg-transparent px-6 py-3.5 font-heading text-base font-semibold text-red hover:bg-red-soft"
            >
              See our day
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
            kicker="A joyful day, every day"
            title="So much more than childcare"
            description="From paintbrushes to chessboards, every part of the day is designed to spark curiosity, build confidence, and grow young minds."
          />
          <Reveal stagger className="grid gap-6 md:grid-cols-3">
            {activities.map((activity, i) => (
              <RevealItem
                key={activity.title}
                className={i === 1 ? "md:-translate-y-3.5" : undefined}
              >
                <div className="h-full overflow-hidden rounded-3xl bg-cream shadow-[0_8px_22px_-12px_rgba(61,43,38,0.3)] transition-transform hover:-translate-y-2">
                  <div
                    className={`relative flex h-[148px] items-center justify-center ${activityColor[activity.color]}`}
                  >
                    <span className="absolute -top-7 -right-7 size-[120px] rounded-full bg-white/15" />
                  </div>
                  <div className="p-5 pt-4">
                    <h3 className="mb-1.5 text-[1.3rem] text-ink">
                      {activity.title}
                    </h3>
                    <p className="text-[0.96rem] text-ink-soft">
                      {activity.description}
                    </p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </Reveal>
          <Reveal className="mt-10 flex flex-wrap justify-center gap-2.5">
            {activityChips.map((chip, i) => (
              <span
                key={chip}
                className={
                  "rounded-full border-[1.5px] border-dashed px-4.5 py-2 text-[0.9rem] font-extrabold " +
                  (i % 3 === 0
                    ? "border-red/35 bg-red-soft text-red-deep"
                    : i % 3 === 1
                      ? "border-sun/45 bg-sun-soft text-[#9a6a09]"
                      : "border-sky/45 bg-sky-soft text-[#2f6b54]")
                }
              >
                {chip}
              </span>
            ))}
          </Reveal>
          <div className="mt-10 text-center">
            <Link
              href="/programs"
              className="font-heading font-semibold text-red hover:underline"
            >
              Explore all programs &amp; our daily schedule →
            </Link>
          </div>
        </Container>
      </section>

      {/* Why us */}
      <section className="py-16">
        <Container>
          <SectionHeading
            kicker="Why families choose us"
            title="Care you can feel good about"
          />
          <Reveal stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item) => (
              <RevealItem key={item.title} className="p-3.5 text-center">
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

      {/* Day teaser */}
      <section className="bg-cream-2 py-16">
        <Container>
          <SectionHeading
            kicker="A day at Little Britain"
            title="A gentle rhythm, full of fun"
            description="Our days flow between learning, play, rest, and good food — so every child feels settled and happy."
          />
          <Reveal
            stagger
            className="grid grid-cols-2 gap-3.5 sm:grid-cols-4"
          >
            {daySchedule.slice(0, 4).map((step) => (
              <RevealItem
                key={step.time}
                className="rounded-2xl bg-white p-4.5 text-center shadow-[0_8px_22px_-12px_rgba(61,43,38,0.3)]"
              >
                <div className="font-heading text-[1.02rem] font-bold text-ink">
                  {step.time}
                </div>
                <div className="mt-0.5 text-[0.84rem] font-bold text-ink-soft">
                  {step.label}
                </div>
              </RevealItem>
            ))}
          </Reveal>
          <div className="mt-8 text-center">
            <Link
              href="/programs"
              className="font-heading font-semibold text-red hover:underline"
            >
              See the full daily schedule →
            </Link>
          </div>
        </Container>
      </section>

      {/* Pricing teaser */}
      <section className="py-16">
        <Container className="max-w-3xl text-center">
          <SectionHeading
            kicker="Simple plans for busy families"
            title="Clear pricing, no surprises"
            description={`Plans start at $${pricingPlans[0].price}/month, with meals and all daily activities included.`}
          />
          <Button
            render={<Link href="/pricing" />}
            nativeButton={false}
            className="h-auto rounded-full bg-red px-6 py-3.5 font-heading text-base font-semibold text-white hover:bg-red-deep"
          >
            View plans &amp; pricing
          </Button>
        </Container>
      </section>

      {/* Gallery teaser */}
      <section className="bg-white py-16">
        <Container>
          <SectionHeading kicker="A peek inside" title="Come and see us in action" />
          <Reveal
            stagger
            className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2"
          >
            {galleryPhotos.slice(0, 2).map((photo) => (
              <RevealItem
                key={photo.src}
                className="overflow-hidden rounded-[22px] bg-white shadow-[0_8px_22px_-12px_rgba(61,43,38,0.3)]"
              >
                <Link href="/gallery" className="block">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={600}
                    height={450}
                    className="h-[230px] w-full object-cover"
                  />
                  <span className="block p-4 font-heading font-bold text-ink">
                    {photo.caption}
                  </span>
                </Link>
              </RevealItem>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-red py-16 text-white">
        <span className="absolute top-[-90px] right-[-60px] size-[280px] rounded-full bg-white/[0.07]" />
        <span className="absolute bottom-[-70px] left-[6%] size-[180px] rounded-full bg-white/[0.06]" />
        <Container className="relative text-center">
          <Reveal>
            <h2 className="mb-3.5 text-[clamp(2rem,3.6vw,2.7rem)]">
              Ready to visit?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-[1.12rem] opacity-90">
              The best way to feel the Little Britain difference is to visit.
              Pop in for a tour — we&apos;d love to meet you and your little
              one.
            </p>
            <Button
              render={<Link href="/contact" />}
              nativeButton={false}
              className="h-auto rounded-full bg-white px-7 py-3.5 font-heading text-base font-semibold text-red shadow-md hover:bg-cream"
            >
              Book a visit
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
