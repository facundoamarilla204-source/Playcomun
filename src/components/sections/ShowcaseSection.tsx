"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const showcaseItems = [
  { 
    id: "web", 
    title: "Página Web",
    description: "Diseño y desarrollo de sitios institucionales y páginas orientadas a la venta. Alto nivel estético, tiempos de carga milimétricos y optimización SEO técnica."
  },
  { 
    id: "app", 
    title: "Aplicaciones Web",
    description: "Interfaces complejas, dashboards y plataformas PWA. Diseñamos experiencias ultrafluidas que se sienten como aplicaciones nativas desde cualquier navegador."
  },
  { 
    id: "saas", 
    title: "SaaS",
    description: "Desarrollo end-to-end de Software as a Service. Gestión de suscripciones, multi-tenant, paneles de administración y arquitecturas altamente escalables."
  },
  { 
    id: "custom", 
    title: "Sistemas a Medida",
    description: "Digitalización de procesos internos, automatizaciones complejas y arquitecturas cloud específicas. Resolvemos cuellos de botella con software a tu medida."
  },
];

const WebStructurePreview = () => (
  <div className="w-full h-full flex flex-col bg-[#0a0a0c] relative overflow-hidden pointer-events-none text-white/90 font-sans">
    {/* Navbar */}
    <div className="w-full h-12 border-b border-white/10 flex items-center px-8 justify-between bg-white/[0.02] backdrop-blur-sm z-10">
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-primary to-primary/50 flex items-center justify-center font-bold text-[10px]">L</div>
        <span className="text-xs font-semibold tracking-widest uppercase">LogoMarca</span>
      </div>
      <div className="flex gap-6 items-center text-[10px] text-white/60">
        <span>Inicio</span>
        <span>Nosotros</span>
        <span>Servicios</span>
        <div className="px-4 py-1.5 bg-primary text-primary-foreground font-semibold rounded-full shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)]">
           Contacto
        </div>
      </div>
    </div>
    
    {/* Hero */}
    <div className="flex-1 flex flex-col items-center justify-center p-8 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/20 blur-[100px] rounded-full" />
      
      <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-[9px] text-primary mb-6">
        ETIQUETA DESTACADA
      </div>
      
      <h1 className="text-3xl font-bold text-center leading-tight mb-4 max-w-lg bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
        El título principal de tu sitio web irá aquí.
      </h1>
      
      <p className="text-[11px] text-white/50 text-center max-w-md mb-8 leading-relaxed">
        Un subtítulo claro y persuasivo que explique el valor principal de tus servicios, conectando directamente con las necesidades de tu usuario.
      </p>
      
      <div className="flex gap-4">
        <div className="px-6 py-2.5 rounded-full bg-primary flex items-center justify-center shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)] text-[11px] font-semibold text-primary-foreground">
           Acción principal
        </div>
        <div className="px-6 py-2.5 rounded-full border border-white/20 flex items-center justify-center bg-white/5 text-[11px] font-medium text-white/80">
           Saber más
        </div>
      </div>
    </div>
  </div>
);

const WebAppPreview = () => (
  <div className="w-full h-full flex bg-[#0a0a0c] overflow-hidden pointer-events-none text-white font-sans">
    {/* Sidebar */}
    <div className="w-32 h-full border-r border-white/10 flex flex-col py-4 px-3 gap-2 bg-[#0d0d12]">
      <div className="flex items-center gap-2 px-2 mb-6">
        <div className="w-6 h-6 rounded bg-gradient-to-br from-primary to-primary/40 flex items-center justify-center font-bold text-[10px]">A</div>
        <span className="text-[10px] font-bold">AppPanel</span>
      </div>
      
      {['Dashboard', 'Analíticas', 'Usuarios', 'Reportes', 'Ajustes'].map((item, i) => (
        <div key={i} className={`w-full py-2 px-2 rounded-lg flex items-center gap-2 ${i === 0 ? 'bg-primary/15 text-primary' : 'text-white/40'}`}>
          <div className={`w-3 h-3 rounded-sm ${i === 0 ? 'bg-primary/80' : 'bg-white/20'}`} />
          <span className="text-[9px] font-medium">{item}</span>
        </div>
      ))}
      
      <div className="mt-auto px-2 py-2 flex items-center gap-2 text-white/40 border-t border-white/10">
         <div className="w-5 h-5 rounded-full bg-white/20" />
         <span className="text-[9px]">Admin User</span>
      </div>
    </div>
    
    {/* Main */}
    <div className="flex-1 flex flex-col relative bg-[#0a0a0c]">
       {/* Header */}
       <div className="h-12 border-b border-white/10 flex items-center justify-between px-6 bg-white/[0.01]">
          <div className="text-xs font-semibold text-white/80">Overview General</div>
          <div className="w-48 h-6 rounded-md bg-white/5 border border-white/10 flex items-center px-3">
             <div className="text-[8px] text-white/30">Buscar transacciones...</div>
          </div>
       </div>
       
       {/* Dashboard Content */}
       <div className="p-6 flex-1 flex flex-col gap-6">
          <div className="flex gap-4">
            {[
              { title: "Ingresos Totales", value: "$45,231.89", trend: "+20.1%" },
              { title: "Nuevos Usuarios", value: "+2,350", trend: "+15.2%" },
              { title: "Sesiones Activas", value: "12,234", trend: "+5.4%" }
            ].map((stat, i) => (
              <div key={i} className="flex-1 rounded-xl border border-white/10 bg-[#0d0d12] p-4 flex flex-col justify-between relative overflow-hidden">
                <span className="text-[9px] text-white/50">{stat.title}</span>
                <span className="text-lg font-bold mt-1">{stat.value}</span>
                <span className="text-[9px] text-primary font-medium mt-2">{stat.trend} este mes</span>
                {i === 0 && <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary/20 blur-xl rounded-full" />}
              </div>
            ))}
          </div>
          
          <div className="flex-1 rounded-xl border border-white/10 bg-[#0d0d12] p-5 flex flex-col">
             <span className="text-[10px] font-semibold text-white/70 mb-4">Métricas de Rendimiento</span>
             <div className="flex-1 flex items-end gap-3 relative pb-4 border-b border-white/10">
               {/* Chart bars */}
               {[30, 50, 40, 70, 60, 90, 45, 80, 55, 100].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                    <div className="w-full rounded-t-sm bg-gradient-to-t from-primary/10 to-primary/60 hover:to-primary transition-colors" style={{ height: `${h}%` }} />
                    <span className="absolute -bottom-4 text-[7px] text-white/30">0{i+1}</span>
                  </div>
               ))}
             </div>
          </div>
       </div>
    </div>
  </div>
);

const SaasPreview = () => (
  <div className="w-full h-full flex flex-col bg-[#0a0a0c] overflow-hidden pointer-events-none p-8 font-sans text-white">
     <div className="w-full flex flex-col items-center mb-6">
       <span className="text-[10px] text-primary font-bold uppercase tracking-widest mb-2">Precios</span>
       <h2 className="text-xl font-bold mb-2">Planes escalables para tu negocio</h2>
       <p className="text-[10px] text-white/50">Comienza gratis y mejora según tus necesidades.</p>
     </div>
     
     <div className="flex gap-4 h-full items-center justify-center">
        {/* Tier 1 */}
        <div className="w-1/3 h-[85%] rounded-2xl border border-white/10 bg-[#0d0d12] p-5 flex flex-col">
           <span className="text-[11px] font-semibold text-white/70 mb-1">Básico</span>
           <div className="text-2xl font-bold mb-4">$0<span className="text-[9px] text-white/40 font-normal">/mes</span></div>
           <div className="w-full py-1.5 text-center rounded-md border border-white/20 text-[9px] font-medium mb-6">Plan Actual</div>
           <div className="flex flex-col gap-3">
             {["1 Usuario", "5 Proyectos", "Soporte comunitario"].map((feature, i) => (
               <div key={i} className="flex gap-2 items-center text-[9px] text-white/60">
                 <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                 {feature}
               </div>
             ))}
           </div>
        </div>
        
        {/* Tier 2 (Highlighted) */}
        <div className="w-1/3 h-full rounded-2xl border border-primary/50 bg-[#120f18] p-5 flex flex-col relative shadow-[0_0_30px_rgba(var(--primary-rgb),0.15)] scale-105 z-10">
           <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-primary text-primary-foreground rounded-full text-[7px] font-bold uppercase">
             Más Popular
           </div>
           <span className="text-[11px] font-semibold text-primary mb-1 mt-1">Pro</span>
           <div className="text-2xl font-bold mb-4">$29<span className="text-[9px] text-white/40 font-normal">/mes</span></div>
           <div className="w-full py-1.5 text-center rounded-md bg-primary text-primary-foreground text-[9px] font-bold mb-6 shadow-lg shadow-primary/20">Mejorar a Pro</div>
           <div className="flex flex-col gap-3">
             {["Usuarios ilimitados", "Proyectos ilimitados", "Analíticas avanzadas", "Soporte 24/7", "Integración API"].map((feature, i) => (
               <div key={i} className="flex gap-2 items-center text-[9px] text-white/80">
                 <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                 {feature}
               </div>
             ))}
           </div>
        </div>
        
        {/* Tier 3 */}
        <div className="w-1/3 h-[85%] rounded-2xl border border-white/10 bg-[#0d0d12] p-5 flex flex-col">
           <span className="text-[11px] font-semibold text-white/70 mb-1">Enterprise</span>
           <div className="text-2xl font-bold mb-4">$99<span className="text-[9px] text-white/40 font-normal">/mes</span></div>
           <div className="w-full py-1.5 text-center rounded-md border border-white/20 text-[9px] font-medium mb-6">Contactar</div>
           <div className="flex flex-col gap-3">
             {["Todo lo de Pro", "Infraestructura dedicada", "SLA del 99.99%", "Manager de cuenta"].map((feature, i) => (
               <div key={i} className="flex gap-2 items-center text-[9px] text-white/60">
                 <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                 {feature}
               </div>
             ))}
           </div>
        </div>
     </div>
  </div>
);

const CustomSystemPreview = () => (
  <div className="w-full h-full flex flex-col bg-[#0a0a0c] overflow-hidden pointer-events-none p-6 relative font-sans text-white">
     {/* Workflow Grid Background */}
     <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
     
     <div className="flex justify-between items-center mb-10 relative z-10">
        <div>
          <h3 className="text-sm font-bold">Arquitectura de Procesos</h3>
          <span className="text-[9px] text-white/40">Flujo de datos automatizado - Entorno de producción</span>
        </div>
        <div className="px-3 py-1 bg-green-500/10 border border-green-500/30 text-green-400 rounded-full text-[8px] font-bold uppercase flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
          Sistema Online
        </div>
     </div>
     
     {/* Nodes */}
     <div className="flex-1 relative z-10 flex items-center justify-center">
        {/* Connection Lines (SVG) */}
        <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
           <path d="M 180 130 C 260 130, 260 80, 340 80" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="none" strokeDasharray="4 2" />
           <path d="M 180 130 C 260 130, 260 180, 340 180" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="none" strokeDasharray="4 2" />
           <path d="M 340 80 C 420 80, 420 130, 500 130" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="none" strokeDasharray="4 2" />
           <path d="M 340 180 C 420 180, 420 130, 500 130" stroke="rgba(var(--primary-rgb),0.6)" strokeWidth="2" fill="none" />
           
           {/* Animated data packet */}
           <circle cx="0" cy="0" r="3" fill="hsl(var(--primary))">
             <animateMotion path="M 340 180 C 420 180, 420 130, 500 130" dur="2s" repeatCount="indefinite" />
           </circle>
        </svg>

        <div className="w-full max-w-[600px] flex justify-between items-center px-4">
           {/* Node 1 */}
           <div className="w-28 py-3 px-3 rounded-lg bg-[#111] border border-white/10 backdrop-blur-md flex flex-col items-center gap-1.5 shadow-xl">
              <span className="text-[10px] font-bold">API Gateway</span>
              <span className="text-[7px] text-white/40">Entrada de peticiones</span>
           </div>
           
           {/* Column 2 */}
           <div className="flex flex-col gap-10">
              <div className="w-28 py-3 px-3 rounded-lg bg-[#111] border border-white/10 backdrop-blur-md flex flex-col items-center gap-1.5 shadow-xl">
                 <span className="text-[10px] font-bold">Auth Service</span>
                 <span className="text-[7px] text-white/40">Validación JWT</span>
              </div>
              <div className="w-28 py-3 px-3 rounded-lg bg-primary/10 border border-primary/40 shadow-[0_0_20px_rgba(var(--primary-rgb),0.2)] backdrop-blur-md flex flex-col items-center gap-1.5 relative">
                 <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(var(--primary-rgb),0.8)]" />
                 <span className="text-[10px] font-bold text-primary">Microservicio</span>
                 <span className="text-[7px] text-white/60">Procesamiento de datos</span>
              </div>
           </div>
           
           {/* Node 3 */}
           <div className="w-28 py-3 px-3 rounded-lg bg-[#111] border border-white/10 backdrop-blur-md flex flex-col items-center gap-1.5 shadow-xl">
              <span className="text-[10px] font-bold">Base de Datos</span>
              <span className="text-[7px] text-white/40">PostgreSQL Cloud</span>
           </div>
        </div>
     </div>
  </div>
);


export function ShowcaseSection() {
  const [activeItem, setActiveItem] = useState<string | null>(showcaseItems[0].id);
  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        // Asume un ancho virtual de 800px para la maqueta
        setScale(entry.contentRect.width / 800);
      }
    });
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const handlePrev = () => {
    if (activeItem === null) {
      setActiveItem(showcaseItems[showcaseItems.length - 1].id);
      return;
    }
    const idx = showcaseItems.findIndex(i => i.id === activeItem);
    const newIdx = idx === 0 ? showcaseItems.length - 1 : idx - 1;
    setActiveItem(showcaseItems[newIdx].id);
  };

  const handleNext = () => {
    if (activeItem === null) {
      setActiveItem(showcaseItems[0].id);
      return;
    }
    const idx = showcaseItems.findIndex(i => i.id === activeItem);
    const newIdx = idx === showcaseItems.length - 1 ? 0 : idx + 1;
    setActiveItem(showcaseItems[newIdx].id);
  };

  return (
    <section className="relative w-full py-12 sm:py-24 overflow-hidden bg-surface flex items-center min-h-[95vh]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl h-full flex flex-col justify-center">
        
        {/* Contenedor Card Principal */}
        <div className="w-full bg-muted/10 border border-border/50 rounded-[2rem] p-6 md:p-12 lg:p-16 shadow-2xl backdrop-blur-sm flex-1 flex flex-col justify-center">
          
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 w-full">
            
            {/* Lado Izquierdo: Textos y Controles Desktop */}
            <div className="w-full lg:w-1/3 flex flex-col space-y-6">
              <div className="text-center lg:text-left mb-2 lg:mb-0">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-foreground leading-tight">
                  Soluciones <br className="hidden lg:block"/> a medida
                </h2>
                <p className="text-muted-foreground text-lg mb-4">
                  Explora nuestras diferentes arquitecturas y descubre cómo se adaptan perfectamente a tu proyecto.
                </p>
              </div>
              
              {/* Controles Desktop */}
              <div className="hidden lg:flex flex-col gap-3 overflow-y-auto max-h-[60vh] hide-scrollbar pr-2">
                {showcaseItems.map((item) => {
                  const isActive = activeItem === item.id;
                  return (
                    <motion.button
                      layout
                      key={item.id}
                      onClick={() => setActiveItem(isActive ? null : item.id)}
                      className={`relative flex flex-col gap-2 px-6 py-4 rounded-2xl text-left transition-all duration-300 w-full group border overflow-hidden ${
                        isActive 
                          ? "bg-background border-primary/20 shadow-lg shadow-primary/5" 
                          : "bg-transparent border-transparent hover:bg-muted/30"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="active-indicator"
                          className="absolute inset-0 rounded-2xl border-2 border-primary/30 bg-primary/5"
                          initial={false}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                      
                      <div className="flex items-center gap-4 w-full">
                        <motion.div 
                          className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 z-10 shrink-0 ${
                            isActive 
                              ? "border-primary bg-primary/10 text-primary shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)]" 
                              : "border-muted-foreground/20 text-muted-foreground bg-transparent group-hover:border-muted-foreground/50 group-hover:bg-muted/10"
                          }`}
                        >
                          <motion.div
                            animate={{ rotate: isActive ? 45 : 0 }}
                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                            className="flex items-center justify-center"
                          >
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7 1V13M1 7H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </motion.div>
                        </motion.div>
                        <span className={`font-semibold z-10 text-lg transition-colors ${isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"}`}>
                          {item.title}
                        </span>
                      </div>

                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="z-10 pl-12 pr-2"
                          >
                            <p className="text-muted-foreground text-sm leading-relaxed mt-2 pb-2">
                              {item.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Lado Derecho: Notebook y Controles Mobile */}
            <div className="w-full lg:w-2/3 flex flex-col justify-center items-center">
              
              {/* Notebook */}
              <div className="relative w-full max-w-[900px] aspect-[16/10] perspective-[1200px] group mt-6 lg:mt-0">
                {/* Efecto de brillo de fondo de la notebook */}
                <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Marco de la Notebook */}
                <div className="relative w-full h-full rounded-t-[1rem] md:rounded-t-[2rem] bg-[#1a1b1e] border-[4px] md:border-[8px] border-[#2a2b2e] shadow-2xl overflow-hidden flex flex-col z-10 transition-transform duration-500 hover:scale-[1.02]">
                  
                  {/* Notch / Cámara */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 md:w-32 h-3 md:h-6 bg-[#2a2b2e] rounded-b-lg md:rounded-b-xl z-20 flex justify-center items-end pb-0.5 md:pb-1">
                    <div className="w-1 md:w-2 h-1 md:h-2 rounded-full bg-[#111] border border-[#333] shadow-inner" />
                  </div>

                  {/* Pantalla (Contenido Dinámico Escalonado) */}
                  <div ref={containerRef} className="flex-1 bg-black overflow-hidden relative">
                    <div 
                      className="absolute top-0 left-0 origin-top-left flex items-center justify-center pointer-events-none"
                      style={{ 
                        width: '800px', 
                        height: '500px',
                        transform: `scale(${scale})`
                      }}
                    >
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeItem}
                          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                          exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="absolute inset-0 flex items-center justify-center w-full h-full"
                        >
                          {activeItem === "web" && <WebStructurePreview />}
                          {activeItem === "app" && <WebAppPreview />}
                          {activeItem === "saas" && <SaasPreview />}
                          {activeItem === "custom" && <CustomSystemPreview />}
                          {!activeItem && (
                            <div className="w-full h-full flex flex-col items-center justify-center bg-[#0a0a0c] text-white/50 font-sans p-8 text-center">
                              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z"/><path d="m14 7 3 3"/><path d="M5 6v4"/><path d="M19 14v4"/><path d="M10 2v2"/><path d="M7 8H3"/><path d="M21 16h-4"/><path d="M11 3H9"/></svg>
                              </div>
                              <h3 className="text-xl font-bold text-white/80 mb-2">Selecciona una solución</h3>
                              <p className="text-xs max-w-sm text-white/40">
                                Haz clic en las opciones para ver la estructura, paneles y flujos de datos de cada tecnología.
                              </p>
                            </div>
                          )}
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                  
                  {/* Logo inferior o marco base */}
                  <div className="h-4 md:h-6 bg-[#2a2b2e] w-full flex justify-center items-center">
                    <span className="text-[5px] md:text-[8px] font-bold tracking-widest text-[#555]">PROBOOK</span>
                  </div>
                </div>

                {/* Base de la Notebook */}
                <div className="absolute -bottom-2 md:-bottom-4 left-[-2%] right-[-2%] h-2 md:h-4 bg-gradient-to-b from-[#3a3b3e] to-[#1a1b1e] rounded-b-lg md:rounded-b-2xl rounded-t-sm shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8)] z-10 transition-transform duration-500 hover:scale-[1.02]">
                  {/* Hendidura para abrir */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 md:w-24 h-0.5 md:h-1 bg-[#1a1b1e] rounded-b-sm" />
                </div>
              </div>

              {/* Controles Mobile */}
              <div className="w-full mt-12 lg:hidden flex flex-col gap-6">
                
                {/* Botones horizontales / Tabs */}
                <div className="flex gap-3 overflow-x-auto w-full pb-2 hide-scrollbar snap-x snap-mandatory px-1">
                  {showcaseItems.map((item) => {
                    const isActive = activeItem === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveItem(isActive ? null : item.id)}
                        className={`flex-shrink-0 snap-center px-5 py-2.5 rounded-full text-sm font-medium transition-all border ${
                          isActive 
                            ? "bg-primary text-primary-foreground border-primary shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)]" 
                            : "bg-surface border-border text-foreground-muted hover:bg-white/5"
                        }`}
                      >
                        {item.title}
                      </button>
                    );
                  })}
                </div>

                {/* Flechas y Descripción */}
                <div className="flex items-center justify-between w-full bg-background border border-border/50 rounded-2xl p-4 gap-4 shadow-lg">
                  <button onClick={handlePrev} className="w-10 h-10 rounded-full flex items-center justify-center bg-surface border border-border text-foreground hover:bg-white/5 flex-shrink-0 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                  </button>
                  
                  <div className="flex-1 flex flex-col items-center">
                    <p className="text-muted-foreground text-[13px] text-center leading-relaxed">
                       {activeItem ? showcaseItems.find(i => i.id === activeItem)?.description : "Selecciona una opción arriba para ver los detalles."}
                    </p>
                  </div>
                  
                  <button onClick={handleNext} className="w-10 h-10 rounded-full flex items-center justify-center bg-surface border border-border text-foreground hover:bg-white/5 flex-shrink-0 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                  </button>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
