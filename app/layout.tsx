
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aşk yeniden başlar",
  description: "Online multiplayer şüşə oyunu"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="az">
      <body>{children}</body>
    </html>
  );
}
