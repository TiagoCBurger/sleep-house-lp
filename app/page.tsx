import Image from "next/image";
import { ConciergeForm } from "./components/ConciergeForm";
import { SiteHeader } from "./components/SiteHeader";
import { LuxuryMotion } from "./components/LuxuryMotion";

const heroParagraphs = [
  "O Dédicace Paris é construído à mão, com tecidos de alfaiataria e tufting artesanal. Em Paris, esse nível de atenção tem um nome. No Brasil, tem um endereço.",
  "Quando algo não pode ser feito em escala sem perder o que o torna especial, em Paris não se faz em escala. O Dédicace Paris pertence a essa categoria.",
];

const processParagraphs = [
  "O tufting, técnica de capitonê artesanal que define a identidade visual e estrutural do Dédicace Paris, não pode ser replicado em esteira industrial sem perder a precisão e a tensão que cada ponto exige. Cada botão é posicionado e fixado manualmente por artesãos especializados.",
  "Os tecidos que revestem o Dédicace Paris vêm dos mesmos fornecedores de alfaiataria que trabalham sob medida para quem exige que o material envelheça com dignidade e não se desgaste. São linho, seda e algodão de alta gramatura com toque e caimento que não existem em colchões produzidos em massa.",
  "A montagem não acontece em linha de produção. Acontece em bancada, camada por camada, com controle manual em cada etapa.",
];

const conciergeDetails = [
  "Atendimento personalizado por consultores especializados",
  "Catálogo técnico disponível para arquitetos e designers",
  "Sem compromisso de compra",
  "Showroom em Americana e Piracicaba",
];

function SectionContainer({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-[1280px] px-6 sm:px-10 lg:px-16 ${className}`}
    >
      {children}
    </div>
  );
}

function SectionEyebrow({
  children,
  variant = "light",
}: {
  children: React.ReactNode;
  variant?: "light" | "dark" | "gold";
}) {
  const colors = {
    light: "text-[#0a0a0a]/50",
    dark: "text-[#f5f0e8]/50",
    gold: "text-[#c4a962]",
  };

  return (
    <div className="flex flex-col gap-5" data-reveal>
      <div className="h-px w-14 bg-[#c4a962]/50" />
      <p
        className={`text-[10px] font-medium uppercase tracking-[0.22em] ${colors[variant]}`}
      >
        {children}
      </p>
    </div>
  );
}

function GoldRule() {
  return <div className="h-px w-14 bg-[#c4a962]/50" />;
}

function OutlineButton({
  children,
  href,
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
}) {
  const base =
    "inline-flex h-[50px] items-center justify-center border border-[#c4a962] px-8 text-[11px] font-medium uppercase tracking-[0.16em] text-[#c4a962] transition-colors duration-200 hover:bg-[#c4a962] hover:text-[#0a0a0a]";

  if (href) {
    return (
      <a className={`${base} ${className}`} href={href} data-lux-button>
        {children}
      </a>
    );
  }

  return (
    <button className={`${base} ${className}`} data-lux-button>
      {children}
    </button>
  );
}

function SolidButton({
  children,
  href,
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
}) {
  const base =
    "inline-flex h-[50px] items-center justify-center bg-[#c4a962] px-8 text-[11px] font-medium uppercase tracking-[0.16em] text-[#0a0a0a] transition-colors duration-200 hover:bg-[#d4b872]";

  if (href) {
    return (
      <a className={`${base} ${className}`} href={href} data-lux-button>
        {children}
      </a>
    );
  }

  return (
    <button className={`${base} ${className}`} data-lux-button>
      {children}
    </button>
  );
}

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] text-[#f5f0e8]">
      <LuxuryMotion />
      <SiteHeader />
      <div className="mx-auto max-w-[1920px] overflow-x-hidden">
        {/* Hero */}
        <section
          id="hero"
          className="relative grid min-h-[100svh] grid-cols-1 xl:grid-cols-2"
        >
          <div className="flex min-h-[100svh] flex-col justify-center bg-[#0a0a0a] px-6 pb-16 pt-28 sm:px-10 lg:px-16 xl:px-12 2xl:px-[48px]">
            <div className="w-full max-w-[848px]">
              <div className="mb-10 flex items-center gap-4" data-hero-reveal>
                <GoldRule />
                <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#c4a962]">
                  Dédicace Paris · Belleville
                </span>
              </div>

              <h1
                className="max-w-[848px] font-display text-[52px] leading-[0.98] tracking-[-0.03em] text-[#f5f0e8] sm:text-[64px] xl:text-[76px]"
                data-hero-reveal
              >
                <span className="block max-w-[420px]">Alta costura</span>
                <span className="block max-w-[420px]">francesa.</span>
                <em className="mt-[2px] block not-italic text-[#c4a962]">
                  Para onde você dorme.
                </em>
              </h1>

              <div
                className="mt-10 flex max-w-[480px] flex-col gap-6 text-[15px] font-light leading-[1.8] text-[#f5f0e8]/45"
                data-hero-reveal
              >
                {heroParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-12 flex flex-wrap gap-4" data-hero-reveal>
                <SolidButton href="#concierge" className="min-w-[240px]">
                  Falar com o Concierge
                </SolidButton>
                <OutlineButton href="#arquitetos" className="min-w-[260px]">
                  Especificar no meu Projeto
                </OutlineButton>
              </div>

              <p
                className="mt-4 text-[11px] font-light tracking-[0.06em] text-[#f5f0e8]/30"
                data-hero-reveal
              >
                Atendimento exclusivo por agendamento · Showroom em Americana e
                Piracicaba
              </p>
            </div>
          </div>

          <div
            className="relative min-h-[50svh] overflow-hidden border-l border-[#c4a962]/15 bg-[#141414] xl:min-h-[100svh]"
            data-hero-media
          >
            <div
              className="absolute inset-0 opacity-100"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, rgba(196,169,98,0.04) 0, rgba(196,169,98,0.04) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, rgba(196,169,98,0.04) 0, rgba(196,169,98,0.04) 1px, transparent 1px, transparent 40px)",
              }}
            />
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster="/Belleville-hero.jpg"
              aria-hidden="true"
            >
              <source src="/Belleville-hero.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-[#141414]/10" />
          </div>
        </section>

        {/* Artesanato */}
        <section id="artesanato" className="bg-[#f5f0e8] py-24 text-[#0a0a0a] lg:py-32">
          <SectionContainer>
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
              <div className="flex flex-col gap-8 lg:max-w-[540px]">
                <SectionEyebrow variant="light">
                  Haute Couture · Artesanato
                </SectionEyebrow>

                <h2
                  className="font-display text-[40px] leading-[1.05] tracking-[-0.03em] text-[#0a0a0a] sm:text-[44px] lg:text-[48px]"
                  data-reveal
                >
                  Enquanto o mercado acelera a produção, o Dédicace Paris ainda
                  leva horas para ser feito.
                </h2>

                <div
                  className="flex flex-col gap-6 text-base font-light leading-[1.85] text-[#4a4540]"
                  data-reveal
                >
                  {processParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div
                className="relative mx-auto w-full max-w-[540px] lg:mx-0"
                data-reveal
                data-lux-media
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#eae3d5]">
                  <Image
                    src="/Foco na textura.png"
                    alt="Detalhe da textura e do tufting artesanal do colchão Dédicace Paris"
                    fill
                    sizes="(min-width: 1024px) 540px, calc(100vw - 48px)"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>

                <div
                  className="absolute -bottom-5 -right-2 w-[min(100%,240px)] bg-[#0a0a0a] px-6 py-6 text-[#f5f0e8] sm:-right-5 sm:px-8 sm:py-7"
                  data-lux-tag
                >
                  <h3 className="font-display text-2xl italic leading-none text-[#c4a962] sm:text-[28px]">
                    Tufting
                  </h3>
                  <p className="mt-2.5 text-[11px] font-light leading-[1.6] tracking-[0.06em] text-[#f5f0e8]/40">
                    Técnica artesanal francesa que não admite substituição
                    industrial.
                  </p>
                </div>
              </div>
            </div>
          </SectionContainer>
        </section>

        {/* Distribuidora */}
        <section
          id="distribuidora"
          className="border-t border-[#c4a962]/20 bg-[#141414] py-24 lg:py-32"
        >
          <SectionContainer>
            <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 xl:gap-24">
              <div className="flex flex-col gap-8 lg:max-w-[580px]">
                <SectionEyebrow variant="gold">
                  Distribuidora Exclusiva · Brasil
                </SectionEyebrow>

                <h2
                  className="font-display text-[40px] leading-[1.05] tracking-[-0.03em] sm:text-[44px] lg:text-[48px]"
                  data-reveal
                >
                  No Brasil, existe um único endereço para o Dédicace Paris.
                </h2>

                <div
                  className="flex flex-col gap-6 text-[15px] font-light leading-[1.85] text-[#f5f0e8]/45"
                  data-reveal
                >
                  <p>
                    A Sleep House é a distribuidora exclusiva do Dédicace Paris
                    no Brasil. Não existe outra forma de adquirir o produto com
                    procedência verificada, portfólio completo e atendimento de
                    quem conhece cada detalhe do que está vendendo.
                  </p>
                  <p>
                    O Dédicace Paris não compete por preço. Compete por
                    categoria. Quem o especifica uma vez não considera outra
                    opção para o mesmo projeto.
                  </p>
                </div>

                <div
                  className="flex flex-wrap items-center gap-4 border-t border-[#c4a962]/15 pt-8"
                  data-reveal
                >
                  <div className="flex h-10 items-center border border-[#c4a962]/15 px-5" data-lux-tag>
                    <span className="text-[9px] font-light uppercase tracking-[0.12em] text-[#f5f0e8]/40">
                      Sleep House
                    </span>
                  </div>
                  <div className="hidden h-8 w-px bg-[#c4a962]/15 sm:block" />
                  <div className="flex h-10 items-center border border-[#c4a962]/15 px-5" data-lux-tag>
                    <span className="text-[9px] font-light uppercase tracking-[0.12em] text-[#f5f0e8]/40">
                      Dédicace Paris
                    </span>
                  </div>
                </div>
              </div>

              <div
                className="w-full border border-[#c4a962]/12 px-8 py-10 lg:px-10 lg:py-12"
                data-reveal
              >
                <div className="text-[80px] leading-none text-[#c4a962]/20 sm:text-[96px]">
                  &ldquo;
                </div>
                <p className="mt-2 text-[15px] font-light italic leading-[1.85] text-[#f5f0e8]/55">
                  &quot;Texto do depoimento a inserir após validação com o
                  cliente. Preferencialmente um arquiteto ou cliente de alto
                  padrão que já especificou o produto.&quot;
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="size-10 shrink-0 rounded-full border border-[#f5f0e8]/20" />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[12px] font-light text-[#f5f0e8]/80">
                      Nome do cliente ou arquiteto
                    </span>
                    <span className="text-[11px] font-light text-[#f5f0e8]/35">
                      Profissão · Cidade
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </SectionContainer>
        </section>

        {/* Arquitetos */}
        <section
          id="arquitetos"
          className="relative bg-[#f5f0e8] py-24 text-[#0a0a0a] lg:py-32"
        >
          <SectionContainer>
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
              <div
                className="relative order-2 mx-auto w-full max-w-[540px] lg:order-1 lg:mx-0"
                data-reveal
                data-lux-media
              >
                <div
                  className="absolute -left-1 -top-4 z-10 bg-[#0a0a0a] px-5 py-3 text-[9px] font-light uppercase tracking-[0.18em] text-[#c4a962] sm:-left-4 sm:-top-5 sm:px-6 sm:py-4"
                  data-lux-tag
                >
                  Para arquitetos e designers
                </div>
                <div className="relative aspect-[16/10] overflow-hidden bg-[#eae3d5] lg:aspect-square">
                  <Image
                    src="/colchão-em-quarto.png"
                    alt="Colchão Dédicace Paris em uma suíte master de alto padrão"
                    fill
                    sizes="(min-width: 1024px) 540px, calc(100vw - 48px)"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="order-1 flex flex-col gap-8 lg:order-2 lg:max-w-[540px]">
                <SectionEyebrow variant="light">
                  Para arquitetos e designers de interiores
                </SectionEyebrow>

                <h2
                  className="font-display text-[40px] leading-[1.05] tracking-[-0.03em] sm:text-[42px] lg:text-[44px]"
                  data-reveal
                >
                  A assinatura definitiva para a sua Suite Master.
                </h2>

                <div
                  className="flex flex-col gap-6 text-[15px] font-light leading-[1.85] text-[#4a4540]"
                  data-reveal
                >
                  <p>
                    Um projeto de interiores de alto padrão cuida de cada detalhe
                    do espaço: revestimentos, iluminação, mobiliário e
                    acabamentos. O dormitório principal merece o mesmo critério.
                    O colchão é o único elemento que o cliente vai usar todos os
                    dias pelos próximos dez anos. Ele vai perceber a diferença.
                  </p>
                  <p>
                    O Dédicace Paris é o único produto disponível no Brasil que
                    une estética de alfaiataria, construção artesanal e
                    procedência europeia verificável. É a especificação que seus
                    clientes reconhecem e que sustenta o padrão de qualquer
                    projeto de alto luxo.
                  </p>
                </div>

                <div className="flex flex-col gap-4 pt-2" data-reveal>
                  <OutlineButton href="#concierge" className="w-fit border-[#c4a962]">
                    Especificar no meu Projeto
                  </OutlineButton>
                  <p className="text-[15px] font-light leading-[1.85] tracking-[0.04em] text-[#4a4540]">
                    Solicite o catálogo técnico e condições para projetos de
                    interiores.
                  </p>
                </div>
              </div>
            </div>
          </SectionContainer>
        </section>

        {/* Concierge */}
        <section
          id="concierge"
          className="border-t border-[#c4a962]/12 bg-[#0a0a0a] py-24 lg:py-32"
        >
          <SectionContainer>
            <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
              <div className="flex flex-col gap-8 lg:max-w-[540px]">
                <SectionEyebrow variant="gold">Serviço Exclusivo</SectionEyebrow>

                <h2
                  className="font-display text-[44px] leading-[0.96] tracking-[-0.03em] sm:text-[52px]"
                  data-reveal
                >
                  <span className="block">Serviço</span>
                  <em className="block not-italic text-[#c4a962]">Concierge</em>
                </h2>

                <div
                  className="flex flex-col gap-6 text-[15px] font-light leading-[1.85] text-[#f5f0e8]/45"
                  data-reveal
                >
                  <p>
                    O Dédicace Paris começa com uma conversa: para entender o
                    projeto, o espaço e o que você ou seu cliente precisam que
                    esse dormitório entregue.
                  </p>
                  <p>
                    Preencha o formulário. Nosso time entrará em contato para
                    agendar seu atendimento exclusivo.
                  </p>
                </div>

                <ul
                  className="space-y-3.5 border-t border-[#c4a962]/12 pt-8 text-[11px] font-light leading-[1.6] tracking-[0.04em] text-[#f5f0e8]/50"
                  data-reveal
                >
                  {conciergeDetails.map((item) => (
                    <li key={item} className="flex items-center gap-3.5">
                      <span className="size-[3px] shrink-0 bg-[#c4a962]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="w-full border border-[#c4a962]/12 px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12"
                data-reveal
              >
                <ConciergeForm />
              </div>
            </div>
          </SectionContainer>
        </section>

        <footer className="border-t border-[#c4a962]/12 bg-[#0a0a0a] py-10">
          <SectionContainer>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex h-7 items-center border border-[#c4a962]/15 px-4">
                  <span className="text-[8px] font-light uppercase tracking-[0.12em] text-[#f5f0e8]/25">
                    Sleep House
                  </span>
                </div>
                <div className="flex h-7 items-center border border-[#c4a962]/15 px-4">
                  <span className="text-[8px] font-light uppercase tracking-[0.12em] text-[#f5f0e8]/25">
                    Dédicace Paris
                  </span>
                </div>
              </div>

              <p className="text-[11px] font-light tracking-[0.04em] text-[#f5f0e8]/20">
                Sleep House Colchões, Distribuidora Exclusiva Dédicace Paris no
                Brasil · 2026
              </p>
            </div>
          </SectionContainer>
        </footer>
      </div>
    </main>
  );
}
