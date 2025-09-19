import type { Metadata } from "next";
import { Bricolage_Grotesque, Montserrat } from "next/font/google";
import "./globals.css";

// Global fonts
const displayFont = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
});

const bodyFont = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Crelivio - Strategic Design, Tech & Emotional Branding",
  description: "Transform your brand into timeless stories that spark emotion, build trust, and scale with clarity, creativity, and purpose. Expert branding, design, and digital solutions.",
  keywords: "branding, design, digital marketing, brand strategy, visual identity, web development, brand communication, creative agency",
  authors: [{ name: "Crelivio" }],
  creator: "Crelivio",
  publisher: "Crelivio Inc.",
  robots: "index, follow",
  openGraph: {
    title: "Crelivio - Strategic Design, Tech & Emotional Branding",
    description: "Transform your brand into timeless stories that spark emotion, build trust, and scale with clarity, creativity, and purpose.",
    url: "https://crelivio.com",
    siteName: "Crelivio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crelivio - Strategic Design, Tech & Emotional Branding",
    description: "Transform your brand into timeless stories that spark emotion, build trust, and scale with clarity, creativity, and purpose.",
    creator: "@crelivio",
  },
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: [
      { url: "/Icon/logo.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/Icon/logo.svg",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${displayFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
