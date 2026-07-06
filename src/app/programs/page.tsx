import { Container, SectionHeading } from "@/components/section-heading";
import { ActivitiesGrid } from "@/components/activities-grid";
import { DayScheduleGrid } from "@/components/day-schedule-grid";
import { CtaBanner } from "@/components/cta-banner";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Programs & Daily Schedule",
  description:
    "Explore Little Britain Daycare's daily activities — art, movement, stories, and more — plus our full day-by-day schedule for ages 2–6.",
  path: "/programs",
});

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
          <ActivitiesGrid />
        </Container>
      </section>

      <section className="bg-cream-2 py-16">
        <Container>
          <SectionHeading
            kicker="A day at Little Britain"
            title="A gentle rhythm, full of fun"
            description="Our days flow between learning, play, rest, and good food — so every child feels settled and happy."
          />
          <DayScheduleGrid />
        </Container>
      </section>

      <CtaBanner
        title="See a real day for yourself"
        description="Book a visit and watch a full day of activities in action — we'd love to show you around."
      />
    </>
  );
}
