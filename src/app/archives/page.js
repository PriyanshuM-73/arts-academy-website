import Link from "next/link";

export default function ArchivesDirectory() {
  // You can easily add "2026", "2027" to this list in the future!
  const availableYears = ["2025"];

  return (
    <div className="container mx-auto p-8 text-amber-500 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-12">Annual Function Archives</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {availableYears.map((year) => (
          <Link 
            key={year} 
            href={`/archives/${year}`}
            className="flex flex-col items-center justify-center p-8 border border-gray-600 rounded-xl hover:bg-orange-300 hover:border-gray-400 transition-all cursor-pointer"
          >
            <span className="text-3xl font-semibold mb-2">{year}</span>
            <span className="text-gray-800">View Performances</span>
          </Link>
        ))}
      </div>
    </div>
  );
}