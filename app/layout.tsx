import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const font = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LGS Portfolio",
  description:
    "Personal Portfolio for Lexie Gaines-Smith, FullStack Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
