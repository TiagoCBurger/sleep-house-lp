import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade | Sleep House",
  description: "Informações sobre o tratamento de dados desta landing page.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#f8f4ec] px-5 py-20 text-[#17243a] sm:px-8">
      <article className="mx-auto max-w-[760px]">
        <Link href="/" className="text-[10px] font-semibold uppercase tracking-[.16em] text-[#9a6e43]">← Voltar</Link>
        <h1 className="mt-10 font-display text-[44px] tracking-[-.035em] sm:text-[58px]">Política de Privacidade</h1>
        <div className="mt-10 space-y-7 text-[15px] font-light leading-[1.85] text-[#17243a]/70">
          <p>Ao enviar o formulário, você autoriza a Sleep House a utilizar os dados informados para responder ao seu contato, recomendar produtos e agendar uma experiência nas unidades de Americana ou Piracicaba.</p>
          <p>Os dados coletados podem incluir nome, telefone, preferências de produto, tamanho, conforto, prazo de compra, loja escolhida, página de origem e informações técnicas necessárias para o funcionamento e a mensuração da campanha.</p>
          <p>Essas informações são usadas exclusivamente para atendimento comercial, gestão do relacionamento e análise de desempenho. Não comercializamos seus dados pessoais.</p>
          <p>Você pode solicitar confirmação do tratamento, correção ou exclusão dos seus dados pelo mesmo canal de atendimento utilizado nesta página, conforme a Lei Geral de Proteção de Dados.</p>
          <p>Esta política poderá ser atualizada para refletir mudanças operacionais ou legais. Última atualização: agosto de 2026.</p>
        </div>
      </article>
    </main>
  );
}
