import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#090C0E] border-t border-[#D5B581]/15 text-[#E9E4DC] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Minimal Brand Statement */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-[#D5B581]/10 pb-12 mb-12 gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 flex items-center justify-center p-1 bg-[#0E3D3D]/20 border border-[#D5B581]/30 rounded-full shadow-lg">
              <img
                src="/assets/facette-emblem.png"
                alt="Facette & Co"
                className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(0,112,84,0.5)]"
              />
            </div>
            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-light tracking-[0.25em] text-[#E9E4DC] uppercase">
                FACETTE &amp; CO
              </h3>
              <p className="text-[10px] sm:text-[11px] font-sans tracking-[0.2em] sm:tracking-[0.25em] text-[#D5B581] uppercase mt-1">
                GEMSTONES &bull; DESIGN &amp; MANUFACTURING &bull; FASHION HARDWARE &bull; CORPORATE GIFTING
              </p>
            </div>
          </div>
          <div className="text-left md:text-right">
            <span className="text-xs uppercase tracking-[0.2em] text-[#D6D5D0]/60 block font-light">
              Modern Luxury House &bull; Design Studio &bull; Precision Manufacturing
            </span>
          </div>
        </div>

        {/* 4 Navigation Columns for rich SEO crawlability */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-xs font-sans tracking-wider">
          <div>
            <h4 className="text-[#D5B581] text-[11px] uppercase tracking-[0.2em] font-medium mb-4">
              Gemstones
            </h4>
            <ul className="space-y-2.5 text-[#E9E4DC]/70">
              <li>
                <Link to="/gemstones" className="hover:text-[#D5B581] transition-colors">
                  Overview &amp; Sourcing
                </Link>
              </li>
              <li>
                <Link to="/emeralds" className="hover:text-[#D5B581] transition-colors">
                  Colombian &amp; Zambian Emeralds
                </Link>
              </li>
              <li>
                <Link to="/sapphires" className="hover:text-[#D5B581] transition-colors">
                  Kashmir &amp; Ceylon Sapphires
                </Link>
              </li>
              <li>
                <Link to="/ruby" className="hover:text-[#D5B581] transition-colors">
                  Burmese &amp; Mozambique Ruby
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#D5B581] text-[11px] uppercase tracking-[0.2em] font-medium mb-4">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-[#E9E4DC]/70">
              <li>
                <Link to="/jewellery" className="hover:text-[#D5B581] transition-colors">
                  Design &amp; Manufacturing
                </Link>
              </li>
              <li>
                <Link to="/fashion-hardware" className="hover:text-[#D5B581] transition-colors">
                  Fashion Hardware
                </Link>
              </li>
              <li>
                <Link to="/corporate-gifting" className="hover:text-[#D5B581] transition-colors">
                  Corporate Gifting
                </Link>
              </li>
              <li>
                <Link to="/jewellery#process" className="hover:text-[#D5B581] transition-colors">
                  CAD &amp; 3D Prototyping
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#D5B581] text-[11px] uppercase tracking-[0.2em] font-medium mb-4">
              Global Network
            </h4>
            <ul className="space-y-2.5 text-[#E9E4DC]/70">
              <li>Antwerp &bull; Diamond Capital</li>
              <li>Surat &bull; Cutting &amp; Polishing</li>
              <li>Jaipur &bull; Coloured Gemstones</li>
              <li>Milan &bull; Design Ateliers</li>
              <li>Dubai &bull; Middle East Gateway</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#D5B581] text-[11px] uppercase tracking-[0.2em] font-medium mb-4">
              The House
            </h4>
            <ul className="space-y-2.5 text-[#E9E4DC]/70">
              <li>
                <Link to="/about-us" className="hover:text-[#D5B581] transition-colors">
                  Philosophy &amp; Atelier
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#D5B581] transition-colors">
                  Begin A Conversation
                </Link>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#D5B581] transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#D5B581] transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Minimal Bottom Line & Final Statement from PDF */}
        <div className="pt-8 border-t border-[#D5B581]/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#D6D5D0]/50 font-light">
          <p className="font-serif italic tracking-[0.2em] text-[#D5B581]/80 text-sm">
            CRAFTED FOR THOSE WHO CREATE.
          </p>

          <div className="flex items-center space-x-6 text-[11px] tracking-wider uppercase">
            <Link to="/about-us" className="hover:text-[#E9E4DC]">House Policy</Link>
            <Link to="/contact" className="hover:text-[#E9E4DC]">Confidentiality &amp; NDA</Link>
            <span>&copy; {new Date().getFullYear()} FACETTE &amp; CO. ALL RIGHTS RESERVED.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
