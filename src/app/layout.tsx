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
  title: "Elian Cueva | Full Stack Developer & AI Integrator",
  description: "Portfolio de Elian Cueva, desarrollador Full Stack especializado en React, Node.js y automatizaciones con IA.",
  openGraph: {
    title: "Elian Cueva | Full Stack & AI Integrator",
    description: "Portfolio de Elian Cueva. Desarrollo web, arquitecturas asíncronas, y automatización con IA.",
    type: "website",
    locale: "es_ES",
  },
  icons: {
    icon: [
      {
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">💻</text></svg>',
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
