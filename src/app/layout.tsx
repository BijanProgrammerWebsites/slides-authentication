import { ReactElement, ReactNode } from "react";

import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";

import "./globals.css";
import "./reveal.css";

const worksans = Work_Sans({ subsets: ["latin"], variable: "--font-worksans" });

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication by BijanProgrammer",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>): ReactElement {
  return (
    <html lang="en" className={worksans.variable}>
      <body>{children}</body>
    </html>
  );
}
