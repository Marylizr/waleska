"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.25, 0.1, 0.25, 1];

const parent = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1, y: 0,
    transition: { duration: 0.75, ease, staggerChildren: 0.11 },
  },
};
const child = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
};

export default function BlockThree({ t = {}, locale = "en" }) {
  const base = `/${locale}`;

  // Use full strings — no fragile string-splitting that breaks on Spanish
  const heading    = t.heading_line1 && t.heading_line2
    ? `${t.heading_line1}\n${t.heading_line2}`
    : "Premium-quality products, for\nflawless, long lasting results";
  const [headLine1, headLine2] = heading.split("\n");
  const cta = t.cta ?? "Book Your Makeup Session Today";

  return (
    <section
      id="premium-products"
      className="relative pt-12 md:pt-16 lg:pt-0 pb-16 md:pb-20"
      style={{ background: "#F3EDE4" }}
    >
      <div className="container overflow-x-hidden">

        {/* ── MOBILE / TABLET (< lg) ─────────────────── */}
        <div className="lg:hidden space-y-6">
          {/* Palette */}
          <div className="flex justify-center pt-4">
            <Image
              src="https://res.cloudinary.com/da6il8qmv/image/upload/v1760529913/swatches_ndobqw.png"
              alt="Palette"
              width={800}
              height={800}
              sizes="60vw"
              className="w-[55%] max-w-[240px] h-auto"
            />
          </div>

          {/* Heading + brushes side-by-side */}
          <motion.div
            variants={parent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 items-center gap-3 px-2"
          >
            <motion.h3
              variants={child}
              className="col-span-1 font-display font-semibold text-[#2A1F14] leading-[1.18] text-[clamp(1.2rem,5vw,1.55rem)]"
            >
              {headLine1}
              <br />
              {headLine2}
            </motion.h3>
            <div className="col-span-1 flex justify-center">
              <Image
                src="https://res.cloudinary.com/da6il8qmv/image/upload/v1760529911/brush_wxbmfn.png"
                alt="Brushes"
                width={700}
                height={700}
                sizes="45vw"
                className="w-[72%] max-w-[200px] h-auto"
              />
            </div>
          </motion.div>

          {/* Lipstick splash */}
          <div className="flex justify-center">
            <Image
              src="https://res.cloudinary.com/da6il8qmv/image/upload/v1760529909/lips2_umfpqg.png"
              alt="Lipstick"
              width={650}
              height={650}
              sizes="65vw"
              className="w-[60%] max-w-[240px] h-auto"
            />
          </div>

          {/* CTA link */}
          <div className="px-2 text-center pb-4">
            <Link
              href={`${base}#contact`}
              className="font-display font-semibold text-[#B8956A] leading-[1.15] text-[clamp(1.5rem,7.5vw,2.2rem)] hover:opacity-80 transition-opacity"
            >
              {cta}
            </Link>
          </div>
        </div>

        {/* ── DESKTOP (≥ lg) ─────────────────────────── */}
        <div className="relative mx-auto hidden lg:block w-full max-w-[1200px] lg:h-[820px] xl:h-[860px]">
          {/* Central text overlay */}
          <motion.div
            variants={parent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="absolute z-30 left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 text-center px-4"
            style={{ width: "min(44rem, 90vw)" }}
          >
            <motion.h3
              variants={child}
              className="font-display font-semibold text-[#2A1F14] leading-[1.18] text-[clamp(1.5rem,2.2vw,2rem)]"
            >
              {headLine1}
              <br />
              {headLine2}
            </motion.h3>

            <motion.div variants={child} className="mt-5">
              <Link
                href={`${base}#contact`}
                className="group relative inline-block font-body text-[clamp(0.88rem,1.55vw,1.05rem)] tracking-[0.05em] text-[#B8956A]"
              >
                <span className="relative z-10">{cta}</span>
                <span className="absolute left-0 bottom-0 h-px w-full origin-left scale-x-0 bg-[#B8956A]/65 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Product images — positioned around the central text */}
          <div className="absolute pointer-events-none" style={{ top: "1%",  right: "33%", width: "230px" }}>
            <Image src="https://res.cloudinary.com/da6il8qmv/image/upload/v1760529913/swatches_ndobqw.png"     alt="Color palette" width={800} height={800} className="w-full h-auto" />
          </div>
          <div className="absolute pointer-events-none" style={{ top: "28%", right: "8%",  width: "220px" }}>
            <Image src="https://res.cloudinary.com/da6il8qmv/image/upload/v1760529911/brush_wxbmfn.png"        alt="Brush set"     width={700} height={700} className="w-full h-auto" />
          </div>
          <div className="absolute pointer-events-none" style={{ top: "54%", left: "8%",   width: "300px" }}>
            <Image src="https://res.cloudinary.com/da6il8qmv/image/upload/v1760529910/swatches_nude_shbspo.png" alt="Nude swatches" width={600} height={400} className="w-full h-auto" />
          </div>
          <div className="absolute pointer-events-none" style={{ top: "22%", left: "7%",   width: "220px" }}>
            <Image src="https://res.cloudinary.com/da6il8qmv/image/upload/v1760529909/lips2_umfpqg.png"        alt="Lipstick"      width={650} height={650} className="w-full h-auto" />
          </div>
          <div className="absolute pointer-events-none" style={{ bottom: "6%", left: "50%", transform: "translateX(-50%)", width: "210px", zIndex: 20 }}>
            <Image src="https://res.cloudinary.com/da6il8qmv/image/upload/v1760529911/lips_ysgugp.png"         alt="Lipstick tube"  width={600} height={600} className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
