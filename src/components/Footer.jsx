"use client";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Automatically updates the year if the site is still active past 2029
  const currentYear = new Date().getFullYear();
  const endYear = currentYear > 2029 ? currentYear : 2029;

  return (
    <footer className="relative z-40 w-full overflow-hidden bg-[#E5DCCB]">
      {/* Top Maroon Strip */}
      <div className="h-5 w-full bg-[#6a2520] md:h-6"></div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-10 md:py-12">
        {/* Text Content */}
        <div className="space-y-2 pr-16 text-center md:pr-0">
          <p className="font-serif text-[15px] italic tracking-wide text-stone-900 md:text-xl">
            Copyright © 2026-2029 <span className="font-semibold text-[#6a2520]">Sri Siddhi Academy of Art</span> | Site
          </p>
          <p className="font-serif text-[15px] italic tracking-wide text-stone-900 md:text-xl">
            Created & Maintained by <span className="font-semibold">Priyanshu Mangal & SSAA IT Team</span>
          </p>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-xl bg-[#e13838] shadow-lg transition-transform hover:scale-105 hover:bg-[#c93030] md:right-8 md:h-14 md:w-14"
          aria-label="Scroll to top"
        >
          <svg
            className="h-7 w-7 text-white md:h-8 md:w-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      </div>
    </footer>
  );
}