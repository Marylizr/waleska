"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BlockSeven() {
  const items = [
    {
      title: "Bridal & Wedding Makeup",
      desc:
        "Look flawless on your big day with long-lasting, waterproof bridal makeup that enhances your features while feeling light and comfortable. Tailored trial sessions to find your perfect look.",
      img: "https://res.cloudinary.com/da6il8qmv/image/upload/v1760529905/marylizr_very_beautiful_model_wearing_light_makeup_and_getting__3300de8e-e676-4f79-a06c-0ff16b53f02d_qzexqa.png",
      dir: "img-left",
    },
    {
      title: "Editorial & Photoshoots",
      desc:
        "High-definition, camera-ready looks for fashion, beauty, and commercial projects. Creative, artistic designs that stand out on any platform.",
      img: "https://res.cloudinary.com/da6il8qmv/image/upload/v1760529905/marylizr_very_beautiful_model_wearing_light_makeup_and_getting__aa7402f1-a3fa-42a2-93fa-4a2432594dc6_hed9sj.png",
      dir: "img-right",
    },
    {
      title: "Special Events & Glam Makeup",
      desc:
        "Red-carpet inspired makeup with luminous skin, sculpted features and refined details. Long-wear, comfortable looks perfect for any celebration.",
      img: "https://res.cloudinary.com/da6il8qmv/image/upload/v1760529905/marylizr_very_beautiful_model_wearing_light_makeup_and_getting__43571fa4-a9f3-454f-8111-b8d3c4cd46f3_b4f5ft.png",
      dir: "img-left",
    },
    {
      title: "Makeup Lessons & Personal Consultations",
      desc:
        "One-on-one tutorials to master techniques, product selection and application tips tailored to your face shape, undertone and style.",
      img: "https://res.cloudinary.com/da6il8qmv/image/upload/v1760529904/marylizr_very_beautiful_model_wearing_light_makeup_and_getting__97d32495-c867-4a9c-b7f6-bc54ab6484af_xvpp6w.png",
      dir: "img-right",
    },
  ];

  return (
    <section id="services" className="scroll-mt-24 w-full bg-white">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-16 md:py-24">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-[#4a3b2a] font-semibold text-3xl md:text-5xl"
        >
          Services Offered
        </motion.h2>

        {/* Filas */}
        <div className="mt-8 md:mt-12 space-y-14 md:space-y-20">
          {items.map((it, idx) => (
            <ServiceRow key={it.title} {...it} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Fila con “píldora” de fondo pasando por debajo de la imagen ---------- */

function ServiceRow({ title, desc, img, dir = "img-left", index = 0 }) {
   const isLeft = dir === "img-left";
 
   return (
     <div className="relative">
       {/* UNDERLAY (sólo desktop) */}
       <motion.div
         aria-hidden
         initial={{ opacity: 0, x: isLeft ? 20 : -20 }}
         whileInView={{ opacity: 1, x: 0 }}
         viewport={{ once: true, margin: "-100px" }}
         transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
         className="hidden md:block absolute inset-y-2 z-0"
         style={{
           left: isLeft ? "18%" : "0",
           right: isLeft ? "0" : "18%",
           background: "rgba(240, 228, 220, 0.88)",
           borderTopLeftRadius: isLeft ? "12px" : "64px",
           borderBottomLeftRadius: isLeft ? "12px" : "64px",
           borderTopRightRadius: isLeft ? "64px" : "12px",
           borderBottomRightRadius: isLeft ? "64px" : "12px",
           backdropFilter: "blur(1px)",
         }}
       />
 
       {/* CONTENIDO  (desktop: imagen + texto; móvil: sólo imagen) */}
       <div className="relative z-10 md:flex md:items-center md:gap-10">
         {/* Imagen (ambos) */}
         <motion.div
           initial={{ opacity: 0, x: isLeft ? -24 : 24 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.65, ease: "easeOut" }}
           className={`w-full md:w-[44%] ${isLeft ? "md:order-1" : "md:order-2"}`}
         >
           <div className="relative w-full aspect-[4/3] rounded-md overflow-hidden bg-[#eee]">
             <Image
               src={img}
               alt={title}
               fill
               sizes="(min-width: 1024px) 520px, 100vw"
               className="object-cover object-center"
               priority={index === 0}
             />
           </div>
         </motion.div>
 
         {/* Texto (SÓLO DESKTOP) */}
         <motion.div
           initial={{ opacity: 0, x: isLeft ? 24 : -24 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.65, ease: "easeOut", delay: 0.08 }}
           className={`hidden md:block w-full md:w-[56%] ${isLeft ? "md:order-2" : "md:order-1"}`}
         >
           <div className={`p-6 md:p-10 ${isLeft ? "md:pl-8" : "md:pr-8"}`}>
             <h3 className="text-[#4a3b2a] font-semibold text-2xl md:text-3xl">
               {title}
             </h3>
             <p className="mt-3 md:mt-4 text-[#4a3b2a]/80 leading-relaxed text-base md:text-lg max-w-[56ch]">
               {desc}
             </p>
           </div>
         </motion.div>
       </div>
 
       {/* MÓVIL: píldora debajo (única versión de texto en mobile) */}
       <div className="md:hidden mt-3">
         <div className="rounded-[24px] bg-[#f0e4dc]/95 p-5">
           <h3 className="text-[#4a3b2a] font-semibold text-xl">{title}</h3>
           <p className="mt-2 text-[#4a3b2a]/80 leading-relaxed">{desc}</p>
         </div>
       </div>
     </div>
   );
 }
 
