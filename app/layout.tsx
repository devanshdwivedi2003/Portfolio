import type { Metadata, Viewport } from "next";
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
  title: "Devansh Dwivedi — Full Stack Developer",
  description:
    "Portfolio of Devansh Dwivedi, a full stack developer building fast, animated web apps with React, Next.js, Node.js and MongoDB.",
  keywords: [
    "Devansh Dwivedi",
    "Full Stack Developer",
    "MERN",
    "Next.js",
    "React",
    "Portfolio",
  ],
  authors: [{ name: "Devansh Dwivedi" }],
  openGraph: {
    title: "Devansh Dwivedi — Full Stack Developer",
    description:
      "Full stack developer building fast, animated web apps with React, Next.js and Node.js.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devansh Dwivedi — Full Stack Developer",
    creator: "@devansh09758001",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
