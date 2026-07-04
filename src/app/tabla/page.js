"use client"; 
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function TablaPage() {
  
  const classPhotos = [
    "https://images.unsplash.com/photo-1658428468748-18e4dddf99a7?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1593697821252-0c9137d9fc45?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1000&auto=format&fit=crop"
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
    // MUD BROWN BACKGROUND: bg-[#70543E] at 20% opacity
    <main className="min-h-screen bg-[#70543E]/10 pt-36 pb-20 relative">
      
      {/* WATERMARK: Tabla at 60% opacity, fixed behind content */}
      <div className="fixed inset-0 flex items-center justify-center -z-10 opacity-[0.6] pointer-events-none">
         <img src="/Tw.png" alt="" className="w-1/2 max-w-lg object-contain" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <h1 className="text-4xl md:text-5xl font-bold text-orange-500 mb-10 text-center">
          Tabla & Percussions
        </h1>
        
        <div className="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-sm border border-white/50 mb-12">
          
          <h2 className="text-2xl font-semibold text-stone-800 mb-4">Curriculum Overview</h2>
          <p className="text-gray-800 mb-8 text-lg leading-relaxed">
            Our Tabla classes focus on the fundamentals of rhythm, timing, and hand technique. We start with basic finger strokes and simple beats, guiding you step-by-step toward solo performances and traditional accompaniment styles.
          </p>
          
          <div className="bg-stone-50/70 border border-stone-200 p-6 md:p-8 rounded-2xl mb-10">
             <h3 className="text-xl font-bold text-stone-900 mb-6">Stages of Learning</h3>
             <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-x-4 gap-y-6">
               <div className="text-gray-900 font-bold flex items-start gap-2 whitespace-nowrap">
                 <span className="text-stone-700">•</span> Prarambhik Part I & II(PPI & PPII):
               </div>
               <div className="text-gray-700 leading-relaxed">
                 This starting level introduces beginners to the essential foundations of rhythm and Tabla playing. Students learn basic hand strokes, the structural parts of the instrument, and primary rhythm cycles like Teental, Dadra, and Kaharwa.
               </div>
               <div className="text-gray-900 font-bold flex items-start gap-2 whitespace-nowrap">
                 <span className="text-stone-700">•</span> Bhusan (1st, 2nd and 3rd year):
               </div>
               <div className="text-gray-700 leading-relaxed">
                 This intermediate stage brings more depth and technical variety. Students explore a wider range of taals like Jhaptal, Rupak, and Ektal while learning to change playing speeds smoothly.
               </div>
               <div className="text-gray-900 font-bold flex items-start gap-2 whitespace-nowrap">
                 <span className="text-stone-700">•</span> Visharad I & II(4th and 5th year):
               </div>
               <div className="text-gray-700 leading-relaxed">
                 This advanced level focuses on achieving true artistic mastery and comprehensive solo performance skills. It involves the deep study of rare rhythmic structures, intricate classical compositions, and the unique playing styles of traditional lineages.
               </div>
             </div>
          </div>

          <div className="overflow-hidden relative w-full rounded-xl bg-gray-50/50 border border-gray-100 p-2">
            <div 
              className={`flex ${isTransitioning ? 'transition-transform duration-1000 ease-in-out' : ''}`}
              style={{ transform: `translateX(-${currentIndex * 50}%)` }}
              onTransitionEnd={handleTransitionEnd}
            >
               {extendedPhotos.map((photo, index) => (
                 <div key={index} className="w-1/2 shrink-0 px-2">
                   <img src={photo} className="w-full h-48 md:h-72 object-cover rounded-lg shadow-sm" alt="Class snapshot" />
                 </div>
               ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start gap-20 max-w-5xl mx-auto py-12">
          <div className="flex flex-col items-center md:items-start w-full md:w-1/3">
            <div className="w-56 aspect-3/4 overflow-hidden border-4 border-amber-50 shadow-md rounded-lg mb-12">
              <img src="/Tt.jpeg" alt="Teacher" className="w-full h-full object-cover" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold text-red-400 mb-1">Nrusingha Charan Sahoo</h3>
              <h4 className="text-amber-500 font-bold tracking-wide uppercase text-sm">Tabla Teacher</h4>
            </div>
          </div>

          <div className="flex-1 w-full relative">
            <div className="absolute top-0 right-0 w-64 md:w-80 rotate-3 hover:rotate-0 transition-transform duration-500 ease-out cursor-pointer">
              <img src="/Tst.jpeg" alt="Instrument Sticker" className="w-full h-auto drop-shadow-xl" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full flex justify-center mt-12 mb-16 relative z-10">
        <Link 
          href="/contacts"
          className="bg-red-600 hover:bg-red-700 text-white text-lg font-extrabold py-3 px-10 rounded-full shadow-md transition-transform duration-300 hover:scale-105"
        >
          Contact Us
        </Link>
      </div>
    </main>
  );
}
