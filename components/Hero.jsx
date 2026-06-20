"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.25, 0.1, 0.25, 1];
const HERO_IMAGE = "/images/waleska/bride1-cutout.png";

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

  const headline = t.headline ?? "Enhancing your beauty, elevating your confidence";
  const headlineAccent = t.headline_accent ?? (locale === "es" ? "confianza" : "confidence");
  const headlineParts = headline.split(headlineAccent);
  const benefits = [
    {
      title: t.benefit1 ?? "Luxury Experience",
      desc: t.benefit1_desc ?? "Premium products and exclusive service",
      icon: "crown",
    },
    {
      title: t.benefit2 ?? "Personalized Look",
      desc: t.benefit2_desc ?? "Tailored to enhance your natural beauty",
      icon: "brush",
    },
    {
      title: t.benefit3 ?? "Professional Quality",
      desc: t.benefit3_desc ?? "High-end makeup for lasting results",
      icon: "shield",
    },
  ];

  return (
    <section
      id="hero"
      aria-label="Intro section"
      className="relative overflow-hidden bg-[#f6f1e9]"
      style={{
        minHeight: "calc(100vh - 72px)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(246,241,233,0.98) 0%, rgba(246,241,233,0.94) 41%, rgba(246,241,233,0.58) 63%, rgba(246,241,233,0.20) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[64%] opacity-70 lg:block"
        style={{
          background:
            "radial-gradient(ellipse at 38% 11%, rgba(255,255,255,0.72) 0 17%, transparent 18%), radial-gradient(ellipse at 55% 28%, rgba(226,214,199,0.42) 0 20%, transparent 21%), radial-gradient(ellipse at 48% 50%, rgba(255,255,255,0.54) 0 19%, transparent 20%), radial-gradient(ellipse at 60% 72%, rgba(226,214,199,0.34) 0 22%, transparent 23%)",
          filter: "blur(0.4px)",
          transform: "skewX(-10deg)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[25%] top-0 hidden h-full w-[260px] opacity-60 lg:block"
        style={{
          background:
            "linear-gradient(112deg, transparent 0 18%, rgba(255,255,255,0.42) 19% 37%, transparent 38% 54%, rgba(255,255,255,0.32) 55% 72%, transparent 73% 100%)",
          clipPath: "polygon(42% 0, 100% 0, 58% 100%, 0 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-8 hidden h-[520px] w-[360px] opacity-[0.16] blur-[1px] md:block"
        style={{
          background:
            "radial-gradient(ellipse at 80% 12%, transparent 0 32%, #8f7140 33% 34%, transparent 35%), radial-gradient(ellipse at 55% 30%, transparent 0 34%, #8f7140 35% 36%, transparent 37%), radial-gradient(ellipse at 70% 52%, transparent 0 36%, #8f7140 37% 38%, transparent 39%)",
          transform: "rotate(-24deg)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-[33%] hidden h-full w-[220px] opacity-35 lg:block"
        style={{
          background:
            "linear-gradient(120deg, transparent 0 31%, rgba(255,255,255,0.55) 32% 45%, transparent 46% 100%)",
          clipPath: "polygon(40% 0, 100% 0, 58% 100%, 0 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-[62%] w-[72%] bg-[radial-gradient(ellipse_at_70%_100%,rgba(186,147,55,0.10),transparent_62%)]"
      />

      <motion.div
        initial={{ opacity: 0, x: 22 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease, delay: 0.08 }}
        className="pointer-events-none absolute right-[-4.75rem] top-7 z-10 block w-[72vw] max-w-[355px] sm:right-[-2rem] sm:top-5 sm:w-[58vw] md:right-[2vw] md:w-[46vw] lg:hidden"
      >
        <Image
          src={HERO_IMAGE}
          alt="Bride with elegant professional makeup"
          width={928}
          height={1152}
          priority
          sizes="(max-width:639px) 72vw, (max-width:1023px) 46vw"
          className="h-auto w-full object-contain object-top drop-shadow-[0_18px_38px_rgba(42,31,20,0.18)]"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 28 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease, delay: 0.08 }}
        className="absolute bottom-0 right-[-2vw] top-auto z-10 hidden w-[56vw] max-w-[690px] lg:block xl:right-[2vw]"
      >
        <Image
          src={HERO_IMAGE}
          alt="Bride with elegant professional makeup"
          width={928}
          height={1152}
          priority
          sizes="(min-width:1280px) 660px, 56vw"
          className="h-auto w-full object-contain object-bottom drop-shadow-[0_26px_55px_rgba(42,31,20,0.20)]"
        />
      </motion.div>

      <div className="container relative z-20">
        <div className="grid min-h-[calc(100svh-72px)] grid-cols-1 items-start pt-9 pb-10 lg:min-h-[calc(100vh-72px)] lg:grid-cols-[minmax(0,0.48fr)_minmax(0,0.52fr)] lg:items-center lg:pt-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="relative z-20 max-w-[560px]"
          >
            <motion.div variants={fadeUp} className="mb-6">
              <span className="font-body text-[12px] font-semibold uppercase tracking-[0.18em] text-[#b18421]">
                {t.eyebrow ?? "Professional Makeup Artist"}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="max-w-[12ch] font-display text-[2.3rem] font-semibold leading-[1.05] text-[#191613] sm:max-w-[13ch] sm:text-[clamp(3.35rem,9vw,4.75rem)] lg:max-w-none lg:text-[clamp(3rem,5.8vw,5.05rem)] lg:leading-[1.08]"
            >
              {headlineParts[0]}
              {headlineParts.length > 1 && (
                <span className="text-[#b18421]">{headlineAccent}</span>
              )}
              {headlineParts[1]}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-[26ch] font-body text-[15px] leading-[1.75] text-[#3b332a]/82 sm:max-w-[34ch] md:text-[16px] lg:mt-7 lg:max-w-[43ch] lg:text-[#3b332a]/76"
            >
              {t.p1 ?? "Specializing in luxury makeup for special occasions, photoshoots, and unforgettable moments."}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              <Link
                href={`${base}#contact`}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[5px] bg-[#b18421] px-6 py-3 font-body text-[13px] font-bold text-white shadow-[0_12px_28px_rgba(177,132,33,0.28)] transition-colors duration-300 hover:bg-[#9e741b]"
              >
                <CalendarIcon />
                {t.cta_primary ?? "Book Your Appointment"}
              </Link>
              <Link
                href={`${base}#portfolio`}
                className="inline-flex min-h-12 items-center justify-center rounded-[5px] border border-[#b18421]/70 bg-white/42 px-6 py-3 font-body text-[13px] font-semibold text-[#9a741f] transition-colors duration-300 hover:bg-white"
              >
                {t.cta_secondary ?? "View Portfolio"}
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-11 grid max-w-[560px] grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-0"
            >
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="text-center sm:px-5"
                  style={{
                    borderLeft: index === 0 ? "0" : "1px solid rgba(177,132,33,0.18)",
                  }}
                >
                  <BenefitIcon type={benefit.icon} />
                  <h3 className="mt-3 font-display text-[1rem] font-semibold text-[#33291f]">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-[12px] leading-relaxed text-[#3b332a]/68">
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function CalendarIcon() {
  return (
    <svg aria-hidden width="15" height="15" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="5" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M8 3v4M16 3v4M4 10h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function BenefitIcon({ type }) {
  const common = {
    stroke: "#b18421",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
  };

  return (
    <div className="flex justify-center">
      <svg aria-hidden width="34" height="34" viewBox="0 0 24 24" {...common}>
        {type === "brush" ? (
          <>
            <path d="M14 4l6 6" />
            <path d="M13 5.5l5.5 5.5-8.8 8.8a3.9 3.9 0 0 1-5.5-5.5L13 5.5z" />
            <path d="M6.5 17.5l-2.3 2.3" />
          </>
        ) : type === "shield" ? (
          <>
            <path d="M12 3l7 3v5c0 4.7-2.9 8.2-7 10-4.1-1.8-7-5.3-7-10V6l7-3z" />
            <path d="M9 12l2 2 4-5" />
          </>
        ) : (
          <>
            <path d="M12 3l2.2 5 5.3.6-4 3.6 1.1 5.3L12 14.8 7.4 17.5l1.1-5.3-4-3.6 5.3-.6L12 3z" />
            <path d="M7 21h10" />
          </>
        )}
      </svg>
    </div>
  );
}
