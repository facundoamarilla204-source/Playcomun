"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Activity, Code2, Database, LayoutTemplate, ShieldCheck, Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-background">
      <div className="container-play relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Text Content */}
          <div className="flex flex-col lg:col-span-6 relative z-20">
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
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight mb-8"
            >
              Páginas Web, Aplicaciones Web y Plataformas SaaS.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-foreground-muted leading-relaxed mb-12 max-w-xl font-light"
            >
              Diseñamos y desarrollamos productos digitales modernos para empresas, emprendimientos y nuevas ideas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" href="#contacto">
                Crear mi proyecto
              </Button>
              <Button variant="outline" size="lg" href="#servicios">
                Ver servicios
              </Button>
            </motion.div>
          </div>

          {/* Developer Illustration */}
          <div className="lg:col-span-6 relative mt-12 lg:mt-0 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-xl lg:max-w-2xl mx-auto lg:ml-auto flex justify-center items-center lg:scale-110 lg:translate-x-8"
            >
              <div className="w-full aspect-[4/3] lg:aspect-[16/10] relative flex items-center justify-center">
                
                {/* Glow de fondo para despegar la UI */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>

                {/* Main Dashboard Window */}
                <div className="relative w-full h-full bg-[#0d0714]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden">
                  
                  {/* Window Header */}
                  <div className="h-10 bg-white/[0.02] border-b border-white/10 flex items-center px-4 justify-between">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-white/20"></div>
                      <div className="w-3 h-3 rounded-full bg-white/20"></div>
                      <div className="w-3 h-3 rounded-full bg-white/20"></div>
                    </div>
                    <div className="flex items-center gap-2 bg-black/40 px-3 py-1 rounded text-xs font-mono text-white/40 border border-white/5">
                      <ShieldCheck className="w-3 h-3 text-green-400" />
                      <span>playcomun.com/app</span>
                    </div>
                    <div className="w-12"></div> {/* spacer */}
                  </div>

                  {/* Dashboard Layout */}
                  <div className="flex flex-1 overflow-hidden">
                    
                    {/* Sidebar */}
                    <div className="w-16 md:w-48 bg-white/[0.01] border-r border-white/5 flex flex-col gap-2 p-3">
                      <div className="h-8 rounded bg-primary/20 flex items-center gap-3 px-2 text-primary font-medium text-sm">
                        <LayoutTemplate className="w-4 h-4" />
                        <span className="hidden md:block">Dashboard</span>
                      </div>
                      <div className="h-8 rounded hover:bg-white/5 flex items-center gap-3 px-2 text-white/50 text-sm">
                        <Database className="w-4 h-4" />
                        <span className="hidden md:block">Databases</span>
                      </div>
                      <div className="h-8 rounded hover:bg-white/5 flex items-center gap-3 px-2 text-white/50 text-sm">
                        <Code2 className="w-4 h-4" />
                        <span className="hidden md:block">API Keys</span>
                      </div>
                    </div>

                    {/* Main Content (Bento Grid) */}
                    <div className="flex-1 p-4 md:p-6 grid grid-cols-2 gap-4">
                      
                      {/* Metric 1 */}
                      <div className="col-span-2 md:col-span-1 bg-white/[0.03] border border-white/5 rounded-xl p-4 flex flex-col justify-between group hover:border-primary/50 transition-colors">
                        <div className="text-white/50 text-xs font-mono mb-2">Performance (TTFB)</div>
                        <div className="flex items-end gap-2">
                          <span className="text-3xl font-bold text-white tracking-tighter">45</span>
                          <span className="text-primary text-sm mb-1 font-mono">ms</span>
                        </div>
                        <div className="w-full h-1.5 bg-black/50 rounded-full mt-4 overflow-hidden">
                          <div className="w-[85%] h-full bg-gradient-to-r from-primary to-[#c4b5fd] rounded-full"></div>
                        </div>
                      </div>

                      {/* Metric 2 */}
                      <div className="col-span-2 md:col-span-1 bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-xl p-4 relative overflow-hidden">
                        <div className="absolute -right-4 -top-4 text-primary/10">
                          <Activity className="w-24 h-24" />
                        </div>
                        <div className="text-primary/70 text-xs font-mono mb-2 relative z-10">Uptime Global</div>
                        <div className="text-3xl font-bold text-white relative z-10 tracking-tighter">99.99%</div>
                        <div className="mt-4 flex items-center gap-2 text-xs text-green-400 font-mono relative z-10">
                          <Zap className="w-3 h-3" />
                          <span>All systems operational</span>
                        </div>
                      </div>

                      {/* Code Block Snippet */}
                      <div className="col-span-2 bg-black/40 border border-white/5 rounded-xl p-4 font-mono text-[10px] md:text-xs leading-relaxed overflow-hidden">
                        <div className="flex gap-2 border-b border-white/5 pb-2 mb-2">
                          <div className="text-white/40">app.ts</div>
                          <div className="text-primary border-b border-primary pb-2 -mb-2">deploy.config.js</div>
                        </div>
                        <p><span className="text-[#c4b5fd]">export const</span> <span className="text-blue-400">config</span> = {'{'}</p>
                        <p className="pl-4"><span className="text-gray-400">runtime</span>: <span className="text-green-300">'edge'</span>,</p>
                        <p className="pl-4"><span className="text-gray-400">regions</span>: [<span className="text-green-300">'gru1'</span>, <span className="text-green-300">'iad1'</span>],</p>
                        <p className="pl-4"><span className="text-gray-400">scalable</span>: <span className="text-orange-400">true</span></p>
                        <p>{'};'}</p>
                      </div>

                    </div>
                  </div>
                </div>

                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-6 -bottom-6 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-lg p-3 shadow-2xl flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]"></div>
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">Deployment Ready</div>
                    <div className="text-white/50 text-xs font-mono">Production branch</div>
                  </div>
                </motion.div>

              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
