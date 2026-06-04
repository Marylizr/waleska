"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.25, 0.1, 0.25, 1];

// ─── Orbital items ────────────────────────────────────────────────────────────
// startAngle: degrees from east (right), going clockwise.  0° = right, 90° = bottom, 270° = top
// ccw: item travels counter-clockwise (adds visual variety)
const ITEMS = [
  {
    src:   "https://res.cloudinary.com/da6il8qmv/image/upload/v1760529913/swatches_ndobqw.png",
    alt:   "Color palette",
    size:  130, radius: 204, dur: 22, startAngle: 270,          // top
  },
  {
    src:   "https://res.cloudinary.com/da6il8qmv/image/upload/v1760529909/lips2_umfpqg.png",
    alt:   "Lipstick splash",
    size:  132, radius: 252, dur: 28, startAngle: 188, ccw: true, // left (CCW)
  },
  {
    src:   "https://res.cloudinary.com/da6il8qmv/image/upload/v1760529911/brush_wxbmfn.png",
    alt:   "Brush set",
    size:  150, radius: 250, dur: 20, startAngle: 8,             // right
  },
  {
    src:   "https://res.cloudinary.com/da6il8qmv/image/upload/v1760529910/swatches_nude_shbspo.png",
    alt:   "Nude swatches",
    size:  162, radius: 197, dur: 18, startAngle: 222, ccw: true, // bottom-left (CCW)
  },
  {
    src:   "https://res.cloudinary.com/da6il8qmv/image/upload/v1760529911/lips_ysgugp.png",
    alt:   "Lipstick tube",
    size:  114, radius: 164, dur: 24, startAngle: 93,            // bottom
  },
];

// Decorative ring radii (pure visual circles)
const RINGS = [160, 202, 252];

/**
 * Compute CSS animation-delay so the item starts at the correct angle.
 *
 * CW items:  delay = -(startAngle / 360) × dur
 * CCW items: delay = -((360 − startAngle) / 360) × dur
 *
 * A negative delay pre-advances the animation, placing the item at startAngle
 * when the page first renders.
 */
function delay(startAngle, dur, ccw) {
  return ccw
    ? -(((360 - startAngle) / 360) * dur)
    : -((startAngle / 360) * dur);
}

/** Shared CSS animation properties applied to both arm and counter-image */
function animStyle(name, dur, d) {
  return {
    animationName:            name,
    animationDuration:        `${dur}s`,
    animationTimingFunction:  "linear",
    animationIterationCount:  "infinite",
    animationDelay:           `${d}s`,
    animationFillMode:        "both",
  };
}

// ─── Mobile fade-up variants ────────────────────────────────────────────────
const fadeUp = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

// ─── Component ──────────────────────────────────────────────────────────────
export default function BlockThree({ t = {}, locale = "en" }) {
  const base     = `/${locale}`;
  const headLine1 = t.heading_line1 ?? "Premium-quality products, for";
  const headLine2 = t.heading_line2 ?? "flawless, long lasting results";
  const cta       = t.cta           ?? "Book Your Makeup Session Today";

  return (
    <section
      id="premium-products"
      className="relative overflow-hidden"
      style={{ background: "#F3EDE4" }}
    >

      {/* ═══════════════════════════════════════════════
          MOBILE / TABLET  (< lg)  — clean stacked grid
          ═══════════════════════════════════════════════ */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="lg:hidden container py-12 space-y-6"
      >
        {/* Palette top */}
        <motion.div variants={fadeUp} className="flex justify-center pt-2">
          <Image
            src={ITEMS[0].src} alt={ITEMS[0].alt}
            width={800} height={800} sizes="60vw"
            className="w-[52%] max-w-[230px] h-auto"
          />
        </motion.div>

        {/* Heading + brushes side-by-side */}
        <div className="grid grid-cols-2 items-center gap-3 px-2">
          <motion.h3
            variants={fadeUp}
            className="col-span-1 font-display font-semibold text-[#2A1F14] leading-[1.18] text-[clamp(1.2rem,5vw,1.55rem)]"
          >
            {headLine1}<br />{headLine2}
          </motion.h3>
          <motion.div variants={fadeUp} className="col-span-1 flex justify-center">
            <Image src={ITEMS[2].src} alt={ITEMS[2].alt}
              width={700} height={700} sizes="45vw"
              className="w-[72%] max-w-[200px] h-auto"
            />
          </motion.div>
        </div>

        {/* Lipstick splash */}
        <motion.div variants={fadeUp} className="flex justify-center">
          <Image src={ITEMS[1].src} alt={ITEMS[1].alt}
            width={650} height={650} sizes="60vw"
            className="w-[56%] max-w-[220px] h-auto"
          />
        </motion.div>

        {/* CTA */}
        <motion.div variants={fadeUp} className="text-center pb-4">
          <Link
            href={`${base}#contact`}
            className="font-display font-semibold text-[#B8956A] leading-[1.15] text-[clamp(1.5rem,7.5vw,2.1rem)] hover:opacity-75 transition-opacity"
          >
            {cta}
          </Link>
        </motion.div>
      </motion.div>


      {/* ═══════════════════════════════════════════════
          DESKTOP  (≥ lg)  —  ORBIT SYSTEM
          ═══════════════════════════════════════════════ */}
      <div className="hidden lg:flex items-center justify-center py-14 xl:py-16">

        {/*
          580 × 580 px orbit plane.
          Everything is positioned relative to this square,
          with the orbital centre at exactly (50%, 50%).
        */}
        <div className="relative" style={{ width: 580, height: 580 }}>

          {/* ── Decorative ring circles ───────────────── */}
          {RINGS.map((r) => (
            <div
              key={r}
              className="absolute rounded-full pointer-events-none"
              style={{
                width:      r * 2,
                height:     r * 2,
                left:       "50%",
                top:        "50%",
                marginLeft: -r,
                marginTop:  -r,
                border:     "1px solid rgba(184,149,106,0.16)",
              }}
            />
          ))}

          {/* ── Orbiting makeup items ─────────────────── */}
          {ITEMS.map(({ src, alt, size, radius, dur, startAngle, ccw = false }) => {
            const d        = delay(startAngle, dur, ccw);
            const armAnim  = ccw ? "orbit-ccw" : "orbit-cw";
            const imgAnim  = ccw ? "orbit-cw"  : "orbit-ccw";

            return (
              /*
                ARM — zero-size div at the orbital centre.
                CSS rotates it → the offset child sweeps a circle.
              */
              <div
                key={alt}
                className="absolute pointer-events-none"
                style={{
                  left:   "50%",
                  top:    "50%",
                  width:  0,
                  height: 0,
                  ...animStyle(armAnim, dur, d),
                }}
              >
                {/*
                  ITEM — offset `radius` px from the arm's origin,
                  counter-rotated so the image always faces forward.
                */}
                <div
                  className="absolute"
                  style={{
                    left:       radius,
                    top:        0,
                    width:      size,
                    height:     size,
                    marginLeft: -(size / 2),
                    marginTop:  -(size / 2),
                    ...animStyle(imgAnim, dur, d),
                  }}
                >
                  <Image
                    src={src}
                    alt={alt}
                    width={size}
                    height={size}
                    className="object-contain select-none"
                    style={{ filter: "drop-shadow(0 4px 14px rgba(42,31,20,0.13))" }}
                    sizes={`${size}px`}
                  />
                </div>
              </div>
            );
          })}

          {/* ── Central content pill ─────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            style={{ width: 232 }}
          >
            <div
              className="rounded-[52px] text-center px-7 py-9"
              style={{
                background:           "rgba(250,247,242,0.92)",
                boxShadow:            "0 8px 48px rgba(42,31,20,0.10), 0 0 0 1px rgba(184,149,106,0.12)",
                backdropFilter:       "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
            >
              <h3 className="font-display font-semibold text-[#2A1F14] leading-[1.22] text-[1.32rem]">
                {headLine1}
                <br />
                {headLine2}
              </h3>

              <div className="mt-5 h-px w-10 mx-auto bg-[#B8956A]/40" />

              <Link
                href={`${base}#contact`}
                className="group relative inline-block mt-4 font-body text-[0.85rem] tracking-[0.05em] text-[#B8956A]"
              >
                <span>{cta}</span>
                <span className="absolute left-0 bottom-0 h-px w-full origin-left scale-x-0 bg-[#B8956A]/60 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </div>
          </motion.div>

        </div>{/* /orbit plane */}
      </div>{/* /desktop wrapper */}

    </section>
  );
}
