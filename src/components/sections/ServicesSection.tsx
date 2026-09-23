"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "SaaS",
    subtitle: "Software as a Service",
    desc: "Arquitecturas en la nube preparadas para escalar. Seguridad, multi-tenant y máximo rendimiento desde el día uno, enfocados en la retención del usuario final y la monetización.",
  },
  {
    title: "App Web",
    subtitle: "Sistemas a Medida",
    desc: "Sistemas únicos sin plantillas ni CMS lentos. Interfaces rápidas y robustas diseñadas para digitalizar operaciones complejas, reemplazar planillas y automatizar procesos.",
  },
  {
    title: "Páginas Empresariales",
    subtitle: "Presencia Corporativa",
    desc: "Sitios institucionales con alto nivel de diseño para comunicar autoridad y confianza. Desarrollados a medida para reflejar la identidad de tu empresa sin depender de temas genéricos.",
  },
  {
    title: "Landing Pages",
    subtitle: "Optimización de Conversión",
    desc: "Páginas orientadas a la venta con tiempos de carga milimétricos, optimización técnica de SEO y estrategias persuasivas para dominar los resultados y capturar leads.",
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
              De la idea a la producción.
            </h2>
            <p className="text-foreground-muted font-light leading-relaxed text-lg">
              Construyo productos digitales enfocados en resolver problemas de negocio. La tecnología es solo el medio; el objetivo es que tu empresa sea más eficiente y venda más.
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
