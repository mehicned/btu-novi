"use client";

import Image from "next/image";
import { Instagram, Facebook, Mail, Phone, MapPin, ArrowUp } from "lucide-react";

const footerLinks = [
  {
    title: "Navigacija",
    links: [
      { label: "Početna", href: "#hero" },
      { label: "O nama", href: "#about" },
      { label: "Sekcije", href: "#sections" },
      { label: "Treneri", href: "#coaches" },
      { label: "Raspored", href: "#schedule" },
    ],
  },
  {
    title: "Sekcije",
    links: [
      { label: "Gi", href: "#sections" },
      { label: "No-Gi", href: "#sections" },
      { label: "BJJ Kids", href: "#sections" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-navy border-t border-navy-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/images/favicon.png"
                alt="BTU"
                width={36}
                height={36}
              />
              <div className="font-bold text-lg uppercase">
                BTU BJJ
              </div>
            </div>
            <p className="text-white/35 text-sm leading-relaxed mb-6">
              Brazilian Jiu-Jitsu klub u Sarajevu. Od 2016. godine gradimo zajednicu
              boraca svih uzrasta.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: "https://www.instagram.com/bosnaeteamunitedbjj/" },
                { icon: Facebook, href: "https://www.facebook.com/bjj.ba/" },
              ].map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-navy-card border border-navy-border rounded-lg flex items-center justify-center hover:border-gold/30 hover:text-gold transition-all text-white/40"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-bold uppercase tracking-wider text-sm mb-6 text-gold">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/35 hover:text-gold transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="font-bold uppercase tracking-wider text-sm mb-6 text-gold">
              Kontakt
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span className="text-sm text-white/35">
                  Hasana Brkića 30, Sarajevo 71000
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a
                  href="tel:+38761749909"
                  className="text-sm text-white/35 hover:text-gold transition-colors"
                >
                  +387 61 749 909
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a
                  href="mailto:info@bjj.ba"
                  className="text-sm text-white/35 hover:text-gold transition-colors"
                >
                  info@bjj.ba
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-navy-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            &copy; {new Date().getFullYear()} Bosnae Team United. Sva prava zadržana.
          </p>
          <a
            href="#hero"
            className="flex items-center gap-2 text-xs text-white/25 hover:text-gold transition-colors"
          >
            Nazad na vrh
            <ArrowUp className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
