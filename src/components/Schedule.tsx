"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Calendar } from "lucide-react";

const schedule = [
  { day: "Ponedjeljak", sessions: [{ type: "Gi", time: "20:00 - 21:30" }] },
  {
    day: "Utorak",
    sessions: [
      { type: "Kids", time: "19:00 - 20:00" },
      { type: "Gi", time: "20:00 - 21:30" },
    ],
  },
  { day: "Srijeda", sessions: [{ type: "No-Gi", time: "17:00 - 18:30" }] },
  {
    day: "Četvrtak",
    sessions: [
      { type: "Kids", time: "19:00 - 20:00" },
      { type: "Gi", time: "20:00 - 21:30" },
    ],
  },
  { day: "Petak", sessions: [{ type: "No-Gi", time: "17:00 - 18:30" }] },
  {
    day: "Subota",
    sessions: [
      { type: "Gi / No-Gi", time: "17:00 - 18:30" },
      { type: "Kids", time: "19:00 - 20:00" },
    ],
  },
];

export default function Schedule() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="schedule" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-navy-light" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-gold text-sm font-semibold uppercase tracking-[0.3em] mb-4 block">
            Raspored
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase mb-6">
            Raspored <span className="text-gold">treninga</span>
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto text-lg">
            Pronađite termin koji vam odgovara. Za dodatne informacije o rasporedu,
            slobodno nas kontaktirajte.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          <div className="space-y-2">
            {schedule.map((row) => (
              <div
                key={row.day}
                className="flex items-center justify-between bg-navy-card border border-navy-border rounded-xl px-6 py-4"
              >
                <span className="text-sm font-bold uppercase tracking-wide text-white/90 w-28 shrink-0">
                  {row.day}
                </span>
                <div className="flex flex-wrap justify-end gap-3">
                  {row.sessions.map((s) => (
                    <div key={s.type + s.time} className="flex items-center gap-2">
                      <span className="text-xs font-semibold uppercase text-gold">
                        {s.type}
                      </span>
                      <span className="text-sm text-white/50">{s.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {[
              { icon: MapPin, text: "Shopping Centar Grbavica, Hasana Brkića 30" },
              { icon: Calendar, text: "Ponedjeljak - Subota" },
              { icon: Clock, text: "17:00 - 21:30" },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-3 bg-navy-card border border-navy-border px-5 py-4 rounded-xl"
              >
                <div className="w-9 h-9 rounded-lg bg-gold-muted flex items-center justify-center shrink-0">
                  <item.icon className="w-4 h-4 text-gold" />
                </div>
                <span className="text-sm text-white/60">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
