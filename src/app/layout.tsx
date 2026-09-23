import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

import dynamic from "next/dynamic";

const FloatingWhatsApp = dynamic(() => import("@/components/ui/FloatingWhatsApp").then(mod => mod.FloatingWhatsApp));

export const metadata: Metadata = {
  metadataBase: new URL("https://www.playcomun.com"),
  title: "PlayComun | Desarrollo Web y Software a Medida",
  description: "Desarrollo de software a medida, aplicaciones web y plataformas SaaS. Construimos productos digitales y sistemas adaptados a las necesidades de cada negocio.",
  keywords: ["desarrollo web", "software a medida", "plataforma saas", "desarrollo saas", "aplicaciones web", "desarrollador freelance", "crear aplicacion web", "agencia de software"],
  authors: [{ name: "PlayComun" }],
  creator: "PlayComun",
  publisher: "PlayComun",
  openGraph: {
    type: "website",
    siteName: "PlayComun",
    title: "PlayComun | Desarrollo Web y Software a Medida",
    description: "Desarrollo de software a medida, aplicaciones web y plataformas SaaS. Construimos productos digitales y sistemas adaptados a las necesidades de cada negocio.",
    url: "https://www.playcomun.com/",
    images: [
      {
        url: "/og/playcomun-og.png",
        width: 1200,
        height: 630,
        alt: "PlayComun - desarrollo de software a medida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PlayComun | Desarrollo Web y Software a Medida",
    description: "Desarrollo de software a medida, aplicaciones web y plataformas SaaS. Construimos productos digitales y sistemas adaptados a las necesidades de cada negocio.",
    images: ["/og/playcomun-og.png"],
  },
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://www.playcomun.com/#organization",
      "name": "PlayComun",
      "url": "https://www.playcomun.com/",
      "logo": "https://www.playcomun.com/logo.png",
      "image": "https://www.playcomun.com/og/playcomun-og.png",
      "description": "Desarrollo de software a medida, aplicaciones web y plataformas SaaS. Construimos productos digitales y sistemas adaptados a las necesidades de cada negocio.",
      "brand": [
        {
          "@type": "Brand",
          "name": "Mercury Eventos",
          "url": "https://mercuryeventos.online/"
        },
        {
          "@type": "Brand",
          "name": "FitAdmi"
        },
        {
          "@type": "Brand",
          "name": "TurnoGol"
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.playcomun.com/#website",
      "url": "https://www.playcomun.com/",
      "name": "PlayComun",
      "description": "Desarrollo de software a medida, aplicaciones web y plataformas SaaS.",
      "publisher": {
        "@id": "https://www.playcomun.com/#organization"
      }
    }
  ]
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
