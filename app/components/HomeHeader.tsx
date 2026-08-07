"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "@/public/logo.svg";

const links = [
  { label: "Coleções", href: "#colecoes" },
  { label: "Como escolher", href: "#consultoria" },
  { label: "Marcas", href: "#marcas" },
  { label: "Dédicace Paris", href: "/produtos/dedicace-paris" },
];

export function HomeHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#111d33]/85 text-white backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" aria-label="Sleep House — página inicial">
          <Image src={logo} alt="Sleep House Colchões" width={190} height={42} className="h-9 w-auto" priority />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-[11px] uppercase tracking-[0.14em] text-white/65 transition hover:text-[#d8bd7b]">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#atendimento" className="hidden rounded-full bg-[#d8bd7b] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#111d33] transition hover:bg-[#ead398] sm:inline-flex">
            Encontrar meu colchão
          </a>
          <button type="button" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} onClick={() => setOpen((value) => !value)} className="grid size-11 place-items-center rounded-full border border-white/20 lg:hidden">
            <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
              <span className={`h-px w-full bg-white transition ${open ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`h-px w-full bg-white transition ${open ? "opacity-0" : ""}`} />
              <span className={`h-px w-full bg-white transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-[#111d33] px-6 py-8 lg:hidden" aria-label="Menu móvel">
          <div className="flex flex-col">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="border-b border-white/10 py-4 font-display text-2xl text-white">
                {link.label}
              </Link>
            ))}
            <a href="#atendimento" onClick={() => setOpen(false)} className="mt-7 inline-flex justify-center rounded-full bg-[#d8bd7b] px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#111d33]">
              Encontrar meu colchão
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
