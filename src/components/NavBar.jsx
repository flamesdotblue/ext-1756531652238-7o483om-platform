import React from 'react';
import { Rocket } from 'lucide-react';

const NavBar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="group inline-flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-indigo-600/20 text-indigo-300 ring-1 ring-inset ring-indigo-400/40 transition-colors group-hover:bg-indigo-600/30">
            <Rocket className="h-5 w-5" />
          </span>
          <div>
            <div className="text-lg font-semibold tracking-tight">Spacy</div>
            <div className="text-xs text-white/60">Orbit. Unwind. Repeat.</div>
          </div>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
          <a href="#experiences" className="hover:text-white">Experiences</a>
          <a href="#amenities" className="hover:text-white">Amenities</a>
          <a href="#booking" className="rounded-full bg-white/10 px-4 py-2 font-medium text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.15)] hover:bg-white/20">Book now</a>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
