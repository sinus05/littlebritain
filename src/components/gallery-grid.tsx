"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";

import { RevealItem } from "@/components/reveal";
import type { galleryPhotos } from "@/lib/site-config";

type Photo = (typeof galleryPhotos)[number];

export function GalleryGrid({ photos }: { photos: readonly Photo[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const close = () => {
    setOpenIndex((current) => {
      if (current !== null) triggerRefs.current[current]?.focus();
      return null;
    });
  };

  useEffect(() => {
    if (openIndex === null) return;
    closeButtonRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
      } else if (e.key === "Tab") {
        // only the close button is focusable inside the dialog, so trap focus on it
        e.preventDefault();
        closeButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex]);

  const active = openIndex !== null ? photos[openIndex] : null;

  return (
    <>
      <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
        {photos.map((photo, i) => (
          <RevealItem
            key={photo.src}
            className="overflow-hidden rounded-[22px] bg-white shadow-[0_8px_22px_-12px_rgba(61,43,38,0.3)] transition-transform hover:-translate-y-1.5"
          >
            <button
              ref={(el) => {
                triggerRefs.current[i] = el;
              }}
              type="button"
              onClick={() => setOpenIndex(i)}
              aria-label={`Open larger photo: ${photo.caption}`}
              className="block w-full cursor-pointer border-0 bg-transparent p-0 text-left"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes="(max-width: 640px) 100vw, 600px"
                className="h-[230px] w-full object-cover"
              />
              <span className="block p-4 font-heading font-bold text-ink">
                {photo.caption}
              </span>
            </button>
          </RevealItem>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={active.caption}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-[#140e0c]/88 p-6"
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={close}
              aria-label="Close photo"
              className="absolute top-4.5 right-5.5 flex size-11 items-center justify-center rounded-full bg-white/15 text-white"
            >
              <X className="size-5.5" />
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              src={active.src}
              alt={active.alt}
              className="max-h-[88vh] max-w-[min(900px,92vw)] rounded-2xl shadow-[0_30px_60px_-24px_rgba(61,43,38,0.34)]"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
