"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function MusicPage() {
  const classPhotos = [
    "https://res.cloudinary.com/tbvdoty6/image/upload/v1783972057/Mcar3_fisfoa.jpg",
    "https://res.cloudinary.com/tbvdoty6/image/upload/v1783972057/Mcar2_bp3k6u.jpg",
    "https://res.cloudinary.com/tbvdoty6/image/upload/v1783972057/Mcar1_gugz2i.jpg",
    "https://res.cloudinary.com/tbvdoty6/image/upload/v1783972061/Mcar4_umhjuf.jpg",
    "https://res.cloudinary.com/tbvdoty6/image/upload/v1783972057/Mcar5_tlfjp9.jpg",
    "https://res.cloudinary.com/tbvdoty6/image/upload/v1783972058/Mcar6_knmgbt.jpg"
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
    <main className="page-shell min-h-screen bg-[linear-gradient(180deg,rgba(123,63,0,0.18),rgba(255,248,240,0.94))] pt-36 pb-20 relative">
      {/* WATERMARK: Harmonium now enlarged to w-3/4 and max-w-4xl */}
      <div className="fixed inset-0 flex items-center justify-center -z-10 opacity-[0.6] pointer-events-none">
        <img src="/Hw.png" alt="" className="w-3/4 max-w-4xl object-contain" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10 text-center">
          Classical Vocals
        </h1>

        <div className="section-surface-strong p-6 sm:p-8 md:p-12 rounded-4xl mb-12 animate-fade-up">
          <h2 className="text-2xl font-semibold text-amber-800 mb-4">
            Curriculum Overview
          </h2>
          <p className="text-gray-800 mb-8 text-lg leading-relaxed">
            Our Institute currently offers two Vocal classical learning options:
            Hindustani and Odissi Classical. The course starts with Alankars and
            naturally progresses into Raags. Two classes are held every week
            that focuses on Bhajans and classical music separately for all-round
            development of the student.
          </p>

          <div className="bg-amber-50/90 border border-amber-100 p-6 md:p-8 rounded-2xl mb-10">
            <h3 className="text-xl font-bold text-amber-900 mb-6">
              Stages of Learning
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-x-4 gap-y-6">
              <div className="text-gray-900 font-bold flex items-start gap-2 whitespace-nowrap">
                <span className="text-amber-700">•</span> Prarambhik Part I &
                II(PPI & PPII):
              </div>
              <div className="text-gray-700 leading-relaxed">
                This is the starting level where students learn the basics of
                classical music. It covers simple raags, alankars, and basic
                rhythms.
              </div>
              <div className="text-gray-900 font-bold flex items-start gap-2 whitespace-nowrap">
                <span className="text-amber-700">•</span> Bhusan (1st, 2nd and
                3rd year):
              </div>
              <div className="text-gray-700 leading-relaxed">
                Bhushan is an intermediate stage that adds more depth to your
                learning. Students explore a wider variety of raags and start
                focusing on performance details.
              </div>
              <div className="text-gray-900 font-bold flex items-start gap-2 whitespace-nowrap">
                <span className="text-amber-700">•</span> Visharad I & II(4th
                and 5th year):
              </div>
              <div className="text-gray-700 leading-relaxed">
                Visharad is the advanced level where students work toward true
                mastery. It involves learning complex raags and detailed theory.
              </div>
            </div>
          </div>

          {/* THE FIX: Mobile Responsive Carousel Width */}
          <div className="overflow-hidden relative w-full rounded-xl bg-gray-50/90 border border-gray-100 p-2">
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
                    alt="Class snapshot"
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
                src="/Mt.JPG"
                alt="Teacher"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold text-gray-900 mb-1">
                Prafulla Kumar Mangal
              </h3>
              <h4 className="text-amber-700 font-bold tracking-wide uppercase text-sm">
                Music Teacher
              </h4>
            </div>
          </div>

          {/* THE FIX: Removed Absolute positioning so it sits naturally above the button on phones */}
          <div className="flex-1 w-full flex justify-center md:justify-end items-center mt-8 md:mt-0 relative z-0">
            <div className="w-56 sm:w-64 md:w-80 rotate-3 hover:rotate-0 transition-transform duration-500 ease-out cursor-pointer animate-float-soft">
              <img
                src="/Mst.jpeg"
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
