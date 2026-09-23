"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-background">
      <div className="container-play relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Text Content */}
          <div className="flex flex-col lg:col-span-6 relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >

            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight mb-8"
            >
              Páginas Web, Aplicaciones Web y Plataformas SaaS.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-foreground-muted leading-relaxed mb-12 max-w-xl font-light"
            >
              Diseñamos y desarrollamos productos digitales modernos para empresas, emprendimientos y nuevas ideas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" href="#contacto">
                Crear mi proyecto
              </Button>
              <Button variant="outline" size="lg" href="#servicios">
                Ver servicios
              </Button>
            </motion.div>
          </div>

          {/* Developer Illustration */}
          <div className="lg:col-span-6 relative mt-12 lg:mt-0 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-xl lg:max-w-2xl mx-auto lg:ml-auto flex justify-center items-center lg:scale-110 lg:translate-x-8"
            >
              <img 
                src="/ilustracionhero.webp" 
                alt="Developer illustration" 
                className="w-full h-auto object-contain mix-blend-lighten"
                style={{ 
                  filter: "drop-shadow(0 0 40px rgba(115, 29, 216, 0.15))",
                  WebkitMaskImage: "radial-gradient(circle at center, black 60%, transparent 100%)",
                  maskImage: "radial-gradient(circle at center, black 60%, transparent 100%)"
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
