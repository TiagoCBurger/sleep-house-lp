import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.svg";
import tempurLogo from "@/public/tempur/tempur-logo.webp";
import { LuxuryMotion } from "../../components/LuxuryMotion";
import { TEMPUR_HOME_CARE_WHATSAPP_URL } from "../../lib/constants";

export const metadata: Metadata = {
  title: "Obrigado | Tempur Home Care Sleep House",
  description:
    "Recebemos seus dados para atendimento Tempur Home Care da Sleep House Americana e Piracicaba.",
};

export default function TempurHomeCareObrigadoPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f5f0e8]">
      <LuxuryMotion />
      <div className="mx-auto flex min-h-screen max-w-[1280px] flex-col items-center justify-center px-6 py-24 text-center sm:px-10">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Image src={logo} alt="Sleep House Colchões" width={190} height={42} className="h-9 w-auto opacity-75" priority />
          <span className="h-8 w-px bg-[#c4a962]/25" aria-hidden="true" />
          <Image src={tempurLogo} alt="TEMPUR®" className="h-5 w-auto" priority />
        </div>

        <div className="mt-12 flex flex-col items-center gap-5">
          <div className="h-px w-14 bg-[#c4a962]/50" />
          <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#c4a962]">
            Solicitação recebida
          </p>
        </div>

        <h1 className="mt-8 max-w-[720px] font-display text-[48px] leading-[.96] tracking-[-.04em] sm:text-[64px]">
          Obrigado. A equipe Sleep House vai analisar seu contexto Home Care.
        </h1>
        <p className="mt-7 max-w-[560px] text-[15px] font-light leading-[1.85] text-[#f5f0e8]/52">
          Seus dados foram enviados com sucesso. Para agilizar a conversa sobre TEMPUR® e atendimento em Americana ou Piracicaba, você também pode continuar pelo WhatsApp.
        </p>

        <div className="mt-10 flex w-full max-w-[520px] flex-col gap-4 sm:flex-row">
          <a
            href={TEMPUR_HOME_CARE_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="whatsapp-obrigado-tempur-home-care"
            className="inline-flex min-h-14 flex-1 items-center justify-center rounded-full bg-[#c4a962] px-7 text-[11px] font-semibold uppercase tracking-[.16em] text-[#0B1F3A] transition hover:bg-[#d4b872]"
            data-lux-button
          >
            Continuar no WhatsApp
          </a>
          <Link
            href="/tempur-home-care"
            className="inline-flex min-h-14 flex-1 items-center justify-center rounded-full border border-[#c4a962]/60 px-7 text-[11px] font-semibold uppercase tracking-[.16em] text-[#c4a962] transition hover:border-[#c4a962] hover:bg-[#c4a962]/10"
          >
            Voltar para a página
          </Link>
        </div>

        <p className="mt-8 max-w-[520px] text-[11px] font-light leading-[1.7] text-[#f5f0e8]/28">
          Os dados informados serão usados apenas para atendimento comercial, conforme a{" "}
          <Link href="/politica-de-privacidade" className="text-[#c4a962] underline underline-offset-4">
            Política de Privacidade
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
