import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import tempurProduct from "@/public/products/official/tempur-hybrid-firm.png";
import pikolinProduct from "@/public/products/official/pikolin-perfect-sleep.jpg";
import kansasProduct from "@/public/products/official/american-sleep-kansas.png";
import studioProduct from "@/public/products/official/stearns-foster-studio-medium.png";
import tempurLogo from "@/public/brands/tempur.webp";
import pikolinLogo from "@/public/brands/pikolin.webp";
import americanSleepLogo from "@/public/brands/american-sleep.webp";
import stearnsFosterLogo from "@/public/brands/stearns-foster.webp";
import storefrontImage from "@/public/stores/sleep-house-fachada.jpg";
import showroomImage from "@/public/stores/sleep-house-showroom.jpeg";
import { ConciergeForm } from "./components/ConciergeForm";
import { HomeHeader } from "./components/HomeHeader";
import { HeroBackgroundVideo } from "./components/HeroBackgroundVideo";
import { LuxuryMotion } from "./components/LuxuryMotion";
import { VisitIntentPopup } from "./components/VisitIntentPopup";
import { GENERAL_WHATSAPP_URL } from "./lib/constants";

export const metadata: Metadata = {
  title: "Sleep House | As melhores marcas para o seu sono",
  description:
    "Compare colchões premium e encontre a combinação ideal de conforto, suporte e tecnologia com a consultoria Sleep House.",
};

const sleepGuide = [
  {
    number: "01",
    title: "Conte como você dorme",
    description: "Posição, rotina, dores e preferências ajudam a guiar a primeira seleção.",
    detail: "Seu perfil",
  },
  {
    number: "02",
    title: "Compare sensações",
    description: "Macio, intermediário ou firme: experimente os níveis de conforto lado a lado.",
    detail: "Conforto",
  },
  {
    number: "03",
    title: "Observe o suporte",
    description: "Entenda como a estrutura acompanha o corpo e ajuda no alinhamento da coluna.",
    detail: "Ergonomia",
  },
  {
    number: "04",
    title: "Escolha com segurança",
    description: "Defina o modelo, tamanho e acabamento certos com o apoio de um especialista.",
    detail: "Decisão final",
  },
];

const replacementSigns = [
  { number: "01", title: "Já se passaram muitos anos", text: "Em geral, depois de cerca de 10 anos, vale revisar se o colchão ainda entrega o suporte que você precisa." },
  { number: "02", title: "Você acorda desconfortável", text: "Incômodos na lombar, no pescoço ou nos ombros podem ser um sinal para reavaliar sua superfície de sono." },
  { number: "03", title: "Há marcas ou afundamentos visíveis", text: "Deformações podem comprometer a estabilidade e a sensação de conforto ao deitar." },
  { number: "04", title: "Você dorme melhor fora de casa", text: "Se o descanso melhora em outra cama, talvez seja hora de experimentar novas tecnologias e firmezas." },
];

const products = [
  {
    slug: "tempur",
    brand: "Tempur",
    product: "Hybrid Firm · 25 cm",
    comfort: "Tecnologia TEMPUR com suporte firme e alívio de pressão personalizado.",
    image: tempurProduct,
    alt: "Colchão Tempur Hybrid Firm oficial da Sleep House",
  },
  {
    slug: "perfect-sleep",
    brand: "Pikolin",
    product: "Perfect Sleep · 40 cm",
    comfort: "Molas Normablock Pro 300 e conforto de alta performance.",
    image: pikolinProduct,
    alt: "Colchão Pikolin Perfect Sleep oficial da Sleep House",
  },
  {
    slug: "kansas",
    brand: "American Sleep",
    product: "Kansas",
    comfort: "Conforto acolhedor e suporte consistente para noites mais tranquilas.",
    image: kansasProduct,
    alt: "Colchão American Sleep Kansas oficial da Sleep House",
  },
  {
    slug: "studio-medium",
    brand: "Stearns & Foster",
    product: "Studio Medium",
    comfort: "Construção premium com sensação intermediária e acabamento refinado.",
    image: studioProduct,
    alt: "Colchão Stearns & Foster Studio Medium oficial da Sleep House",
  },
];

const brandLogos = [
  { name: "Tempur", image: tempurLogo },
  { name: "Pikolin", image: pikolinLogo },
  { name: "American Sleep", image: americanSleepLogo },
  { name: "Stearns & Foster", image: stearnsFosterLogo },
];

const testimonials = [
  {
    name: "Bruno A.",
    city: "Americana, SP",
    rating: 5,
    text: "Atendimento excelente e equipe muito preparada para orientar a compra. A entrega foi rápida e saí muito satisfeito com a escolha.",
  },
  {
    name: "Mariana C.",
    city: "Cliente Sleep House",
    rating: 5,
    text: "A consultoria fez toda a diferença. Pudemos testar com calma e encontramos o conforto ideal para nós dois.",
  },
  {
    name: "Rafael M.",
    city: "Cliente Sleep House",
    rating: 5,
    text: "Loja agradável, atendimento atencioso e muitas opções para comparar. Recomendo a experiência.",
  },
  {
    name: "Camila R.",
    city: "Cliente Sleep House",
    rating: 5,
    text: "Fui muito bem atendida do começo ao fim. A equipe entendeu o que eu procurava e explicou cada tecnologia.",
  },
];

const stores = [
  {
    city: "Americana",
    address: "Av. Campos Sales, 1180 · Jardim Girassol",
    maps: "https://www.google.com/maps/search/?api=1&query=Sleep+House+Colchões+Americana+Av+Campos+Sales+1180",
    image: storefrontImage,
    alt: "Fachada de uma loja Sleep House Colchões",
  },
  {
    city: "Piracicaba",
    address: "Av. Carlos Botelho, 120 · São Dimas",
    maps: "https://www.google.com/maps/search/?api=1&query=Sleep+House+Colchões+Piracicaba+Av+Carlos+Botelho+120",
    image: showroomImage,
    alt: "Showroom de uma loja Sleep House Colchões",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#F4EFE5] text-[#172B4D]">
      <LuxuryMotion />
      <HomeHeader />
      <VisitIntentPopup />

      <section id="hero" className="relative min-h-[850px] bg-[#0B1F3A] text-white lg:min-h-[760px]">
        <HeroBackgroundVideo />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,31,58,.97)_0%,rgba(11,31,58,.78)_38%,rgba(11,31,58,.16)_72%)]" />
        <div className="relative mx-auto flex min-h-[850px] max-w-[1440px] items-end px-5 pb-32 pt-32 sm:px-8 sm:pb-28 lg:min-h-[760px] lg:items-center lg:px-12 lg:pb-0">
          <div className="max-w-[700px]">
            <p className="mb-7 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.24em] text-[#CF9C00]" data-hero-reveal>
              <span className="h-px w-10 bg-[#CF9C00]" /> Curadoria internacional do sono
            </p>
            <h1 className="font-display text-[50px] leading-[.94] tracking-[-.045em] sm:text-[68px] lg:text-[82px]" data-hero-reveal>
              Encontre o colchão ideal para o seu sono.
            </h1>
            <p className="mt-7 max-w-[570px] text-[17px] font-light leading-[1.7] text-white/68" data-hero-reveal>
              Conheça diferentes tecnologias e níveis de conforto com a orientação dos especialistas da Sleep House.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row" data-hero-reveal>
              <a href="#atendimento" className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#CF9C00] px-7 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0B1F3A] transition hover:bg-[#E8B900]" data-lux-button data-cta="hero-agendar-visita">
                Agendar minha experiência
              </a>
              <a href="#produtos" className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/30 px-7 text-[11px] font-medium uppercase tracking-[0.16em] text-white transition hover:border-white" data-lux-button>
                Conhecer produtos
              </a>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 border-t border-white/12 bg-[#0B1F3A]/65 backdrop-blur-lg">
          <div className="mx-auto grid max-w-[1440px] grid-cols-2 px-5 sm:px-8 lg:grid-cols-4 lg:px-12">
            {["Curadoria multimarca", "Tecnologia internacional", "Atendimento consultivo", "Lojas em Americana e Piracicaba"].map((item) => (
              <p key={item} className="border-r border-white/10 px-3 py-4 text-center text-[9px] uppercase tracking-[.14em] text-white/55 last:border-r-0 lg:py-5">{item}</p>
            ))}
          </div>
        </div>
      </section>

      <section id="depoimentos" className="relative z-10 -mt-10 overflow-hidden bg-[#F4EFE5] px-5 pb-24 pt-16 sm:-mt-12 sm:px-8 sm:pt-20 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-[1344px]">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between" data-reveal>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#806000]">Avaliações de clientes</p>
              <h2 className="mt-4 max-w-[640px] font-display text-[40px] leading-[1.02] tracking-[-.035em] sm:text-[52px]">A escolha certa se sente em cada noite.</h2>
            </div>
            <p className="max-w-[270px] text-[11px] font-light leading-[1.65] text-[#172B4D]/55">Relatos inspirados em avaliações públicas de clientes.</p>
          </div>
        </div>
        <div className="testimonial-fade relative -mx-5 sm:-mx-8 lg:-mx-12" data-reveal>
          <div className="testimonial-track flex w-max gap-5 py-3 hover:[animation-play-state:paused]">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <article key={`${testimonial.name}-${index}`} className="w-[310px] shrink-0 border border-[#172B4D]/10 bg-[#FCFAF6] p-6 shadow-[0_18px_45px_rgba(23,43,77,.08)] sm:w-[365px] sm:p-7">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] tracking-[.16em] text-[#CF9C00]" aria-label={`${testimonial.rating} de 5 estrelas`}>{"★".repeat(testimonial.rating)}</span>
                  <span className="text-[9px] font-semibold uppercase tracking-[.16em] text-[#172B4D]/35">Google</span>
                </div>
                <p className="mt-6 font-display text-[23px] leading-[1.2] tracking-[-.015em] text-[#172B4D]">“{testimonial.text}”</p>
                <div className="mt-7 border-t border-[#172B4D]/10 pt-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[.14em]">{testimonial.name}</p>
                  <p className="mt-1 text-[10px] tracking-[.08em] text-[#172B4D]/50">{testimonial.city}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0B1F3A] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1344px]">
          <div className="mb-12 max-w-[720px]" data-reveal>
            <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#CF9C00]">O que muda uma noite</p>
            <h2 className="mt-5 font-display text-[42px] leading-[1.02] tracking-[-.035em] sm:text-[54px]">Não existe uma única resposta para dormir melhor.</h2>
          </div>
          <div className="grid gap-px bg-white/12 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Conforto", "Sensações macias, intermediárias ou firmes para respeitar sua preferência."],
              ["Suporte", "Estabilidade adequada ao corpo para uma postura mais confortável durante a noite."],
              ["Temperatura", "Materiais que favorecem ventilação e ajudam a manter o conforto térmico."],
              ["Movimento", "Tecnologias que reduzem a transferência de movimentos entre o casal."],
            ].map(([title, text]) => (
              <article key={title} className="bg-[#0B1F3A] p-7 sm:p-8" data-reveal>
                <h3 className="font-display text-2xl text-[#CF9C00]">{title}</h3>
                <p className="mt-4 text-sm font-light leading-[1.75] text-white/55">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="consultoria" className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1344px]">
          <div className="grid overflow-hidden bg-[#E9E1D3] lg:grid-cols-[.82fr_1.18fr]">
            <div className="relative min-h-[360px] overflow-hidden sm:min-h-[460px]" data-reveal>
              <Image src={kansasProduct} alt="Colchão American Sleep Kansas oficial da Sleep House" fill sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(11,31,58,.68),transparent_55%)]" />
              <div className="absolute bottom-7 left-7 right-7 text-white sm:bottom-9 sm:left-9">
                <p className="text-[9px] font-semibold uppercase tracking-[.2em] text-[#CF9C00]">Antes de decidir</p>
                <p className="mt-3 max-w-[310px] font-display text-[26px] leading-[1.05]">Seu descanso merece uma nova comparação.</p>
              </div>
            </div>
            <div className="p-7 sm:p-10 lg:p-14">
              <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#806000]">Comece pela sensação</p>
              <h2 className="mt-5 max-w-[620px] font-display text-[42px] leading-[1.02] tracking-[-.035em] sm:text-[54px]">4 sinais de que está na hora de trocar o colchão.</h2>
              <p className="mt-5 max-w-[620px] text-[15px] font-light leading-[1.8] text-[#172B4D]/65">Reconheceu algum deles? Uma visita ajuda você a comparar o conforto e o suporte que fazem sentido para sua rotina.</p>
              <div className="mt-8 divide-y divide-[#172B4D]/15 border-y border-[#172B4D]/15">
              {replacementSigns.map((sign) => (
                <div key={sign.number} className="grid grid-cols-[36px_1fr] gap-4 py-5 sm:grid-cols-[48px_1fr] sm:py-6" data-reveal>
                  <span className="pt-1 text-[10px] tracking-[.18em] text-[#806000]">{sign.number}</span>
                  <span>
                    <strong className="block font-display text-[23px] font-normal leading-[1.06] tracking-[-.02em] sm:text-[27px]">{sign.title}</strong>
                    <span className="mt-2 block text-sm font-light leading-[1.7] text-[#172B4D]/55">{sign.text}</span>
                  </span>
                </div>
              ))}
              </div>
              <a href="#atendimento" data-cta="sinais-agendar-visita" className="mt-8 inline-flex min-h-13 items-center gap-3 rounded-full bg-[#172B4D] px-6 text-[10px] font-semibold uppercase tracking-[.14em] text-white transition hover:bg-[#0B1F3A]" data-lux-button>
                Quero ajuda para escolher <Arrow />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="colecoes" className="bg-[#E9E1D3] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1344px]">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end" data-reveal>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#806000]">Guia de escolha Sleep House</p>
              <h2 className="mt-4 font-display text-[44px] leading-none tracking-[-.035em] sm:text-[56px]">Do seu corpo à escolha certa.</h2>
            </div>
            <p className="max-w-[300px] text-sm font-light leading-[1.7] text-[#172B4D]/60">Um jeito simples de transformar preferências pessoais em uma recomendação precisa.</p>
          </div>

          <div className="grid overflow-hidden border border-[#172B4D]/15 bg-[#FCFAF6] sm:grid-cols-2 xl:grid-cols-4">
            {sleepGuide.map((step, index) => (
              <article key={step.number} className="relative min-h-[300px] border-b border-[#172B4D]/15 p-7 last:border-b-0 sm:nth-[2n]:border-l sm:nth-[-n+2]:border-b xl:border-b-0 xl:border-l xl:first:border-l-0" data-reveal>
                <span className="absolute right-6 top-4 font-display text-[74px] leading-none text-[#172B4D]/[.055]">{step.number}</span>
                <div className="relative flex size-11 items-center justify-center rounded-full border border-[#806000]/35 text-[10px] font-semibold tracking-[.14em] text-[#806000]">{step.number}</div>
                <p className="relative mt-9 text-[9px] font-semibold uppercase tracking-[.2em] text-[#806000]">{step.detail}</p>
                <h3 className="relative mt-4 font-display text-[30px] leading-[1.04] tracking-[-.025em]">{step.title}</h3>
                <p className="relative mt-4 text-sm font-light leading-[1.75] text-[#172B4D]/60">{step.description}</p>
                {index < sleepGuide.length - 1 && <span className="absolute bottom-6 right-7 hidden text-xl text-[#806000] xl:block" aria-hidden="true">→</span>}
              </article>
            ))}
          </div>

          <div className="relative mt-6 overflow-hidden bg-[#0B1F3A] px-7 py-10 text-white sm:px-10 lg:flex lg:items-center lg:justify-between lg:px-14 lg:py-12" data-reveal>
            <div className="absolute -right-20 -top-40 size-[420px] rounded-full border border-[#CF9C00]/20" />
            <div className="relative max-w-[780px]">
              <p className="text-[9px] font-semibold uppercase tracking-[.22em] text-[#CF9C00]">Nossa coleção mais exclusiva</p>
              <h3 className="mt-4 font-display text-[34px] leading-[1.05] tracking-[-.03em] sm:text-[42px]">Dédicace Paris. Alta costura para o seu descanso.</h3>
            </div>
            <Link href="/produtos/dedicace-paris" className="relative mt-7 inline-flex min-h-13 shrink-0 items-center gap-3 rounded-full border border-[#CF9C00] px-6 text-[10px] font-semibold uppercase tracking-[.15em] text-[#CF9C00] transition hover:bg-[#CF9C00] hover:text-[#0B1F3A] lg:mt-0" data-lux-button>
              Conhecer Dédicace <Arrow />
            </Link>
          </div>
        </div>
      </section>

      <section id="produtos" className="bg-[#0B1F3A] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1344px]">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end" data-reveal>
            <div className="max-w-[760px]">
              <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#CF9C00]">Produtos em destaque</p>
              <h2 className="mt-5 font-display text-[44px] leading-[1.02] tracking-[-.035em] sm:text-[56px]">Quatro experiências de conforto. A melhor é a que combina com você.</h2>
            </div>
            <a href="#lojas" data-cta="produtos-ver-lojas" className="w-fit text-[10px] font-semibold uppercase tracking-[.14em] text-[#CF9C00] underline decoration-[#CF9C00]/50 underline-offset-8">
              Escolher onde experimentar
            </a>
          </div>

          <div className="grid gap-px bg-white/12 sm:grid-cols-2 xl:grid-cols-4">
            {products.map((product, index) => (
              <article key={product.product} className="group flex flex-col bg-[#0B1F3A] transition hover:bg-white/[.035]" data-reveal>
                <div className="relative aspect-[4/5] overflow-hidden bg-[#F4EFE5]">
                  <Image src={product.image} alt={product.alt} fill placeholder="blur" sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-[1.025]" />
                </div>
                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-[9px] font-semibold uppercase tracking-[.2em] text-[#CF9C00]">{product.brand}</p>
                    <span className="text-[10px] tracking-[.16em] text-white/30">0{index + 1}</span>
                  </div>
                  <h3 className="mt-5 font-display text-[30px] leading-[1.05] tracking-[-.025em]">{product.product}</h3>
                  <p className="mt-4 text-sm font-light leading-[1.7] text-white/60">{product.comfort}</p>
                  <div className="mt-auto pt-8">
                  <a href="#atendimento" data-cta={`produto-experimentar-${product.slug}`} className="inline-flex min-h-12 w-full items-center justify-between rounded-full border border-[#CF9C00]/55 px-5 text-[10px] font-semibold uppercase tracking-[.14em] text-[#CF9C00] transition group-hover:border-[#CF9C00] group-hover:bg-[#CF9C00] group-hover:text-[#0B1F3A]">
                    Quero experimentar <Arrow />
                  </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-6 max-w-[900px] text-[10px] font-light leading-[1.7] text-white/32">
            Modelos, tamanhos e níveis de conforto podem variar por unidade. Agende sua visita para que nossa equipe prepare uma seleção adequada ao seu perfil.
          </p>
        </div>
      </section>

      <section id="marcas" className="bg-[#FCFAF6] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1344px]">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div data-reveal>
              <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#806000]">Curadoria Sleep House</p>
              <h2 className="mt-5 font-display text-[44px] leading-[1.02] tracking-[-.035em] sm:text-[56px]">As melhores marcas não precisam ser escolhidas no escuro.</h2>
            </div>
            <div className="self-end" data-reveal>
              <p className="text-base font-light leading-[1.85] text-[#172B4D]/65">Há mais de 20 anos no Brasil e com a experiência internacional do Grupo Pikolin, reunimos diferentes escolas de conforto para que você possa comparar de verdade — no mesmo atendimento.</p>
              <div className="mt-8 grid grid-cols-2 border-l border-t border-[#172B4D]/15">
                {brandLogos.map((brand) => (
                  <div key={brand.name} className="grid min-h-28 place-items-center border-b border-r border-[#172B4D]/15 bg-white px-5 py-6 sm:min-h-32">
                    <Image src={brand.image} alt={`Logo ${brand.name}`} className="max-h-16 w-auto max-w-full object-contain" sizes="240px" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="lojas" className="bg-[#E9E1D3] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1344px]">
          <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
            <div data-reveal>
              <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#806000]">Experiência presencial</p>
              <h2 className="mt-5 font-display text-[44px] leading-[1.02] tracking-[-.035em] sm:text-[56px]">Experimente antes de escolher.</h2>
              <p className="mt-6 text-[15px] font-light leading-[1.8] text-[#172B4D]/65">Visite a unidade mais próxima, compare níveis de conforto e receba uma recomendação personalizada.</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {stores.map((store) => (
                <article key={store.city} className="group flex min-h-[340px] flex-col overflow-hidden bg-[#FCFAF6]" data-reveal>
                  <div className="relative aspect-[16/9] overflow-hidden bg-[#172B4D]/10">
                    <Image src={store.image} alt={store.alt} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-[1.035]" />
                  </div>
                  <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <span className="text-[9px] font-semibold uppercase tracking-[.2em] text-[#806000]">Sleep House</span>
                  <h3 className="mt-4 font-display text-[34px] tracking-[-.025em]">{store.city}</h3>
                  <p className="mt-5 text-sm font-light leading-[1.75] text-[#172B4D]/60">{store.address}<br />SP</p>
                  <a href={store.maps} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center justify-between border-t border-[#172B4D]/15 pt-5 text-[10px] font-semibold uppercase tracking-[.14em]">
                    Como chegar <Arrow />
                  </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="atendimento" className="bg-[#0B1F3A] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
          <div data-reveal>
            <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#CF9C00]">Consultoria de sono</p>
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

      <footer className="border-t border-white/10 bg-[#0B1F3A] px-5 py-9 text-white sm:px-8 lg:px-12">
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
        className="fixed bottom-5 right-5 z-40 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#CF9C00] px-5 text-[10px] font-semibold uppercase tracking-[.12em] text-[#0B1F3A] shadow-[0_14px_40px_rgba(0,0,0,.25)] transition hover:bg-[#E8B900]"
      >
        WhatsApp <Arrow />
      </a>
    </main>
  );
}
