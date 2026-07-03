"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-amber-50/80 backdrop-blur-md border-b border-amber-100/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Left Side: Logo & Home Link */}
          <Link href="/" className="flex flex-row flex-nowrap items-center gap-3 group shrink-0">
            
            {/* The Logo Image */}
            <img 
              src="/logo.png" 
              alt="Sri Siddhi Academy Logo" 
              className="h-12 w-auto object-contain shrink-0 group-hover:scale-105 transition-transform duration-300" 
            />
            
            {/* The Text */}
            <span className="font-extrabold text-xl lg:text-2xl text-amber-900 tracking-tight whitespace-nowrap hidden sm:block">
              Sri Siddhi Academy of Art
            </span>
            
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/music" className="text-gray-700 hover:text-amber-600 font-medium transition">Music</Link>
            <Link href="/dance" className="text-gray-700 hover:text-amber-600 font-medium transition">Dance</Link>
            <Link href="/tabla" className="text-gray-700 hover:text-amber-600 font-medium transition">Tabla</Link>
            <Link href="/fine-arts" className="text-gray-700 hover:text-amber-600 font-medium transition">Fine Arts</Link>
            
            {/* Query Button */}
            <Link href="/contacts" className="bg-amber-700 text-white px-5 py-2 rounded-full font-medium hover:bg-amber-800 transition shadow-sm">
              Inquire
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-amber-900 focus:outline-none p-2"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full left-0">
          <div className="px-4 pt-2 pb-6 flex flex-col space-y-4">
            <Link href="/music" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 font-medium text-lg hover:text-amber-600 py-2">Music</Link>
            <Link href="/dance" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 font-medium text-lg hover:text-amber-600 py-2">Dance</Link>
            <Link href="/tabla" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 font-medium text-lg hover:text-amber-600 py-2">Tabla</Link>
            <Link href="/fine-arts" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 font-medium text-lg hover:text-amber-600 py-2">Fine Arts</Link>
            <Link href="/contacts" onClick={() => setIsMenuOpen(false)} className="block bg-amber-700 text-white text-center px-5 py-3 rounded-full font-medium mt-4 shadow-sm">
              Inquire
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}