// src/app/archives/[year]/page.js
import VideoCard from "./VideoCard";
// 1. THE DICTIONARY: Store your public playlist IDs right here!
const PLAYLIST_MAP = {
  "2025": "PLPY_Lu5AIF1k", 
  // "2026": "PL_PasteYourNewIdHereLater", // When 2026 happens, just uncomment this line!
};

export default async function ArchiveYearPage({ params }) {
  // Wait for the URL to be read
  const { year } = await params; 
  
  // Look up the year in our dictionary above
  const playlistId = PLAYLIST_MAP[year];

  // If a user types a year that doesn't exist yet (like 2030), show a graceful error
  if (!playlistId) {
    return (
      <div className="flex justify-center items-center min-h-screen text-yellow-500 text-2xl">
        <h1>No archive found for the year {year}.</h1>
      </div>
    );
  }

  // Fetch the data securely (API Key is hidden in .env, Playlist ID comes from the dictionary)
  const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${process.env.YOUTUBE_API_KEY}`;
  
  const res = await fetch(url, { next: { revalidate: 3600 } });
  const data = await res.json();

  // 1. FLIP THE ORDER: Create a reversed copy of the YouTube items
  const reversedVideos = data.items ? [...data.items].reverse() : [];


  // 2. RENDER THE GALLERY (This is the second return statement at the bottom)
  return (
    <div className="container mx-auto p-8 text-orange-600 min-h-screen">
      <h1 className="text-4xl font-bold mb-10 text-center">{year} Annual Function</h1>
      
      {/* Look for this specific grid line! */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {reversedVideos.map((item) => {
          const video = item.snippet;
          const videoId = video.resourceId.videoId;
          
          // Tries to grab the highest quality thumbnail available
          const bestThumbnail = video.thumbnails?.maxres?.url 
                             || video.thumbnails?.high?.url 
                             || video.thumbnails?.medium?.url;
          
          return (
            <VideoCard 
              key={item.id}
              videoId={videoId}
              title={video.title}
              thumbnail={bestThumbnail}
            />
          );
        })}

      </div>
    </div>
  );
}