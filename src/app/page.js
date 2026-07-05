"use client";

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Home() {

  // --- GALLERY DATA & LOGIC ---
  
  // Photo Pool (You can add 100+ photos here safely now!)
  const annualPhotos = [
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783060864/405_ntdaph.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783061306/395_blqvwk.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783060854/387_acf45s.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783060853/393_tm0f2x.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783060850/386_ygika4.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783060841/380_oh0ycj.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783060840/383_ndlcdb.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783060834/377_liling.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783060830/375_cyvc5q.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783060827/367_jjuzxy.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783060818/371_qrgk2d.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783060814/225_j4tsin.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783060811/358_bbawog.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783060803/324_naskgb.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783060801/321_rbef82.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783060799/346_z0dovg.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783060798/338_uh6x9r.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783060790/209_f9earj.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783060789/132_qfctrf.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783060787/129_irnm7n.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783060781/128_qamuqg.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783060777/125_lrtinz.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783060776/120_ceunee.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783060772/114_nra5ra.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783060762/112_kulacx.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783060759/103_otvaoa.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783060752/97_rfjyo3.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783060752/96_xyopna.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783060749/102_wycxaz.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783060747/95_guux3g.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783060738/86_kmvanp.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783060733/82_zoxofa.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783060731/80_pzqzfa.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783060729/84_ccbwlw.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783060728/81_oto7uq.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783060727/78_jjtx7p.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783060714/77_k7r8x1.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783060710/61_t3gcty.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783060708/64_vqrzdb.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783060705/62_yqdqgk.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783060704/74_dtm0ik.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783060703/71_k9wh0v.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783060692/43_klp21i.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783060688/39_l7ael8.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783060686/28_vn4ugl.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783060683/13_rxyysd.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783060682/18_rnuji7.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783060681/30_dfdh3y.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783060668/33_mrxrvh.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783059164/_DSC1341_shi8rk.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783059155/_DSC1328_ykrnz9.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783059143/_DSC1311_vlvomk.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783059138/_DSC1315_sygvnw.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783059137/_DSC1308_c9pbhq.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783059137/_DSC1312_yudkph.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783059133/_DSC1307_ei2wzc.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783059128/_DSC1303_oajcfc.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783059113/_DSC1300_oq6sal.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783059113/_DSC1302_qjc8uf.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783059111/_DSC1293_v622qm.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783059108/_DSC1290_wbmvwo.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783059107/_DSC1298_ohuwxm.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783059102/_DSC1291_wabt5i.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783059095/_DSC1287_yqc6sm.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783059087/_DSC1239_fb7sve.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783059082/_DSC1215_eczyjz.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783059081/_DSC1283_qaq4ty.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783059079/_DSC1210_qlphas.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783059076/_DSC1208_e4tf7c.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783059067/_DSC1194_lkpcnl.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783059065/_DSC1197_cemwop.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783059062/_DSC1184_gwshaf.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783059059/_DSC1193_jn67dv.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783059056/_DSC1181_e6p7rl.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783059053/_DSC1178_z5f83g.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783059045/_DSC1174_usrjov.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783059039/_DSC1153_h78clo.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783059035/_DSC1169_ivbaz2.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783059034/_DSC1140_ft5myk.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783059032/_DSC1105_xs03jd.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783059031/_DSC1120_vvnbre.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783059028/_DSC1119_pbirbh.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783059022/_DSC1084_yofh7q.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783059020/_DSC1104_yutzcl.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783059017/_DSC1078_rqedsi.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783059016/_DSC1076_vsgjdj.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783059011/_DSC1068_tqbtbo.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783059011/_DSC1045_qqiw2i.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783059008/_DSC1050_d8ps7u.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783059001/_DSC1012_f1gylk.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783058997/_DSC1017_qdmtnt.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783058995/_DSC1037_sg3oe1.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783058990/_DSC1008_ghbhrx.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783058987/_DSC1010_kwlsn0.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783058986/_DSC1051_zrpyrw.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783058983/_DSC1059_ka75ao.jpg",
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783058981/_DSC1019_rinfq1.jpg"
  ];

// ALL STATES RESTORED
  const [displayPhotos, setDisplayPhotos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); 
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(true); 
  const [zoomedPhoto, setZoomedPhoto] = useState(null);

  // 1. Preload and setup photos
  useEffect(() => {
    const savedIndex = localStorage.getItem('annualCarouselBookmark');
    const startIndex = savedIndex ? parseInt(savedIndex, 10) : 0;

    const selected = [];
    if (annualPhotos && annualPhotos.length > 0) {
      for (let i = 0; i < 14 && i < annualPhotos.length; i++) {
        selected.push(annualPhotos[(startIndex + i) % annualPhotos.length]);
      }
      const nextStartIndex = (startIndex + 12) % annualPhotos.length;
      localStorage.setItem('annualCarouselBookmark', nextStartIndex.toString());
    }

    const preloadAllImages = (imageUrls) => {
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

    if (selected.length > 0) {
      Promise.all([
        preloadAllImages(selected.slice(0, 2)), 
        new Promise((resolve) => setTimeout(resolve, 3000)) 
      ]).then(() => {
        setDisplayPhotos(selected);
        setIsLoading(false); 
        preloadAllImages(selected.slice(2));
      });
    }
  }, []); 

  // 2. Handle Mobile Back Button for the Zoom Modal
  useEffect(() => {
    const handlePopState = () => {
      if (zoomedPhoto) {
        setZoomedPhoto(null);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [zoomedPhoto]);

  // 3. SMART TIMER: Auto-scrolls, but resets on manual clicks and pauses when zoomed
  useEffect(() => {
    if (displayPhotos.length === 0 || isLoading || zoomedPhoto) return;

    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev === displayPhotos.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(timer);
  }, [displayPhotos.length, isLoading, currentIndex, zoomedPhoto]);

  // 4. Zoom controls
  const openZoom = (photo) => {
    setZoomedPhoto(photo);
    window.history.pushState({ zoom: true }, '');
  };

  const closeZoom = () => {
    setZoomedPhoto(null);
    if (window.history.state && window.history.state.zoom) {
      window.history.back();
    }
  };

  // 5. Manual Slider Controls
  const slideLeft = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === 0 ? displayPhotos.length - 1 : prev - 1));
  };
  const slideRight = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === displayPhotos.length - 1 ? 0 : prev + 1));
  };

  return (
    <main className="min-h-screen bg-purple-500/20 relative">
      
      {/* Zoom Lightbox Modal */}
      {zoomedPhoto && (
        <div 
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/95 p-4 cursor-pointer backdrop-blur-sm transition-opacity"
          onClick={closeZoom}
        >
          <button 
            className="absolute top-6 right-6 text-white text-4xl hover:text-amber-500 transition-colors z-101"
            onClick={(e) => { e.stopPropagation(); closeZoom(); }}
          >
            ×
          </button>
          <img 
            src={zoomedPhoto} 
            alt="Zoomed Event" 
            className="max-w-full max-h-[90vh] object-contain rounded-md shadow-2xl" 
          />
        </div>
      )}

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
              { type: 'w', delay: 0 }, { type: 'b', delay: 0.2 }, { type: 'w', delay: 0.4 },
              { type: 'b', delay: 0.6 }, { type: 'w', delay: 0.8 }, { type: 'w', delay: 1.0 },
              { type: 'b', delay: 1.2 }, { type: 'w', delay: 1.4 }, { type: 'b', delay: 1.6 },
              { type: 'w', delay: 1.8 }, { type: 'b', delay: 2.0 }, { type: 'w', delay: 2.2 },
            ].map((key, i) => (
              key.type === 'w' ? (
                <div key={i} className="w-8 md:w-12 h-32 md:h-48 border border-gray-300 rounded-b-md z-0 animate-white" style={{ animationDelay: `${key.delay}s` }}></div>
              ) : (
                <div key={i} className="w-5 md:w-7 h-20 md:h-32 rounded-b-sm z-10 -mx-2.5 md:-mx-3.5 animate-black shadow-md" style={{ animationDelay: `${key.delay}s` }}></div>
              )
            ))}
          </div>
          <p className="mt-16 text-gray-800 font-bold tracking-widest uppercase text-sm animate-pulse">
            Tuning Instruments...
          </p>
        </div>
      )}
      
      {/* 1. HERO SECTION */}
      <div className="relative w-full min-h-[60vh] md:min-h-screen flex items-center justify-center bg-gray-900">
        <Image src="/home_bg.JPG" alt="Sri Siddhi Academy Stage" fill priority fetchPriority="high" quality={75} className="object-cover object-center z-0" />
        <div className="absolute inset-0 bg-linear-to-br from-orange-700/40 to-amber-500/40 z-1"></div>
        <div className="relative z-10 flex flex-col items-center text-center px-4 w-full translate-y-16 md:translate-y-30">
          <h1 className="text-4xl md:text-6xl font-extrabold text-blue-100 drop-shadow-[0_0_20px_rgba(29,78,216,1)] z-10 relative">
            Sri Siddhi Academy of Art
          </h1>          
          <p className="text-base md:text-xl text-gray-100 mb-8 max-w-2xl drop-shadow-md">
            Nurturing talent across Music, Dance, Tabla, and Fine Arts.
          </p>          
        </div>
      </div>

      {/* 2. EXPLORE ART FORMS SECTION */}
      <section className="py-20 ">
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
                <p className="text-gray-600 mb-4 text-sm">Vocal training rooted from classical curriculum. Progress systematically through the Visharad syllabus.</p>
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
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Announcements</h2>
            <p className="text-gray-600">Stay updated with the latest events, exams, and other notices.</p>
          </div>
          <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="flex flex-col sm:flex-row border-b border-gray-100 p-6 hover:bg-gray-50 transition">
              <div className="sm:w-32 shrink-0 mb-4 sm:mb-0">
                <div className="text-amber-700 font-bold text-xl">17 July</div>
                <div className="text-gray-500 text-sm font-medium">2026</div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Rath Yatra Bhajan Sandhya</h3>
                <p className="text-gray-600">Watch our Institute students perform at Sector-20 Gundicha Mandir.</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row p-6 hover:bg-gray-50 transition">
              <div className="sm:w-32 shrink-0 mb-4 sm:mb-0">
                <div className="text-amber-700 font-bold text-xl">23 July</div>
                <div className="text-gray-500 text-sm font-medium">2026</div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Rath Yatra Bhajan Sandhya</h3>
                <p className="text-gray-600">Watch our Institute students perform at Maa Bata Mangala Mandir, Jagda.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DYNAMIC ANNUAL FUNCTION GALLERY CAROUSEL (HYBRID) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 relative">
          
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-gray-900 tracking-tight">
            Annual Function Glimpses
          </h2>
          
          <div className="overflow-hidden relative w-full group">
            
            {/* Left/Right Navigation Arrows */}
            {!isLoading && displayPhotos.length > 0 && (
              <>
                <button 
                  onClick={slideLeft} 
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-900 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full shadow-lg opacity-80 group-hover:opacity-100 transition-all text-xl font-bold"
                >
                  ❮
                </button>
                <button 
                  onClick={slideRight} 
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-900 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full shadow-lg opacity-80 group-hover:opacity-100 transition-all text-xl font-bold"
                >
                  ❯
                </button>
              </>
            )}

            <div 
              className="flex [--slide-width:100%] md:[--slide-width:50%]"
              style={{ 
                transform: `translateX(calc(-${currentIndex} * var(--slide-width)))`,
                transition: isTransitioning ? 'transform 700ms ease-in-out' : 'none' 
              }}
              onTransitionEnd={() => {
                if (currentIndex >= displayPhotos.length) {
                  setIsTransitioning(false); 
                  setCurrentIndex(0); 
                }
              }}
            >
              
              {!isLoading && displayPhotos.length > 0 && 
                [...displayPhotos, displayPhotos[0], displayPhotos[1]].map((photoUrl, index) => (
                <div key={index} className="w-(--slide-width) shrink-0 px-2 md:px-3">
                  <div 
                    className="relative w-full h-64 md:h-96 cursor-zoom-in"
                    onClick={() => openZoom(photoUrl)}
                  >
                    <Image 
                      src={photoUrl} 
                      alt={`Annual Function Image ${index + 1}`} 
                      fill
                      priority={index < 2} 
                      quality={75}
                      className="object-cover rounded-xl shadow-md hover:opacity-90 transition-opacity"
                      sizes="(max-width: 768px) 100vw, 50vw" 
                    />
                  </div>
                </div>
              ))}
              
            </div>
            
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