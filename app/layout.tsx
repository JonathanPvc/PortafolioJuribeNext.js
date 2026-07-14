import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jonathan Uribe | Full Stack Developer",
  description: "Desarrollador Full Stack con +4 años de experiencia. React, Node.js, TypeScript, AWS. Disponible para proyectos freelance y empleo.",
  keywords: ["Full Stack Developer", "React", "Node.js", "React Native", "TypeScript", "AWS", "desarrollo web Colombia"],
  authors: [{ name: "Jonathan Uribe" }],
  openGraph: {
    title: "Jonathan Uribe | Full Stack Developer",
    description: "Desarrollador Full Stack · React · Node.js · TypeScript · AWS",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}