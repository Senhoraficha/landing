import type { Metadata } from "next";
import { DM_Serif_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Senhora Ficha — Ficha Técnica que Trabalha por Você",
  description:
    "Controle o custo real de cada prato, acompanhe o CMV em tempo real e nunca mais perca margem sem perceber. Simples. Prático. Lucrativo.",
  openGraph: {
    title: "Senhora Ficha — Ficha Técnica que Trabalha por Você",
    description:
      "Controle o custo real de cada prato, acompanhe o CMV em tempo real e nunca mais perca margem sem perceber.",
    url: "https://senhoraficha.com.br",
    siteName: "Senhora Ficha",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${dmSerifDisplay.variable} ${plusJakartaSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
