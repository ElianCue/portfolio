import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { ThemeProvider } from "@/components/theme-provider";
import { I18nProvider } from "@/lib/i18n";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Elian Cueva | Desarrollador Full Stack",
  description: "Portfolio de Elian Cueva, desarrollador Full Stack especializado en React, Node.js y sistemas backend.",
  openGraph: {
    title: "Elian Cueva | Desarrollador Full Stack",
    description: "Portfolio de Elian Cueva. Desarrollo web fullstack, arquitectura backend y sistemas distribuidos.",
    type: "website",
    locale: "es_ES",
  },
  icons: {
    icon: [
      {
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="%23232a2a" d="M12.5 5L4 16l8.5 11 2-1.5L8 16l6.5-9.5-2-1.5z"/><path fill="%23232a2a" d="M19.5 5l-2 1.5L26 16l-8.5 9.5 2 1.5L28 16l-8.5-11z"/></svg>',
        type: 'image/svg+xml',
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <I18nProvider>
            {children}
            <Analytics />
            <SpeedInsights />
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
