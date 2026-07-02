"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

type FormStatus = "idle" | "sending" | "error";

const profileOptions = [
  "Sou Cliente Final",
  "Sou Arquiteto ou Designer",
] as const;

const storeOptions = ["Americana", "Piracicaba"] as const;

function onlyDigits(value: string) {
  return value.replace(/\D/g, "");
}

function maskWhatsapp(value: string) {
  const digits = onlyDigits(value).slice(0, 11);

  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }

  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function FieldError({ children }: { children?: string }) {
  if (!children) return null;

  return (
    <span className="text-[11px] font-light tracking-[0.04em] text-[#d4b872]">
      {children}
    </span>
  );
}

export function ConciergeForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [profile, setProfile] = useState("");
  const [store, setStore] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    const whatsappDigits = onlyDigits(whatsapp);

    if (name.trim().length < 2) {
      nextErrors.name = "Informe seu nome completo.";
    }

    if (whatsappDigits.length < 10 || whatsappDigits.length > 11) {
      nextErrors.whatsapp = "Informe um WhatsApp válido com DDD.";
    }

    if (!profile) {
      nextErrors.profile = "Selecione o seu perfil.";
    }

    if (!store) {
      nextErrors.store = "Selecione a loja de preferência.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("idle");

    if (!validate()) return;

    setStatus("sending");

    try {
      const response = await fetch("/api/concierge", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: name.trim(),
          whatsapp,
          whatsapp_digits: onlyDigits(whatsapp),
          perfil: profile,
          loja_preferencia: store,
          origem: "Landing Page Sleep House Dedicace Paris",
          pagina: window.location.href,
        }),
      });

      if (!response.ok) {
        throw new Error("Webhook request failed");
      }

      router.push("/obrigado");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form className="flex flex-col gap-8" onSubmit={handleSubmit} noValidate>
      <label className="flex flex-col gap-3">
        <span className="text-[9px] font-light uppercase tracking-[0.18em] text-[#f5f0e8]/30">
          Nome completo
        </span>
        <input
          className="h-12 border-b border-[#f5f0e8]/15 bg-transparent pb-3 text-base italic text-[#f5f0e8] outline-none placeholder:text-[#f5f0e8]/20"
          name="nome"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Seu nome"
          autoComplete="name"
          aria-invalid={Boolean(errors.name)}
        />
        <FieldError>{errors.name}</FieldError>
      </label>

      <label className="flex flex-col gap-3">
        <span className="text-[9px] font-light uppercase tracking-[0.18em] text-[#f5f0e8]/30">
          WhatsApp
        </span>
        <input
          className="h-12 border-b border-[#f5f0e8]/15 bg-transparent pb-3 text-base italic text-[#f5f0e8] outline-none placeholder:text-[#f5f0e8]/20"
          name="whatsapp"
          value={whatsapp}
          onChange={(event) => setWhatsapp(maskWhatsapp(event.target.value))}
          placeholder="(00) 00000-0000"
          autoComplete="tel"
          inputMode="tel"
          maxLength={15}
          aria-invalid={Boolean(errors.whatsapp)}
        />
        <FieldError>{errors.whatsapp}</FieldError>
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
                checked={profile === option}
                onChange={(event) => setProfile(event.target.value)}
                className="size-[18px] shrink-0 appearance-none rounded-none border border-[#c4a962]/40 bg-transparent checked:border-[#c4a962] checked:bg-[radial-gradient(circle_at_center,_#c4a962_0,_#c4a962_35%,_transparent_38%)]"
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
        <div className="mt-3">
          <FieldError>{errors.profile}</FieldError>
        </div>
      </fieldset>

      <label className="flex flex-col gap-3">
        <span className="text-[9px] font-light uppercase tracking-[0.18em] text-[#f5f0e8]/30">
          Loja de preferência
        </span>
        <select
          className="h-12 border-b border-[#f5f0e8]/15 bg-[#0a0a0a] pb-3 text-base italic text-[#f5f0e8] outline-none"
          name="loja_preferencia"
          value={store}
          onChange={(event) => setStore(event.target.value)}
          aria-invalid={Boolean(errors.store)}
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
        <FieldError>{errors.store}</FieldError>
      </label>

      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex h-[50px] w-full items-center justify-center bg-[#c4a962] px-8 text-[11px] font-medium uppercase tracking-[0.16em] text-[#0a0a0a] transition-colors duration-200 hover:bg-[#d4b872] disabled:cursor-not-allowed disabled:opacity-60"
          data-lux-button
        >
          {status === "sending" ? "Enviando..." : "Falar com o Concierge"}
        </button>

        <p className="mt-4 text-center text-[11px] font-light tracking-[0.04em] text-[#f5f0e8]/20">
          Atendimento personalizado · Sem compromisso de compra
        </p>

        {status === "error" && (
          <p className="mt-4 text-center text-[12px] font-light leading-[1.6] tracking-[0.04em] text-[#d4b872]">
            Não foi possível enviar agora. Tente novamente em instantes.
          </p>
        )}
      </div>
    </form>
  );
}
