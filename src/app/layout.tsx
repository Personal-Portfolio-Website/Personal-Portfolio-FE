import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Personal Developer Portfolio",
  description: "Personal portfolio website built with Next.js and Spring Boot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-900 text-slate-100 antialiased">
        <Navbar />
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}