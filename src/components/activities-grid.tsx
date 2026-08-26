import { useTranslations } from "next-intl";

import { Reveal, RevealItem } from "@/components/reveal";
import { activities } from "@/lib/site-config";

const activityColor: Record<string, string> = {
  red: "bg-red",
  sun: "bg-sun",
  sky: "bg-sky",
};

const chipStyle = [
  "border-red/35 bg-red-soft text-red-deep",
  "border-sun/45 bg-sun-soft text-sun-deep",
  "border-sky/45 bg-sky-soft text-sky-deep",
];

export function ActivitiesGrid() {
  const t = useTranslations("Activities");
  const tRoot = useTranslations();
  const activityChips = tRoot.raw("ActivityChips") as string[];

  return (
    <>
      <Reveal stagger className="grid gap-6 md:grid-cols-3">
        {activities.map((activity, i) => (
          <RevealItem
            key={activity.id}
            className={i === 1 ? "md:-translate-y-3.5" : undefined}
          >
            <div className="h-full overflow-hidden rounded-3xl bg-cream shadow-[0_8px_22px_-12px_rgba(61,43,38,0.3)] transition-transform duration-200 ease-out hover:-translate-y-2">
              <div
                className={`relative flex h-[148px] items-center justify-center ${activityColor[activity.color]}`}
              >
                <span className="absolute -top-7 -right-7 size-[120px] rounded-full bg-white/15" />
              </div>
              <div className="p-5 pt-4">
                <h3 className="mb-1.5 text-[1.3rem] text-ink">
                  {t(`${activity.id}.title`)}
                </h3>
                <p className="text-[0.96rem] text-ink-soft">
                  {t(`${activity.id}.description`)}
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
            className={`rounded-full border-[1.5px] border-dashed px-4.5 py-2 text-[0.9rem] font-extrabold ${chipStyle[i % 3]}`}
          >
            {chip}
          </span>
        ))}
      </Reveal>
    </>
  );
}
