import { NextResponse } from "next/server";
import {
  isValidConciergePayload,
  submitConciergePayload,
  type ConciergePayload,
} from "@/app/lib/concierge";

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);

  if (
    !payload ||
    typeof payload !== "object" ||
    !isValidConciergePayload(payload as ConciergePayload)
  ) {
    return NextResponse.json(
      { error: "Dados do formulário inválidos." },
      { status: 400 },
    );
  }

  try {
    await submitConciergePayload(payload as ConciergePayload);
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
