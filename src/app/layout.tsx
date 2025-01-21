import type { Metadata } from "next";

import "./globals.css";
import { Inter } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";
const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Docness",
  description: "Your one time stop for web documents",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NuqsAdapter>{children}</NuqsAdapter>
      </body>
    </html>
  );
}
