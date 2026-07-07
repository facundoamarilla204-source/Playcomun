"use client";

import { Reveal } from "@/components/ui/Reveal";
import { TechIcon } from "@/components/ui/TechIcon";

const techNames = [
  "React", "Next.js", "TypeScript", "Tailwind", "Supabase",
  "PostgreSQL", "Resend", "Vercel", "Docker", "GitHub",
  "WhatsApp", "ChatGPT", "Gemini IA", "Figma", "Stripe", "Notion",
];

export function TechSection() {
  return (
    <section id="tecnologias" className="py-32">
      <div className="container-play">
        <Reveal>
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 mb-6 text-[11px] font-semibold font-mono uppercase tracking-[0.2em] text-electric bg-electric/10 border border-electric/20 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.2)]">
              Stack
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">El estándar de la industria</h2>
            <p className="text-lg text-foreground-muted mt-6 max-w-3xl mx-auto">
              Construyo tus productos utilizando las mismas herramientas que potencian a las startups más rápidas del mundo. Un stack tecnológico moderno, seguro y diseñado para escalar sin límites.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="relative mt-16 overflow-hidden w-full max-w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex w-max animate-infinite-scroll gap-6">
              {[...techNames, ...techNames].map((tech, idx) => (
                <div key={`${tech}-${idx}`} className="w-[120px] flex-shrink-0">
                  <TechIcon name={tech} />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
