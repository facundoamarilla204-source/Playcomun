"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-background">
      <div className="container-play relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Text Content */}
          <div className="flex flex-col lg:col-span-7 relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >

            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-medium leading-[1.05] tracking-tight mb-8"
            >
              Software a medida,<br className="hidden lg:block" /> sin intermediarios.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-foreground-muted leading-relaxed mb-12 max-w-xl font-light"
            >
              Diseño y construyo aplicaciones web, sistemas de gestión y plataformas SaaS para empresas que necesitan resultados concretos. Hablás directo con quien diseña y desarrolla tu producto.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" href="#contacto">
                Comencemos un proyecto
              </Button>
              <Button variant="outline" size="lg" href="#proyectos">
                Explorar trabajo
              </Button>
            </motion.div>
          </div>

          {/* Minimalist Dashboard Mockup */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0 perspective-1000">
            <motion.div
              initial={{ opacity: 0, x: 40, rotateY: 10 }}
              animate={{ opacity: 1, x: 0, rotateY: -15 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full aspect-[4/3] max-w-lg mx-auto lg:ml-auto rounded-xl border border-border bg-surface shadow-2xl overflow-hidden flex flex-col transform-gpu"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Window Header */}
              <div className="h-10 bg-surface border-b border-border flex items-center px-4 gap-2 shrink-0">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-border-hover" />
                  <div className="w-2.5 h-2.5 rounded-full bg-border-hover" />
                  <div className="w-2.5 h-2.5 rounded-full bg-border-hover" />
                </div>
                <div className="mx-auto h-3 w-32 bg-background rounded-sm opacity-50" />
              </div>

              {/* Dashboard Layout */}
              <div className="flex flex-1 overflow-hidden">
                {/* Sidebar */}
                <div className="w-16 border-r border-border bg-surface flex flex-col gap-4 p-3 shrink-0">
                  <div className="w-full aspect-square rounded bg-primary/20 mb-4" />
                  <div className="w-full aspect-square rounded bg-border-hover opacity-30" />
                  <div className="w-full aspect-square rounded bg-border-hover opacity-30" />
                  <div className="w-full aspect-square rounded bg-border-hover opacity-30" />
                  <div className="w-full aspect-square rounded bg-border-hover opacity-30 mt-auto" />
                </div>

                {/* Main Content */}
                <div className="flex-1 p-5 flex flex-col gap-4 bg-background">
                  {/* Header row */}
                  <div className="flex justify-between items-center mb-2">
                    <div className="h-4 w-24 bg-surface rounded" />
                    <div className="h-6 w-16 bg-primary/20 rounded border border-primary/30" />
                  </div>

                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-16 rounded border border-border bg-surface p-2 flex flex-col justify-between">
                      <div className="h-2 w-12 bg-border-hover rounded opacity-50" />
                      <div className="h-4 w-16 bg-foreground rounded opacity-80" />
                    </div>
                    <div className="h-16 rounded border border-primary/20 bg-primary/5 p-2 flex flex-col justify-between relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                      <div className="h-2 w-12 bg-primary/40 rounded" />
                      <div className="h-4 w-20 bg-primary rounded opacity-90" />
                    </div>
                    <div className="h-16 rounded border border-border bg-surface p-2 flex flex-col justify-between">
                      <div className="h-2 w-12 bg-border-hover rounded opacity-50" />
                      <div className="h-4 w-12 bg-foreground rounded opacity-80" />
                    </div>
                  </div>

                  {/* Chart Area */}
                  <div className="flex-1 rounded border border-border bg-surface relative overflow-hidden p-3 flex flex-col">
                    <div className="h-2 w-20 bg-border-hover rounded opacity-50 mb-auto" />

                    {/* Fake Chart SVG */}
                    <div className="absolute bottom-0 left-0 right-0 h-2/3">
                      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 100">
                        <path
                          d="M0,100 L0,70 Q10,60 20,80 T40,60 T60,50 T80,20 L100,30 L100,100 Z"
                          fill="var(--color-primary)"
                          fillOpacity="0.1"
                        />
                        <path
                          d="M0,70 Q10,60 20,80 T40,60 T60,50 T80,20 L100,30"
                          fill="none"
                          stroke="var(--color-primary)"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Ambient Background Glow matching Primary Color */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 blur-[100px] -z-10 rounded-full pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
