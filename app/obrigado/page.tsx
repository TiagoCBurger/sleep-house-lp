import type { Metadata } from "next";
import Link from "next/link";
import { LuxuryMotion } from "../components/LuxuryMotion";
import { SiteHeader } from "../components/SiteHeader";
import { WHATSAPP_URL } from "../lib/constants";

export const metadata: Metadata = {
  title: "Obrigado | Sleep House Dédicace Paris",
  description:
    "Seus dados foram enviados. Continue o atendimento pelo WhatsApp.",
};

export default function ObrigadoPage() {
  return (
    <main className="bg-[#0a0a0a] text-[#f5f0e8]">
      <LuxuryMotion />
      <SiteHeader />

      <div className="mx-auto flex min-h-screen max-w-[1920px] flex-col items-center justify-center px-6 py-32 sm:px-10 lg:px-16">
        <div className="flex w-full max-w-[560px] flex-col items-center gap-10 text-center">
          <div className="flex flex-col items-center gap-5">
            <div className="h-px w-14 bg-[#c4a962]/50" />
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#c4a962]">
              Dados recebidos
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h1 className="font-display text-[44px] leading-[0.96] tracking-[-0.03em] sm:text-[52px]">
              <span className="block">Obrigado</span>
              <em className="block not-italic text-[#c4a962]">pelo contato</em>
            </h1>

            <p className="text-[15px] font-light leading-[1.85] text-[#f5f0e8]/45">
              Seus dados foram enviados com sucesso. Para agilizar o atendimento,
              fale agora com nosso time pelo WhatsApp.
            </p>
          </div>

          <div className="flex w-full flex-col gap-4 pt-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[50px] w-full items-center justify-center bg-[#c4a962] px-8 text-[11px] font-medium uppercase tracking-[0.16em] text-[#0a0a0a] transition-colors duration-200 hover:bg-[#d4b872]"
              data-lux-button
            >
              Continuar no WhatsApp
            </a>

            <Link
              href="/"
              className="inline-flex h-[50px] w-full items-center justify-center border border-[#c4a962]/40 px-8 text-[11px] font-medium uppercase tracking-[0.16em] text-[#c4a962] transition-colors duration-200 hover:border-[#c4a962] hover:bg-[#c4a962]/10"
            >
              Voltar ao site
            </Link>
          </div>

          <p className="text-[11px] font-light tracking-[0.04em] text-[#f5f0e8]/20">
            Atendimento personalizado · Sem compromisso de compra
          </p>
        </div>
      </div>
    </main>
  );
}
