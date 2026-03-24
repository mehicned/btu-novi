import { getPostBySlug, getPostSlugs } from "@/lib/blog";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import "./blog-post.css";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    alternates: {
      canonical: `https://bjj.ba/blog/${post.slug}`,
    },
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      url: `https://bjj.ba/blog/${post.slug}`,
      siteName: "Bosnae Team United BJJ",
      images: [
        {
          url: post.image,
          alt: post.title,
        },
      ],
      type: "article",
      publishedTime: post.date,
      locale: "bs_BA",
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.seoDescription || post.excerpt,
    image: `https://bjj.ba${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    url: `https://bjj.ba/blog/${post.slug}`,
    inLanguage: "bs",
    author: {
      "@type": "Organization",
      name: "Bosnae Team United BJJ",
      url: "https://bjj.ba",
    },
    publisher: {
      "@type": "Organization",
      name: "Bosnae Team United BJJ",
      logo: {
        "@type": "ImageObject",
        url: "https://bjj.ba/images/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://bjj.ba/blog/${post.slug}`,
    },
  };

  return (
    <main className="bg-navy min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-gold transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Nazad na blog
        </Link>

        <div className="mb-8">
          <span className="px-3 py-1.5 bg-gold text-navy text-xs font-bold uppercase tracking-wider rounded-lg">
            {post.tag}
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase leading-tight mb-6">
          {post.title}
        </h1>

        <time
          dateTime={post.date}
          className="text-sm text-white/30 uppercase tracking-wider block mb-10"
        >
          {new Date(post.date).toLocaleDateString("bs-BA", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>

        <div className="relative aspect-[16/9] overflow-hidden rounded-xl mb-12">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <article
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-16 pt-8 border-t border-navy-border">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-gold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Nazad na blog
          </Link>
        </div>
      </div>
    </main>
  );
}
