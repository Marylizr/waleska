"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.25, 0.1, 0.25, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.82, ease } },
};
const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.13 } },
};

export default function BlockTwo({ t = {} }) {
  return (
    <section
      id="subtle-art"
      className="relative py-16 md:py-20 lg:py-28 overflow-hidden"
      style={{
        background: "linear-gradient(105deg, #EDE4D8 0%, #F3EDE4 40%, rgba(250,247,242,0) 80%)",
      }}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.85, ease }}
            className="lg:col-span-6"
          >
            <div className="relative w-full rounded-2xl overflow-hidden shadow-[0_24px_64px_rgba(42,31,20,0.10)]">
              <Image
                src="/images/waleska/galery-2.png"
                alt="Subtle beauty makeup portrait"
                width={1200}
                height={820}
                sizes="(min-width:1280px) 50vw, (min-width:1024px) 50vw, 100vw"
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="lg:col-span-6"
          >
            <motion.span variants={fadeUp} className="flex items-center gap-3 mb-5">
              <span className="block h-px w-8 bg-[#B8956A]/60" />
              <span className="text-[12px] tracking-[0.14em] uppercase font-body text-[#B8956A]">
                {t.eyebrow ?? "The Art of Beauty"}
              </span>
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="font-display font-semibold text-[#2A1F14] leading-[1.1] text-[clamp(2rem,4vw,2.9rem)]"
            >
              {t.heading ?? "The Subtle Art of Elevating Women's Beauty Through Makeup"}
            </motion.h2>

            <motion.div
              variants={stagger}
              className="mt-7 space-y-5 font-body text-[15px] leading-[1.85] text-[#2A1F14]/65 max-w-[58ch]"
            >
              {[t.p1, t.p2, t.p3].map((p, i) => (
                <motion.p key={i} variants={fadeUp}>{p}</motion.p>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
