"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 pt-3">
      <div className="mx-auto max-w-7xl rounded-3xl border border-white/70 bg-white/78 backdrop-blur-xl shadow-[0_18px_55px_rgba(15,23,42,0.12)] animate-fade-up">
        <div className="flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex flex-row flex-nowrap items-center gap-3 group shrink-0"
          >
            <img
              src="/logo.png"
              alt="Sri Siddhi Academy Logo"
              className="h-12 w-auto object-contain shrink-0 transition-transform duration-300 group-hover:scale-105"
            />

            <span className="hidden whitespace-nowrap text-xl font-extrabold tracking-tight text-stone-900 sm:block lg:text-2xl">
              Sri Siddhi Academy of Art
            </span>
          </Link>

          <div className="hidden items-center gap-2 md:flex">
            <Link
              href="/music"
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-900/5 hover:text-amber-700"
            >
              Music
            </Link>
            <Link
              href="/dance"
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-900/5 hover:text-amber-700"
            >
              Dance
            </Link>
            <Link
              href="/tabla"
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-900/5 hover:text-amber-700"
            >
              Tabla
            </Link>
            <Link
              href="/fine-arts"
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-900/5 hover:text-amber-700"
            >
              Fine Arts
            </Link>
            <Link
              href="/contacts"
              className="ml-2 rounded-full bg-gradient-to-r from-amber-700 to-orange-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-amber-700/20 transition hover:scale-[1.02] hover:from-amber-800 hover:to-orange-700"
            >
              Inquire
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-full p-2.5 text-amber-900 transition hover:bg-slate-900/5 focus:outline-none"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute left-3 right-3 top-[5.75rem] md:hidden">
          <div className="rounded-3xl border border-white/80 bg-white/95 p-4 shadow-[0_20px_45px_rgba(15,23,42,0.16)] backdrop-blur-xl animate-fade-up-delayed">
            <div className="flex flex-col gap-2">
              <Link
                href="/music"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-semibold text-slate-700 transition hover:bg-slate-900/5 hover:text-amber-700"
              >
                Music
              </Link>
              <Link
                href="/dance"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-semibold text-slate-700 transition hover:bg-slate-900/5 hover:text-amber-700"
              >
                Dance
              </Link>
              <Link
                href="/tabla"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-semibold text-slate-700 transition hover:bg-slate-900/5 hover:text-amber-700"
              >
                Tabla
              </Link>
              <Link
                href="/fine-arts"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-semibold text-slate-700 transition hover:bg-slate-900/5 hover:text-amber-700"
              >
                Fine Arts
              </Link>
              <Link
                href="/contacts"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 rounded-full bg-gradient-to-r from-amber-700 to-orange-600 px-5 py-3 text-center font-semibold text-white shadow-lg shadow-amber-700/20"
              >
                Inquire
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
