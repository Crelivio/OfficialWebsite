"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { BrandSection } from "./sections/brand";
import DiscoverySection from "../Section/DiscoverySection";
import { FooterSection } from "../Section/FooterSection";


const AboutPage = () => {
  return (
    <>
      <div>
        {/* Main content of the About page goes here */}
        <BrandSection />
        <DiscoverySection />
        <FooterSection />
      </div>
    </>
  );
};

export default AboutPage;
