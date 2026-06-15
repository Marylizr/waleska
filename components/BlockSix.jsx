"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.25, 0.1, 0.25, 1];

export default function BlockSix({ t = {}, locale = "en" }) {
  const stats = [
    { value: "10+", label: "Years Experience", icon: "crown" },
    { value: "500+", label: "Happy Clients", icon: "heart" },
    { value: "100%", label: "Dedication", icon: "star" },
  ];

  return (
    <section
      id="about"
      className="w-full overflow-hidden bg-[#f6efe6]"
    >
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 md:grid-cols-[0.42fr_0.58fr]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease }}
          className="relative min-h-[360px] md:min-h-[330px]"
        >
          <Image
            src="/images/waleska/waleska.png"
            alt="Waleska holding makeup brushes"
            fill
            sizes="(min-width:768px) 42vw, 100vw"
            className="object-cover object-[50%_27%]"
            priority
          />
          <div className="absolute inset-y-0 right-0 hidden w-28 bg-gradient-to-r from-transparent to-[#f6efe6] md:block" />
        </motion.div>

        <div className="relative flex items-center px-6 py-12 md:px-16 md:py-10 lg:px-20">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease, delay: 0.08 }}
            className="w-full max-w-[650px]"
          >
            <span className="font-body text-[11px] font-bold uppercase tracking-[0.18em] text-[#b18421]">
              {t.eyebrow ?? "About Me"}
            </span>

            <h2 className="mt-3 font-display text-[clamp(2rem,3vw,3rem)] font-medium leading-[1.05] text-[#171411]">
              Passion. Art. Perfection.
            </h2>

            <div className="mt-4 flex items-center gap-3">
              <span className="h-px w-28 bg-[#b18421]/55" />
              <span className="font-display text-lg leading-none text-[#b18421]">w</span>
            </div>

            <p className="mt-5 max-w-[540px] font-body text-[14px] leading-[1.75] text-[#28231d]/78">
              With years of experience in the beauty industry, I&apos;m dedicated to creating looks that highlight your unique beauty and make you feel the best version of yourself.
            </p>

            <div className="mt-9 grid max-w-[640px] grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-0">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-4 sm:justify-center sm:px-7"
                  style={{
                    borderLeft: index === 0 ? "0" : "1px solid rgba(177,132,33,0.22)",
                  }}
                >
                  <StatIcon type={stat.icon} />
                  <div>
                    <div className="font-display text-[clamp(1.65rem,2.3vw,2.25rem)] leading-none text-[#171411]">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-[12px] leading-tight text-[#28231d]/75">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatIcon({ type }) {
  const common = {
    stroke: "#b18421",
    strokeWidth: 1.55,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
  };

  return (
    <svg aria-hidden width="34" height="34" viewBox="0 0 24 24" className="shrink-0" {...common}>
      {type === "heart" ? (
        <path d="M20.8 8.6c0 5.3-8.8 10-8.8 10s-8.8-4.7-8.8-10A4.8 4.8 0 0 1 12 5.2a4.8 4.8 0 0 1 8.8 3.4z" />
      ) : type === "star" ? (
        <path d="M12 3l2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3z" />
      ) : (
        <>
          <path d="M5 20h14" />
          <path d="M7 17l-2-8 4.3 3.2L12 5l2.7 7.2L19 9l-2 8H7z" />
        </>
      )}
    </svg>
  );
}
