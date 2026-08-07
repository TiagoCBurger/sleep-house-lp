import type { Metadata } from "next";
import { DedicaceLanding } from "@/app/components/DedicaceLanding";

export const metadata: Metadata = {
  title: "Dédicace Paris | Sleep House",
  description:
    "Conheça o Dédicace Paris: construção artesanal, tecidos de alfaiataria e atendimento exclusivo Sleep House.",
};

export default function DedicaceParisPage() {
  return <DedicaceLanding />;
}
