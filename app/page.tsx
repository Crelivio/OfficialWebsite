"use client";
import React, { useState } from "react";
import BrandingSection from "@/app/Section/BrandingSection";
import { Button } from "@/components/ui/button";
import { SubTitle } from "./Section/Sub-tiltle";
import { StrategyCard } from "./Card/Strategy";
import { TechnologyCard } from "./Card/Technology";
import { DesignCard } from "./Card/Design";
import { EmotionCard } from "./Card/Emotion";
import { CoreValueSection } from "./Section/CoreValueSection";
import { FaqSection } from "./Section/FaqSection";
import DiscoverySection from "./Section/DiscoverySection";
import SubscribeSection from "./Section/SubscribeSection";
import { FooterSection } from "./Section/FooterSection";
import { Menu, X } from "lucide-react";

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToFAQ = () => {
    const faqSection = document.getElementById('faq-section');
    if (faqSection) faqSection.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navigateToAbout = () => {
    window.location.href = '/about';
    setIsMenuOpen(false);
  };

  return (
    <div className="w-full min-h-screen bg-neutral-900">
      {/* header and navigation */}
      <header className="fixed top-0 left-0 w-full z-50 bg-neutral-900 shadow-lg">
        <nav className="flex w-full max-w-7xl mx-auto items-center justify-between py-3 sm:py-4 lg:py-6 px-4 sm:px-6 lg:px-20">
          {/* Logo */}
          <div
            className="inline-flex items-center justify-center gap-2 relative flex-[0_0_auto] cursor-pointer hover:opacity-80 transition-opacity duration-200"
            onClick={() => window.location.href = '/'}
            title="Go to Home"
          >
            <img
              className="relative w-[20px] h-[20px] sm:w-[25px] sm:h-[25px] lg:w-[40px] lg:h-[35px]"
              alt="Vector"
              src="/Icon/logo.svg"
            />
            <div className="relative w-fit font-bold text-[#ffffff] text-[16px] sm:text-[18px] lg:text-[24px] tracking-[0] leading-[normal]">
              Crelivio
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:inline-flex items-center justify-center gap-6 lg:gap-12">
            <div className="inline-flex items-start gap-6 lg:gap-8">
              <span
                className="relative w-fit font-semibold text-[#ffffff] text-[14px] lg:text-[18px] tracking-[0] leading-[normal] px-3 py-2 rounded-md cursor-pointer hover:text-blue-400 transition-colors duration-200"
                onClick={navigateToAbout}
              >
                ABOUT
              </span>
              <span
                className="relative w-fit font-semibold text-[#ffffff] text-[14px] lg:text-[18px] tracking-[0] leading-[normal] px-3 py-2 rounded-md cursor-pointer hover:text-blue-400 transition-colors duration-200"
                onClick={scrollToFAQ}
              >
                FAQ
              </span>
            </div>
            <Button className="flex w-[110px] lg:w-[140px] items-center gap-2 px-4 py-2 bg-blue-800 border-2 lg:border-3 border-solid border-[#83aefa] shadow-[6px_6px_0px_#92cdfe] lg:shadow-[8px_8px_0px_#92cdfe] hover:shadow-[4px_4px_0px_#92cdfe] lg:hover:shadow-[6px_6px_0px_#92cdfe] transition-all duration-200 h-auto">
              <div className="font-display font-semibold text-[#ffffff] text-[14px] lg:text-[18px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                Contact Us
              </div>
            </Button>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-400 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-neutral-900 border-t border-neutral-700">
              <button
                onClick={navigateToAbout}
                className="text-white hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200"
              >
                ABOUT
              </button>
              <button
                onClick={scrollToFAQ}
                className="text-white hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200"
              >
                FAQ
              </button>
              <div className="px-3 py-2">
                <Button className="w-full bg-blue-800 border-2 border-solid border-[#83aefa] shadow-[4px_4px_0px_#92cdfe] hover:shadow-[2px_2px_0px_#92cdfe] transition-all duration-200">
                  <div className="font-display font-semibold text-[#ffffff] text-[14px] text-center tracking-[0] leading-[normal]">
                    Contact Us
                  </div>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="relative pt-16 sm:pt-20 lg:pt-24">
        <BrandingSection />
        <div className="mt-16 sm:mt-5 md:mt-6 lg:mt-8">
          <SubTitle />
        </div>

        {/* Four Pillars Section with Join Line */}
        <section className="relative w-full bg-neutral-900 py-6 sm:py-8 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* Mobile Layout - 2x2 Grid */}
            <div className="block md:hidden">
              <div className="text-center mb-6">
                <h2 className="font-display font-semibold text-white text-[18px] sm:text-[20px] mb-2">
                  Four Pillars of Excellence
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-md mx-auto">
                {/* First Row */}
                <div className="flex justify-center">
                  <StrategyCard />
                </div>
                <div className="flex justify-center">
                  <TechnologyCard />
                </div>
                {/* Second Row */}
                <div className="flex justify-center">
                  <DesignCard />
                </div>
                <div className="flex justify-center">
                  <EmotionCard />
                </div>
              </div>
            </div>

            {/* Desktop Layout - Original with Join Line */}
            <div className="hidden md:block">
              <div className="relative flex justify-center items-center min-h-[500px] lg:min-h-[700px]">
                {/* Central join line and text */}
                <div className="relative flex flex-col items-center justify-center">
                  <img
                    className="w-[320px] h-[380px] lg:w-[420px] lg:h-[500px] xl:w-[474px] xl:h-[568px] object-contain"
                    alt="line"
                    src="/Icon/join-line.svg"
                  />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[320px] h-[90px] lg:w-[420px] lg:h-[120px] xl:w-[485px] xl:h-[137px] rounded-[160px/45px] lg:rounded-[210px/60px] xl:rounded-[242.5px/68.5px] border-[4px] lg:border-[5px] xl:border-[6px] border-solid border-[#2c2c2c] rotate-[-2.90deg] bg-blue-500 flex items-center justify-center">
                    <div className="rotate-[-1.23deg] font-display font-semibold text-white text-[18px] lg:text-[26px] xl:text-[30px] text-center tracking-[0] leading-[normal] px-2">
                      Four Pillars of Excellence
                    </div>
                  </div>
                </div>

                {/* Strategy Card - Top Left */}
                <div className="absolute top-[30px] lg:top-[40px] xl:top-[20px] left-[20px] lg:left-[60px] xl:left-[120px]">
                  <StrategyCard />
                </div>

                {/* Technology Card - Top Right */}
                <div className="absolute top-[15px] lg:top-[20px] xl:top-[5px] right-[20px] lg:right-[60px] xl:right-[120px]">
                  <TechnologyCard />
                </div>
                {/* Design Card - Bottom Left */}
                <div className="absolute bottom-[30px] lg:bottom-[40px] left-[20px] lg:left-[60px] xl:left-[120px]">
                  <DesignCard />
                </div>

                {/* Emotion Card - Bottom Right */}
                <div className="absolute bottom-[15px] lg:bottom-[5px] right-[20px] lg:right-[60px] xl:right-[120px]">
                  <EmotionCard />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Core Values Section */}
      <div className="px-4 sm:px-6 lg:px-0">
        <CoreValueSection />

        {/* FAQ Section */}
        <div id="faq-section" className="relative w-full px-4 sm:px-6 lg:px-20 xl:px-[105px] mb-8 sm:mb-12 lg:mb-16">
          <div className="w-full max-w-[95vw] sm:max-w-[600px] lg:max-w-[900px] xl:max-w-[1100px] min-h-[250px] sm:min-h-[300px] lg:min-h-[400px] xl:min-h-[420px] mx-auto bg-[#ffffff] rounded-[15px] sm:rounded-[20px] lg:rounded-[40px] xl:rounded-[50px] border-[2px] sm:border-[3px] lg:border-4 border-solid border-black relative flex flex-col justify-between">
            <img
              className="absolute w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] lg:w-[56px] lg:h-[56px] top-[-15px] sm:top-[-18px] lg:top-[-25px] left-[4px]"
              alt="Frame"
              src="/Image/Clip.png"
            />

            <div className="absolute left-1/2 transform -translate-x-1/2 [font-family:'Bricolage_Grotesque',Helvetica] font-bold text-black text-[24px] sm:text-[32px] lg:text-[54px] text-center tracking-[0] leading-[30px] sm:leading-[54px] lg:leading-[96.9px] whitespace-nowrap">
              FAQs
            </div>

            <img
              className="absolute w-[180px] sm:w-[250px] lg:w-[405px] h-[8px] sm:h-[10px] lg:h-[15px] top-[40px] sm:top-[55px] lg:top-[80px] left-1/2 transform -translate-x-1/2"
              alt="Line"
              src="/Image/blue-line.png"
            />
            <div className="mt-4 sm:mt-6 lg:mt-10 xl:mt-20 mb-4 sm:mb-6">
              <FaqSection />
            </div>
          </div>
        </div>
        {/* Contact Form Section */}
        <div className="px-2 sm:px-4 lg:px-0">
          <DiscoverySection />
        </div>
        {/* Subscribe Section */}
        <div className="px-4 sm:px-6 lg:px-0">
          <SubscribeSection />
        </div>
        {/* footer section */}
        <FooterSection />
      </div>
    </div>
  );
};
export default HomePage;
