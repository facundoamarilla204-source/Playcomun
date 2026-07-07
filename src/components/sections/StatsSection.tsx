"use client";

import { Reveal } from "@/components/ui/Reveal";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";

const stats = [
  { value: 100, prefix: "", suffix: "%", label: "Proyectos a tiempo", isText: false },
  { value: 10, prefix: "+", suffix: "", label: "Tecnologías dominadas", isText: false },
  { value: 0, textValue: "Directo", prefix: "", suffix: "", label: "Soporte sin intermediarios", isText: true },
  { value: 5, prefix: "", suffix: "", label: "Productos de alto impacto", isText: false },
];

export function StatsSection() {
  return (
    <section className="py-24 border-y border-border/30 bg-surface/20">
      <div className="container-play">
        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center md:text-left group">
                <h3 className="text-4xl md:text-5xl font-extrabold gradient-text mb-2 drop-shadow-md group-hover:scale-105 transition-transform duration-500 origin-left">
                  {stat.isText ? stat.textValue : <AnimatedNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />}
                </h3>
                <p className="text-sm font-medium text-foreground-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
