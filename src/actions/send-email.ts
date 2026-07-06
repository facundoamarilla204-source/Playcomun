"use server";

import { Resend } from "resend";
import { headers } from "next/headers";

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory store for rate limiting (works per server instance)
const rateLimitMap = new Map<string, { count: number; startTime: number }>();
const MAX_REQUESTS = 5;
const WINDOW_MS = 60 * 1000; // 1 minuto

export async function sendEmailAction(formData: FormData) {
  // Rate Limiting Logic
  const headersList = await headers();
  const ip = headersList.get("x-forwarded-for") || "unknown";
  
  const currentTime = Date.now();
  const rateLimitInfo = rateLimitMap.get(ip);

  if (rateLimitInfo) {
    if (currentTime - rateLimitInfo.startTime < WINDOW_MS) {
      if (rateLimitInfo.count >= MAX_REQUESTS) {
        return { error: "Has enviado demasiados mensajes. Por favor, espera un minuto e inténtalo de nuevo." };
      }
      rateLimitInfo.count++;
    } else {
      // Reset window
      rateLimitMap.set(ip, { count: 1, startTime: currentTime });
    }
  } else {
    rateLimitMap.set(ip, { count: 1, startTime: currentTime });
  }

  // Basic cleanup to prevent memory leaks
  if (rateLimitMap.size > 1000) {
    rateLimitMap.clear();
  }

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { error: "Todos los campos son requeridos." };
  }

  try {
    const { error } = await resend.emails.send({
      from: "Contacto PlayComun <contacto@playcomun.com>",
      to: ["playcomun.ok@gmail.com"], // Correo donde recibes los mensajes
      subject: `Nuevo mensaje de ${name}`,
      replyTo: email,
      text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
    });

    if (error) {
      return { error: error.message };
    }

    return { success: true };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: "An unknown error occurred" };
  }
}
