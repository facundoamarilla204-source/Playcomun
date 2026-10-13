"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import {
  ChefHat,
  Wallet,
  Calculator,
  FileText,
  Receipt,
  TrendingUp,
  QrCode,
  Dumbbell,
  ArrowUpRight,
  ExternalLink,
  Lock,
  ShieldCheck,
  Search,
  ChevronRight,
} from "lucide-react";

interface ToolItem {
  id: string;
  name: string;
  category: "costos" | "finanzas" | "negocio" | "utilidades" | "fitness";
  categoryLabel: string;
  desc: string;
  icon: typeof ChefHat;
  url: string;
  badge: "Gratis" | "Pro";
}

const allTools: ToolItem[] = [
  {
    id: "costo-receta",
    name: "Calculadora de costo de receta",
    category: "costos",
    categoryLabel: "Costos",
    desc: "Calculá el costo real de elaboración de tus recetas, obtené precios de venta y guardá tus creaciones.",
    icon: ChefHat,
    url: "https://www.playcomun.online/herramientas/costo-receta",
    badge: "Gratis",
  },
  {
    id: "control-gastos",
    name: "Control de gastos",
    category: "finanzas",
    categoryLabel: "Finanzas",
    desc: "Registrá y organizá tus gastos diarios de forma rápida. Conocé en qué se va tu dinero.",
    icon: Wallet,
    url: "https://www.playcomun.online/herramientas/control-gastos",
    badge: "Gratis",
  },
  {
    id: "calculadora-precios",
    name: "Calculadora de precios",
    category: "costos",
    categoryLabel: "Costos",
    desc: "Calculá el precio de venta ideal con tus costos, IVA y comisiones.",
    icon: Calculator,
    url: "https://www.playcomun.online/herramientas/calculadora-precios",
    badge: "Gratis",
  },
  {
    id: "generador-presupuestos",
    name: "Generador de presupuestos",
    category: "negocio",
    categoryLabel: "Negocio",
    desc: "Creá presupuestos profesionales y descargalos en PDF listos para enviar al cliente.",
    icon: FileText,
    url: "https://www.playcomun.online/herramientas/generador-presupuestos",
    badge: "Gratis",
  },
  {
    id: "calculadora-iva",
    name: "Calculadora de IVA",
    category: "costos",
    categoryLabel: "Costos",
    desc: "Calculá el IVA, agregalo a un precio o desglosalo de un importe final.",
    icon: Receipt,
    url: "https://www.playcomun.online/herramientas/calculadora-iva",
    badge: "Gratis",
  },
  {
    id: "calculadora-rentabilidad",
    name: "Calculadora de rentabilidad",
    category: "costos",
    categoryLabel: "Costos",
    desc: "Calculá ganancias, margen y rentabilidad de tus productos o servicios.",
    icon: TrendingUp,
    url: "https://www.playcomun.online/herramientas/calculadora-rentabilidad",
    badge: "Gratis",
  },
  {
    id: "generador-qr",
    name: "Generador de QR",
    category: "utilidades",
    categoryLabel: "Utilidades",
    desc: "Creá códigos QR para pagos, enlaces o texto de forma inmediata.",
    icon: QrCode,
    url: "https://www.playcomun.online/herramientas/generador-qr",
    badge: "Gratis",
  },
  {
    id: "calculadora-1rm",
    name: "Calculadora de 1RM",
    category: "fitness",
    categoryLabel: "Fitness",
    desc: "Calculá tu 1RM estimado y consultá cargas orientativas según distintos porcentajes.",
    icon: Dumbbell,
    url: "https://www.playcomun.online/herramientas/calculadora-1rm",
    badge: "Gratis",
  },
];

const categories = [
  { id: "todas", label: "Todas", count: 18 },
  { id: "costos", label: "Precios y costos", count: 4 },
  { id: "finanzas", label: "Plata y finanzas", count: 3 },
  { id: "negocio", label: "Gestión de negocio", count: 3 },
  { id: "utilidades", label: "Clientes y utilidades", count: 6 },
  { id: "fitness", label: "Salud y fitness", count: 2 },
];

export function PlaycomunOnlineSection() {
  const [activeCategory, setActiveCategory] = useState("todas");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTools = allTools.filter((tool) => {
    const matchesCategory =
      activeCategory === "todas" || tool.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="ecosistema"
      className="py-24 md:py-32 bg-background border-t border-border/50 relative overflow-hidden"
    >
      <div className="container-play relative z-10">
        {/* Encabezado Editorial — sobrio, consistente con las demás secciones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 mb-5 text-xs font-medium font-mono uppercase tracking-widest text-primary border border-primary/30 bg-primary/5 rounded-sm">
                Productos Propios
              </span>

              <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground leading-[1.15] mb-5 font-sora">
                Herramientas digitales para resolver lo cotidiano.
              </h2>

              <p className="text-foreground-muted font-light text-base md:text-lg leading-relaxed max-w-xl">
                Desarrollo herramientas online que simplifican tareas, ayudan a
                tomar decisiones y resuelven necesidades concretas de negocio,
                sin tener que instalar programas innecesarios.
              </p>
            </div>

            {/* CTA Directo — botón con el sistema de diseño estándar, sin brillos ni sombras artificiales */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0">
              <Button
                variant="primary"
                size="md"
                href="https://www.playcomun.online"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <span>Conocer PlayComun Online</span>
                <ExternalLink className="w-3.5 h-3.5 ml-2 opacity-70 group-hover:opacity-100 transition-opacity" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* ── BROWSER CANVAS: Simulador del Navegador con la Paleta Real y Tono Violeta del Sitio ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-xl border border-border bg-surface overflow-hidden shadow-sm"
        >
          {/* Barra Superior de la Ventana (Browser Chrome) */}
          <div className="h-10 bg-[#12111c] border-b border-border px-4 sm:px-5 flex items-center justify-between gap-4 select-none">
            {/* Semáforo sutil */}
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
            </div>

            {/* Barra de dirección URL */}
            <div className="flex-1 max-w-md mx-auto">
              <div className="h-7 rounded-md bg-background border border-border px-3 flex items-center justify-between text-xs text-foreground-muted font-mono">
                <div className="flex items-center gap-2 truncate">
                  <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span className="text-foreground font-medium">playcomun.online</span>
                  <span className="text-foreground-subtle hidden sm:inline">/herramientas</span>
                </div>
                <span className="text-[10px] text-foreground-subtle font-mono hidden sm:inline">
                  https
                </span>
              </div>
            </div>

            {/* Acción externa discreta */}
            <a
              href="https://www.playcomun.online"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-foreground-subtle hover:text-foreground flex items-center gap-1 transition-colors font-mono shrink-0"
              title="Abrir en pestaña nueva"
            >
              <span className="hidden md:inline">Abrir web</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* ── Interior de PlayComun Online (Paleta Real de la Plataforma) ── */}
          <div className="bg-[#f8fafc] text-slate-900">
            {/* Cabecera Interna de Herramientas */}
            <div className="px-5 sm:px-8 pt-6 pb-5 border-b border-slate-200 bg-white">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight font-sora">
                    Herramientas destacadas
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    18 herramientas disponibles
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  {/* Buscador interactivo */}
                  <div className="relative w-full sm:w-60">
                    <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Buscar herramienta..."
                      className="w-full h-8 rounded-lg bg-slate-50 border border-slate-200 pl-8.5 pr-3 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-primary focus:bg-white transition-colors"
                    />
                  </div>

                  <a
                    href="https://www.playcomun.online/herramientas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden lg:flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary-hover transition-colors shrink-0"
                  >
                    <span>Ver todas (18)</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Píldoras de Categorías */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
                {categories.map((cat) => {
                  const isActive = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setActiveCategory(cat.id)}
                      className={`whitespace-nowrap flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors shrink-0 ${
                        isActive
                          ? "bg-slate-900 text-white"
                          : "border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                      }`}
                    >
                      <span>{cat.label}</span>
                      <span
                        className={`inline-flex items-center justify-center rounded-md text-[10px] px-1.5 py-0.2 font-mono ${
                          isActive
                            ? "bg-white/20 text-white"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {cat.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Cuadrícula de Tarjetas */}
            <div className="p-5 sm:p-7 md:p-8 bg-slate-50/70">
              <AnimatePresence mode="popLayout">
                <motion.div
                  layout
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                >
                  {filteredTools.map((tool) => {
                    const Icon = tool.icon;
                    return (
                      <motion.a
                        layout
                        key={tool.id}
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.97 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.97 }}
                        transition={{ duration: 0.2 }}
                        className="group relative flex flex-col justify-between h-full rounded-xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:border-primary/50 hover:shadow-sm focus-visible:outline-none"
                      >
                        <div>
                          {/* Cabecera de la tarjeta: Icono con tono primario del sitio + Categoría + Badge Gratis */}
                          <div className="flex items-center justify-between gap-2 mb-3.5">
                            <div className="flex items-center gap-2.5">
                              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                                <Icon className="h-4.5 w-4.5" />
                              </div>
                              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                                {tool.categoryLabel}
                              </span>
                            </div>

                            <span className="inline-flex items-center rounded-md bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/10">
                              {tool.badge}
                            </span>
                          </div>

                          {/* Título & Descripción */}
                          <h4 className="text-base font-bold text-slate-900 group-hover:text-primary transition-colors line-clamp-1 mb-1.5 font-sora">
                            {tool.name}
                          </h4>
                          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                            {tool.desc}
                          </p>
                        </div>

                        {/* Pie de la tarjeta */}
                        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                          <span className="font-medium text-slate-600 group-hover:text-primary transition-colors">
                            Abrir herramienta
                          </span>
                          <ArrowUpRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                      </motion.a>
                    );
                  })}
                </motion.div>
              </AnimatePresence>

              {filteredTools.length === 0 && (
                <div className="py-12 text-center text-slate-500 text-sm font-light">
                  No se encontraron herramientas con ese término.
                </div>
              )}
            </div>

            {/* Pie de la Interfaz: Banner de Privacidad */}
            <div className="px-5 sm:px-8 py-3.5 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  Procesamiento 100% privado en tu navegador. Tus datos no se
                  almacenan en servidores externos.
                </span>
              </div>

              <a
                href="https://www.playcomun.online"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary hover:text-primary-hover flex items-center gap-1 transition-colors shrink-0"
              >
                <span>Explorar catálogo completo</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Pilares Editoriales — redacción directa, sin buzzwords ni iconos reflectantes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 md:mt-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 rounded-xl bg-surface border border-border flex flex-col"
          >
            <span className="text-xs font-mono font-medium text-primary mb-3">01 / ACCESO</span>
            <h4 className="text-base font-medium text-foreground mb-2">
              Uso directo
            </h4>
            <p className="text-xs md:text-sm text-foreground-muted font-light leading-relaxed">
              Sin descargas ni cuentas obligatorias. Entrás desde cualquier
              navegador en móvil o desktop y resolvés en el momento.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 rounded-xl bg-surface border border-border flex flex-col"
          >
            <span className="text-xs font-mono font-medium text-primary mb-3">02 / SEGURIDAD</span>
            <h4 className="text-base font-medium text-foreground mb-2">
              Procesamiento local
            </h4>
            <p className="text-xs md:text-sm text-foreground-muted font-light leading-relaxed">
              Los cálculos y archivos se ejecutan en tu dispositivo. Ningún
              dato sensible viaja ni se persiste en bases de datos externas.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 rounded-xl bg-surface border border-border flex flex-col"
          >
            <span className="text-xs font-mono font-medium text-primary mb-3">03 / UTILIDAD</span>
            <h4 className="text-base font-medium text-foreground mb-2">
              Casos reales
            </h4>
            <p className="text-xs md:text-sm text-foreground-muted font-light leading-relaxed">
              18 herramientas diseñadas para necesidades puntuales: costos
              gastronómicos, finanzas diarias y utilidades de gestión.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
