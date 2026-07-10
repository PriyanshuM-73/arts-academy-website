"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

let memoryCache = null; 
let isStrictLoading = false;

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
    "https://res.cloudinary.com/dodlb9hdp/image/upload/v1783058981/_DSC1019_rinfq1.jpg",
  ];

  // ALL STATES RESTORED
  const [displayPhotos, setDisplayPhotos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [zoomedPhoto, setZoomedPhoto] = useState(null);

  // 1. Preload and setup photos
  // --- REPLACE YOUR FIRST useEffect WITH THIS EXACT BLOCK ---
  useEffect(() => {
    if (memoryCache) {
      setDisplayPhotos(memoryCache);
      setIsLoading(false);
      return; 
    }

    if (isStrictLoading) return;
    isStrictLoading = true;

    const savedIndex = localStorage.getItem("annualCarouselBookmark");
    const startIndex = savedIndex ? parseInt(savedIndex, 10) : 0;

    const selected = [];
    if (annualPhotos && annualPhotos.length > 0) {
      for (let i = 0; i < 14 && i < annualPhotos.length; i++) {
        selected.push(annualPhotos[(startIndex + i) % annualPhotos.length]);
      }
      const nextStartIndex = (startIndex + 12) % annualPhotos.length;
      localStorage.setItem("annualCarouselBookmark", nextStartIndex.toString());
    }

    memoryCache = selected;

    const preloadAllImages = (imageUrls) => {
      return Promise.all(
        imageUrls.map((src) => {
          return new Promise((resolve) => {
            const img = new window.Image();
            img.src = src;
            img.onload = resolve;
            img.onerror = resolve;
          });
        }),
      );
    };

    if (selected.length > 0) {
      Promise.all([
        preloadAllImages(selected.slice(0, 2)),
        new Promise((resolve) => setTimeout(resolve, 2000)),
      ]).then(() => {
        setDisplayPhotos(selected);
        setIsLoading(false);
        preloadAllImages(selected.slice(2));
      });
    }
  }, []);


  // 2. Hide Navbar during loading (Bypasses Layout Stacking Contexts)
  useEffect(() => {
    const navbar = document.querySelector("nav");
    if (navbar) {
      // Hides the navbar completely if loading, otherwise removes the inline style to let it show normally
      navbar.style.display = isLoading ? "none" : "";
    }
  }, [isLoading]);

  // 3. Handle Mobile Back Button for the Zoom Modal
  useEffect(() => {
    const handlePopState = () => {
      if (zoomedPhoto) {
        setZoomedPhoto(null);
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [zoomedPhoto]);

  // 4. SMART TIMER: Auto-scrolls, but resets on manual clicks and pauses when zoomed
  useEffect(() => {
    if (displayPhotos.length === 0 || isLoading || zoomedPhoto) return;

    const timer = setInterval(() => {
      setIsTransitioning(true);
      // THE FIX: We just keep adding 1. We let onTransitionEnd handle the reset invisibly.
      setCurrentIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(timer);
  }, [displayPhotos.length, isLoading, currentIndex, zoomedPhoto]);

  // 5. Zoom controls (Keep these exactly as they are)
  const openZoom = (photo) => {
    setZoomedPhoto(photo);
    window.history.pushState({ zoom: true }, "");
  };

  const closeZoom = () => {
    setZoomedPhoto(null);
    if (window.history.state && window.history.state.zoom) {
      window.history.back();
    }
  };

  // 6. Manual Slider Controls
  const slideLeft = () => {
    if (currentIndex === 0) {
      // THE FIX: If at the start, teleport to the end clone silently, then slide left
      setIsTransitioning(false);
      setCurrentIndex(displayPhotos.length);

      // We use a tiny 50ms delay to let React render the teleport before sliding
      setTimeout(() => {
        setIsTransitioning(true);
        setCurrentIndex(displayPhotos.length - 1);
      }, 50);
    } else {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const slideRight = () => {
    if (currentIndex >= displayPhotos.length) return; // Prevents spam-clicking past the clones
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <main className="page-shell min-h-screen overflow-hidden">
      {/* Zoom Lightbox Modal */}
      {zoomedPhoto && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/95 p-4 cursor-pointer backdrop-blur-sm transition-opacity"
          onClick={closeZoom}
        >
          <button
            className="absolute top-6 right-6 text-white text-4xl hover:text-amber-500 transition-colors z-101"
            onClick={(e) => {
              e.stopPropagation();
              closeZoom();
            }}
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
          animation: pressWhite 1.8s infinite ease-in-out; /* Sped up from 2.8s */
          transform-origin: top;
        }
        .animate-black {
          animation: pressBlack 1.8s infinite ease-in-out; /* Sped up from 2.8s */
          transform-origin: top;
        }
      `}</style>

      {/* --- FULL-SCREEN LOADING OVERLAY --- */}
      {isLoading && (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gray-50">
          <div className="flex items-start justify-center px-4">
            {[
              /* Delays tightened from 0.2s gaps to 0.1s gaps for a faster wave */
              { type: "w", delay: 0 },
              { type: "b", delay: 0.15 },
              { type: "w", delay: 0.3 },
              { type: "b", delay: 0.45 },
              { type: "w", delay: 0.6 },
              { type: "w", delay: 0.75 },
              { type: "b", delay: 0.90 },
              { type: "w", delay: 1.05 },
              { type: "b", delay: 1.2 },
              { type: "w", delay: 1.35 },
              { type: "b", delay: 1.5 },
              { type: "w", delay: 1.65 },
            ].map((key, i) =>
              key.type === "w" ? (
                <div
                  key={i}
                  className="w-8 md:w-12 h-32 md:h-48 border border-gray-300 rounded-b-md z-0 animate-white"
                  style={{ animationDelay: `${key.delay}s` }}
                ></div>
              ) : (
                <div
                  key={i}
                  className="w-5 md:w-7 h-20 md:h-32 rounded-b-sm z-10 -mx-2.5 md:-mx-3.5 animate-black shadow-md"
                  style={{ animationDelay: `${key.delay}s` }}
                ></div>
              ),
            )}
          </div>
          <p className="mt-16 text-gray-800 font-bold tracking-widest uppercase text-sm animate-pulse">
            Tuning Instruments...
          </p>
        </div>
      )}

        {/* 1. HERO SECTION */}
      <div className="relative flex min-h-[88vh] w-full items-center justify-center overflow-hidden bg-stone-950">
        
        {/* THE FIX: We make the container 130% taller than the screen and pull it up into the negative space. 
            This forces the center of the image to sit much higher behind your typography on all devices. */}
        <div className="absolute left-0 right-0 z-0 h-[130%] -top-[15%] sm:-top-[20%] md:h-[140%] md:-top-[25%]">
          <Image
            src="/home_bg.JPG"
            alt="Sri Siddhi Academy Stage"
            fill
            priority
            fetchPriority="high"
            quality={80}
            className="object-cover object-center"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-br from-stone-950/84 via-stone-900/62 to-amber-950/42 z-[1]"></div>
        <div className="absolute inset-x-0 bottom-0 z-[2] h-40 bg-gradient-to-t from-stone-950/85 to-transparent"></div>
        <div className="absolute left-1/2 top-24 z-[2] h-64 w-64 -translate-x-1/2 rounded-full bg-amber-500/18 blur-3xl"></div>

        <div className="relative z-10 flex w-full max-w-6xl flex-col items-center px-4 text-center translate-y-10 md:translate-y-16">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-amber-100/90 backdrop-blur-md animate-fade-up">
            Classical arts school
          </div>
          <h1 className="max-w-5xl text-4xl font-bold text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)] md:text-6xl lg:text-7xl animate-fade-up-delayed">
            Sri Siddhi Academy of Art
          </h1>
          <p className="mt-5 max-w-2xl text-base text-stone-200 md:text-xl animate-fade-up-delayed">
            Nurturing talent across Music, Dance, Tabla, and Fine Arts.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contacts"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-600 to-orange-500 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-amber-900/25 transition hover:scale-[1.02] hover:from-amber-700 hover:to-orange-600"
            >
              Enquire now
            </Link>
            <Link
              href="#explore"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/8 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/14"
            >
              Explore programs
            </Link>
          </div>
          <div className="mt-12 grid w-full max-w-4xl grid-cols-2 gap-3 md:grid-cols-4">
            {[
              ["4", "Art forms"],
              ["15+", "Years of training"],
              ["PKK", "Affiliated"],
              ["150+", "Students"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-3xl border border-white/12 bg-white/8 px-4 py-4 text-left backdrop-blur-md hover-lift animate-fade-up"
              >
                <div className="text-2xl font-bold text-white md:text-3xl">
                  {value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-[0.28em] text-stone-300">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. EXPLORE ART FORMS SECTION */}
      <section id="explore" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-amber-800/80">
              Programs
            </p>
            <h2 className="text-3xl font-bold text-stone-900 md:text-5xl">
              Explore Our Art Forms
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-stone-600 md:text-base">
              Structured training rooted in classical discipline, with a calmer,
              more premium presentation for each department.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link
              href="/music"
              className="group block overflow-hidden rounded-[1.75rem] section-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(15,23,42,0.14)] hover-lift animate-fade-up"
            >
              <div className="relative h-52 overflow-hidden bg-gradient-to-br from-amber-900 to-stone-900">
                <img
                  src="/Fmusic.jpeg"
                  alt="Music"
                  className="h-full w-full object-cover opacity-82 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/55 via-transparent to-transparent"></div>
                <div className="absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-white backdrop-blur-md">
                  Music
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-stone-900 mb-2">
                  Classical Music
                </h3>
                <p className="text-sm text-stone-600 mb-4 leading-relaxed">
                  Vocal training rooted in classical curriculum. Progress
                  systematically through the Visharad syllabus.
                </p>
                <span className="flex items-center text-sm font-semibold text-amber-800 transition group-hover:text-amber-900">
                  Explore Curriculum{" "}
                  <span className="ml-1 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </span>
              </div>
            </Link>
            <Link
              href="/dance"
              className="group block overflow-hidden rounded-[1.75rem] section-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(15,23,42,0.14)] hover-lift animate-fade-up-delayed"
            >
              <div className="relative h-52 overflow-hidden bg-gradient-to-br from-rose-900 to-stone-900">
                <img
                  src="/Fdance.JPG"
                  alt="Dance"
                  className="h-full w-full object-cover opacity-82 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/55 via-transparent to-transparent"></div>
                <div className="absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-white backdrop-blur-md">
                  Dance
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-stone-900 mb-2">
                  Classical Dance
                </h3>
                <p className="text-sm text-stone-600 mb-4 leading-relaxed">
                  Expressive classical and contemporary dance forms taught by an
                  experienced mentor.
                </p>
                <span className="flex items-center text-sm font-semibold text-amber-800 transition group-hover:text-amber-900">
                  Explore Curriculum{" "}
                  <span className="ml-1 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </span>
              </div>
            </Link>
            <Link
              href="/tabla"
              className="group block overflow-hidden rounded-[1.75rem] section-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(15,23,42,0.14)] hover-lift animate-fade-up"
            >
              <div className="relative h-52 overflow-hidden bg-gradient-to-br from-stone-900 to-neutral-900">
                <img
                  src="/Ftabla.JPG"
                  alt="Tabla"
                  className="h-full w-full object-cover opacity-82 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/55 via-transparent to-transparent"></div>
                <div className="absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-white backdrop-blur-md">
                  Tabla
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-stone-900 mb-2">
                  Tabla & Percussions
                </h3>
                <p className="text-sm text-stone-600 mb-4 leading-relaxed">
                  Master rhythm, intricate compositions, and specific taals from
                  beginner to advanced levels.
                </p>
                <span className="flex items-center text-sm font-semibold text-amber-800 transition group-hover:text-amber-900">
                  Explore Curriculum{" "}
                  <span className="ml-1 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </span>
              </div>
            </Link>
            <Link
              href="/fine-arts"
              className="group block overflow-hidden rounded-[1.75rem] section-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(15,23,42,0.14)] hover-lift animate-fade-up-delayed"
            >
              <div className="relative h-52 overflow-hidden bg-gradient-to-br from-teal-900 to-stone-900">
                <img
                  src="/Ffa.JPG"
                  alt="Fine Arts"
                  className="h-full w-full object-cover opacity-82 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/55 via-transparent to-transparent"></div>
                <div className="absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-white backdrop-blur-md">
                  Fine Arts
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-stone-900 mb-2">
                  Fine Arts & Painting
                </h3>
                <p className="text-sm text-stone-600 mb-4 leading-relaxed">
                  Explore painting, sketching, and traditional art techniques in
                  a creative environment.
                </p>
                <span className="flex items-center text-sm font-semibold text-amber-800 transition group-hover:text-amber-900">
                  Explore Curriculum{" "}
                  <span className="ml-1 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
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
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-amber-800/80">
              Updates
            </p>
            <h2 className="text-3xl font-bold text-stone-900 md:text-4xl">
              Announcements
            </h2>
            <p className="mt-3 text-stone-600">
              Stay updated with the latest events, exams, and other notices.
            </p>
          </div>
          <div className="overflow-hidden rounded-[1.75rem] section-surface-strong">
            <div className="flex flex-col border-b border-stone-200/70 p-6 transition hover:bg-stone-50 sm:flex-row">
              <div className="sm:w-32 shrink-0 mb-4 sm:mb-0">
                <div className="text-xl font-bold text-amber-800">17 July</div>
                <div className="text-sm font-medium text-stone-500">2026</div>
              </div>
              <div>
                <h3 className="mb-1 text-lg font-bold text-stone-900">
                  Rath Yatra Bhajan Sandhya
                </h3>
                <p className="text-stone-600">
                  Watch our Institute students perform at Sector-20 Gundicha
                  Mandir.
                </p>
              </div>
            </div>
            <div className="flex flex-col p-6 transition hover:bg-stone-50 sm:flex-row">
              <div className="sm:w-32 shrink-0 mb-4 sm:mb-0">
                <div className="text-xl font-bold text-amber-800">23 July</div>
                <div className="text-sm font-medium text-stone-500">2026</div>
              </div>
              <div>
                <h3 className="mb-1 text-lg font-bold text-stone-900">
                  Rath Yatra Bhajan Sandhya
                </h3>
                <p className="text-stone-600">
                  Watch our Institute students perform at Maa Bata Mangala
                  Mandir, Jagda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DYNAMIC ANNUAL FUNCTION GALLERY CAROUSEL (HYBRID) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 relative">
          <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.35em] text-amber-800/80">
            Gallery
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-4 text-stone-900 tracking-tight">
            Annual Function Glimpses
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-stone-600">
            A visual archive of our performances.
          </p>

          <div className="overflow-hidden relative w-full group animate-fade-up">
            {/* Left/Right Navigation Arrows */}
            {!isLoading && displayPhotos.length > 0 && (
              <>
                <button
                  onClick={slideLeft}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/80 text-xl font-bold text-stone-900 opacity-90 shadow-lg transition-all hover:bg-white hover:scale-110 group-hover:opacity-100 md:h-12 md:w-12"
                >
                  ❮
                </button>
                <button
                  onClick={slideRight}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/80 text-xl font-bold text-stone-900 opacity-90 shadow-lg transition-all hover:bg-white hover:scale-110 group-hover:opacity-100 md:h-12 md:w-12"
                >
                  ❯
                </button>
              </>
            )}

            <div
              className="flex [--slide-width:100%] md:[--slide-width:50%]"
              style={{
                transform: `translateX(calc(-${currentIndex} * var(--slide-width)))`,
                transition: isTransitioning
                  ? "transform 700ms ease-in-out"
                  : "none",
              }}
              onTransitionEnd={() => {
                if (currentIndex >= displayPhotos.length) {
                  setIsTransitioning(false);
                  setCurrentIndex(0);
                }
              }}
            >
              {!isLoading &&
                displayPhotos.length > 0 &&
                [...displayPhotos, displayPhotos[0], displayPhotos[1]].map(
                  (photoUrl, index) => (
                    <div
                      key={index}
                      className="w-(--slide-width) shrink-0 px-2 md:px-3"
                    >
                      <div
                        className="relative h-64 w-full cursor-zoom-in overflow-hidden rounded-[1.5rem] border border-white/70 shadow-[0_18px_45px_rgba(15,23,42,0.14)] md:h-96 hover-lift"
                        onClick={() => openZoom(photoUrl)}
                      >
                        <Image
                          src={photoUrl}
                          alt={`Annual Function Image ${index + 1}`}
                          fill
                          priority={index < 2}
                          quality={75}
                          className="object-cover transition duration-500 hover:scale-105 hover:opacity-95"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                  ),
                )}
            </div>
          </div>
        </div>
      </section>

      {/* 5. ABOUT THE INSTITUTE & LOCATION */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-surface-strong overflow-hidden rounded-[2rem] p-6 md:p-10 lg:p-12 animate-fade-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* About & Affiliations */}
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-amber-800/80">
                  About
                </p>
                <h2 className="text-3xl font-bold mb-6 text-stone-900">
                  About the Institute
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-stone-600">
                  Sri Siddhi Academy of Art has been a cornerstone of cultural
                  education for nearly two decades. We are committed to
                  preserving traditional art forms while nurturing the next
                  generation of creative minds.
                </p>
                <div className="rounded-3xl border border-amber-100 bg-amber-50/80 p-6">
                  <h3 className="mb-3 flex items-center gap-2 text-xl font-bold text-stone-900">
                    <span className="text-amber-600">★</span> Recognized
                    Affiliation
                  </h3>
                  <p className="text-stone-600">
                    Our curriculum and examination board are proudly affiliated
                    with the prestigious{" "}
                    <strong className="text-stone-900">
                      Pracheen Kala Kendra, Chandigarh
                    </strong>
                    , ensuring that our students receive globally recognized
                    certifications from Prarambhik up to the Visharad levels.
                  </p>
                </div>
              </div>

              {/* Location & Classes */}
              <div className="rounded-[1.75rem] bg-white/90 p-8 text-stone-900 shadow-[0_30px_70px_rgba(15,23,42,0.12)] flex flex-col justify-between border border-white/80 animate-fade-up-delayed">
                <div>
                  <h2 className="text-2xl font-bold mb-2">
                    Visit Our Classrooms
                  </h2>
                  <p className="text-stone-600 mb-6">
                    We invite you to experience our vibrant learning environment
                    in person.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center shrink-0 text-amber-700 font-bold text-xl">
                        📍
                      </div>
                      <div>
                        <h4 className="font-bold text-stone-900">
                          Sri Siddhi Academy of Art
                        </h4>
                        <p className="text-stone-600">
                          Sri Sri Ravishankar Vidya Mandir, Sector 1<br />
                          Rourkela, Odisha 769008
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href="https://maps.app.goo.gl/fZ8TjWwK8WMQHv2i8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center w-full bg-gradient-to-r from-amber-700 to-orange-600 text-white font-bold py-3 px-4 rounded-full shadow-lg shadow-amber-700/20 transition hover:scale-[1.01]"
                  >
                    Open in Google Maps
                  </a>
                  <Link
                    href="/contacts"
                    className="block text-center w-full border border-stone-200 text-stone-700 font-bold py-3 px-4 rounded-full hover:bg-stone-50 transition"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}