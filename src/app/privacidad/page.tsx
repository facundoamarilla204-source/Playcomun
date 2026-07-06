"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex flex-col justify-between">
      {/* Background Blurs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-indigo/10 rounded-full blur-[150px]" />
      </div>
      
      <div className="noise-overlay absolute inset-0 pointer-events-none z-0" />

      <Navbar />

      {/* Main Content */}
      <main className="flex-grow pt-36 pb-24 relative z-10">
        <div className="container-play max-w-3xl">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-sm text-foreground-muted hover:text-foreground transition-colors group"
            >
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="transform group-hover:-translate-x-1 transition-transform"
              >
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              Volver al inicio
            </Link>
          </motion.div>

          {/* Title Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-[11px] font-semibold font-mono uppercase tracking-[0.2em] text-primary bg-primary/10 border border-primary/20 rounded-full">
              Legal
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              Políticas de <span className="gradient-text">Privacidad</span>
            </h1>
            <p className="text-sm text-foreground-subtle font-mono">
              Última actualización: 6 de julio de 2026
            </p>
          </motion.div>

          {/* Content sections */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8 text-foreground-muted leading-relaxed"
          >
            <section className="bg-surface/30 border border-border/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
              <h2 className="text-xl font-bold text-foreground mb-4">1. Introducción</h2>
              <p className="text-[15px]">
                En <strong>PlayComun</strong> (representado por Playcomundev), la privacidad y la seguridad de tu información son una prioridad absoluta. Esta Política de Privacidad describe cómo recopilamos, utilizamos y protegemos los datos personales que nos proporcionas al utilizar nuestro sitio web, completar nuestro formulario de contacto o comunicarte a través de nuestros canales oficiales (como WhatsApp).
              </p>
            </section>

            <section className="bg-surface/30 border border-border/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
              <h2 className="text-xl font-bold text-foreground mb-4">2. Datos que recopilamos</h2>
              <p className="text-[15px] mb-4">
                Recopilamos la información estrictamente necesaria para gestionar tus consultas e iniciar propuestas de desarrollo de software:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[15px]">
                <li><strong>Formulario de Contacto:</strong> Recopilamos tu nombre (o el de tu empresa), dirección de correo electrónico y cualquier detalle del proyecto que incluyas en el mensaje.</li>
                <li><strong>Comunicación por WhatsApp:</strong> Al interactuar con nosotros mediante el enlace directo de WhatsApp, recopilamos tu número telefónico y cualquier dato personal o de tu negocio provisto durante la conversación.</li>
                <li><strong>Datos Técnicos:</strong> Información básica de navegación (dirección IP anonimizada, tipo de dispositivo, cookies técnicas esenciales) recopilada de manera automática para optimizar la carga del sitio.</li>
              </ul>
            </section>

            <section className="bg-surface/30 border border-border/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
              <h2 className="text-xl font-bold text-foreground mb-4">3. Finalidad del tratamiento</h2>
              <p className="text-[15px] mb-4">
                Utilizamos tus datos personales únicamente para los siguientes fines legítimos:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[15px]">
                <li>Responder a tus consultas, solicitudes de soporte técnico y preguntas sobre nuestros servicios.</li>
                <li>Elaborar propuestas de desarrollo de software, presupuestos y planes de ejecución a medida.</li>
                <li>Mantener una comunicación fluida y directa durante la etapa de preventa, desarrollo y postventa de los proyectos contratados.</li>
              </ul>
            </section>

            <section className="bg-surface/30 border border-border/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
              <h2 className="text-xl font-bold text-foreground mb-4">4. Confidencialidad y compartir con terceros</h2>
              <p className="text-[15px]">
                Tus datos son tratados de forma <strong>estrictamente confidencial</strong>. No vendemos, alquilamos ni comercializamos tu información personal con terceros bajo ningún concepto. Tu información solo podría ser compartida bajo requerimiento judicial explícito de una autoridad competente.
              </p>
            </section>

            <section className="bg-surface/30 border border-border/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
              <h2 className="text-xl font-bold text-foreground mb-4">5. Seguridad de tu información</h2>
              <p className="text-[15px]">
                Implementamos medidas de seguridad técnicas e infraestructura de nivel empresarial (como certificados SSL, comunicaciones encriptadas y servidores seguros de terceros como Vercel y Resend) para asegurar la integridad de tus datos y prevenir su pérdida, alteración o acceso no autorizado.
              </p>
            </section>

            <section className="bg-surface/30 border border-border/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
              <h2 className="text-xl font-bold text-foreground mb-4">6. Tus derechos (Acceso, Rectificación y Supresión)</h2>
              <p className="text-[15px]">
                En cualquier momento puedes solicitar el acceso a los datos que guardamos sobre vos, su corrección o su eliminación definitiva. Para ejercer estos derechos, simplemente envía una solicitud directa desde tu dirección de correo electrónico a <a href="mailto:playcomun.ok@gmail.com" className="text-primary hover:text-primary-hover font-semibold transition-colors">playcomun.ok@gmail.com</a>.
              </p>
            </section>

            <section className="bg-surface/30 border border-border/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
              <h2 className="text-xl font-bold text-foreground mb-4">7. Consentimiento</h2>
              <p className="text-[15px]">
                Al completar y enviar nuestro formulario de contacto, o al iniciar una conversación en WhatsApp a través de los enlaces de este sitio web, aceptas de forma expresa el tratamiento de tus datos conforme a los términos detallados en esta política de privacidad.
              </p>
            </section>
          </motion.div>
          
          {/* Action button at bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 flex justify-center"
          >
            <Button variant="secondary" size="md" href="/">
              Volver al inicio
            </Button>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
