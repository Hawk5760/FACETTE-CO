import React from 'react';
import { ShieldCheck, Award, HelpCircle, ArrowRight, Check } from 'lucide-react';
import RequirementBuilder from '../components/RequirementBuilder';
import EnquirySection from '../components/EnquirySection';
import SEOHead from '../components/SEOHead';

export default function SapphiresPage() {
  const sapphireSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Natural Certified Sapphires — Royal Blue, Ceylon & Kashmir",
    "image": "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200",
    "description": "Natural certified sapphires sourced to exact client specifications. Sourcing Ceylon (Sri Lanka), Madagascar, Kashmir, and Burma origins. Unheated royal blue, cornflower blue, and padparadscha certified by GIA, SSEF, and Gübelin.",
    "brand": {
      "@type": "Brand",
      "name": "Facette & Co"
    },
    "category": "Precious Gemstones > Sapphires",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "1200",
      "highPrice": "750000",
      "offerCount": "200"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What defines Royal Blue versus Cornflower Blue sapphires?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Royal Blue represents a deeply saturated, vivid pure blue without dark or grey secondary modifiers, historically associated with Burmese and premium Ceylon or Madagascar corundum. Cornflower Blue exhibits a velvety, radiant pastel-to-medium blue reminiscent of the cornflower petal, famed for its gentle brilliance."
        }
      },
      {
        "@type": "Question",
        "name": "How does Facette & Co verify unheated natural sapphires?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every unheated stone is certified via Fourier-Transform Infrared (FTIR) spectroscopy, microscopic rutile silk examination, and Raman analysis performed by tier-one international gemological laboratories like Gübelin, SSEF, or GIA."
        }
      },
      {
        "@type": "Question",
        "name": "Can you source rare Padparadscha and fancy colour sapphires?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our direct trade relationships in Sri Lanka and East Africa allow us to source rare unheated Padparadscha (lotus blossom pink-orange), bi-colour peacock, canary yellow, and vibrant violet sapphires to order."
        }
      }
    ]
  };

  const colorGrades = [
    {
      name: 'Royal Blue',
      desc: 'The pinnacle of corundum saturation. Deep, authoritative vivid blue with zero extinction under ambient and evening lighting.',
      origin: 'Ceylon, Madagascar, Burma',
    },
    {
      name: 'Cornflower Blue',
      desc: 'Velvety, luminous medium blue exhibiting high light return and crystalline softness reminiscent of historical Kashmir stones.',
      origin: 'Kashmir heritage, Sri Lanka',
    },
    {
      name: 'Padparadscha',
      desc: 'The sacred salmon pink-orange gemstone named after the Sinhalese lotus flower. Exceptionally scarce in natural unheated crystal.',
      origin: 'Sri Lanka (Ceylon), Madagascar',
    },
    {
      name: 'Parti & Teal Sapphires',
      desc: 'Distinctive pleochroic stones exhibiting blends of deep forest green, lagoon blue, and golden flashes in custom cuts.',
      origin: 'Australia, Montana, East Africa',
    },
  ];

  return (
    <div className="bg-[#090C0E] text-[#E9E4DC] min-h-screen pt-24">
      <SEOHead
        title="Natural Ceylon & Kashmir Sapphires | Unheated Royal Blue | Facette & Co"
        description="Source certified unheated Ceylon, Kashmir, and Royal Blue sapphires. Direct trade access, FTIR verified unheated stones, GIA, SSEF, and Gübelin certification."
        keywords="royal blue sapphire, ceylon sapphire, kashmir sapphire, unheated sapphire, padparadscha sapphire, natural certified sapphires, Facette & Co"
        schema={{ ...sapphireSchema, ...faqSchema }}
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 px-6 md:px-12 border-b border-[#D5B581]/15">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[11px] font-sans tracking-[0.25em] text-[#D5B581] uppercase font-semibold block">
              SPECIFICATION SOURCING &bull; SAPPHIRES
            </span>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light text-[#E9E4DC] leading-[1.08] uppercase">
              Natural Sapphires, <br />
              <span className="italic text-[#D5B581] font-normal">
                Saturated with Royal Character.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#D6D5D0]/85 font-light leading-relaxed max-w-xl">
              From historic Sri Lankan gravels to Madagascar pegmatites, we curate unheated natural corundum verified by premier Swiss and American laboratories.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="#builder"
                className="bg-[#D5B581] hover:bg-[#E9E4DC] text-[#090C0E] font-sans uppercase tracking-[0.25em] text-xs font-semibold py-4 px-8 transition-colors inline-flex items-center gap-2"
              >
                REQUEST SAPPHIRE SPECIFICATION
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-6 border-t border-[#D5B581]/15 flex items-center gap-6 text-xs text-[#D6D5D0]/60">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#D5B581]" />
                <span>Unheated (No Thermal Enhancement)</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#D5B581]" />
                <span>SSEF &bull; Gübelin &bull; GIA Certified</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-square rounded-sm overflow-hidden border border-[#D5B581]/30 group">
              <img
                src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop"
                alt="Unheated royal blue natural sapphire gemstone"
                className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090C0E] via-transparent to-transparent opacity-70" />
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#0E1318]/90 backdrop-blur-md border border-[#D5B581]/25">
                <div className="text-[10px] tracking-[0.2em] text-[#D5B581] uppercase font-semibold">
                  CEYLON UNHEATED CORUNDUM
                </div>
                <div className="text-xs text-[#E9E4DC] font-serif italic mt-0.5">
                  Vivid Royal Blue &bull; Pure Crystalline Depth &bull; Certified GIA
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Color Spectrum */}
      <section className="py-24 px-6 md:px-12 bg-[#0E1318]/50 border-b border-[#D5B581]/15">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="max-w-2xl">
            <span className="text-[11px] font-sans tracking-[0.25em] text-[#D5B581] uppercase font-semibold block mb-2">
              COLOR CLASSIFICATION
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#E9E4DC]">
              The Nuances of Sapphire Hue.
            </h2>
            <p className="mt-3 text-sm text-[#D6D5D0]/80 font-light leading-relaxed">
              Every sapphire is evaluated in calibrated D65 standard daylight for tone, saturation, and absence of secondary grey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {colorGrades.map((grade) => (
              <div key={grade.name} className="p-8 bg-[#090C0E] border border-[#D5B581]/20 rounded-sm space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl text-[#E9E4DC]">{grade.name}</h3>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#D5B581] font-sans">
                    {grade.origin}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#D6D5D0]/80 font-light leading-relaxed">
                  {grade.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirement Builder Pre-loaded with Sapphire */}
      <section id="builder" className="py-24 px-6 md:px-12 bg-[#090C0E]">
        <div className="max-w-7xl mx-auto">
          <RequirementBuilder initialStone="Sapphire" mode="gemstone" />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 md:px-12 bg-[#0E1318]/40 border-t border-[#D5B581]/15">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <span className="text-[11px] font-sans tracking-[0.25em] text-[#D5B581] uppercase font-semibold">
              GEMOLOGICAL INSIGHTS
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
