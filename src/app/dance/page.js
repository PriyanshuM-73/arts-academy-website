"use client"; 
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function DancePage() {
  
  // --- CAROUSEL DATA & LOGIC ---
  const classPhotos = [
    "https://res.cloudinary.com/dodlb9hdp/image/upload/q_auto/f_auto/v1781535319/Dcar3_frombv.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/q_auto/f_auto/v1781535318/Dcar2_bbbvci.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/q_auto/f_auto/v1781535317/Dcar1_ssd8ft.jpg"
    // Add more Cloudinary links here as you upload them!
  ];

  // 1. The Trick: Copy the first two photos to the end of the line
  const extendedPhotos = [...classPhotos, classPhotos[0], classPhotos[1]];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // 2. The Timer: Keeps moving forward
  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true); // Ensure sliding animation is ON
      setCurrentIndex((prev) => prev + 1);
    }, 3000); 
    return () => clearInterval(timer);
  }, []);

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
          Classical Dance
        </h1>
        
        {/* 1. CURRICULUM & PHOTOS BOX */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 mb-12">
          
          <h2 className="text-2xl font-semibold text-rose-800 mb-4">Curriculum Overview</h2>
          <p className="text-gray-700 mb-8 text-lg leading-relaxed">
            Our Odissi dance classes focus on grace, rhythm, and clear storytelling. We start with simple footwork and hand gestures, moving step-by-step toward traditional items while helping you build both physical confidence and artistic expression.
          </p>
          
          {/* Stages of Learning */}
          <div className="bg-rose-50/50 border border-rose-100 p-6 md:p-8 rounded-2xl mb-10">
             <h3 className="text-xl font-bold text-rose-900 mb-6">Stages of Learning</h3>
             <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-x-4 gap-y-6">
               <div className="text-gray-900 font-bold flex items-start gap-2 whitespace-nowrap">
                 <span className="text-rose-700">•</span> Prarambhik Part I & II(PPI & PPII):
               </div>
               <div className="text-gray-700 leading-relaxed">
                 This starting level introduces beginners to the essential foundations of Odissi dance. Students learn basic body postures like Chouka and Tribhangi , primary footwork , simple rhythms , and single-hand gestures. The focus is on building core physical flexibility and mastering entry-level items like Bhumi Pranam and Mangalacharan.
               </div>
               <div className="text-gray-900 font-bold flex items-start gap-2 whitespace-nowrap">
                 <span className="text-rose-700">•</span> Bhusan (1st, 2nd and 3rd year):
               </div>
               <div className="text-gray-700 leading-relaxed">
                 This intermediate stage brings more depth and technical variety to the training. Students explore combined hand gestures , new rhythmic patterns , and more complex traditional dances like Batu and Pallavi. It helps dancers develop steady control and learn expressiveness through storytelling and basic Abhinaya.
               </div>
               <div className="text-gray-900 font-bold flex items-start gap-2 whitespace-nowrap">
                 <span className="text-rose-700">•</span> Visharad I & II(4th and 5th year):
               </div>
               <div className="text-gray-700 leading-relaxed">
                 This advanced level focuses on achieving true artistic mastery and comprehensive performance skill. It involves deep study of emotional expressions (Abhinaya) across various Rasas , complex classical items, and dance-drama compositions. By this stage, students learn advanced traditional theory and are fully prepared for professional solo stage performances.
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
                src="/Dt.jpeg" 
                alt="Teacher Portrait" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold text-gray-900 mb-1">Smita Pani</h3>
              <h4 className="text-amber-700 font-bold tracking-wide uppercase text-sm">Dance Teacher</h4>
            </div>
          </div>

          {/* Right Column: Sticker Area */}
          <div className="flex-1 w-full relative h-75 md:h-auto">
            
            {/* Single Instrument Sticker - Anchored to the top right corner */}
            <div className="absolute top-0 right-0 w-64 md:w-80 rotate-3 hover:rotate-0 transition-transform duration-500 ease-out cursor-pointer">
              <img 
                src="/Dst.png" 
                alt="Instrument Sticker" 
                className="w-full h-auto drop-shadow-xl" 
              />
            </div>
            
          </div>
        </div>

      </div>
      {/* Contact Us Button - Sits at the bottom of the page content */}
      <div className="w-full flex justify-center mt-12 mb-16">
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