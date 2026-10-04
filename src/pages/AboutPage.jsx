import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Compass, Award, Hammer, Sparkles } from 'lucide-react';
import WorldMapSection from '../components/WorldMapSection';
import SEOHead from '../components/SEOHead';

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "FACETTE & CO",
      "foundingLocation": "India & Europe",
      "description": "Facette & Co is a modern luxury house, design studio, and precision manufacturing company working across certified gemstones, bespoke jewellery engineering, fashion hardware, and corporate gifting.",
      "url": "https://facetteandco.com/about-us"
    }
  };

  const pillars = [
    {
      num: '01',
      title: 'PRECISION & INTENT',
      desc: 'We operate at the convergence of traditional lapidary craftsmanship and high-precision CAD engineering, ensuring every millimeter conforms to exacting tolerances.',
    },
    {
      num: '02',
      title: 'DIRECT GENERATIONAL ACCESS',
      desc: 'Our sourcing relationships are rooted in generations of trade across the world’s key gemstone epicenters — Surat, Jaipur, Antwerp, and Colombo.',
    },
    {
      num: '03',
      title: 'UNCOMPROMISING METALLURGY',
      desc: 'From 18K gold and 950 platinum to high-tech titanium and custom bronze alloys, we fabricate metal with intent, durability, and sculptural beauty.',
    },
  ];

  return (
    <div className="bg-[#090C0E] text-[#E9E4DC] min-h-screen pt-24">
      <SEOHead
        title="About The House | Philosophy & Lineage | Facette & Co"
        description="Learn about Facette & Co — a modern luxury house, design studio, and precision manufacturing company bridging generational gemstone sourcing with bespoke engineering."
        keywords="about Facette & Co, luxury jewellery manufacturer, ethical gemstone sourcing, Antwerp Surat Jaipur lineage, modern luxury house"
        schema={aboutSchema}
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 px-6 md:px-12 border-b border-[#D5B581]/15">
        <div className="max-w-5xl mx-auto space-y-6">
          <span className="text-[11px] font-sans tracking-[0.25em] text-[#D5B581] uppercase font-semibold block">
            ABOUT THE HOUSE
          </span>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light text-[#E9E4DC] leading-[1.1] uppercase">
            Modern Luxury House &bull; <br />
            <span className="italic text-[#D5B581] font-normal">
              Design Studio &bull; Precision Manufacturing.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-[#D6D5D0]/85 font-light leading-relaxed max-w-3xl">
            FACETTE &amp; CO was established to challenge conventional jewelry trade structures. We do not compete on low-cost bulk commodity supply. We exist to provide creative minds with the exceptional materials, engineering rigor, and manufacturing capabilities to realize their most demanding visions.
          </p>
        </div>
      </section>

      {/* Editorial Statement */}
      <section className="py-24 px-6 md:px-12 bg-[#0E1318]/50 border-b border-[#D5B581]/15">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6 space-y-6">
            <span className="text-[10px] font-sans tracking-[0.25em] text-[#D5B581] uppercase font-semibold block">
              THE MANIFESTO
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-light text-[#E9E4DC] leading-snug">
              &ldquo;We do not define ourselves merely by what we manufacture. Nor simply by what we supply.&rdquo;
            </h2>
            <p className="text-sm text-[#D6D5D0]/80 font-light leading-relaxed">
              Our vision is to create curated works of fine metal artistry that transcend conventional jewellery and materials. Every creation is conceived as a distinctive artistic expression, thoughtfully crafted to inspire designers, creators and visionaries.
            </p>
            <p className="text-sm text-[#D6D5D0]/80 font-light leading-relaxed">
              Rather than simply producing products, we shape objects that can be imagined, named and redefined by the creative minds who bring them to life.
            </p>
          </div>

          <div className="md:col-span-6">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-[#D5B581]/25">
              <img
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop"
                alt="Atelier craft and gold polishing"
                className="w-full h-full object-cover filter brightness-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090C0E] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#0E1318]/90 backdrop-blur-md border border-[#D5B581]/20">
                <span className="text-[10px] tracking-[0.2em] text-[#D5B581] uppercase font-sans block">
                  JAIPUR &bull; MILAN ATELIER
                </span>
                <p className="text-xs text-[#E9E4DC] font-serif italic mt-0.5">
                  Hand-finishing and micro-tolerance calibration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 3 Pillars */}
      <section className="py-24 px-6 md:px-12 bg-[#090C0E] border-b border-[#D5B581]/15">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="max-w-2xl">
            <span className="text-[11px] font-sans tracking-[0.25em] text-[#D5B581] uppercase font-semibold block mb-2">
              FOUNDATIONAL TENETS
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#E9E4DC]">
              The Facette Standard.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p) => (
              <div key={p.num} className="p-8 bg-[#0E1318] border border-[#D5B581]/20 rounded-sm space-y-4">
                <span className="font-serif text-3xl text-[#D5B581] font-light">{p.num}</span>
                <h3 className="font-sans text-sm tracking-[0.2em] text-[#E9E4DC] uppercase font-medium">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#D6D5D0]/70 font-light leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Map Section */}
      <WorldMapSection />

      {/* Direct Call to Action */}
      <section className="py-24 px-6 md:px-12 bg-[#0E1318] text-center border-t border-[#D5B581]/15">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-serif text-3xl sm:text-5xl text-[#E9E4DC] font-light">
            Have an idea worth making?
          </h2>
          <p className="text-sm sm:text-base text-[#D6D5D0]/80 font-light leading-relaxed">
            Send us your concept, reference or requirement and let's explore what it can become.
          </p>
          <div className="pt-4">
            <Link
              to="/contact"
              className="bg-[#D5B581] hover:bg-[#E9E4DC] text-[#090C0E] font-sans uppercase tracking-[0.25em] text-xs font-semibold py-4 px-10 transition-colors inline-flex items-center gap-2"
            >
              START A CONVERSATION
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
