"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex h-[50px] w-full items-center justify-center bg-[#c4a962] px-8 text-[11px] font-medium uppercase tracking-[0.16em] text-[#0a0a0a] transition-colors duration-200 hover:bg-[#d4b872] disabled:cursor-not-allowed disabled:opacity-60"
      data-lux-button
    >
      {pending ? "Enviando..." : "Falar com o Concierge"}
    </button>
  );
}
