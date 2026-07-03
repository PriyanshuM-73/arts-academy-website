"use client"; 

import { useState, useEffect } from 'react';

export default function MusicPage() {
  
  // --- CAROUSEL DATA & LOGIC ---
  const classPhotos = [
    "https://res.cloudinary.com/dodlb9hdp/image/upload/q_auto/f_auto/v1781535327/Mcar3_p5bunv.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/q_auto/f_auto/v1781535321/Mcar2_ppfb1f.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/q_auto/f_auto/v1781535320/Mcar1_bxihd9.jpg"
  ];

  // 1. The Trick: Copy the first two photos to the end of the line
  const extendedPhotos = [...classPhotos, classPhotos[0], classPhotos[1]];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // 2. The Timer: Keeps moving forward (but pauses when tab is hidden)
  useEffect(() => {
    let timer;

    const startTimer = () => {
      timer = setInterval(() => {
        setIsTransitioning(true); // Ensure sliding animation is ON
        // Safety check: Don't let the index run away past the teleport point
        setCurrentIndex((prev) => (prev >= classPhotos.length ? prev : prev + 1));
      }, 3000);
    };

    // Pause timer when changing apps/tabs, resume when back
    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearInterval(timer);
      } else {
        startTimer();
      }
    };

    // Start timer on initial load
    startTimer();
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearInterval(timer);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [classPhotos.length]);

  // 3. The Teleport: Fires exactly when the sliding animation finishes
  const handleTransitionEnd = () => {
    // If we have slid all the way to our secret copied photos...
    if (currentIndex === classPhotos.length) {
      setIsTransitioning(false); // Turn OFF the smooth sliding
      setCurrentIndex(0);        // Instantly teleport back to the real beginning
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10 text-center">
          Classical Vocals
        </h1>
        
        {/* 1. CURRICULUM & PHOTOS BOX */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 mb-12">
          
          <h2 className="text-2xl font-semibold text-amber-800 mb-4">Curriculum Overview</h2>
          <p className="text-gray-700 mb-8 text-lg leading-relaxed">
            Our Institute currently offers two Vocal classical learning options: Hindustani and Odissi Classical. The course starts with Alankars and naturally progresses into Raags. Two classes are held every week that focuses on Bhajans and classical music separately for all-round development of the student.
          </p>
          
          {/* Stages of Learning */}
          <div className="bg-amber-50/50 border border-amber-100 p-6 md:p-8 rounded-2xl mb-10">
             <h3 className="text-xl font-bold text-amber-900 mb-6">Stages of Learning</h3>
             <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-x-4 gap-y-6">
               <div className="text-gray-900 font-bold flex items-start gap-2 whitespace-nowrap">
                 <span className="text-amber-700">•</span> Prarambhik Part I & II(PPI & PPII):
               </div>
               <div className="text-gray-700 leading-relaxed">
                 This is the starting level where students learn the basics of classical music. It covers simple raags, alankars, and basic rhythms. This stage is all about building a strong and clear foundation for beginners to start their training.
               </div>
               <div className="text-gray-900 font-bold flex items-start gap-2 whitespace-nowrap">
                 <span className="text-amber-700">•</span> Bhusan (1st, 2nd and 3rd year):
               </div>
               <div className="text-gray-700 leading-relaxed">
                 Bhushan is an intermediate stage that adds more depth to your learning. Students explore a wider variety of raags and start focusing on performance details. It helps you develop better control and a much deeper understanding of classical music.
               </div>
               <div className="text-gray-900 font-bold flex items-start gap-2 whitespace-nowrap">
                 <span className="text-amber-700">•</span> Visharad I & II(4th and 5th year):
               </div>
               <div className="text-gray-700 leading-relaxed">
                 Visharad is the advanced level where students work toward true mastery. It involves learning complex raags and detailed theory in a professional way. By this stage, students are prepared to perform with confidence and high-level expert skill.
               </div>
             </div>
          </div>

          {/* Photos Directly Below Stages of Learning */}
          <div className="overflow-hidden relative w-full rounded-xl bg-gray-50 border border-gray-100 p-2">
            <div 
              className={`flex ${isTransitioning ? 'transition-transform duration-1000 ease-in-out' : ''}`}
              style={{ transform: `translateX(-${currentIndex * 50}%)` }}
              onTransitionEnd={handleTransitionEnd}
            >
               {/* We map through the NEW extended array here */}
               {extendedPhotos.map((photo, index) => (
                 <div key={index} className="w-1/2 shrink-0 px-2">
                   <img src={photo} className="w-full h-48 md:h-72 object-cover rounded-lg shadow-sm" alt={`Class snapshot ${index + 1}`} />
                 </div>
               ))}
            </div>
          </div>

        </div>

        {/* Teacher Profile Section */}
        {/* Changed gap-8 to gap-20 to push the columns further apart */}
        <div className="flex flex-col md:flex-row items-start gap-20 max-w-5xl mx-auto py-12">
  
          {/* Left Column: Photo + Text */}
          <div className="flex flex-col items-center md:items-start w-full md:w-1/3">
            <div className="w-56 aspect-3/4 overflow-hidden border-4 border-amber-50 shadow-md rounded-lg mb-12">
              <img 
                src="/Mt.JPG" 
                alt="Teacher Portrait" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold text-gray-900 mb-1">Prafulla Kumar Mangal</h3>
              <h4 className="text-amber-700 font-bold tracking-wide uppercase text-sm">Music Teacher</h4>
            </div>
          </div>

          {/* Right Column: Sticker Area */}
          <div className="flex-1 w-full relative h-75 md:h-auto">
            
            {/* Single Instrument Sticker - Anchored to the top right corner */}
            <div className="absolute top-0 right-0 w-64 md:w-80 rotate-3 hover:rotate-0 transition-transform duration-500 ease-out cursor-pointer">
              <img 
                src="/Mst.jpeg" 
                alt="Instrument Sticker" 
                className="w-full h-auto drop-shadow-xl" 
              />
            </div>
            
          </div>
        </div>
      </div>
    </main>
  );
}