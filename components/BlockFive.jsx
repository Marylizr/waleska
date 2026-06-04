"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const ease = [0.25, 0.1, 0.25, 1];

const itemAnim = {
  hidden:  { opacity: 0, x: 18 },
  visible: (i) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.65, ease, delay: 0.08 + i * 0.12 },
  }),
};

export default function BlockFive({ t = {}, locale = "en" }) {
  const base  = `/${locale}`;
  const items = t.items ?? [
    { title: "Bridal & Special Events",    desc: "Timeless elegance for your most unforgettable moments." },
    { title: "Editorial & Fashion",         desc: "Bold, artistic, and trendsetting looks for high-end shoots." },
    { title: "Everyday Glam & Soft Beauty", desc: "A luminous, natural glow for any occasion." },
  ];

  return (
    <section className="w-full overflow-hidden" style={{ background: "#FAF7F2" }}>
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-16 md:py-24">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.85, ease }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-flex items-center gap-3 mb-5">
            <span className="block h-px w-8 bg-[#B8956A]/60" />
            <span className="text-[12px] tracking-[0.14em] uppercase font-body text-[#B8956A]">
              {t.eyebrow ?? "Expertise"}
            </span>
            <span className="block h-px w-8 bg-[#B8956A]/60" />
          </span>
          <h2 className="font-display font-semibold text-[#2A1F14] leading-[1.1] text-[clamp(1.9rem,3.8vw,2.8rem)]">
            {t.heading}
          </h2>
        </motion.div>

        {/* Palette + list */}
        <div className="mt-12 md:mt-16 flex flex-col md:flex-row md:items-center md:gap-14 justify-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.75, ease }}
            className="flex justify-center md:basis-[360px] md:shrink-0"
          >
            <Image
              src="https://res.cloudinary.com/da6il8qmv/image/upload/v1760529905/pal_copy_p1jw6t.png"
              alt="Color wheel palette"
              width={400}
              height={400}
              priority
              className="w-[260px] sm:w-[320px] md:w-[360px] h-auto object-contain select-none pointer-events-none"
            />
          </motion.div>

          <div className="w-full md:flex-1 md:max-w-[480px] mt-10 md:mt-0">
            <ul className="space-y-9">
              {items.map((it, i) => (
                <motion.li
                  key={i}
                  custom={i}
                  variants={itemAnim}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  className="flex items-start gap-5"
                >
                  <span className="mt-[9px] shrink-0 h-px w-6 bg-[#B8956A]" />
                  <div>
                    <h3 className="font-display font-semibold text-[#2A1F14] text-[1.22rem] leading-snug">
                      {it.title}
                    </h3>
                    <p className="mt-1 font-body text-[15px] leading-relaxed text-[#2A1F14]/60">
                      {it.desc}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, ease, delay: 0.1 }}
          className="mt-14 flex justify-center"
        >
          <Link
            href={`${base}#contact`}
            className="
              inline-flex items-center gap-2.5
              rounded-full px-8 py-4
              bg-[#2A1F14] text-[#FAF7F2]
              font-body text-[13.5px] tracking-[0.06em] uppercase
              hover:bg-[#3D2E1E] transition-colors duration-300
              shadow-[0_8px_24px_rgba(42,31,20,0.16)]
            "
          >
            {t.cta ?? "Book an appointment today"}
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
