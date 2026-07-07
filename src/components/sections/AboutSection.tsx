"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function AboutSection() {
  return (
    <section id="nosotros" className="py-32">
      <div className="container-play">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div>
              <span className="inline-block px-4 py-1.5 mb-6 text-[11px] font-semibold font-mono uppercase tracking-[0.2em] text-primary bg-primary/10 border border-primary/20 rounded-full shadow-[0_0_15px_rgba(124,58,237,0.2)]">
                Sobre mí
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8 leading-[1.1]">
                Conmigo hablás,<br />
                <span className="gradient-text">conmigo trabajás.</span>
              </h2>
              <p className="text-lg text-foreground-muted leading-relaxed mb-6">
                Cuando me escribís, no hay un vendedor que después le pasa el proyecto a otro. El que te responde es el mismo que va a escribir cada línea de código de tu producto — desde el primer mensaje hasta el día que lo publicás.
              </p>
              <p className="text-lg text-foreground-muted leading-relaxed mb-6">
                Esa no es una limitación: es la razón por la que no se pierde nada en el camino. Mercury, FitAdmi y TurnoGol no son casos de un cliente que no podés ver — son productos que construí por mi cuenta para probar mi forma de trabajar antes de ofrecértela a vos.
              </p>
              <p className="text-lg text-foreground-muted leading-relaxed mb-6">
                No compito con una agencia en cantidad de gente. Compito en que vas a tener una sola persona responsable de que tu proyecto funcione, sin nadie en el medio traduciendo lo que pediste en algo distinto.
              </p>
              <p className="text-lg text-foreground-muted leading-relaxed mb-10">
                Si tenés una idea que necesita convertirse en real, hablemos 15 minutos y vemos si puedo ayudarte.
              </p>
              <Button variant="primary" size="lg" href="#contacto">Hablemos</Button>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="relative group w-full h-full flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-indigo/20 blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700" />
              <Image
                src="/developer_illustration.png"
                alt="Ilustración de desarrollo web moderno"
                width={600}
                height={600}
                priority
                className="relative z-10 w-full max-w-lg h-auto object-contain transform transition-transform duration-700 group-hover:scale-105 mix-blend-screen pointer-events-none scale-110"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
