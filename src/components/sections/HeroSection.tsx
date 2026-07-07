"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  const { scrollY } = useScroll();
  const heroMockupY = useTransform(scrollY, [0, 1000], [0, 150]);
  const heroTextY = useTransform(scrollY, [0, 1000], [0, 50]);
  const floatingCardY1 = useTransform(scrollY, [0, 1000], [0, -100]);
  const floatingCardY2 = useTransform(scrollY, [0, 1000], [0, -50]);

  return (
    <section id="inicio" className="relative min-h-[100dvh] flex items-center pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Massive Animated Background Blurs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.4, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] right-[5%] w-[800px] h-[800px] bg-primary/30 rounded-full blur-[200px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[40%] right-[20%] w-[600px] h-[600px] bg-indigo/30 rounded-full blur-[180px]"
        />
        <div className="absolute bottom-[0%] left-[10%] w-[700px] h-[700px] bg-electric/15 rounded-full blur-[200px]" />
      </div>

      {/* Noise Texture */}
      <div className="noise-overlay absolute inset-0 pointer-events-none z-0" />

      <div className="container-play relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Text Content */}
          <motion.div style={{ y: heroTextY }} className="z-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold leading-[1.05] tracking-[-0.03em] mb-6 drop-shadow-2xl"
            >
              Software a medida, sin{" "}
              <span className="gradient-text">intermediarios.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-foreground-muted leading-relaxed mb-10 max-w-lg"
            >
              Diseño y construyo aplicaciones web y plataformas SaaS para emprendedores y empresas que necesitan resultados, no reuniones eternas. Hablás conmigo, no con un account manager.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <Button size="lg" href="#contacto">
                Comencemos un proyecto
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Button>
              <Button variant="secondary" size="lg" href="#proyectos">Explorar mi trabajo</Button>
            </motion.div>
          </motion.div>

          {/* Apple-tier Mockup Composition */}
          <motion.div
            style={{ y: heroMockupY }}
            initial={{ opacity: 0, scale: 0.8, rotateY: 10, rotateX: 5 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0, rotateX: 0 }}
            transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block relative perspective-[1200px]"
          >
            {/* Massive Glow Behind Mockup */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/40 to-indigo/40 rounded-full blur-[100px] pointer-events-none -z-10" />

            {/* Main Laptop (Mercury Dashboard) */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-[110%] -ml-[5%] rounded-[2rem] p-[1px] bg-gradient-to-b from-white/20 to-transparent shadow-[0_40px_100px_rgba(0,0,0,0.8),0_0_40px_rgba(124,58,237,0.3)] backdrop-blur-3xl"
            >
              <div className="rounded-[calc(2rem-1px)] bg-[#111115]/90 p-4 border border-black/50">
                <div className="rounded-xl bg-background border border-border overflow-hidden h-[340px] flex flex-col relative">
                  {/* Fake Browser Header */}
                  <div className="h-10 bg-[#1A1A20] flex items-center px-4 gap-2 border-b border-white/5 relative z-20">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-black/20" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black/20" />
                    <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-black/20" />
                    <div className="flex-1 flex justify-center">
                      <div className="px-10 py-1.5 bg-black/40 rounded-md text-[11px] font-mono text-white/50 border border-white/5 shadow-inner">
                        playcomun.com
                      </div>
                    </div>
                  </div>
                  {/* Fake Mercury Dashboard Content */}
                  <div className="flex-1 bg-gradient-to-br from-[#0D0D12] to-[#14141A] p-6 relative overflow-hidden">
                    {/* Grid Lines in bg */}
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '24px 24px' }} />

                    <div className="flex justify-between items-center mb-6 relative z-10">
                      <div>
                        <h2 className="text-white font-bold text-lg mb-1">Resumen de Cuenta</h2>
                        <p className="text-white/50 text-xs">Métricas en tiempo real (Últimos 30 días)</p>
                      </div>
                      <div className="h-8 px-4 bg-primary/20 border border-primary/30 rounded-full flex items-center justify-center text-primary text-xs font-semibold cursor-default">
                        Exportar
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-6 relative z-10">
                      {/* Card 1 */}
                      <div className="h-24 bg-gradient-to-b from-white/5 to-transparent rounded-xl border border-white/10 p-4 flex flex-col justify-between">
                        <span className="text-white/50 text-xs font-medium">Ingresos MRR</span>
                        <div>
                          <div className="text-white font-bold text-xl mb-1">$12,450</div>
                          <div className="text-success text-xs flex items-center gap-1 font-medium">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                            +14.5%
                          </div>
                        </div>
                      </div>

                      {/* Card 2 with Line Chart */}
                      <div className="h-24 bg-gradient-to-b from-primary/10 to-transparent rounded-xl border border-primary/20 p-4 flex flex-col justify-between relative overflow-hidden">
                        <span className="text-primary/80 text-xs font-medium relative z-10">Nuevos Usuarios</span>
                        <div className="relative z-10">
                          <div className="text-white font-bold text-xl mb-1">8,234</div>
                          <div className="text-primary text-xs flex items-center gap-1 font-medium">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                            +22.4%
                          </div>
                        </div>
                        <svg className="absolute bottom-0 left-0 w-full h-12 opacity-40 pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 40" fill="none">
                          <path d="M0,40 L0,20 C10,15 20,30 30,20 C40,10 50,25 60,15 C70,5 80,25 90,10 L100,5 L100,40 Z" fill="url(#gradient-line)" />
                          <path d="M0,20 C10,15 20,30 30,20 C40,10 50,25 60,15 C70,5 80,25 90,10 L100,5" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
                          <defs>
                            <linearGradient id="gradient-line" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="currentColor" className="text-primary" stopOpacity="0.8" />
                              <stop offset="100%" stopColor="currentColor" className="text-primary" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>

                      {/* Card 3 */}
                      <div className="h-24 bg-gradient-to-b from-white/5 to-transparent rounded-xl border border-white/10 p-4 flex flex-col justify-between">
                        <span className="text-white/50 text-xs font-medium">Conversión</span>
                        <div>
                          <div className="text-white font-bold text-xl mb-1">4.2%</div>
                          <div className="text-warning text-xs flex items-center gap-1 font-medium">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            Estable
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="h-32 bg-white/[0.03] rounded-xl border border-white/5 relative z-10 p-4 flex flex-col">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white/50 text-xs font-medium">Tráfico Diario</span>
                        <span className="text-white/30 text-[10px]">Oct 1 - Oct 9</span>
                      </div>
                      <div className="flex gap-2 items-end flex-1">
                        {[40, 70, 45, 90, 65, 80, 50, 100, 75].map((h, i) => (
                          <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ duration: 1, delay: 1 + i * 0.1 }}
                            className="flex-1 bg-gradient-to-t from-primary/50 to-electric/80 rounded-t-sm"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Overlapping Phone (FitAdmi) */}
            <motion.div
              style={{ y: floatingCardY1 }}
              className="absolute -bottom-16 -left-16 w-[180px] z-30"
            >
              <div className="rounded-[2.5rem] p-[1.5px] bg-gradient-to-tr from-white/20 via-white/5 to-white/30 shadow-[0_30px_60px_rgba(0,0,0,0.6),0_0_30px_rgba(91,92,235,0.4)] backdrop-blur-md">
                <div className="rounded-[calc(2.5rem-1.5px)] bg-black p-2 border border-black">
                  <div className="rounded-[2rem] bg-background border border-white/10 overflow-hidden h-[360px] relative">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-b-xl z-20" />

                    {/* Phone Content */}
                    <div className="absolute inset-0 bg-gradient-to-b from-indigo/20 to-background p-4 pt-8">
                      <div className="flex justify-between items-center mb-6 mt-2">
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center overflow-hidden border border-white/10">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" className="w-full h-full object-cover" />
                        </div>
                        <div className="px-2 py-1 bg-primary/20 border border-primary/30 text-primary rounded-full text-[9px] font-bold tracking-wide uppercase">
                          Premium
                        </div>
                      </div>

                      <div className="h-32 bg-gradient-to-br from-indigo/30 to-primary/30 rounded-2xl border border-white/10 mb-4 p-4 flex flex-col justify-between relative overflow-hidden">
                        <span className="text-white/70 text-[10px] font-medium relative z-10">Ventas del Mes</span>
                        <div className="relative z-10">
                          <div className="text-white font-bold text-2xl mb-0 leading-none">$8,450</div>
                          <div className="text-success text-[9px] flex items-center gap-1 font-medium mt-1">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                            +12.5% vs mes anterior
                          </div>
                        </div>
                        <svg className="absolute bottom-0 right-0 w-24 h-24 opacity-20 -mr-4 -mb-4 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="h-20 bg-white/5 rounded-xl border border-white/10 p-3 flex flex-col justify-center items-center text-center">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary mb-1"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                          <span className="text-white font-bold text-[13px] leading-tight">432</span>
                          <span className="text-white/40 text-[9px] font-medium">Clientes</span>
                        </div>
                        <div className="h-20 bg-white/5 rounded-xl border border-white/10 p-3 flex flex-col justify-center items-center text-center">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-electric mb-1"><path d="M22 11.08V12a10.0001 10.0001 0 0 1-5.93 9.14M22 4L12 14.01l-3-3"></path></svg>
                          <span className="text-white font-bold text-[13px] leading-tight">94%</span>
                          <span className="text-white/40 text-[9px] font-medium">Satisfacción</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Element 1 */}
            <motion.div
              style={{ y: floatingCardY2 }}
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-10 -right-12 z-20"
            >
              <div className="px-6 py-4 rounded-2xl bg-surface/80 backdrop-blur-xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-success"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-white">99.9% Uptime</p>
                  <p className="text-xs text-foreground-muted">Sistemas robustos</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
