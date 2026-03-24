"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface PostPreview {
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  tag: string;
  date: string;
}

export default function News({ posts }: { posts: PostPreview[] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="news" className="relative py-24 md:py-32">
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
            Blog
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase mb-6">
            Najnovije <span className="text-gold">novosti</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
            >
              <Link href={`/blog/${post.slug}`} className="group block h-full">
                <div className="h-full flex flex-col bg-navy-card border border-navy-border overflow-hidden rounded-xl hover:border-gold/30 transition-all duration-500">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 bg-gold text-navy text-xs font-bold uppercase tracking-wider rounded-lg">
                        {post.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-bold uppercase mb-3 group-hover:text-gold transition-colors flex items-start gap-2">
                      {post.title}
                      <ArrowUpRight className="w-5 h-5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity text-gold" />
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed mt-auto">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white/80 font-semibold text-sm uppercase tracking-wider rounded-lg hover:border-gold/50 hover:text-gold transition-all duration-300"
          >
            Svi članci
          </Link>
        </div>
      </div>
    </section>
  );
}
