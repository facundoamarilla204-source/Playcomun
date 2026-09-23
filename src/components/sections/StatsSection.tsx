"use client";

import { motion } from "framer-motion";

const facts = [
  { label: "Trato directo", desc: "Sin project managers en el medio. Hablás con el desarrollador." },
  { label: "Código propio", desc: "Sin dependencias de constructores visuales ni CMS genéricos." },
  { label: "SaaS & Web Apps", desc: "Especializado en lógica de negocio compleja e integraciones." },
  { label: "Full-Stack", desc: "Desde el diseño de la interfaz hasta la arquitectura del backend." },
];

export function StatsSection() {
  return (
    <section className="py-24 border-y border-border/50 bg-background">
      <div className="container-play">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {facts.map((fact, index) => (
            <motion.div 
              key={fact.label} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col border-l border-border pl-6"
            >
              <h3 className="text-xl font-medium text-foreground mb-3">{fact.label}</h3>
              <p className="text-sm font-light text-foreground-muted leading-relaxed">{fact.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
