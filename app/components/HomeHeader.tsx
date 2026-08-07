"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "@/public/logo.svg";

const links = [
  { label: "Coleções", detail: "Tecnologias e sensações", href: "#colecoes", number: "01" },
  { label: "Produtos", detail: "Modelos para experimentar", href: "#produtos", number: "02" },
  { label: "Como escolher", detail: "Consultoria personalizada", href: "#consultoria", number: "03" },
  { label: "Marcas", detail: "Curadoria internacional", href: "#marcas", number: "04" },
  { label: "Dédicace Paris", detail: "Nossa coleção exclusiva", href: "/produtos/dedicace-paris", number: "05" },
];

export function HomeHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0B1F3A]/88 text-white backdrop-blur-xl">
      <div className="mx-auto flex h-[68px] max-w-[1440px] items-center justify-between px-5 sm:h-[74px] sm:px-8 lg:px-12">
        <Link href="/" aria-label="Sleep House — página inicial" onClick={closeMenu}>
          <Image src={logo} alt="Sleep House Colchões" width={190} height={42} className="h-8 w-auto sm:h-9" priority />
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((value) => !value)}
            className="group inline-flex h-10 items-center gap-3 rounded-full border border-white/20 px-4 text-[10px] font-semibold uppercase tracking-[0.16em] transition hover:border-[#CF9C00] hover:text-[#CF9C00] sm:h-11 sm:px-5"
            data-lux-button
          >
            <span className="hidden sm:inline">{open ? "Fechar" : "Menu"}</span>
            <span className="flex w-4 flex-col gap-1.5" aria-hidden="true">
              <span className={`h-px w-full bg-current transition duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
              <span className={`h-px w-full bg-current transition duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
            </span>
          </button>
          <a
            href="#atendimento"
            onClick={closeMenu}
            className="hidden rounded-full bg-[#CF9C00] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#0B1F3A] transition hover:bg-[#E8B900] sm:inline-flex"
            data-lux-button
          >
            Agendar visita
          </a>
        </div>
      </div>

      <div
        id="site-menu"
        aria-hidden={!open}
        className={`home-menu absolute inset-x-0 top-full border-t border-white/10 bg-[#0B1F3A] ${open ? "home-menu-open" : ""}`}
      >
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-8 sm:px-8 sm:py-12 lg:grid-cols-[1.15fr_.85fr] lg:gap-20 lg:px-12 lg:py-14">
          <nav aria-label="Navegação principal" className="border-t border-white/15">
            {links.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                tabIndex={open ? 0 : -1}
                onClick={closeMenu}
                className="home-menu-link group grid grid-cols-[34px_1fr_auto] items-center gap-3 border-b border-white/15 py-4 sm:grid-cols-[44px_1fr_auto] sm:py-5"
                style={{ transitionDelay: open ? `${100 + index * 55}ms` : "0ms" }}
              >
                <span className="text-[9px] tracking-[.18em] text-[#CF9C00]">{link.number}</span>
                <span>
                  <strong className="block font-display text-[28px] font-normal leading-none tracking-[-.025em] text-white sm:text-[36px]">{link.label}</strong>
                  <span className="mt-1 block text-[10px] uppercase tracking-[.13em] text-white/43">{link.detail}</span>
                </span>
                <span className="grid size-9 place-items-center rounded-full border border-white/20 text-lg text-[#CF9C00] transition duration-300 group-hover:border-[#CF9C00] group-hover:bg-[#CF9C00] group-hover:text-[#0B1F3A]">↗</span>
              </Link>
            ))}
          </nav>

          <aside className="home-menu-aside self-end border border-[#CF9C00]/30 bg-white/[.04] p-6 sm:p-8">
            <p className="text-[9px] font-semibold uppercase tracking-[.22em] text-[#CF9C00]">Sleep House perto de você</p>
            <h2 className="mt-4 font-display text-[30px] leading-[1.02] tracking-[-.03em] text-white sm:text-[38px]">Uma visita muda a forma de escolher.</h2>
            <p className="mt-4 max-w-md text-sm font-light leading-[1.75] text-white/58">Compare as tecnologias com calma e descubra o conforto ideal em Americana ou Piracicaba.</p>
            <a
              href="#lojas"
              tabIndex={open ? 0 : -1}
              onClick={closeMenu}
              className="mt-7 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#CF9C00] px-5 text-[10px] font-semibold uppercase tracking-[.14em] text-[#0B1F3A] transition hover:bg-[#E8B900]"
            >
              Ver nossas lojas <span aria-hidden="true">↗</span>
            </a>
          </aside>
        </div>
      </div>
    </header>
  );
}
