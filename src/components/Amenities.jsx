import React from 'react';
import { Rocket, Users, Shield, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Rocket,
    title: 'Zero‑G Lounge',
    desc: 'Sip astro-cocktails while gently drifting in a supervised microgravity atrium.',
  },
  {
    icon: Users,
    title: 'Panoramic Suites',
    desc: 'Floor‑to‑ceiling dome windows with 180° Earthrise views from every bed.',
  },
  {
    icon: Shield,
    title: 'Safety First',
    desc: 'Crewed by veteran astronauts and protected by redundant station systems.',
  },
  {
    icon: Star,
    title: 'Michelin‑grade Dining',
    desc: 'Award‑winning chefs reimagining cuisine for the final frontier.',
  },
];

const Amenities = () => {
  return (
    <section id="amenities" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Amenities that are out of this world</h2>
            <p className="mt-2 max-w-2xl text-white/70">
              Designed for comfort in orbit. Every detail engineered for serenity, safety, and wonder.
            </p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.05)_inset] backdrop-blur-sm"
            >
              <div className="mb-4 inline-flex rounded-xl bg-white/10 p-2 ring-1 ring-white/15">
                <f.icon className="h-5 w-5 text-indigo-300" />
              </div>
              <div className="text-lg font-medium">{f.title}</div>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-indigo-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
