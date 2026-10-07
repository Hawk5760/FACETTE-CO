import React from 'react';
import { ArrowRight, Shield, Check, Layers, Sparkles } from 'lucide-react';
import RequirementBuilder from '../components/RequirementBuilder';
import EnquirySection from '../components/EnquirySection';
import SEOHead from '../components/SEOHead';

export default function FashionHardwarePage() {
  const hardwareSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Luxury Fashion Hardware Engineering — Facette & Co",
    "description": "Custom metal components developed for luxury fashion, leather goods, footwear and accessories. Bespoke buckles, clasps, locks, hooks, and ornamental hardware.",
    "provider": {
      "@type": "JewelryStore",
      "name": "FACETTE & CO"
    }
  };

  const steps = [
    { num: '01', title: 'DEFINE', desc: 'Understand the product, application, dimensions and creative direction.' },
    { num: '02', title: 'DEVELOP', desc: 'Translate the concept into a considered metal component or accessory.' },
    { num: '03', title: 'SAMPLE', desc: 'A single-piece sample can be developed alongside applicable development and production costs.' },
    { num: '04', title: 'PRODUCE', desc: 'Once approved, the final design moves into production according to the agreed specification and quantity.' },
  ];

  const items = [
    'Buckles', 'Clasps', 'Hooks', 'Fasteners', 'Fittings', 'Closures', 'Ornamental hardware', 'Custom metal components', 'Bespoke metal accessories'
  ];

  return (
    <div className="bg-[#090C0E] text-[#E9E4DC] min-h-screen pt-24">
      <SEOHead
        title="Luxury Fashion Hardware & Custom Metal Components | Facette & Co"
        description="Custom metal components developed for luxury fashion, leather accessories, and bespoke products. Design-led engineering, zero commodity compromise."
        keywords="luxury fashion hardware, custom metal clasps, bespoke buckles, luxury leather goods hardware, fashion hardware manufacturer, Facette & Co"
        schema={hardwareSchema}
      />

      {/* 01 — HERO + VISUAL (PDF 1, Page 7) */}
      <section className="relative py-20 md:py-28 px-6 md:px-12 border-b border-[#D5B581]/15">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[11px] font-sans tracking-[0.25em] text-[#D5B581] uppercase font-semibold block">
              03 — FASHION HARDWARE
            </span>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light text-[#E9E4DC] leading-[1.08] uppercase">
              Hardware designed <br />
              <span className="italic text-[#D5B581] font-normal">
                to become part of the product.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#D6D5D0]/85 font-light leading-relaxed max-w-xl">
              Custom metal components developed for fashion, accessories and luxury products — without being confined to conventional categories.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="#builder"
                className="bg-[#D5B581] hover:bg-[#E9E4DC] text-[#090C0E] font-sans uppercase tracking-[0.25em] text-xs font-semibold py-4 px-8 transition-colors inline-flex items-center gap-2"
              >
                ENQUIRE ABOUT HARDWARE
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-6 border-t border-[#D5B581]/15 text-xs text-[#D6D5D0]/70 font-light leading-relaxed">
              We don't compete with China on low-cost, high-volume commodity production. We specialise in curated, design-led metal products developed around your requirements.
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-square rounded-sm overflow-hidden border border-[#D5B581]/25 group">
              <img
                src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop"
                alt="Sculptural luxury fashion hardware in polished metal"
                className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090C0E] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#0E1318]/90 backdrop-blur-md border border-[#D5B581]/20">
                <span className="text-[10px] tracking-[0.2em] text-[#D5B581] uppercase block font-semibold">
                  INTEGRATED LUXURY HARDWARE
                </span>
                <p className="text-xs text-[#E9E4DC] font-serif italic mt-1">
                  Sculptural clasps, tension fittings, and bespoke closures engineered for heritage fashion houses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — WHAT YOU NEED & 03 — WHY FACETTE */}
      <section className="py-24 px-6 md:px-12 bg-[#0E1318]/50 border-b border-[#D5B581]/15">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="max-w-3xl">
            <span className="text-[11px] font-sans tracking-[0.25em] text-[#D5B581] uppercase font-semibold block mb-2">
              02 — WHAT YOU NEED
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#E9E4DC]">
              You specify the vision. <br />
              <span className="italic text-[#D5B581]">We develop the metal around it.</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#D6D5D0]/80 font-light leading-relaxed">
              Your product does not have to fit an existing category. Our metal expertise allows us to develop accessories and components beyond conventional definitions — giving you the freedom to create something that can ultimately be named and defined by your brand.
            </p>
          </div>

          <div className="border-t border-[#D5B581]/15 pt-12">
            <span className="text-[11px] font-sans tracking-[0.25em] text-[#D5B581] uppercase font-semibold block mb-8">
              03 — WHY FACETTE &bull; WE DON'T BELIEVE EVERY PRODUCT NEEDS A PRE-EXISTING NAME
            </span>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-[#090C0E] border border-[#D5B581]/20 rounded-sm space-y-3">
                <h3 className="font-serif text-2xl text-[#E9E4DC]">CURATED, NOT COMMODITISED</h3>
                <p className="text-xs text-[#D6D5D0]/70 font-light leading-relaxed">
                  We focus on distinctive, design-led metal products rather than low-cost bulk commodity production.
                </p>
              </div>

              <div className="p-8 bg-[#090C0E] border border-[#D5B581]/20 rounded-sm space-y-3">
                <h3 className="font-serif text-2xl text-[#E9E4DC]">YOUR DESIGN REMAINS YOURS</h3>
                <p className="text-xs text-[#D6D5D0]/70 font-light leading-relaxed">
                  We respect creative ownership. Where required, development can be undertaken under NDA to protect confidentiality and agreed ownership rights.
                </p>
              </div>

              <div className="p-8 bg-[#090C0E] border border-[#D5B581]/20 rounded-sm space-y-3">
                <h3 className="font-serif text-2xl text-[#E9E4DC]">NO MOQ-FIRST APPROACH</h3>
                <p className="text-xs text-[#D6D5D0]/70 font-light leading-relaxed">
                  We don't begin the conversation by pushing a minimum order quantity. Sampling can start with a single piece alongside relevant development and production costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 — HOW WE WORK */}
      <section className="py-24 px-6 md:px-12 bg-[#090C0E] border-b border-[#D5B581]/15">
        <div className="max-w-7xl mx-auto space-y-16">
          <div>
            <span className="text-[11px] font-sans tracking-[0.25em] text-[#D5B581] uppercase font-semibold block mb-2">
              04 — HOW WE WORK
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#E9E4DC]">
              Development before commitment.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((st) => (
              <div key={st.num} className="border-t border-[#D5B581]/25 pt-6 space-y-3">
                <span className="font-serif text-3xl text-[#D5B581] font-light">{st.num}</span>
                <h3 className="text-base font-sans tracking-[0.2em] text-[#E9E4DC] uppercase font-medium">
                  {st.title}
                </h3>
                <p className="text-xs text-[#D6D5D0]/70 font-light leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — CAPABILITIES */}
      <section className="py-24 px-6 md:px-12 bg-[#0E1318]/40 border-b border-[#D5B581]/15">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="max-w-3xl">
            <span className="text-[11px] font-sans tracking-[0.25em] text-[#D5B581] uppercase font-semibold block mb-2">
              05 — CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#E9E4DC]">
              If you can imagine it, we can explore it in metal.
            </h2>
            <p className="mt-4 text-xs tracking-widest text-[#D5B581] uppercase font-sans">
              Some pieces already have a name. Others are waiting for one.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {items.map((it) => (
              <span key={it} className="px-4 py-3 bg-[#090C0E] border border-[#D5B581]/20 text-xs font-sans tracking-wider text-[#E9E4DC] rounded-sm">
                {it}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 06 — REQUIREMENT BUILDER (PDF 2, Page 8) */}
      <section id="builder" className="py-24 px-6 md:px-12 bg-[#090C0E]">
        <div className="max-w-7xl mx-auto">
          <RequirementBuilder mode="hardware" />
        </div>
      </section>

      <EnquirySection defaultInterest="Fashion Hardware" />
    </div>
  );
}
