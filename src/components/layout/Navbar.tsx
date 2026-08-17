"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/data/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="w-full px-8 md:px-12 h-16 flex items-center">
        {/* Logo / Brand găm sang trái */}
        <Link 
          href="/" 
          className="text-lg font-bold text-white tracking-wider hover:text-cyan-400 transition-colors whitespace-nowrap"
        >
          Bui Minh Portfolio
        </Link>

        {/* Navigation Links trải từ giữa sang phải */}
        <nav className="flex-1 flex items-center justify-end md:justify-around ml-8 md:ml-16">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                  isActive 
                    ? "text-cyan-400 bg-slate-800/80 font-semibold shadow-sm" 
                    : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/40"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}