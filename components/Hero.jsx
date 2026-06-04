"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.25, 0.1, 0.25, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
};

export default function Hero({ t = {}, locale = "en" }) {
  const base = `/${locale}`;

  return (
    <section
      id="hero"
      aria-label="Intro section"
      className="relative pt-8 md:pt-14 lg:pt-16 pb-16 md:pb-20 overflow-hidden"
      style={{
        background:
          "linear-gradient(115deg, rgba(232,213,183,0.28) 0%, rgba(250,247,242,0.9) 50%, transparent 100%)",
      }}
    >
      {/* Decorative background orb */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle at 40% 40%, #E8D5B7 0%, transparent 70%)",
        }}
      />

      <div className="container relative">
        {/* Eyebrow */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex items-center gap-3 mb-5"
        >
          <span className="block h-px w-8 bg-[#B8956A]/60" />
          <span className="text-[13px] tracking-[0.14em] uppercase font-body text-[#B8956A]">
            {t.eyebrow ?? "Makeup Artist"}
          </span>
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Text column */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="lg:col-span-7"
          >
            <motion.p
              variants={fadeUp}
              className="font-display text-[#7A6135] font-light text-[clamp(1.1rem,2.2vw,1.4rem)] italic mb-3"
            >
              {t.subtitle ?? "Hi, I'm Waleska — and I invite you to"}
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="font-display font-semibold text-[#2A1F14] leading-[1.08] text-[clamp(2.8rem,7vw,5rem)]"
            >
              {t.headline ?? "Elevate your"}{" "}
              <em className="italic text-[#B8956A]">{t.headline_accent ?? "Beauty"}</em>
            </motion.h1>

            <motion.div
              variants={fadeUp}
              className="mt-7 space-y-4 font-body text-[15px] leading-[1.8] text-[#2A1F14]/65 max-w-[58ch]"
            >
              <p>{t.p1}</p>
              <p>{t.p2}</p>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-9 flex gap-4 flex-wrap">
              <Link
                href={`${base}#contact`}
                className="
                  inline-flex items-center gap-2.5
                  rounded-full px-8 py-4
                  bg-[#2A1F14] text-[#FAF7F2]
                  font-body text-[13.5px] tracking-[0.06em] uppercase
                  hover:bg-[#3D2E1E] transition-colors duration-300
                  shadow-[0_8px_24px_rgba(42,31,20,0.18)]
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
                  rounded-full px-8 py-4
                  border border-[#2A1F14]/20
                  text-[#2A1F14]/80
                  font-body text-[13.5px] tracking-[0.06em] uppercase
                  hover:border-[#B8956A]/50 hover:text-[#B8956A]
                  transition-all duration-300
                "
              >
                {t.cta_secondary ?? "About me"}
              </Link>
            </motion.div>
          </motion.div>

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: 24, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease, delay: 0.2 }}
            className="lg:col-span-5 flex items-end justify-center lg:justify-end"
          >
            <div className="relative">
              <div
                aria-hidden
                className="absolute inset-0 -m-6 rounded-full opacity-40 pointer-events-none"
                style={{ background: "radial-gradient(circle, #E8D5B7 0%, transparent 70%)" }}
              />
              <Image
                src="https://res.cloudinary.com/da6il8qmv/image/upload/v1760529913/Group_oyxuju.png"
                alt="Beauty portrait"
                width={900}
                height={900}
                priority
                sizes="(min-width:1280px) 520px, (min-width:1024px) 460px, 88vw"
                className="relative z-10 w-[min(100%,580px)] h-auto drop-shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="divider mt-16 mx-auto max-w-4xl" />
    </section>
  );
}
