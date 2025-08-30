import React from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import Amenities from './components/Amenities';
import BookingSection from './components/BookingSection';

function App() {
  return (
    <div className="min-h-screen bg-[#050914] text-white selection:bg-indigo-500/30 selection:text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(120,119,198,0.25)_0%,rgba(0,0,0,0)_60%),radial-gradient(60%_40%_at_80%_20%,rgba(56,189,248,0.15)_0%,rgba(0,0,0,0)_60%),radial-gradient(50%_30%_at_20%_10%,rgba(192,132,252,0.15)_0%,rgba(0,0,0,0)_55%)]" />
      <NavBar />
      <main>
        <HeroSection />
        <Amenities />
        <BookingSection />
      </main>
      <footer className="border-t border-white/10 py-10 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Spacy Orbital Hotels. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
