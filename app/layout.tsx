import type { Metadata } from "next";
import { CustomCursor } from "@/components/CustomCursor";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevClub | A melhor formação do Brasil",
  description:
    "Página institucional fictícia do DevClub para desafio full-stack com foco em animações suaves e design moderno.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full scroll-smooth">
      <body className="min-h-full bg-[#0B0E14] font-sans text-slate-100 antialiased">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
