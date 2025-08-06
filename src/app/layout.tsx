// src/app/layout.tsx – root layout required by Next.js App Router
// NOTE: globals.css now sits at src/globals.css, so we import one level up

import "./globals.css";
import { ReactNode, ReactElement } from "react";

export const metadata = {
  title: "Adam Smith International Dashboard",
  description: "Landing page for ASI OS, AI Hub, and support resources",
};

export default function RootLayout({ children }: { children: ReactNode }): ReactElement {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
