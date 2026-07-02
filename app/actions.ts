"use server";

import { redirect } from "next/navigation";
import { onlyDigits, submitConciergePayload } from "./lib/concierge";

export type ConciergeFormState = {
  error: string;
};

export async function submitConciergeForm(
  _previousState: ConciergeFormState,
  formData: FormData,
) {
  const nome = String(formData.get("nome") ?? "").trim();
  const whatsapp = String(formData.get("whatsapp") ?? "").trim();
  const perfil = String(formData.get("perfil") ?? "").trim();
  const lojaPreferencia = String(formData.get("loja_preferencia") ?? "").trim();
  const pagina = String(formData.get("pagina") ?? "").trim();

  try {
    await submitConciergePayload({
      nome,
      whatsapp,
      whatsapp_digits: onlyDigits(whatsapp),
      perfil,
      loja_preferencia: lojaPreferencia,
      origem: "Landing Page Sleep House Dedicace Paris",
      pagina,
    });
  } catch (error) {
    return {
      error:
        error instanceof Error
          ? error.message
          : "Não foi possível enviar agora. Tente novamente em instantes.",
    };
  }

  redirect("/obrigado");
}
