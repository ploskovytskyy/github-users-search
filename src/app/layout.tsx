import type { Metadata } from "next";
import "./globals.css";

import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ClientProviders } from "./client-providers";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Github Users Search",
  description: "Demo Github Users Search App by Oleksandr Ploskovytskyy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background text-foreground font-sans antialiased",
          fontSans.variable
        )}
      >
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
