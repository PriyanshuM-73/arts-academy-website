"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const endYear = currentYear > 2029 ? currentYear : 2029;

  return (
    <footer className="relative z-40 w-full overflow-hidden bg-[#dcd3c3]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-8 md:py-10">
        
        {/* Text Content */}
        <div className="space-y-2 text-center">
          <p className="font-serif text-[15px] italic tracking-wide text-stone-900 md:text-xl">
            Copyright © 2026-{endYear}{" "}
            <Link 
              href="/" 
              className="font-semibold text-[#6a2520] transition-colors hover:text-[#e13838]"
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