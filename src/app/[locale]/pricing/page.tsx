import { getTranslations, setRequestLocale } from "next-intl/server";

import { Container, SectionHeading } from "@/components/section-heading";
import { PricingCard } from "@/components/pricing-card";
import { pricingPlans } from "@/lib/site-config";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Pricing.meta" });
  return pageMetadata({
    locale,
    title: t("title"),
    description: t("description"),
    path: "/pricing",
  });
}

export default async function PricingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Pricing");
  const howItWorksItems = t.raw("howItWorks.items") as string[];

  return (
    <section className="py-16">
      <Container className="max-w-3xl">
        <SectionHeading
          as="h1"
          kicker={t("kicker")}
          title={t("title")}
        />
        <div className="mx-auto grid max-w-2xl gap-6 sm:grid-cols-2">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.slug} plan={plan} />
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-2xl">
          <h2 className="text-center font-heading text-2xl font-bold text-ink">
            {t("discountTable.title")}
          </h2>
          <div className="mt-6 overflow-x-auto rounded-[28px] bg-white p-2 shadow-[0_8px_22px_-12px_rgba(61,43,38,0.3)]">
            <table className="w-full min-w-[480px] border-collapse text-left">
              <thead>
                <tr className="border-b-2 border-cream-2">
                  <th className="p-4 font-heading text-sm font-bold text-ink">
                    {t("discountTable.plan")}
                  </th>
                  <th className="p-4 font-heading text-sm font-bold text-ink-soft">
                    {t("discountTable.standardRate")}
                  </th>
                  <th className="p-4 font-heading text-sm font-bold text-red">
                    {t("discountTable.threeMonthRate")}
                  </th>
                  <th className="p-4 font-heading text-sm font-bold text-sun-deep">
                    {t("discountTable.youSave")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricingPlans.map((plan) => (
                  <tr key={plan.slug} className="border-b border-cream-2 last:border-0">
                    <td className="p-4 font-semibold text-ink">
                      {t(`plans.${plan.key}.name`)}
                      <div className="text-xs font-normal text-ink-soft">
                        {t(`plans.${plan.key}.hours`)}
                      </div>
                    </td>
                    <td className="p-4 font-semibold text-ink-soft">
                      ${plan.price}{t("discountTable.perMonth")}
                    </td>
                    <td className="p-4 font-heading font-bold text-red">
                      ${plan.discountPrice}{t("discountTable.perMonth")}
                    </td>
                    <td className="p-4 font-semibold text-sun-deep">
                      ${plan.savings}{t("discountTable.perMonth")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-2xl rounded-[28px] bg-cream-2 p-8">
          <h2 className="font-heading text-2xl font-bold text-ink">
            {t("howItWorks.title")}
          </h2>
          <ul className="mt-4 flex flex-col gap-3">
            {howItWorksItems.map((line) => (
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
