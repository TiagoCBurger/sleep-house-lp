import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import heroImage from "@/public/home/hero-sleep-house.webp";
import technologyImage from "@/public/home/linha-tecnologia.webp";
import handcraftedImage from "@/public/home/linha-artesanal.webp";
import europeanImage from "@/public/home/linha-europeia.webp";
import { ConciergeForm } from "./components/ConciergeForm";
import { HomeHeader } from "./components/HomeHeader";
import { LuxuryMotion } from "./components/LuxuryMotion";
import { GENERAL_WHATSAPP_URL } from "./lib/constants";

export const metadata: Metadata = {
  title: "Sleep House | As melhores marcas para o seu sono",
  description:
    "Compare colchões premium e encontre a combinação ideal de conforto, suporte e tecnologia com a consultoria Sleep House.",
};

const collections: Array<{
  eyebrow: string;
  title: string;
  description: string;
  brands: string;
  image: StaticImageData;
  alt: string;
}> = [
  {
    eyebrow: "Alívio de pressão",
    title: "Tecnologia que se adapta a você.",
    description: "Materiais responsivos que distribuem o peso e reduzem pontos de pressão para um descanso mais contínuo.",
    brands: "Tempur · American Sleep",
    image: technologyImage,
    alt: "Colchão premium com camadas de conforto em estúdio verde escuro",
  },
  {
    eyebrow: "Conforto profundo",
    title: "Tradição feita para durar.",
    description: "Construções robustas, acabamento minucioso e sensação de acolhimento para quem prefere conforto encorpado.",
    brands: "Stearns & Foster · Dédicace Paris",
    image: handcraftedImage,
    alt: "Colchão alto de acabamento artesanal em ambiente de madeira",
  },
  {
    eyebrow: "Suporte equilibrado",
    title: "Engenharia europeia para todas as noites.",
    description: "Sistemas de suporte que combinam estabilidade, ventilação e ergonomia em diferentes níveis de firmeza.",
    brands: "Pikolin · Pikolin Contract",
    image: europeanImage,
    alt: "Colchão de design europeu em ambiente claro e minimalista",
  },
];

const needs = [
  { number: "01", title: "Dormir sem pontos de pressão", text: "Para quem acorda com desconforto ou muda muito de posição." },
  { number: "02", title: "Encontrar o suporte certo", text: "Firme, intermediário ou macio: a escolha parte do seu corpo e da sua rotina." },
  { number: "03", title: "Dormir melhor a dois", text: "Soluções que reduzem a transferência de movimento e conciliam preferências." },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#f4efe5] text-[#17243a]">
      <LuxuryMotion />
      <HomeHeader />

      <section id="hero" className="relative min-h-[850px] bg-[#111d33] text-white lg:min-h-[760px]">
        <Image src={heroImage} alt="Suíte contemporânea com cama premium ao amanhecer" fill priority placeholder="blur" sizes="100vw" className="object-cover object-[64%_center] opacity-75 lg:object-center" data-hero-media />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,27,22,.96)_0%,rgba(9,27,22,.74)_38%,rgba(9,27,22,.12)_72%)]" />
        <div className="relative mx-auto flex min-h-[850px] max-w-[1440px] items-end px-5 pb-32 pt-32 sm:px-8 sm:pb-28 lg:min-h-[760px] lg:items-center lg:px-12 lg:pb-0">
          <div className="max-w-[700px]">
            <p className="mb-7 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.24em] text-[#d8bd7b]" data-hero-reveal>
              <span className="h-px w-10 bg-[#d8bd7b]" /> Curadoria internacional do sono
            </p>
            <h1 className="font-display text-[50px] leading-[.94] tracking-[-.045em] sm:text-[68px] lg:text-[82px]" data-hero-reveal>
              Encontre o colchão ideal para o seu sono.
            </h1>
            <p className="mt-7 max-w-[570px] text-[17px] font-light leading-[1.7] text-white/68" data-hero-reveal>
              Conheça diferentes tecnologias e níveis de conforto com a orientação dos especialistas da Sleep House.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row" data-hero-reveal>
              <a href="#consultoria" className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#d8bd7b] px-7 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#111d33] transition hover:bg-[#ead398]" data-lux-button>
                Descobrir meu conforto
              </a>
              <a href="#colecoes" className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/30 px-7 text-[11px] font-medium uppercase tracking-[0.16em] text-white transition hover:border-white" data-lux-button>
                Explorar coleções
              </a>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 border-t border-white/12 bg-[#111d33]/65 backdrop-blur-lg">
          <div className="mx-auto grid max-w-[1440px] grid-cols-2 px-5 sm:px-8 lg:grid-cols-4 lg:px-12">
            {["Curadoria multimarca", "Tecnologia internacional", "Atendimento consultivo", "Lojas em Americana e Piracicaba"].map((item) => (
              <p key={item} className="border-r border-white/10 px-3 py-4 text-center text-[9px] uppercase tracking-[.14em] text-white/55 last:border-r-0 lg:py-5">{item}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111d33] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1344px]">
          <div className="mb-12 max-w-[720px]" data-reveal>
            <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#d8bd7b]">O que muda uma noite</p>
            <h2 className="mt-5 font-display text-[42px] leading-[1.02] tracking-[-.035em] sm:text-[54px]">Não existe uma única resposta para dormir melhor.</h2>
          </div>
          <div className="grid gap-px bg-white/12 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Conforto", "Sensações macias, intermediárias ou firmes para respeitar sua preferência."],
              ["Suporte", "Estabilidade adequada ao corpo para uma postura mais confortável durante a noite."],
              ["Temperatura", "Materiais que favorecem ventilação e ajudam a manter o conforto térmico."],
              ["Movimento", "Tecnologias que reduzem a transferência de movimentos entre o casal."],
            ].map(([title, text]) => (
              <article key={title} className="bg-[#111d33] p-7 sm:p-8" data-reveal>
                <h3 className="font-display text-2xl text-[#d8bd7b]">{title}</h3>
                <p className="mt-4 text-sm font-light leading-[1.75] text-white/55">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="consultoria" className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1344px]">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
            <div data-reveal>
              <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#9a6e43]">Comece pela sensação</p>
              <h2 className="mt-5 max-w-[440px] font-display text-[44px] leading-[1.02] tracking-[-.035em] sm:text-[56px]">Como você quer acordar amanhã?</h2>
              <p className="mt-6 max-w-[440px] text-[15px] font-light leading-[1.8] text-[#17243a]/65">Mais importante que decorar nomes de tecnologias é entender o que o seu corpo pede. Nossa consultoria começa por aí.</p>
            </div>
            <div className="divide-y divide-[#17243a]/15 border-y border-[#17243a]/15">
              {needs.map((need) => (
                <a key={need.number} href="#atendimento" className="group grid grid-cols-[44px_1fr_auto] items-start gap-4 py-7 sm:grid-cols-[60px_1fr_auto] sm:py-9" data-reveal>
                  <span className="pt-1 text-[10px] tracking-[.18em] text-[#9a6e43]">{need.number}</span>
                  <span>
                    <strong className="block font-display text-[25px] font-normal tracking-[-.02em] sm:text-[30px]">{need.title}</strong>
                    <span className="mt-2 block text-sm font-light leading-[1.7] text-[#17243a]/55">{need.text}</span>
                  </span>
                  <span className="grid size-11 place-items-center rounded-full border border-[#17243a]/20 text-lg transition group-hover:border-[#17243a] group-hover:bg-[#17243a] group-hover:text-white"><Arrow /></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="colecoes" className="bg-[#e7dfd0] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1344px]">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end" data-reveal>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#9a6e43]">Coleções em destaque</p>
              <h2 className="mt-4 font-display text-[44px] leading-none tracking-[-.035em] sm:text-[56px]">Um portfólio. Muitas formas de dormir bem.</h2>
            </div>
            <a href="#atendimento" className="text-[11px] font-semibold uppercase tracking-[.14em] underline decoration-[#9a6e43] underline-offset-8">Pedir uma recomendação</a>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {collections.map((collection) => (
              <article key={collection.title} className="group bg-[#f8f4ec]" data-reveal>
                <div className="relative aspect-[4/3] overflow-hidden bg-[#d7cdbd]" data-lux-media>
                  <Image src={collection.image} alt={collection.alt} fill placeholder="blur" sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-[1.035]" />
                </div>
                <div className="p-7 sm:p-8">
                  <p className="text-[9px] font-semibold uppercase tracking-[.2em] text-[#9a6e43]">{collection.eyebrow}</p>
                  <h3 className="mt-4 font-display text-[30px] leading-[1.05] tracking-[-.025em]">{collection.title}</h3>
                  <p className="mt-4 text-sm font-light leading-[1.75] text-[#17243a]/60">{collection.description}</p>
                  <p className="mt-7 border-t border-[#17243a]/12 pt-5 text-[10px] uppercase tracking-[.14em] text-[#17243a]/55">{collection.brands}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="relative mt-6 overflow-hidden bg-[#172b26] px-7 py-10 text-white sm:px-10 lg:flex lg:items-center lg:justify-between lg:px-14 lg:py-12" data-reveal>
            <div className="absolute -right-20 -top-40 size-[420px] rounded-full border border-[#d8bd7b]/20" />
            <div className="relative max-w-[780px]">
              <p className="text-[9px] font-semibold uppercase tracking-[.22em] text-[#d8bd7b]">Nossa coleção mais exclusiva</p>
              <h3 className="mt-4 font-display text-[34px] leading-[1.05] tracking-[-.03em] sm:text-[42px]">Dédicace Paris. Alta costura para o seu descanso.</h3>
            </div>
            <Link href="/produtos/dedicace-paris" className="relative mt-7 inline-flex min-h-13 shrink-0 items-center gap-3 rounded-full border border-[#d8bd7b] px-6 text-[10px] font-semibold uppercase tracking-[.15em] text-[#d8bd7b] transition hover:bg-[#d8bd7b] hover:text-[#111d33] lg:mt-0" data-lux-button>
              Conhecer Dédicace <Arrow />
            </Link>
          </div>
        </div>
      </section>

      <section id="marcas" className="bg-[#f8f4ec] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1344px]">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div data-reveal>
              <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#9a6e43]">Curadoria Sleep House</p>
              <h2 className="mt-5 font-display text-[44px] leading-[1.02] tracking-[-.035em] sm:text-[56px]">As melhores marcas não precisam ser escolhidas no escuro.</h2>
            </div>
            <div className="self-end" data-reveal>
              <p className="text-base font-light leading-[1.85] text-[#17243a]/65">Há mais de 20 anos no Brasil e com a experiência internacional do Grupo Pikolin, reunimos diferentes escolas de conforto para que você possa comparar de verdade — no mesmo atendimento.</p>
              <div className="mt-8 grid grid-cols-2 border-l border-t border-[#17243a]/15 sm:grid-cols-3">
                {["Pikolin", "Tempur", "Stearns & Foster", "American Sleep", "Dédicace Paris", "Sleep House"].map((brand) => (
                  <div key={brand} className="grid min-h-24 place-items-center border-b border-r border-[#17243a]/15 px-3 text-center font-display text-lg text-[#17243a]/70">{brand}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="lojas" className="bg-[#e7dfd0] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1344px]">
          <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
            <div data-reveal>
              <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#9a6e43]">Experiência presencial</p>
              <h2 className="mt-5 font-display text-[44px] leading-[1.02] tracking-[-.035em] sm:text-[56px]">Experimente antes de escolher.</h2>
              <p className="mt-6 text-[15px] font-light leading-[1.8] text-[#17243a]/65">Visite a unidade mais próxima, compare níveis de conforto e receba uma recomendação personalizada.</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  city: "Americana",
                  address: "Av. Campos Sales, 1180 · Jardim Girassol",
                  maps: "https://www.google.com/maps/search/?api=1&query=Sleep+House+Colchões+Americana+Av+Campos+Sales+1180",
                },
                {
                  city: "Piracicaba",
                  address: "Av. Carlos Botelho, 120 · São Dimas",
                  maps: "https://www.google.com/maps/search/?api=1&query=Sleep+House+Colchões+Piracicaba+Av+Carlos+Botelho+120",
                },
              ].map((store) => (
                <article key={store.city} className="flex min-h-[260px] flex-col bg-[#f8f4ec] p-7 sm:p-8" data-reveal>
                  <span className="text-[9px] font-semibold uppercase tracking-[.2em] text-[#9a6e43]">Sleep House</span>
                  <h3 className="mt-4 font-display text-[34px] tracking-[-.025em]">{store.city}</h3>
                  <p className="mt-5 text-sm font-light leading-[1.75] text-[#17243a]/60">{store.address}<br />SP</p>
                  <a href={store.maps} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center justify-between border-t border-[#17243a]/15 pt-5 text-[10px] font-semibold uppercase tracking-[.14em]">
                    Como chegar <Arrow />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="atendimento" className="bg-[#111d33] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
          <div data-reveal>
            <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#d8bd7b]">Consultoria de sono</p>
            <h2 className="mt-5 font-display text-[46px] leading-[.98] tracking-[-.04em] sm:text-[60px]">Seu colchão ideal começa com uma boa conversa.</h2>
            <p className="mt-7 max-w-[480px] text-[15px] font-light leading-[1.85] text-white/55">Conte como você dorme, o que incomoda e qual sensação procura. Um especialista entra em contato para indicar as melhores opções do portfólio.</p>
            <ul className="mt-9 space-y-4 border-t border-white/12 pt-8 text-sm font-light text-white/55">
              <li>• Recomendação para o seu perfil de sono</li>
              <li>• Comparação entre marcas e tecnologias</li>
              <li>• Atendimento sem compromisso de compra</li>
            </ul>
          </div>
          <div className="border border-white/12 bg-white/[.03] p-6 sm:p-10" data-reveal>
            <ConciergeForm
              origin="Landing Page Sleep House Americana e Piracicaba"
              qualification
              successPath="/encontre-seu-colchao-ideal-typ"
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#111d33] px-5 py-9 text-white sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1344px] flex-col gap-5 text-[10px] uppercase tracking-[.12em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>Sleep House Colchões · 2026</p>
          <div className="flex flex-wrap gap-5"><a href="#colecoes">Coleções</a><a href="#lojas">Lojas</a><Link href="/politica-de-privacidade">Privacidade</Link><Link href="/produtos/dedicace-paris">Dédicace Paris</Link></div>
        </div>
      </footer>

      <a
        href={GENERAL_WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com um especialista pelo WhatsApp"
        data-cta="whatsapp-flutuante"
        className="fixed bottom-5 right-5 z-40 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#d8bd7b] px-5 text-[10px] font-semibold uppercase tracking-[.12em] text-[#111d33] shadow-[0_14px_40px_rgba(0,0,0,.25)] transition hover:bg-[#ead398]"
      >
        WhatsApp <Arrow />
      </a>
    </main>
  );
}
