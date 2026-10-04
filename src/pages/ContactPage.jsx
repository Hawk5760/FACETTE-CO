import React from 'react';
import { Mail, Phone, MapPin, ShieldCheck, Clock } from 'lucide-react';
import EnquirySection from '../components/EnquirySection';
import SEOHead from '../components/SEOHead';

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact & Bespoke Enquiries — Facette & Co",
    "url": "https://facetteandco.com/contact",
    "mainEntity": {
      "@type": "JewelryStore",
      "name": "FACETTE & CO",
      "telephone": "+91-261-2800100",
      "email": "enquiries@facetteandco.com",
      "address": [
        {
          "@type": "PostalAddress",
          "addressLocality": "Surat",
          "addressCountry": "IN",
          "description": "Cutting & Polishing Origin"
        },
        {
          "@type": "PostalAddress",
          "addressLocality": "Jaipur",
          "addressCountry": "IN",
          "description": "Coloured Gemstone Heritage"
        },
        {
          "@type": "PostalAddress",
          "addressLocality": "Antwerp",
          "addressCountry": "BE",
          "description": "Global Diamond Capital"
        },
        {
          "@type": "PostalAddress",
          "addressLocality": "Milan",
          "addressCountry": "IT",
          "description": "Design & Luxury Ateliers"
        }
      ]
    }
  };

  const offices = [
    { city: 'Antwerp', country: 'Belgium', role: 'Global Diamond Capital & European Trade Desk', email: 'antwerp@facetteandco.com' },
    { city: 'Surat', country: 'India', role: 'Cutting, Polishing & Precision Manufacturing Facility', email: 'surat@facetteandco.com' },
    { city: 'Jaipur', country: 'India', role: 'Coloured Gemstone Heritage & Lapidary Reserve', email: 'jaipur@facetteandco.com' },
    { city: 'Milan', country: 'Italy', role: 'Design Studio & High-Jewellery Ateliers', email: 'milan@facetteandco.com' },
    { city: 'Dubai', country: 'UAE', role: 'Middle East Volume & Luxury Private Client Desk', email: 'dubai@facetteandco.com' },
  ];

  return (
    <div className="bg-[#090C0E] text-[#E9E4DC] min-h-screen pt-24">
      <SEOHead
        title="Contact & Global B2B Enquiries | Facette & Co"
        description="Initiate a bespoke gemstone, manufacturing, fashion hardware, or corporate gifting requirement with Facette & Co. Ateliers and desks in Antwerp, Surat, Jaipur, Milan, and Dubai."
        keywords="contact Facette & Co, gemstone sourcing inquiry, bespoke jewellery manufacturer contact, Antwerp diamond desk, Surat manufacturing"
        schema={contactSchema}
      />

      {/* Hero Header */}
      <section className="py-16 md:py-20 px-6 md:px-12 border-b border-[#D5B581]/15">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="text-[11px] font-sans tracking-[0.25em] text-[#D5B581] uppercase font-semibold block">
            GLOBAL DESK &bull; B2B ENQUIRIES
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-light text-[#E9E4DC] uppercase">
            Let&apos;s Build What <br />
            <span className="italic text-[#D5B581]">Has Never Been Done.</span>
          </h1>
          <p className="text-sm md:text-base text-[#D6D5D0]/80 font-light max-w-2xl leading-relaxed">
            Every client enquiry is reviewed directly by our senior technical directors and gemologists. We prioritize discretion, engineering excellence, and rapid feasibility assessments.
          </p>
        </div>
      </section>

      {/* The Two-Column Enquiry Form as requested */}
      <EnquirySection />

      {/* Global Ateliers Directory */}
      <section className="py-24 px-6 md:px-12 bg-[#0E1318]/50 border-t border-[#D5B581]/15">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="border-b border-[#D5B581]/15 pb-6">
            <span className="text-[11px] font-sans tracking-[0.25em] text-[#D5B581] uppercase font-semibold block mb-1">
              PHYSICAL PRESENCE &amp; TRADING HUBS
            </span>
            <h2 className="text-3xl font-serif font-light text-[#E9E4DC]">
              Our International Ateliers &amp; Desks
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offices.map((off) => (
              <div key={off.city} className="p-8 bg-[#090C0E] border border-[#D5B581]/20 rounded-sm space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl text-[#E9E4DC]">{off.city}</h3>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#D5B581] font-sans">
                    {off.country}
                  </span>
                </div>
                <p className="text-xs text-[#D6D5D0]/70 font-light leading-relaxed">
                  {off.role}
                </p>
                <div className="pt-2 text-[11px] text-[#D5B581]/80 font-mono">
                  {off.email}
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 bg-[#090C0E] border border-[#D5B581]/20 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D6D5D0]/70 font-light">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#D5B581]" />
              <span>Direct secure communication channels &bull; Mutual NDAs strictly executed</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#D5B581]" />
              <span>Global response desk active across GMT, IST, and CET business hours</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
