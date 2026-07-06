import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "PlayComun | Software a Medida & Plataformas SaaS",
  description: "Diseño y construyo aplicaciones web y plataformas SaaS para emprendedores y empresas. Trabajo directo con el desarrollador, sin intermediarios.",
  openGraph: {
    title: "PlayComun | Software a Medida, Sin Intermediarios",
    description: "Aplicaciones web y plataformas SaaS que escalan. Hablás directo con el desarrollador que escribe tu código.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${plusJakarta.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
