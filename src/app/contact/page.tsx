import { MapPin, Phone } from "lucide-react";

import { EnquiryForm } from "@/components/enquiry-form";
import { Reveal } from "@/components/reveal";
import { Container, SectionHeading } from "@/components/section-heading";
import { pricingPlans, site } from "@/lib/site-config";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact & Book a Visit",
  description:
    "Book a visit to Little Britain Daycare in Tashkent. Call, message us on Telegram, or fill in the enquiry form and we'll call you back.",
  path: "/contact",
});

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" />
    </svg>
  );
}

const contactLinks = [
  {
    href: site.phoneHref,
    icon: Phone,
    label: "Call us",
    value: site.phone,
  },
  {
    href: `https://maps.google.com/?q=${site.addressMapQuery}`,
    icon: MapPin,
    label: "Visit us",
    value: site.address,
    external: true,
  },
  {
    href: site.instagramHref,
    icon: InstagramIcon,
    label: "Follow us",
    value: site.instagram,
    external: true,
  },
];

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ program?: string }>;
}) {
  const { program } = await searchParams;
  const selectedPlan = pricingPlans.find((plan) => plan.slug === program);

  return (
    <section className="py-12">
      <Container>
        <SectionHeading
          as="h1"
          className="mb-8"
          kicker="Book a visit"
          title="Let's find the perfect spot for your child"
          description="Book a free tour — we'll usually call you back the same day."
        />

        <Reveal className="mx-auto mb-14 max-w-xl rounded-[28px] border border-line bg-white p-9 shadow-[0_8px_22px_-12px_rgba(61,43,38,0.3)]">
          <EnquiryForm initialProgram={selectedPlan?.name} />
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <ul className="flex flex-col gap-3.5">
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3.5 rounded-2xl bg-white p-4 shadow-[0_8px_22px_-12px_rgba(61,43,38,0.3)] transition-colors duration-200 ease-out hover:bg-cream-2"
                  >
                    <span className="flex size-11.5 shrink-0 items-center justify-center rounded-2xl bg-red-soft text-red">
                      <link.icon className="size-5.5" />
                    </span>
                    <span>
                      <small className="block text-[0.72rem] font-extrabold tracking-[0.12em] text-ink-soft uppercase">
                        {link.label}
                      </small>
                      <span className="font-bold text-ink">{link.value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal>
            <div className="overflow-hidden rounded-3xl border-[6px] border-white bg-white shadow-[0_30px_60px_-24px_rgba(61,43,38,0.34)]">
              <iframe
                title="Little Britain Daycare location"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(site.address)}&z=16&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-[340px] w-full border-0"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
