import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

export default function RequirementBuilder({
  initialStone = 'Emerald',
  mode = 'gemstone', // 'gemstone' or 'manufacturing'
  onComplete = null,
}) {
  const [formData, setFormData] = useState({
    stone: initialStone,
    stoneType: 'Natural / Certified',
    size: '3.0 - 5.0 ct',
    colour: 'Deep Vivid Hue',
    grade: 'High Jewellery Grade',
    certification: 'GIA / Gübelin / SSEF',
    quantity: 'Single Stone',
    projectType: 'High Jewellery Ring / Pendant',
    developmentStage: 'Concept / Sketch',
    material: '18K Yellow Gold',
    finish: 'Mirror Polish & Micro-Pavé',
    nda: 'NDA Required Before Brief',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const stoneOptions = [
    'Emerald',
    'Ruby',
    'Sapphire',
    'Diamond',
    'Spinel',
    'Tourmaline',
    'Garnet',
    'Opal',
    'Other Coloured Gemstone',
  ];

  const certificationOptions = [
    'GIA (Gemological Institute of America)',
    'Gübelin Gem Lab',
    'SSEF Swiss Gemmological Institute',
    'GRS (GemResearch Swisslab)',
    'IGI (International Gemological Institute)',
    'Multiple / Top-tier Lab Only',
  ];

  const quantityOptions = [
    'Single Statement Stone',
    'Matched Pair (Earrings / Accents)',
    'Calibrated Parcel (Pavé / Layout)',
    'Complete High Jewellery Suite',
  ];

  const handleBuild = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (onComplete) onComplete(formData);
  };

  return (
    <div className="bg-[#0E1318] border border-[#D5B581]/25 p-8 md:p-12 rounded-sm relative overflow-hidden shadow-2xl">
      {/* Decorative Corner Ornaments */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#D5B581]/40" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#D5B581]/40" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#D5B581]/40" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#D5B581]/40" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#D5B581]/15 pb-6 mb-8 gap-4">
        <div>
          <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#D5B581] block mb-1">
            05 — REQUIREMENT BUILDER
          </span>
          <h3 className="font-serif text-2xl md:text-3xl text-[#E9E4DC] font-light">
            {mode === 'gemstone' ? "Tell us what you're looking for." : "Tell us what you're creating."}
          </h3>
        </div>
        <div className="flex items-center gap-2 text-xs text-[#D5B581]/80 font-sans tracking-wider">
          <ShieldCheck className="w-4 h-4 text-[#D5B581]" />
          <span>Generational sourcing &bull; Direct trade access</span>
        </div>
      </div>

      {submitted ? (
        <div className="py-12 text-center space-y-4">
          <CheckCircle2 className="w-12 h-12 text-[#D5B581] mx-auto animate-pulse" />
          <h4 className="font-serif text-2xl text-[#E9E4DC]">Specification Compiled</h4>
          <p className="text-xs text-[#D6D5D0]/80 max-w-lg mx-auto font-light leading-relaxed">
            Your customized specification profile has been generated. Scroll to the enquiry section below to submit your brief directly to our specialist desk.
          </p>
          <div className="p-4 bg-[#090C0E] border border-[#D5B581]/20 rounded max-w-md mx-auto text-left text-xs text-[#E9E4DC]/80 space-y-1 font-mono">
            <div>&bull; <span className="text-[#D5B581]">Stone/Project:</span> {mode === 'gemstone' ? formData.stone : formData.projectType}</div>
            <div>&bull; <span className="text-[#D5B581]">Spec/Size:</span> {mode === 'gemstone' ? formData.size : formData.material}</div>
            <div>&bull; <span className="text-[#D5B581]">Cert/NDA:</span> {mode === 'gemstone' ? formData.certification : formData.nda}</div>
          </div>
          <button
            onClick={() => setSubmitted(false)}
            className="text-xs uppercase tracking-[0.2em] text-[#D5B581] hover:underline pt-2 block mx-auto"
          >
            Adjust Parameters &larr;
          </button>
        </div>
      ) : (
        <form onSubmit={handleBuild} className="space-y-6">
          {mode === 'gemstone' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Stone Selector */}
              <div>
                <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-[#D5B581] mb-1">
                  STONE *
                </label>
                <select
                  value={formData.stone}
                  onChange={(e) => setFormData({ ...formData, stone: e.target.value })}
                  className="gold-input bg-[#0E1318] text-[#E9E4DC]"
                >
                  {stoneOptions.map((st) => (
                    <option key={st} value={st}>
                      {st}
                    </option>
                  ))}
                </select>
              </div>

              {/* Stone Type */}
              <div>
                <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-[#D5B581] mb-1">
                  STONE TYPE *
                </label>
                <select
                  value={formData.stoneType}
                  onChange={(e) => setFormData({ ...formData, stoneType: e.target.value })}
                  className="gold-input bg-[#0E1318] text-[#E9E4DC]"
                >
                  <option value="Natural / Certified">Natural / Certified</option>
                  <option value="Natural Untreated / No Oil">Natural Untreated / No Oil</option>
                  <option value="Minor Enhancement Acceptable">Minor Enhancement Acceptable</option>
                  <option value="Investment Grade Rough">Investment Grade Rough</option>
                </select>
              </div>

              {/* Size */}
              <div>
                <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-[#D5B581] mb-1">
                  SIZE / CARAT WEIGHT *
                </label>
                <input
                  type="text"
                  placeholder="e.g. 3.50 ct or 10x8 mm"
                  value={formData.size}
                  onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                  className="gold-input"
                  required
                />
              </div>

              {/* Colour */}
              <div>
                <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-[#D5B581] mb-1">
                  COLOUR PREFERENCE *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Vivid Green / Royal Blue / Pigeon's Blood"
                  value={formData.colour}
                  onChange={(e) => setFormData({ ...formData, colour: e.target.value })}
                  className="gold-input"
                  required
                />
              </div>

              {/* Grade */}
              <div>
                <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-[#D5B581] mb-1">
                  GRADE PREFERENCE
                </label>
                <select
                  value={formData.grade}
                  onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                  className="gold-input bg-[#0E1318] text-[#E9E4DC]"
                >
                  <option value="High Jewellery Grade">High Jewellery Grade</option>
                  <option value="Museum / Investment Grade">Museum / Investment Grade</option>
                  <option value="Fine Commercial Cut">Fine Commercial Cut</option>
                </select>
              </div>

              {/* Certification */}
              <div>
                <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-[#D5B581] mb-1">
                  CERTIFICATION REQUIRED
                </label>
                <select
                  value={formData.certification}
                  onChange={(e) => setFormData({ ...formData, certification: e.target.value })}
                  className="gold-input bg-[#0E1318] text-[#E9E4DC]"
                >
                  {certificationOptions.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-[#D5B581] mb-1">
                  QUANTITY
                </label>
                <select
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="gold-input bg-[#0E1318] text-[#E9E4DC]"
                >
                  {quantityOptions.map((q) => (
                    <option key={q} value={q}>
                      {q}
                    </option>
                  ))}
                </select>
              </div>

              {/* Additional Requirements */}
              <div className="md:col-span-2">
                <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-[#D5B581] mb-1">
                  ADDITIONAL REQUIREMENTS / ORIGIN PREFERENCE
                </label>
                <input
                  type="text"
                  placeholder="e.g. Colombian Muzo origin, no resin, step cut, urgent timeframe"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="gold-input"
                />
              </div>
            </div>
          ) : (
            /* Manufacturing Requirement Builder */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-[#D5B581] mb-1">
                  PROJECT TYPE *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Bespoke Ring, Luxury Bag Clasp, Cufflink Suite"
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="gold-input"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-[#D5B581] mb-1">
                  DEVELOPMENT STAGE *
                </label>
                <select
                  value={formData.developmentStage}
                  onChange={(e) => setFormData({ ...formData, developmentStage: e.target.value })}
                  className="gold-input bg-[#0E1318] text-[#E9E4DC]"
                >
                  <option value="Concept / Sketch">Concept / Initial Sketch</option>
                  <option value="3D CAD File Ready">3D CAD / STL File Ready</option>
                  <option value="Prototype Physical Sample">Physical Prototype Sample</option>
                  <option value="Existing Product Scale-up">Existing Product Scale-up</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-[#D5B581] mb-1">
                  PRIMARY MATERIAL *
                </label>
                <select
                  value={formData.material}
                  onChange={(e) => setFormData({ ...formData, material: e.target.value })}
                  className="gold-input bg-[#0E1318] text-[#E9E4DC]"
                >
                  <option value="18K Yellow Gold">18K Yellow Gold</option>
                  <option value="18K Rose Gold">18K Rose Gold</option>
                  <option value="18K White Gold">18K White Gold</option>
                  <option value="Platinum 950">Platinum 950</option>
                  <option value="Sterling Silver 925">Sterling Silver 925</option>
                  <option value="Titanium / High-Tech Alloy">Titanium / High-Tech Alloy</option>
                  <option value="Solid Brass / Bronze">Solid Brass / Bronze</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-[#D5B581] mb-1">
                  FINISH &amp; SURFACE TREATMENT
                </label>
                <select
                  value={formData.finish}
                  onChange={(e) => setFormData({ ...formData, finish: e.target.value })}
                  className="gold-input bg-[#0E1318] text-[#E9E4DC]"
                >
                  <option value="Mirror Polishing">High Gloss Mirror Polishing</option>
                  <option value="Brushed / Satin">Fine Brushed / Satin</option>
                  <option value="Hot Enamelling (Grand Feu)">Hot Enamelling (Grand Feu)</option>
                  <option value="PVD Coating / Heavy Micron Plating">PVD Coating / Heavy Micron Plating</option>
                  <option value="Hand Hammered / Textured">Hand Hammered / Textured</option>
                  <option value="Bespoke Surface Treatment">Bespoke Surface Treatment</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-[#D5B581] mb-1">
                  CONFIDENTIALITY &amp; NDA
                </label>
                <select
                  value={formData.nda}
                  onChange={(e) => setFormData({ ...formData, nda: e.target.value })}
                  className="gold-input bg-[#0E1318] text-[#E9E4DC]"
                >
                  <option value="NDA Required Before Brief">NDA Required Before Technical Review</option>
                  <option value="Standard Confidentiality Sufficient">Standard Confidentiality Sufficient</option>
                  <option value="Discuss In Initial Call">Discuss In Initial Call</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-[#D5B581] mb-1">
                  TARGET QUANTITY
                </label>
                <input
                  type="text"
                  placeholder="e.g. 1 Piece Prototype, or 50 - 500 pcs run"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="gold-input"
                />
              </div>
            </div>
          )}

          {/* Submit Action CTA */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#D5B581]/15">
            <span className="text-[11px] text-[#D6D5D0]/60 font-sans tracking-wider">
              {mode === 'gemstone'
                ? 'Sourced built around your exact requirements, not a fixed catalogue.'
                : 'A single-piece sample can be developed alongside applicable development costs.'}
            </span>
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#D5B581] hover:bg-[#E9E4DC] text-[#090C0E] font-sans uppercase tracking-[0.25em] text-xs font-semibold py-3.5 px-8 transition-colors flex items-center justify-center gap-2 group whitespace-nowrap"
            >
              <span>{mode === 'gemstone' ? 'REQUEST SOURCING' : 'DISCUSS YOUR PROJECT'}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
