import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Practice your English",
  description: "Created by Lucas Mendes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-indigo-950">{children}</body>
    </html>
  );
}
