import Link from "next/link";
import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { Reveal, RevealItem } from "@/components/reveal";
import { Container, SectionHeading } from "@/components/section-heading";
import { activities, activityChips, daySchedule } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Programs & Daily Schedule",
  description:
    "Explore Little Britain Daycare's daily activities — art, movement, stories, and more — plus our full day-by-day schedule for ages 2–6.",
  alternates: { canonical: "/programs" },
};

const activityColor: Record<string, string> = {
  red: "bg-red",
  sun: "bg-sun",
  sky: "bg-sky",
};

export default function ProgramsPage() {
  return (
    <>
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
        </Container>
      </section>

      <section className="bg-cream-2 py-16">
        <Container>
          <SectionHeading
            kicker="A day at Little Britain"
            title="A gentle rhythm, full of fun"
            description="Our days flow between learning, play, rest, and good food — so every child feels settled and happy."
          />
          <Reveal stagger className="grid grid-cols-2 gap-3.5 sm:grid-cols-4">
            {daySchedule.map((step) => (
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
        </Container>
      </section>

      <section className="bg-red py-16 text-center text-white">
        <Container>
          <Reveal>
            <h2 className="mb-4 text-[clamp(1.9rem,3.6vw,2.6rem)]">
              See a real day for yourself
            </h2>
            <p className="mx-auto mb-7 max-w-xl opacity-90">
              Book a visit and watch a full day of activities in action —
              we&apos;d love to show you around.
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
