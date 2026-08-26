import { CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";

import { Reveal, RevealItem } from "@/components/reveal";
import { whyUs } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function WhyUsGrid({ variant = "plain" }: { variant?: "plain" | "card" }) {
  const t = useTranslations("WhyUs");

  return (
    <Reveal stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {whyUs.map((item) => (
        <RevealItem
          key={item.id}
          className={cn(
            "text-center",
            variant === "plain" && "p-3.5",
            variant === "card" &&
              "rounded-3xl bg-white p-6 shadow-[0_8px_22px_-12px_rgba(61,43,38,0.3)]"
          )}
        >
          <div className="mx-auto mb-4.5 flex size-[74px] rotate-[-5deg] items-center justify-center rounded-[22px] bg-red text-white">
            <CheckCircle2 className="size-9" />
          </div>
          <h3 className="mb-2 text-[1.2rem] text-ink">{t(`${item.id}.title`)}</h3>
          <p className="text-[0.95rem] text-ink-soft">{t(`${item.id}.description`)}</p>
        </RevealItem>
      ))}
    </Reveal>
  );
}
