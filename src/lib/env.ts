import { z } from "zod";

/**
 * Server-side environment variable validation.
 * This module validates that all required environment variables are present
 * and correctly formatted at import time, failing fast with clear error messages
 * instead of silently breaking at runtime.
 */
const serverEnvSchema = z.object({
  RESEND_API_KEY: z
    .string({ error: "RESEND_API_KEY no está configurada." })
    .min(1, "RESEND_API_KEY no puede estar vacía.")
    .startsWith("re_", "RESEND_API_KEY debe comenzar con 're_'."),
});

function validateEnv() {
  const parsed = serverEnvSchema.safeParse(process.env);

  if (!parsed.success) {
    const errors = parsed.error.flatten().fieldErrors;
    const message = Object.entries(errors)
      .map(([key, msgs]) => `  ❌ ${key}: ${msgs?.join(", ")}`)
      .join("\n");

    throw new Error(
      `\n\n🚨 Variables de entorno inválidas:\n${message}\n\nRevisa tu archivo .env.local o la configuración en Vercel.\n`
    );
  }

  return parsed.data;
}

export const env = validateEnv();
