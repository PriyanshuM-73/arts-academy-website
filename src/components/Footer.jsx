"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();
  const endYear = currentYear > 2029 ? currentYear : 2029;

  const handleHomeClick = (e) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative z-40 w-full overflow-hidden bg-[#dcd3c3]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-6 md:py-8">
        
        {/* Text Content */}
        <div className="space-y-1.5 text-center font-sans tracking-wide text-stone-900">
          
          {/* Line 1: Copyright */}
          <p className="whitespace-nowrap text-[17px] md:text-base">
            Copyright © 2026-{endYear}{" "}
            <Link 
              href="/" 
              onClick={handleHomeClick}
              className="font-bold text-[#6a2520] transition-colors hover:text-[#e13838] cursor-pointer"
            >
              Sri Siddhi Academy of Art
            </Link>
          </p>
          
          {/* Line 2: Clean, short credit attribution */}
          <p className="whitespace-nowrap text-[17px] md:text-base text-stone-700">
            Developed by <span className="font-bold text-stone-900">SSAA IT Team</span>
          </p>
          
        </div>
        
      </div>
    </footer>
  );
}