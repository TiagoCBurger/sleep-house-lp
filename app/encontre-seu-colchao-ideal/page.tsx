import type { Metadata } from "next";
import Home from "@/app/page";

export const metadata: Metadata = {
  title: "Sleep House | Encontre o colchão ideal",
  description:
    "Descubra seu conforto ideal e agende uma experiência nas lojas Sleep House de Americana ou Piracicaba.",
};

export default function EncontreSeuColchaoIdealPage() {
  return <Home />;
}
