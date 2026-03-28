import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bjj.ba"),
  title: {
    default: "Bosnae Team United | BJJ Sarajevo",
    template: "%s | Bosnae Team United",
  },
  description:
    "Brazilian Jiu-Jitsu klub u Sarajevu. Gi, No-Gi i Kids treninzi. Pridruži se BTU porodici na adresi Hasana Brkića 30, Sarajevo.",
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  keywords: [
    "BJJ Sarajevo",
    "Brazilian Jiu-Jitsu Sarajevo",
    "Bosnae Team United",
    "BJJ klub Sarajevo",
    "borilačke vještine Sarajevo",
    "džiju-džicu",
    "grappling Sarajevo",
    "BJJ za djecu Sarajevo",
    "No-Gi Sarajevo",
    "BJJ trening",
  ],
  alternates: {
    canonical: "https://bjj.ba",
  },
  openGraph: {
    title: "Bosnae Team United | BJJ Sarajevo",
    description:
      "Brazilian Jiu-Jitsu klub u Sarajevu. Gi, No-Gi i Kids treninzi. Pridruži se BTU porodici!",
    url: "https://bjj.ba",
    siteName: "Bosnae Team United BJJ",
    locale: "bs_BA",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 512,
        height: 512,
        alt: "Bosnae Team United BJJ Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bosnae Team United | BJJ Sarajevo",
    description:
      "Brazilian Jiu-Jitsu klub u Sarajevu. Gi, No-Gi i Kids treninzi.",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bs" className="scroll-smooth">
      <body
        className={`${jakarta.variable} antialiased bg-navy text-white`}
      >
        {children}
      </body>
    </html>
  );
}
