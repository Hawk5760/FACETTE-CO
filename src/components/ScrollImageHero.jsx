import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, Sparkles, ChevronRight } from 'lucide-react';

export default function ScrollImageHero() {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [smoothProgress, setSmoothProgress] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Exact 3 images provided by user
  const slides = [
    {
      id: 0,
      eyebrow: "01 / UNREFINED ORIGIN",
      badge: "NATURAL SPECIMEN",
      title: "FROM RAW EARTH",
      subtitle: "Unshaped character, deep mineral heritage, and the pure geological potential of rare Colombian rough crystals.",
      image: "/assets/hero-emerald-rough.jpg",
      alt: "Facette & Co Natural Rough Emerald Crystal",
      stepName: "ROUGH CRYSTAL",
      metadata: "ORIGIN: COLOMBIA • UNTREATED ROUGH • GEOLOGICAL SPECIMEN"
    },
    {
      id: 1,
      eyebrow: "02 / THE ART OF THE FACET",
      badge: "MASTER CRAFTSMANSHIP",
      title: "TO BESPOKE BRILLIANCE",
      subtitle: "Masterfully proportioned and precision-faceted to awaken luminous brilliance and architectural fire from within.",
      image: "/assets/hero-emerald-faceted.jpg",
      alt: "Facette & Co Precision-Cut Faceted Emerald Gemstone",
      stepName: "FACETED GEM",
      metadata: "CUT: OCTAGONAL STEP CUT • PRECISION FACETING • BESPOKE POLISH"
    },
    {
      id: 2,
      eyebrow: "03 / THE SIGNATURE",
      badge: "THE LUXURY HOUSE",
      title: "FACETTE & CO.",
      subtitle: "Where exceptional materials meet uncompromising design — objects conceived with intent.",
      image: "/assets/hero-emerald-ring.jpg",
      alt: "Facette & Co Bespoke Haute Joaillerie Emerald Ring",
      stepName: "HAUTE JOAILLERIE",
      metadata: "GENEVA • DUBAI • MUMBAI • BESPOKE COMMISSIONS"
    },
  ];

  // Preload all 3 images immediately for zero-flicker transitions
  useEffect(() => {
    let loadedCount = 0;
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
      img.onload = () => {
        loadedCount += 1;
        if (loadedCount >= slides.length) {
          setImagesLoaded(true);
        }
      };
      img.onerror = () => {
        loadedCount += 1;
        if (loadedCount >= slides.length) {
          setImagesLoaded(true);
        }
      };
    });
  }, []);

  // Track raw scroll progress
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

  // Smooth lerp interpolation for butter-smooth animation regardless of mouse wheel / trackpad / touch
  useEffect(() => {
    let animationFrameId;

    const lerp = (start, end, factor) => start + (end - start) * factor;

    const updateSmoothProgress = () => {
      setSmoothProgress((prev) => {
        // High responsive damping factor
        const next = lerp(prev, scrollProgress, 0.09);
        // Avoid infinite micro-updates
        if (Math.abs(next - scrollProgress) < 0.0005) {
          return scrollProgress;
        }
        return next;
      });
      animationFrameId = requestAnimationFrame(updateSmoothProgress);
    };

    animationFrameId = requestAnimationFrame(updateSmoothProgress);
    return () => cancelAnimationFrame(animationFrameId);
  }, [scrollProgress]);

  // Determine active slide index
  let activeIndex = 0;
  if (smoothProgress >= 0.6) {
    activeIndex = 2;
  } else if (smoothProgress >= 0.3) {
    activeIndex = 1;
  }

  // Smooth scroll jump to target stage
  const scrollToStage = (index) => {
    if (!containerRef.current) return;
    const containerTop = containerRef.current.offsetTop;
    const containerHeight = containerRef.current.offsetHeight - window.innerHeight;
    const targetY = containerTop + (index / 2) * containerHeight;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  // Compute precise opacities and scales for each image layer based on smoothProgress
  // Image 0 (Rough): 1 -> 0 over range [0.22, 0.46]
  // Image 1 (Faceted): 0 -> 1 over range [0.22, 0.46], stays 1, then 1 -> 0 over range [0.58, 0.78]
  // Image 2 (Emblem): 0 -> 1 over range [0.58, 0.78]
  const getImageStyles = (index) => {
    let opacity = 0;
    let scale = 1.0;

    if (index === 0) {
      if (smoothProgress < 0.22) {
        opacity = 1;
      } else if (smoothProgress <= 0.46) {
        opacity = Math.max(0, 1 - (smoothProgress - 0.22) / 0.24);
      } else {
        opacity = 0;
      }
      scale = 1 + smoothProgress * 0.08;
    } else if (index === 1) {
      if (smoothProgress < 0.22) {
        opacity = 0;
      } else if (smoothProgress <= 0.46) {
        opacity = Math.min(1, (smoothProgress - 0.22) / 0.24);
      } else if (smoothProgress < 0.58) {
        opacity = 1;
      } else if (smoothProgress <= 0.8) {
        opacity = Math.max(0, 1 - (smoothProgress - 0.58) / 0.22);
      } else {
        opacity = 0;
      }
      scale = 1.02 + (smoothProgress - 0.3) * 0.07;
    } else if (index === 2) {
      if (smoothProgress < 0.58) {
        opacity = 0;
      } else if (smoothProgress <= 0.8) {
        opacity = Math.min(1, (smoothProgress - 0.58) / 0.22);
      } else {
        opacity = 1;
      }
      scale = 1.01 + (smoothProgress - 0.65) * 0.06;
    }

    return {
      opacity,
      transform: `scale(${scale}) translateZ(0)`,
    };
  };


  return (
    <div
      ref={containerRef}
      className="relative w-full h-[320vh] bg-[#090C0E]"
      style={{ willChange: 'scroll-position' }}
    >
      {/* Sticky Fullscreen 100dvh Viewport */}
      <div className="sticky top-0 w-full h-screen min-h-[100dvh] max-h-[100dvh] overflow-hidden flex flex-col justify-between select-none">
        
        {/* Layer 1: Three Crossfading Background Images */}
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#090C0E]">
          {slides.map((slide, index) => {
            const styles = getImageStyles(index);
            return (
              <div
                key={slide.id}
                className="absolute inset-0 w-full h-full transition-opacity ease-out will-change-transform"
                style={{
                  opacity: styles.opacity,
                  transitionDuration: '80ms',
                }}
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-cover object-center filter blur-[2.5px] scale-[1.03] brightness-[0.84] contrast-[1.04]"
                  style={{
                    transform: styles.transform,
                    transition: 'transform 80ms ease-out',
                  }}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
            );
          })}
        </div>

        {/* Layer 2: Subtle Cinematic Vignettes, Depth of Field & Luxury Grading */}
        <div className="absolute inset-0 backdrop-blur-[1px] bg-black/20 pointer-events-none z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090C0E] via-[#090C0E]/20 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#090C0E]/20 to-[#090C0E]/85 pointer-events-none z-10" />
        <div className="absolute inset-0 bg-[#0E3D3D]/10 mix-blend-overlay pointer-events-none z-10" />

        {/* Precision Crosshairs / Architectural Frame Elements */}
        <div className="absolute inset-x-6 sm:inset-x-12 top-20 sm:top-24 bottom-6 sm:bottom-10 pointer-events-none z-20 border border-[#D5B581]/15 hidden md:block">
          <span className="absolute -top-1.5 -left-1.5 text-[#D5B581]/60 font-mono text-xs">+</span>
          <span className="absolute -top-1.5 -right-1.5 text-[#D5B581]/60 font-mono text-xs">+</span>
          <span className="absolute -bottom-1.5 -left-1.5 text-[#D5B581]/60 font-mono text-xs">+</span>
          <span className="absolute -bottom-1.5 -right-1.5 text-[#D5B581]/60 font-mono text-xs">+</span>
        </div>

        {/* Top Header Scrim / Navbar Spacer */}
        <div className="pt-20 sm:pt-24 md:pt-28 z-20 px-6 sm:px-12 flex justify-between items-center">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-[#090C0E]/70 border border-[#D5B581]/25 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#05624C] ring-2 ring-[#D5B581]/40 animate-pulse" />
            <span className="text-[9px] sm:text-[10px] font-sans tracking-[0.25em] text-[#D5B581] uppercase font-medium">
              THE TRANSFORMATION NARRATIVE
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-[10px] font-mono tracking-widest text-[#D5B581]/70">
            <span>STAGE {activeIndex + 1} / 3</span>
            <span className="text-[#D5B581]/30">|</span>
            <span>{Math.round(smoothProgress * 100)}% EXPLORED</span>
          </div>
        </div>

        {/* Center Editorial Headlines — Exact Copy from PDF 1, Page 3 */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-8 md:px-12 text-center my-auto w-full select-none">
          {/* Eyebrow: MATERIAL • DESIGN • CRAFT */}
          <div className="inline-flex items-center gap-2 mb-3 sm:mb-4 px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#090C0E]/80 border border-[#D5B581]/35 backdrop-blur-md shadow-2xl">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D5B581] animate-pulse" />
            <span className="text-[9px] sm:text-[11px] font-sans tracking-[0.3em] text-[#D5B581] uppercase font-semibold">
              MATERIAL &bull; DESIGN &bull; CRAFT
            </span>
          </div>

          {/* Headline: WHERE MATERIAL BECOMES POSSIBILITY. */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-light text-[#E9E4DC] leading-[1.08] sm:leading-[1.03] uppercase tracking-[0.12em] sm:tracking-[0.15em] max-w-5xl mx-auto drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
            WHERE MATERIAL <br />
            <span className="italic text-[#D5B581] font-normal">BECOMES POSSIBILITY.</span>
          </h1>

          {/* Supporting sentence */}
          <p className="mt-3 sm:mt-5 text-xs sm:text-base md:text-lg text-[#E9E4DC]/95 font-sans font-light max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)] px-2">
            Exceptional materials, considered design and precise execution &mdash; created for those who imagine beyond the ordinary.
          </p>

          {/* Small supporting line: GEMSTONES · DESIGN & MANUFACTURING · FASHION HARDWARE · CORPORATE GIFTING */}
          <div className="mt-4 sm:mt-6 inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[8.5px] sm:text-[10px] md:text-[11px] font-sans tracking-[0.2em] sm:tracking-[0.25em] text-[#D5B581] uppercase bg-[#090C0E]/75 px-3.5 sm:px-5 py-1.5 rounded border border-[#D5B581]/25 backdrop-blur-sm shadow-lg">
            <span>GEMSTONES</span>
            <span className="text-[#D5B581]/40">&bull;</span>
            <span>DESIGN &amp; MANUFACTURING</span>
            <span className="text-[#D5B581]/40">&bull;</span>
            <span>FASHION HARDWARE</span>
            <span className="text-[#D5B581]/40">&bull;</span>
            <span>CORPORATE GIFTING</span>
          </div>

          {/* Subtle Live Transformation Context Badge */}
          <div className="mt-3 sm:mt-4 text-[8px] sm:text-[9.5px] font-sans tracking-[0.22em] text-[#D6D5D0]/60 uppercase">
            <span>TRANSFORMATION &bull; STAGE {activeIndex + 1} OF 3: </span>
            <span className="text-[#D5B581] font-medium">{slides[activeIndex].stepName}</span>
          </div>
        </div>

        {/* Bottom Interactive Controls & Stage Stepper */}
        <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-8 md:px-12 pb-5 sm:pb-8 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 border-t border-[#D5B581]/20 bg-gradient-to-t from-[#090C0E] via-[#090C0E]/80 to-transparent">
          
          {/* Stepper Navigation: Click to Jump to Specific Phase */}
          <div className="flex items-center space-x-3 sm:space-x-6 text-[10px] sm:text-[11px] font-sans tracking-[0.2em] uppercase">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => scrollToStage(idx)}
                className={`py-2 px-2 transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  activeIndex === idx
                    ? 'text-[#D5B581] font-semibold scale-105'
                    : 'text-[#E9E4DC]/50 hover:text-[#E9E4DC]'
                }`}
                aria-label={`Jump to stage ${s.stepName}`}
              >
                <span
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeIndex === idx
                      ? 'bg-[#D5B581] ring-4 ring-[#D5B581]/25 scale-125'
                      : 'bg-[#E9E4DC]/30 hover:bg-[#E9E4DC]/60'
                  }`}
                />
                <span className="hidden xs:inline">{s.stepName}</span>
              </button>
            ))}
          </div>

          {/* Smooth Scroll Progress Bar & Down Hint */}
          <div className="flex items-center gap-3 sm:gap-5">
            <span className="text-[9px] sm:text-[10px] font-sans tracking-[0.25em] text-[#D5B581] uppercase font-light">
              {smoothProgress < 0.85 ? 'SCROLL TO TRANSFORM' : 'CONTINUE DOWN'}
            </span>
            <div className="w-20 sm:w-32 h-[3px] bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#05624C] via-[#0E3D3D] to-[#D5B581] transition-all duration-75"
                style={{ width: `${Math.min(100, Math.max(0, smoothProgress * 100))}%` }}
              />
            </div>
            <ArrowDown className="w-3.5 h-3.5 text-[#D5B581] animate-bounce" />
          </div>
        </div>

      </div>
    </div>
  );
}
