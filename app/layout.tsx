import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Setanjang - KKN Desa Setanjang 2026",
  description: "Portal resmi KKN Desa Setanjang 2026. Kolaborasi mahasiswa untuk pemberdayaan masyarakat dan digitalisasi desa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
