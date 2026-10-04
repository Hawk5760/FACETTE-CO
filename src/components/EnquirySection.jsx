import React, { useState } from 'react';
import { UploadCloud, CheckCircle2, ArrowRight } from 'lucide-react';

export default function EnquirySection({ defaultInterest = '' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    companyRole: '',
    country: '',
    productInterest: defaultInterest || '',
    requirement: '',
    hearAbout: '',
    fileName: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, fileName: e.target.files[0].name });
    }
  };

  return (
    <section id="enquiry" className="bg-[#090C0E] py-24 md:py-32 px-6 md:px-12 border-t border-[#D5B581]/15">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* LEFT SIDE — Editorial Statement (From PDF 2, Page 11) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-[11px] font-sans tracking-[0.25em] text-[#D5B581] uppercase block mb-4 font-semibold">
                BEGIN THE CONVERSATION
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-[#E9E4DC] leading-[1.15]">
                Every great object <br />
                begins with <br />
                <span className="italic text-[#D5B581]">an idea.</span>
              </h2>
            </div>

            <p className="text-base text-[#D6D5D0]/80 font-light leading-relaxed max-w-md">
              Whether you have a finished specification, a reference, a rough concept or simply a requirement — start the conversation.
            </p>

            <div className="pt-4 border-t border-[#D5B581]/15 space-y-3">
              <p className="text-xs tracking-wider text-[#E9E4DC]/70 font-light">
                Every enquiry is reviewed personally and directed to the right capability.
              </p>
              <div className="text-[11px] font-sans tracking-[0.25em] text-[#D5B581] uppercase font-semibold">
                INDIA &bull; GLOBAL B2B ENQUIRIES
              </div>
            </div>

            <div className="hidden lg:block pt-6">
              <div className="p-6 bg-[#0E1318] border border-[#D5B581]/15 rounded-sm">
                <span className="text-[10px] tracking-[0.25em] text-[#D5B581] uppercase block mb-1">
                  Confidentiality Guaranteed
                </span>
                <p className="text-xs text-[#D6D5D0]/60 leading-relaxed font-light">
                  Mutual Non-Disclosure Agreements (NDAs) are established upon request before reviewing proprietary designs, CAD files, or custom formulations.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — Structured Enquiry Form with Thin Gold Lines (From PDF 2, Page 12-13) */}
          <div className="lg:col-span-7 bg-[#0E1318]/60 p-8 md:p-12 border border-[#D5B581]/20 rounded-sm backdrop-blur-sm">
            {submitted ? (
              <div className="py-16 text-center space-y-5">
                <CheckCircle2 className="w-14 h-14 text-[#D5B581] mx-auto animate-bounce" />
                <h3 className="font-serif text-3xl text-[#E9E4DC]">Enquiry Received</h3>
                <p className="text-sm text-[#D6D5D0]/80 max-w-md mx-auto font-light leading-relaxed">
                  Thank you for sharing your requirement. A specialist from our atelier has received your details and will review your technical specifications.
                </p>
                <div className="pt-4">
                  <span className="text-[11px] tracking-[0.25em] text-[#D5B581] uppercase font-sans">
                    YOUR REQUIREMENT WILL BE REVIEWED BY OUR TEAM.
                  </span>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-xs uppercase tracking-[0.2em] text-[#D5B581] hover:underline"
                >
                  Submit Another Specification &rarr;
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Full Name */}
                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-[#D5B581] mb-1">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="gold-input"
                  />
                </div>

                {/* Company & Role */}
                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-[#D5B581] mb-1">
                    COMPANY &amp; ROLE *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Company name · Your role"
                    value={formData.companyRole}
                    onChange={(e) => setFormData({ ...formData, companyRole: e.target.value })}
                    className="gold-input"
                  />
                </div>

                {/* Country / Region */}
                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-[#D5B581] mb-1">
                    COUNTRY / REGION *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Country or region"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="gold-input"
                  />
                </div>

                {/* Product Interest Dropdown */}
                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-[#D5B581] mb-1">
                    PRODUCT INTEREST *
                  </label>
                  <select
                    required
                    value={formData.productInterest}
                    onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                    className="gold-input bg-[#0E1318] text-[#E9E4DC] cursor-pointer"
                  >
                    <option value="" disabled className="text-gray-500">
                      Select your interest
                    </option>
                    <option value="Gemstones">Gemstones (Emerald, Ruby, Sapphire, etc.)</option>
                    <option value="Design & Manufacturing">Design &amp; Manufacturing</option>
                    <option value="Fashion Hardware">Fashion Hardware</option>
                    <option value="Corporate Gifting">Corporate Gifting</option>
                    <option value="Multiple / Not sure">Multiple / Not sure</option>
                  </select>
                </div>

                {/* Project / Requirement */}
                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-[#D5B581] mb-1">
                    PROJECT / REQUIREMENT *
                  </label>
                  <textarea
                    rows="3"
                    required
                    placeholder="Tell us what you're looking to create, source or develop."
                    value={formData.requirement}
                    onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                    className="gold-input resize-none"
                  ></textarea>
                </div>

                {/* Reference / Brief File Upload */}
                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-[#D5B581] mb-2">
                    REFERENCE / BRIEF (OPTIONAL)
                  </label>
                  <label className="flex items-center gap-3 p-4 border border-dashed border-[#D5B581]/30 hover:border-[#D5B581] rounded-sm cursor-pointer transition-colors bg-[#090C0E]/50">
                    <UploadCloud className="w-5 h-5 text-[#D5B581]" />
                    <span className="text-xs text-[#D6D5D0]/70 truncate">
                      {formData.fileName || 'Upload a reference, specification or brief (PDF, CAD, STL, Image)'}
                    </span>
                    <input
                      type="file"
                      className="hidden"
                      onChange={handleFileChange}
                      accept=".pdf,.png,.jpg,.jpeg,.stl,.step,.obj"
                    />
                  </label>
                </div>

                {/* How Did You Hear About Us? */}
                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-[#D5B581] mb-1">
                    HOW DID YOU HEAR ABOUT US?
                  </label>
                  <select
                    value={formData.hearAbout}
                    onChange={(e) => setFormData({ ...formData, hearAbout: e.target.value })}
                    className="gold-input bg-[#0E1318] text-[#E9E4DC] cursor-pointer"
                  >
                    <option value="">Select an option</option>
                    <option value="Referral">Referral</option>
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="Instagram">Instagram</option>
                    <option value="Exhibition">Exhibition / Trade Fair</option>
                    <option value="Search">Search Engine (Google)</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Form CTA & Disclaimer */}
                <div className="pt-4 space-y-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#D5B581] hover:bg-[#E9E4DC] text-[#090C0E] font-sans uppercase tracking-[0.25em] text-xs font-semibold py-4 px-8 transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-[#D5B581]/10"
                  >
                    <span>{isSubmitting ? 'TRANSMITTING BRIEF...' : 'SEND ENQUIRY'}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <p className="text-[11px] font-sans tracking-[0.2em] text-center text-[#D5B581]/80 uppercase">
                    YOUR REQUIREMENT WILL BE REVIEWED BY OUR TEAM.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
