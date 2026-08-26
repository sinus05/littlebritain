import { Container, SectionHeading } from "@/components/section-heading";
import { PricingCard } from "@/components/pricing-card";
import { pricingPlans, pricingHowItWorks } from "@/lib/site-config";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Pricing & Plans",
  description:
    "Simple, transparent daycare pricing in Tashkent. Half day $270/month, full day $550/month — meals and daily activities included. Save with our 3-month enrollment plan.",
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

        <div className="mx-auto mt-14 max-w-2xl">
          <h2 className="text-center font-heading text-2xl font-bold text-ink">
            Save with a 3-month enrollment plan
          </h2>
          <div className="mt-6 overflow-x-auto rounded-[28px] bg-white p-2 shadow-[0_8px_22px_-12px_rgba(61,43,38,0.3)]">
            <table className="w-full min-w-[480px] border-collapse text-left">
              <thead>
                <tr className="border-b-2 border-cream-2">
                  <th className="p-4 font-heading text-sm font-bold text-ink">
                    Plan
                  </th>
                  <th className="p-4 font-heading text-sm font-bold text-ink-soft">
                    Standard Rate
                  </th>
                  <th className="p-4 font-heading text-sm font-bold text-red">
                    3-Month Plan Rate
                  </th>
                  <th className="p-4 font-heading text-sm font-bold text-sun-deep">
                    You Save
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricingPlans.map((plan) => (
                  <tr key={plan.name} className="border-b border-cream-2 last:border-0">
                    <td className="p-4 font-semibold text-ink">
                      {plan.name}
                      <div className="text-xs font-normal text-ink-soft">
                        {plan.hours}
                      </div>
                    </td>
                    <td className="p-4 font-semibold text-ink-soft">
                      ${plan.price}/month
                    </td>
                    <td className="p-4 font-heading font-bold text-red">
                      ${plan.discountPrice}/month
                    </td>
                    <td className="p-4 font-semibold text-sun-deep">
                      ${plan.savings}/month
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-2xl rounded-[28px] bg-cream-2 p-8">
          <h2 className="font-heading text-2xl font-bold text-ink">
            How it works
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
