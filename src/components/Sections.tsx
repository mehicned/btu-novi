"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Users, Flame, Baby, Shirt } from "lucide-react";

const sections = [
  {
    title: "Gi",
    subtitle: "Brazilian Jiu-Jitsu",
    icon: Shirt,
    description:
      "Treninzi u tradicionalnom gi-ju (kimonu). Učenje pozicija, tranzicija, submisija i gameplana. Za sve nivoe iskustva, od potpunih početnika do takmičara.",
    schedule: "Pon / Uto / Čet | 20:00 - 21:30",
    level: "Svi nivoi",
  },
  {
    title: "No-Gi",
    subtitle: "Submission Grappling",
    icon: Flame,
    description:
      "Grappling bez kimona, sa fokusom na kontrolu, wrestling i submisije. Dinamičan stil koji je ključan za MMA i ADCC takmičenja.",
    schedule: "Sri / Pet | 17:00 - 18:30",
    level: "Svi nivoi",
  },
  {
    title: "BJJ Kids",
    subtitle: "Djeca",
    icon: Baby,
    description:
      "Specijalno dizajniran program za djecu. Razvoj koordinacije, discipline, samopouzdanja i fizičke spremnosti kroz zabavne BJJ vježbe.",
    schedule: "Uto / Čet / Sub | 19:00 - 20:00",
    level: "5-14 godina",
  },
];

export default function Sections() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sections" className="relative py-24 md:py-32">
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
            Programi
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase mb-6">
            Naše <span className="text-gold">sekcije</span>
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto text-lg">
            Odaberite program koji odgovara vašim ciljevima, od potpunih početnika do
            takmičarski nastrojenih boraca.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="group relative bg-navy-card border border-navy-border p-8 md:p-10 rounded-xl hover:border-gold/30 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-gold-muted flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                    <section.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-2xl font-bold uppercase">
                    {section.title}
                  </h3>
                  <span className="text-xs text-white/30 uppercase tracking-widest font-medium">
                    {section.subtitle}
                  </span>
                </div>
                <span className="px-3 py-1.5 bg-gold-muted border border-gold/20 text-xs text-gold font-semibold uppercase tracking-wider rounded-lg">
                  {section.level}
                </span>
              </div>

              <p className="text-white/50 leading-relaxed mb-6">
                {section.description}
              </p>

              <div className="flex items-center gap-2 text-sm text-white/40">
                <Clock className="w-4 h-4 text-gold" />
                {section.schedule}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
