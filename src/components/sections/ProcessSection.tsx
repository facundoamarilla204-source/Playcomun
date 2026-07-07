"use client";

import { Reveal } from "@/components/ui/Reveal";

const steps = [
  { step: "01", title: "Entender antes de programar", desc: "No escribo una sola línea de código hasta entender cómo tu producto va a resolver un problema real y qué métricas importan." },
  { step: "02", title: "Diseño para la conversión", desc: "Prototipo interfaces rápidas y premium. Si el usuario no entiende cómo usar la plataforma en 3 segundos, el diseño falló." },
  { step: "03", title: "Ingeniería de alto nivel", desc: "Arquitectura sólida desde el día uno. Utilizo el mismo stack tecnológico y las mejores prácticas que las startups más exitosas." },
  { step: "04", title: "Lanzamiento y escala", desc: "No te entrego un archivo ZIP. Despliego tu producto en producción y configuro el terreno para que escale de forma automática." },
];

export function ProcessSection() {
  return (
    <section className="py-32 bg-surface/30 relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container-play">
        <Reveal>
          <div className="text-center mb-24">
            <span className="inline-block px-4 py-1.5 mb-6 text-[11px] font-semibold font-mono uppercase tracking-[0.2em] text-success bg-success/10 border border-success/20 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              Metodología
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Mi forma de construir</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.15}>
              <div className="group relative p-8 rounded-[2rem] bg-surface border border-border/50 h-full transition-all duration-500 hover:-translate-y-2 hover:border-border hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="text-6xl font-extrabold gradient-text opacity-20 group-hover:opacity-40 transition-opacity duration-500 absolute -top-2 -right-2">{p.step}</span>
                <div className="relative z-10 pt-12">
                  <h3 className="text-2xl font-bold mb-4">{p.title}</h3>
                  <p className="text-foreground-muted text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
