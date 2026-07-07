"use server";

import { Resend } from "resend";
import { z } from "zod";
import { env } from "@/lib/env";

const resend = new Resend(env.RESEND_API_KEY);

/**
 * Zod schema for contact form validation.
 * Validates and sanitizes all fields server-side.
 */
const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "El nombre debe tener al menos 2 caracteres.")
    .max(100, "El nombre no puede superar los 100 caracteres."),
  email: z
    .string()
    .trim()
    .email("Por favor, ingresá un email válido."),
  message: z
    .string()
    .trim()
    .min(10, "El mensaje debe tener al menos 10 caracteres.")
    .max(2000, "El mensaje no puede superar los 2000 caracteres."),
});

export async function sendEmailAction(formData: FormData) {
  // --- Validation ---
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  const parsed = contactFormSchema.safeParse(rawData);

  if (!parsed.success) {
    const firstError = parsed.error.issues[0]?.message ?? "Datos inválidos.";
    return { error: firstError };
  }

  const { name, email, message } = parsed.data;

  // --- Send Email ---
  try {
    const { error } = await resend.emails.send({
      from: "Contacto PlayComun <contacto@playcomun.com>",
      to: ["playcomun.ok@gmail.com"],
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
    return { error: "Ocurrió un error inesperado. Intentá de nuevo." };
  }
}
