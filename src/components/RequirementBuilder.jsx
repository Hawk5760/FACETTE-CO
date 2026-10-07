import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck, ArrowRight, UploadCloud, FileText } from 'lucide-react';

export default function RequirementBuilder({
  initialStone = 'Emerald',
  mode = 'gemstone', // 'gemstone' | 'manufacturing' | 'hardware' | 'gifting'
  onComplete = null,
}) {
  const [formData, setFormData] = useState({
    // Gemstone mode
    stone: initialStone,
    stoneType: 'Natural / Certified',
    size: '3.0 - 5.0 ct',
    colour: 'Deep Vivid Hue',
    grade: 'High Jewellery Grade',
    certification: 'GIA / Gübelin / SSEF',
    gemQuantity: 'Single Stone',
    gemNotes: '',

    // Manufacturing / Jewellery mode
    projectType: 'High Jewellery Ring / Pendant',
    developmentStage: 'Concept / Sketch',
    material: '18K Yellow Gold',
    dimensions: '',
    finish: 'Mirror Polishing',
    quantity: '1 Piece Prototype',
    nda: 'NDA Required Before Brief',
    projectDetails: '',

    // Fashion Hardware mode
    hardwareComponent: '',
    hardwareApplication: 'Bag & Leather Goods',
    hardwareMaterial: 'Solid Brass / Bronze',
    hardwareDimensions: '',
    hardwareFinish: 'Polished',
    hardwareQuantity: '50 - 250 pcs',
    hardwareNda: 'Yes — Required',
    hardwareAdditional: '',

    // Corporate Gifting mode
    companyBrand: '',
    occasion: '',
    audience: 'Clients',
    giftingQuantity: '50 - 100 units',
    budgetRange: '$15,000 — $50,000',
    productPreference: 'Custom bespoke object',
    personalisation: 'Logo & Message Engraving',
    packaging: 'Bespoke Luxury Box Required',
    giftingDetails: '',

    // Common file
    fileName: '',
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

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, fileName: e.target.files[0].name });
    }
  };

  const handleBuild = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (onComplete) onComplete(formData);
  };

  // Titles & Eyebrows per PDF 2 Specifications
  const getHeaderInfo = () => {
    switch (mode) {
      case 'hardware':
        return {
          eyebrow: '06 — REQUIREMENT BUILDER',
          title: "Tell us what the component needs to do.",
          cta: 'REQUEST DEVELOPMENT',
          footerNote: 'Sampling can start with a single piece alongside development costs.',
        };
      case 'gifting':
        return {
          eyebrow: '05 — REQUIREMENT BUILDER',
          title: "Tell us what you're planning.",
          cta: 'DISCUSS YOUR GIFTING PROJECT',
          footerNote: 'A concept developed specifically around your brand, audience and occasion.',
        };
      case 'manufacturing':
      case 'jewellery':
        return {
          eyebrow: '07 — REQUIREMENT BUILDER',
          title: "Tell us what you're creating.",
          cta: 'DISCUSS YOUR PROJECT',
          footerNote: 'A single-piece sample can be developed alongside applicable development costs.',
        };
      case 'gemstone':
      default:
        return {
          eyebrow: '05 — REQUIREMENT BUILDER',
          title: "Tell us what you're looking for.",
          cta: 'REQUEST SOURCING',
          footerNote: 'Sourcing built around your exact requirements, not a fixed catalogue.',
        };
    }
  };

  const info = getHeaderInfo();

  return (
    <div className="bg-[#0E1318] border border-[#D5B581]/25 p-6 sm:p-8 md:p-12 rounded-sm relative overflow-hidden shadow-2xl">
      {/* Decorative Corner Ornaments */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#D5B581]/40" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#D5B581]/40" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#D5B581]/40" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#D5B581]/40" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#D5B581]/15 pb-6 mb-8 gap-4">
        <div>
          <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.25em] text-[#D5B581] block mb-1 font-semibold">
            {info.eyebrow}
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#E9E4DC] font-light">
            {info.title}
          </h3>
        </div>
        <div className="flex items-center gap-2 text-xs text-[#D5B581]/80 font-sans tracking-wider">
          <ShieldCheck className="w-4 h-4 text-[#D5B581]" />
          <span>Confidentiality &bull; Direct Technical Desk</span>
        </div>
      </div>

      {submitted ? (
        <div className="py-12 text-center space-y-4">
          <CheckCircle2 className="w-12 h-12 text-[#D5B581] mx-auto animate-pulse" />
          <h4 className="font-serif text-2xl text-[#E9E4DC]">Specification Compiled</h4>
          <p className="text-xs text-[#D6D5D0]/80 max-w-lg mx-auto font-light leading-relaxed">
            Your customized specification profile has been generated. Scroll to the enquiry section below to finalize your brief directly with our specialists.
          </p>
          <div className="p-4 bg-[#090C0E] border border-[#D5B581]/20 rounded max-w-md mx-auto text-left text-xs text-[#E9E4DC]/80 space-y-1 font-mono">
            {mode === 'gemstone' && (
              <>
                <div>&bull; <span className="text-[#D5B581]">Stone:</span> {formData.stone} ({formData.stoneType})</div>
                <div>&bull; <span className="text-[#D5B581]">Size / Grade:</span> {formData.size} &bull; {formData.grade}</div>
                <div>&bull; <span className="text-[#D5B581]">Cert:</span> {formData.certification}</div>
              </>
            )}
            {(mode === 'manufacturing' || mode === 'jewellery') && (
              <>
                <div>&bull; <span className="text-[#D5B581]">Project:</span> {formData.projectType}</div>
                <div>&bull; <span className="text-[#D5B581]">Stage / Material:</span> {formData.developmentStage} &bull; {formData.material}</div>
                <div>&bull; <span className="text-[#D5B581]">NDA:</span> {formData.nda}</div>
              </>
            )}
            {mode === 'hardware' && (
              <>
                <div>&bull; <span className="text-[#D5B581]">Component:</span> {formData.hardwareComponent || 'Bespoke Hardware'}</div>
                <div>&bull; <span className="text-[#D5B581]">Application / Finish:</span> {formData.hardwareApplication} &bull; {formData.hardwareFinish}</div>
                <div>&bull; <span className="text-[#D5B581]">NDA:</span> {formData.hardwareNda}</div>
              </>
            )}
            {mode === 'gifting' && (
              <>
                <div>&bull; <span className="text-[#D5B581]">Company:</span> {formData.companyBrand || 'Private Corporate'}</div>
                <div>&bull; <span className="text-[#D5B581]">Occasion / Audience:</span> {formData.occasion} ({formData.audience})</div>
                <div>&bull; <span className="text-[#D5B581]">Budget / Pref:</span> {formData.budgetRange} &bull; {formData.productPreference}</div>
              </>
            )}
            {formData.fileName && (
              <div>&bull; <span className="text-[#D5B581]">Attached Reference:</span> {formData.fileName}</div>
            )}
          </div>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="text-xs uppercase tracking-[0.2em] text-[#D5B581] hover:underline pt-2 block mx-auto cursor-pointer"
          >
            Adjust Parameters &larr;
          </button>
        </div>
      ) : (
        <form onSubmit={handleBuild} className="space-y-6">
          {/* MODE 1: GEMSTONES (PDF 2, Page 2-3) */}
          {mode === 'gemstone' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-[#D5B581] mb-1">
                  STONE &bull; SELECT GEMSTONE *
                </label>
                <select
                  value={formData.stone}
                  onChange={(e) => setFormData({ ...formData, stone: e.target.value })}
                  className="gold-input bg-[#0E1318] text-[#E9E4DC]"
                >
                  {stoneOptions.map((st) => (
                    <option key={st} value={st}>{st}</option>
                  ))}
                </select>
              </div>

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
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-[#D5B581] mb-1">
                  SIZE &bull; REQUIRED SIZE / CARAT *
                </label>
                <input
                  type="text"
                  placeholder="e.g. 3.0 - 5.0 ct, 10x8mm Octagon"
                  value={formData.size}
                  onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                  className="gold-input"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-[#D5B581] mb-1">
                  COLOUR &bull; PREFERRED COLOUR
                </label>
                <input
                  type="text"
                  placeholder="e.g. Vivid Green, Royal Blue, Pigeon's Blood"
                  value={formData.colour}
                  onChange={(e) => setFormData({ ...formData, colour: e.target.value })}
                  className="gold-input"
                />
              </div>

              <div>
                <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-[#D5B581] mb-1">
                  GRADE &bull; PREFERRED GRADE
                </label>
                <select
                  value={formData.grade}
                  onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                  className="gold-input bg-[#0E1318] text-[#E9E4DC]"
                >
                  <option value="High Jewellery Grade">High Jewellery Grade</option>
                  <option value="Commercial Fine Grade">Commercial Fine Grade</option>
                  <option value="Collector / Museum Grade">Collector / Museum Grade</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-[#D5B581] mb-1">
                  CERTIFICATION &bull; REQUIRED LAB
                </label>
                <select
                  value={formData.certification}
                  onChange={(e) => setFormData({ ...formData, certification: e.target.value })}
                  className="gold-input bg-[#0E1318] text-[#E9E4DC]"
                >
                  {certificationOptions.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-[#D5B581] mb-1">
                  QUANTITY &bull; REQUIRED QUANTITY
                </label>
                <select
                  value={formData.gemQuantity}
                  onChange={(e) => setFormData({ ...formData, gemQuantity: e.target.value })}
                  className="gold-input bg-[#0E1318] text-[#E9E4DC]"
                >
                  <option value="Single Stone">Single Statement Stone</option>
                  <option value="Matched Pair">Matched Pair (Earrings)</option>
                  <option value="Calibrated Parcel">Calibrated Parcel</option>
                  <option value="Suite Layout">High Jewellery Suite</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-[#D5B581] mb-1">
                  ADDITIONAL REQUIREMENTS
                </label>
                <input
                  type="text"
                  placeholder="e.g. Origin preference (Muzo, Ceylon, Burma), step cut, urgent date"
                  value={formData.gemNotes}
                  onChange={(e) => setFormData({ ...formData, gemNotes: e.target.value })}
                  className="gold-input"
                />
              </div>
            </div>
          )}

          {/* MODE 2: DESIGN & MANUFACTURING (PDF 2, Page 5) */}
          {(mode === 'manufacturing' || mode === 'jewellery') && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-[#D5B581] mb-1">
                  PROJECT TYPE *
                </label>
                <input
                  type="text"
                  placeholder="e.g. High Jewellery Ring, Bespoke Cuff, Private Label Run"
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
                  <option value="Concept">Concept</option>
                  <option value="Sketch">Sketch</option>
                  <option value="CAD">CAD</option>
                  <option value="Prototype">Prototype</option>
                  <option value="Existing Product">Existing Product</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-[#D5B581] mb-1">
                  MATERIAL *
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
                  QUANTITY
                </label>
                <input
                  type="text"
                  placeholder="e.g. 1 Piece Prototype, 50 pcs batch"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="gold-input"
                />
              </div>

              <div>
                <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-[#D5B581] mb-1">
                  DIMENSIONS
                </label>
                <input
                  type="text"
                  placeholder="e.g. US Size 6.5, 45mm x 25mm"
                  value={formData.dimensions}
                  onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
                  className="gold-input"
                />
              </div>

              <div>
                <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-[#D5B581] mb-1">
                  FINISH
                </label>
                <select
                  value={formData.finish}
                  onChange={(e) => setFormData({ ...formData, finish: e.target.value })}
                  className="gold-input bg-[#0E1318] text-[#E9E4DC]"
                >
                  <option value="Polishing">Polishing (Mirror Gloss)</option>
                  <option value="Plating">Plating (Heavy Micron)</option>
                  <option value="Enamelling">Enamelling (Grand Feu)</option>
                  <option value="Texture">Texture / Hand Hammered</option>
                  <option value="Custom">Custom Finish</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-[#D5B581] mb-1">
                  NDA
                </label>
                <select
                  value={formData.nda}
                  onChange={(e) => setFormData({ ...formData, nda: e.target.value })}
                  className="gold-input bg-[#0E1318] text-[#E9E4DC]"
                >
                  <option value="Required">Required</option>
                  <option value="Not required">Not required</option>
                  <option value="Discuss">Discuss</option>
                </select>
              </div>

              {/* Reference Upload */}
              <div>
                <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-[#D5B581] mb-1">
                  REFERENCE &bull; SKETCH / CAD / STL / IMAGE
                </label>
                <div className="relative border-b border-[#D5B581]/30 py-2.5 flex items-center justify-between text-xs text-[#E9E4DC]/70">
                  <span className="truncate max-w-[200px]">{formData.fileName || 'Upload reference file'}</span>
                  <label className="cursor-pointer text-[#D5B581] hover:text-[#E9E4DC] flex items-center gap-1.5 font-medium">
                    <UploadCloud className="w-4 h-4" />
                    <span>Browse</span>
                    <input type="file" onChange={handleFileChange} className="hidden" />
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-[#D5B581] mb-1">
                  PROJECT DETAILS
                </label>
                <input
                  type="text"
                  placeholder="Specific tolerances, stone setting requirements, etc."
                  value={formData.projectDetails}
                  onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                  className="gold-input"
                />
              </div>
            </div>
          )}

          {/* MODE 3: FASHION HARDWARE (PDF 2, Page 8) */}
          {mode === 'hardware' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-[#D5B581] mb-1">
                  COMPONENT / IDEA *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Sculptural Bag Clasp, Tension Lock, Signature Buckle"
                  value={formData.hardwareComponent}
                  onChange={(e) => setFormData({ ...formData, hardwareComponent: e.target.value })}
                  className="gold-input"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-[#D5B581] mb-1">
                  APPLICATION *
                </label>
                <select
                  value={formData.hardwareApplication}
                  onChange={(e) => setFormData({ ...formData, hardwareApplication: e.target.value })}
                  className="gold-input bg-[#0E1318] text-[#E9E4DC]"
                >
                  <option value="Fashion">Fashion</option>
                  <option value="Bag">Bag</option>
                  <option value="Footwear">Footwear</option>
                  <option value="Accessory">Accessory</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-[#D5B581] mb-1">
                  MATERIAL *
                </label>
                <select
                  value={formData.hardwareMaterial}
                  onChange={(e) => setFormData({ ...formData, hardwareMaterial: e.target.value })}
                  className="gold-input bg-[#0E1318] text-[#E9E4DC]"
                >
                  <option value="Solid Brass">Solid Brass</option>
                  <option value="Bronze">Marine-Grade Bronze</option>
                  <option value="Stainless Steel">Stainless Steel</option>
                  <option value="Titanium">Aerospace Titanium</option>
                  <option value="Sterling Silver 925">Sterling Silver 925</option>
                  <option value="Zinc Alloy">Zinc Alloy</option>
                  <option value="Custom Alloy">Custom Precious Alloy</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-[#D5B581] mb-1">
                  DIMENSIONS
                </label>
                <input
                  type="text"
                  placeholder="e.g. 42mm x 24mm x 8mm, 3mm plate"
                  value={formData.hardwareDimensions}
                  onChange={(e) => setFormData({ ...formData, hardwareDimensions: e.target.value })}
                  className="gold-input"
                />
              </div>

              <div>
                <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-[#D5B581] mb-1">
                  FINISH *
                </label>
                <select
                  value={formData.hardwareFinish}
                  onChange={(e) => setFormData({ ...formData, hardwareFinish: e.target.value })}
                  className="gold-input bg-[#0E1318] text-[#E9E4DC]"
                >
                  <option value="Polished">Polished</option>
                  <option value="Brushed">Brushed</option>
                  <option value="Textured">Textured</option>
                  <option value="Custom">Custom</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-[#D5B581] mb-1">
                  QUANTITY
                </label>
                <input
                  type="text"
                  placeholder="e.g. 1 Sample Prototype, 100 pcs, 500 pcs run"
                  value={formData.hardwareQuantity}
                  onChange={(e) => setFormData({ ...formData, hardwareQuantity: e.target.value })}
                  className="gold-input"
                />
              </div>

              {/* Reference Upload */}
              <div>
                <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-[#D5B581] mb-1">
                  REFERENCE &bull; DRAWING / IMAGE / CAD
                </label>
                <div className="relative border-b border-[#D5B581]/30 py-2.5 flex items-center justify-between text-xs text-[#E9E4DC]/70">
                  <span className="truncate max-w-[200px]">{formData.fileName || 'Upload drawing or CAD'}</span>
                  <label className="cursor-pointer text-[#D5B581] hover:text-[#E9E4DC] flex items-center gap-1.5 font-medium">
                    <UploadCloud className="w-4 h-4" />
                    <span>Upload</span>
                    <input type="file" onChange={handleFileChange} className="hidden" />
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-[#D5B581] mb-1">
                  NDA REQUIREMENT
                </label>
                <select
                  value={formData.hardwareNda}
                  onChange={(e) => setFormData({ ...formData, hardwareNda: e.target.value })}
                  className="gold-input bg-[#0E1318] text-[#E9E4DC]"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  <option value="Discuss">Discuss</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-[#D5B581] mb-1">
                  ADDITIONAL REQUIREMENTS
                </label>
                <input
                  type="text"
                  placeholder="Spring mechanism, laser logo engraving, durability specs"
                  value={formData.hardwareAdditional}
                  onChange={(e) => setFormData({ ...formData, hardwareAdditional: e.target.value })}
                  className="gold-input"
                />
              </div>
            </div>
          )}

          {/* MODE 4: CORPORATE GIFTING (PDF 2, Page 10) */}
          {mode === 'gifting' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-[#D5B581] mb-1">
                  COMPANY / BRAND *
                </label>
                <input
                  type="text"
                  placeholder="Company name or brand"
                  value={formData.companyBrand}
                  onChange={(e) => setFormData({ ...formData, companyBrand: e.target.value })}
                  className="gold-input"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-[#D5B581] mb-1">
                  OCCASION *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Leadership Summit, 25-Year Milestone, VIP Client Gift"
                  value={formData.occasion}
                  onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                  className="gold-input"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-[#D5B581] mb-1">
                  AUDIENCE *
                </label>
                <select
                  value={formData.audience}
                  onChange={(e) => setFormData({ ...formData, audience: e.target.value })}
                  className="gold-input bg-[#0E1318] text-[#E9E4DC]"
                >
                  <option value="Clients">Clients</option>
                  <option value="Executives">Executives</option>
                  <option value="Employees">Employees</option>
                  <option value="VIPs">VIPs</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-[#D5B581] mb-1">
                  QUANTITY
                </label>
                <input
                  type="text"
                  placeholder="e.g. 25, 100, 500 units"
                  value={formData.giftingQuantity}
                  onChange={(e) => setFormData({ ...formData, giftingQuantity: e.target.value })}
                  className="gold-input"
                />
              </div>

              <div>
                <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-[#D5B581] mb-1">
                  BUDGET RANGE
                </label>
                <select
                  value={formData.budgetRange}
                  onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                  className="gold-input bg-[#0E1318] text-[#E9E4DC]"
                >
                  <option value="$5,000 — $15,000">$5,000 — $15,000</option>
                  <option value="$15,000 — $50,000">$15,000 — $50,000</option>
                  <option value="$50,000 — $100,000">$50,000 — $100,000</option>
                  <option value="$100,000+">$100,000+</option>
                  <option value="Custom Budget">Custom Tier</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-[#D5B581] mb-1">
                  PRODUCT PREFERENCE
                </label>
                <select
                  value={formData.productPreference}
                  onChange={(e) => setFormData({ ...formData, productPreference: e.target.value })}
                  className="gold-input bg-[#0E1318] text-[#E9E4DC]"
                >
                  <option value="Existing concept">Existing concept</option>
                  <option value="Custom object">Custom object</option>
                  <option value="Open to ideas">Open to ideas</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-[#D5B581] mb-1">
                  PERSONALISATION
                </label>
                <select
                  value={formData.personalisation}
                  onChange={(e) => setFormData({ ...formData, personalisation: e.target.value })}
                  className="gold-input bg-[#0E1318] text-[#E9E4DC]"
                >
                  <option value="Logo">Logo</option>
                  <option value="Name">Name</option>
                  <option value="Message">Message</option>
                  <option value="Custom">Custom</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-[#D5B581] mb-1">
                  PACKAGING
                </label>
                <select
                  value={formData.packaging}
                  onChange={(e) => setFormData({ ...formData, packaging: e.target.value })}
                  className="gold-input bg-[#0E1318] text-[#E9E4DC]"
                >
                  <option value="Required">Required</option>
                  <option value="Not required">Not required</option>
                  <option value="Discuss">Discuss</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-[#D5B581] mb-1">
                  PROJECT DETAILS
                </label>
                <input
                  type="text"
                  placeholder="Audience profile, brand ethos, delivery timeline"
                  value={formData.giftingDetails}
                  onChange={(e) => setFormData({ ...formData, giftingDetails: e.target.value })}
                  className="gold-input"
                />
              </div>
            </div>
          )}

          {/* Submit Action CTA with Exact Label from PDF 2 */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#D5B581]/15">
            <span className="text-[11px] text-[#D6D5D0]/60 font-sans tracking-wider text-center sm:text-left">
              {info.footerNote}
            </span>
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#D5B581] hover:bg-[#E9E4DC] text-[#090C0E] font-sans uppercase tracking-[0.25em] text-xs font-semibold py-3.5 px-8 transition-colors flex items-center justify-center gap-2 group whitespace-nowrap cursor-pointer shadow-lg"
            >
              <span>{info.cta}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
