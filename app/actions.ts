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
  const origem = String(formData.get("origem") ?? "").trim();
  const successPath = String(formData.get("success_path") ?? "").trim();
  const produto = String(formData.get("p1_produto") ?? "").trim();
  const tamanho = String(formData.get("p2_tamanho") ?? "").trim();
  const conforto = String(formData.get("p3_conforto") ?? "").trim();
  const prazo = String(formData.get("p4_prazo") ?? "").trim();
  const consentimentoLgpd = String(formData.get("consentimento_lgpd") ?? "").trim();

  try {
    await submitConciergePayload({
      nome,
      whatsapp,
      whatsapp_digits: onlyDigits(whatsapp),
      perfil,
      loja_preferencia: lojaPreferencia,
      origem: origem || "Landing Page Sleep House",
      pagina,
      produto,
      tamanho,
      conforto,
      prazo,
      consentimento_lgpd: consentimentoLgpd,
    });
  } catch (error) {
    return {
      error:
        error instanceof Error
          ? error.message
          : "Não foi possível enviar agora. Tente novamente em instantes.",
    };
  }

  redirect(
    successPath === "/encontre-seu-colchao-ideal-typ"
      ? successPath
      : "/obrigado",
  );
}
