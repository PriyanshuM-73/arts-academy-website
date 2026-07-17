"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function FineArtsPage() {
  const classPhotos = [
    "https://res.cloudinary.com/tbvdoty6/image/upload/v1783972055/Fcar1_lwvswh.jpg",
    "https://res.cloudinary.com/tbvdoty6/image/upload/v1783972060/Fcar3_nwlz6o.jpg",
    "https://res.cloudinary.com/tbvdoty6/image/upload/v1783972056/Fcar5_bsgzjn.jpg",
    "https://res.cloudinary.com/tbvdoty6/image/upload/v1783972056/Fcar4_zheyq6.jpg",
    "https://res.cloudinary.com/tbvdoty6/image/upload/v1783972057/Fcar6_ild8bb.jpg",
    "https://res.cloudinary.com/tbvdoty6/image/upload/v1783972056/Fcar2_m2276l.jpg"
  ];

  const extendedPhotos = [...classPhotos, classPhotos[0], classPhotos[1]];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleTransitionEnd = () => {
    if (currentIndex === classPhotos.length) {
      setIsTransitioning(false);
      setCurrentIndex(0);
    }
  };

  return (
    // CYAN BACKGROUND: bg-cyan-500 at 50% opacity
    <main className="page-shell min-h-screen bg-[linear-gradient(180deg,rgba(6,182,212,0.16),rgba(247,252,252,0.96))] pt-36 pb-20 relative">
      {/* WATERMARK: Brushes/Paint at 50% opacity, fixed behind content */}
      <div className="fixed inset-0 flex items-center justify-center -z-10 opacity-50 pointer-events-none">
        <img src="/Ft.png" alt="" className="w-1/2 max-w-lg object-contain" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10 text-center">
          Fine Arts & Painting
        </h1>

        <div className="section-surface-strong p-6 sm:p-8 md:p-12 rounded-4xl mb-12 animate-fade-up">
          <h2 className="text-2xl font-semibold text-teal-800 mb-4">
            Curriculum Overview
          </h2>
          <p className="text-gray-700 mb-8 text-lg leading-relaxed">
            Our Fine Arts classes focus on the fundamentals of drawing, color
            theory, and creative expression. We start with simple lines and
            basic shapes, guiding you step-by-step toward advanced compositions,
            landscaping, and classical painting styles.
          </p>

          <div className="bg-teal-50/50 border border-teal-100 p-6 md:p-8 rounded-2xl mb-10">
            <h3 className="text-xl font-bold text-teal-900 mb-6">
              Stages of Learning
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-x-4 gap-y-6">
              <div className="text-gray-900 font-bold flex items-start gap-2 whitespace-nowrap">
                <span className="text-teal-700">•</span> Prarambhik Part I &
                II(PPI & PPII):
              </div>
              <div className="text-gray-700 leading-relaxed">
                This starting level introduces beginners to the core
                fundamentals of sketching and painting. Students learn basic
                drawing rules, geometric shapes, and fundamental color theory,
                including primary and secondary colors. The practical focus is
                on freehand line drawing of nature, simple objects, and
                still-life to build hand-eye coordination.
              </div>
              <div className="text-gray-900 font-bold flex items-start gap-2 whitespace-nowrap">
                <span className="text-teal-700">•</span> Bhusan (1st, 2nd and
                3rd year):
              </div>
              <div className="text-gray-700 leading-relaxed">
                This intermediate stage brings more technical depth and creative
                variety to your artwork. Students explore rules of perspective,
                color wheel properties, and major historical art traditions from
                both Indian and Western lineages. It helps artists develop
                control through pencil shading, live outdoor landscaping,
                still-life compositions, and working with diverse color mediums.
              </div>
              <div className="text-gray-900 font-bold flex items-start gap-2 whitespace-nowrap">
                <span className="text-teal-700">•</span> Visharad I & II(4th and
                5th year):
              </div>
              <div className="text-gray-700 leading-relaxed">
                This advanced level focuses on achieving complete artistic
                mastery and professional-level execution. It involves the deep
                study of global art movements like Impressionism or Cubism,
                alongside the history and works of prominent Indian masters.
                Artists learn to work directly from live models for detailed
                anatomy sketches, advanced portrait painting, and commercial
                layout designs.
              </div>
            </div>
          </div>

          {/* THE FIX: Mobile Responsive Carousel Width */}
          <div className="overflow-hidden relative w-full rounded-xl bg-gray-50/50 border border-gray-100 p-2">
            <div
              className={`flex [--slide-width:100%] md:[--slide-width:50%] ${isTransitioning ? "transition-transform duration-1000 ease-in-out" : ""}`}
              style={{
                transform: `translateX(calc(-${currentIndex} * var(--slide-width)))`,
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedPhotos.map((photo, index) => (
                <div key={index} className="w-(--slide-width) shrink-0 px-2">
                  <img
                    src={photo}
                    className="w-full h-64 md:h-72 object-cover rounded-lg shadow-sm"
                    alt={`Class snapshot ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* THE FIX: Teacher/Sticker Layout restructured for mobile */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-20 max-w-5xl mx-auto py-12">
          <div className="flex flex-col items-center md:items-start w-full md:w-1/3">
            <div className="w-48 sm:w-56 aspect-[3/4] overflow-hidden border-4 border-amber-50 shadow-md rounded-2xl mb-6 hover-lift">
              <img
                src="/At.jpeg"
                alt="Teacher"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold text-gray-900 mb-1">
                Jyotsnarani Nanda
              </h3>
              <h4 className="text-amber-700 font-bold tracking-wide uppercase text-sm">
                Fine Arts Teacher
              </h4>
            </div>
          </div>

          {/* THE FIX: Removed Absolute positioning so it sits naturally above the button on phones */}
          <div className="flex-1 w-full flex justify-center md:justify-end items-center mt-8 md:mt-0 relative z-0">
            <div className="w-56 sm:w-64 md:w-80 rotate-3 hover:rotate-0 transition-transform duration-500 ease-out cursor-pointer animate-float-soft">
              <img
                src="/Ast.jpeg"
                alt="Instrument Sticker"
                className="w-full h-auto drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center mt-12 mb-16 relative z-10">
        <Link
          href="/contacts"
          className="bg-gradient-to-r from-amber-700 to-orange-600 hover:from-amber-800 hover:to-orange-700 text-white text-lg font-extrabold py-3 px-10 rounded-full shadow-lg shadow-amber-900/20 transition-transform duration-300 hover:scale-105 animate-shimmer"
        >
          Contact Us
        </Link>
      </div>
    </main>
  );
}
