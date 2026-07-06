import React from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="border-t border-border/50 mt-0">
      <div className="container-play py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-2 mb-6 group">
              <Logo className="h-[45px] w-auto group-hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]" />
            </Link>
            <p className="text-foreground-muted text-sm max-w-sm leading-relaxed">
              Desarrollo de software a medida: aplicaciones web, plataformas SaaS y productos digitales. Trabajo directo, sin intermediarios.
            </p>
          </div>

          {/* Nav */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-foreground-subtle mb-6">Navegación</h4>
            <ul className="space-y-3">
              {["Inicio","Proyectos","Servicios","Sobre mí"].map(item => (
                <li key={item}>
                  <Link href={item === "Sobre mí" ? "#nosotros" : `#${item.toLowerCase()}`} className="text-sm text-foreground-muted hover:text-foreground transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-foreground-subtle mb-6">Social</h4>
            <ul className="space-y-3">
              {["GitHub","LinkedIn","Twitter"].map(item => (
                <li key={item}>
                  <Link href="#" className="text-sm text-foreground-muted hover:text-foreground transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-foreground-subtle mb-6">Legal</h4>
            <ul className="space-y-3">
              {["Privacidad","Términos"].map(item => (
                <li key={item}>
                  <Link href="#" className="text-sm text-foreground-muted hover:text-foreground transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-foreground-subtle">
          <p>© {new Date().getFullYear()} PlayComun. Todos los derechos reservados.</p>
          <p className="mt-2 md:mt-0">Diseñado y desarrollado con precisión.</p>
        </div>
      </div>
    </footer>
  );
}
