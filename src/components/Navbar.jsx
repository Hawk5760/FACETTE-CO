import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [gemstonesDropdown, setGemstonesDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setGemstonesDropdown(false);
  }, [location]);

  const navLinks = [
    { name: 'Gemstones', path: '/gemstones', hasDropdown: true },
    { name: 'Design & Manufacturing', path: '/jewellery' },
    { name: 'Fashion Hardware', path: '/fashion-hardware' },
    { name: 'Corporate Gifting', path: '/corporate-gifting' },
    { name: 'About', path: '/about-us' },
  ];

  const gemstoneSublinks = [
    { name: 'All Certified Gemstones', path: '/gemstones', desc: 'Specification-led direct sourcing' },
    { name: 'Colombian & Zambian Emeralds', path: '/emeralds', desc: 'Untreated & minor oil natural emeralds' },
    { name: 'Kashmir & Ceylon Sapphires', path: '/sapphires', desc: 'Royal blue, unheated & certified' },
    { name: 'Burmese & Mozambique Rubies', path: '/ruby', desc: "Pigeon's blood & investment grade" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#090C0E]/90 backdrop-blur-md border-b border-[#D5B581]/20 py-4 shadow-lg shadow-black/40'
          : 'bg-gradient-to-b from-[#090C0E]/90 via-[#090C0E]/50 to-transparent py-6 border-b border-[#D5B581]/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo with Emblem */}
        <Link
          to="/"
          className="group flex items-center gap-3 tracking-[0.25em] text-[#E9E4DC] hover:text-[#D5B581] transition-colors"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex-shrink-0 flex items-center justify-center p-0.5">
            <img
              src="/assets/facette-emblem.png"
              alt="Facette & Co Emblem"
              className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(0,112,84,0.4)] group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex flex-col items-start">
            <span className="font-serif text-base sm:text-lg md:text-xl font-light uppercase tracking-[0.25em] sm:tracking-[0.3em] leading-tight text-[#E9E4DC] group-hover:text-[#D5B581] transition-colors">
              FACETTE &amp; CO
            </span>
            <span className="text-[8px] sm:text-[9px] tracking-[0.3em] sm:tracking-[0.35em] text-[#D5B581]/80 uppercase font-sans font-light">
              ATELIER &bull; SOURCING
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 text-[12px] font-sans tracking-[0.18em] uppercase text-[#E9E4DC]/80 font-normal">
          {/* Gemstones with hover dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setGemstonesDropdown(true)}
            onMouseLeave={() => setGemstonesDropdown(false)}
          >
            <Link
              to="/gemstones"
              className={`flex items-center gap-1.5 py-2 transition-colors ${
                location.pathname.startsWith('/gemstones') ||
                location.pathname === '/emeralds' ||
                location.pathname === '/sapphires' ||
                location.pathname === '/ruby'
                  ? 'text-[#D5B581]'
                  : 'hover:text-[#D5B581]'
              }`}
            >
              Gemstones
              <ChevronDown className="w-3 h-3 text-[#D5B581]/60" />
            </Link>

            {/* Dropdown Menu */}
            {gemstonesDropdown && (
              <div className="absolute top-full left-0 w-72 bg-[#0E1318]/95 backdrop-blur-xl border border-[#D5B581]/20 p-3 shadow-2xl rounded-sm">
                <div className="text-[10px] tracking-[0.2em] text-[#D5B581] font-semibold uppercase px-3 py-1.5 border-b border-[#D5B581]/15 mb-1.5">
                  Sourced To Specification
                </div>
                {gemstoneSublinks.map((sub) => (
                  <Link
                    key={sub.path}
                    to={sub.path}
                    className="block px-3 py-2.5 rounded-sm hover:bg-[#0E3D3D]/30 transition-all group"
                  >
                    <div className="text-[12px] text-[#E9E4DC] group-hover:text-[#D5B581] font-medium tracking-wider">
                      {sub.name}
                    </div>
                    <div className="text-[10px] text-[#D6D5D0]/60 normal-case font-light mt-0.5">
                      {sub.desc}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/jewellery"
            className={`py-2 transition-colors ${
              location.pathname === '/jewellery' ? 'text-[#D5B581]' : 'hover:text-[#D5B581]'
            }`}
          >
            Design &amp; Manufacturing
          </Link>

          <Link
            to="/fashion-hardware"
            className={`py-2 transition-colors ${
              location.pathname === '/fashion-hardware' ? 'text-[#D5B581]' : 'hover:text-[#D5B581]'
            }`}
          >
            Fashion Hardware
          </Link>

          <Link
            to="/corporate-gifting"
            className={`py-2 transition-colors ${
              location.pathname === '/corporate-gifting' ? 'text-[#D5B581]' : 'hover:text-[#D5B581]'
            }`}
          >
            Corporate Gifting
          </Link>

          <Link
            to="/about-us"
            className={`py-2 transition-colors ${
              location.pathname === '/about-us' ? 'text-[#D5B581]' : 'hover:text-[#D5B581]'
            }`}
          >
            About
          </Link>
        </nav>

        {/* Right Action: Enquire Button */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link
            to="/contact"
            className="border border-[#D5B581]/50 px-5 py-2 text-[11px] font-sans uppercase tracking-[0.2em] text-[#E9E4DC] hover:text-[#090C0E] hover:bg-[#D5B581] transition-all duration-300"
          >
            Enquire
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          className="lg:hidden p-2 text-[#E9E4DC] hover:text-[#D5B581] focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#090C0E]/98 backdrop-blur-2xl border-b border-[#D5B581]/20 px-6 py-6 transition-all max-h-[80dvh] overflow-y-auto shadow-2xl">
          <div className="flex items-center gap-3 pb-4 mb-4 border-b border-[#D5B581]/15">
            <img
              src="/assets/facette-emblem.png"
              alt="Facette & Co"
              className="w-7 h-7 object-contain"
            />
            <span className="font-serif text-sm tracking-[0.25em] text-[#D5B581] uppercase font-light">
              FACETTE &amp; CO &bull; ATELIER
            </span>
          </div>

          <nav className="flex flex-col space-y-2 text-sm uppercase tracking-[0.18em] font-sans">
            <div className="border-b border-[#D5B581]/15 pb-3 mb-2">
              <span className="text-[11px] text-[#D5B581] tracking-[0.25em] font-semibold block mb-2 px-1">
                Gemstones
              </span>
              <div className="flex flex-col space-y-1 pl-2 text-xs text-[#E9E4DC]/80 normal-case tracking-normal">
                <Link to="/gemstones" className="py-2 px-2 rounded hover:bg-[#0E3D3D]/30 hover:text-[#D5B581] flex items-center justify-between">
                  <span>All Gemstones Overview</span>
                  <span className="text-[10px] text-[#D5B581]/60 font-mono">&rarr;</span>
                </Link>
                <Link to="/emeralds" className="py-2 px-2 rounded hover:bg-[#0E3D3D]/30 hover:text-[#D5B581] flex items-center justify-between">
                  <span>Colombian &amp; Zambian Emeralds</span>
                  <span className="text-[10px] text-[#D5B581]/60 font-mono">&rarr;</span>
                </Link>
                <Link to="/sapphires" className="py-2 px-2 rounded hover:bg-[#0E3D3D]/30 hover:text-[#D5B581] flex items-center justify-between">
                  <span>Kashmir &amp; Ceylon Sapphires</span>
                  <span className="text-[10px] text-[#D5B581]/60 font-mono">&rarr;</span>
                </Link>
                <Link to="/ruby" className="py-2 px-2 rounded hover:bg-[#0E3D3D]/30 hover:text-[#D5B581] flex items-center justify-between">
                  <span>Burmese &amp; Mozambique Ruby</span>
                  <span className="text-[10px] text-[#D5B581]/60 font-mono">&rarr;</span>
                </Link>
              </div>
            </div>

            <Link to="/jewellery" className="py-2.5 px-2 text-[#E9E4DC] hover:text-[#D5B581] hover:bg-[#0E3D3D]/20 rounded">
              Design &amp; Manufacturing
            </Link>
            <Link to="/fashion-hardware" className="py-2.5 px-2 text-[#E9E4DC] hover:text-[#D5B581] hover:bg-[#0E3D3D]/20 rounded">
              Fashion Hardware
            </Link>
            <Link to="/corporate-gifting" className="py-2.5 px-2 text-[#E9E4DC] hover:text-[#D5B581] hover:bg-[#0E3D3D]/20 rounded">
              Corporate Gifting
            </Link>
            <Link to="/about-us" className="py-2.5 px-2 text-[#E9E4DC] hover:text-[#D5B581] hover:bg-[#0E3D3D]/20 rounded">
              About Us
            </Link>
            <Link
              to="/contact"
              className="mt-3 block text-center border border-[#D5B581] py-3 text-xs tracking-[0.25em] text-[#090C0E] bg-[#D5B581] font-semibold hover:bg-[#e4c99c] active:scale-[0.99] transition-all"
            >
              Enquire
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
