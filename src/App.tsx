import React, { useState, useEffect } from 'react';
import { HomeNavigation, HomeTab } from './components/HomeNavigation';
import schoolCampusImg from './assets/images/hero_smpn6_campus_1793890518670.jpg';
import tutWuriLogo from './assets/images/tutwuri_handayani.png';

export default function App() {
  const [activeTab, setActiveTab] = useState<HomeTab>('home-1');

  // Keyboard shortcut support 1 to 5
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '1') setActiveTab('home-1');
      if (e.key === '2') setActiveTab('home-2');
      if (e.key === '3') setActiveTab('home-3');
      if (e.key === '4') setActiveTab('home-4');
      if (e.key === '5') setActiveTab('home-5');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-blue-900 via-blue-800 to-blue-950 text-white flex flex-col items-center justify-center p-6 select-none relative overflow-hidden">
      {/* Background School Campus Photo with Controlled Transparency */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={schoolCampusImg}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = '/images/hero_smpn6_campus.jpg';
          }}
          alt="Gedung Kampus SMP Negeri 6 Jember"
          className="w-full h-full object-cover object-center opacity-25 filter scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Blue Gradient Scrim for High Contrast & Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-blue-900/75 to-blue-950/90" />
      </div>

      {/* Subtle Ambient Light Glows */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 z-0"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 30%, rgba(59, 130, 246, 0.4) 0%, transparent 65%),
                            radial-gradient(circle at 20% 80%, rgba(30, 58, 138, 0.5) 0%, transparent 50%),
                            radial-gradient(circle at 80% 80%, rgba(37, 99, 235, 0.3) 0%, transparent 50%)`
        }}
      />

      {/* Main Center Stage */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Official Tut Wuri Handayani Logo */}
        <div className="mb-4 sm:mb-6 flex justify-center">
          <img
            src={tutWuriLogo}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = '/assets/aistudio/image_54c9ac49.png';
            }}
            alt="Logo Tut Wuri Handayani"
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain drop-shadow-2xl transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Title: All uppercase with JEMBER in Yellow */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 sm:mb-6 drop-shadow-md">
          <span className="text-white">SMP NEGERI 6 </span>
          <span className="text-yellow-400">JEMBER</span>
        </h1>

        {/* Tagline */}
        <p className="text-sm sm:text-base md:text-lg text-blue-100 font-normal max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed drop-shadow px-2">
          Komitmen kami adalah menghadirkan pendidikan inklusif, penguatan adab Islami & budi pekerti, serta kesiapan teknologi masa depan yang bermakna untuk setiap anak.
        </p>

        {/* The 5 Buttons: only Home 1 to Home 5 */}
        <div className="w-full">
          <HomeNavigation
            activeTab={activeTab}
            onSelectTab={(tab) => setActiveTab(tab)}
          />
        </div>
      </div>
    </main>
  );
}
