import React from 'react';
import { ArrowRight, Check, Shield, Layers, Cpu, Hammer, Sparkles } from 'lucide-react';
import RequirementBuilder from '../components/RequirementBuilder';
import EnquirySection from '../components/EnquirySection';
import SEOHead from '../components/SEOHead';

export default function JewelleryPage() {
  const jewellerySchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Design & Manufacturing / Jewellery Engineering — Facette & Co",
    "serviceType": "Jewellery Manufacturing & Prototyping",
    "provider": {
      "@type": "JewelryStore",
      "name": "FACETTE & CO",
      "url": "https://facetteandco.com"
    },
    "description": "Design development, technical engineering, prototyping and precision manufacturing for jewellery, metal objects and bespoke components. CAD, 3D modelling, Grand Feu enamelling, and precious metal casting.",
    "areaServed": "Global"
  };

  const processSteps = [
    { num: '01', title: 'CONCEPT', desc: 'We understand your creative direction, reference material, application and intended outcome.' },
    { num: '02', title: 'CAD & 3D DEVELOPMENT', desc: 'Our CAD and 3D design team translates the concept into a precise digital model.' },
    { num: '03', title: 'TECHNICAL REFINEMENT', desc: 'Dimensions, tolerances, construction, assembly and production feasibility are reviewed.' },
    { num: '04', title: 'PROTOTYPE', desc: 'A sample can be developed to evaluate form, fit, functionality and finish.' },
    { num: '05', title: 'SURFACE & FINISH DEVELOPMENT', desc: 'Plating, enamelling, polishing, texturing and other finishing requirements are developed according to the desired result.' },
    { num: '06', title: 'PRODUCTION', desc: 'The approved specification moves into production under strict ISO quality controls.' },
  ];

  const capabilities = [
    {
      category: 'DESIGN & CAD',
      items: ['Jewellery CAD', '3D product modelling', 'Technical modelling', 'STL preparation', 'Design refinement', 'Production-ready digital files'],
    },
    {
      category: 'PRODUCT DEVELOPMENT',
      items: ['Concept development', 'Design engineering', 'Prototyping', 'Sample development', 'Technical refinement', 'Production feasibility'],
    },
    {
      category: 'METAL MANUFACTURING',
      items: ['Jewellery manufacturing', 'Bespoke metal objects', 'Custom components', 'Fashion hardware', 'Private-label production'],
    },
    {
      category: 'SURFACE & FINISHING',
      items: ['Heavy micron plating', 'Grand Feu Enamelling', 'Mirror polishing', 'Precision brushing', 'Micro texturing', 'Custom finishes'],
    },
  ];

  return (
    <div className="bg-[#090C0E] text-[#E9E4DC] min-h-screen pt-24">
      <SEOHead
        title="Bespoke Jewellery Design & Precision Manufacturing | Facette & Co"
        description="Design development, technical engineering, 3D CAD prototyping, and precision manufacturing for fine jewellery, metal objects, and bespoke components."
        keywords="bespoke jewellery manufacturing, jewellery CAD, 3D prototyping, luxury metal manufacturing, private label jewellery, enamelling, Facette & Co"
        schema={jewellerySchema}
      />

      {/* 01 — HERO + VISUAL (PDF 1, Page 4) */}
      <section className="relative py-20 md:py-28 px-6 md:px-12 border-b border-[#D5B581]/15">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[11px] font-sans tracking-[0.25em] text-[#D5B581] uppercase font-semibold block">
              02 — DESIGN &amp; MANUFACTURING
            </span>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light text-[#E9E4DC] leading-[1.08] uppercase">
              From concept to finished object, <br />
              <span className="italic text-[#D5B581] font-normal">
                built around your vision.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#D6D5D0]/85 font-light leading-relaxed max-w-xl">
              Design development, technical engineering, prototyping and precision manufacturing for jewellery, metal objects and bespoke components.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="#builder"
                className="bg-[#D5B581] hover:bg-[#E9E4DC] text-[#090C0E] font-sans uppercase tracking-[0.25em] text-xs font-semibold py-4 px-8 transition-colors inline-flex items-center gap-2"
              >
                START A PROJECT
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Multidisciplinary Team Note from PDF */}
            <div className="pt-6 border-t border-[#D5B581]/15 text-xs text-[#D6D5D0]/70 font-light leading-relaxed">
              A multidisciplinary team brings together jewellery CAD, 3D modelling, technical development, prototyping, enamelling, plating and finishing expertise.
            </div>
          </div>

          {/* Hero Visual Chain: Concept → CAD → 3D model → prototype → finishing → finished object */}
          <div className="lg:col-span-5">
            <div className="relative aspect-square rounded-sm overflow-hidden border border-[#D5B581]/25 group">
              <img
                src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop"
                alt="Precision jewellery engineering and finished object"
                className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090C0E] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#0E1318]/90 backdrop-blur-md border border-[#D5B581]/20">
                <span className="text-[10px] tracking-[0.2em] text-[#D5B581] uppercase block font-semibold">
                  DEVELOPMENT ARCHITECTURE
                </span>
                <p className="text-xs text-[#E9E4DC] font-sans mt-1">
                  Concept &rarr; CAD &rarr; 3D Model &rarr; Prototype &rarr; Finishing &rarr; Finished Object
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — WHAT YOU NEED & 03 — WHY FACETTE (PDF 1, Page 4) */}
      <section className="py-24 px-6 md:px-12 bg-[#0E1318]/50 border-b border-[#D5B581]/15">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="max-w-3xl">
            <span className="text-[11px] font-sans tracking-[0.25em] text-[#D5B581] uppercase font-semibold block mb-2">
              02 — WHAT YOU NEED
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#E9E4DC]">
              You bring the idea. <br />
              <span className="italic text-[#D5B581]">We develop everything around it.</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#D6D5D0]/80 font-light leading-relaxed">
              From an initial sketch, reference or concept to a production-ready piece, our technical and creative teams work together to translate the idea into a manufacturable object.
            </p>
          </div>

          <div className="border-t border-[#D5B581]/15 pt-12">
            <span className="text-[11px] font-sans tracking-[0.25em] text-[#D5B581] uppercase font-semibold block mb-8">
              03 — WHY FACETTE &bull; GOOD MANUFACTURING STARTS BEFORE PRODUCTION
            </span>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-6 bg-[#090C0E] border border-[#D5B581]/20 rounded-sm space-y-3">
                <h3 className="font-serif text-xl text-[#E9E4DC]">DESIGN + ENGINEERING</h3>
                <p className="text-xs text-[#D6D5D0]/70 font-light leading-relaxed">
                  Creative intent is developed alongside technical feasibility from day zero.
                </p>
              </div>

              <div className="p-6 bg-[#090C0E] border border-[#D5B581]/20 rounded-sm space-y-3">
                <h3 className="font-serif text-xl text-[#E9E4DC]">TECHNICAL EXPERTISE</h3>
                <p className="text-xs text-[#D6D5D0]/70 font-light leading-relaxed">
                  CAD designers, 3D development specialists and finishing experts collaborate seamlessly.
                </p>
              </div>

              <div className="p-6 bg-[#090C0E] border border-[#D5B581]/20 rounded-sm space-y-3">
                <h3 className="font-serif text-xl text-[#E9E4DC]">PROTOTYPE FIRST</h3>
                <p className="text-xs text-[#D6D5D0]/70 font-light leading-relaxed">
                  A physical sample can be developed to evaluate form before committing to volume.
                </p>
              </div>

              <div className="p-6 bg-[#090C0E] border border-[#D5B581]/20 rounded-sm space-y-3">
                <h3 className="font-serif text-xl text-[#E9E4DC]">INTEGRATED FINISHING</h3>
                <p className="text-xs text-[#D6D5D0]/70 font-light leading-relaxed">
                  Enamelling, plating, and texturing are considered integral to the structural design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 — DEVELOPMENT PROCESS (PDF 1, Page 4-5) */}
      <section id="process" className="py-24 px-6 md:px-12 bg-[#090C0E] border-b border-[#D5B581]/15">
        <div className="max-w-7xl mx-auto space-y-16">
          <div>
            <span className="text-[11px] font-sans tracking-[0.25em] text-[#D5B581] uppercase font-semibold block mb-2">
              04 — DEVELOPMENT PROCESS
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#E9E4DC]">
              From idea to production-ready object.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <div key={step.num} className="p-8 bg-[#0E1318] border border-[#D5B581]/20 rounded-sm space-y-3">
                <span className="font-serif text-3xl text-[#D5B581] font-light">{step.num}</span>
                <h3 className="font-sans text-sm tracking-[0.2em] text-[#E9E4DC] uppercase font-medium">
                  {step.title}
                </h3>
                <p className="text-xs text-[#D6D5D0]/70 font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — CAPABILITIES (PDF 1, Page 5) */}
      <section className="py-24 px-6 md:px-12 bg-[#0E1318]/40 border-b border-[#D5B581]/15">
        <div className="max-w-7xl mx-auto space-y-16">
          <div>
            <span className="text-[11px] font-sans tracking-[0.25em] text-[#D5B581] uppercase font-semibold block mb-2">
              05 — CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#E9E4DC]">
              Designed with intention. Made with precision.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((cap) => (
              <div key={cap.category} className="p-6 bg-[#090C0E] border border-[#D5B581]/20 rounded-sm space-y-4">
                <h3 className="font-sans text-xs tracking-[0.2em] text-[#D5B581] uppercase font-semibold pb-2 border-b border-[#D5B581]/15">
                  {cap.category}
                </h3>
                <ul className="space-y-2 text-xs text-[#D6D5D0]/80 font-light">
                  {cap.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#D5B581]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* 06 — DEVELOPMENT & CONFIDENTIALITY (PDF 1, Page 5) */}
          <div className="p-8 md:p-12 bg-[#090C0E] border border-[#D5B581]/25 rounded-sm grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-3">
              <span className="text-[10px] tracking-[0.2em] text-[#D5B581] uppercase font-semibold block">
                06 — DEVELOPMENT &amp; CONFIDENTIALITY
              </span>
              <h3 className="font-serif text-3xl text-[#E9E4DC] font-light">Develop before you scale.</h3>
              <p className="text-xs text-[#D6D5D0]/80 font-light leading-relaxed">
                A single-piece sample can be developed alongside applicable development and production costs, allowing you to assess the design before moving into larger quantities.
              </p>
            </div>

            <div className="space-y-3 border-t md:border-t-0 md:border-l border-[#D5B581]/15 pt-6 md:pt-0 md:pl-8">
              <div className="flex items-center gap-2 text-[#D5B581]">
                <Shield className="w-5 h-5" />
                <span className="text-xs tracking-[0.2em] uppercase font-semibold">YOUR IDEA REMAINS YOURS</span>
              </div>
              <p className="text-xs text-[#D6D5D0]/70 font-light leading-relaxed">
                Where required, development can be undertaken under an NDA to maintain confidentiality around designs, concepts and product development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 07 — REQUIREMENT BUILDER (Manufacturing mode) */}
      <section id="builder" className="py-24 px-6 md:px-12 bg-[#090C0E]">
        <div className="max-w-7xl mx-auto">
          <RequirementBuilder mode="manufacturing" />
        </div>
      </section>

      <EnquirySection defaultInterest="Design & Manufacturing" />
    </div>
  );
}
