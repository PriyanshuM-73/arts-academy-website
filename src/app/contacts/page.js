"use client";
import Link from "next/link";

export default function ContactPage() {
  return (
    // GOLDEN HUE: bg-amber-500 at 25% opacity
    <main className="page-shell min-h-screen bg-[linear-gradient(180deg,rgba(8,145,178,0.1),rgba(250,252,253,0.96))] pt-36 pb-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Contact Details
          </h1>
          <div className="w-24 h-1 bg-amber-700 mx-auto rounded"></div>
        </div>

        {/* Contact Card */}
        <div className="section-surface-strong rounded-4xl p-6 sm:p-8 md:p-12 animate-fade-up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* LEFT COLUMN: Digital Contact */}
            <div className="space-y-8 border-b md:border-b-0 md:border-r border-gray-100 pb-8 md:pb-0 md:pr-12">
              {/* Phone 1 (Call Only) */}
              <div className="flex items-start gap-4">
                <div className="text-xl bg-gray-100 p-3 rounded-full shadow-sm w-12 h-12 flex items-center justify-center shrink-0">
                  📞
                </div>
                <div className="pt-1">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">
                    Call
                  </p>
                  <a
                    href="tel:+919861039111"
                    className="text-lg font-bold text-gray-900 hover:text-amber-700 transition"
                  >
                    +91 9861039111
                  </a>
                </div>
              </div>

              {/* Phone 2 (WhatsApp) */}
              <div className="flex items-start gap-4">
                <div className="text-xl bg-green-50 p-3 rounded-full shadow-sm w-12 h-12 flex items-center justify-center shrink-0">
                  💬
                </div>
                <div className="pt-1">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">
                    WhatsApp
                  </p>
                  <a
                    href="https://wa.me/919439795015"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold text-gray-900 hover:text-amber-700 transition"
                  >
                    +91 9439795015
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="text-xl bg-amber-50 p-3 rounded-full shadow-sm w-12 h-12 flex items-center justify-center shrink-0">
                  ✉️
                </div>
                <div className="pt-1">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">
                    Email Us
                  </p>
                  <a
                    href="mailto:srisiddhiacademy@gmail.com"
                    className="text-lg font-bold text-gray-900 hover:text-amber-700 transition break-all"
                  >
                    srisiddhiacademy@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: VISIT US */}
            <div className="flex flex-col">
              <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center mb-4">
                <span className="text-red-500 text-xl">📍</span>
              </div>

              <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">
                Visit Us
              </p>

              {/* Address 1: Classes */}
              <div className="mb-6">
                <p className="text-xs font-bold text-gray-400 uppercase mb-1">
                  Classes
                </p>
                <Link
                  href="https://maps.google.com/?q=Sri+Sri+Ravishankar+Vidya+Mandir,+Sector+1,+Rourkela"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 text-lg hover:text-red-600 hover:underline transition-all duration-200 block leading-relaxed"
                >
                  Sri Sri Ravishankar Vidya Mandir,
                  <br />
                  Sector 1, Rourkela, 769008
                </Link>
              </div>

              {/* Address 2: Office */}
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase mb-1">
                  Office
                </p>
                <Link
                  href="https://maps.app.goo.gl/ZJtQETkxJntkj6DW7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 text-lg hover:text-red-600 hover:underline transition-all duration-200 block leading-relaxed"
                >
                  G/124, Sector 1,
                  <br />
                  Rourkela, 769008
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
