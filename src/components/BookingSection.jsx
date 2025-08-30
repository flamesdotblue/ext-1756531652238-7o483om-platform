import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const BookingSection = () => {
  const [form, setForm] = useState({ checkIn: '', checkOut: '', guests: 2 });

  return (
    <section id="booking" className="relative">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-4">
        <div id="experiences" className="mb-8 text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Begin your orbit</h2>
          <p className="mt-2 text-white/70">Reserve your window to Earth. Limited launch windows available.</p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-xl backdrop-blur"
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const summary = `Orbit reserved!\nCheck‑in: ${form.checkIn}\nCheck‑out: ${form.checkOut}\nGuests: ${form.guests}`;
              alert(summary);
            }}
            className="grid gap-4 sm:grid-cols-3"
          >
            <label className="flex flex-col gap-2">
              <span className="text-sm text-white/70">Check‑in</span>
              <div className="relative">
                <input
                  type="date"
                  required
                  value={form.checkIn}
                  onChange={(e) => setForm({ ...form, checkIn: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 pr-10 text-white outline-none ring-0 placeholder:text-white/40 focus:border-indigo-400/50"
                />
                <Calendar className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
              </div>
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-sm text-white/70">Check‑out</span>
              <div className="relative">
                <input
                  type="date"
                  required
                  value={form.checkOut}
                  onChange={(e) => setForm({ ...form, checkOut: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 pr-10 text-white outline-none ring-0 placeholder:text-white/40 focus:border-indigo-400/50"
                />
                <Calendar className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
              </div>
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-sm text-white/70">Guests</span>
              <select
                value={form.guests}
                onChange={(e) => setForm({ ...form, guests: Number(e.target.value) })}
                className="w-full appearance-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-indigo-400/50"
              >
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n} className="bg-[#050914]">
                    {n}
                  </option>
                ))}
              </select>
            </label>
            <div className="sm:col-span-3">
              <button
                type="submit"
                className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-indigo-500 px-6 py-3 font-medium text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-400"
              >
                Reserve now
              </button>
            </div>
          </form>
          <div className="mt-4 text-center text-xs text-white/60">
            By booking you agree to our orbital safety briefing and launch schedule terms.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingSection;
