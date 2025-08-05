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
  title: "Bharat Maliya - Software Developer",
  description: "Full-stack software developer with 3 years of experience in Python, TypeScript, Django, Next.js, and React.js. Specialized in building modern web applications.",
  keywords: ["Software Developer", "Full Stack", "Python", "TypeScript", "Django", "Next.js", "React.js", "Web Development"],
  authors: [{ name: "Bharat Maliya" }],
  creator: "Bharat Maliya",
  openGraph: {
    title: "Bharat Maliya - Software Developer",
    description: "Full-stack software developer with 3 years of experience in Python, TypeScript, Django, Next.js, and React.js.",
    type: "website",
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
