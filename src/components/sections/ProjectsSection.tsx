"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Button } from "@/components/ui/Button";

export function ProjectsSection() {
  const [showMoreProjects, setShowMoreProjects] = useState(false);

  return (
    <section id="proyectos" className="py-32 bg-surface/30 relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="container-play">
        <Reveal>
          <div className="text-center mb-24">
            <span className="inline-block px-4 py-1.5 mb-6 text-[11px] font-semibold font-mono uppercase tracking-[0.2em] text-indigo bg-indigo/10 border border-indigo/20 rounded-full shadow-[0_0_15px_rgba(91,92,235,0.2)]">
              Proyectos
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">Proyectos Destacados</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <ProjectCard
            name="Mercury Eventos"
            description="Centralizá toda la organización de tus eventos en una única plataforma. Gestioná invitaciones digitales, confirmaciones de asistencia, listas de invitados, mesas y mucho más desde un solo lugar, de forma simple, rápida y profesional."
            status="Producción"
            statusColor="bg-success/15 text-success border border-success/20"
            tags={["React", "Vite", "Tailwind", "Supabase", "React Query"]}
            url="https://mercuryeventos.online/"
            delay={0}
          />
          <ProjectCard
            name="FitAdmi"
            description="Modernicé la administración de gimnasios. Un sistema SaaS que elimina el uso de planillas, automatiza el control de socios y provee métricas de retención clave para dueños de centros fitness."
            status="Beta"
            statusColor="bg-warning/15 text-warning border border-warning/20"
            tags={["React", "Vite", "Tailwind", "Supabase", "Gemini AI", "MercadoPago"]}
            url="https://fitadmi.vercel.app/"
            delay={0.15}
          />
          <ProjectCard
            name="TurnoGol"
            description="Cero fricción en la reserva de canchas. Uní a jugadores y predios deportivos en una app ultrarrápida que gestiona disponibilidad y pagos 24/7 sin intervención humana."
            status="En desarrollo"
            statusColor="bg-primary/15 text-primary border border-primary/20"
            tags={["Next.js", "Supabase", "Framer Motion", "MercadoPago"]}
            url="https://turnogol.vercel.app/"
            delay={0}
          />
          {showMoreProjects && (
            <>
              <ProjectCard
                name="El Impostor"
                description="Divertido juego web de deducción social para jugar con amigos desde cualquier dispositivo, inspirado en clásicos de identidad oculta."
                status="Completado"
                statusColor="bg-success/15 text-success border border-success/20"
                tags={["React", "Juegos Web"]}
                url="https://elimpostorxapp.vercel.app/"
                delay={0}
              />
              <ProjectCard
                name="Pasa la Bomba"
                description="Juego web rápido y explosivo. Responde las preguntas y pasa el turno antes de que se acabe el tiempo. Ideal para previas y reuniones."
                status="Completado"
                statusColor="bg-success/15 text-success border border-success/20"
                tags={["React", "Animaciones"]}
                url="https://pasalabomba.vercel.app/"
                delay={0.15}
              />
            </>
          )}

          <Reveal delay={0.15}>
            <div className="group relative rounded-[2rem] overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)] z-10 hover:z-20 h-full flex flex-col justify-center bg-gradient-to-br from-surface to-surface-elevated border border-border p-10 text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-electric/5 to-primary/5 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-electric/10 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-electric" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">¿Tenés un proyecto en mente?</h3>
                <p className="text-foreground-muted text-sm mb-8 leading-relaxed max-w-[280px] mx-auto">
                  Dejá de posponer esa idea. Hablemos de tus objetivos y veamos cómo puedo ayudarte a construirla.
                </p>
                <Button variant="primary" size="lg" href="#contacto" className="w-full sm:w-auto">
                  Hablemos
                </Button>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowMoreProjects(!showMoreProjects)}
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-surface hover:bg-surface-hover hover:border-border-hover transition-all text-sm font-medium text-foreground group"
            >
              {showMoreProjects ? "Ver menos proyectos" : "Ver más proyectos"}
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${showMoreProjects ? "rotate-180" : "rotate-0"}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
