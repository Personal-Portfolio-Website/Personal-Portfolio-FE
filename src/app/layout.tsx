import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bui Minh Portfolio",
  description: "Personal portfolio website built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-100 min-h-screen selection:bg-fuchsia-500 selection:text-white relative antialiased overflow-x-hidden">
        {/* Hiệu ứng ánh sáng nền đa sắc (Glow Mesh Gradients) */}
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[128px] animate-pulse" />
          <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-fuchsia-500/20 rounded-full blur-[128px]" />
          <div className="absolute -bottom-20 left-1/3 w-[600px] h-[600px] bg-indigo-500/15 rounded-full blur-[140px]" />
        </div>

        <Navbar />
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}