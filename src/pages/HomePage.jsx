import React from 'react';
import { Link } from 'react-router-dom';
import ScrollImageHero from '../components/ScrollImageHero';
import WorldMapSection from '../components/WorldMapSection';
import EnquirySection from '../components/EnquirySection';
import SEOHead from '../components/SEOHead';

export default function HomePage() {
  // SEO Schema for Facette & Co House
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "JewelryStore",
    "name": "FACETTE & CO",
    "description": "Modern luxury house × design studio × precision manufacturing company operating across gemstones, bespoke jewellery, luxury fashion hardware, and corporate gifting.",
    "url": "https://facetteandco.com",
    "logo": "https://facetteandco.com/assets/facette-emblem.png",
    "currenciesAccepted": "USD, EUR, GBP, INR, AED",
    "openingHours": "Mo-Fr 09:00-18:00",
    "priceRange": "$$$$",
    "areaServed": ["Global", "Europe", "Middle East", "Asia", "North America"],
    "knowsAbout": ["Certified Gemstones", "Colombian Emeralds", "Kashmir Sapphires", "Burmese Rubies", "Jewellery Engineering", "Luxury Metal Hardware"]
  };

  const verticals = [
    {
      id: 'gemstones',
      title: 'GEMSTONES',
      desc: 'Natural gemstones selected for colour, character and possibility.',
      link: '/gemstones',
      image: '/assets/vertical-gemstones.jpg',
    },
    {
      id: 'design-manufacturing',
      title: 'DESIGN & MANUFACTURING',
      desc: 'From an idea to a precisely finished piece.',
      link: '/jewellery',
      image: '/assets/vertical-jewellery.jpg',
    },
    {
      id: 'fashion-hardware',
      title: 'FASHION HARDWARE',
      desc: 'Distinctive metal components made to define the details.',
      link: '/fashion-hardware',
      image: '/assets/vertical-hardware.jpg',
    },
    {
      id: 'corporate-gifting',
      title: 'CORPORATE GIFTING',
      desc: 'Thoughtfully crafted objects made to be remembered.',
      link: '/corporate-gifting',
      image: '/assets/vertical-gifting.jpg',
    },
  ];

  return (
    <div className="bg-[#090C0E] text-[#E9E4DC] min-h-screen">
      <SEOHead
        title="FACETTE & CO — Materials with Possibility. Objects with Intent."
        description="Facette & Co is a modern luxury house, design studio and precision manufacturing company specializing in certified gemstones, bespoke jewellery engineering, fashion hardware, and corporate gifting."
        schema={organizationSchema}
      />

      {/* 01 — HERO SECTION: SMOOTH SCROLL IMAGE TRANSITIONS (STOREFRONT -> INTERIOR -> EDITORIAL RING) */}
      <ScrollImageHero />

      {/* 03 — FOUR VERTICALS: MONUMENTAL RECTANGULAR VISUAL COMPOSITIONS (ANDURIL REFERENCE) */}
      <section className="py-24 sm:py-32 md:py-40 px-4 sm:px-6 md:px-12 bg-[#090C0E]">
        <div className="max-w-[1540px] mx-auto">
          {/* Minimal Architectural Header */}
          <div className="mb-10 sm:mb-14 flex items-baseline justify-between border-b border-[#D5B581]/20 pb-4">
            <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.3em] text-[#D5B581] uppercase font-semibold">
              FOUR VERTICALS
            </span>
            <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.25em] text-[#D6D5D0]/50 uppercase font-light hidden sm:inline">
              ATELIER DISCIPLINES
            </span>
          </div>

          {/* Four Large Rectangular Visual Compositions with Refined Borders */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {verticals.map((vertical) => (
              <Link
                key={vertical.id}
                to={vertical.link}
                className="group relative h-[480px] sm:h-[580px] md:h-[660px] lg:h-[720px] rounded-none overflow-hidden border border-[#D5B581]/25 hover:border-[#D5B581]/70 transition-colors duration-700 flex flex-col justify-end p-6 sm:p-10 md:p-12 bg-[#090C0E] block"
              >
                {/* Background Image — Overwhelmingly Visual */}
                <img
                  src={vertical.image}
                  alt={vertical.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04] filter brightness-[0.82] group-hover:brightness-95 will-change-transform"
                />

                {/* Cinematic Overlays: Pure Visual Dominance with Subtle Bottom Text Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090C0E]/95 via-[#090C0E]/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-[#0E3D3D]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Precision Architectural Corner Crosshairs (Anduril Aesthetic) */}
                <span className="absolute top-3 left-3 text-[#D5B581]/40 font-mono text-xs select-none pointer-events-none group-hover:text-[#D5B581] transition-colors duration-500">
                  +
                </span>
                <span className="absolute top-3 right-3 text-[#D5B581]/40 font-mono text-xs select-none pointer-events-none group-hover:text-[#D5B581] transition-colors duration-500">
                  +
                </span>
                <span className="absolute bottom-3 left-3 text-[#D5B581]/40 font-mono text-xs select-none pointer-events-none group-hover:text-[#D5B581] transition-colors duration-500">
                  +
                </span>
                <span className="absolute bottom-3 right-3 text-[#D5B581]/40 font-mono text-xs select-none pointer-events-none group-hover:text-[#D5B581] transition-colors duration-500">
                  +
                </span>

                {/* Content: STRICTLY Category Name & ONE Short Sentence. Nothing More. */}
                <div className="relative z-10">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#E9E4DC] font-light uppercase tracking-[0.06em] group-hover:text-[#D5B581] transition-colors duration-500">
                    {vertical.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm md:text-base text-[#D6D5D0]/85 font-sans font-light leading-relaxed max-w-xl">
                    {vertical.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — FACETTE PHILOSOPHY: EDITORIAL TYPOGRAPHY SECTION (PDF 2, Page 6-7) */}
      <section className="py-32 md:py-44 px-6 md:px-12 bg-gradient-to-b from-[#090C0E] via-[#0E1318] to-[#090C0E] border-y border-[#D5B581]/15 relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-16 text-center">
          {/* Eyebrow */}
          <span className="text-[11px] font-sans tracking-[0.35em] text-[#D5B581] uppercase block font-semibold">
            BEYOND THE CONVENTIONAL
          </span>

          {/* Main Statement */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-light text-[#E9E4DC] leading-[1.2] uppercase tracking-wide">
            WE DO NOT DEFINE OURSELVES MERELY BY WHAT WE MANUFACTURE.
            <span className="block mt-4 text-[#D5B581] italic font-normal">
              NOR SIMPLY BY WHAT WE SUPPLY.
            </span>
          </h2>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg md:text-xl text-[#D6D5D0]/85 font-light leading-relaxed max-w-2xl mx-auto">
            Our vision is to create curated works of fine metal artistry that transcend conventional jewellery and materials. Every creation is conceived as a distinctive artistic expression, thoughtfully crafted to inspire designers, creators and visionaries.
          </p>

          <p className="text-sm sm:text-base text-[#D6D5D0]/70 font-light max-w-xl mx-auto italic">
            Rather than simply producing products, we shape objects that can be imagined, named and redefined by the creative minds who bring them to life.
          </p>

          {/* End Statement with Large Visual Treatment */}
          <div className="pt-12 border-t border-[#D5B581]/20">
            <h3 className="text-2xl sm:text-4xl md:text-5xl font-serif tracking-[0.2em] text-[#E9E4DC] uppercase font-light">
              MATERIALS WITH POSSIBILITY. <br />
              <span className="text-[#D5B581] font-normal">OBJECTS WITH INTENT.</span>
            </h3>
          </div>
        </div>
      </section>

      {/* 05 — CONNECTED BY CRAFT: INTERACTIVE WORLD MAP (PDF 2, Page 7-10) */}
      <WorldMapSection />

      {/* 06 — FINAL ENQUIRY SECTION (PDF 2, Page 10-13) */}
      <EnquirySection />
    </div>
  );
}
