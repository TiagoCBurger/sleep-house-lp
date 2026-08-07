"use client";

import { useActionState } from "react";
import { submitConciergeForm } from "../actions";
import { PageUrlField } from "./PageUrlField";
import { SubmitButton } from "./SubmitButton";

const profileOptions = [
  "Estou comprando para minha casa",
  "Sou Arquiteto ou Designer",
] as const;

const storeOptions = ["Americana", "Piracicaba"] as const;

const productOptions = [
  "Colchão",
  "Cama box ou box baú",
  "Travesseiro",
  "Capa/protetor de colchão",
] as const;

const sizeOptions = ["King", "Queen", "Casal", "Solteiro", "Medida especial"] as const;
const comfortOptions = [
  "Macio",
  "Intermediário",
  "Firme / Ortopédico",
  "Quero ajuda do vendedor",
] as const;
const timingOptions = [
  "O mais rápido possível",
  "Este mês",
  "Nos próximos 3 meses",
  "Apenas pesquisando preços",
] as const;

export function ConciergeForm({
  origin = "Landing Page Sleep House Dedicace Paris",
  qualification = false,
  successPath = "/obrigado",
}: {
  origin?: string;
  qualification?: boolean;
  successPath?: "/obrigado" | "/encontre-seu-colchao-ideal-typ";
}) {
  const [state, formAction] = useActionState(submitConciergeForm, {
    error: "",
  });

  return (
    <form
      className="flex flex-col gap-8"
      action={formAction}
      data-lead-form
      data-form-origin={origin}
    >
      <PageUrlField />
      <input type="hidden" name="origem" value={origin} />
      <input type="hidden" name="success_path" value={successPath} />
      <label className="flex flex-col gap-3">
        <span className="text-[9px] font-light uppercase tracking-[0.18em] text-[#f5f0e8]/30">
          Nome completo
        </span>
        <input
          className="h-12 border-b border-[#f5f0e8]/15 bg-transparent pb-3 text-base italic text-[#f5f0e8] outline-none placeholder:text-[#f5f0e8]/20"
          name="nome"
          placeholder="Seu nome"
          autoComplete="name"
          minLength={2}
          required
        />
      </label>

      {qualification && (
        <div className="grid gap-7 sm:grid-cols-2">
          <QuestionSelect name="p1_produto" label="O que você está buscando?" options={productOptions} />
          <QuestionSelect name="p2_tamanho" label="Qual tamanho você busca?" options={sizeOptions} />
          <QuestionSelect name="p3_conforto" label="Qual sua preferência de conforto?" options={comfortOptions} />
          <QuestionSelect name="p4_prazo" label="Para quando é a compra?" options={timingOptions} />
        </div>
      )}

      <label className="flex flex-col gap-3">
        <span className="text-[9px] font-light uppercase tracking-[0.18em] text-[#f5f0e8]/30">
          WhatsApp
        </span>
        <input
          className="h-12 border-b border-[#f5f0e8]/15 bg-transparent pb-3 text-base italic text-[#f5f0e8] outline-none placeholder:text-[#f5f0e8]/20"
          name="whatsapp"
          placeholder="(00) 00000-0000"
          autoComplete="tel"
          inputMode="tel"
          maxLength={16}
          pattern="^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$"
          required
        />
      </label>

      <label className="flex cursor-pointer items-start gap-3 text-[11px] font-light leading-[1.65] text-[#f5f0e8]/45">
        <input
          type="checkbox"
          name="consentimento_lgpd"
          value="sim"
          className="mt-0.5 size-[18px] shrink-0 appearance-none border border-[#c4a962]/40 checked:border-[#c4a962] checked:bg-[#c4a962]"
          required
        />
        <span>
          Concordo em receber o contato da Sleep House e declaro que li a{" "}
          <a href="/politica-de-privacidade" target="_blank" className="text-[#c4a962] underline underline-offset-4">
            Política de Privacidade
          </a>.
        </span>
      </label>

      {!qualification && <fieldset className="border-0 p-0">
        <legend className="mb-4 text-[9px] font-light uppercase tracking-[0.18em] text-[#f5f0e8]/30">
          Perfil
        </legend>
        <div className="space-y-3.5">
          {profileOptions.map((option) => (
            <label
              key={option}
              className="flex cursor-pointer items-center gap-3.5 text-sm font-light text-[#f5f0e8]/65"
            >
              <input
                type="radio"
                name="perfil"
                value={option}
                className="size-[18px] shrink-0 appearance-none rounded-none border border-[#c4a962]/40 bg-transparent checked:border-[#c4a962] checked:bg-[radial-gradient(circle_at_center,_#c4a962_0,_#c4a962_35%,_transparent_38%)]"
                required
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </fieldset>}

      <label className="flex flex-col gap-3">
        <span className="text-[9px] font-light uppercase tracking-[0.18em] text-[#f5f0e8]/30">
          {qualification ? "Qual loja fica mais perto de você?" : "Loja de preferência"}
        </span>
        <select
          className="h-12 border-b border-[#f5f0e8]/15 bg-[#0a0a0a] pb-3 text-base italic text-[#f5f0e8] outline-none"
          name="loja_preferencia"
          defaultValue=""
          required
        >
          <option value="" disabled>
            Selecione uma loja
          </option>
          {storeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <div className="pt-2">
        <SubmitButton />

        <p className="mt-4 text-center text-[11px] font-light tracking-[0.04em] text-[#f5f0e8]/20">
          Atendimento personalizado · Sem compromisso de compra
        </p>

        {state.error && (
          <p className="mt-4 text-center text-[12px] font-light leading-[1.6] tracking-[0.04em] text-[#d4b872]">
            {state.error}
          </p>
        )}
      </div>
    </form>
  );
}

function QuestionSelect({
  name,
  label,
  options,
}: {
  name: string;
  label: string;
  options: readonly string[];
}) {
  return (
    <label className="flex flex-col gap-3">
      <span className="min-h-7 text-[9px] font-light uppercase leading-[1.55] tracking-[0.15em] text-[#f5f0e8]/30">
        {label}
      </span>
      <select
        name={name}
        defaultValue=""
        className="h-12 border-b border-[#f5f0e8]/15 bg-[#0a0a0a] pb-3 text-sm text-[#f5f0e8] outline-none"
        required
      >
        <option value="" disabled>Selecione</option>
        {options.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
    </label>
  );
}
