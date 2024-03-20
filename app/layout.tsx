import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Объясняя Финляндию | Лекторий Ольги Корка",
  description:
    "Образовательное пространство для тех, кто хочет сделать Финляндию своим домом",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
