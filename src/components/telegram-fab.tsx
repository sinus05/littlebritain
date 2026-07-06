"use client";

import { motion } from "motion/react";

import { site } from "@/lib/site-config";

export function TelegramFab() {
  return (
    <motion.a
      href={site.telegramHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message us on Telegram"
      initial={{ opacity: 0, y: 16, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.5, ease: [0.34, 1.2, 0.64, 1] }}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.96 }}
      className="fixed right-5 bottom-5 z-50 flex items-center gap-2.5 rounded-full bg-[#229ED9] py-3 pr-4.5 pl-3.5 font-heading font-semibold text-white shadow-[0_14px_30px_-8px_rgba(34,158,217,0.55)]"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-6 shrink-0">
        <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
      </svg>
      <span className="hidden text-[0.98rem] sm:inline">Message us</span>
    </motion.a>
  );
}
