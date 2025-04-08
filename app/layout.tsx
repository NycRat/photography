import type { Metadata } from "next";
import { Gaegu } from "next/font/google";
import "./globals.css";

// TODO choose different sans font

const gaeguFont = Gaegu({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "700",
});

export const metadata: Metadata = {
  title: "avah's photography",
  description: "avah's 2025 photography portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gaeguFont.variable} antialiased`}>{children}</body>
    </html>
  );
}
