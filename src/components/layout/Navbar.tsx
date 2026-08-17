import Link from "next/link";
import { NAV_ITEMS } from "@/data/navigation";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link 
          href="/" 
          className="text-lg font-bold text-white tracking-wider hover:text-cyan-400 transition-colors"
        >
          &lt;DevPortfolio /&gt;
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="flex items-center">
          <Link
            href="#contact"
            className="px-4 py-2 text-sm font-medium text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </header>
  );
}