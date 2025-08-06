// src/app/layout.tsx — required root layout for Next.js App Router

import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Adam Smith International Dashboard",
  description: "Landing page for ASI OS, AI Hub, and support resources",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
