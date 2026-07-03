"use client";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Details</h1>
          <div className="w-24 h-1 bg-amber-700 mx-auto rounded"></div>
        </div>

        {/* Contact Card */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* LEFT COLUMN: Digital Contact (Call, WA, Email) */}
            <div className="space-y-8 border-b md:border-b-0 md:border-r border-gray-100 pb-8 md:pb-0 md:pr-12">
              
              {/* Phone 1 (Call Only) */}
              <div className="flex items-start gap-4">
                <div className="text-xl bg-gray-100 p-3 rounded-full shadow-sm w-12 h-12 flex items-center justify-center shrink-0">
                  📞
                </div>
                <div className="pt-1">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Call</p>
                  <a href="tel:+919861039111" className="text-lg font-bold text-gray-900 hover:text-amber-700 transition">
                    +91 9861039111
                  </a>
                </div>
              </div>

              {/* Phone 2 (WhatsApp) */}
              <div className="flex items-start gap-4">
                <div className="text-xl bg-green-50 p-3 rounded-full shadow-sm w-12 h-12 flex items-center justify-center shrink-0">
                  💬
                </div>
                <div className="pt-1">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">WhatsApp</p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">📞</span> 
                    <span className="text-sm text-green-500">🟢</span>
                    <a href="https://wa.me/919439795015" target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-gray-900 hover:text-amber-700 transition">
                      +91 9439795015
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="text-xl bg-amber-50 p-3 rounded-full shadow-sm w-12 h-12 flex items-center justify-center shrink-0">
                  ✉️
                </div>
                <div className="pt-1">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Email Us</p>
                  <a href="mailto:info@srisiddhiacademy.com" className="text-lg font-bold text-gray-900 hover:text-amber-700 transition break-all">
                    srisiddhiacademy@gmail.com
                  </a>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Physical Location */}
            <div className="flex flex-col justify-center h-full">
              <div className="flex flex-col items-center text-center md:items-start md:text-left gap-2">
                
                <div className="text-2xl bg-rose-50 p-4 rounded-full shadow-sm w-14 h-14 flex items-center justify-center">
                  📍
                </div>
                
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">Visit Us</p>
                  <p className="text-gray-900 font-medium text-lg leading-relaxed mb-8">
                    Sri Sri Ravishankar Vidya Mandir,<br />
                    Sector 1, Rourkela,<br />
                    Odisha 769008
                  </p>
                  
                  {/* Boxed Map Hyperlink */}
                  <a 
                    href="https://maps.app.goo.gl/fZ8TjWwK8WMQHv2i8" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center justify-center gap-2 bg-amber-900 text-white font-bold py-3.5 px-8 rounded-xl hover:bg-amber-800 transition shadow-md w-full md:w-auto"
                  >
                    Open in Google Maps <span>→</span>
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}