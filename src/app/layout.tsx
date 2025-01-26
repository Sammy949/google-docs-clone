import type { Metadata } from "next";

import "./globals.css";
import { Inter } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";
const inter = Inter({
  subsets: ["latin"],
});
import { ConvexClientProvider } from "@/components/convex-client-provider";
import { Toaster } from "@/components/ui/sonner";

import "@liveblocks/react-ui/styles.css";
import "@liveblocks/react-tiptap/styles.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "DocsEdit",
  description: "Your one time stop for web documents",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NuqsAdapter>
          <ConvexClientProvider>
            <Toaster richColors />
            {children}
          </ConvexClientProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
