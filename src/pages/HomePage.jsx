import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import ScrollImageHero from '../components/ScrollImageHero';
import PhilosophySection from '../components/PhilosophySection';
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

      {/* 01 — HERO SECTION: SMOOTH SCROLL TRANSFORMATION (ROUGH CRYSTAL -> FACETED GEM -> BESPOKE EMERALD RING) */}
      <ScrollImageHero />

      {/* 03 — FOUR VERTICALS: OVERWHELMINGLY VISUAL RECTANGULAR COMPOSITIONS (ANDURIL REFERENCE) */}
      <section className="py-20 sm:py-28 md:py-36 px-4 sm:px-6 lg:px-8 xl:px-12 bg-[#090C0E]">
        <div className="max-w-[1540px] mx-auto">
          {/* Minimal Architectural Header */}
          <div className="mb-8 sm:mb-12 flex items-baseline justify-between border-b border-[#D5B581]/20 pb-4">
            <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.3em] text-[#D5B581] uppercase font-semibold">
              FOUR VERTICALS
            </span>
            <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.25em] text-[#D6D5D0]/50 uppercase font-light hidden sm:inline">
              ATELIER DISCIPLINES
            </span>
          </div>

          {/* Four Large Rectangular Visual Compositions with Refined Borders — Anduril Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 lg:grid-rows-2 gap-3 sm:gap-4 lg:gap-5 min-h-[700px] lg:h-[780px] xl:h-[860px]">
            {/* 01 — GEMSTONES (Tall Full-Height Portrait: Left Column) */}
            <Link
              to={verticals[0].link}
              className="group relative md:col-span-1 lg:col-span-4 lg:row-span-2 h-[480px] sm:h-[560px] lg:h-full rounded-none overflow-hidden border border-[#D5B581]/25 hover:border-[#D5B581]/80 transition-colors duration-500 flex flex-col justify-end p-6 sm:p-8 xl:p-10 bg-[#090C0E] block select-none"
            >
              <img
                src={verticals[0].image}
                alt={verticals[0].title}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03] filter brightness-[0.88] group-hover:brightness-100 will-change-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

              <div className="relative z-10 flex items-end justify-between gap-4">
                <div className="max-w-[85%]">
                  <h3 className="text-2xl sm:text-3xl xl:text-4xl font-serif text-[#E9E4DC] font-light uppercase tracking-[0.12em] sm:tracking-[0.15em] group-hover:text-[#D5B581] transition-colors duration-300">
                    {verticals[0].title}
                  </h3>
                  <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-[#D6D5D0]/90 font-sans font-light leading-relaxed">
                    {verticals[0].desc}
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#E9E4DC]/60 group-hover:text-[#D5B581] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0 mb-1" />
              </div>
            </Link>

            {/* 02 — DESIGN & MANUFACTURING (Wide Landscape Composition: Top-Right) */}
            <Link
              to={verticals[1].link}
              className="group relative md:col-span-1 lg:col-span-8 lg:row-span-1 h-[320px] sm:h-[380px] lg:h-full rounded-none overflow-hidden border border-[#D5B581]/25 hover:border-[#D5B581]/80 transition-colors duration-500 flex flex-col justify-end p-6 sm:p-8 xl:p-10 bg-[#090C0E] block select-none"
            >
              <img
                src={verticals[1].image}
                alt={verticals[1].title}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03] filter brightness-[0.88] group-hover:brightness-100 will-change-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

              <div className="relative z-10 flex items-end justify-between gap-4">
                <div className="max-w-[85%]">
                  <h3 className="text-2xl sm:text-3xl xl:text-4xl font-serif text-[#E9E4DC] font-light uppercase tracking-[0.12em] sm:tracking-[0.15em] group-hover:text-[#D5B581] transition-colors duration-300">
                    {verticals[1].title}
                  </h3>
                  <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-[#D6D5D0]/90 font-sans font-light leading-relaxed">
                    {verticals[1].desc}
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#E9E4DC]/60 group-hover:text-[#D5B581] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0 mb-1" />
              </div>
            </Link>

            {/* 03 — FASHION HARDWARE (Rectangular Composition: Bottom-Left of Right Side) */}
            <Link
              to={verticals[2].link}
              className="group relative md:col-span-1 lg:col-span-4 lg:row-span-1 h-[300px] sm:h-[340px] lg:h-full rounded-none overflow-hidden border border-[#D5B581]/25 hover:border-[#D5B581]/80 transition-colors duration-500 flex flex-col justify-end p-5 sm:p-7 xl:p-8 bg-[#090C0E] block select-none"
            >
              <img
                src={verticals[2].image}
                alt={verticals[2].title}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03] filter brightness-[0.88] group-hover:brightness-100 will-change-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

              <div className="relative z-10 flex items-end justify-between gap-4">
                <div className="max-w-[85%]">
                  <h3 className="text-xl sm:text-2xl xl:text-3xl font-serif text-[#E9E4DC] font-light uppercase tracking-[0.12em] sm:tracking-[0.15em] group-hover:text-[#D5B581] transition-colors duration-300">
                    {verticals[2].title}
                  </h3>
                  <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-[#D6D5D0]/90 font-sans font-light leading-relaxed">
                    {verticals[2].desc}
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#E9E4DC]/60 group-hover:text-[#D5B581] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0 mb-1" />
              </div>
            </Link>

            {/* 04 — CORPORATE GIFTING (Rectangular Composition: Bottom-Right of Right Side) */}
            <Link
              to={verticals[3].link}
              className="group relative md:col-span-1 lg:col-span-4 lg:row-span-1 h-[300px] sm:h-[340px] lg:h-full rounded-none overflow-hidden border border-[#D5B581]/25 hover:border-[#D5B581]/80 transition-colors duration-500 flex flex-col justify-end p-5 sm:p-7 xl:p-8 bg-[#090C0E] block select-none"
            >
              <img
                src={verticals[3].image}
                alt={verticals[3].title}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03] filter brightness-[0.88] group-hover:brightness-100 will-change-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

              <div className="relative z-10 flex items-end justify-between gap-4">
                <div className="max-w-[85%]">
                  <h3 className="text-xl sm:text-2xl xl:text-3xl font-serif text-[#E9E4DC] font-light uppercase tracking-[0.12em] sm:tracking-[0.15em] group-hover:text-[#D5B581] transition-colors duration-300">
                    {verticals[3].title}
                  </h3>
                  <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-[#D6D5D0]/90 font-sans font-light leading-relaxed">
                    {verticals[3].desc}
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#E9E4DC]/60 group-hover:text-[#D5B581] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0 mb-1" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 04 — FACETTE PHILOSOPHY: SCROLL-BASED PROGRESSIVE TEXT REVEAL (PDF 1, Page 6-7) */}
      <PhilosophySection />

      {/* 05 — CONNECTED BY CRAFT: INTERACTIVE WORLD MAP (PDF 2, Page 7-10) */}
      <WorldMapSection />

      {/* 06 — FINAL ENQUIRY SECTION (PDF 2, Page 10-13) */}
      <EnquirySection />
    </div>
  );
}
