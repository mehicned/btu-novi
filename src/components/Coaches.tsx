"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const coaches = [
  {
    name: "Emir Alagić",
    rank: "Crni pojas",
    image: "/images/coaches/emir-alagic.png",
    bio: "Glavni trener i osnivač BTU kluba. Dugogodišnje iskustvo u BJJ-u i predanost razvoju mladih sportista.",
  },
  {
    name: "Amir Mahmutović",
    rank: "Crni pojas",
    image: "/images/coaches/amir-mahmutovic.png",
    bio: "Iskusni instruktor i crni pojas u judu. Široko znanje borilačkih vještina i posvećenost razvoju svakog člana.",
  },
  {
    name: "Aldin Kršo",
    rank: "Ljubičasti pojas",
    image: "/images/coaches/krso.png",
    bio: "Mladi i talentovani trener sa fokusom na no-gi trening i treninge sa djecom.",
  },
  {
    name: "Jasmin Mušić",
    rank: "Ljubičasti pojas",
    image: "/images/coaches/sovo.png",
    bio: "Posvećen no-gi treningu i razvoju submission grappling vještina kod svih članova kluba.",
  },
];

export default function Coaches() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="coaches" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-navy" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-gold text-sm font-semibold uppercase tracking-[0.3em] mb-4 block">
            Tim
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase mb-6">
            Naši <span className="text-gold">treneri</span>
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto text-lg">
            Iskusan trenerski tim posvećen razvoju svakog člana, od prvog treninga
            do crnog pojasa.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coaches.map((coach, i) => (
            <motion.div
              key={coach.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="group"
            >
              <div className="relative h-full bg-navy-card border border-navy-border overflow-hidden rounded-xl hover:border-gold/30 transition-all duration-500 flex flex-col">
                <div className="relative aspect-[3/4] overflow-hidden shrink-0">
                  <Image
                    src={coach.image}
                    alt={coach.name}
                    fill
                    className={`object-cover group-hover:scale-105 transition-transform duration-700 ${coach.image.includes("krso") ? "object-center" : "object-top"}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-card via-transparent to-transparent" />
                </div>

                <div className="relative p-6 -mt-20 flex-1">
                  <div className="w-10 h-1 bg-gold rounded-full mb-4" />
                  <h3 className="text-xl lg:text-2xl font-bold uppercase mb-1 whitespace-nowrap">
                    {coach.name}
                  </h3>
                  <p className="text-gold text-sm font-semibold mb-4">
                    {coach.rank}
                  </p>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {coach.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
