import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { personalInfo } from "@/lib/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yourportfolio.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vinith Gomez",
    template: "%s | Vinith Gomez",
  },
  description: `${personalInfo.bio} Based in ${personalInfo.location}.`,
  keywords: [
    personalInfo.fullName,
    personalInfo.title,
    "Full-Stack Engineer",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Web Developer",
    "Portfolio",
  ],
  authors: [{ name: personalInfo.fullName, url: siteUrl }],
  creator: personalInfo.fullName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: `${personalInfo.fullName} — ${personalInfo.title}`,
    description: personalInfo.bio,
    siteName: personalInfo.fullName,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${personalInfo.fullName} — ${personalInfo.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.fullName} — ${personalInfo.title}`,
    description: personalInfo.bio,
    images: ["/og-image.png"],
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personalInfo.fullName,
  url: siteUrl,
  email: personalInfo.email,
  jobTitle: personalInfo.title,
  description: personalInfo.bio,
  sameAs: [personalInfo.github, personalInfo.linkedin, personalInfo.twitter],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
