"use client";
import React from "react";
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

const HomePage = () => {
  return (
    <div className="w-full min-h-screen bg-neutral-900">
      {/* header and navigation */}
      <header className="fixed top-0 left-0 w-full z-50 bg-neutral-900 shadow-lg">
        <nav className="flex w-full max-w-7xl mx-auto items-center justify-between py-4 sm:py-6 px-4 sm:px-8 lg:px-20">
          <div
            className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto] cursor-pointer hover:opacity-80 transition-opacity duration-200"
            onClick={() => window.location.href = '/'}
            title="Go to Home"
          >
            <img
              className="relative w-[25px] h-[25px] sm:w-[30px] sm:h-[30px] lg:w-[50px] lg:h-[45px]"
              alt="Vector"
              src="/Icon/logo.svg"
            />
            <div className="relative w-fit font-bold text-[#ffffff] text-[18px] sm:text-[20px] lg:text-[25px] tracking-[0] leading-[normal]">
              Crelivio
            </div>
          </div>
          <div className="inline-flex items-center justify-center gap-3 sm:gap-6 lg:gap-12 relative flex-[0_0_auto]">
            <div className="inline-flex items-start gap-[15px] sm:gap-[25px] lg:gap-[35px] relative flex-[0_0_auto]">
              <span
                className="relative w-fit mt-[-1.00px] font-semibold text-[#ffffff] text-[14px] sm:text-[16px] lg:text-[20px] tracking-[0] leading-[normal] px-2 py-1 rounded-md cursor-pointer hover:text-blue-500 transition-colors duration-200"
                onClick={() => window.location.href = '/about'}
              >
                ABOUT
              </span>
              <span
                className="relative w-fit mt-[-1.00px] font-semibold text-[#ffffff] text-[14px] sm:text-[16px] lg:text-[20px] tracking-[0] leading-[normal] px-2 py-1 rounded-md cursor-pointer hover:text-blue-500 transition-colors duration-200"
                onClick={() => {
                  const faqSection = document.getElementById('faq-section');
                  if (faqSection) faqSection.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                FAQ
              </span>
            </div>
            {/* Button Component */}
            <Button className="flex w-[100px] sm:w-[120px] lg:w-[150px] items-center gap-[8.12px] px-[8px] sm:px-[12px] py-[4px] relative mt-[-1.50px] mb-[-1.50px] mr-[-1.50px] bg-blue-800 border-[2px] sm:border-[3px] border-solid border-[#83aefa] shadow-[6px_6px_0px_#92cdfe] sm:shadow-[8px_8px_0px_#92cdfe] lg:shadow-[10px_10px_0px_#92cdfe] h-auto">
              <div className="relative w-fit mt-[-1.50px] font-display font-semibold text-[#ffffff] text-[12px] sm:text-[16px] lg:text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                Contact Us
              </div>
            </Button>
          </div>
        </nav>
      </header>

      {/* Main content */}
      <main className="relative">
        <BrandingSection />
        <SubTitle />

        {/* Four Pillars Section with Join Line */}
        <section className="relative w-full bg-neutral-900 py-8 sm:py-10 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="relative flex justify-center items-center min-h-[450px] sm:min-h-[500px] lg:min-h-[700px]">
              {/* Central join line and text */}
              <div className="relative flex flex-col items-center justify-center">
                <img
                  className="w-[280px] h-[330px] sm:w-[320px] sm:h-[380px] lg:w-[420px] lg:h-[500px] xl:w-[474px] xl:h-[568px] object-contain"
                  alt="line"
                  src="/Icon/join-line.svg"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[280px] h-[80px] sm:w-[320px] sm:h-[90px] lg:w-[420px] lg:h-[120px] xl:w-[485px] xl:h-[137px] rounded-[140px/40px] sm:rounded-[160px/45px] lg:rounded-[210px/60px] xl:rounded-[242.5px/68.5px] border-[3px] sm:border-[4px] lg:border-[5px] xl:border-[6px] border-solid border-[#2c2c2c] rotate-[-2.90deg] bg-blue-500 flex items-center justify-center">
                  <div className="rotate-[-1.23deg] font-display font-semibold text-white text-[14px] sm:text-[18px] lg:text-[26px] xl:text-[30px] text-center tracking-[0] leading-[normal] px-2">
                    Four Pillars of Excellence
                  </div>
                </div>
              </div>

              {/* Strategy Card - Top Left */}
              <div className="absolute top-[20px] sm:top-[30px] lg:top-[40px] xl:top-[20px] left-[10px] sm:left-[20px] lg:left-[60px] xl:left-[120px]">
                <StrategyCard />
              </div>

              {/* Technology Card - Top Right */}
              <div className="absolute top-[20px] sm:top-[15px] lg:top-[20px] xl:top-[5px] right-[10px] sm:right-[20px] lg:right-[60px] xl:right-[120px]">
                <TechnologyCard />
              </div>
              {/* Design Card - Bottom Left */}
              <div className="absolute bottom-[20px] sm:bottom-[30px] lg:bottom-[40px] left-[10px] sm:left-[20px] lg:left-[60px] xl:left-[120px]">
                <DesignCard />
              </div>

              {/* Emotion Card - Bottom Right */}
              <div className="absolute bottom-[20px] sm:bottom-[15px] lg:bottom-[5px] right-[10px] sm:right-[20px] lg:right-[60px] xl:right-[120px]">
                <EmotionCard />
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Core Values Section */}
      <div>
        <CoreValueSection />

        {/* FAQ Section */}
        <div id="faq-section" className="relative w-full px-4 sm:px-8 lg:px-20 xl:px-[105px] mb-16">
          <div className="w-full max-w-[95vw] sm:max-w-[600px] lg:max-w-[900px] xl:max-w-[1100px] min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] xl:min-h-[420px] mx-auto bg-[#ffffff] rounded-[20px] sm:rounded-[25px] lg:rounded-[40px] xl:rounded-[50px] border-[2px] sm:border-[3px] lg:border-4 border-solid border-black relative flex flex-col justify-between">
            <img
              className="absolute w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] lg:w-[56px] lg:h-[56px] top-[-18px] sm:top-[-22px] lg:top-[-25px] left-[4px]"
              alt="Frame"
              src="/Image/Clip.png"
            />

            <div className="absolute left-1/2 transform -translate-x-1/2 [font-family:'Bricolage_Grotesque',Helvetica] font-bold text-black text-[32px] sm:text-[42px] lg:text-[54px] text-center tracking-[0] leading-[54px] sm:leading-[72px] lg:leading-[96.9px] whitespace-nowrap">
              FAQs
            </div>

            <img
              className="absolute w-[250px] sm:w-[320px] lg:w-[405px] h-[10px] sm:h-[12px] lg:h-[15px] top-[55px] sm:top-[65px] lg:top-[80px] left-1/2 transform -translate-x-1/2"
              alt="Line"
              src="/Image/blue-line.png"
            />
            <div className="mt-6 sm:mt-8 lg:mt-10 xl:mt-20">
              <FaqSection />
            </div>
          </div>
        </div>
        {/* Contact Form Section */}
        <DiscoverySection />
        {/* Subscribe Section */}
        <SubscribeSection />
        {/* footer section */}
        <FooterSection />
      </div>
    </div>
  );
};
export default HomePage;
