"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.25, 0.1, 0.25, 1];

export default function BlockContact({ t = {} }) {
  const smear = "https://res.cloudinary.com/da6il8qmv/image/upload/v1760529904/shadow_zzrfhk.png";

  return (
    <section id="contact" className="w-full" style={{ background: "#FAF7F2" }}>
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-16 md:py-20 pb-20 md:pb-28">
        <div
          className="relative overflow-hidden rounded-[32px] md:rounded-[48px]"
          style={{
            background: "linear-gradient(135deg, #2A1F14 0%, #3D2E1E 50%, #4A3828 100%)",
          }}
        >
          {/* Smear — desktop (blends left edge) */}
          <div className="hidden md:block absolute inset-y-0 left-0 w-[28%] z-10 pointer-events-none select-none opacity-25 mix-blend-screen">
            <Image src={smear} alt="" fill priority className="object-cover object-left" sizes="28vw" />
          </div>

          {/* Gold glow orb */}
          <div
            aria-hidden
            className="absolute -top-24 -right-24 w-80 h-80 rounded-full pointer-events-none opacity-[0.08]"
            style={{ background: "radial-gradient(circle, #B8956A 0%, transparent 70%)" }}
          />

          {/* Smear — mobile (top strip) */}
          <div className="md:hidden relative w-full h-[160px] pointer-events-none select-none opacity-20">
            <Image src={smear} alt="" fill priority className="object-cover object-top mix-blend-screen" sizes="100vw" />
          </div>

          {/* ── Content ──────────────────────────────── */}
          <div className="relative z-20 px-6 sm:px-8 md:px-10 lg:px-14 pb-12 md:pb-16">

            {/* Two-column grid on desktop, stack on mobile/tablet */}
            <div className="md:grid md:grid-cols-12 md:gap-10 lg:gap-14 items-start">

              {/* Left: heading (desktop col 4–12, starts after smear) */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.75, ease }}
                className="md:col-start-4 md:col-span-9 lg:col-start-5 lg:col-span-8 md:pt-12"
              >
                <span className="flex items-center gap-3 mb-5">
                  <span className="block h-px w-8 bg-[#B8956A]/70" />
                  <span className="text-[12px] tracking-[0.14em] uppercase font-body text-[#B8956A]">
                    {t.eyebrow ?? "Let's connect"}
                  </span>
                </span>
                <h2 className="font-display font-light text-[#FAF7F2] leading-[1.06] text-[clamp(2.4rem,5vw,4rem)]">
                  {t.heading_line1 ?? "Book Your"}<br />
                  <em className="italic text-[#B8956A]">{t.heading_accent ?? "Session"}</em>
                </h2>
              </motion.div>

              {/* Right: body text + CTA + contact (desktop col 5–12) */}
              <div className="md:col-start-5 md:col-span-8 lg:col-start-6 lg:col-span-7 mt-8 md:mt-6">
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease, delay: 0.08 }}
                  className="font-body text-[15px] leading-[1.85] text-[#FAF7F2]/62 max-w-[54ch] pb-6"
                >
                  {t.p}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, ease, delay: 0.14 }}
                >
                  <a
                    href="https://wa.me/56964488186"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      inline-flex items-center gap-3
                      rounded-full px-7 md:px-9 py-3.5 md:py-4
                      bg-[#B8956A] text-[#2A1F14]
                      font-body text-[13px] tracking-[0.07em] uppercase font-medium
                      hover:bg-[#C9A87B] transition-colors duration-300
                      shadow-[0_8px_28px_rgba(184,149,106,0.32)]
                      w-full sm:w-auto justify-center sm:justify-start
                    "
                  >
                    {/* WhatsApp logo */}
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                    </svg>
                    {t.cta ?? "Book an appointment today"}
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease, delay: 0.2 }}
                  className="mt-9 space-y-2.5"
                >
                  <p className="font-display text-[#FAF7F2]/75 text-[1.05rem]">
                    {t.serving ?? "Serving: Santiago de Chile"}
                  </p>
                  <p className="font-display text-[#FAF7F2]/75 text-[1.05rem]">
                    {t.instagram_label ?? "Instagram:"}{" "}
                    <a href="https://instagram.com/lejhanmua" target="_blank" rel="noreferrer"
                       className="text-[#B8956A] underline underline-offset-4 hover:opacity-75 transition-opacity">
                      @lejhanmua
                    </a>
                  </p>
                  <p className="font-display text-[#FAF7F2]/75 text-[1.05rem]">
                    {t.call_label ?? "Call / Text:"}{" "}
                    <a href="tel:+56964488186" className="text-[#B8956A] hover:opacity-75 transition-opacity">
                      +56 9 6448 8186
                    </a>
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
