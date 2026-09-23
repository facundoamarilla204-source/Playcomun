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
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 mb-6 text-xs font-medium font-mono uppercase tracking-widest text-primary border border-primary/30 bg-primary/5 rounded-sm">
              Tecnologías
            </span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">El estándar de la industria</h2>
            <p className="text-lg text-foreground-muted font-light max-w-3xl mx-auto leading-relaxed">
              Construyo tus productos utilizando las mismas herramientas que potencian a las tecnológicas líderes. Un stack moderno, seguro y diseñado para escalar.
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
