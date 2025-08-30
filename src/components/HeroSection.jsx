import React from 'react';
import { motion } from 'framer-motion';
import { Star, Sparkles } from 'lucide-react';

const Starfield = () => {
  const stars = Array.from({ length: 80 });
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-0.5 w-0.5 rounded-full bg-white/70"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6 + (i % 5),
            repeat: Infinity,
            delay: i * 0.08,
            ease: 'easeInOut',
          }}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
};

const HeroSection = () => {
  return (
    <section id="home" className="relative isolate">
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_10%,rgba(79,70,229,0.15)_0%,transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-20 sm:pt-28">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 sm:p-12">
          <Starfield />
          <div className="relative z-10 grid items-center gap-10 sm:grid-cols-2">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1 text-xs text-indigo-200"
              >
                <Sparkles className="h-4 w-4" /> Now boarding 2026 season
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl"
              >
                Sleep among the stars at Spacy
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-4 max-w-xl text-white/70"
              >
                The galaxy’s premier orbital hotel. Panoramic Earth views, zero‑gravity lounges, and cuisine that defies gravity.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <a href="#booking" className="inline-flex items-center justify-center rounded-xl bg-indigo-500 px-6 py-3 font-medium text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-400">
                  Reserve your orbit
                </a>
                <a href="#amenities" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white/90 transition hover:bg-white/10">
                  Explore amenities
                </a>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10">
                <img
                  alt="Spacy orbital hotel with Earth view"
                  className="h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1600&auto=format&fit=crop"
                />
              </div>
              <div className="pointer-events-none absolute -bottom-4 -right-4 hidden w-28 rotate-6 items-center gap-1 rounded-xl bg-white/10 px-3 py-2 text-xs text-white/80 ring-1 ring-white/15 backdrop-blur md:flex">
                <Star className="h-4 w-4 text-yellow-300" /> 5.0 guest rating
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
