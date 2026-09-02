import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import logo from "@/public/logo.svg";
import tempurLogo from "@/public/tempur/tempur-logo.webp";
import tempurLine from "@/public/tempur/linha-tempur.png";
import tempurProPlus from "@/public/tempur/pro-plus-medium-firm.png";
import tempurProAdapt from "@/public/tempur/pro-adapt.jpg";
import coolquiltComfort from "@/public/tempur/coolquilt-conforto.webp";
import coolquiltDetail from "@/public/tempur/coolquilt-detalhe.webp";
import tempurStill from "@/public/tempur/produto-tempur.webp";
import tempurHybridFirm from "@/public/products/official/tempur-hybrid-firm.png";
import americanaStore from "@/public/stores/sleep-house-fachada.jpg";
import piracicabaStore from "@/public/stores/sleep-house-showroom.jpeg";
import { ConciergeForm } from "../components/ConciergeForm";
import { LuxuryMotion } from "../components/LuxuryMotion";
import { TEMPUR_HOME_CARE_WHATSAPP_URL } from "../lib/constants";

export const metadata: Metadata = {
  title: "Tempur Home Care | Sleep House",
  description:
    "Consultoria Sleep House Americana e Piracicaba para configurar a linha TEMPUR® em contextos de Home Care, com conforto, sofisticação e atendimento humano.",
};

const heroTrust = [
  "Sleep House Americana e Piracicaba",
  "Consultoria para famílias",
  "Linha TEMPUR® Home Care",
] as const;

const contextCards = [
  {
    title: "A decisão costuma ser da família",
    text: "Quem escolhe precisa equilibrar cuidado, conforto, ambiente da casa e segurança na compra. Por isso, a conversa vem antes da indicação.",
  },
  {
    title: "Mais tempo no quarto pede mais critério",
    text: "Quando a permanência em casa exige uma estrutura melhor, a superfície de descanso deixa de ser uma escolha comum.",
  },
  {
    title: "Conforto sem aparência hospitalar",
    text: "A proposta é preservar a sensação de casa, com acabamento premium, tecnologia e orientação de um especialista.",
  },
] as const;

const audienceCards = [
  "Famílias que cuidam de idosos em casa",
  "Pessoas que passam muito tempo na cama",
  "Rotinas com mobilidade reduzida",
  "Quem deseja conhecer TEMPUR® antes de decidir",
] as const;

const tempurBenefits = [
  {
    number: "01",
    title: "Adaptação ao corpo",
    text: "O material TEMPUR® responde ao formato, ao peso e ao calor do corpo para entregar uma sensação de conforto personalizada.",
  },
  {
    number: "02",
    title: "Menos interferência de movimento",
    text: "A tecnologia ajuda a absorver movimentos, algo importante quando há mudanças de posição ou apoio de familiares no cuidado diário.",
  },
  {
    number: "03",
    title: "Suporte onde importa",
    text: "A distribuição uniforme da pressão combina acolhimento e sustentação em diferentes pontos de contato.",
  },
] as const;

const technologyNotes = [
  {
    title: "Certified Space Technology",
    text: "A história da TEMPUR® vem da pesquisa espacial e evoluiu para uma experiência premium de conforto dentro de casa.",
  },
  {
    title: "Camadas SmartCool",
    text: "Detalhes como o acabamento CoolQuilt™ ajudam a compor uma superfície agradável ao toque e ao uso diário.",
  },
  {
    title: "Configuração articulada",
    text: "A equipe comercial pode orientar a combinação de TEMPUR® com cama articulada para um uso Home Care mais confortável.",
  },
] as const;

const productGallery: Array<{
  image: StaticImageData;
  eyebrow: string;
  title: string;
  text: string;
}> = [
  {
    image: tempurLine,
    eyebrow: "Linha TEMPUR®",
    title: "Sensações para comparar com calma",
    text: "A consultoria ajuda a entender o que muda entre camadas, alturas e respostas de conforto.",
  },
  {
    image: tempurProPlus,
    eyebrow: "TEMPUR PRO® Plus",
    title: "Tecnologia visível em cada camada",
    text: "Uma referência visual para discutir sustentação, acolhimento e acabamento com o especialista.",
  },
  {
    image: tempurProAdapt,
    eyebrow: "TEMPUR PRO® Adapt",
    title: "Conforto integrado ao quarto",
    text: "A experiência precisa fazer sentido para a casa, para a rotina e para a pessoa que será cuidada.",
  },
  {
    image: coolquiltComfort,
    eyebrow: "CoolQuilt™",
    title: "Resposta ao toque",
    text: "Detalhes de acabamento ajudam a transformar tecnologia em sensação percebida.",
  },
  {
    image: coolquiltDetail,
    eyebrow: "Acabamento TEMPUR®",
    title: "Materiais para ver e sentir",
    text: "A escolha ganha segurança quando a família pode comparar a construção de perto.",
  },
];

const journey = [
  {
    step: "Entender",
    text: "A equipe conversa sobre rotina, cidade, quem vai usar, nível de permanência na cama e faixa de investimento considerada.",
  },
  {
    step: "Configurar",
    text: "O especialista apresenta TEMPUR®, conforto, tamanho e possibilidade de cama articulada, sem transformar o atendimento em venda apressada.",
  },
  {
    step: "Decidir",
    text: "A família recebe uma recomendação clara para seguir pelo WhatsApp ou agendar a experiência na unidade mais conveniente.",
  },
] as const;

const trustSignals = [
  "Atendimento presencial em Americana e Piracicaba",
  "Equipe preparada para explicar tecnologias premium",
  "Processo consultivo para decisões familiares",
] as const;

const stores = [
  {
    city: "Americana",
    address: "Av. Campos Sales, 1180 · Jardim Girassol",
    maps: "https://www.google.com/maps/search/?api=1&query=Sleep+House+Colchões+Americana+Av+Campos+Sales+1180",
    image: americanaStore,
    alt: "Fachada da loja Sleep House Colchões em Americana",
  },
  {
    city: "Piracicaba",
    address: "Av. Carlos Botelho, 120 · São Dimas",
    maps: "https://www.google.com/maps/search/?api=1&query=Sleep+House+Colchões+Piracicaba+Av+Carlos+Botelho+120",
    image: piracicabaStore,
    alt: "Showroom da loja Sleep House Colchões em Piracicaba",
  },
] as const;

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function SectionContainer({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1344px] px-5 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  );
}

function SectionLabel({
  children,
  tone = "gold",
}: {
  children: React.ReactNode;
  tone?: "gold" | "dark";
}) {
  return (
    <p
      className={`flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.22em] ${
        tone === "gold" ? "text-[#c4a962]" : "text-[#806000]"
      }`}
      data-reveal
    >
      <span className="h-px w-10 bg-current" />
      {children}
    </p>
  );
}

function PrimaryCta({
  href = "#formulario",
  children,
  cta,
}: {
  href?: string;
  children: React.ReactNode;
  cta: string;
}) {
  return (
    <a
      href={href}
      data-cta={cta}
      data-lux-button
      className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#c4a962] px-7 text-[11px] font-semibold uppercase tracking-[.16em] text-[#0B1F3A] shadow-[0_18px_44px_rgba(196,169,98,.22)] transition hover:bg-[#d4b872]"
    >
      {children}
    </a>
  );
}

function SecondaryCta({
  href,
  children,
  cta,
}: {
  href: string;
  children: React.ReactNode;
  cta: string;
}) {
  return (
    <a
      href={href}
      data-cta={cta}
      data-lux-button
      className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#c4a962]/70 px-7 text-[11px] font-semibold uppercase tracking-[.16em] text-[#c4a962] transition hover:border-[#c4a962] hover:bg-[#c4a962]/10"
    >
      {children}
    </a>
  );
}

function TempurHomeCareHeader() {
  const links = [
    { label: "Home Care", href: "#contexto" },
    { label: "TEMPUR®", href: "#tecnologia" },
    { label: "Produtos", href: "#produtos" },
    { label: "Atendimento", href: "#formulario" },
    { label: "Lojas", href: "#lojas" },
  ] as const;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#c4a962]/15 bg-[#0a0a0a]/72 text-[#f5f0e8] backdrop-blur-2xl">
      <div className="mx-auto flex h-[70px] max-w-[1440px] items-center justify-between gap-5 px-5 sm:h-[78px] sm:px-8 lg:px-12">
        <Link href="/" aria-label="Sleep House — página inicial" className="flex shrink-0 items-center gap-4">
          <Image src={logo} alt="Sleep House Colchões" width={190} height={42} className="h-8 w-auto sm:h-9" priority />
          <span className="hidden h-7 w-px bg-[#c4a962]/25 sm:block" aria-hidden="true" />
          <Image src={tempurLogo} alt="TEMPUR®" className="hidden h-4 w-auto sm:block" priority />
        </Link>

        <nav aria-label="Navegação Tempur Home Care" className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[10px] font-light uppercase tracking-[.18em] text-[#f5f0e8]/48 transition hover:text-[#c4a962]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={TEMPUR_HOME_CARE_WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-cta="header-whatsapp-tempur-home-care"
          className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full border border-[#c4a962] px-5 text-[10px] font-semibold uppercase tracking-[.14em] text-[#c4a962] transition hover:bg-[#c4a962] hover:text-[#0a0a0a]"
          data-lux-button
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}

export default function TempurHomeCarePage() {
  return (
    <main className="overflow-hidden bg-[#0a0a0a] text-[#f5f0e8]">
      <LuxuryMotion />
      <TempurHomeCareHeader />

      <section id="hero" className="relative min-h-[880px] bg-[#0a0a0a] pt-[70px] sm:pt-[78px] lg:min-h-[780px]">
        <div className="absolute inset-0">
          <video
            className="h-full w-full object-cover opacity-[.54]"
            autoPlay
            loop
            muted
            playsInline
            poster="/tempur/tempur-hero-poster.jpg"
            preload="metadata"
            aria-hidden="true"
          >
            <source src="/tempur/tempur-hero-6s.webm" type="video/webm" />
            <source src="/tempur/tempur-hero-6s.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,10,.96)_0%,rgba(10,10,10,.82)_42%,rgba(10,10,10,.38)_76%,rgba(10,10,10,.78)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(0deg,#0a0a0a,transparent)]" />
        </div>

        <SectionContainer className="relative flex min-h-[810px] items-center py-16 sm:min-h-[702px] lg:py-20">
          <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
            <div className="max-w-[760px]">
              <div className="mb-7 flex flex-wrap items-center gap-4" data-hero-reveal>
                <span className="h-px w-12 bg-[#c4a962]" />
                <Image src={tempurLogo} alt="TEMPUR®" className="h-5 w-auto" priority />
                <span className="text-[10px] font-semibold uppercase tracking-[.24em] text-[#c4a962]">
                  Home Care Sleep House
                </span>
              </div>
              <h1
                className="font-display text-[48px] leading-[.95] tracking-[-.045em] text-[#f5f0e8] sm:text-[68px] lg:text-[82px]"
                data-hero-reveal
              >
                Quando permanecer em casa exige mais cuidado, o conforto também precisa estar à altura.
              </h1>
              <p className="mt-7 max-w-[620px] text-[17px] font-light leading-[1.75] text-[#f5f0e8]/62" data-hero-reveal>
                Uma consultoria Sleep House Americana e Piracicaba para famílias que buscam configurar TEMPUR® em um contexto de Home Care, com sofisticação, escuta e critério.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row" data-hero-reveal>
                <PrimaryCta cta="hero-form-tempur-home-care">Solicitar consultoria</PrimaryCta>
                <SecondaryCta href={TEMPUR_HOME_CARE_WHATSAPP_URL} cta="hero-whatsapp-tempur-home-care">
                  Falar no WhatsApp
                </SecondaryCta>
              </div>
              <ul className="mt-8 grid gap-3 border-t border-[#c4a962]/15 pt-7 sm:grid-cols-3" data-hero-reveal>
                {heroTrust.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[10px] font-light uppercase tracking-[.14em] text-[#f5f0e8]/45">
                    <span className="size-1.5 rounded-full bg-[#c4a962]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative hidden min-h-[520px] lg:block" data-hero-media>
              <div className="absolute right-0 top-4 h-[470px] w-[78%] border border-[#c4a962]/18 bg-[#141414]/70 p-4 backdrop-blur-sm">
                <div className="relative h-full overflow-hidden bg-[#f5f0e8]">
                  <Image
                    src={tempurStill}
                    alt="Colchão TEMPUR® em destaque"
                    fill
                    priority
                    sizes="(min-width: 1024px) 34vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="absolute bottom-10 left-0 max-w-[310px] border border-[#c4a962]/20 bg-[#0a0a0a]/88 p-7 shadow-[0_24px_80px_rgba(0,0,0,.45)]">
                <p className="text-[9px] font-semibold uppercase tracking-[.22em] text-[#c4a962]">Atendimento humano</p>
                <p className="mt-4 font-display text-[28px] leading-[1.05] tracking-[-.03em]">
                  A tecnologia entra depois de entender a rotina de cuidado.
                </p>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      <section id="contexto" className="bg-[#f5f0e8] py-24 text-[#0a0a0a] lg:py-32">
        <SectionContainer>
          <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
            <div>
              <SectionLabel tone="dark">Contexto Home Care</SectionLabel>
              <h2 className="mt-6 font-display text-[42px] leading-[1.02] tracking-[-.035em] sm:text-[56px]" data-reveal>
                A escolha certa começa quando a família consegue falar sobre cuidado sem abrir mão de conforto.
              </h2>
            </div>
            <div className="grid gap-px bg-[#172B4D]/12 sm:grid-cols-3">
              {contextCards.map((card) => (
                <article key={card.title} className="bg-[#FCFAF6] p-7 sm:p-8" data-reveal>
                  <h3 className="font-display text-[28px] leading-[1.05] tracking-[-.025em]">{card.title}</h3>
                  <p className="mt-5 text-sm font-light leading-[1.75] text-[#172B4D]/62">{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </SectionContainer>
      </section>

      <section id="para-quem" className="border-y border-[#c4a962]/12 bg-[#111111] py-24 lg:py-32">
        <SectionContainer>
          <div className="grid items-end gap-10 lg:grid-cols-[.95fr_1.05fr] lg:gap-20">
            <div>
              <SectionLabel>Para quem é</SectionLabel>
              <h2 className="mt-6 max-w-[640px] font-display text-[44px] leading-[1.02] tracking-[-.035em] sm:text-[58px]" data-reveal>
                Para decisões de cuidado em casa que pedem uma solução mais refinada.
              </h2>
              <p className="mt-6 max-w-[560px] text-[15px] font-light leading-[1.85] text-[#f5f0e8]/52" data-reveal>
                A LP foi pensada para quem está avaliando conforto, permanência prolongada na cama, mobilidade e renovação de estrutura com uma compra de alto envolvimento.
              </p>
            </div>
            <div className="grid gap-px bg-[#c4a962]/16 sm:grid-cols-2" data-reveal>
              {audienceCards.map((item, index) => (
                <article key={item} className="min-h-[180px] bg-[#111111] p-7">
                  <span className="text-[10px] tracking-[.18em] text-[#c4a962]/70">0{index + 1}</span>
                  <h3 className="mt-8 font-display text-[30px] leading-[1.05] tracking-[-.025em]">{item}</h3>
                </article>
              ))}
            </div>
          </div>
        </SectionContainer>
      </section>

      <section id="tecnologia" className="bg-[#0B1F3A] py-24 text-white lg:py-32">
        <SectionContainer>
          <div className="mb-12 max-w-[780px]">
            <SectionLabel>Por que TEMPUR®</SectionLabel>
            <h2 className="mt-6 font-display text-[44px] leading-[1.02] tracking-[-.035em] sm:text-[58px]" data-reveal>
              Tecnologia premium para transformar suporte em sensação de cuidado.
            </h2>
            <p className="mt-6 max-w-[650px] text-[15px] font-light leading-[1.85] text-white/55" data-reveal>
              TEMPUR® não entra aqui como promessa médica. Entra como material de conforto adaptativo, acabamento sofisticado e base para uma configuração pensada com a família.
            </p>
          </div>

          <div className="grid gap-px bg-white/12 lg:grid-cols-3">
            {tempurBenefits.map((benefit) => (
              <article key={benefit.number} className="bg-[#0B1F3A] p-7 sm:p-9" data-reveal>
                <div className="flex items-center justify-between border-b border-white/12 pb-6">
                  <span className="text-[10px] tracking-[.2em] text-[#c4a962]">{benefit.number}</span>
                  <span className="size-2 rounded-full bg-[#c4a962]" aria-hidden="true" />
                </div>
                <h3 className="mt-8 font-display text-[31px] leading-[1.04] tracking-[-.025em] text-[#c4a962]">{benefit.title}</h3>
                <p className="mt-5 text-sm font-light leading-[1.75] text-white/56">{benefit.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {technologyNotes.map((note) => (
              <article key={note.title} className="border border-white/12 bg-white/[.035] p-7" data-reveal>
                <h3 className="text-[10px] font-semibold uppercase tracking-[.2em] text-[#c4a962]">{note.title}</h3>
                <p className="mt-4 text-sm font-light leading-[1.75] text-white/55">{note.text}</p>
              </article>
            ))}
          </div>
        </SectionContainer>
      </section>

      <section id="produtos" className="bg-[#f5f0e8] py-24 text-[#0a0a0a] lg:py-32">
        <SectionContainer>
          <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
            <div data-reveal>
              <SectionLabel tone="dark">Produtos e configuração</SectionLabel>
              <h2 className="mt-6 font-display text-[44px] leading-[1.02] tracking-[-.035em] sm:text-[58px]">
                Linha TEMPUR® com configuração orientada para o uso em casa.
              </h2>
              <p className="mt-6 text-[15px] font-light leading-[1.85] text-[#172B4D]/64">
                O produto validado no portfólio desta Sleep House é o Tempur Hybrid Firm · 25 cm. A equipe comercial ajuda a avaliar tamanho, conforto e combinação com cama articulada quando fizer sentido para a rotina.
              </p>
              <div className="mt-8 overflow-hidden border border-[#172B4D]/12 bg-[#FCFAF6]">
                <div className="relative aspect-[4/3] bg-[#f5f0e8]">
                  <Image
                    src={tempurHybridFirm}
                    alt="Colchão Tempur Hybrid Firm de 25 cm"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    placeholder="blur"
                    className="object-cover"
                  />
                </div>
                <div className="p-7">
                  <p className="text-[9px] font-semibold uppercase tracking-[.2em] text-[#806000]">Produto validado</p>
                  <h3 className="mt-3 font-display text-[32px] leading-[1.04] tracking-[-.025em]">Tempur Hybrid Firm · 25 cm</h3>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {productGallery.map((product, index) => (
                <figure
                  key={product.title}
                  className={index === 0 ? "overflow-hidden border border-[#172B4D]/12 bg-[#FCFAF6] sm:col-span-2" : "overflow-hidden border border-[#172B4D]/12 bg-[#FCFAF6]"}
                  data-reveal
                >
                  <div className={index === 0 ? "relative aspect-[16/8] bg-[#ECE3D4]" : "relative aspect-[4/3] bg-[#ECE3D4]"}>
                    <Image
                      src={product.image}
                      alt={`${product.eyebrow}: ${product.title}`}
                      fill
                      sizes={index === 0 ? "(min-width: 1024px) 54vw, 100vw" : "(min-width: 640px) 50vw, 100vw"}
                      className="object-cover"
                      placeholder="blur"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-[#0B1F3A]/86 px-3 py-2 text-[9px] tracking-[.16em] text-[#c4a962]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <figcaption className="p-6">
                    <small className="text-[9px] font-semibold uppercase tracking-[.2em] text-[#806000]">{product.eyebrow}</small>
                    <h3 className="mt-3 font-display text-[28px] leading-[1.05] tracking-[-.025em]">{product.title}</h3>
                    <p className="mt-3 text-sm font-light leading-[1.7] text-[#172B4D]/60">{product.text}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </SectionContainer>
      </section>

      <section id="consultoria" className="bg-[#111111] py-24 lg:py-32">
        <SectionContainer>
          <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
            <div>
              <SectionLabel>Atendimento consultivo</SectionLabel>
              <h2 className="mt-6 font-display text-[44px] leading-[1.02] tracking-[-.035em] sm:text-[58px]" data-reveal>
                Uma conversa qualificada antes de qualquer recomendação.
              </h2>
              <p className="mt-6 text-[15px] font-light leading-[1.85] text-[#f5f0e8]/52" data-reveal>
                O objetivo é gerar leads certos para um atendimento de alto ticket: famílias que valorizam orientação, disponibilidade da equipe e uma solução coerente com o ambiente de casa.
              </p>
            </div>
            <div className="divide-y divide-[#c4a962]/16 border-y border-[#c4a962]/16">
              {journey.map((item, index) => (
                <article key={item.step} className="grid gap-5 py-8 sm:grid-cols-[96px_1fr]" data-reveal>
                  <span className="font-display text-[42px] leading-none text-[#c4a962]/30">0{index + 1}</span>
                  <div>
                    <h3 className="font-display text-[34px] leading-[1.04] tracking-[-.025em] text-[#c4a962]">{item.step}</h3>
                    <p className="mt-4 text-sm font-light leading-[1.8] text-[#f5f0e8]/56">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </SectionContainer>
      </section>

      <section id="prova-social" className="bg-[#0B1F3A] py-24 text-white lg:py-32">
        <SectionContainer>
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <div data-reveal>
              <SectionLabel>Prova social</SectionLabel>
              <h2 className="mt-6 font-display text-[44px] leading-[1.02] tracking-[-.035em] sm:text-[58px]">
                Confiança construída por presença local e atendimento preparado.
              </h2>
              <p className="mt-6 text-[15px] font-light leading-[1.85] text-white/55">
                Para esta página, a Sleep House prioriza prova de estrutura e consultoria em vez de depoimentos não aprovados. O atendimento acontece com lojas reais, equipe local e acompanhamento humano.
              </p>
            </div>
            <div className="grid gap-px bg-white/12 sm:grid-cols-3 lg:grid-cols-1">
              {trustSignals.map((signal) => (
                <article key={signal} className="bg-[#0B1F3A] p-7" data-reveal>
                  <span className="text-[#c4a962]" aria-hidden="true">★★★★★</span>
                  <h3 className="mt-5 font-display text-[28px] leading-[1.05] tracking-[-.025em]">{signal}</h3>
                </article>
              ))}
            </div>
          </div>
        </SectionContainer>
      </section>

      <section id="formulario" className="bg-[#0a0a0a] py-24 lg:py-32">
        <SectionContainer>
          <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
            <div data-reveal>
              <SectionLabel>Formulário Home Care</SectionLabel>
              <h2 className="mt-6 font-display text-[46px] leading-[.98] tracking-[-.04em] sm:text-[62px]">
                Conte o contexto. A equipe Sleep House responde com uma orientação.
              </h2>
              <p className="mt-7 max-w-[520px] text-[15px] font-light leading-[1.85] text-[#f5f0e8]/52">
                Informe para quem é, a necessidade principal e a faixa de investimento. O contato será feito pela equipe comercial da Sleep House Americana e Piracicaba.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <SecondaryCta href={TEMPUR_HOME_CARE_WHATSAPP_URL} cta="form-section-whatsapp-tempur-home-care">
                  Falar direto no WhatsApp
                </SecondaryCta>
              </div>
            </div>

            <div className="border border-[#c4a962]/15 bg-white/[.035] p-6 shadow-[0_30px_90px_rgba(0,0,0,.28)] sm:p-10" data-reveal>
              <ConciergeForm
                origin="LP Tempur Home Care"
                variant="homeCare"
                successPath="/tempur-home-care/obrigado"
                submitLabel="Solicitar consultoria Tempur Home Care"
                helperText="Dados usados apenas para atendimento consultivo, conforme a Política de Privacidade."
              />
            </div>
          </div>
        </SectionContainer>
      </section>

      <section id="lojas" className="bg-[#E9E1D3] py-24 text-[#172B4D] lg:py-32">
        <SectionContainer>
          <div className="mb-12 max-w-[760px]" data-reveal>
            <SectionLabel tone="dark">Lojas e região</SectionLabel>
            <h2 className="mt-6 font-display text-[44px] leading-[1.02] tracking-[-.035em] sm:text-[58px]">
              Atendimento Sleep House em Americana e Piracicaba.
            </h2>
            <p className="mt-6 max-w-[620px] text-[15px] font-light leading-[1.85] text-[#172B4D]/64">
              A equipe pode seguir pelo WhatsApp e, quando necessário, organizar uma experiência presencial na unidade mais conveniente.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {stores.map((store) => (
              <article key={store.city} className="group overflow-hidden bg-[#FCFAF6]" data-reveal>
                <div className="relative aspect-[16/9] bg-[#172B4D]/10">
                  <Image
                    src={store.image}
                    alt={store.alt}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    placeholder="blur"
                    className="object-cover transition duration-700 group-hover:scale-[1.035]"
                  />
                </div>
                <div className="p-7 sm:p-8">
                  <span className="text-[9px] font-semibold uppercase tracking-[.2em] text-[#806000]">Sleep House</span>
                  <h3 className="mt-4 font-display text-[38px] leading-none tracking-[-.025em]">{store.city}</h3>
                  <p className="mt-5 text-sm font-light leading-[1.75] text-[#172B4D]/62">{store.address}<br />SP</p>
                  <a
                    href={store.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cta={`loja-${store.city.toLowerCase()}-tempur-home-care`}
                    className="mt-7 inline-flex min-h-12 w-full items-center justify-between border-t border-[#172B4D]/15 pt-5 text-[10px] font-semibold uppercase tracking-[.14em]"
                  >
                    Como chegar <Arrow />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </SectionContainer>
      </section>

      <footer className="border-t border-[#c4a962]/12 bg-[#0a0a0a] py-10">
        <SectionContainer>
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-4">
              <Image src={logo} alt="Sleep House Colchões" width={170} height={38} className="h-8 w-auto opacity-70" />
              <span className="h-7 w-px bg-[#c4a962]/20" aria-hidden="true" />
              <Image src={tempurLogo} alt="TEMPUR®" className="h-4 w-auto opacity-80" />
            </div>
            <nav aria-label="Links do rodapé" className="flex flex-wrap gap-5 text-[10px] uppercase tracking-[.12em] text-[#f5f0e8]/38">
              <a href="#tecnologia">TEMPUR®</a>
              <a href="#formulario">Consultoria</a>
              <a href="#lojas">Lojas</a>
              <Link href="/politica-de-privacidade">LGPD e privacidade</Link>
            </nav>
          </div>
          <div className="mt-7 flex flex-col gap-2 border-t border-[#c4a962]/10 pt-6 text-[11px] font-light leading-[1.7] text-[#f5f0e8]/28 sm:flex-row sm:items-center sm:justify-between">
            <p>Sleep House Colchões · Americana e Piracicaba · 2026</p>
            <p>TEMPUR® é marca de seus respectivos proprietários.</p>
          </div>
        </SectionContainer>
      </footer>

      <a
        href={TEMPUR_HOME_CARE_WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a Sleep House sobre Tempur Home Care pelo WhatsApp"
        data-cta="whatsapp-flutuante-tempur-home-care"
        className="fixed bottom-5 right-5 z-40 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#c4a962] px-5 text-[10px] font-semibold uppercase tracking-[.12em] text-[#0B1F3A] shadow-[0_14px_40px_rgba(0,0,0,.30)] transition hover:bg-[#d4b872]"
      >
        WhatsApp <Arrow />
      </a>
    </main>
  );
}
