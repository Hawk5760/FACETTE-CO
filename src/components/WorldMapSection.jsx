import React, { useState, useEffect, useRef } from 'react';
import worldData from '../data/worldMapPaths.json';

export default function WorldMapSection() {
  const sectionRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [activeLocation, setActiveLocation] = useState(null);
  const [activeRegion, setActiveRegion] = useState('global');

  // Camera views (pan & scale centered on 500, 250 in 1000x500 coordinate space)
  const cameraPresets = {
    global: { x: 0, y: 0, scale: 1, label: 'Global Overview' },
    europe: { x: -36, y: 168, scale: 2.4, label: 'Europe (4 Hubs)' },
    middleEast: { x: -348, y: 82, scale: 2.4, label: 'Middle East (2 Hubs)' },
    asia: { x: -494, y: 66, scale: 1.9, label: 'Asia (4 Hubs)' },
  };

  const [camera, setCamera] = useState(cameraPresets.global);

  // Exact locations requested by user with precision projected coordinates (x, y on 1000x500 canvas)
  const locations = [
    // Europe
    {
      id: 'antwerp',
      name: 'Antwerp',
      desc: 'Global diamond capital',
      region: 'Europe',
      regionKey: 'europe',
      x: 512.2,
      y: 175.0,
    },
    {
      id: 'milan',
      name: 'Milan',
      desc: 'Design & luxury ateliers',
      region: 'Europe',
      regionKey: 'europe',
      x: 525.5,
      y: 184.8,
    },
    {
      id: 'brussels',
      name: 'Brussels',
      desc: 'Certification & trade',
      region: 'Europe',
      regionKey: 'europe',
      x: 512.1,
      y: 175.7,
    },
    {
      id: 'paris',
      name: 'Paris',
      desc: 'Luxury retail gateway',
      region: 'Europe',
      regionKey: 'europe',
      x: 506.5,
      y: 179.1,
    },

    // Middle East
    {
      id: 'dubai',
      name: 'Dubai',
      desc: 'Volume & luxury',
      region: 'Middle East',
      regionKey: 'middleEast',
      x: 653.5,
      y: 215.7,
    },
    {
      id: 'riyadh',
      name: 'Riyadh',
      desc: 'Premium retail partnerships',
      region: 'Middle East',
      regionKey: 'middleEast',
      x: 629.7,
      y: 216.4,
    },

    // Asia
    {
      id: 'surat',
      name: 'Surat',
      desc: 'Cutting & polishing origin',
      region: 'Asia',
      regionKey: 'asia',
      x: 702.3,
      y: 221.4,
    },
    {
      id: 'jaipur',
      name: 'Jaipur',
      desc: 'Coloured gemstone heritage',
      region: 'Asia',
      regionKey: 'asia',
      x: 710.5,
      y: 213.2,
    },
    {
      id: 'hongkong',
      name: 'Hong Kong',
      desc: 'Asian trade hub',
      region: 'Asia',
      regionKey: 'asia',
      x: 817.1,
      y: 219.7,
    },
    {
      id: 'tokyo',
      name: 'Tokyo',
      desc: 'High jewellery market',
      region: 'Asia',
      regionKey: 'asia',
      x: 887.9,
      y: 200.3,
    },
  ];

  // Geodesic trade network connections between sourcing, lapidary and luxury retail centers
  const networkArcs = [
    { from: [512.2, 175.0], to: [525.5, 184.8], q: [518, 178] }, // Antwerp -> Milan
    { from: [512.2, 175.0], to: [506.5, 179.1], q: [509, 176] }, // Antwerp -> Paris
    { from: [512.2, 175.0], to: [512.1, 175.7], q: [512, 175] }, // Antwerp -> Brussels
    { from: [512.2, 175.0], to: [653.5, 215.7], q: [575, 182] }, // Antwerp -> Dubai
    { from: [653.5, 215.7], to: [629.7, 216.4], q: [641, 213] }, // Dubai -> Riyadh
    { from: [653.5, 215.7], to: [702.3, 221.4], q: [678, 212] }, // Dubai -> Surat
    { from: [702.3, 221.4], to: [710.5, 213.2], q: [706, 217] }, // Surat -> Jaipur
    { from: [710.5, 213.2], to: [817.1, 219.7], q: [765, 204] }, // Jaipur -> Hong Kong
    { from: [817.1, 219.7], to: [887.9, 200.3], q: [855, 195] }, // Hong Kong -> Tokyo
  ];

  // IntersectionObserver: Scroll reveal that subtly illuminates markers sequentially as visitor scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsRevealed(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Smooth camera pan to a specific location
  const focusLocation = (loc) => {
    setActiveLocation(loc.id);
    setActiveRegion(loc.regionKey);

    const scale = 2.4;
    const cx = (500 - loc.x) * scale;
    const cy = (250 - loc.y) * scale;

    setCamera({
      x: cx,
      y: cy,
      scale: scale,
      label: `${loc.name} (${loc.region})`,
    });
  };

  // Change region view
  const setRegionView = (key) => {
    setActiveRegion(key);
    setActiveLocation(null);
    setCamera(cameraPresets[key]);
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#090C0E] py-24 sm:py-32 md:py-40 px-4 sm:px-6 md:px-12 border-t border-[#D5B581]/15 overflow-hidden"
    >
      {/* Subtle Background Radial Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-[#0E3D3D]/12 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1540px] mx-auto relative z-10">
        {/* Editorial Section Header */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D5B581]" />
            <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.3em] text-[#D5B581] uppercase font-semibold">
              GLOBAL REACH &bull; CONNECTED BY CRAFT
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light text-[#E9E4DC] leading-tight max-w-4xl">
            WE MOVE WHERE
            <span className="block italic text-[#D5B581] font-normal mt-1">
              MATERIAL, EXPERTISE AND OPPORTUNITY MEET.
            </span>
          </h2>
        </div>

        {/* Bespoke Editorial World Map Canvas */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[21/10] bg-[#0A0D10] border border-[#D5B581]/25 overflow-hidden shadow-2xl mb-16 sm:mb-20">
          {/* Top Architectural Camera Control Bar */}
          <div className="absolute top-0 left-0 right-0 z-30 px-4 sm:px-8 py-3.5 bg-gradient-to-b from-[#090C0E]/95 via-[#090C0E]/70 to-transparent flex items-center justify-between border-b border-[#D5B581]/15 backdrop-blur-[2px]">
            {/* Left: Viewport Status */}
            <div className="flex items-center gap-2.5 text-[10px] sm:text-[11px] font-sans tracking-[0.2em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D5B581]" />
              <span className="text-[#D5B581] font-medium">{camera.label}</span>
            </div>

            {/* Right: Region Preset Jumpers */}
            <div className="flex items-center gap-1.5 sm:gap-2 text-[9px] sm:text-[10px] font-sans uppercase tracking-[0.2em]">
              <button
                onClick={() => setRegionView('global')}
                className={`px-2.5 py-1 transition-all rounded-sm border ${
                  activeRegion === 'global' && !activeLocation
                    ? 'border-[#D5B581] text-[#090C0E] bg-[#D5B581] font-medium'
                    : 'border-[#D5B581]/25 text-[#E9E4DC]/70 hover:text-[#D5B581] hover:border-[#D5B581]/60'
                }`}
              >
                Global
              </button>
              <button
                onClick={() => setRegionView('europe')}
                className={`px-2.5 py-1 transition-all rounded-sm border ${
                  activeRegion === 'europe'
                    ? 'border-[#D5B581] text-[#090C0E] bg-[#D5B581] font-medium'
                    : 'border-[#D5B581]/25 text-[#E9E4DC]/70 hover:text-[#D5B581] hover:border-[#D5B581]/60'
                }`}
              >
                Europe
              </button>
              <button
                onClick={() => setRegionView('middleEast')}
                className={`px-2.5 py-1 transition-all rounded-sm border ${
                  activeRegion === 'middleEast'
                    ? 'border-[#D5B581] text-[#090C0E] bg-[#D5B581] font-medium'
                    : 'border-[#D5B581]/25 text-[#E9E4DC]/70 hover:text-[#D5B581] hover:border-[#D5B581]/60'
                }`}
              >
                Middle East
              </button>
              <button
                onClick={() => setRegionView('asia')}
                className={`px-2.5 py-1 transition-all rounded-sm border ${
                  activeRegion === 'asia'
                    ? 'border-[#D5B581] text-[#090C0E] bg-[#D5B581] font-medium'
                    : 'border-[#D5B581]/25 text-[#E9E4DC]/70 hover:text-[#D5B581] hover:border-[#D5B581]/60'
                }`}
              >
                Asia
              </button>
            </div>
          </div>

          {/* Precision SVG World Map Canvas */}
          <svg
            viewBox="0 0 1000 500"
            className="w-full h-full object-cover select-none"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              {/* Subtle Gold Shimmer Gradient */}
              <linearGradient id="goldArcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#D5B581" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#D5B581" stopOpacity="0.65" />
                <stop offset="100%" stopColor="#D5B581" stopOpacity="0.2" />
              </linearGradient>

              {/* Radial Halo for Active Marker */}
              <radialGradient id="markerGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#D5B581" stopOpacity="0.8" />
                <stop offset="40%" stopColor="#D5B581" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#D5B581" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Camera View Transform Group with Buttery 1.2s Easing */}
            <g
              style={{
                transform: `translate(${camera.x}px, ${camera.y}px) scale(${camera.scale})`,
                transformOrigin: '500px 250px',
                transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              {/* Subtle Map Coordinates Grid Lines */}
              <g stroke="#D5B581" strokeWidth="0.3" strokeOpacity="0.06" fill="none">
                <line x1="0" y1="125" x2="1000" y2="125" />
                <line x1="0" y1="250" x2="1000" y2="250" />
                <line x1="0" y1="375" x2="1000" y2="375" />
                <line x1="250" y1="0" x2="250" y2="500" />
                <line x1="500" y1="0" x2="500" y2="500" />
                <line x1="750" y1="0" x2="750" y2="500" />
              </g>

              {/* Real World Geographic Landmasses & Fine Gold Borders */}
              <g id="world-countries">
                {worldData.map((country, idx) => (
                  <path
                    key={country.id || idx}
                    d={country.d}
                    fill="#15130F"
                    stroke="#D5B581"
                    strokeWidth="0.4"
                    strokeOpacity="0.32"
                    className="transition-colors duration-500 hover:fill-[#1E1A13] hover:stroke-opacity-60"
                  />
                ))}
              </g>

              {/* Fine Gold Geodesic Trade Network Arcs */}
              <g stroke="url(#goldArcGrad)" strokeWidth="0.75" strokeDasharray="3, 4" fill="none">
                {networkArcs.map((arc, i) => (
                  <path
                    key={i}
                    d={`M ${arc.from[0]},${arc.from[1]} Q ${arc.q[0]},${arc.q[1]} ${arc.to[0]},${arc.to[1]}`}
                  />
                ))}
              </g>

              {/* Small Glowing Gold Location Markers with Restrained Slow Pulse */}
              {locations.map((loc, idx) => {
                const isSelected = activeLocation === loc.id;
                // Staggered reveal delay as visitor scrolls into view
                const delayMs = idx * 110;

                return (
                  <g
                    key={loc.id}
                    className="cursor-pointer group"
                    onClick={() => focusLocation(loc)}
                    onMouseEnter={() => setActiveLocation(loc.id)}
                    style={{
                      opacity: isRevealed ? 1 : 0,
                      transition: `opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms`,
                    }}
                  >
                    {/* Slow, restrained breathing pulse halo */}
                    <circle
                      cx={loc.x}
                      cy={loc.y}
                      r={isSelected ? 10 : 6}
                      fill="url(#markerGlow)"
                      className="opacity-75 group-hover:opacity-100 marker-pulse"
                    />

                    {/* Outer Fine Gold Ring */}
                    <circle
                      cx={loc.x}
                      cy={loc.y}
                      r={isSelected ? 4 : 2.5}
                      fill="#090C0E"
                      stroke="#D5B581"
                      strokeWidth={isSelected ? '1' : '0.65'}
                      className="transition-all duration-300"
                    />

                    {/* Small Glowing Solid Gold Core */}
                    <circle
                      cx={loc.x}
                      cy={loc.y}
                      r={isSelected ? 2 : 1.2}
                      fill="#D5B581"
                      className="transition-all duration-300"
                    />

                    {/* Restrained Precision Hover/Selection Tooltip Label */}
                    {isSelected && (
                      <g className="transition-opacity duration-300">
                        {/* Tooltip Background Card */}
                        <rect
                          x={loc.x - 70}
                          y={loc.y - 34}
                          width="140"
                          height="26"
                          rx="1"
                          fill="#090C0E"
                          stroke="#D5B581"
                          strokeWidth="0.6"
                          opacity="0.95"
                        />
                        <text
                          x={loc.x}
                          y={loc.y - 21}
                          textAnchor="middle"
                          fill="#E9E4DC"
                          fontFamily="Cormorant Garamond, Georgia, serif"
                          fontSize="9.5"
                          letterSpacing="0.8"
                          fontWeight="400"
                        >
                          {loc.name.toUpperCase()}
                        </text>
                        <text
                          x={loc.x}
                          y={loc.y - 12}
                          textAnchor="middle"
                          fill="#D5B581"
                          fontFamily="Plus Jakarta Sans, sans-serif"
                          fontSize="5.5"
                          letterSpacing="0.8"
                          textTransform="uppercase"
                          fontWeight="300"
                        >
                          {loc.desc}
                        </text>
                      </g>
                    )}
                  </g>
                );
              })}
            </g>
          </svg>

          {/* Bottom Editorial Subtext Bar */}
          <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-8 py-3 bg-gradient-to-t from-[#090C0E] to-transparent flex items-center justify-between text-[10px] tracking-[0.25em] text-[#D5B581]/70 font-sans uppercase">
            <span>Sourcing &bull; Precision Lapidary &bull; Manufacturing &bull; Luxury Markets</span>
            <span className="hidden sm:inline font-light text-[#D6D5D0]/50">
              Interactive Atelier Cartography
            </span>
          </div>
        </div>

        {/* GLOBAL LOCATIONS — THREE GEOGRAPHIC COLUMNS (EUROPE, MIDDLE EAST, ASIA) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14 pt-4 border-t border-[#D5B581]/15">
          {/* COLUMN 1: EUROPE */}
          <div className="space-y-6">
            <h3 className="text-xs font-sans tracking-[0.25em] text-[#D5B581] uppercase font-semibold pb-2 border-b border-[#D5B581]/20">
              EUROPE
            </h3>
            <div className="space-y-6">
              {locations
                .filter((l) => l.region === 'Europe')
                .map((loc) => {
                  const isCurrent = activeLocation === loc.id;
                  return (
                    <div
                      key={loc.id}
                      onClick={() => focusLocation(loc)}
                      onMouseEnter={() => setActiveLocation(loc.id)}
                      className="group cursor-pointer transition-colors"
                    >
                      <h4
                        className={`font-serif text-2xl sm:text-3xl font-light tracking-wide transition-colors ${
                          isCurrent
                            ? 'text-[#D5B581]'
                            : 'text-[#E9E4DC] group-hover:text-[#D5B581]'
                        }`}
                      >
                        {loc.name}
                      </h4>
                      <p className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.2em] text-[#D5B581]/80 font-light mt-1">
                        {loc.desc}
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* COLUMN 2: MIDDLE EAST */}
          <div className="space-y-6">
            <h3 className="text-xs font-sans tracking-[0.25em] text-[#D5B581] uppercase font-semibold pb-2 border-b border-[#D5B581]/20">
              MIDDLE EAST
            </h3>
            <div className="space-y-6">
              {locations
                .filter((l) => l.region === 'Middle East')
                .map((loc) => {
                  const isCurrent = activeLocation === loc.id;
                  return (
                    <div
                      key={loc.id}
                      onClick={() => focusLocation(loc)}
                      onMouseEnter={() => setActiveLocation(loc.id)}
                      className="group cursor-pointer transition-colors"
                    >
                      <h4
                        className={`font-serif text-2xl sm:text-3xl font-light tracking-wide transition-colors ${
                          isCurrent
                            ? 'text-[#D5B581]'
                            : 'text-[#E9E4DC] group-hover:text-[#D5B581]'
                        }`}
                      >
                        {loc.name}
                      </h4>
                      <p className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.2em] text-[#D5B581]/80 font-light mt-1">
                        {loc.desc}
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* COLUMN 3: ASIA */}
          <div className="space-y-6">
            <h3 className="text-xs font-sans tracking-[0.25em] text-[#D5B581] uppercase font-semibold pb-2 border-b border-[#D5B581]/20">
              ASIA
            </h3>
            <div className="space-y-6">
              {locations
                .filter((l) => l.region === 'Asia')
                .map((loc) => {
                  const isCurrent = activeLocation === loc.id;
                  return (
                    <div
                      key={loc.id}
                      onClick={() => focusLocation(loc)}
                      onMouseEnter={() => setActiveLocation(loc.id)}
                      className="group cursor-pointer transition-colors"
                    >
                      <h4
                        className={`font-serif text-2xl sm:text-3xl font-light tracking-wide transition-colors ${
                          isCurrent
                            ? 'text-[#D5B581]'
                            : 'text-[#E9E4DC] group-hover:text-[#D5B581]'
                        }`}
                      >
                        {loc.name}
                      </h4>
                      <p className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.2em] text-[#D5B581]/80 font-light mt-1">
                        {loc.desc}
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
