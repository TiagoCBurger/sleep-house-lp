const WEBHOOK_URL =
  process.env.CONCIERGE_WEBHOOK_URL ??
  "https://hook.us1.make.celonis.com/xs5og4cp40a22b82vzbzrydaopkx5mtz";

const WEBHOOK_TIMEOUT_MS = 10_000;

export type ConciergePayload = {
  nome: string;
  whatsapp: string;
  whatsapp_digits: string;
  perfil: string;
  loja_preferencia: string;
  origem: string;
  pagina: string;
};

export function onlyDigits(value: string) {
  return value.replace(/\D/g, "");
}

export function isValidConciergePayload(payload: ConciergePayload) {
  return (
    payload.nome.trim().length >= 2 &&
    payload.whatsapp_digits.length >= 10 &&
    payload.whatsapp_digits.length <= 11 &&
    payload.perfil.trim().length > 0 &&
    payload.loja_preferencia.trim().length > 0
  );
}

export async function submitConciergePayload(payload: ConciergePayload) {
  if (!isValidConciergePayload(payload)) {
    throw new Error("Dados do formulário inválidos.");
  }

  if (
    process.env.NODE_ENV === "development" &&
    process.env.CONCIERGE_SKIP_WEBHOOK === "true"
  ) {
    console.warn(
      "[concierge] CONCIERGE_SKIP_WEBHOOK ativo — webhook não foi chamado.",
    );
    return { ok: true, skipped: true } as const;
  }

  const webhookResponse = await fetch(WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...payload,
      submitted_at: new Date().toISOString(),
    }),
    signal: AbortSignal.timeout(WEBHOOK_TIMEOUT_MS),
  });

  if (!webhookResponse.ok) {
    console.error(
      "[concierge] Webhook respondeu com status",
      webhookResponse.status,
    );
    throw new Error("Não foi possível enviar os dados.");
  }

  return { ok: true } as const;
}
