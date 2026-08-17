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
      <body className="bg-zinc-950 text-zinc-100 min-h-screen selection:bg-zinc-100 selection:text-zinc-950 relative antialiased overflow-x-hidden">
        {/* Modern Monochromatic Ambient Dark Mesh */}
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-zinc-400/5 rounded-full blur-[140px] animate-pulse" />
          <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-zinc-300/5 rounded-full blur-[130px]" />
          <div className="absolute -bottom-20 left-1/3 w-[650px] h-[650px] bg-white/[0.03] rounded-full blur-[150px]" />
        </div>

        <Navbar />
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}