"use server";

import { redirect } from "next/navigation";
import { onlyDigits, submitConciergePayload } from "./lib/concierge";

export type ConciergeFormState = {
  error: string;
};

const allowedSuccessPaths = [
  "/obrigado",
  "/encontre-seu-colchao-ideal-typ",
  "/tempur-home-care/obrigado",
] as const;

type ConciergeSuccessPath = (typeof allowedSuccessPaths)[number];

function resolveSuccessPath(value: string): ConciergeSuccessPath {
  return allowedSuccessPaths.find((path) => path === value) ?? "/obrigado";
}

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
  const cidade = String(formData.get("cidade") ?? "").trim();
  const paraQuem = String(formData.get("para_quem") ?? "").trim();
  const necessidade = String(formData.get("necessidade") ?? "").trim();
  const faixaInvestimento = String(formData.get("faixa_investimento") ?? "").trim();
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
      cidade,
      para_quem: paraQuem,
      necessidade,
      faixa_investimento: faixaInvestimento,
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

  redirect(resolveSuccessPath(successPath));
}
