"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export default function Home() {

  // --- GALLERY DATA & LOGIC ---
  
  // Photo Pool (You can add 100+ photos here safely now!)
  const annualPhotos = [
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782826274/353_i6gspa.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782826172/_DSC1341_h9xuki.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782826136/_DSC1312_nhjzsj.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782826134/_DSC1328_g5ffhf.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782826115/_DSC1327_re26h0.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782826101/_DSC1315_nwfxif.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782826008/_DSC1308_yfho55.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782825982/_DSC1303_p8uklq.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782825979/_DSC1307_aznsff.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782825979/_DSC1307_aznsff.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782825931/_DSC1302_bkji8w.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782825907/_DSC1291_gcncrn.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782825858/_DSC1300_sj2ztw.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782825835/_DSC1293_ivdw6g.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782825831/_DSC1298_xw4jjt.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782825822/_DSC1290_bv9zci.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782825769/_DSC1287_bvxqyx.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782825699/_DSC1283_yyqli0.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782825687/_DSC1239_g0cbhc.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782825676/_DSC1215_xkigwv.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782825655/_DSC1194_pr2xzt.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782825648/_DSC1211_mziasr.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782825620/_DSC1210_h0leeu.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782825565/_DSC1208_qkvsjl.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782825535/_DSC1197_am10gw.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782825520/_DSC1193_i5bdld.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782825480/_DSC1184_luufdx.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782825452/_DSC1181_wn6c9z.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782825405/_DSC1178_f5j2di.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782825391/_DSC1174_axzp8l.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782825390/_DSC1153_otdouy.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782825341/_DSC1169_alvfqp.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782825299/_DSC1140_j8rvtw.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782825293/_DSC1120_dzxsog.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782825259/_DSC1105_sjwbko.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782825240/_DSC1119_ued7or.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782825172/_DSC1104_thcyqn.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782825129/_DSC1084_ewtjiz.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782825125/_DSC1059_owbype.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782825121/_DSC1078_olqmlg.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782825087/_DSC1076_o0vtvj.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782825085/_DSC1068_tkjv0d.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782824992/_DSC1050_cllopc.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782824976/_DSC1051_amwkwq.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782824958/_DSC1045_i7xyqr.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782824920/_DSC1037_hvfndp.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782824912/_DSC1019_hves1u.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782824876/_DSC1010_o2w72m.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782824823/_DSC1017_bg7xp7.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782824818/_DSC1012_a4jsdg.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782824793/_DSC1008_i8r0yn.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782824752/405_aiywm6.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782824743/395_dngvs4.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782824668/393_ea8uy9.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782824665/387_lqt6vg.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782824640/377_g9qi4m.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782824633/386_sxlqxt.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782824614/383_m7kmyu.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782824600/380_viu2vv.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782824528/375_a5v80n.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782824521/367_cvaxe4.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782824497/371_zbgs21.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782824480/366_lo88dv.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782824450/358_oxpmkh.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782824446/324_i8cyji.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782824395/346_tzmrqo.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782824381/338_zu8ynj.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782824379/225_toegbx.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782824334/321_fdiwrc.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782824327/132_uru1el.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782824312/209_qflofy.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782824294/129_am6izv.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782824271/128_qygext.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782824212/125_dhyev9.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782824200/120_gpnstl.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782824191/112_wmq1j1.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782824177/114_cla5ke.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782824149/103_bzdjab.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782824077/95_p5j8oi.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782824071/61_o3fkvg.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782824055/96_hatqtm.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782824053/102_vekcv8.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782824042/97_yt4hnk.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782824019/86_fqjede.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782823942/82_czmmtr.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782823926/39_b48vd3.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782823916/84_gdvnyk.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782823915/43_kchryf.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782823909/18_jhcjpo.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782823904/81_cbyjx8.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782823819/30_lmnyms.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782823806/78_ika1vd.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782823798/80_vgr7yk.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782823789/33_la3yao.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782823785/77_lyfglb.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782823719/64_alcmgy.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782823685/13_puvdsf.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782823684/28_zxpkma.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782823673/62_fav5de.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782823665/71_krhax3.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1782823659/74_kz3mgr.jpg"
  ];

// --- GALLERY DATA & LOGIC ---
  const galleryRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const [displayPhotos, setDisplayPhotos] = useState([]);
  const [photoIndices, setPhotoIndices] = useState([0, 1]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 1. Check browser memory for our "bookmark" (default to 0 if first visit)
    const savedIndex = localStorage.getItem('musicCarouselBookmark');
    const startIndex = savedIndex ? parseInt(savedIndex, 10) : 0;

    // 2. Select the next 10 photos in order (6 for initial, 4 for background)
    const selected = [];
    for (let i = 0; i < 10; i++) {
      selected.push(annualPhotos[(startIndex + i) % annualPhotos.length]);
    }

    // 3. Save the NEXT starting point in the browser memory for the next reload
    const nextStartIndex = (startIndex + 10) % annualPhotos.length;
    localStorage.setItem('musicCarouselBookmark', nextStartIndex.toString());

    // 4. Split into initial load (first 6) and deferred load (last 4)
    const initialBatch = selected.slice(0, 6);
    const deferredBatch = selected.slice(6);

    const preloadImages = (imageUrls) => {
      return Promise.all(
        imageUrls.map((src) => {
          return new Promise((resolve) => {
            const img = new window.Image();
            img.src = src;
            img.onload = resolve;
            img.onerror = resolve; 
          });
        })
      );
    };

    // 5. Wait for the first 6, lift the loading screen, then load the rest
    preloadImages(initialBatch).then(() => {
      setDisplayPhotos(selected); 
      setIsLoading(false);        
      
      // Silently fetch the remaining 4 in the background
      preloadImages(deferredBatch);
    });
  }, [annualPhotos]); 

  // 6. Visibility Sensor: Detects if the user is actually looking at the gallery
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (galleryRef.current) observer.observe(galleryRef.current);
    return () => observer.disconnect();
  }, []);

  // 7. Carousel Timer: Cycles ONLY if photos are loaded AND the gallery is visible
  useEffect(() => {
    if (displayPhotos.length === 0 || isLoading || !isVisible) return; 

    const photoTimer = setInterval(() => {
      setPhotoIndices((prev) => [
        (prev[0] + 2) % displayPhotos.length,
        (prev[1] + 2) % displayPhotos.length,
      ]);
    }, 5000);
    return () => clearInterval(photoTimer);
  }, [displayPhotos, isLoading, isVisible]);

  return (
    <main className="min-h-screen bg-gray-50 relative">
      
      {/* --- CUSTOM PIANO KEY ANIMATION STYLES --- */}
      <style>{`
        @keyframes pressWhite {
          0%, 100% { transform: scaleY(1); background-color: #ffffff; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }
          50% { transform: scaleY(0.96); background-color: #e5e7eb; box-shadow: 0 0px 0px 0px rgba(0,0,0,0); }
        }
        @keyframes pressBlack {
          0%, 100% { transform: scaleY(1); background-color: #111827; }
          50% { transform: scaleY(0.92); background-color: #374151; }
        }
        .animate-white {
          animation: pressWhite 2.8s infinite ease-in-out;
          transform-origin: top;
        }
        .animate-black {
          animation: pressBlack 2.8s infinite ease-in-out;
          transform-origin: top;
        }
      `}</style>

      {/* --- FULL-SCREEN LOADING OVERLAY --- */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-50">
          
          <div className="flex items-start justify-center px-4">
            {[
              { type: 'w', delay: 0 },
              { type: 'b', delay: 0.2 },
              { type: 'w', delay: 0.4 },
              { type: 'b', delay: 0.6 },
              { type: 'w', delay: 0.8 },
              { type: 'w', delay: 1.0 },
              { type: 'b', delay: 1.2 },
              { type: 'w', delay: 1.4 },
              { type: 'b', delay: 1.6 },
              { type: 'w', delay: 1.8 },
              { type: 'b', delay: 2.0 },
              { type: 'w', delay: 2.2 },
            ].map((key, i) => (
              key.type === 'w' ? (
                // White Key
                <div 
                  key={i} 
                  className="w-8 md:w-12 h-32 md:h-48 border border-gray-300 rounded-b-md z-0 animate-white"
                  style={{ animationDelay: `${key.delay}s` }}
                ></div>
              ) : (
                // Black Key (Uses negative margins to overlap the white keys)
                <div 
                  key={i} 
                  className="w-5 md:w-7 h-20 md:h-32 rounded-b-sm z-10 -mx-2.5 md:-mx-3.5 animate-black shadow-md"
                  style={{ animationDelay: `${key.delay}s` }}
                ></div>
              )
            ))}
          </div>

          <p className="mt-16 text-gray-800 font-bold tracking-widest uppercase text-sm animate-pulse">
            Tuning Instruments...
          </p>
        </div>
      )}
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-amber-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/home_bg.JPG" 
            alt="Sri Siddhi Academy Background" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-48 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Welcome to Sri Siddhi Academy of Art
          </h1>
          <p className="mt-4 text-xl md:text-2xl max-w-3xl mb-10 text-amber-100">
            Nurturing talent across Music, Dance, Tabla, and Fine Arts. Begin your artistic journey with our experienced gurus.
          </p>
          <div className="flex justify-center mt-8">
            <Link href="/contacts" className="bg-white text-amber-900 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* 2. EXPLORE ART FORMS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Explore Our Art Forms</h2>
            <div className="w-24 h-1 bg-amber-700 mx-auto rounded"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/music" className="group block bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
              <div className="h-48 bg-amber-800 relative overflow-hidden">
                 <img src="/Fmusic.jpeg" alt="Music" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Classical Music</h3>
                <p className="text-gray-600 mb-4 text-sm">Vocal training rooted from classical curriculum . Progress systematically through the Visharad syllabus.</p>
                <span className="text-amber-700 font-semibold text-sm group-hover:text-amber-800 flex items-center">
                  Explore Curriculum <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </Link>
            <Link href="/dance" className="group block bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
              <div className="h-48 bg-rose-800 relative overflow-hidden">
                 <img src="/Fdance.JPG" alt="Dance" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Classical Dance</h3>
                <p className="text-gray-600 mb-4 text-sm">Expressive classical and contemporary dance forms taught by experienced mentor.</p>
                <span className="text-amber-700 font-semibold text-sm group-hover:text-amber-800 flex items-center">
                  Explore Curriculum <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </Link>
            <Link href="/tabla" className="group block bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
              <div className="h-48 bg-stone-800 relative overflow-hidden">
                 <img src="/Ftabla.JPG" alt="Tabla" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Tabla & Percussions</h3>
                <p className="text-gray-600 mb-4 text-sm">Master rhythm, intricate compositions, and specific taals from beginner to advanced levels.</p>
                <span className="text-amber-700 font-semibold text-sm group-hover:text-amber-800 flex items-center">
                  Explore Curriculum <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </Link>
            <Link href="/fine-arts" className="group block bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
              <div className="h-48 bg-teal-800 relative overflow-hidden">
                 <img src="/Ffa.JPG" alt="Fine Arts" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Fine Arts & Painting</h3>
                <p className="text-gray-600 mb-4 text-sm">Explore painting, sketching, and traditional art techniques in a creative environment.</p>
                <span className="text-amber-700 font-semibold text-sm group-hover:text-amber-800 flex items-center">
                  Explore Curriculum <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. NOTICE BOARD */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notice Board</h2>
            <p className="text-gray-600">Stay updated with the latest events, exams, and announcements.</p>
          </div>
          <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="flex flex-col sm:flex-row border-b border-gray-100 p-6 hover:bg-gray-50 transition">
              <div className="sm:w-32 shrink-0 mb-4 sm:mb-0">
                <div className="text-amber-700 font-bold text-xl">15 May</div>
                <div className="text-gray-500 text-sm font-medium">2026</div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Upcoming Exam Registrations</h3>
                <p className="text-gray-600">Registrations for the Visharad examinations are now open. Please submit your forms to the administration desk.</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row p-6 hover:bg-gray-50 transition">
              <div className="sm:w-32 shrink-0 mb-4 sm:mb-0">
                <div className="text-amber-700 font-bold text-xl">02 Jun</div>
                <div className="text-gray-500 text-sm font-medium">2026</div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Annual Summer Workshop</h3>
                <p className="text-gray-600">Join our special 10-day intensive workshop focusing on advanced theory and stage performance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DYNAMIC ANNUAL FUNCTION GALLERY (Optimized Next/Image) */}
      {/* 4. DYNAMIC ANNUAL FUNCTION GALLERY */}
      <section className="py-20 bg-white" ref={galleryRef}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Annual Function Glimpses</h2>
            <p className="text-gray-600">Celebrating 18 years of dedication, talent, and artistic expression.</p>
          </div>
          
          <div className="grid grid-cols-2 gap-2 md:gap-4 bg-gray-100 p-2 md:p-4 rounded-3xl border border-gray-200">
            {photoIndices.map((idx, i) => (
              <div key={i} className="aspect-square rounded-xl md:rounded-2xl overflow-hidden shadow-sm relative">
                {displayPhotos[idx] && (
                  <img 
                    src={displayPhotos[idx]} 
                    alt="Annual Function Moment" 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ABOUT THE INSTITUTE & LOCATION */}
      <section className="py-20 bg-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* About & Affiliations */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-amber-100">About the Institute</h2>
              <p className="text-lg leading-relaxed mb-6 opacity-90">
                Sri Siddhi Academy of Art has been a cornerstone of cultural education for nearly two decades. We are committed to preserving traditional art forms while nurturing the next generation of creative minds.
              </p>
              <div className="bg-amber-800/50 p-6 rounded-2xl border border-amber-700">
                <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                  <span className="text-amber-400">★</span> Recognized Affiliation
                </h3>
                <p className="opacity-90">
                  Our curriculum and examination board are proudly affiliated with the prestigious <strong className="text-white">Pracheen Kala Kendra, Chandigarh</strong>, ensuring that our students receive globally recognized certifications from Prarambhik up to the Visharad levels.
                </p>
              </div>
            </div>

            {/* Location & Classes */}
            <div className="bg-white text-gray-900 p-8 rounded-3xl shadow-xl flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">Visit Our Classrooms</h2>
                <p className="text-gray-600 mb-6">We invite you to experience our vibrant learning environment in person.</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center shrink-0 text-amber-700 font-bold text-xl">
                      📍
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Sri Siddhi Academy of Art</h4>
                      <p className="text-gray-600">Sri Sri Ravishankar Vidya Mandir, Sector 1<br/>Rourkela, Odisha 769008</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <a 
                  href="https://maps.app.goo.gl/fZ8TjWwK8WMQHv2i8" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block text-center w-full bg-amber-700 text-white font-bold py-3 px-4 rounded-xl hover:bg-amber-800 transition"
                >
                  Open in Google Maps
                </a>
                <Link href="/contacts" className="block text-center w-full border-2 border-gray-200 text-gray-700 font-bold py-3 px-4 rounded-xl hover:bg-gray-50 transition">
                  Contact Us
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
