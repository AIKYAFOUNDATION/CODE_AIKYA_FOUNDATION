import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
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
  title: {
    default: "AIKYA FOUNDATION",
    template: "%s | AIKYA FOUNDATION",
  },
  description: "Empowering communities with purpose, education, and youth leadership.",
  keywords: [
    "AIKYA Foundation",
    "NGO",
    "Community",
    "Education",
    "Social Impact",
    "Volunteer",
    "Donation",
    "West Bengal",
    "India",
  ],
  authors: [{ name: "AIKYA FOUNDATION" }],
  creator: "AIKYA FOUNDATION",
  applicationName: "AIKYA FOUNDATION",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
        <div className="site-shell">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
