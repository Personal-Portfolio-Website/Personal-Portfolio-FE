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
      <body className="bg-[#070708] text-zinc-100 min-h-screen selection:bg-zinc-100 selection:text-zinc-950 relative antialiased overflow-x-hidden">
        {/* Once UI / Magic Portfolio Ambient Glow Mesh */}
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-emerald-500/10 via-cyan-500/5 to-transparent rounded-full blur-[140px]" />
          <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px]" />
          <div className="absolute -bottom-32 left-10 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[160px]" />
        </div>

        <Navbar />
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}