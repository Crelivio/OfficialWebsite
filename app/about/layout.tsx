import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Our Story & Mission",
  description: "Learn about Crelivio's journey, our mission to transform brands through innovative design and strategic thinking, and the values that drive us forward.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Crelivio - Brand Strategy & Design Experts",
    description: "Discover how Crelivio helps ambitious brands create emotionally resonant design experiences through strategy, technology, design, and emotion.",
    url: "https://crelivio.com/about",
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

