"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function BlockFour() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 25%"] });

  // Parallax muy sutil (solo si el usuario no reduce animaciones)
  const yGirl    = reduce ? 0 : useTransform(scrollYProgress, [0, 1], [10, -10]);
  const yPalette = reduce ? 0 : useTransform(scrollYProgress, [0, 1], [8, -6]);

  const parent = {
    hidden: { opacity: 0, y: 18 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut", staggerChildren: 0.08 } }
  };
  const child  = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

  return (
    <section
      id="perfect-shade"
      ref={ref}
      aria-label="Perfect shade"
      className={`
        relative overflow-hidden
        py-16 md:py-24
        /* degradado que se funde con la foto (más claro a la derecha) */
        bg-[linear-gradient(90deg,rgba(238,235,230,0.8)_0%,rgba(246,244,241,0.6)_45%,#ffffff_100%)]
      `}
    >
      {/* velo radial suave para ayudar a fundir con el retrato */}
      <div className="pointer-events-none absolute right-[-8%] top-1/4 w-[520px] h-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(245,240,233,0.9),transparent_70%)] blur-2xl" />

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Columna de texto (izquierda) */}
          <motion.div
            variants={parent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.45 }}
            className="lg:col-span-6 order-2 lg:order-1"
          >
            <motion.h2
              variants={child}
              className="text-center lg:text-left text-[#3f3623] font-semibold leading-tight
                         text-[clamp(1.7rem,4.2vw,2.6rem)]"
            >
              Discover the perfect shade
              <br className="hidden sm:block" />
              tailored to your unique skin
              <br className="hidden sm:block" />
              tone
            </motion.h2>

            <motion.p
              variants={child}
              className="mt-5 text-center lg:text-left text-[15px] leading-7 text-neutral-700 max-w-[62ch] mx-auto lg:mx-0"
            >
              Finding the perfect shade isn’t just about color—it’s about harmony. The right shade
              enhances your natural complexion, bringing out your unique beauty while complementing
              your undertones. Whether you’re looking for a flawless foundation match, a radiant
              blush, or the ideal lipstick, our expert selection ensures a seamless, natural finish
              that elevates your look effortlessly.
            </motion.p>

            {/* Paleta debajo del texto */}
            <motion.div style={{ y: yPalette }} variants={child} className="mt-8 md:mt-10">
              <Image
                src="https://res.cloudinary.com/da6il8qmv/image/upload/v1760529906/palette_vhbis5.png"
                alt="Neutral swatches palette"
                width={1000}
                height={740}
                sizes="(min-width:1024px) 560px, 92vw"
                className="w-[min(600px,92vw)] lg:w-[min(560px,42vw)] h-auto mx-auto lg:mx-0"
                priority={false}
              />
            </motion.div>
          </motion.div>

          {/* Columna del retrato (derecha) — SIN borde */}
          <div className="lg:col-span-6 order-1 lg:order-2 relative">
            <motion.div
              style={{ y: yGirl }}
              initial={{ opacity: 0, scale: 0.985 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative"
            >
              <Image
                src="https://res.cloudinary.com/da6il8qmv/image/upload/v1760529906/girl_wrxoi5.png"
                alt="Model with natural makeup"
                width={1400}
                height={1400}
                sizes="(min-width:1280px) 700px, (min-width:1024px) 560px, 92vw"
                className="w-full h-auto select-none"
                priority={false}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
