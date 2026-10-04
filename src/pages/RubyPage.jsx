import React from 'react';
import { ShieldCheck, Award, HelpCircle, ArrowRight, Check } from 'lucide-react';
import RequirementBuilder from '../components/RequirementBuilder';
import EnquirySection from '../components/EnquirySection';
import SEOHead from '../components/SEOHead';

export default function RubyPage() {
  const rubySchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Natural Certified Rubies — Burmese Pigeon's Blood & Mozambique",
    "image": "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200",
    "description": "Certified natural unheated rubies sourced to high jewellery specifications. Sourcing Burmese Mogok Pigeon's Blood and Mozambique Montepuez stones with GIA, Gübelin, and SSEF provenance verification.",
    "brand": {
      "@type": "Brand",
      "name": "Facette & Co"
    },
    "category": "Precious Gemstones > Rubies",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "2000",
      "highPrice": "1200000",
      "offerCount": "120"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What constitutes a 'Pigeon’s Blood' ruby classification?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "'Pigeon's Blood' (historically Ko-twe) is an exclusive gemological color distinction reserved for rubies displaying a vivid, saturated red with minimal secondary undertones and high chromium-induced fluorescence. Independent labs such as SSEF and Gübelin award this designation only after rigorous colorimetry testing."
        }
      },
      {
        "@type": "Question",
        "name": "Why are unheated rubies the gold standard for investment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Over 98% of gem-quality rubies on the global market undergo high-temperature thermal treatment to dissolve silk and alter blue undertones. Natural stones that achieved exceptional red color and crystalline clarity entirely in the earth without heat treatment represent supreme geological rarity and preserve exponential value appreciation."
        }
      },
      {
        "@type": "Question",
        "name": "How does Mozambique compare to historical Burmese rubies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While Burmese Mogok stones remain the pinnacle of historical provenance and velvety inner glow, Mozambique (Montepuez) deposits yield extraordinary crystalline transparency and saturated crimson hues, making them the preferred choice for contemporary high jewellery masterpieces."
        }
      }
    ]
  };

  const origins = [
    {
      name: 'Burma (Mogok Valley)',
      grade: "Pigeon's Blood Benchmark",
      desc: 'Legendary provenance famed for strong chromium fluorescence, soft rutile silk, and glowing internal fire that persists even in low light.',
    },
    {
      name: 'Mozambique (Montepuez)',
      grade: 'High Crystalline Purity',
      desc: 'Modern premier deposit yielding unheated stones of magnificent transparency, rich crimson depth, and superior crystal structures up to 10+ carats.',
    },
    {
      name: 'Madagascar & East Africa',
      grade: 'Vivid Red Fine Cuts',
      desc: 'Selected unheated crystal displaying deep garnet-red to vivid pinkish-red tones suited for calibrated layouts and matched suites.',
    },
  ];

  return (
    <div className="bg-[#090C0E] text-[#E9E4DC] min-h-screen pt-24">
      <SEOHead
        title="Unheated Natural Rubies | Burmese Pigeon's Blood & Mozambique | Facette & Co"
        description="Source certified unheated natural rubies with Pigeon's Blood color grade. Sourcing from Mogok (Burma) and Montepuez (Mozambique). GIA, Gübelin, and SSEF certified."
        keywords="pigeon blood ruby, burmese ruby, mogok ruby, unheated ruby, natural certified ruby, mozambique ruby, investment ruby, Facette & Co"
        schema={{ ...rubySchema, ...faqSchema }}
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 px-6 md:px-12 border-b border-[#D5B581]/15">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[11px] font-sans tracking-[0.25em] text-[#D5B581] uppercase font-semibold block">
              SPECIFICATION SOURCING &bull; RUBY
            </span>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light text-[#E9E4DC] leading-[1.08] uppercase">
              Unheated Rubies, <br />
              <span className="italic text-[#D5B581] font-normal">
                Born of Fire &amp; Pure Chromium.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#D6D5D0]/85 font-light leading-relaxed max-w-xl">
              From the storied marble veins of Mogok to the crystalline deposits of Mozambique, we source verified unheated corundum with incandescent red saturation and flawless provenance.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="#builder"
                className="bg-[#D5B581] hover:bg-[#E9E4DC] text-[#090C0E] font-sans uppercase tracking-[0.25em] text-xs font-semibold py-4 px-8 transition-colors inline-flex items-center gap-2"
              >
                REQUEST RUBY SPECIFICATION
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-6 border-t border-[#D5B581]/15 flex items-center gap-6 text-xs text-[#D6D5D0]/60">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#D5B581]" />
                <span>100% Unheated Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#D5B581]" />
                <span>Pigeon's Blood Lab Criteria</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-square rounded-sm overflow-hidden border border-[#D5B581]/30 group">
              <img
                src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop"
                alt="Natural unheated ruby gemstone"
                className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090C0E] via-transparent to-transparent opacity-70" />
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#0E1318]/90 backdrop-blur-md border border-[#D5B581]/25">
                <div className="text-[10px] tracking-[0.2em] text-[#D5B581] uppercase font-semibold">
                  BURMESE MOGOK UNHEATED
                </div>
                <div className="text-xs text-[#E9E4DC] font-serif italic mt-0.5">
                  Vivid Red &bull; High Fluorescence &bull; SSEF Certified
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Origins & Fluorescence Science */}
      <section className="py-24 px-6 md:px-12 bg-[#0E1318]/50 border-b border-[#D5B581]/15">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="max-w-2xl">
            <span className="text-[11px] font-sans tracking-[0.25em] text-[#D5B581] uppercase font-semibold block mb-2">
              GEOLOGICAL RIGOR
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#E9E4DC]">
              The Rare Chemistry of Red Corundum.
            </h2>
            <p className="mt-3 text-sm text-[#D6D5D0]/80 font-light leading-relaxed">
              Ruby requires aluminum oxide, chromium, and an almost complete absence of silica and iron — an exceptional geological coincidence occurring in only a handful of places on Earth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {origins.map((orig) => (
              <div key={orig.name} className="p-8 bg-[#090C0E] border border-[#D5B581]/20 rounded-sm space-y-3">
                <span className="text-[10px] tracking-[0.2em] text-[#D5B581] uppercase font-sans font-semibold">
                  {orig.grade}
                </span>
                <h3 className="font-serif text-2xl text-[#E9E4DC]">{orig.name}</h3>
                <p className="text-xs text-[#D6D5D0]/70 font-light leading-relaxed">{orig.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirement Builder Pre-loaded with Ruby */}
      <section id="builder" className="py-24 px-6 md:px-12 bg-[#090C0E]">
        <div className="max-w-7xl mx-auto">
          <RequirementBuilder initialStone="Ruby" mode="gemstone" />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 md:px-12 bg-[#0E1318]/40 border-t border-[#D5B581]/15">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <span className="text-[11px] font-sans tracking-[0.25em] text-[#D5B581] uppercase font-semibold">
              KNOWLEDGE &amp; ACQUISITION
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-[#E9E4DC]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqSchema.mainEntity.map((item, idx) => (
              <div key={idx} className="p-6 bg-[#090C0E] border border-[#D5B581]/20 rounded-sm space-y-2">
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

      <EnquirySection defaultInterest="Gemstones" />
    </div>
  );
}
