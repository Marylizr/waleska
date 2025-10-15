"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const itemAnim = {
  hidden: (i) => ({ opacity: 0, x: 28 + i * 6, y: -6 - i * 4, rotate: 0.6 }),
  visible: (i) => ({
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    transition: { duration: 0.55, ease: "easeOut", delay: 0.12 + i * 0.12 },
  }),
};

export default function BlockFive() {
  // Offsets para “abrazar” la curva de la paleta (desktop)
  const curve = [
    { ml: "-0.25rem", ty: "-0.10rem" },
    { ml: "1.25rem",  ty: "0.30rem"  },
    { ml: "3.25rem",  ty: "0.70rem"  },
  ];

  const items = [
    { title: "Bridal & Special Events", desc: "Timeless elegance for your unforgettable moments." },
    { title: "Editorial & Fashion", desc: "Bold, artistic, and trendsetting looks for high-end shoots." },
    { title: "Everyday Glam & Soft Beauty", desc: "A natural glow for any occasion." },
  ];

  return (
    <section  className="scroll-mt-24 w-full bg-white overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-14 md:py-20">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center text-[#4a3b2a] font-semibold leading-tight text-3xl md:text-5xl max-w-4xl mx-auto"
        >
          Always ahead with the latest trends, expert techniques, and flawless
          styles to create stunning, timeless looks.
        </motion.h2>

        {/* Contenido centrado */}
        <div className="mt-10 md:mt-14 flex flex-col md:flex-row md:items-start md:gap-12 justify-center">
          {/* Columna izquierda: paleta (ancho fijo) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="w-full md:basis-[400px] md:shrink-0 flex justify-center"
          >
            <Image
              src="https://res.cloudinary.com/da6il8qmv/image/upload/v1760529905/pal_copy_p1jw6t.png"
              alt="Color wheel palette"
              width={400}
              height={400}
              priority
              className="w-[320px] sm:w-[360px] md:w-[400px] h-auto object-contain select-none pointer-events-none"
            />
          </motion.div>

          {/* Columna derecha: lista alineada y centrada con respecto al conjunto */}
          <div className="w-full md:flex-1 md:max-w-[520px]">
            {/* Desktop: siguiendo curvatura y alineado a un lado */}
            <div className="hidden md:block">
              <ul className="space-y-8 -ml-6 lg:-ml-8">
                {items.map((it, i) => (
                  <motion.li
                    key={it.title}
                    custom={i}
                    variants={itemAnim}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-120px" }}
                    className="flex items-start"
                    style={{
                      marginLeft: curve[i].ml,
                      transform: `translateY(${curve[i].ty})`,
                    }}
                  >
                    <span className="mt-[10px] mr-4 inline-block h-3 w-3 rounded-full bg-[#6c5a45]" />
                    <div>
                      <h3 className="text-[#4a3b2a] font-semibold text-xl leading-snug">
                        {it.title}
                      </h3>
                      <p className="text-[#4a3b2a]/80 leading-relaxed max-w-[44ch]">
                        {it.desc}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Móvil: lista limpia centrada */}
            <div className="md:hidden">
              <ul className="space-y-8">
                {items.map((it, i) => (
                  <motion.li
                    key={it.title}
                    custom={i}
                    variants={itemAnim}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <span className="mt-[10px] mr-3 inline-block h-3 w-3 rounded-full bg-[#6c5a45]" />
                    <div>
                      <h3 className="text-[#4a3b2a] font-semibold text-lg leading-snug">
                        {it.title}
                      </h3>
                      <p className="text-[#4a3b2a]/80 leading-relaxed">{it.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA centrado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.15 }}
          className="mt-12 md:mt-16 flex justify-center"
        >
          <a
            href="#contact"
            className="inline-block rounded-full px-8 md:px-12 py-4 text-white text-lg md:text-xl font-medium shadow-sm"
            style={{ backgroundColor: "#7c6a52" }}
          >
            Book an appointment today!
          </a>
        </motion.div>
      </div>
    </section>
  );
}
