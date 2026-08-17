"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Home, 
  User, 
  Code2, 
  Briefcase, 
  GraduationCap, 
  Mail,
  Clock,
  MapPin
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
  const [timeString, setTimeString] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString("en-GB", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full pt-4 pb-2 px-4 md:px-8 max-w-7xl mx-auto flex items-center justify-between gap-4">
      {/* Left: Brand & Location Badge */}
      <div className="shrink-0 flex items-center gap-3">
        <Link
          href="/"
          className="text-xl font-extrabold tracking-tight text-white hover:opacity-90 transition-opacity"
        >
          Bui Minh Portfolio
        </Link>

        <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-xl text-xs font-mono text-zinc-300 shadow-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <MapPin className="w-3 h-3 text-zinc-400" />
          <span>Ho Chi Minh City (UTC+7)</span>
        </div>
      </div>

      {/* Center: Floating Capsule Navigation */}
      <nav className="flex items-center gap-1.5 p-1.5 rounded-full bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-xl shadow-2xl">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative group p-[1.5px] rounded-full overflow-hidden transition-all duration-200 ${
                isActive
                  ? "shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                  : "hover:shadow-[0_0_15px_rgba(236,72,153,0.4)]"
              }`}
            >
              <div
                className={`rainbow-glow-beam pointer-events-none transition-opacity duration-300 ${
                  isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              />

              <div
                className={`relative z-10 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 flex items-center gap-1.5 sm:gap-2 whitespace-nowrap ${
                  isActive
                    ? "bg-zinc-950 text-zinc-50 font-semibold border border-zinc-800/80"
                    : "bg-zinc-950/90 text-zinc-400 group-hover:text-zinc-100 group-hover:bg-zinc-950 border border-transparent"
                }`}
              >
                <Icon
                  className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:scale-110 ${
                    isActive ? "text-zinc-50" : "text-zinc-400 group-hover:text-zinc-200"
                  }`}
                />
                <span className="hidden sm:inline">{item.label}</span>
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Right: Live Digital Clock Display */}
      <div className="shrink-0 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-xl text-xs font-mono text-zinc-300 shadow-md">
        <Clock className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
        <span>{timeString || "00:00:00"}</span>
      </div>
    </header>
  );
}