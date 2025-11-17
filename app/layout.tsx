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
  title: {
    default: "Crelivio - Strategic Design, Tech & Emotional Branding",
    template: "%s | Crelivio",
  },
  description: "Transform your brand into timeless stories that spark emotion, build trust, and scale with clarity, creativity, and purpose. Expert branding, design, and digital solutions.",
  keywords: [
    "branding agency",
    "brand strategy",
    "visual identity design",
    "web development",
    "digital marketing",
    "brand communication",
    "creative agency",
    "emotional branding",
    "logo design",
    "brand consulting",
    "UI/UX design",
    "brand positioning",
    "marketing strategy",
    "corporate identity",
    "brand innovation",
  ],
  authors: [{ name: "Crelivio", url: "https://crelivio.com" }],
  creator: "Crelivio",
  publisher: "Crelivio Inc.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://crelivio.com"),
  alternates: {
    canonical: "/",
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
  openGraph: {
    title: "Crelivio - Strategic Design, Tech & Emotional Branding",
    description: "Transform your brand into timeless stories that spark emotion, build trust, and scale with clarity, creativity, and purpose.",
    url: "https://crelivio.com",
    siteName: "Crelivio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/Image/hero.png",
        width: 1200,
        height: 630,
        alt: "Crelivio - Brand Strategy and Design Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crelivio - Strategic Design, Tech & Emotional Branding",
    description: "Transform your brand into timeless stories that spark emotion, build trust, and scale with clarity, creativity, and purpose.",
    creator: "@crelivio",
    images: ["/Image/hero.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
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
  category: "Business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Crelivio",
    "alternateName": "Crelivio Inc.",
    "url": "https://crelivio.com",
    "logo": "https://crelivio.com/Icon/logo.svg",
    "description": "Transform your brand into timeless stories that spark emotion, build trust, and scale with clarity, creativity, and purpose.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://twitter.com/crelivio",
      "https://www.linkedin.com/company/crelivio",
      "https://www.instagram.com/crelivio"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "url": "https://wa.me/message/XOGTHZA3ZIQHI1"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Crelivio",
    "image": "https://crelivio.com/Image/hero.png",
    "url": "https://crelivio.com",
    "telephone": "+1-XXX-XXX-XXXX",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Worldwide"
    },
    "serviceType": [
      "Brand Strategy",
      "Visual Identity Design",
      "Web Development",
      "Digital Marketing",
      "Brand Communication",
      "UI/UX Design"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </head>
      <body className={`${bodyFont.variable} ${displayFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
