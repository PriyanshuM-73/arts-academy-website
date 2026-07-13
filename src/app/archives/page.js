"use client";

import { useState } from "react";

// 1. We create a mini-component just for the player so each video remembers if it was clicked
function CustomVideoPlayer({ video }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="flex flex-col">
      <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg mb-5 bg-gray-900">
        
        {!isPlaying ? (
          // THE FAKE PLAYER (Shows before clicking)
          <div 
            className="absolute inset-0 cursor-pointer group"
            onClick={() => setIsPlaying(true)}
          >
            {/* We automatically fetch the high-res thumbnail directly from YouTube's hidden database */}
            <img 
              src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`} 
              alt={video.title}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
            />
            
            {/* Our completely custom, non-YouTube Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-[#d97706]/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#d97706] transition-all duration-300">
                {/* CSS Triangle for the play icon */}
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
              </div>
            </div>
          </div>
        ) : (
          // THE REAL YOUTUBE PLAYER (Loads and auto-plays after clicking)
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            // Notice we added autoplay=1 so it starts immediately when the fake player disappears
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}

      </div>
      
      {/* Video Title Beneath */}
      <h3 className="text-xl font-medium text-gray-900 text-center px-2">
        {video.title}
      </h3>
    </div>
  );
}

// 2. The main page layout remains exactly the same
export default function ArchivesPage() {
  const videos2025 = [
    {
      id: "dQw4w9WgXcQ", // The Rickroll
      title: "Opening Ceremony & Welcome Dance",
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Junior Batch - Group Kathak",
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Senior Vocal Performance",
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Instrumental Medley",
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Annual Award Distribution",
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Grand Finale Performance",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F9F6EE] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
            Performance Archives
          </h1>
          <p className="text-lg text-gray-600">
            A visual journey through our previous years.
          </p>
        </div>

        {/* 2025 Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-serif text-gray-800 border-b-2 border-[#d97706] pb-2 mb-10 inline-block">
            2025
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {/* Now we just call our custom player component for every video in the list */}
            {videos2025.map((video, index) => (
              <CustomVideoPlayer key={index} video={video} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}