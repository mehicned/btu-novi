"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Instagram, Facebook, Send } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-24 md:py-32">
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
            Kontakt
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase mb-6">
            Pridruži <span className="text-gold">nam se</span>
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto text-lg">
            Kontaktirajte nas za više informacija o treninzima. Prvi trening je besplatan!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-4 mb-10">
              {[
                {
                  icon: MapPin,
                  label: "Adresa",
                  value: "Shopping Centar Grbavica\nHasana Brkića 30\nSarajevo 71000, BiH",
                },
                {
                  icon: Phone,
                  label: "Telefon",
                  value: "+387 61 749 909",
                  href: "tel:+38761749909",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "info@bjj.ba",
                  href: "mailto:info@bjj.ba",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 p-5 bg-navy-card border border-navy-border rounded-xl hover:border-gold/20 transition-colors"
                >
                  <div className="w-10 h-10 bg-gold-muted flex items-center justify-center shrink-0 rounded-lg">
                    <item.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-sm text-white/30 uppercase tracking-wider mb-1 font-medium">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-white hover:text-gold transition-colors whitespace-pre-line"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-white whitespace-pre-line">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="flex gap-4">
              {[
                { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/bosnaeteamunitedbjj/" },
                { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/bjj.ba/" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 bg-navy-card border border-navy-border rounded-xl hover:border-gold/30 hover:text-gold transition-all text-sm text-white/60 font-medium"
                >
                  <social.icon className="w-4 h-4" />
                  {social.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form
              onSubmit={(e) => e.preventDefault()}
              className="bg-navy-card border border-navy-border p-8 md:p-10 rounded-xl"
            >
              <div className="space-y-5">
                <div>
                  <label className="block text-sm text-white/40 uppercase tracking-wider mb-2 font-medium">
                    Ime i prezime
                  </label>
                  <input
                    type="text"
                    className="w-full bg-navy border border-navy-border rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:border-gold/50 focus:outline-none transition-colors"
                    placeholder="Vaše ime"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/40 uppercase tracking-wider mb-2 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-navy border border-navy-border rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:border-gold/50 focus:outline-none transition-colors"
                    placeholder="vas@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/40 uppercase tracking-wider mb-2 font-medium">
                    Sekcija
                  </label>
                  <select className="w-full bg-navy border border-navy-border rounded-lg px-4 py-3 text-white/60 focus:border-gold/50 focus:outline-none transition-colors">
                    <option value="">Odaberite sekciju</option>
                    <option value="gi">Gi</option>
                    <option value="no-gi">No-Gi</option>
                    <option value="bjj-kids">BJJ Kids</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-white/40 uppercase tracking-wider mb-2 font-medium">
                    Poruka
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-navy border border-navy-border rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:border-gold/50 focus:outline-none transition-colors resize-none"
                    placeholder="Vaša poruka..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gold text-navy font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-gold-light transition-all duration-300 hover:shadow-[0_4px_30px_rgba(201,168,76,0.3)]"
                >
                  <Send className="w-4 h-4" />
                  Pošalji poruku
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <div className="overflow-hidden border border-navy-border rounded-xl">
            <iframe
              src="https://maps.google.com/maps?q=Bosnae+Team+United+BJJ,+Hasana+Brkica+30,+Sarajevo&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="400"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) grayscale(30%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BTU lokacija"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
