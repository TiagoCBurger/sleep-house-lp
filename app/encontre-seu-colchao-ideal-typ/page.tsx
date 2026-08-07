import type { Metadata } from "next";
import Link from "next/link";
import { GENERAL_WHATSAPP_URL } from "../lib/constants";

export const metadata: Metadata = {
  title: "Obrigado | Sleep House",
  description: "Recebemos suas preferências de sono e entraremos em contato.",
};

export default function GeneralThankYouPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#0B1F3A] px-5 py-20 text-white">
      <div className="w-full max-w-[620px] text-center">
        <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#CF9C00]">Preferências recebidas</p>
        <h1 className="mt-6 font-display text-[48px] leading-[.98] tracking-[-.04em] sm:text-[64px]">Agora vamos encontrar o seu conforto ideal.</h1>
        <p className="mx-auto mt-7 max-w-[500px] text-[15px] font-light leading-[1.85] text-white/55">Um especialista da Sleep House entrará em contato para orientar sua escolha e agendar sua experiência em Americana ou Piracicaba.</p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={GENERAL_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-cta="whatsapp-obrigado" className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#CF9C00] px-7 text-[11px] font-semibold uppercase tracking-[.14em] text-[#0B1F3A]">Continuar no WhatsApp</a>
          <Link href="/" className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/25 px-7 text-[11px] font-semibold uppercase tracking-[.14em]">Voltar ao site</Link>
        </div>
      </div>
    </main>
  );
}
