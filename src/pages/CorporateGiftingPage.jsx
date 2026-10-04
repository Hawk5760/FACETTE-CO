import React from 'react';
import { ArrowRight, Gift, Award, Briefcase, Sparkles, Check } from 'lucide-react';
import RequirementBuilder from '../components/RequirementBuilder';
import EnquirySection from '../components/EnquirySection';
import SEOHead from '../components/SEOHead';

export default function CorporateGiftingPage() {
  const giftingSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Luxury Corporate Gifting & Bespoke Objects — Facette & Co",
    "description": "Custom-crafted luxury objects designed around your brand, occasion, and audience. Executive gifting, milestone awards, brand experiences, and custom packaging.",
    "provider": {
      "@type": "JewelryStore",
      "name": "FACETTE & CO"
    }
  };

  const applications = [
    { title: 'EXECUTIVE GIFTING', desc: 'Considered objects for leadership, clients and key relationships.' },
    { title: 'MILESTONES', desc: 'Bespoke pieces for anniversaries, achievements and important moments.' },
    { title: 'BRAND EXPERIENCES', desc: 'Objects created for launches, events and VIP experiences.' },
    { title: 'EMPLOYEE RECOGNITION', desc: 'Thoughtful pieces designed to recognise people and contribution.' },
    { title: 'CUSTOM PROJECTS', desc: 'A concept developed specifically around your brand, audience and occasion.' },
  ];

  const steps = [
    { num: '01', title: 'UNDERSTAND', desc: 'We understand your brand, offering, audience, occasion and message.' },
    { num: '02', title: 'CONCEPTUALISE', desc: 'Our dedicated design team develops concepts aligned with your brand.' },
    { num: '03', title: 'CREATE', desc: 'The selected concept moves into development, customisation and production.' },
    { num: '04', title: 'PRESENT', desc: 'The finished object is prepared as a complete gifting experience.' },
  ];

  return (
    <div className="bg-[#090C0E] text-[#E9E4DC] min-h-screen pt-24">
      <SEOHead
        title="Luxury Corporate Gifting & Bespoke Objects | Facette & Co"
        description="Custom-crafted luxury objects designed around your brand, occasion and audience. Executive gifts, milestone bespoke creations, and private presentations."
        keywords="luxury corporate gifts, bespoke executive gifts, custom milestone awards, luxury corporate jewellery, Facette & Co"
        schema={giftingSchema}
      />

      {/* 01 — HERO + VISUAL (PDF 1, Page 9) */}
      <section className="relative py-20 md:py-28 px-6 md:px-12 border-b border-[#D5B581]/15">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[11px] font-sans tracking-[0.25em] text-[#D5B581] uppercase font-semibold block">
              04 — CORPORATE GIFTING
            </span>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light text-[#E9E4DC] leading-[1.08] uppercase">
              Corporate gifts, <br />
              <span className="italic text-[#D5B581] font-normal">
                made with intention.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#D6D5D0]/85 font-light leading-relaxed max-w-xl">
              Custom-crafted objects designed around your brand, occasion and audience.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="#builder"
                className="bg-[#D5B581] hover:bg-[#E9E4DC] text-[#090C0E] font-sans uppercase tracking-[0.25em] text-xs font-semibold py-4 px-8 transition-colors inline-flex items-center gap-2"
              >
                PLAN YOUR GIFTING PROJECT
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-6 border-t border-[#D5B581]/15 text-xs text-[#D6D5D0]/70 font-light leading-relaxed">
              A dedicated team of designers works around your brand, its identity and the way it presents itself to the market.
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-square rounded-sm overflow-hidden border border-[#D5B581]/25 group">
              <img
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop"
                alt="Luxury corporate bespoke gift object and presentation box"
                className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090C0E] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#0E1318]/90 backdrop-blur-md border border-[#D5B581]/20">
                <span className="text-[10px] tracking-[0.2em] text-[#D5B581] uppercase block font-semibold">
                  PRESENTATION ARCHITECTURE
                </span>
                <p className="text-xs text-[#E9E4DC] font-sans mt-1">
                  Concept &rarr; Design &rarr; Object &rarr; Personalisation &rarr; Presentation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — WHAT YOU NEED */}
      <section className="py-24 px-6 md:px-12 bg-[#0E1318]/50 border-b border-[#D5B581]/15">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="max-w-3xl">
            <span className="text-[11px] font-sans tracking-[0.25em] text-[#D5B581] uppercase font-semibold block mb-2">
              02 — WHAT YOU NEED
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#E9E4DC]">
              You bring the occasion. <br />
              <span className="italic text-[#D5B581]">We create the object around your brand.</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#D6D5D0]/80 font-light leading-relaxed">
              Our dedicated design team develops gifting concepts around your company's identity, offerings, audience and position in the market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#090C0E] border border-[#D5B581]/20 rounded-sm space-y-3">
              <h3 className="font-serif text-2xl text-[#E9E4DC]">BRAND-LED DESIGN</h3>
              <p className="text-xs text-[#D6D5D0]/70 font-light leading-relaxed">
                Our dedicated designers develop concepts around your brand identity.
              </p>
            </div>

            <div className="p-8 bg-[#090C0E] border border-[#D5B581]/20 rounded-sm space-y-3">
              <h3 className="font-serif text-2xl text-[#E9E4DC]">CUSTOM CREATION</h3>
              <p className="text-xs text-[#D6D5D0]/70 font-light leading-relaxed">
                The object can be developed specifically around your requirement.
              </p>
            </div>

            <div className="p-8 bg-[#090C0E] border border-[#D5B581]/20 rounded-sm space-y-3">
              <h3 className="font-serif text-2xl text-[#E9E4DC]">CONSIDERED EXPERIENCE</h3>
              <p className="text-xs text-[#D6D5D0]/70 font-light leading-relaxed">
                The object, personalisation and presentation are treated as one complete experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — HOW WE WORK */}
      <section className="py-24 px-6 md:px-12 bg-[#090C0E] border-b border-[#D5B581]/15">
        <div className="max-w-7xl mx-auto space-y-16">
          <div>
            <span className="text-[11px] font-sans tracking-[0.25em] text-[#D5B581] uppercase font-semibold block mb-2">
              03 — HOW WE WORK
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#E9E4DC]">
              From brand to bespoke object.
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

      {/* 04 — GIFTING APPLICATIONS */}
      <section className="py-24 px-6 md:px-12 bg-[#0E1318]/40 border-b border-[#D5B581]/15">
        <div className="max-w-7xl mx-auto space-y-12">
          <div>
            <span className="text-[11px] font-sans tracking-[0.25em] text-[#D5B581] uppercase font-semibold block mb-2">
              04 — GIFTING APPLICATIONS
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#E9E4DC]">
              Gifts that feel like your brand.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app) => (
              <div key={app.title} className="p-6 bg-[#090C0E] border border-[#D5B581]/20 rounded-sm space-y-2">
                <h3 className="font-serif text-xl text-[#E9E4DC]">{app.title}</h3>
                <p className="text-xs text-[#D6D5D0]/70 font-light leading-relaxed">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirement Builder */}
      <section id="builder" className="py-24 px-6 md:px-12 bg-[#090C0E]">
        <div className="max-w-7xl mx-auto">
          <RequirementBuilder mode="manufacturing" />
        </div>
      </section>

      <EnquirySection defaultInterest="Corporate Gifting" />
    </div>
  );
}
