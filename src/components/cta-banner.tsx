import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { Container } from "@/components/section-heading";

export function CtaBanner({
  title,
  description,
  decorative = false,
}: {
  title: string;
  description: string;
  decorative?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-red py-16 text-center text-white">
      {decorative && (
        <>
          <span className="absolute top-[-90px] right-[-60px] size-[280px] rounded-full bg-white/[0.07]" />
          <span className="absolute bottom-[-70px] left-[6%] size-[180px] rounded-full bg-white/[0.06]" />
        </>
      )}
      <Container className="relative">
        <Reveal>
          <h2 className="mb-3.5 text-[clamp(1.9rem,3.6vw,2.6rem)]">{title}</h2>
          <p className="mx-auto mb-7 max-w-xl text-[1.05rem] opacity-90">
            {description}
          </p>
          <Button
            render={<Link href="/contact" />}
            nativeButton={false}
            className="h-auto rounded-full bg-white px-7 py-3.5 font-heading text-base font-semibold text-red shadow-md hover:bg-cream"
          >
            Book a visit
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
