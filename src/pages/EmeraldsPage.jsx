import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, HelpCircle, ArrowRight, Check } from 'lucide-react';
import RequirementBuilder from '../components/RequirementBuilder';
import EnquirySection from '../components/EnquirySection';
import SEOHead from '../components/SEOHead';

export default function EmeraldsPage() {
  const emeraldSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Natural Certified Emeralds — Colombian & Zambian Sourcing",
    "image": "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200",
    "description": "Certified natural emeralds sourced to exact specifications. Sourcing from Colombian Muzo and Chivor mines, Zambian Kagem deposits, and Panjshir valley. Minor and No-Oil certified stones with GIA, Gübelin, and SSEF documentation.",
    "brand": {
      "@type": "Brand",
      "name": "Facette & Co"
    },
    "category": "Precious Gemstones > Emeralds",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "1500",
      "highPrice": "500000",
      "offerCount": "150"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between Colombian and Zambian emeralds?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Colombian emeralds (from Muzo, Chivor, and Coscuez) are renowned for their warm, glowing 'grass-green' or vivid bluish-green hue driven by trace amounts of chromium with minimal iron. Zambian emeralds contain higher iron content, exhibiting a deep, saturated bluish-green with exceptional crystalline clarity."
        }
      },
      {
        "@type": "Question",
        "name": "What does 'No Oil' or 'Minor Oil' mean in certified emeralds?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Virtually all natural emeralds develop microscopic natural fissures during crystallization known as 'jardin'. Traditional cedarwood oil is often used to clarify light transmission. Stones certified as 'No Oil' (Untreated) are extraordinarily rare and command the highest investment premiums."
        }
      },
      {
        "@type": "Question",
        "name": "Which gemological labs certify Facette & Co emeralds?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every exceptional emerald sourced by Facette & Co is verified through world-renowned independent gemological institutions including GIA, Gübelin, SSEF, GRS, and IGI."
        }
      }
    ]
  };

  const origins = [
    {
      name: 'Colombian Muzo & Chivor',
      trait: 'Warm electric green with minimal iron; world-benchmark vivid green color saturation.',
      rarity: 'Highest Historic Prestige',
    },
    {
      name: 'Zambian Kagem',
      trait: 'Deep bluish-green with remarkable clarity, structural durability and crystalline brilliance.',
      rarity: 'Modern High Jewellery Benchmark',
    },
    {
      name: 'Afghan Panjshir Valley',
      trait: 'Luminous light-to-medium minty green crystalline transparency with delicate silk patterns.',
      rarity: 'Connoisseur Specialty',
    },
  ];

  const cuts = [
    { name: 'Traditional Emerald Cut', desc: 'Classic step-cut corners engineered to showcase crystal depth and reduce facet strain.' },
    { name: 'Antique Cushion Cut', desc: 'Curved pillow contours with brilliant-style pavilion facets for incandescent scintillation.' },
    { name: 'Sugarloaf & Cabochon', desc: 'Smooth domed geometry highlighting the rich silky depth and velvety body color.' },
    { name: 'Matched Pairs & Suites', desc: 'Identically calibrated stones paired for high jewellery earrings and collar necklaces.' },
  ];

  return (
    <div className="bg-[#090C0E] text-[#E9E4DC] min-h-screen pt-24">
      <SEOHead
        title="Certified Natural Emeralds | Colombian & Zambian Sourcing | Facette & Co"
        description="Source natural, untreated, and minor-oil certified emeralds from Colombian Muzo and Zambian Kagem origins. Independent GIA, Gübelin, and SSEF certification."
        keywords="colombian emeralds, muzo emerald, zambian emerald, natural certified emerald, no oil emerald, investment emeralds, Facette & Co"
        schema={{ ...emeraldSchema, ...faqSchema }}
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 px-6 md:px-12 border-b border-[#D5B581]/15">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[11px] font-sans tracking-[0.25em] text-[#D5B581] uppercase font-semibold block">
              SPECIFICATION SOURCING &bull; EMERALDS
            </span>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light text-[#E9E4DC] leading-[1.08] uppercase">
              Natural Emeralds, <br />
              <span className="italic text-[#D5B581] font-normal">
                Curated by Origin &amp; Clarity.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#D6D5D0]/85 font-light leading-relaxed max-w-xl">
              From historic Muzo mines to modern Zambian reserves, we source certified natural beryls calibrated to your exact tone, saturation, cut, and treatment tolerances.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="#builder"
                className="bg-[#D5B581] hover:bg-[#E9E4DC] text-[#090C0E] font-sans uppercase tracking-[0.25em] text-xs font-semibold py-4 px-8 transition-colors inline-flex items-center gap-2"
              >
                REQUEST EMERALD SPECIFICATION
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-6 border-t border-[#D5B581]/15 flex items-center gap-6 text-xs text-[#D6D5D0]/60">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#D5B581]" />
                <span>No-Oil &amp; Minor-Oil Verification</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#D5B581]" />
                <span>GIA &bull; Gübelin &bull; SSEF</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-square rounded-sm overflow-hidden border border-[#D5B581]/30 group">
              <img
                src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop"
                alt="Unheated vivid green natural emerald crystal"
                className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090C0E] via-transparent to-transparent opacity-70" />
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#0E1318]/90 backdrop-blur-md border border-[#D5B581]/25">
                <div className="text-[10px] tracking-[0.2em] text-[#D5B581] uppercase font-semibold">
                  COLOMBIAN MUZO PROVENANCE
                </div>
                <div className="text-xs text-[#E9E4DC] font-serif italic mt-0.5">
                  Vivid Green &bull; Insignificant Oil &bull; Certified SSEF
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Provenance & Clarity Grading */}
      <section className="py-24 px-6 md:px-12 bg-[#0E1318]/50 border-b border-[#D5B581]/15">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="max-w-2xl">
            <span className="text-[11px] font-sans tracking-[0.25em] text-[#D5B581] uppercase font-semibold block mb-2">
              PROVENANCE MATRIX
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#E9E4DC]">
              Origins Defined by Trace Elements.
            </h2>
            <p className="mt-3 text-sm text-[#D6D5D0]/80 font-light leading-relaxed">
              We provide laser Raman spectroscopy and origin fingerprinting for every significant gemstone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {origins.map((orig) => (
              <div key={orig.name} className="p-8 bg-[#090C0E] border border-[#D5B581]/20 rounded-sm space-y-4">
                <span className="text-[10px] tracking-[0.2em] text-[#D5B581] uppercase font-sans font-semibold">
                  {orig.rarity}
                </span>
                <h3 className="font-serif text-2xl text-[#E9E4DC] font-light">{orig.name}</h3>
                <p className="text-xs text-[#D6D5D0]/80 font-light leading-relaxed">{orig.trait}</p>
              </div>
            ))}
          </div>

          {/* Clarity & Oil Treatment Scale */}
          <div className="p-8 md:p-10 bg-[#090C0E] border border-[#D5B581]/25 rounded-sm space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#D5B581]/15 pb-4">
              <div>
                <h3 className="font-serif text-2xl text-[#E9E4DC]">Treatment &amp; Oil Disclosure Protocol</h3>
                <p className="text-xs text-[#D6D5D0]/70 font-light mt-1">
                  Facette &amp; Co adheres strictly to CIBJO and ICA transparency guidelines.
                </p>
              </div>
              <span className="text-[10px] font-sans tracking-[0.2em] text-[#D5B581] uppercase bg-[#0E1318] px-3 py-1.5 border border-[#D5B581]/20">
                LAB CERTIFIED DISCLOSURE
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs font-sans">
              <div className="p-4 bg-[#0E1318] border border-[#D5B581]/15 rounded">
                <span className="text-[#D5B581] font-semibold block uppercase tracking-wider mb-1">None / Untreated</span>
                <p className="text-[#D6D5D0]/70 font-light">Zero clarity enhancement. Rarest 0.5% tier globally.</p>
              </div>
              <div className="p-4 bg-[#0E1318] border border-[#D5B581]/15 rounded">
                <span className="text-[#D5B581] font-semibold block uppercase tracking-wider mb-1">Insignificant Oil</span>
                <p className="text-[#D6D5D0]/70 font-light">Traces detectable only under high magnification.</p>
              </div>
              <div className="p-4 bg-[#0E1318] border border-[#D5B581]/15 rounded">
                <span className="text-[#D5B581] font-semibold block uppercase tracking-wider mb-1">Minor Oil</span>
                <p className="text-[#D6D5D0]/70 font-light">Standard traditional cedarwood oil enhancement.</p>
              </div>
              <div className="p-4 bg-[#0E1318] border border-[#D5B581]/15 rounded">
                <span className="text-[#D5B581] font-semibold block uppercase tracking-wider mb-1">Moderate</span>
                <p className="text-[#D6D5D0]/70 font-light">Commercial tier for everyday jewellery applications.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shapes and Cuts */}
      <section className="py-24 px-6 md:px-12 bg-[#090C0E] border-b border-[#D5B581]/15">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="max-w-2xl">
            <span className="text-[11px] font-sans tracking-[0.25em] text-[#D5B581] uppercase font-semibold block mb-2">
              LAPIDARY ARTISTRY
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#E9E4DC]">
              Precision Cut Profiles.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cuts.map((c) => (
              <div key={c.name} className="p-6 bg-[#0E1318] border border-[#D5B581]/20 rounded-sm space-y-2">
                <h3 className="font-serif text-xl text-[#E9E4DC]">{c.name}</h3>
                <p className="text-xs text-[#D6D5D0]/70 font-light leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirement Builder Pre-loaded with Emerald */}
      <section id="builder" className="py-24 px-6 md:px-12 bg-[#0E1318]/40">
        <div className="max-w-7xl mx-auto">
          <RequirementBuilder initialStone="Emerald" mode="gemstone" />
        </div>
      </section>

      {/* FAQ Accordion Section for SEO Rich Snippets */}
      <section className="py-24 px-6 md:px-12 bg-[#090C0E] border-t border-[#D5B581]/15">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <span className="text-[11px] font-sans tracking-[0.25em] text-[#D5B581] uppercase font-semibold">
              GEMOLOGICAL GUIDANCE
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-[#E9E4DC]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqSchema.mainEntity.map((item, idx) => (
              <div key={idx} className="p-6 bg-[#0E1318] border border-[#D5B581]/20 rounded-sm space-y-2">
                <h3 className="font-serif text-xl text-[#E9E4DC] font-normal flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-[#D5B581] flex-shrink-0 mt-0.5" />
                  <span>{item.name}</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#D6D5D0]/80 font-light pl-8 leading-relaxed">
                  {item.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Section */}
      <EnquirySection defaultInterest="Gemstones" />
    </div>
  );
}
