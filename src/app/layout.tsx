import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";

export const metadata: Metadata = {
  title: "Note English - Quiz",
  description: "Created by Lucas Mendes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#1C1B22] flex items-center justify-center p-4"><Analytics/>{children}</body>
    </html>
  );
}
