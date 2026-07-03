import Link from 'next/link';

export default function ArchivePage() {
  return (
    <main className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Back Button */}
        <div className="text-center mb-16 relative">
          <Link href="/" className="absolute left-0 top-2 text-amber-700 font-bold hover:text-amber-800 flex items-center gap-2 transition">
            <span>←</span> Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Annual Function Archive
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore 18 years of dedication, talent, and artistic expression from the students of Sri Siddhi Academy of Art.
          </p>
        </div>
        
        {/* Archive Years Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* 2025 Placeholder */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition">
            <div className="h-48 bg-gray-200 relative">
              <img src="https://images.unsplash.com/photo-1533174000244-b816ba7f4577?q=80&w=1000&auto=format&fit=crop" alt="2025 Annual Function" className="w-full h-full object-cover opacity-90" />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent flex items-end p-6">
                <h2 className="text-3xl font-bold text-white">2025</h2>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">A spectacular showcase featuring over 150 students across all classical departments.</p>
              <button className="text-amber-700 font-bold hover:text-amber-800">View Gallery →</button>
            </div>
          </div>

          {/* 2024 Placeholder */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition">
            <div className="h-48 bg-gray-200 relative">
              <img src="https://images.unsplash.com/photo-1543781284-813ab9587dfb?q=80&w=1000&auto=format&fit=crop" alt="2024 Annual Function" className="w-full h-full object-cover opacity-90" />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent flex items-end p-6">
                <h2 className="text-3xl font-bold text-white">2024</h2>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">Celebrating our 16th anniversary with special performances in Odissi and Hindustani Vocal.</p>
              <button className="text-amber-700 font-bold hover:text-amber-800">View Gallery →</button>
            </div>
          </div>

          {/* 2023 Placeholder */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition">
            <div className="h-48 bg-gray-200 relative">
              <img src="https://images.unsplash.com/photo-1605601550993-85b4618e7e11?q=80&w=1000&auto=format&fit=crop" alt="2023 Annual Function" className="w-full h-full object-cover opacity-90" />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent flex items-end p-6">
                <h2 className="text-3xl font-bold text-white">2023</h2>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">A mesmerising evening dedicated to the intricate rhythms of traditional Tabla gharanas.</p>
              <button className="text-amber-700 font-bold hover:text-amber-800">View Gallery →</button>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}