"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.25, 0.1, 0.25, 1];

const IMAGES = [
  "https://res.cloudinary.com/da6il8qmv/image/upload/v1760529905/marylizr_very_beautiful_model_wearing_light_makeup_and_getting__3300de8e-e676-4f79-a06c-0ff16b53f02d_qzexqa.png",
  "https://res.cloudinary.com/da6il8qmv/image/upload/v1760529905/marylizr_very_beautiful_model_wearing_light_makeup_and_getting__aa7402f1-a3fa-42a2-93fa-4a2432594dc6_hed9sj.png",
  "https://res.cloudinary.com/da6il8qmv/image/upload/v1760529905/marylizr_very_beautiful_model_wearing_light_makeup_and_getting__43571fa4-a9f3-454f-8111-b8d3c4cd46f3_b4f5ft.png",
  "https://res.cloudinary.com/da6il8qmv/image/upload/v1760529904/marylizr_very_beautiful_model_wearing_light_makeup_and_getting__97d32495-c867-4a9c-b7f6-bc54ab6484af_xvpp6w.png",
];

export default function BlockSeven({ t = {} }) {
  const items = (t.items ?? []).map((item, i) => ({
    ...item,
    img: IMAGES[i],
    dir: i % 2 === 0 ? "img-left" : "img-right",
  }));

  return (
    <section id="services" className="w-full" style={{ background: "#FAF7F2" }}>
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.85, ease }}
        >
          <span className="flex items-center gap-3 mb-5">
            <span className="block h-px w-8 bg-[#B8956A]/60" />
            <span className="text-[12px] tracking-[0.14em] uppercase font-body text-[#B8956A]">
              {t.eyebrow ?? "Services"}
            </span>
          </span>
          <h2 className="font-display font-semibold text-[#2A1F14] text-[clamp(2rem,4vw,3rem)] leading-[1.1]">
            {t.heading ?? "Services Offered"}
          </h2>
        </motion.div>

        <div className="mt-12 md:mt-16 space-y-14 md:space-y-20">
          {items.map((it, idx) => (
            <ServiceRow key={idx} {...it} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceRow({ title, desc, img, dir = "img-left", index = 0 }) {
  const isLeft = dir === "img-left";

  return (
    <div className="relative">
      {/* Background pill — desktop only */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, x: isLeft ? 24 : -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease, delay: 0.05 }}
        className="hidden md:block absolute inset-y-3 z-0 rounded-[36px]"
        style={{
          left:       isLeft ? "20%" : "0",
          right:      isLeft ? "0" : "20%",
          background: "rgba(237,228,216,0.68)",
        }}
      />

      <div className="relative z-10 md:flex md:items-center md:gap-10">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.75, ease }}
          className={`w-full md:w-[44%] ${isLeft ? "md:order-1" : "md:order-2"}`}
        >
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_16px_48px_rgba(42,31,20,0.12)] group">
            <Image
              src={img}
              alt={title}
              fill
              sizes="(min-width:1024px) 480px, 100vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
              priority={index === 0}
            />
          </div>
        </motion.div>

        {/* Text — desktop */}
        <motion.div
          initial={{ opacity: 0, x: isLeft ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.75, ease, delay: 0.1 }}
          className={`hidden md:block w-full md:w-[56%] ${isLeft ? "md:order-2" : "md:order-1"}`}
        >
          <div className={`px-8 py-10 ${isLeft ? "pl-10" : "pr-10"}`}>
            <h3 className="font-display font-semibold text-[#2A1F14] text-[1.6rem] leading-snug">
              {title}
            </h3>
            <p className="mt-4 font-body text-[15px] leading-[1.85] text-[#2A1F14]/65 max-w-[50ch]">
              {desc}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Text — mobile card below image */}
      <div className="md:hidden mt-4">
        <div className="rounded-2xl p-5" style={{ background: "rgba(237,228,216,0.72)" }}>
          <h3 className="font-display font-semibold text-[#2A1F14] text-[1.25rem]">{title}</h3>
          <p className="mt-2 font-body text-[14.5px] leading-relaxed text-[#2A1F14]/65">{desc}</p>
        </div>
      </div>
    </div>
  );
}
