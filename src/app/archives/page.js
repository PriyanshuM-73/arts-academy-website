export default function ArchivesPage() {
  // You just swap out these IDs with your actual YouTube video IDs
  const videos2025 = [
    {
      id: "dQw4w9WgXcQ", // The string of letters/numbers at the end of a YouTube URL
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
          {/* The Year Subheading */}
          <h2 className="text-3xl font-serif text-gray-800 border-b-2 border-[#d97706] pb-2 mb-10 inline-block">
            2025
          </h2>

          {/* The Fixed 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {videos2025.map((video, index) => (
              <div key={index} className="flex flex-col">
                
                {/* 16:9 Video Player Container */}
                <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg mb-5 bg-gray-200">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    // Adding ?rel=0 stops YouTube from showing random weird videos at the end
                    src={`https://www.youtube.com/embed/${video.id}?rel=0`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                
                {/* Video Title Beneath */}
                <h3 className="text-xl font-medium text-gray-900 text-center px-2">
                  {video.title}
                </h3>
                
              </div>
            ))}
          </div>
        </div>

        {/* Future years (like 2024) can just be copy-pasted below this line! */}

      </div>
    </div>
  );
}