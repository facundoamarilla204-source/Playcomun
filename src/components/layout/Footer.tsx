import React from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Mail, Phone, MapPin } from "lucide-react";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

export function Footer() {
  return (
    <footer className="border-t border-border/50 mt-0">
      <div className="container-play py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand & Socials */}
          <div className="md:col-span-4 lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-2 mb-6 group">
              <Logo className="h-[45px] w-auto group-hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]" />
            </Link>
            <p className="text-foreground-muted text-sm max-w-sm leading-relaxed mb-8">
              Desarrollo de software a medida: aplicaciones web, plataformas SaaS y productos digitales. Trabajo directo, sin intermediarios.
            </p>
            <div className="flex gap-4 items-center">
              <a 
                href="https://instagram.com/Playcomundev" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="h-10 w-10 rounded-full bg-surface-elevated border border-border/50 flex items-center justify-center text-foreground-muted hover:text-primary hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(var(--color-primary-rgb),0.2)]"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/5491134321946" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="h-10 w-10 rounded-full bg-surface-elevated border border-border/50 flex items-center justify-center text-foreground-muted hover:text-green-500 hover:border-green-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,197,94,0.2)]"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navegación */}
          <div className="md:col-span-3 lg:col-span-2">
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

          {/* Contacto */}
          <div className="md:col-span-5 lg:col-span-5">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-foreground-subtle mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:playcomun.ok@gmail.com" className="group flex items-start gap-3 text-sm text-foreground-muted hover:text-foreground transition-colors duration-300">
                  <div className="mt-0.5 p-1.5 rounded-md bg-surface-elevated border border-border/50 group-hover:border-primary/50 group-hover:text-primary transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-0.5">Correo Electrónico</p>
                    <p>playcomun.ok@gmail.com</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="tel:+5491134321946" className="group flex items-start gap-3 text-sm text-foreground-muted hover:text-foreground transition-colors duration-300">
                  <div className="mt-0.5 p-1.5 rounded-md bg-surface-elevated border border-border/50 group-hover:border-primary/50 group-hover:text-primary transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-0.5">Teléfono</p>
                    <p>+54 9 11 3432-1946</p>
                  </div>
                </a>
              </li>
              <li>
                <div className="group flex items-start gap-3 text-sm text-foreground-muted hover:text-foreground transition-colors duration-300">
                  <div className="mt-0.5 p-1.5 rounded-md bg-surface-elevated border border-border/50 group-hover:border-primary/50 group-hover:text-primary transition-colors">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-0.5">Ubicación</p>
                    <p>Buenos Aires, Argentina</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/50 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-foreground-subtle">
          <p>© {new Date().getFullYear()} PlayComun. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacidad" className="hover:text-foreground transition-colors duration-300">
              Política de Privacidad
            </Link>
            <p className="hidden md:block">Diseñado y desarrollado con precisión.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
