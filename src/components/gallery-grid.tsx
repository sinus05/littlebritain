"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";

import { RevealItem } from "@/components/reveal";
import type { galleryPhotos } from "@/lib/site-config";

type Photo = (typeof galleryPhotos)[number];

export function GalleryGrid({ photos }: { photos: readonly Photo[] }) {
  const t = useTranslations("Gallery");
  const tPhotos = useTranslations("GalleryPhotos");
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
  const activeCaption = active ? tPhotos(`${active.id}.caption`) : "";

  return (
    <>
      <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
        {photos.map((photo, i) => {
          const alt = tPhotos(`${photo.id}.alt`);
          const caption = tPhotos(`${photo.id}.caption`);
          return (
            <RevealItem
              key={photo.src}
              className="overflow-hidden rounded-[22px] bg-white shadow-[0_8px_22px_-12px_rgba(61,43,38,0.3)] transition-transform duration-200 ease-out hover:-translate-y-1.5"
            >
              <button
                ref={(el) => {
                  triggerRefs.current[i] = el;
                }}
                type="button"
                onClick={() => setOpenIndex(i)}
                aria-label={t("openLarger", { caption })}
                className="block w-full cursor-pointer border-0 bg-transparent p-0 text-left"
              >
                <Image
                  src={photo.src}
                  alt={alt}
                  width={photo.width}
                  height={photo.height}
                  sizes="(max-width: 640px) 100vw, 600px"
                  className="h-[230px] w-full object-cover"
                />
                <span className="block p-4 font-heading font-bold text-ink">
                  {caption}
                </span>
              </button>
            </RevealItem>
          );
        })}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={activeCaption}
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
              aria-label={t("closePhoto")}
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
              alt={tPhotos(`${active.id}.alt`)}
              className="max-h-[88vh] max-w-[min(900px,92vw)] rounded-2xl shadow-[0_30px_60px_-24px_rgba(61,43,38,0.34)]"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
