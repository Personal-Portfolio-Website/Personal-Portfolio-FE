"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Home, 
  User, 
  Code2, 
  Briefcase, 
  GraduationCap, 
  Mail 
} from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "/", icon: Home },
  { label: "Profile", href: "/about", icon: User },
  { label: "Skills", href: "/skills", icon: Code2 },
  { label: "Projects", href: "/projects", icon: Briefcase },
  { label: "Experience", href: "/experience", icon: GraduationCap },
  { label: "Contact", href: "/contact", icon: Mail },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-slate-950/80 border-b border-slate-800">
      <div className="w-full px-6 md:px-12 h-16 flex items-center justify-between">
        
        {/* Logo bên trái */}
        <div className="shrink-0">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-teal-300 to-fuchsia-500 bg-clip-text text-transparent hover:opacity-90 transition-opacity"
          >
            Bui Minh Portfolio
          </Link>
        </div>

        {/* Menu dạt rộng sang phải kèm Icon & LED 7 màu */}
        <nav className="flex items-center justify-between flex-1 ml-12 md:ml-24 lg:ml-36">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative group p-[1.5px] rounded-full overflow-hidden transition-all duration-200 ${
                  isActive
                    ? "shadow-[0_0_15px_rgba(6,182,212,0.6)]"
                    : "hover:shadow-[0_0_15px_rgba(236,72,153,0.5)]"
                }`}
              >
                <div
                  className={`rainbow-glow-beam transition-opacity duration-300 pointer-events-none ${
                    isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                />

                <div
                  className={`relative z-10 px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 flex items-center gap-2 whitespace-nowrap ${
                    isActive
                      ? "bg-slate-950 text-cyan-300 font-semibold border border-cyan-500/40"
                      : "bg-slate-900/60 text-slate-300 group-hover:text-white group-hover:bg-slate-950"
                  }`}
                >
                  <Icon className={`w-4 h-4 transition-transform duration-200 group-hover:scale-110 ${
                    isActive ? "text-cyan-400" : "text-slate-400 group-hover:text-cyan-300"
                  }`} />
                  {item.label}
                </div>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}