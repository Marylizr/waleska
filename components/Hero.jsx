"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const reduce = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };

  return (
    <section
      id="hero"
      aria-label="Intro section"
      className="
        relative
        pt-10 md:pt-16 lg:pt-20
        pb-12 md:pb-16
        bg-[linear-gradient(90deg,rgba(184,154,103,0.12)_0%,rgba(245,239,233,0.6)_45%,transparent_100%)]
      "
    >
      <div className="container">
        {/* H3 superior (entra de abajo) */}
        <motion.h3
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="text-[#5b4b2f] font-semibold leading-snug text-[clamp(1.25rem,3vw,1.75rem)]"
        >
          Hi, I’m Waleska Makeup Artist
        </motion.h3>

        {/* 12-cols: texto 7 / imagen 5 */}
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Texto (stagger de hijos) */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="lg:col-span-7"
          >
            <motion.h1
              variants={fadeUp}
              className="text-[#5b4b2f] font-semibold leading-tight text-[clamp(2.25rem,6vw,4.25rem)]"
            >
              and I invite you to
              <br />
              elevate your <span className="italic">Beauty!</span>
            </motion.h1>

            <motion.div variants={fadeUp} className="mt-6 space-y-5 text-[15px] leading-7 text-neutral-700 max-w-[62ch]">
              <p>
                Makeup is more than just colors and products—it’s an expression of
                self, a celebration of confidence, and a tool to enhance natural
                beauty. The art of makeup isn’t about masking; it’s about revealing,
                enhancing, and empowering.
              </p>
              <p>
                True beauty lies in the details—the gentle highlight that catches
                the light just right, the soft blend of tones that complement natural
                features, and perfectly sculpted brows that frame a face with elegance.
                The mastery of subtle artistry is knowing how to accentuate what’s
                already there, embracing individuality while adding a touch of refinement
                and radiance.
              </p>
            </motion.div>
          </motion.div>

          {/* Imagen derecha (fade + slide desde la derecha) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }}
            viewport={{ once: true, amount: 0.4 }}
            className="lg:col-span-5 flex items-end justify-end"
          >
            <Image
              src="https://res.cloudinary.com/da6il8qmv/image/upload/v1760529913/Group_oyxuju.png"
              alt="Beauty portrait hero"
              width={900}
              height={900}
              priority
              sizes="(min-width:1280px) 520px, (min-width:1024px) 460px, 90vw"
              className="w-[min(100%,620px)] h-auto"
            />
          </motion.div>
        </div>

        {/* CTA centrado (fade up) */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="mt-8 lg:mt-10 flex justify-center"
        >
          <Link
            href="#book"
            className="
              inline-flex items-center justify-center
              rounded-[2rem]
              px-7 sm:px-10
              h-14 sm:h-16
              text-white text-lg sm:text-xl font-semibold
              bg-[linear-gradient(180deg,#b89a67,#7a6135)]
              shadow-[0_10px_24px_rgba(0,0,0,0.15)]
              hover:opacity-95
              transition
            "
            aria-label="Book an appointment today"
          >
            Book an appointment today!
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
