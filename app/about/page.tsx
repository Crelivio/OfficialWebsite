import React from "react";
import { BrandSection } from "./sections/brand";
import DiscoverySection from "../Section/DiscoverySection";
import { FooterSection } from "../Section/FooterSection";

export default function AboutPage() {
  return (
    <div>
      <BrandSection />
      <DiscoverySection />
      <FooterSection />
    </div>
  );
}
