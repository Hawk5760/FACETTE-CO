import React, { useState, useEffect, useRef } from 'react';

export default function PhilosophySection() {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [smoothProgress, setSmoothProgress] = useState(0);

  // 3 Philosophy Stages — each with dedicated luxury imagery and non-overlapping copy from PDF 1
  const stages = [
    {
      id: 0,
      number: "01",
      tag: "THE MANIFESTO",
      eyebrow: "BEYOND THE CONVENTIONAL",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1600&auto=format&fit=crop",
      fallbackImage: "/assets/vertical-hardware.jpg",
      alt: "Facette & Co Fine Metal Artistry and Craft",
    },
    {
      id: 1,
      number: "02",
      tag: "THE CREATIVE VISION",
      eyebrow: "CURATED ARTISTIC EXPRESSION",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1600&auto=format&fit=crop",
      fallbackImage: "/assets/vertical-jewellery.jpg",
      alt: "Facette & Co Curated Fine Jewellery and Object Creation",
    },
    {
      id: 2,
      number: "03",
      tag: "THE ENDURING INTENT",
      eyebrow: "THE ENDURING MARK",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1600&auto=format&fit=crop",
      fallbackImage: "/assets/hero-editorial.jpg",
      alt: "Facette & Co Materials with Possibility, Objects with Intent",
    },
  ];

  // Track scroll position within this 300vh section
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;
      if (totalScrollable <= 0) return;

      const currentScroll = -rect.top;
      const rawProgress = Math.min(Math.max(currentScroll / totalScrollable, 0), 1);
      setScrollProgress(rawProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth lerp damping for zero-jitter, cinematic transitions
  useEffect(() => {
    let animId;
    const lerp = (start, end, factor) => start + (end - start) * factor;

    const tick = () => {
      setSmoothProgress((prev) => {
        const next = lerp(prev, scrollProgress, 0.09);
        if (Math.abs(next - scrollProgress) < 0.0005) return scrollProgress;
        return next;
      });
      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [scrollProgress]);

  // Determine active stage
  let activeIndex = 0;
  if (smoothProgress >= 0.66) {
    activeIndex = 2;
  } else if (smoothProgress >= 0.33) {
    activeIndex = 1;
  }

  // Smooth jump to specific stage
  const scrollToStage = (index) => {
    if (!containerRef.current) return;
    const containerTop = containerRef.current.offsetTop;
    const containerHeight = containerRef.current.offsetHeight - window.innerHeight;
    const targetY = containerTop + (index / 2) * containerHeight;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  // Compute image crossfade opacity & subtle scale
  const getImageStyles = (index) => {
    let opacity = 0;
    let scale = 1.0;

    if (index === 0) {
      if (smoothProgress < 0.28) {
        opacity = 1;
        scale = 1.0 + smoothProgress * 0.12;
      } else if (smoothProgress <= 0.42) {
        const factor = (smoothProgress - 0.28) / 0.14;
        opacity = Math.max(0, 1 - factor);
        scale = 1.03 + factor * 0.04;
      } else {
        opacity = 0;
      }
    } else if (index === 1) {
      if (smoothProgress < 0.26) {
        opacity = 0;
      } else if (smoothProgress <= 0.40) {
        const factor = (smoothProgress - 0.26) / 0.14;
        opacity = Math.min(1, factor);
        scale = 1.0 + factor * 0.03;
      } else if (smoothProgress < 0.62) {
        opacity = 1;
        scale = 1.03 + (smoothProgress - 0.40) * 0.08;
      } else if (smoothProgress <= 0.74) {
        const factor = (smoothProgress - 0.62) / 0.12;
        opacity = Math.max(0, 1 - factor);
        scale = 1.05 + factor * 0.03;
      } else {
        opacity = 0;
      }
    } else if (index === 2) {
      if (smoothProgress < 0.60) {
        opacity = 0;
      } else if (smoothProgress <= 0.74) {
        const factor = (smoothProgress - 0.60) / 0.14;
        opacity = Math.min(1, factor);
        scale = 1.0 + factor * 0.04;
      } else {
        opacity = 1;
        scale = 1.04 + (smoothProgress - 0.74) * 0.06;
      }
    }

    return {
      opacity,
      transform: `scale(${scale}) translateZ(0)`,
      transition: 'opacity 80ms ease-out',
    };
  };

  // Compute text crossfade styles — STRICTLY NON-OVERLAPPING
  const getTextStyles = (index) => {
    let opacity = 0;
    let translateY = 20;

    if (index === 0) {
      if (smoothProgress < 0.24) {
        opacity = 1;
        translateY = 0;
      } else if (smoothProgress <= 0.36) {
        const factor = (smoothProgress - 0.24) / 0.12;
        opacity = Math.max(0, 1 - factor);
        translateY = -24 * factor;
      } else {
        opacity = 0;
        translateY = -24;
      }
    } else if (index === 1) {
      if (smoothProgress < 0.32) {
        opacity = 0;
        translateY = 24;
      } else if (smoothProgress <= 0.44) {
        const factor = (smoothProgress - 0.32) / 0.12;
        opacity = Math.min(1, factor);
        translateY = 24 * (1 - factor);
      } else if (smoothProgress < 0.60) {
        opacity = 1;
        translateY = 0;
      } else if (smoothProgress <= 0.70) {
        const factor = (smoothProgress - 0.60) / 0.10;
        opacity = Math.max(0, 1 - factor);
        translateY = -24 * factor;
      } else {
        opacity = 0;
        translateY = -24;
      }
    } else if (index === 2) {
      if (smoothProgress < 0.66) {
        opacity = 0;
        translateY = 24;
      } else if (smoothProgress <= 0.78) {
        const factor = (smoothProgress - 0.66) / 0.12;
        opacity = Math.min(1, factor);
        translateY = 24 * (1 - factor);
      } else {
        opacity = 1;
        translateY = 0;
      }
    }

    return {
      opacity,
      transform: `translateY(${translateY}px) translateZ(0)`,
      pointerEvents: opacity > 0.4 ? 'auto' : 'none',
      visibility: opacity > 0.01 ? 'visible' : 'hidden',
    };
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[300vh] bg-[#090C0E]"
      style={{ willChange: 'scroll-position' }}
    >
      {/* Sticky Fullscreen 100dvh Viewport */}
      <div className="sticky top-0 w-full h-screen min-h-[100dvh] max-h-[100dvh] overflow-hidden flex flex-col justify-between select-none">
        
        {/* Layer 1: 3 Crossfading Background Images */}
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#090C0E]">
          {stages.map((stage, idx) => {
            const styles = getImageStyles(idx);
            return (
              <div
                key={stage.id}
                className="absolute inset-0 w-full h-full will-change-transform"
                style={{ opacity: styles.opacity }}
              >
                <img
                  src={stage.image}
                  alt={stage.alt}
                  onError={(e) => {
                    // Graceful fallback to local asset if external image is delayed
                    e.currentTarget.src = stage.fallbackImage;
                  }}
                  className="w-full h-full object-cover object-center filter blur-[1px] brightness-[0.45] contrast-[1.1]"
                  style={{
                    transform: styles.transform,
                    transition: 'transform 80ms ease-out',
                  }}
                  loading={idx === 0 ? "eager" : "lazy"}
                />
              </div>
            );
          })}
        </div>

        {/* Layer 2: Subtle Cinematic Scrim & Vignette for Total Text Legibility */}
        <div className="absolute inset-0 bg-black/45 pointer-events-none z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090C0E] via-transparent to-[#090C0E]/80 pointer-events-none z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#090C0E]/80 via-transparent to-[#090C0E] pointer-events-none z-10" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#090C0E]/30 to-[#090C0E]/90 pointer-events-none z-10" />

        {/* Top Header Scrim / Progress Bar */}
        <div className="pt-20 sm:pt-24 z-20 px-6 sm:px-12 flex justify-between items-center max-w-7xl mx-auto w-full">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-[#090C0E]/80 border border-[#D5B581]/30 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D5B581] animate-pulse" />
            <span className="text-[9px] sm:text-[10px] font-sans tracking-[0.25em] text-[#D5B581] uppercase font-semibold">
              FACETTE PHILOSOPHY &bull; {stages[activeIndex].tag}
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-[10px] font-mono tracking-widest text-[#D5B581]/80">
            <span>STAGE {activeIndex + 1} / 3</span>
            <span className="text-[#D5B581]/30">|</span>
            <span>{Math.round(smoothProgress * 100)}% EXPLORED</span>
          </div>
        </div>

        {/* Center Editorial Panels — 3 STRICTLY SEPARATE STAGES, ZERO OVERLAPPING */}
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-8 text-center my-auto w-full">
          
          {/* ================= STAGE 1: THE MANIFESTO ================= */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center px-4 transition-all duration-300 ease-out"
            style={getTextStyles(0)}
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-[#090C0E]/85 border border-[#D5B581]/35 backdrop-blur-md shadow-lg">
              <span className="text-[9.5px] sm:text-[11px] font-sans tracking-[0.3em] text-[#D5B581] uppercase font-semibold">
                BEYOND THE CONVENTIONAL
              </span>
            </div>

            {/* Main Statement */}
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light text-[#E9E4DC] leading-[1.18] sm:leading-[1.14] uppercase tracking-[0.12em] sm:tracking-[0.15em] max-w-3xl mx-auto drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
              WE DO NOT DEFINE OURSELVES MERELY BY WHAT WE MANUFACTURE.
            </h2>

            {/* Reveal */}
            <span className="block mt-4 text-xl sm:text-3xl md:text-4xl lg:text-5xl font-serif italic text-[#D5B581] font-normal tracking-[0.08em] sm:tracking-[0.12em] drop-shadow-[0_2px_18px_rgba(0,0,0,0.9)]">
              NOR SIMPLY BY WHAT WE SUPPLY.
            </span>

            {/* Subtle Stage Note */}
            <div className="mt-6 text-[9px] sm:text-[10px] font-sans tracking-[0.25em] text-[#D6D5D0]/60 uppercase">
              ACT I &bull; CRAFT BEFORE PRODUCTION
            </div>
          </div>

          {/* ================= STAGE 2: THE CREATIVE VISION ================= */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center px-4 transition-all duration-300 ease-out"
            style={getTextStyles(1)}
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-[#090C0E]/85 border border-[#D5B581]/35 backdrop-blur-md shadow-lg">
              <span className="text-[9.5px] sm:text-[11px] font-sans tracking-[0.3em] text-[#D5B581] uppercase font-semibold">
                CURATED ARTISTIC EXPRESSION
              </span>
            </div>

            {/* Vision Body Copy */}
            <p className="text-base sm:text-xl md:text-2xl lg:text-3xl font-serif font-light text-[#E9E4DC] leading-relaxed max-w-3xl mx-auto drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
              Our vision is to create curated works of fine metal artistry that transcend conventional jewellery and materials.
            </p>

            {/* Supporting Copy */}
            <p className="mt-4 sm:mt-6 text-xs sm:text-base md:text-lg text-[#D6D5D0]/90 font-sans font-light leading-relaxed max-w-2xl mx-auto drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]">
              Every creation is conceived as a distinctive artistic expression, thoughtfully crafted to inspire designers, creators and visionaries.
            </p>

            {/* Subtle Stage Note */}
            <div className="mt-6 text-[9px] sm:text-[10px] font-sans tracking-[0.25em] text-[#D5B581]/70 uppercase">
              ACT II &bull; MATERIALS CONCEIVED WITH ARTISTRY
            </div>
          </div>

          {/* ================= STAGE 3: THE ENDURING INTENT ================= */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center px-4 transition-all duration-300 ease-out"
            style={getTextStyles(2)}
          >
            {/* Supporting Sentence */}
            <p className="text-xs sm:text-base md:text-lg text-[#D6D5D0]/90 font-sans font-light italic max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8 drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]">
              &ldquo;Rather than simply producing products, we shape objects that can be imagined, named and redefined by the creative minds who bring them to life.&rdquo;
            </p>

            {/* Climax Statement */}
            <div className="pt-6 border-t border-[#D5B581]/30 max-w-2xl mx-auto w-full">
              <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif tracking-[0.15em] sm:tracking-[0.2em] uppercase font-light text-[#E9E4DC] leading-tight drop-shadow-[0_4px_30px_rgba(0,0,0,0.98)]">
                MATERIALS WITH POSSIBILITY.
                <span className="block mt-2 text-[#D5B581] font-normal drop-shadow-[0_0_28px_rgba(213,181,129,0.5)]">
                  OBJECTS WITH INTENT.
                </span>
              </h3>
            </div>

            {/* Subtle Stage Note */}
            <div className="mt-6 text-[9px] sm:text-[10px] font-sans tracking-[0.25em] text-[#D5B581] uppercase font-semibold">
              ACT III &bull; THE SIGNATURE PHILOSOPHY
            </div>
          </div>

        </div>

        {/* Bottom Interactive Stage Controls & Visual Stepper */}
        <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-8 md:px-12 pb-5 sm:pb-8 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#D5B581]/20 bg-gradient-to-t from-[#090C0E] via-[#090C0E]/80 to-transparent">
          
          {/* Stepper Navigation: Click to Jump to Specific Phase */}
          <div className="flex items-center space-x-3 sm:space-x-6 text-[10px] sm:text-[11px] font-sans tracking-[0.2em] uppercase">
            {stages.map((st, idx) => (
              <button
                key={st.id}
                onClick={() => scrollToStage(idx)}
                className={`py-2 px-2 transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  activeIndex === idx
                    ? 'text-[#D5B581] font-semibold scale-105'
                    : 'text-[#E9E4DC]/50 hover:text-[#E9E4DC]'
                }`}
                aria-label={`Jump to stage ${st.number}`}
              >
                <span
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeIndex === idx
                      ? 'bg-[#D5B581] ring-4 ring-[#D5B581]/25 scale-125'
                      : 'bg-[#E9E4DC]/30 hover:bg-[#E9E4DC]/60'
                  }`}
                />
                <span className="hidden xs:inline">{st.tag}</span>
              </button>
            ))}
          </div>

          {/* Scroll Prompt */}
          <div className="flex items-center gap-2 text-[9px] sm:text-[10px] font-sans tracking-[0.25em] text-[#D5B581]/80 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D5B581] animate-ping" />
            <span>SCROLL TO PROGRESS PHILOSOPHY</span>
          </div>

        </div>

      </div>
    </section>
  );
}
