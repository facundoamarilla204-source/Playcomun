"use client";

import { motion } from "framer-motion";

const steps = [
  { step: "01", title: "Idea", desc: "Entendemos cómo tu producto va a resolver un problema real. Definimos objetivos de negocio, alcance funcional y requerimientos técnicos." },
  { step: "02", title: "Diseño", desc: "Creamos la interfaz y experiencia de usuario enfocados en conversión y retención. Interfaces profesionales listas para ser desarrolladas." },
  { step: "03", title: "Desarrollo", desc: "Ingeniería de alto nivel. Arquitectura sólida desde el día uno, utilizando tecnologías modernas que permiten escalar y mantener el producto." },
  { step: "04", title: "Lanzamiento", desc: "Despliegue en producción, configuración de dominios, métricas y base de datos en la nube para asegurar que el sistema opere sin interrupciones." },
  { step: "05", title: "Evolución", desc: "Analizamos datos reales de uso para mejorar funcionalidades, optimizar flujos y agregar valor continuo al producto." },
];

export function ProcessSection() {
  return (
    <section className="py-32 bg-surface border-y border-border/50">
      <div className="container-play">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <span className="inline-block px-3 py-1 mb-6 text-xs font-medium font-mono uppercase tracking-widest text-primary border border-primary/30 bg-primary/5 rounded-sm">
            Metodología
          </span>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
            El proceso de construcción.
          </h2>
        </motion.div>

        <div className="flex flex-col border-t border-border">
          {steps.map((p, i) => (
            <motion.div 
              key={p.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 py-12 md:py-16 border-b border-border group hover:bg-surface-hover/50 transition-colors px-6 md:px-8"
            >
              <div className="md:col-span-2 flex items-start">
                <span className="text-5xl md:text-6xl font-light text-foreground-muted group-hover:text-primary transition-colors">
                  {p.step}.
                </span>
              </div>
              <div className="md:col-span-4 flex items-center md:items-start pt-2">
                <h3 className="text-3xl md:text-4xl font-medium text-foreground">{p.title}</h3>
              </div>
              <div className="md:col-span-6 flex items-center md:items-start pt-2">
                <p className="text-lg text-foreground-muted font-light leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
