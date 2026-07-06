"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmailAction(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { error: "Todos los campos son requeridos." };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Contacto <onboarding@resend.dev>", // Cambia a tu dominio configurado en Resend en producción
      to: ["playcomun.ok@gmail.com"], // Correo donde recibes los mensajes
      subject: `Nuevo mensaje de ${name}`,
      replyTo: email,
      text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
    });

    if (error) {
      return { error: error.message };
    }

    return { success: true };
  } catch (error: any) {
    return { error: error.message };
  }
}
