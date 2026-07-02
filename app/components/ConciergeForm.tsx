"use client";

import { useActionState } from "react";
import { submitConciergeForm } from "../actions";
import { PageUrlField } from "./PageUrlField";
import { SubmitButton } from "./SubmitButton";

const profileOptions = [
  "Sou Cliente Final",
  "Sou Arquiteto ou Designer",
] as const;

const storeOptions = ["Americana", "Piracicaba"] as const;

export function ConciergeForm() {
  const [state, formAction] = useActionState(submitConciergeForm, {
    error: "",
  });

  return (
    <form className="flex flex-col gap-8" action={formAction}>
      <PageUrlField />
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

      <fieldset className="border-0 p-0">
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
      </fieldset>

      <label className="flex flex-col gap-3">
        <span className="text-[9px] font-light uppercase tracking-[0.18em] text-[#f5f0e8]/30">
          Loja de preferência
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
