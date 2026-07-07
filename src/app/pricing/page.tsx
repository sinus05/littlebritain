import { Container, SectionHeading } from "@/components/section-heading";
import { PricingCard } from "@/components/pricing-card";
import { pricingPlans } from "@/lib/site-config";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Pricing & Plans",
  description:
    "Simple, transparent daycare pricing in Tashkent. Half day $270/month, full day $550/month — meals and daily activities included.",
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
      </Container>
    </section>
  );
}
