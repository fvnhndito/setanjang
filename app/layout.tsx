import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KKN Setanjang - Kelurahan Jangli & Tandang",
  description: "Portal resmi KKN Setanjang 2026. Kolaborasi mahasiswa untuk pemberdayaan masyarakat dan digitalisasi Kelurahan Jangli dan Tandang.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
