import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Header from "@/components/header";
import LiquidEffects from "@/components/liquid-effects";
import LiquidBackground from "@/components/liquid-background";
import { MotionPreferencesProvider } from "@/components/motion-preferences";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wilgrey Ravelo Cruz | Desarrollador Full Stack",
  description:
    "Portafolio de Wilgrey Ravelo Cruz — Desarrollador Full Stack C# / .NET y React. Arquitectura Onion, desarrollo guiado por especificaciones y flujos asistidos por IA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only z-50 rounded-lg bg-my-green-950 px-4 py-3 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Saltar al contenido principal
        </a>
        <MotionPreferencesProvider>
          <Header />
          <Navbar />
          <LiquidBackground />
          <LiquidEffects />
          {children}
        </MotionPreferencesProvider>
      </body>
    </html>
  );
}
