"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.25, 0.1, 0.25, 1];

export default function BlockSix({ t = {}, locale = "en" }) {
  const base = `/${locale}`;
  const portrait = "https://res.cloudinary.com/da6il8qmv/image/upload/v1760547083/pic_pbou4c.png";
  const logo     = "https://res.cloudinary.com/da6il8qmv/image/upload/v1744040315/logo-wale_b8vyuk.png";
  const bullets  = t.bullets ?? [
    "Skin-first techniques for seamless, luminous finishes.",
    "Timeless bridal to bold editorial — always modern and refined.",
    "Hygiene-first kit with high-performance products.",
  ];

  return (
    <section
      id="about"
      className="w-full overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #EDE4D8 0%, #F3EDE4 55%, #FAF7F2 100%)",
      }}
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-20 md:py-28">
        <div className="grid md:grid-cols-2 items-center gap-12 md:gap-16">

          {/* ── Portrait column ─────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.85, ease }}
            className="relative flex flex-col items-center"
          >
            {/*  overflow-hidden here clips the floating circles so they
                 never bleed outside the column on mobile */}
            <div
              className="relative overflow-hidden"
              style={{ width: "min(420px, 100%)", paddingBottom: "min(420px, 100%)" }}
            >
              {/* Absolute-fill wrapper so padding-bottom trick works */}
              <div className="absolute inset-0">
                {/* Floating decorative orbs — clipped to column */}
                <FloatingCircle size={150} x={-40} y={-28} delay={0.0} opacity={0.30} />
                <FloatingCircle size={84}  x={-60} y={82}  delay={0.7} opacity={0.25} />
                <FloatingCircle size={56}  x={0}   y={310} delay={1.3} opacity={0.28} />
                <FloatingCircle size={200} x={240} y={-60} delay={0.4} opacity={0.15} />
                <FloatingCircle size={46}  x={330} y={295} delay={1.0} opacity={0.22} />

                {/* Portrait circle */}
                <div
                  className="absolute z-10 rounded-full overflow-hidden shadow-[0_20px_60px_rgba(42,31,20,0.15)]"
                  style={{ inset: 0 }}
                >
                  <Image
                    src={portrait}
                    alt="Waleska, makeup artist"
                    fill
                    priority
                    sizes="(min-width:1024px) 420px, 70vw"
                    className="object-cover object-center select-none pointer-events-none"
                  />
                </div>
              </div>
            </div>

            {/* Logo under portrait */}
            <div className="mt-7 flex justify-center w-full">
              <Image
                src={logo}
                alt="Waleska logo"
                width={240}
                height={84}
                className="h-auto w-[180px] md:w-[230px] object-contain opacity-88"
                priority
              />
            </div>
          </motion.div>

          {/* ── Text column ─────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.85, ease, delay: 0.1 }}
          >
            <span className="flex items-center gap-3 mb-6">
              <span className="block h-px w-8 bg-[#B8956A]/60" />
              <span className="text-[12px] tracking-[0.14em] uppercase font-body text-[#B8956A]">
                {t.eyebrow ?? "About"}
              </span>
            </span>

            <h2 className="font-display font-semibold text-[#2A1F14] text-[clamp(2.2rem,4vw,3rem)] leading-[1.1]">
              {t.heading ?? "About Waleska"}
            </h2>

            <p className="mt-6 font-body text-[15px] leading-[1.85] text-[#2A1F14]/65">{t.p1}</p>
            <p className="mt-4 font-body text-[15px] leading-[1.85] text-[#2A1F14]/65">{t.p2}</p>

            <ul className="mt-8 space-y-4">
              {bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-[9px] shrink-0 h-px w-6 bg-[#B8956A]" />
                  <span className="font-body text-[15px] leading-relaxed text-[#2A1F14]/75">{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={`${base}#services`}
                className="
                  rounded-full px-6 py-3 font-body text-[13.5px] tracking-[0.04em] uppercase
                  border border-[#2A1F14]/20 text-[#2A1F14]/70
                  hover:border-[#B8956A]/60 hover:text-[#B8956A]
                  transition-all duration-300
                "
              >
                {t.btn_services ?? "View services"}
              </a>
              <a
                href={`${base}#contact`}
                className="
                  rounded-full px-6 py-3 font-body text-[13.5px] tracking-[0.04em] uppercase
                  bg-[#2A1F14] text-[#FAF7F2]
                  hover:bg-[#3D2E1E] transition-colors duration-300
                  shadow-[0_8px_20px_rgba(42,31,20,0.16)]
                "
              >
                {t.btn_book ?? "Book now"}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* Floating decorative orb */
function FloatingCircle({ size = 120, x = 0, y = 0, delay = 0, opacity = 0.3 }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity, y: [0, -10, 0, 10, 0] }}
      transition={{ duration: 7, ease: "easeInOut", repeat: Infinity, delay, opacity: { duration: 1 } }}
      className="absolute rounded-full"
      style={{
        width: size, height: size, left: x, top: y,
        background:
          "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.82), rgba(255,255,255,0.48) 45%, rgba(232,213,183,0.38) 100%)",
        boxShadow: "0 8px 28px rgba(0,0,0,0.055)",
      }}
    />
  );
}
