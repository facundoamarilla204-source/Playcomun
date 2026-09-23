"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Páginas Web",
    subtitle: "Sitios y Landing Pages",
    desc: "Diseño y desarrollo de sitios institucionales y páginas orientadas a la venta. Alto nivel estético, tiempos de carga milimétricos y optimización SEO técnica.",
  },
  {
    title: "Aplicaciones Web",
    subtitle: "Paneles y Herramientas",
    desc: "Sistemas con usuarios, bases de datos y paneles de control. Interfaces rápidas diseñadas para digitalizar operaciones, reemplazar planillas y automatizar procesos.",
  },
  {
    title: "Plataformas SaaS",
    subtitle: "Software as a Service",
    desc: "Desarrollo de productos completos con suscripciones y pagos automatizados. Arquitecturas en la nube preparadas para escalar y enfocadas en la retención.",
  },
  {
    title: "Sistemas a Medida",
    subtitle: "Procesos Internos",
    desc: "Herramientas de software únicas adaptadas a las reglas exactas de tu negocio. Control de inventarios, gestión de turnos y sistemas de administración a la medida.",
  }
];

export function ServicesSection() {
  return (
    <section id="servicios" className="py-32 bg-surface">
      <div className="container-play">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 mb-6 text-xs font-medium font-mono uppercase tracking-widest text-primary border border-primary/30 bg-primary/5 rounded-sm">
              Especialidad
            </span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
              Soluciones digitales completas.
            </h2>
            <p className="text-foreground-muted font-light leading-relaxed text-lg">
              Construimos productos enfocados en resolver problemas de negocio. La tecnología es el medio; el objetivo es que tu empresa tenga una presencia sólida, sea más eficiente y venda más.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 md:p-10 bg-background border border-border rounded-md hover:border-primary/40 transition-colors flex flex-col"
            >
              <div className="mb-8">
                <span className="text-xs font-mono uppercase tracking-widest text-foreground-subtle mb-2 block">
                  {service.subtitle}
                </span>
                <h3 className="text-3xl font-medium text-foreground">{service.title}</h3>
              </div>
              <p className="text-foreground-muted font-light leading-relaxed flex-1 text-lg">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
