// src/app/layout.tsx — root layout for Next.js App Router
// globals.css lives in the SAME folder (src/app/), so we import it with "./globals.css".

import "./globals.css";
import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import { ReactNode } from "react";

/* -------------------------------------------
   Google Fonts → CSS variables for Tailwind  */
const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = Roboto_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: "Adam Smith International Dashboard",
  description: "Landing page for ASI OS, AI Hub, and support resources",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
