import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { Container, SectionHeading } from "@/components/section-heading";
import { pricingPlans } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Pricing & Plans",
  description:
    "Simple, transparent daycare pricing in Tashkent. Half day $270/month, full day $550/month — meals and daily activities included.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <section className="py-16">
        <Container className="max-w-3xl">
          <SectionHeading
            kicker="Simple plans for busy families"
            title="Clear pricing, no surprises"
          />
          <div className="mx-auto grid max-w-2xl gap-6 sm:grid-cols-2">
            {pricingPlans.map((plan) => (
              <Reveal key={plan.name}>
                <div
                  className={cn(
                    "relative h-full rounded-[28px] border-[3px] border-transparent bg-white p-8 shadow-[0_8px_22px_-12px_rgba(61,43,38,0.3)] transition-shadow hover:shadow-[0_30px_60px_-24px_rgba(61,43,38,0.34)]",
                    plan.featured && "scale-[1.03] border-red"
                  )}
                >
                  {plan.featured && (
                    <span className="absolute -top-[15px] left-1/2 -translate-x-1/2 rounded-full bg-red px-5 py-1.5 font-heading text-[0.85rem] font-bold whitespace-nowrap text-white shadow-md">
                      ★ Most loved by families
                    </span>
                  )}
                  <div className="font-heading text-2xl font-bold text-ink">
                    {plan.name}
                  </div>
                  <div className="mb-4.5 text-[0.9rem] font-bold text-ink-soft">
                    {plan.hours}
                  </div>
                  <div className="font-heading text-5xl font-extrabold text-red">
                    ${plan.price}
                    <small className="font-sans text-base font-bold text-ink-soft">
                      {" "}
                      / month
                    </small>
                  </div>
                  <ul className="my-5.5 flex list-none flex-col gap-1.5">
                    {plan.includes.map((line) => (
                      <li
                        key={line}
                        className="flex items-center gap-2.5 py-1.5 font-semibold text-ink"
                      >
                        <CheckCircle2 className="size-5 shrink-0 text-sky" />
                        {line}
                      </li>
                    ))}
                  </ul>
                  <Button
                    render={<Link href="/contact" />}
                    nativeButton={false}
                    className={cn(
                      "h-auto w-full rounded-full py-3 font-heading text-base font-semibold",
                      plan.featured
                        ? "bg-red text-white hover:bg-red-deep"
                        : "border-2 border-red bg-transparent text-red hover:bg-red-soft"
                    )}
                    variant={plan.featured ? "default" : "outline"}
                  >
                    Choose {plan.name.toLowerCase()}
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
