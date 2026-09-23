"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const projects = [
  {
    name: "Mercury Eventos",
    status: "Producción",
    category: "Plataforma SaaS",
    desc: "Gestión integral de eventos. Invitaciones, RSVP y control de acceso con QR.",
    tech: "React, Node.js, PostgreSQL",
    url: "https://mercuryeventos.online/",
    color: "bg-blue-500/10 border-blue-500/20 text-blue-500",
  },
  {
    name: "FitAdmi",
    status: "Beta",
    category: "Gestión Deportiva",
    desc: "Plataforma de gestión integral para gimnasios que permite administrar clientes, membresías, asistencias, pagos, productos y entrenamientos desde un solo lugar",
    tech: "Next.js, Supabase,Mercadopago",
    url: "https://fitadmi.com.ar/",
    color: "bg-emerald-500/10 border-emerald-500/20 text-emerald-500",
  },
  {
    name: "TurnoGol",
    status: "Desarrollo",
    category: "Aplicación Web",
    desc: "Reserva de canchas deportivas ultra-rápida. Optimiza tiempos muertos 24/7.",
    tech: "React, Supabase, Tailwind",
    url: "https://turnogol.vercel.app/",
    color: "bg-orange-500/10 border-orange-500/20 text-orange-500",
  }
];

export function ProjectsSection() {
  return (
    <section id="proyectos" className="py-32 bg-background border-t border-border/50 overflow-hidden">
      <div className="container-play">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <span className="inline-block px-3 py-1 mb-6 text-xs font-medium font-mono uppercase tracking-widest text-primary border border-primary/30 bg-primary/5 rounded-sm">
              Proyectos
            </span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
              Productos<br /> en producción.
            </h2>
          </div>
          <p className="text-foreground-muted font-light max-w-sm text-lg md:text-right">
            Deslizá para explorar el portafolio de páginas, aplicaciones y plataformas SaaS desarrolladas.
          </p>
        </motion.div>
      </div>

      {/* Horizontal Scroll Area */}
      <div className="w-full">
        <div className="flex overflow-x-auto pb-12 pt-4 snap-x snap-mandatory gap-6 hide-scrollbar md:justify-center px-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="min-w-[320px] max-w-[400px] w-[85vw] md:w-[400px] shrink-0 snap-start flex flex-col bg-surface border border-border rounded-md group hover:border-primary/40 transition-colors"
            >
              {/* Live Iframe Preview */}
              <div className="aspect-[4/3] relative border-b border-border bg-surface-elevated overflow-hidden flex items-center justify-center group/iframe">
                {/* Escala el iframe para que actúe como un thumbnail de un sitio desktop */}
                <div className="absolute inset-0 w-[300%] h-[300%] origin-top-left scale-[0.33333] pointer-events-none">
                  <iframe
                    src={project.url}
                    className="w-full h-full border-none bg-background opacity-80 group-hover/iframe:opacity-100 transition-opacity duration-700"
                    title={`Vista previa de ${project.name}`}
                    loading="lazy"
                    scrolling="no"
                  />
                </div>

                {/* Superposición interactiva sutil */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-mono tracking-wider text-foreground-muted uppercase">
                    {project.category}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span className={`text-[10px] font-mono tracking-wider px-2 py-0.5 rounded-sm border ${project.color}`}>
                    {project.status}
                  </span>
                </div>

                <h3 className="text-2xl font-medium mb-3 text-foreground">{project.name}</h3>
                <p className="text-foreground-muted font-light leading-relaxed mb-6 text-sm flex-1">
                  {project.desc}
                </p>

                <div className="mb-6">
                  <span className="block text-[10px] font-mono text-foreground-subtle uppercase tracking-widest mb-1.5">Stack</span>
                  <p className="text-xs text-foreground-muted">{project.tech}</p>
                </div>

                <div className="mt-auto pt-4 border-t border-border/50">
                  <Button variant="outline" size="sm" className="w-full h-10" href={project.url}>
                    Ver proyecto
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Custom styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
