import { Reveal, RevealItem } from "@/components/reveal";
import { daySchedule } from "@/lib/site-config";

export function DayScheduleGrid({ limit }: { limit?: number }) {
  const steps = limit ? daySchedule.slice(0, limit) : daySchedule;

  return (
    <Reveal stagger className="grid grid-cols-2 gap-3.5 sm:grid-cols-4">
      {steps.map((step) => (
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
  );
}
