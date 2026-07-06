import type { Metadata } from "next";

import { GalleryGrid } from "@/components/gallery-grid";
import { Reveal } from "@/components/reveal";
import { Container, SectionHeading } from "@/components/section-heading";
import { galleryPhotos } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Take a peek inside Little Britain Daycare — our reading corner, play lounge, and facilities in Tashkent.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeading
          kicker="A peek inside"
          title="Come and see us in action"
        />
        <Reveal stagger>
          <GalleryGrid photos={galleryPhotos} />
        </Reveal>
      </Container>
    </section>
  );
}
