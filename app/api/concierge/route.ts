import { NextResponse } from "next/server";

const WEBHOOK_URL =
  process.env.CONCIERGE_WEBHOOK_URL ??
  "https://hook.us1.make.celonis.com/xs5og4cp40a22b82vzbzrydaopkx5mtz";

const WEBHOOK_TIMEOUT_MS = 10_000;

function isValidPayload(payload: Record<string, unknown>) {
  const nome = String(payload.nome ?? "").trim();
  const whatsappDigits = String(payload.whatsapp_digits ?? "").replace(
    /\D/g,
    "",
  );
  const perfil = String(payload.perfil ?? "").trim();

  return (
    nome.length >= 2 &&
    whatsappDigits.length >= 10 &&
    whatsappDigits.length <= 11 &&
    perfil.length > 0
  );
}

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);

  if (!payload || typeof payload !== "object" || !isValidPayload(payload)) {
    return NextResponse.json(
      { error: "Dados do formulário inválidos." },
      { status: 400 },
    );
  }

  if (
    process.env.NODE_ENV === "development" &&
    process.env.CONCIERGE_SKIP_WEBHOOK === "true"
  ) {
    console.warn(
      "[concierge] CONCIERGE_SKIP_WEBHOOK ativo — webhook não foi chamado.",
    );
    return NextResponse.json({ ok: true, skipped: true });
  }

  try {
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
      return NextResponse.json(
        { error: "Não foi possível enviar os dados." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Erro desconhecido no webhook";

    console.error("[concierge] Falha ao chamar webhook:", message);

    return NextResponse.json(
      { error: "Não foi possível enviar os dados. Tente novamente." },
      { status: 502 },
    );
  }
}
