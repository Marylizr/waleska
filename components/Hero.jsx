"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.25, 0.1, 0.25, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.85, ease } },
};
const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.14 } },
};

export default function Hero({ t = {}, locale = "en" }) {
  const base = `/${locale}`;

  return (
    <section
      id="hero"
      aria-label="Intro section"
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(120deg, rgba(232,213,183,0.22) 0%, rgba(250,247,242,1) 55%, rgba(250,247,242,1) 100%)",
        minHeight: "min(92vh, 820px)",
      }}
    >
      {/* Soft warm glow top-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full opacity-25"
        style={{ background: "radial-gradient(circle at 40% 40%, #E8D5B7 0%, transparent 65%)" }}
      />

      <div className="container relative h-full">
        {/* ── Two-column layout — text left, big image right ── */}
        <div className="flex flex-col lg:flex-row lg:items-stretch gap-0 min-h-[min(88vh,780px)]">

          {/* ── LEFT: text ─────────────────────────────────── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="flex flex-col justify-center pt-14 pb-12 lg:py-20 lg:w-[52%] lg:pr-10 xl:pr-16"
          >
            {/* Eyebrow */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <span className="block h-px w-8 bg-[#B8956A]/60" />
              <span className="text-[12.5px] tracking-[0.16em] uppercase font-body text-[#B8956A]">
                {t.eyebrow ?? "Makeup Artist"}
              </span>
            </motion.div>

            {/* Subtitle — now font-normal + bigger so it reads clearly */}
            <motion.p
              variants={fadeUp}
              className="font-display font-normal text-[#5B3E1F] italic mb-4 text-[clamp(1.25rem,2.4vw,1.65rem)] leading-[1.4]"
            >
              {t.subtitle ?? "Hi, I'm Waleska — and I invite you to"}
            </motion.p>

            {/* Main headline */}
            <motion.h1
              variants={fadeUp}
              className="font-display font-semibold text-[#2A1F14] leading-[1.05] text-[clamp(3rem,6.5vw,5.2rem)]"
            >
              {t.headline ?? "Elevate your"}{" "}
              <em className="italic text-[#B8956A]">{t.headline_accent ?? "Beauty"}</em>
            </motion.h1>

            {/* Body copy */}
            <motion.div
              variants={fadeUp}
              className="mt-7 space-y-4 font-body text-[15.5px] leading-[1.8] text-[#2A1F14]/60 max-w-[54ch]"
            >
              <p>{t.p1}</p>
              <p>{t.p2}</p>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="mt-10 flex gap-3 flex-wrap">
              <Link
                href={`${base}#contact`}
                className="
                  inline-flex items-center gap-2.5
                  rounded-full px-7 py-3.5
                  bg-[#2A1F14] text-[#FAF7F2]
                  font-body text-[13px] tracking-[0.07em] uppercase
                  hover:bg-[#3D2E1E] transition-colors duration-300
                  shadow-[0_8px_24px_rgba(42,31,20,0.2)]
                "
              >
                {t.cta_primary ?? "Book an appointment"}
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link
                href={`${base}#about`}
                className="
                  inline-flex items-center
                  rounded-full px-7 py-3.5
                  border border-[#2A1F14]/22
                  text-[#2A1F14]/75
                  font-body text-[13px] tracking-[0.07em] uppercase
                  hover:border-[#B8956A]/55 hover:text-[#B8956A]
                  transition-all duration-300
                "
              >
                {t.cta_secondary ?? "About me"}
              </Link>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: big portrait image ───────────────────── */}
          {/* Desktop: fills right 48%, stretches full section height */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.1, ease, delay: 0.15 }}
            className="hidden lg:flex lg:w-[48%] items-end justify-center relative"
          >
            {/* Warm halo behind the image */}
            <div
              aria-hidden
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-[80%] rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at 50% 80%, rgba(232,213,183,0.55) 0%, transparent 68%)",
                filter: "blur(28px)",
              }}
            />
            <Image
              src="https://res.cloudinary.com/da6il8qmv/image/upload/v1760529913/Group_oyxuju.png"
              alt="Waleska, beauty portrait"
              width={900}
              height={900}
              priority
              sizes="(min-width:1280px) 580px, (min-width:1024px) 48vw"
              className="relative z-10 w-full max-w-[640px] h-auto object-contain drop-shadow-2xl"
              style={{ marginBottom: "-2px" }}
            />
          </motion.div>

          {/* Mobile: image sits below text, centred and larger */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.2 }}
            className="lg:hidden flex justify-center pb-4 -mt-4"
          >
            <Image
              src="https://res.cloudinary.com/da6il8qmv/image/upload/v1760529913/Group_oyxuju.png"
              alt="Waleska, beauty portrait"
              width={900}
              height={900}
              priority
              sizes="88vw"
              className="w-[82vw] max-w-[420px] h-auto drop-shadow-xl"
            />
          </motion.div>

        </div>
      </div>

      {/* Bottom divider */}
      <div className="divider" />
    </section>
  );
}
