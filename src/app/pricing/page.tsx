import { Container, SectionHeading } from "@/components/section-heading";
import { PricingCard } from "@/components/pricing-card";
import { pricingPlans, pricingHowItWorks } from "@/lib/site-config";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Pricing & Plans",
  description:
    "Simple, transparent daycare pricing in Tashkent. Half day from $200/month, full day from $450/month with a 3-month enrollment plan — meals and daily activities included.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <section className="py-16">
      <Container className="max-w-3xl">
        <SectionHeading
          as="h1"
          kicker="Simple plans for busy families"
          title="Clear pricing, no surprises"
        />
        <div className="mx-auto grid max-w-2xl gap-6 sm:grid-cols-2">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
        <div className="mx-auto mt-14 max-w-2xl rounded-[28px] bg-cream-2 p-8">
          <h2 className="font-heading text-2xl font-bold text-ink">
            How the 3-month discount works
          </h2>
          <ul className="mt-4 flex flex-col gap-3">
            {pricingHowItWorks.map((line) => (
              <li
                key={line}
                className="flex gap-2.5 font-semibold text-ink-soft"
              >
                <span className="text-red">•</span>
                {line}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
