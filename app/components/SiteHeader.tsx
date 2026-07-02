"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import logo from "@/public/logo.svg";

const menuLinks = [
  { label: "Início", href: "#hero" },
  { label: "Artesanato", href: "#artesanato" },
  { label: "Distribuidora", href: "#distribuidora" },
  { label: "Arquitetos", href: "#arquitetos" },
  { label: "Concierge", href: "#concierge" },
];

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span
      aria-hidden="true"
      className="relative flex size-5 items-center justify-center"
    >
      <span
        className={`absolute block h-px w-5 origin-center bg-[#c4a962] transition-all duration-300 ease-out ${
          open ? "rotate-45" : "-translate-y-[6px]"
        }`}
      />
      <span
        className={`absolute block h-px w-5 origin-center bg-[#c4a962] transition-all duration-300 ease-out ${
          open ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
        }`}
      />
      <span
        className={`absolute block h-px w-5 origin-center bg-[#c4a962] transition-all duration-300 ease-out ${
          open ? "-rotate-45" : "translate-y-[6px]"
        }`}
      />
    </span>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const updateVisibility = () => {
      const currentY = window.scrollY;
      const heroBottom = hero.offsetTop + hero.offsetHeight;
      const inHero = currentY < heroBottom - 80;
      const scrollingUp = currentY < lastScrollY.current - 6;
      const scrollingDown = currentY > lastScrollY.current + 6;

      if (inHero || menuOpen) {
        setVisible(true);
      } else if (scrollingUp) {
        setVisible(true);
      } else if (scrollingDown) {
        setVisible(false);
      }

      lastScrollY.current = currentY;
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(updateVisibility);
      }
    };

    lastScrollY.current = window.scrollY;
    updateVisibility();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b border-[#c4a962]/15 bg-[#0a0a0a]/60 backdrop-blur-2xl backdrop-saturate-150 transition-transform duration-500 ease-out supports-backdrop-filter:bg-[#0a0a0a]/45 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-auto flex max-w-[1920px] items-center justify-between gap-6 px-6 py-5 sm:px-12 lg:px-16 xl:px-[48px]">
          <a href="#hero" className="shrink-0">
            <Image
              src={logo}
              alt="Sleep House Colchões"
              width={220}
              height={48}
              className="h-9 w-auto sm:h-10 lg:h-11"
              fetchPriority="high"
            />
          </a>

          <nav
            aria-label="Navegação principal"
            className="hidden items-center gap-10 lg:flex"
          >
            {menuLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[10px] font-light uppercase tracking-[0.18em] text-[#f5f0e8]/45 transition-colors duration-200 hover:text-[#c4a962]"
                data-lux-tag
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-4">
            <a
              href="#concierge"
              className="hidden h-[50px] items-center justify-center border border-[#c4a962] px-8 text-[11px] font-medium uppercase tracking-[0.16em] text-[#c4a962] transition-colors duration-200 hover:bg-[#c4a962] hover:text-[#0a0a0a] lg:inline-flex"
              data-lux-button
            >
              Falar com o Concierge
            </a>

            <button
              type="button"
              aria-expanded={menuOpen}
              aria-controls="site-menu"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              onClick={() => setMenuOpen((open) => !open)}
              className="flex size-11 items-center justify-center border border-[#c4a962]/40 transition-colors duration-200 hover:border-[#c4a962] hover:bg-[#c4a962]/10 lg:hidden"
            >
              <MenuIcon open={menuOpen} />
            </button>
          </div>
        </div>
      </header>

      <div
        id="site-menu"
        className={`fixed inset-0 z-40 lg:hidden ${
          menuOpen
            ? "pointer-events-auto visible"
            : "pointer-events-none invisible"
        }`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          aria-label="Fechar menu"
          onClick={closeMenu}
          className={`absolute inset-0 bg-[#0a0a0a]/85 backdrop-blur-sm transition-opacity duration-500 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        <nav
          className={`absolute right-0 top-0 flex h-full w-full max-w-[420px] flex-col border-l border-[#c4a962]/15 bg-[#0a0a0a] px-8 pb-10 pt-[88px] shadow-[-24px_0_64px_rgba(0,0,0,0.5)] transition-transform duration-500 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <p className="text-[9px] font-light uppercase tracking-[0.22em] text-[#c4a962]">
            Menu
          </p>
          <div className="mt-4 h-px w-14 bg-[#c4a962]/50" />

          <ul className="mt-10 flex flex-col">
            {menuLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block border-b border-[#f5f0e8]/8 py-5 font-display text-[26px] leading-none tracking-[-0.02em] text-[#f5f0e8] transition-colors duration-200 hover:text-[#c4a962]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-10">
            <a
              href="#concierge"
              onClick={closeMenu}
              className="inline-flex h-[50px] w-full items-center justify-center border border-[#c4a962] text-[11px] font-medium uppercase tracking-[0.16em] text-[#c4a962] transition-colors duration-200 hover:bg-[#c4a962] hover:text-[#0a0a0a]"
              data-lux-button
            >
              Falar com o Concierge
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
