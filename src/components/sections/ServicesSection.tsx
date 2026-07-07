"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceCard } from "@/components/ui/ServiceCard";

const services = [
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>, title: "Landing Pages y Sitios Web", desc: "Tu presencia online lista en días, no meses. Páginas de carga inmediata pensadas exclusivamente para convertir visitantes en clientes.", color: "bg-primary/15 text-primary border border-primary/20" },
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="9" y1="3" x2="9" y2="21" /></svg>, title: "Aplicaciones Web a Medida", desc: "Sistemas únicos sin plantillas ni CMS lentos. Interfaces rápidas y robustas diseñadas para maximizar la retención de tus usuarios.", color: "bg-indigo/15 text-indigo border border-indigo/20" },
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg>, title: "Plataformas SaaS", desc: "Arquitecturas en la nube preparadas para escalar sin romperse. Seguridad, multi-tenant y máximo rendimiento desde el día uno.", color: "bg-electric/15 text-electric border border-electric/20" },
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.275 1.275L3 12l5.8 1.9a2 2 0 0 1 1.275 1.275L12 21l1.9-5.8a2 2 0 0 1 1.275-1.275L21 12l-5.8-1.9a2 2 0 0 1-1.275-1.275L12 3Z" /><path d="M5 3v4" /><path d="M19 17v4" /><path d="M3 5h4" /><path d="M17 19h4" /></svg>, title: "Desarrollo Potenciado por IA", desc: "Integro modelos de inteligencia artificial en tus procesos. Escribo código avanzado mucho más rápido sin comprometer la calidad.", color: "bg-warning/15 text-warning border border-warning/20" },
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>, title: "Diseño UI/UX", desc: "Diseño basado en usabilidad, no solo estética. Una interfaz clara, sin fricciones y enfocada 100% en el recorrido del usuario.", color: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20" },
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v4" /><path d="M7 11h10a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2Z" /><path d="M12 17v4" /><path d="M9 7h6" /><path d="M12 3v4" /></svg>, title: "APIs e Integraciones", desc: "Sincronizo tus plataformas existentes (pasarelas de pagos, CRM, WhatsApp) para automatizar y eliminar tu trabajo manual.", color: "bg-rose-500/15 text-rose-400 border border-rose-500/20" },
];

export function ServicesSection() {
  return (
    <section id="servicios" className="py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />
      <div className="container-play relative z-10">
        <Reveal>
          <div className="text-center mb-24">
            <span className="inline-block px-4 py-1.5 mb-6 text-[11px] font-semibold font-mono uppercase tracking-[0.2em] text-primary bg-primary/10 border border-primary/20 rounded-full shadow-[0_0_15px_rgba(124,58,237,0.2)]">
              Servicios
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-sm">Mis Servicios</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <ServiceCard icon={s.icon} title={s.title} description={s.desc} color={s.color} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
