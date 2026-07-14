"use client";

import { useState, useEffect, useRef } from "react";

export default function VideoCard({ videoId, title, thumbnail }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false); // Remembers if the video has been injected yet
  const iframeRef = useRef(null);

  // 1. Listen for other videos playing
  useEffect(() => {
    const handleGlobalPlay = (event) => {
      // If another video is clicked, hide and pause THIS video
      if (event.detail !== videoId) {
        setIsPlaying(false);
        
        // Send a command to the YouTube iframe to pause
        if (iframeRef.current && iframeRef.current.contentWindow) {
          iframeRef.current.contentWindow.postMessage(
            '{"event":"command","func":"pauseVideo","args":""}',
            '*'
          );
        }
      }
    };

    window.addEventListener("activeVideoChanged", handleGlobalPlay);
    return () => window.removeEventListener("activeVideoChanged", handleGlobalPlay);
  }, [videoId]);

  // 2. Play THIS video
  const handlePlayClick = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      setHasLoaded(true); // Mounts the iframe if it's the first time
      
      // Let the rest of the page know this video is taking over
      window.dispatchEvent(new CustomEvent("activeVideoChanged", { detail: videoId }));

      // If the iframe is already loaded from a previous click, tell it to resume playing
      if (iframeRef.current && iframeRef.current.contentWindow) {
        iframeRef.current.contentWindow.postMessage(
          '{"event":"command","func":"playVideo","args":""}',
          '*'
        );
      }
    }
  };

  return (
    <div 
      className="flex flex-col group cursor-pointer" 
      onClick={handlePlayClick}
    >
      <div className="relative w-full aspect-video overflow-hidden rounded-xl shadow-lg border border-gray-700 bg-gray-900">
        
        {/* THE IFRAME: Only loads after the first click, then stays permanently */}
        {hasLoaded && (
          <iframe 
            ref={iframeRef}
            // We use CSS opacity and z-index to hide/show it without destroying it
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-300 ${
              isPlaying ? "opacity-100 z-10" : "opacity-0 -z-10"
            }`}
            // Notice enablejsapi=1 added here. This allows us to send the pause/play commands!
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&enablejsapi=1`} 
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        )}

        {/* THE FACADE: Fades out when playing, fades back in when paused */}
        <div 
          className={`absolute inset-0 z-20 transition-opacity duration-300 ${
            isPlaying ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <img 
            src={thumbnail} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
          
          <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-transparent transition-colors">
            <div className="w-16 h-16 bg-amber-600/95 rounded-full flex items-center justify-center backdrop-blur-sm shadow-[0_0_20px_rgba(217,119,6,0.5)] transition-transform duration-300 group-hover:scale-110">
              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        </div>

      </div>
      
      <h3 className={`mt-4 text-xl font-semibold transition-colors ${isPlaying ? "text-amber-500" : "group-hover:text-amber-400"}`}>
        {title}
      </h3>
    </div>
  );
}