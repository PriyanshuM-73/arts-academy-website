"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();
  const endYear = currentYear > 2029 ? currentYear : 2029;

  const handleHomeClick = (e) => {
    // If we are already on the homepage, smoothly scroll up instead of reloading
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative z-40 w-full overflow-hidden bg-[#dcd3c3]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-8 md:py-10">
        
        {/* Text Content */}
        <div className="space-y-2 text-center">
          <p className="font-serif text-[15px] italic tracking-wide text-stone-900 md:text-xl">
            Copyright © 2026-{endYear}{" "}
            <Link 
              href="/" 
              onClick={handleHomeClick}
              className="font-semibold text-[#6a2520] transition-colors hover:text-[#e13838] cursor-pointer"
            >
              Sri Siddhi Academy of Art
            </Link>
          </p>
          <p className="font-serif text-[15px] italic tracking-wide text-stone-900 md:text-xl">
            Created & Maintained by <span className="font-semibold">Priyanshu Mangal & SSAA IT Team</span>
          </p>
        </div>
        
      </div>
    </footer>
  );
}