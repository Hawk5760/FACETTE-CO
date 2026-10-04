import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, Layers, ArrowRight, CheckCircle2, Sparkles, Gem } from 'lucide-react';
import RequirementBuilder from '../components/RequirementBuilder';
import EnquirySection from '../components/EnquirySection';
import SEOHead from '../components/SEOHead';

export default function GemstonesPage() {
  const gemstoneSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Certified Gemstone Sourcing — Facette & Co",
    "serviceType": "Gemstone Sourcing & Verification",
    "provider": {
      "@type": "JewelryStore",
      "name": "FACETTE & CO",
      "url": "https://facetteandco.com"
    },
    "description": "Natural and certified gemstones sourced around your requirements — from colour and cut to size, origin and certification. GIA, Gübelin, SSEF, IGI accredited.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Precious Gemstones",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Natural Emeralds (Colombian & Zambian)" } },
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Royal Blue & Ceylon Sapphires" } },
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Burmese & Mozambique Rubies" } },
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Natural Fancy Diamonds & Spinels" } }
      ]
    }
  };

  const featuredStones = [
    {
      name: 'Emeralds',
      subtitle: 'Colombian & Zambian Mines',
      desc: 'Untreated and minor oil certified natural emeralds. Crystalline depth, saturated vivid green hues, Muzo and Kagem provenance.',
      link: '/emeralds',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop',
      cert: 'GIA &bull; Gübelin &bull; SSEF',
    },
    {
      name: 'Sapphires',
      subtitle: 'Kashmir, Ceylon & Royal Blue',
      desc: 'Unheated natural corundum with velvety cornflower and royal blue saturation. Exceptional crystalline clarity with provenance verification.',
      link: '/sapphires',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop',
      cert: 'GIA &bull; GRS &bull; SSEF',
    },
    {
      name: 'Rubies',
      subtitle: "Burmese Pigeon's Blood & Mozambique",
      desc: 'Natural unheated rubies with vivid red fluorescence, crystalline clarity, and strict optical grade standards for high jewellery.',
      link: '/ruby',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop',
      cert: 'SSEF &bull; Gübelin &bull; GIA',
    },
  ];

  const steps = [
    {
      num: '01',
      title: 'SPECIFY',
      desc: 'Tell us the stone, size, colour, grade, quantity and certification you require.',
    },
    {
      num: '02',
      title: 'SOURCE',
      desc: 'We identify stones matching your specification through our generational sourcing network.',
    },
    {
      num: '03',
      title: 'VERIFY',
      desc: 'Relevant certification and gemological documentation are reviewed against the requirement.',
    },
    {
      num: '04',
      title: 'PRESENT',
      desc: 'You receive matched options with the technical data needed to make an informed decision.',
    },
  ];

  return (
    <div className="bg-[#090C0E] text-[#E9E4DC] min-h-screen pt-24">
      <SEOHead
        title="Certified Gemstones Sourcing | GIA & IGI Certified | Facette & Co"
        description="Natural and certified gemstones sourced around your exact specification — from colour and cut to size, origin and certification. Direct trade access in Surat, Jaipur, and Antwerp."
        keywords="certified gemstones, GIA gemstones, natural emeralds, unheated sapphires, burmese ruby, gemstone sourcing, luxury gems, Facette & Co"
        schema={gemstoneSchema}
      />

      {/* 01 — HERO + VISUAL (PDF 1, Page 2) */}
      <section className="relative py-20 md:py-28 px-6 md:px-12 border-b border-[#D5B581]/15 overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#0E3D3D]/20 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[11px] font-sans tracking-[0.25em] text-[#D5B581] uppercase font-semibold block">
              01 — GEMSTONES
            </span>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light text-[#E9E4DC] leading-[1.1] uppercase">
              Certified gemstones, <br />
              <span className="italic text-[#D5B581] font-normal">
                sourced around your specification.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#D6D5D0]/85 font-light leading-relaxed max-w-xl">
              Natural and certified stones sourced around your requirements — from colour and cut to size, origin and certification.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-6">
              <a
                href="#builder"
                className="bg-[#D5B581] hover:bg-[#E9E4DC] text-[#090C0E] font-sans uppercase tracking-[0.25em] text-xs font-semibold py-4 px-8 transition-colors inline-flex items-center gap-2"
              >
                ENQUIRE ABOUT GEMSTONES
                <ArrowRight className="w-4 h-4" />
              </a>

              <span className="text-xs uppercase tracking-[0.2em] text-[#D5B581]/70 font-sans">
                NO FIXED CATALOGUE &bull; BESPOKE SOURCING
              </span>
            </div>

            <div className="pt-6 border-t border-[#D5B581]/15 flex items-center gap-4 text-xs font-sans tracking-wider text-[#D6D5D0]/60">
              <ShieldCheck className="w-5 h-5 text-[#D5B581] flex-shrink-0" />
              <span>IGI and GIA certification as standard. Direct trade access, generational sourcing channels.</span>
            </div>
          </div>

          {/* Hero Visual: Large Cinematic Gemstone Visual (PDF 1, Page 2) */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-[#D5B581]/25 group">
              <img
                src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop"
                alt="Natural certified emerald gemstone macro facet details"
                className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090C0E] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#0E1318]/80 backdrop-blur-md border border-[#D5B581]/20">
                <span className="text-[10px] tracking-[0.2em] text-[#D5B581] uppercase block font-semibold">
                  MACRO DETAIL &bull; UNTREATED SPECIMEN
                </span>
                <p className="text-xs text-[#E9E4DC] font-serif italic mt-1">
                  Inspected under polarized cross-light for crystal structure and clarity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — WHAT YOU NEED (PDF 1, Page 2) */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-[#0E1318]/50 border-b border-[#D5B581]/15">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="max-w-3xl">
            <span className="text-[11px] font-sans tracking-[0.25em] text-[#D5B581] uppercase font-semibold block mb-3">
              02 — WHAT YOU NEED
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#E9E4DC]">
              You tell us the specification. <br />
              <span className="italic text-[#D5B581]">We source to it.</span>
            </h2>
            <p className="mt-4 text-base text-[#D6D5D0]/80 font-light leading-relaxed">
              Whether you need a particular stone, colour, size, grade or certification, we build the sourcing process around your requirement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#090C0E] border border-[#D5B581]/20 rounded-sm space-y-4">
              <span className="text-xs font-sans tracking-[0.25em] text-[#D5B581] uppercase font-semibold block">
                SPECIFICATION-LED SOURCING
              </span>
              <p className="text-sm text-[#D6D5D0]/80 font-light leading-relaxed">
                Sourcing built around your exact requirements, not a fixed catalogue. Every cut, facet ratio, and color tier is curated individually.
              </p>
            </div>

            <div className="p-8 bg-[#090C0E] border border-[#D5B581]/20 rounded-sm space-y-4">
              <span className="text-xs font-sans tracking-[0.25em] text-[#D5B581] uppercase font-semibold block">
                CERTIFICATION
              </span>
              <p className="text-sm text-[#D6D5D0]/80 font-light leading-relaxed">
                Certification requirements considered from the beginning of the sourcing process. Verified by GIA, Gübelin, SSEF, or IGI labs.
              </p>
            </div>

            <div className="p-8 bg-[#090C0E] border border-[#D5B581]/20 rounded-sm space-y-4">
              <span className="text-xs font-sans tracking-[0.25em] text-[#D5B581] uppercase font-semibold block">
                DIRECT ACCESS
              </span>
              <p className="text-sm text-[#D6D5D0]/80 font-light leading-relaxed">
                Access to a wider network across key gemstone and jewellery markets — from primary origins in Colombia, Sri Lanka, and Africa to Antwerp and Jaipur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — HOW WE WORK (PDF 1, Page 2) */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-[#090C0E] border-b border-[#D5B581]/15">
        <div className="max-w-7xl mx-auto space-y-16">
          <div>
            <span className="text-[11px] font-sans tracking-[0.25em] text-[#D5B581] uppercase font-semibold block mb-2">
              03 — HOW WE WORK
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#E9E4DC]">
              From requirement to stone.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((st) => (
              <div key={st.num} className="border-t border-[#D5B581]/25 pt-6 space-y-3">
                <span className="font-serif text-3xl text-[#D5B581] font-light">{st.num}</span>
                <h3 className="text-base font-sans tracking-[0.2em] text-[#E9E4DC] uppercase font-medium">
                  {st.title}
                </h3>
                <p className="text-xs text-[#D6D5D0]/70 font-light leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — SPECIFICATIONS & WHAT WE SOURCE (PDF 1, Page 2) */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-[#0E1318]/40 border-b border-[#D5B581]/15">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#D5B581]/15 pb-8 gap-4">
            <div>
              <span className="text-[11px] font-sans tracking-[0.25em] text-[#D5B581] uppercase font-semibold block mb-2">
                04 — SPECIFICATIONS
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#E9E4DC]">
                Built around the details that matter.
              </h2>
            </div>
            <div className="text-xs font-sans tracking-[0.18em] text-[#D5B581] uppercase">
              Colour &bull; Cut &bull; Shape &bull; Size &bull; Clarity &bull; Origin &bull; Certification &bull; Quantity
            </div>
          </div>

          {/* Dedicated Deep-Dive Stone Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredStones.map((stone) => (
              <div
                key={stone.name}
                className="bg-[#090C0E] border border-[#D5B581]/20 rounded-sm overflow-hidden flex flex-col justify-between group hover:border-[#D5B581] transition-all"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={stone.image}
                    alt={stone.name}
                    className="w-full h-full object-cover filter brightness-85 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090C0E] via-transparent to-transparent" />
                  <span className="absolute top-4 right-4 bg-[#090C0E]/80 border border-[#D5B581]/30 text-[#D5B581] text-[10px] tracking-[0.2em] uppercase px-2.5 py-1">
                    {stone.cert}
                  </span>
                </div>

                <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] tracking-[0.2em] text-[#D5B581] uppercase block font-sans">
                      {stone.subtitle}
                    </span>
                    <h3 className="font-serif text-3xl text-[#E9E4DC] font-light mt-1 mb-2">
                      {stone.name}
                    </h3>
                    <p className="text-xs text-[#D6D5D0]/70 font-light leading-relaxed">
                      {stone.desc}
                    </p>
                  </div>

                  <Link
                    to={stone.link}
                    className="pt-4 border-t border-[#D5B581]/15 text-xs uppercase tracking-[0.2em] text-[#D5B581] hover:text-[#E9E4DC] transition-colors inline-flex items-center gap-2 font-medium"
                  >
                    Explore {stone.name} Sourcing Specification &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Extended What We Source List from PDF */}
          <div className="p-8 bg-[#090C0E] border border-[#D5B581]/15 rounded-sm">
            <span className="text-[11px] font-sans tracking-[0.25em] text-[#D5B581] uppercase block mb-3 font-semibold">
              FULL GEMOLOGICAL SPECTRUM SOURCED
            </span>
            <div className="flex flex-wrap gap-3 text-xs text-[#E9E4DC]/80 font-sans tracking-wide">
              {['Emerald', 'Ruby', 'Sapphire', 'Natural Diamond', 'Spinel', 'Tourmaline (Paraíba & Indicolite)', 'Mandarin Garnet', 'Australian Opal', 'Alexandrite', 'Tsavorite', 'Tanzanite'].map((item) => (
                <span
                  key={item}
                  className="px-3.5 py-2 bg-[#0E1318] border border-[#D5B581]/15 rounded-sm hover:border-[#D5B581] transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 05 — REQUIREMENT BUILDER (PDF 1, Page 2-3) */}
      <section id="builder" className="py-24 md:py-32 px-6 md:px-12 bg-[#090C0E]">
        <div className="max-w-7xl mx-auto">
          <RequirementBuilder initialStone="Emerald" mode="gemstone" />
        </div>
      </section>

      {/* 06 — ENQUIRE SECTION */}
      <EnquirySection defaultInterest="Gemstones" />
    </div>
  );
}
