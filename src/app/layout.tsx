import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bharat Maliya - Software Engineer | Full-Stack Developer",
  description: "Innovative software developer with 4+ years of experience. Built systems used by 1+ billion viewers in IPL broadcasts, UIDAI government platforms, and AI-powered travel applications.",
  keywords: ["Software Engineer", "Full-Stack Developer", "React", "Next.js", "Python", "Django", "TypeScript", "IPL", "Cricket Technology", "AI Applications"],
  authors: [{ name: "Bharat Maliya" }],
  creator: "Bharat Maliya",
  publisher: "Bharat Maliya",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://bharatmaliya.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Bharat Maliya - Software Engineer",
    description: "Engineering Scalable Systems for a Billion+ Viewers. Full-stack developer specializing in high-stakes broadcast technology and AI applications.",
    url: 'https://bharatmaliya.dev',
    siteName: 'Bharat Maliya Portfolio',
    images: [
      {
        url: '/images/me/imageone.jpeg',
        width: 1200,
        height: 630,
        alt: 'Bharat Maliya - Software Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bharat Maliya - Software Engineer',
    description: 'Engineering Scalable Systems for a Billion+ Viewers',
    images: ['/images/me/imageone.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
