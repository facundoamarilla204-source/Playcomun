"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Tecnologías", href: "#tecnologias" },
  { label: "Sobre mí", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5"
      >
        <div
          className={`flex items-center justify-between w-full max-w-5xl mx-4 px-6 py-3 rounded-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${scrolled
              ? "bg-surface/60 backdrop-blur-2xl border border-border shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              : "bg-transparent border border-transparent"
            }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0 group" aria-label="Ir al inicio">
            <Logo className="h-[45px] md:h-[53px] w-auto group-hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Navegación principal">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-foreground-muted hover:text-foreground rounded-full hover:bg-white/5 transition-all duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block shrink-0">
            <Button size="sm" href="#contacto">
              Comencemos un proyecto
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M1 13L13 1M13 1H5M13 1V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors"
            aria-label="Alternar menú móvil"
            aria-expanded={mobileOpen}
          >
            <span className={`block w-5 h-[1.5px] bg-foreground rounded-full absolute transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${mobileOpen ? 'rotate-45 translate-y-0' : '-translate-y-[5px]'}`} aria-hidden="true" />
            <span className={`block w-5 h-[1.5px] bg-foreground rounded-full absolute transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${mobileOpen ? '-rotate-45 translate-y-0' : 'translate-y-[5px]'}`} aria-hidden="true" />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-background/90 backdrop-blur-3xl flex flex-col items-center justify-center gap-8 lg:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.07, duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-3xl font-bold text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.07, duration: 0.5 }}
            >
              <Button size="lg" href="#contacto" onClick={() => setMobileOpen(false)}>Comencemos un proyecto</Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
