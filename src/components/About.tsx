"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, Trophy, Shield } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Misija",
    text: "Uključiti što više mladih u sportske aktivnosti za zdravije i bolje djetinjstvo, daleko od problema savremenog društva.",
  },
  {
    icon: Users,
    title: "Zajednica",
    text: "Gradimo snažnu zajednicu boraca svih uzrasta, gdje se poštuju disciplina, upornost i međusobno poštovanje.",
  },
  {
    icon: Trophy,
    title: "Takmičenja",
    text: "Organizujemo i učestvujemo na takmičenjima, turnirima i kampovima za razvoj sportskog duha.",
  },
  {
    icon: Shield,
    title: "Vizija",
    text: "Uzdizanje i afirmacija sporta kao neodvojivog dijela života i razvoja mladih.",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-navy" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-gold text-sm font-semibold uppercase tracking-[0.3em] mb-4 block">
            O nama
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase">
            Ko smo <span className="text-gold">mi</span>
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-lg text-white/60 leading-relaxed mb-6">
              <span className="text-gold font-semibold">Bosnae Team United</span> je
              osnovan u januaru 2016. godine sa ciljem uvođenja novih sportskih vještina i
              uključivanja što većeg broja mladih u sportske aktivnosti.
            </p>
            <p className="text-lg text-white/60 leading-relaxed mb-6">
              Naš klub promoviše borilačke vještine: MMA, BJJ, Judo, Grappling i
              Wrestling, te zdrav životni stil kroz atletsko bavljenje sportom.
            </p>
            <p className="text-lg text-white/60 leading-relaxed mb-8">
              Smanjujemo štetne društvene uticaje na mlade organizovanjem takmičenja,
              turnira, kampova i pružanjem sportskih usluga klubovima i pojedincima.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex -space-x-3">
                {["/images/coaches/emir-alagic.png", "/images/coaches/amir-mahmutovic.png", "/images/coaches/aldin-krso.png"].map((src, i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border-2 border-navy bg-navy-card overflow-hidden"
                  >
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <div className="text-white font-semibold">3 iskusna trenera</div>
                <div className="text-sm text-white/40">Crni i ljubičasti pojasevi</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {values.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="bg-navy-card border border-navy-border p-6 rounded-xl hover:border-gold/30 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold-muted flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                    <item.icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="text-lg font-bold uppercase mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/40 leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
