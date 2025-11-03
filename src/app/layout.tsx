import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/utils/ThemeProvider";
import { getTheme } from "@/utils/theme";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bug Hunters",
  description: "Transforma tu visión en realidad digital. Equipo de desarrolladores apasionados por crear soluciones web innovadoras.",
  keywords: "desarrollo web, aplicaciones, React, Next.js, JavaScript, TypeScript",
  authors: [{ name: "Bug Hunters" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialTheme = await getTheme();

  return (
    <html lang="es" data-scroll-behavior="smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider initialTheme={initialTheme}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
