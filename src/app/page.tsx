import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Sections from "@/components/Sections";
import Coaches from "@/components/Coaches";
import Schedule from "@/components/Schedule";
import News from "@/components/News";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getAllPosts } from "@/lib/blog";

const localBusinessLd = {
  "@context": "https://schema.org",
  "@type": ["SportsClub", "LocalBusiness"],
  "@id": "https://bjj.ba/#organization",
  name: "Bosnae Team United BJJ",
  alternateName: ["BTU BJJ", "Bosnae Team United", "BTU Sarajevo"],
  description:
    "Brazilian Jiu-Jitsu klub u Sarajevu. Gi, No-Gi i Kids treninzi za sve uzraste i nivoe iskustva. Lokacija: Shopping Centar Grbavica, Hasana Brkića 30.",
  url: "https://bjj.ba",
  logo: {
    "@type": "ImageObject",
    url: "https://bjj.ba/images/logo.png",
    width: 512,
    height: 512,
  },
  image: "https://bjj.ba/images/logo.png",
  sport: "Brazilian Jiu-Jitsu",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Hasana Brkića 30",
    addressLocality: "Sarajevo",
    addressRegion: "Kanton Sarajevo",
    postalCode: "71000",
    addressCountry: "BA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.8486,
    longitude: 18.3858,
  },
  hasMap: "https://maps.google.com/maps?q=Bosnae+Team+United+BJJ,+Hasana+Brkica+30,+Sarajevo",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday"],
      opens: "20:00",
      closes: "21:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Thursday"],
      opens: "19:00",
      closes: "21:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Wednesday", "Friday"],
      opens: "17:00",
      closes: "18:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "17:00",
      closes: "20:00",
    },
  ],
  sameAs: ["https://www.instagram.com/bosnaeteamunitedbjj/"],
  priceRange: "$$",
  areaServed: [
    { "@type": "City", name: "Sarajevo" },
    { "@type": "AdministrativeArea", name: "Kanton Sarajevo" },
  ],
  knowsLanguage: ["bs", "hr", "sr", "en"],
  foundingLocation: {
    "@type": "Place",
    name: "Sarajevo, Bosna i Hercegovina",
  },
  keywords:
    "BJJ Sarajevo, Brazilian Jiu-Jitsu Sarajevo, borilačke vještine Sarajevo, grappling, No-Gi, BJJ za djecu",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "BJJ programi",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Gi Brazilian Jiu-Jitsu trening",
          description:
            "Tradicionalni BJJ trening u kimonu. Ponedjeljak, utorak, četvrtak 20:00-21:30.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "No-Gi Brazilian Jiu-Jitsu trening",
          description:
            "BJJ trening bez kimona. Srijeda, petak 17:00-18:30, subota 17:00-18:30.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "BJJ Kids trening",
          description:
            "BJJ program za djecu uzrasta 5-14 godina. Utorak, četvrtak, subota 19:00-20:00.",
        },
      },
    ],
  },
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://bjj.ba/#website",
  name: "Bosnae Team United BJJ",
  url: "https://bjj.ba",
  publisher: { "@id": "https://bjj.ba/#organization" },
  inLanguage: "bs",
};

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Sections />
        <Coaches />
        <Schedule />
        <News posts={posts} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
