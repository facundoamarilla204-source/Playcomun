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
                Cuando me contactás, no hay un vendedor que después le pasa el proyecto a otro equipo. El que te responde es el mismo que va a diseñar la arquitectura y escribir cada línea de código de tu producto. Desde el primer mensaje hasta el día del lanzamiento.
              </p>
              <p>
                Esa no es una limitación: es la principal ventaja estratégica. Al eliminar los teléfonos descompuestos de los project managers y account managers, evitamos que tu visión original se diluya en el camino.
              </p>
            </div>
            <div>
              <p className="mb-6">
                Mercury Eventos y FitAdmi no son casos de un cliente anónimo. Son productos SaaS reales que diseñé, desarrollé y lancé por mi cuenta para validar mi capacidad técnica y mi forma de trabajar antes de ofrecértela.
              </p>
              <p className="font-medium text-foreground">
                No compito con grandes agencias en cantidad de empleados. Compito en responsabilidad técnica directa: vas a tener a una sola persona altamente calificada a cargo de que tu proyecto escale y funcione.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
