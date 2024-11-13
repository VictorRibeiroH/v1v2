import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google" ;
import "./globals.css";

const font = Space_Grotesk({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "nome | Design & Desenvolvimento",
  description: "Faça seu negócio crescer com nome, um estúdio de design e desenvolvimento.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
