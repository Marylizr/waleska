"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BlockContact() {
  const smear =
    "https://res.cloudinary.com/da6il8qmv/image/upload/v1760529904/shadow_zzrfhk.png";

  return (
    <section id="contact" className="scroll-mt-24 w-full bg-white">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-16 md:py-24">
        <div
          className="relative overflow-hidden rounded-[28px] md:rounded-[44px]"
          style={{
            background:
              "linear-gradient(90deg, #dfe2e5 0%, #cfd3d7 25%, #8f959d 100%)",
          }}
        >
          {/* --- DESKTOP: imagen fija a la izquierda (por encima) --- */}
          <div className="hidden md:block absolute inset-y-0 left-0 w-[25%] z-10 pointer-events-none select-none">
            <Image
              src={smear}
              alt=""
              fill
              priority
              className="object-cover object-left"
              sizes="(min-width:1024px) 46vw, 100vw"
            />
          </div>

          {/* --- Píldora de TÍTULO: debajo de la imagen, corrida a la derecha --- */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="hidden md:block absolute z-0"
            // Ajusta aquí si quieres moverla un poco más
            style={{ top: "1.5rem", left: "22%" }}
          >
            <div
              className="rounded-[56px] px-10 py-6 w-[640px]"
              style={{
                background:
                  "linear-gradient(90deg, rgba(238,226,219,0.95) 0%, rgba(223,210,203,0.92) 100%)",
              }}
            >
              <h2 className="text-[#3c3530] font-semibold text-5xl leading-tight">
                Book Your Session
              </h2>
            </div>
          </motion.div>

          {/* --- MOBILE: imagen arriba --- */}
          <div className="md:hidden relative w-full h-[220px] pointer-events-none select-none">
            <Image
              src={smear}
              alt=""
              fill
              priority
              className="object-cover object-top"
              sizes="100vw"
            />
          </div>

          {/* CONTENIDO */}
          <div className="relative z-20 px-5 sm:px-7 md:px-10 pb-12 md:py-14">
            {/* MOBILE: título en píldora */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="md:hidden flex justify-center"
            >
              <div
                className="rounded-[40px] px-6 py-4 w-full text-center"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(238,226,219,0.95) 0%, rgba(223,210,203,0.92) 100%)",
                }}
              >
                <h2 className="text-[#3c3530] font-semibold text-2xl">
                  Book Your Session
                </h2>
              </div>
            </motion.div>

            {/* COLUMNA DERECHA REAL: todo lo textual para que NUNCA cruce la foto */}
            <div className="md:ml-[46%]">
              {/* Párrafo (alineado derecha, con padding vertical) */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
                className="text-center md:text-right text-[#2f2a27]/90 text-base md:text-lg leading-relaxed max-w-[60ch] mx-auto md:ml-auto mt-[5em] pt-6 pb-4"
              >
                Let’s bring your dream look to life! Whether it’s for a wedding,
                an event, or a personal beauty refresh, Waleska is here to
                create something magical just for you.
              </motion.p>

              {/* CTA a la derecha */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                className="mt-4 flex justify-center md:justify-end"
              >
                <a
                  href="https://wa.me/56964488186"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-[40px] px-6 md:px-10 py-4 md:py-5 text-[#2f2a27] text-lg md:text-2xl font-medium shadow-sm hover:opacity-95 transition w-full md:w-[560px] text-center"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(238,226,219,0.95) 0%, rgba(223,210,203,0.92) 100%)",
                  }}
                >
                  Book an appointment today!
                </a>
              </motion.div>

              {/* Contacto centrado */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: "easeOut", delay: 0.15 }}
                className="mt-8 md:mt-10"
              >
                <div className="text-center text-[#2f2a27]">
                  <p className="text-lg md:text-[28px] leading-tight font-medium">
                    Serving: Santiago de Chile
                  </p>
                  <p className="text-lg md:text-[28px] leading-tight mt-2">
                    Instagram:{" "}
                    <a
                      href="https://instagram.com/lejhanmua"
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-4 hover:opacity-80"
                    >
                      lejhanmua
                    </a>
                  </p>
                  <p className="text-lg md:text-[28px] leading-tight mt-2">
                    Call/Text:{" "}
                    <a href="tel:+56964488186" className="hover:opacity-80">
                      +56 9 6448 8186
                    </a>
                  </p>
                </div>
              </motion.div>
            </div>

            {/* espacio para que se vean los radios inferiores */}
            <div className="hidden md:block h-2" />
          </div>
        </div>
      </div>
    </section>
  );
}
