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

export const metadata: Metadata = {
  title: "Jonathan Uribe | Full Stack Developer",
  description:
    "Full Stack Developer with 4+ years of experience building web and mobile applications with React, Node.js, TypeScript and AWS. Available for freelance projects and full-time roles.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Node.js",
    "React Native",
    "TypeScript",
    "AWS",
    "freelance developer",
    "web development",
  ],
  authors: [{ name: "Jonathan Uribe" }],
  openGraph: {
    title: "Jonathan Uribe | Full Stack Developer",
    description:
      "Full Stack Developer with 4+ years building scalable web and mobile apps. React, Node.js, TypeScript, AWS.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
