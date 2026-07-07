"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { sendEmailAction } from "@/actions/send-email";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");
  const [statusType, setStatusType] = useState<"success" | "error" | "">("");

  async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMsg("");
    setStatusType("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const result = await sendEmailAction(formData);

    if (result?.error) {
      setStatusMsg(result.error);
      setStatusType("error");
    } else if (result?.success) {
      setStatusMsg("Mensaje enviado con éxito. ¡Gracias!");
      setStatusType("success");
      form.reset();
    }
    setIsSubmitting(false);
  }

  return (
    <section id="contacto" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-primary via-indigo to-electric rounded-full blur-[200px]"
        />
      </div>
      <div className="noise-overlay absolute inset-0 pointer-events-none" />
      <div className="container-play relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          <Reveal>
            <div className="text-left">
              <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-8 leading-[1.05] drop-shadow-xl">
                Es momento de{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/60">escalar tu visión.</span>
              </h2>
              <p className="text-lg md:text-xl text-foreground-muted mb-12 font-medium max-w-lg">
                Construyamos el software que tu empresa necesita para dominar su industria. Sin intermediarios, trabajá de forma directa con el desarrollador que escribirá tu código.
              </p>

              <div className="flex flex-col gap-4">
                <Button size="lg" className="w-fit px-8 h-14 text-base" href="https://wa.me/5491134321946?text=Hola,%20me%20gustar%C3%ADa%20conversar%20sobre%20un%20proyecto">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                  Contactar por WhatsApp
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="p-[1px] rounded-3xl bg-gradient-to-b from-border-hover/40 to-transparent shadow-2xl">
              <form className="bg-surface p-8 rounded-[calc(1.5rem-1px)] flex flex-col gap-6" onSubmit={handleFormSubmit}>
                <h3 className="text-2xl font-bold mb-2">Dejame un mensaje</h3>

                <div className="flex flex-col gap-2 text-left">
                  <label htmlFor="name" className="text-sm font-medium text-foreground-muted">Nombre</label>
                  <input id="name" name="name" required type="text" maxLength={100} placeholder="Tu nombre o empresa" className="bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-foreground-subtle/50" />
                </div>

                <div className="flex flex-col gap-2 text-left">
                  <label htmlFor="email" className="text-sm font-medium text-foreground-muted">Email</label>
                  <input id="email" name="email" required type="email" placeholder="correo@empresa.com" className="bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-foreground-subtle/50" />
                </div>

                <div className="flex flex-col gap-2 text-left">
                  <label htmlFor="message" className="text-sm font-medium text-foreground-muted">Mensaje</label>
                  <textarea id="message" name="message" required rows={4} maxLength={2000} placeholder="Contame sobre tu proyecto..." className="bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none placeholder:text-foreground-subtle/50"></textarea>
                </div>

                <button type="submit" disabled={isSubmitting} className="w-full h-12 mt-2 bg-foreground text-background font-medium rounded-xl hover:bg-foreground-muted transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                  {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                  {!isSubmitting && <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 13L13 1M13 1H5M13 1V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                </button>
                {statusMsg && (
                  <p className={`text-sm mt-2 text-center ${statusType === "error" ? "text-rose-500" : "text-success"}`}>
                    {statusMsg}
                  </p>
                )}
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
