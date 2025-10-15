"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BlockSix() {
  const portrait =
    "https://res.cloudinary.com/da6il8qmv/image/upload/v1760547083/pic_pbou4c.png";
  const logo =
    "https://res.cloudinary.com/da6il8qmv/image/upload/v1744040315/logo-wale_b8vyuk.png";

  return (
    <section
      id="about"
      className="scroll-mt-24 w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(90deg, #e8ddcd 0%, #efe7db 40%, #f5efe6 100%)",
      }}
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-16 md:py-24">
        <div className="grid md:grid-cols-2 items-center gap-10 md:gap-14">
          {/* IZQUIERDA: Retrato + círculos flotantes + logo centrado */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative flex flex-col items-center md:items-start isolate"
          >
            {/* Wrapper del retrato (sin overflow para que los círculos asomen) */}
            <div className="relative flex flex-col items-center" style={{ width: 420 }}>
              {/* CÍRCULOS FLOTANTES detrás (rebote un poco más rápido) */}
              <div className="absolute inset-0 z-0 pointer-events-none" style={{ height: 420 }}>
                <FloatingCircle size={160} x={-60} y={-36} delay={0.0} opacity={0.35} />
                <FloatingCircle size={100} x={-86} y={86}  delay={0.6} opacity={0.28} />
                <FloatingCircle size={70}  x={-18} y={330} delay={1.2} opacity={0.32} />
                <FloatingCircle size={240} x={250} y={-80} delay={0.3} opacity={0.22} />
                <FloatingCircle size={58}  x={340} y={300} delay={0.9} opacity={0.26} />
              </div>

              {/* Retrato circular */}
              <div
                className="relative z-10 rounded-full overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.12)]"
                style={{ width: 420, height: 420 }}
              >
                <Image
                  src={portrait}
                  alt="Waleska, makeup artist"
                  fill
                  priority
                  sizes="(min-width: 1024px) 420px, 70vw"
                  className="object-cover object-center select-none pointer-events-none"
                />
              </div>

              {/* Logo centrado bajo la foto (ligeramente más grande) */}
              <div className="mt-6 flex justify-center w-full">
                <Image
                  src={logo}
                  alt="Waleska logo"
                  width={260}
                  height={90}
                  className="h-auto w-[240px] md:w-[260px] object-contain opacity-95"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* DERECHA: Título + texto */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="text-[#4a3b2a]"
          >
            <h2 className="font-semibold text-3xl md:text-5xl">About Waleska</h2>

            <p className="mt-6 text-base md:text-lg leading-relaxed text-[#4a3b2a]/85">
              Enhancing beauty, embracing confidence. Waleska is a professional
              makeup artist passionate about bringing out the natural beauty in
              every client. With a refined touch and a keen eye for detail, she
              transforms makeup into an elevated art form, ensuring you feel
              confident, radiant, and empowered.
            </p>

            <p className="mt-6 text-base md:text-lg leading-relaxed text-[#4a3b2a]/85">
              Whether it&apos;s for a wedding, special event, editorial shoot, or a
              personalized makeup session, Waleska tailors each look to perfection,
              reflecting your unique style.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "Skin-first techniques for seamless, luminous finishes.",
                "Timeless bridal to bold editorial—always modern and refined.",
                "Hygiene-first kit with high-performance products.",
              ].map((t) => (
                <li key={t} className="flex items-start">
                  <span className="mt-[10px] mr-3 inline-block h-2.5 w-2.5 rounded-full bg-[#6c5a45]" />
                  <span className="text-[#4a3b2a]/90">{t}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex gap-3">
              <a
                href="#portfolio"
                className="rounded-full px-5 py-3 text-[#4a3b2a] border border-[#4a3b2a]/25 hover:border-[#4a3b2a] transition"
              >
                View portfolio
              </a>
              <a
                href="#contact"
                className="rounded-full px-6 py-3 text-white font-medium shadow-sm"
                style={{ backgroundColor: "#7c6a52" }}
              >
                Book now
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* Círculo flotante: rebote un poco más rápido (duración 6s) */
function FloatingCircle({ size = 120, x = 0, y = 0, delay = 0, opacity = 0.3 }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity, y: [0, -8, 0, 8, 0] }}
      transition={{ duration: 6, ease: "easeInOut", repeat: Infinity, delay }}
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
        background:
          "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9), rgba(255,255,255,0.6) 40%, rgba(234,222,205,0.55) 100%)",
        boxShadow: "0 8px 28px rgba(0,0,0,0.08)",
      }}
    />
  );
}
