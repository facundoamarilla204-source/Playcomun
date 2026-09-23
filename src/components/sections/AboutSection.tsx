"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="nosotros" className="py-32 bg-background">
      <div className="container-play">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            <span className="inline-block px-3 py-1 mb-10 text-xs font-medium font-mono uppercase tracking-widest text-primary border border-primary/30 bg-primary/5 rounded-sm">
              El Diferencial
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-12 leading-[1.15]">
              Conmigo hablás,<br />
              conmigo trabajás.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 text-lg text-foreground-muted font-light leading-relaxed"
          >
            <div>
              <p className="mb-6">
                A diferencia de una agencia tradicional, en PlayComun trabajás de forma directa y transparente. Desde el entendimiento de tu negocio hasta el diseño de la arquitectura y la programación final de tu plataforma.
              </p>
              <p>
                Este enfoque nos permite evitar teléfonos descompuestos y costos ocultos. Mantenemos el control total sobre la calidad del producto y nos aseguramos de que cada decisión técnica aporte un valor real a tu empresa.
              </p>
            </div>
            <div>
              <p className="mb-6">
                Construimos proyectos sólidos, desde sitios institucionales enfocados en conversión hasta aplicaciones SaaS con bases de datos complejas. Nuestro portafolio es la demostración de la capacidad para lanzar productos de principio a fin.
              </p>
              <p className="font-medium text-foreground">
                No competimos en cantidad de empleados, competimos en excelencia técnica y atención personalizada. Cada línea de código que entregamos está pensada para escalar.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
