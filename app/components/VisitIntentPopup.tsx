"use client";

import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "sleep-house-visit-popup-seen";

export function VisitIntentPopup() {
  const [open, setOpen] = useState(false);
  const armed = useRef(false);
  const lastY = useRef(0);
  const upwardDistance = useRef(0);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    lastY.current = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      const pageTravel = document.documentElement.scrollHeight - window.innerHeight;
      const armPoint = Math.max(900, pageTravel * 0.45);

      if (currentY >= armPoint) armed.current = true;

      if (armed.current && currentY < lastY.current) {
        upwardDistance.current += lastY.current - currentY;
      } else if (currentY > lastY.current) {
        upwardDistance.current = 0;
      }

      if (armed.current && upwardDistance.current >= 110) {
        sessionStorage.setItem(STORAGE_KEY, "true");
        setOpen(true);
        window.removeEventListener("scroll", onScroll);
      }

      lastY.current = currentY;
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] grid place-items-end bg-[#071426]/60 p-4 backdrop-blur-sm sm:place-items-center" role="presentation">
      <section role="dialog" aria-modal="true" aria-labelledby="visit-popup-title" className="relative w-full max-w-[620px] overflow-hidden bg-[#F4EFE5] p-7 text-[#172B4D] shadow-[0_30px_100px_rgba(0,0,0,.4)] sm:p-11">
        <div className="absolute -right-20 -top-24 size-64 rounded-full border border-[#806000]/20" />
        <button type="button" onClick={() => setOpen(false)} aria-label="Fechar" className="absolute right-5 top-5 grid size-10 place-items-center rounded-full border border-[#172B4D]/15 text-xl text-[#172B4D]/55 transition hover:border-[#172B4D] hover:text-[#172B4D]">×</button>
        <div className="relative">
          <p className="text-[9px] font-semibold uppercase tracking-[.22em] text-[#806000]">Antes de você decidir</p>
          <h2 id="visit-popup-title" className="mt-5 max-w-[500px] font-display text-[38px] leading-[1.02] tracking-[-.035em] sm:text-[48px]">Seu corpo reconhece o colchão certo antes de qualquer ficha técnica.</h2>
          <p className="mt-5 max-w-[500px] text-sm font-light leading-[1.8] text-[#172B4D]/65">Agende uma experiência em Americana ou Piracicaba. Um especialista prepara as melhores opções para você comparar com calma.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#atendimento" onClick={() => setOpen(false)} data-cta="popup-agendar-visita" className="inline-flex min-h-13 items-center justify-center rounded-full bg-[#CF9C00] px-6 text-[10px] font-bold uppercase tracking-[.14em] text-[#0B1F3A] shadow-[0_8px_18px_rgba(128,96,0,.22)] transition hover:bg-[#E8B900] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B1F3A]">Agendar minha visita</a>
            <a href="#lojas" onClick={() => setOpen(false)} data-cta="popup-ver-lojas" className="inline-flex min-h-13 items-center justify-center rounded-full border border-[#172B4D]/70 bg-[#FCFAF6] px-6 text-[10px] font-bold uppercase tracking-[.14em] text-[#172B4D] shadow-[0_8px_18px_rgba(23,43,77,.10)] transition hover:border-[#172B4D] hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B1F3A]">Ver endereços</a>
          </div>
        </div>
      </section>
    </div>
  );
}
