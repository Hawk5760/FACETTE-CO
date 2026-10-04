import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import GemstonesPage from './pages/GemstonesPage';
import EmeraldsPage from './pages/EmeraldsPage';
import SapphiresPage from './pages/SapphiresPage';
import RubyPage from './pages/RubyPage';
import JewelleryPage from './pages/JewelleryPage';
import FashionHardwarePage from './pages/FashionHardwarePage';
import CorporateGiftingPage from './pages/CorporateGiftingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

// Scroll to top on route navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#090C0E] text-[#E9E4DC]">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gemstones" element={<GemstonesPage />} />
          <Route path="/emeralds" element={<EmeraldsPage />} />
          <Route path="/sapphires" element={<SapphiresPage />} />
          <Route path="/ruby" element={<RubyPage />} />
          <Route path="/jewellery" element={<JewelleryPage />} />
          <Route path="/fashion-hardware" element={<FashionHardwarePage />} />
          <Route path="/corporate-gifting" element={<CorporateGiftingPage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Catch-all redirect to home */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
