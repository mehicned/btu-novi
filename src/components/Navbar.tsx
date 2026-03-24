"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Početna", href: "/#hero" },
  { label: "O nama", href: "/#about" },
  {
    label: "Sekcije",
    href: "/#sections",
    children: [
      { label: "Gi", href: "/#sections" },
      { label: "No-Gi", href: "/#sections" },
      { label: "BJJ Kids", href: "/#sections" },
    ],
  },
  { label: "Treneri", href: "/#coaches" },
  { label: "Raspored", href: "/#schedule" },
  { label: "Blog", href: "/blog" },
  { label: "Kontakt", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md border-b border-gold/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/images/favicon.png"
            alt="BTU Logo"
            width={40}
            height={40}
            className="transition-transform group-hover:scale-105 duration-300"
          />
          <span className="text-lg font-bold uppercase tracking-wider text-white">
            Bosnae Team <span className="text-gold">United</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/70 hover:text-gold transition-colors uppercase tracking-wider">
                  {link.label}
                  <ChevronDown className="w-3 h-3" />
                </button>
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="absolute top-full left-0 mt-1 bg-navy-card/95 backdrop-blur-md border border-navy-border rounded-lg min-w-[180px] overflow-hidden shadow-xl shadow-black/20"
                    >
                      {link.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block px-5 py-3 text-sm text-white/60 hover:text-gold hover:bg-gold-muted transition-colors"
                        >
                          {child.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-white/70 hover:text-gold transition-colors uppercase tracking-wider"
              >
                {link.label}
              </a>
            )
          )}
          <a
            href="/#contact"
            className="ml-4 px-6 py-2.5 bg-gold text-navy text-sm font-bold uppercase tracking-wider rounded-lg hover:bg-gold-light transition-all duration-300 hover:shadow-[0_4px_20px_rgba(201,168,76,0.3)]"
          >
            Pridruži se
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden fixed inset-0 top-[60px] bg-navy/98 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-semibold uppercase tracking-widest text-white/70 hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 px-8 py-3 bg-gold text-navy font-bold uppercase tracking-wider rounded-lg"
            >
              Pridruži se
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
