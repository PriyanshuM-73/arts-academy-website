"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Original mobile menu
  const [isScrolled, setIsScrolled] = useState(false); // Tracks shrinking
  const [isScrolledMenuOpen, setIsScrolledMenuOpen] = useState(false); // Scrolled floating menu
  const [coursesOpen, setCoursesOpen] = useState(false); // Courses sub-menu
  
  const pathname = usePathname();
  const navRef = useRef(null);

  // THE FIX: Smart condition to check if we are on the homepage
  const isHomePage = pathname === "/";
  // Collapse immediately if NOT on homepage, otherwise wait for scroll
  const isCollapsed = !isHomePage || isScrolled;

  // Track scrolling to trigger the collapse on the homepage
  // --- REPLACE YOUR SCROLL useEffect WITH THIS EXACT BLOCK ---
  useEffect(() => {
    const handleScroll = () => {
      // Calculates exactly 15% of the user's screen height
      const triggerPoint = window.innerHeight * 0.15;
      
      if (window.scrollY > triggerPoint) {
        setIsScrolled(true);
        setIsMobileMenuOpen(false);
      } else {
        setIsScrolled(false);
        setIsScrolledMenuOpen(false);
        setCoursesOpen(false);
      }
    };
    
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsScrolledMenuOpen(false);
        setCoursesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsScrolledMenuOpen(false);
    setCoursesOpen(false);
  }, [pathname]);

  return (
    // THE FIX: Added pointer-events-none to the wrapper so it doesn't block the screen when collapsed
    <nav className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 pt-3 pointer-events-none" ref={navRef}>
      
      {/* 
        MAIN NAVBAR CONTAINER
        Pointer-events-auto restores clicking for the pill itself.
      */}
      <div 
        onClick={() => { if (isCollapsed) setIsScrolledMenuOpen(!isScrolledMenuOpen); }}
        className={`pointer-events-auto transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] border border-white/70 bg-white/78 backdrop-blur-xl shadow-[0_18px_55px_rgba(15,23,42,0.12)] animate-fade-up overflow-hidden ${
          isCollapsed 
            ? "w-14 h-14 sm:w-16 sm:h-16 rounded-full mx-0 cursor-pointer hover:scale-105" 
            : "mx-auto max-w-7xl w-full rounded-3xl"
        }`}
      >
        <div className={`flex items-center justify-between ${isCollapsed ? "h-full justify-center px-0" : "h-20 px-4 sm:px-6 lg:px-8"}`}>
          
          {/* Logo & Title */}
          <Link
            href="/"
            onClick={(e) => { 
              if (isCollapsed) e.preventDefault(); // Prevents navigating if acting as menu button
            }}
            className="flex flex-row flex-nowrap items-center gap-3 group shrink-0"
          >
            <img
              src="/logo.png"
              alt="Sri Siddhi Academy Logo"
              className={`object-contain shrink-0 transition-all duration-700 ${
                isCollapsed ? "h-10 w-10 md:h-11 md:w-11" : "h-12 w-auto group-hover:scale-105"
              }`}
            />
            {/* Title disappears when collapsed */}
            <span className={`whitespace-nowrap text-xl font-extrabold tracking-tight text-stone-900 lg:text-2xl transition-all duration-500 overflow-hidden ${
              isCollapsed ? "max-w-0 opacity-0 hidden" : "hidden sm:block max-w-[500px] opacity-100"
            }`}>
              Sri Siddhi Academy of Art
            </span>
          </Link>

          {/* Desktop Links (Disappears when collapsed) */}
          <div className={`items-center gap-2 transition-all duration-500 overflow-hidden ${
            isCollapsed ? "hidden max-w-0 opacity-0" : "hidden md:flex max-w-[800px] opacity-100"
          }`}>
            <Link href="/music" className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-900/5 hover:text-amber-700">
              Music
            </Link>
            <Link href="/dance" className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-900/5 hover:text-amber-700">
              Dance
            </Link>
            <Link href="/tabla" className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-900/5 hover:text-amber-700">
              Tabla
            </Link>
            <Link href="/fine-arts" className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-900/5 hover:text-amber-700">
              Fine Arts
            </Link>
            <Link href="/contacts" className="ml-2 rounded-full bg-gradient-to-r from-amber-700 to-orange-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-amber-700/20 transition hover:scale-[1.02] hover:from-amber-800 hover:to-orange-700">
              Inquire
            </Link>
          </div>

          {/* Mobile Menu Button (Disappears when collapsed) */}
          <div className={`md:hidden flex items-center transition-all duration-500 overflow-hidden ${
            isCollapsed ? "hidden max-w-0 opacity-0" : "flex opacity-100"
          }`}>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-full p-2.5 text-amber-900 transition hover:bg-slate-900/5 focus:outline-none"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ORIGINAL MOBILE MENU (UNSCROLLED HOME ONLY) */}
      {isMobileMenuOpen && !isCollapsed && (
        <div className="absolute left-3 right-3 top-[5.75rem] md:hidden pointer-events-auto">
          <div className="rounded-3xl border border-white/80 bg-white/95 p-4 shadow-[0_20px_45px_rgba(15,23,42,0.16)] backdrop-blur-xl animate-fade-up-delayed">
            <div className="flex flex-col gap-2">
              <Link href="/music" onClick={() => setIsMobileMenuOpen(false)} className="rounded-2xl px-4 py-3 text-base font-semibold text-slate-700 transition hover:bg-slate-900/5 hover:text-amber-700">
                Music
              </Link>
              <Link href="/dance" onClick={() => setIsMobileMenuOpen(false)} className="rounded-2xl px-4 py-3 text-base font-semibold text-slate-700 transition hover:bg-slate-900/5 hover:text-amber-700">
                Dance
              </Link>
              <Link href="/tabla" onClick={() => setIsMobileMenuOpen(false)} className="rounded-2xl px-4 py-3 text-base font-semibold text-slate-700 transition hover:bg-slate-900/5 hover:text-amber-700">
                Tabla
              </Link>
              <Link href="/fine-arts" onClick={() => setIsMobileMenuOpen(false)} className="rounded-2xl px-4 py-3 text-base font-semibold text-slate-700 transition hover:bg-slate-900/5 hover:text-amber-700">
                Fine Arts
              </Link>
              <Link href="/contacts" onClick={() => setIsMobileMenuOpen(false)} className="mt-2 rounded-full bg-gradient-to-r from-amber-700 to-orange-600 px-5 py-3 text-center font-semibold text-white shadow-lg shadow-amber-700/20">
                Inquire
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* NEW SCROLLED/SUBPAGE FLOATING MENU */}
      <div
        className={`absolute left-3 sm:left-4 top-[5.5rem] w-64 origin-top-left overflow-hidden rounded-3xl border border-white/80 bg-white/95 shadow-[0_20px_45px_rgba(15,23,42,0.16)] backdrop-blur-xl transition-all duration-300 ${
          isCollapsed && isScrolledMenuOpen ? "pointer-events-auto scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-1 p-3">
          
          <Link
            href="/"
            onClick={(e) => {
              if (isHomePage) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
              setIsScrolledMenuOpen(false);
            }}
            className="rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 transition-colors hover:bg-slate-900/5 hover:text-amber-700"
          >
            SSAA
          </Link>

          <div className="flex flex-col">
            <button
              onClick={() => setCoursesOpen(!coursesOpen)}
              className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 transition-colors hover:bg-slate-900/5 hover:text-amber-700"
            >
              Courses
              <span className={`text-xs transition-transform duration-300 ${coursesOpen ? "rotate-180" : "rotate-0"}`}>
                ▼
              </span>
            </button>
            <div className={`flex flex-col overflow-hidden transition-all duration-300 ${coursesOpen ? "max-h-[250px] opacity-100" : "max-h-0 opacity-0"}`}>
              <Link href="/music" onClick={() => setIsScrolledMenuOpen(false)} className="mx-2 rounded-xl px-6 py-2 text-sm font-semibold text-slate-500 transition-colors hover:bg-slate-900/5 hover:text-amber-700">Classical Music</Link>
              <Link href="/dance" onClick={() => setIsScrolledMenuOpen(false)} className="mx-2 rounded-xl px-6 py-2 text-sm font-semibold text-slate-500 transition-colors hover:bg-slate-900/5 hover:text-amber-700">Classical Dance</Link>
              <Link href="/tabla" onClick={() => setIsScrolledMenuOpen(false)} className="mx-2 rounded-xl px-6 py-2 text-sm font-semibold text-slate-500 transition-colors hover:bg-slate-900/5 hover:text-amber-700">Tabla & Percussions</Link>
              <Link href="/fine-arts" onClick={() => setIsScrolledMenuOpen(false)} className="mx-2 rounded-xl px-6 py-2 text-sm font-semibold text-slate-500 transition-colors hover:bg-slate-900/5 hover:text-amber-700">Fine Arts</Link>
            </div>
          </div>

          <Link 
            href="/#about" 
            onClick={() => setIsScrolledMenuOpen(false)} 
            className="rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 transition-colors hover:bg-slate-900/5 hover:text-amber-700"
          >
            About Us
          </Link>

          <Link 
            href="/contacts" 
            onClick={() => setIsScrolledMenuOpen(false)} 
            className="rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 transition-colors hover:bg-slate-900/5 hover:text-amber-700"
          >
            Contact Us
          </Link>
          
        </div>
      </div>
      
    </nav>
  );
}