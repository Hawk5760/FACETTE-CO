import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

export default function ScrollImageHero() {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Exact image URLs provided by the user
  const slides = [
    {
      id: 0,
      title: "WHERE MATERIAL BECOMES POSSIBILITY",
      eyebrow: "01 / THE ATELIER",
      tagline: "Facette & Co operates as a modern luxury house, design studio and precision manufacturing company.",
      image: "/assets/hero-storefront.jpg",
      fallback: "/assets/hero-storefront.png",
      alt: "Facette & Co Luxury Boutique Storefront",
      stepName: "STOREFRONT",
    },
    {
      id: 1,
      title: "STEP INSIDE THE SHOWROOM",
      eyebrow: "02 / THE HOUSE",
      tagline: "A space conceived for designers, visionaries and creators who imagine beyond the ordinary.",
      image: "/assets/hero-interior.png",
      fallback: "/assets/hero-interior.png",
      alt: "Facette & Co Interior Luxury Showroom",
      stepName: "INTERIOR",
    },
    {
      id: 2,
      title: "MATERIALS WITH POSSIBILITY",
      eyebrow: "03 / THE CRAFT",
      tagline: "Exceptional materials, considered design and precise execution — objects crafted with intent.",
      image: "/assets/hero-editorial.jpg",
      fallback: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2000&auto=format&fit=crop",
      alt: "Facette & Co High Jewellery Ring Editorial",
      stepName: "EDITORIAL",
    },
  ];

  // Calculate scroll position relative to container
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.offsetHeight - window.innerHeight;
      if (containerHeight <= 0) return;

      const progress = Math.min(Math.max(-rect.top / containerHeight, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine active slide index based on progress: [0..0.33] -> 0, [0.33..0.66] -> 1, [0.66..1.0] -> 2
  let activeIndex = 0;
  if (scrollProgress >= 0.62) {
    activeIndex = 2;
  } else if (scrollProgress >= 0.3) {
    activeIndex = 1;
  }

  // Smooth scroll to a specific stage
  const scrollToStage = (index) => {
    if (!containerRef.current) return;
    const containerTop = containerRef.current.offsetTop;
    const containerHeight = containerRef.current.offsetHeight - window.innerHeight;
    const targetY = containerTop + (index / 2) * containerHeight;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  return (
    <div ref={containerRef} className="relative w-full h-[260vh] sm:h-[300vh] bg-[#090C0E]">
      {/* Sticky Fullscreen Viewport with 100dvh for zero mobile jump */}
      <div className="sticky top-0 w-full h-screen min-h-[100dvh] max-h-[100dvh] overflow-hidden flex flex-col justify-between">
        {/* Layered Background Images with Smooth Transition */}
        {slides.map((slide, index) => {
          // Opacity calculation for silky smooth crossfade
          let opacity = 0;
          let scale = 1.05;

          if (index === 0) {
            opacity = scrollProgress < 0.35 ? 1 : Math.max(0, 1 - (scrollProgress - 0.35) * 6);
            scale = 1 + scrollProgress * 0.08;
          } else if (index === 1) {
            if (scrollProgress >= 0.28 && scrollProgress < 0.68) {
              const fadeIn = Math.min(1, (scrollProgress - 0.28) * 6);
              const fadeOut = scrollProgress > 0.62 ? Math.max(0, 1 - (scrollProgress - 0.62) * 6) : 1;
              opacity = Math.min(fadeIn, fadeOut);
            }
            scale = 1.02 + (scrollProgress - 0.3) * 0.08;
          } else if (index === 2) {
            opacity = scrollProgress >= 0.6 ? Math.min(1, (scrollProgress - 0.6) * 6) : 0;
            scale = 1.02 + (scrollProgress - 0.6) * 0.08;
          }

          return (
            <div
              key={slide.id}
              className="absolute inset-0 transition-opacity duration-700 ease-out will-change-transform"
              style={{ opacity }}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                onError={(e) => {
                  if (e.target.src !== slide.fallback) {
                    e.target.src = slide.fallback;
                  }
                }}
                className="w-full h-full object-cover transition-transform duration-1000 ease-out filter brightness-[0.78]"
                style={{ transform: `scale(${scale})` }}
              />
            </div>
          );
        })}

        {/* Cinematic Vignette & Luxury Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#090C0E]/80 via-transparent to-[#090C0E]/95 pointer-events-none z-10" />
        <div className="absolute inset-0 bg-[#0E3D3D]/15 mix-blend-overlay pointer-events-none z-10" />

        {/* Top Spacer for Navbar */}
        <div className="pt-16 sm:pt-20 md:pt-24 z-20" />

        {/* Center Editorial Headlines that change smoothly */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-8 md:px-12 text-center my-auto transition-all duration-700">
          <div className="inline-flex items-center gap-2 mb-3 sm:mb-4 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#090C0E]/70 border border-[#D5B581]/30 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D5B581] animate-ping" />
            <span className="text-[9px] sm:text-[11px] font-sans tracking-[0.25em] sm:tracking-[0.3em] text-[#D5B581] uppercase font-semibold">
              {slides[activeIndex].eyebrow}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-light text-[#E9E4DC] leading-[1.12] sm:leading-[1.05] uppercase tracking-tight transition-all duration-700 max-w-4xl mx-auto">
            {slides[activeIndex].title}
          </h1>

          <p className="mt-3 sm:mt-6 text-xs sm:text-base md:text-lg text-[#D6D5D0]/90 font-light max-w-2xl mx-auto leading-relaxed transition-all duration-700 line-clamp-3 sm:line-clamp-none px-2">
            {slides[activeIndex].tagline}
          </p>

          <div className="mt-4 sm:mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[9px] sm:text-xs font-sans tracking-widest text-[#D5B581] uppercase font-light">
            <span>GEMSTONES</span>
            <span className="hidden sm:inline">&bull;</span>
            <span>DESIGN &amp; MANUFACTURING</span>
            <span className="hidden sm:inline">&bull;</span>
            <span>FASHION HARDWARE</span>
          </div>
        </div>

        {/* Bottom Interactive Controls & Stage Stepper */}
        <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-8 md:px-12 pb-4 sm:pb-6 pt-3 sm:pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6 border-t border-[#D5B581]/20 bg-gradient-to-t from-[#090C0E] to-transparent">
          {/* Stepper Navigation */}
          <div className="flex items-center space-x-4 sm:space-x-6 text-[10px] sm:text-[11px] font-sans tracking-[0.18em] sm:tracking-[0.2em] uppercase">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => scrollToStage(idx)}
                className={`py-2 px-1 transition-all duration-300 flex items-center gap-1.5 sm:gap-2 active:scale-95 ${
                  activeIndex === idx
                    ? 'text-[#D5B581] font-semibold scale-105'
                    : 'text-[#E9E4DC]/50 hover:text-[#E9E4DC]'
                }`}
                aria-label={`Jump to ${s.stepName}`}
              >
                <span
                  className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all ${
                    activeIndex === idx ? 'bg-[#D5B581] ring-4 ring-[#D5B581]/20' : 'bg-[#E9E4DC]/30'
                  }`}
                />
                <span>{s.stepName}</span>
              </button>
            ))}
          </div>

          {/* Scroll Down Hint & Progress Bar */}
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="text-[9px] sm:text-[10px] font-sans tracking-[0.2em] sm:tracking-[0.25em] text-[#D5B581]/80 uppercase">
              {scrollProgress < 0.9 ? 'SCROLL TO EXPLORE' : 'CONTINUE DOWN'}
            </span>
            <div className="w-16 sm:w-24 h-[2px] bg-white/10 rounded overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#05624C] to-[#D5B581] transition-all duration-150"
                style={{ width: `${scrollProgress * 100}%` }}
              />
            </div>
            <ArrowDown className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#D5B581] animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  );
}
