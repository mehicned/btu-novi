import { getAllPosts } from "@/lib/blog";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Članci o brazilskom džiju-džicuu, borilačkim vještinama, treninzima za djecu i zdravom životnom stilu. Saznajte više o BJJ-u sa BTU timom.",
  alternates: {
    canonical: "https://bjj.ba/blog",
  },
  openGraph: {
    title: "Blog | Bosnae Team United BJJ",
    description:
      "Članci o brazilskom džiju-džicuu, borilačkim vještinama, treninzima za djecu i zdravom životnom stilu.",
    url: "https://bjj.ba/blog",
    siteName: "Bosnae Team United BJJ",
    locale: "bs_BA",
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="bg-navy min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="text-center mb-20">
          <span className="text-gold text-sm font-semibold uppercase tracking-[0.3em] mb-4 block">
            Blog
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase mb-6">
            Najnovije <span className="text-gold">novosti</span>
          </h1>
          <p className="text-white/40 max-w-2xl mx-auto text-lg">
            Članci, savjeti i novosti iz svijeta brazilskog džiju-džicua.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block"
            >
              <div className="bg-navy-card border border-navy-border overflow-hidden rounded-xl hover:border-gold/30 transition-all duration-500">
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
                <div className="p-6">
                  <time
                    dateTime={post.date}
                    className="text-xs text-white/30 uppercase tracking-wider mb-2 block"
                  >
                    {new Date(post.date).toLocaleDateString("bs-BA", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <h2 className="text-lg font-bold uppercase mb-3 group-hover:text-gold transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
