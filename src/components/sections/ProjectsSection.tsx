"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const projects = [
  {
    name: "Mercury Eventos",
    status: "Producción",
    category: "Plataforma SaaS",
    desc: "Gestión integral de eventos. Invitaciones, RSVP y control de acceso con QR.",
    tech: "Next.js · React · Supabase · PostgreSQL · Mercado Pago",
    url: "https://mercuryeventos.online/",
    color: "bg-blue-500/10 border-blue-500/20 text-blue-400",
  },
  {
    name: "FitAdmi",
    status: "Beta",
    category: "Gestión Deportiva",
    desc: "Plataforma de gestión integral para gimnasios que permite administrar clientes, membresías, asistencias, pagos, productos y entrenamientos desde un solo lugar",
    tech: "Next.js · React · Supabase · PostgreSQL · Mercado Pago",
    url: "https://fitadmi.com.ar/",
    color: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
  },
  {
    name: "BarraStock",
    status: "Producción",
    category: "Sistema de Gestión",
    desc: "Software de gestión integral para bares y gastronomía. Control de stock por ingrediente en tiempo real, caja y recetas.",
    tech: "Next.js · React · Supabase · PostgreSQL · Mercado Pago",
    url: "https://barrastock-two.vercel.app/",
    color: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
  },
  {
    name: "TurnoGol",
    status: "Desarrollo",
    category: "Aplicación Web",
    desc: "Reserva de canchas deportivas ultra-rápida. Optimiza tiempos muertos 24/7.",
    tech: "Next.js · React · Supabase · PostgreSQL · Mercado Pago",
    url: "https://turnogol.vercel.app/",
    color: "bg-orange-500/10 border-orange-500/20 text-orange-400",
  }
];

export function ProjectsSection() {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = () => {
    setDirection(1);
    setStartIndex((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setDirection(-1);
    setStartIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const visibleProjects = [
    projects[startIndex % projects.length],
    projects[(startIndex + 1) % projects.length],
    projects[(startIndex + 2) % projects.length],
  ];

  const variants = {
    enter: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? 80 : -80,
      scale: 0.95,
    }),
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? -80 : 80,
      scale: 0.95,
    }),
  };

  return (
    <section id="proyectos" className="py-28 md:py-32 bg-background border-t border-border/50 overflow-hidden">
      <div className="container-play">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <span className="inline-block px-3 py-1 mb-5 text-xs font-medium font-mono uppercase tracking-widest text-primary border border-primary/30 bg-primary/5 rounded-sm">
              Proyectos
            </span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
              Productos<br /> en producción.
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 md:gap-8">
            <p className="text-foreground-muted font-light max-w-xs text-sm md:text-base">
              Deslizá o navegá para explorar las plataformas desarrolladas.
            </p>

            {/* Controles de navegación de la pasarela */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prev}
                className="w-10 h-10 rounded-full border border-border bg-surface flex items-center justify-center text-foreground transition-all hover:border-primary/50 hover:bg-surface-hover hover:scale-105 active:scale-95"
                aria-label="Proyecto anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={next}
                className="w-10 h-10 rounded-full border border-border bg-surface flex items-center justify-center text-foreground transition-all hover:border-primary/50 hover:bg-surface-hover hover:scale-105 active:scale-95"
                aria-label="Siguiente proyecto"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Horizontal Scroll Area / Pasarela */}
      <div className="w-full relative overflow-hidden">
        <div className="flex gap-6 pb-8 pt-2 px-6 md:px-10 lg:px-16 w-full mx-auto">
          <AnimatePresence mode="popLayout" custom={direction} initial={false}>
            {visibleProjects.map((project) => (
              <motion.div
                key={project.name}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                layout
                transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.3333%-16px)] shrink-0 flex flex-col bg-surface border border-border rounded-xl group hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-[border-color,box-shadow] duration-300"
              >
                {/* Live Iframe Preview */}
                <div className="aspect-[4/3] relative border-b border-border bg-surface-elevated overflow-hidden flex items-center justify-center group/iframe rounded-t-xl">
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
                <div className="p-6 md:p-7 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] font-mono tracking-wider text-foreground-muted uppercase">
                      {project.category}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span className={`text-[10px] font-mono tracking-wider px-2 py-0.5 rounded-sm border ${project.color}`}>
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-2xl font-medium mb-3 text-foreground group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-foreground-muted font-light leading-relaxed mb-6 text-sm flex-1">
                    {project.desc}
                  </p>

                  <div className="mb-6">
                    <span className="block text-[10px] font-mono text-foreground-subtle uppercase tracking-widest mb-1.5">Stack</span>
                    <p className="text-xs text-foreground-muted">{project.tech}</p>
                  </div>

                  <div className="mt-auto pt-4 border-t border-border/50">
                    <Button variant="outline" size="sm" className="w-full h-10 group/btn" href={project.url}>
                      <span>Ver proyecto</span>
                      <ExternalLink className="w-3.5 h-3.5 ml-2 opacity-60 group-hover/btn:opacity-100 transition-opacity" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

    </section>
  );
}
