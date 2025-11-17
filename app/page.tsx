import React from "react";
import Image from "next/image";
import { Header } from "./components/Header";
import BrandingSection from "@/app/Section/BrandingSection";
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

export default function HomePage() {
  return (
    <div className="w-full min-h-screen bg-neutral-900">
      <Header />

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

            {/* Desktop Layout */}
            <div className="hidden md:block">
              <div className="relative flex justify-center items-center min-h-[500px] lg:min-h-[700px]">
                {/* Central join line and text */}
                <div className="relative flex flex-col items-center justify-center">
                  <Image
                    className="w-[320px] h-[380px] lg:w-[420px] lg:h-[500px] xl:w-[474px] xl:h-[568px] object-contain"
                    alt="Connecting lines illustration for four pillars"
                    src="/Icon/join-line.svg"
                    width={474}
                    height={568}
                  />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[320px] h-[90px] lg:w-[420px] lg:h-[120px] xl:w-[485px] xl:h-[137px] rounded-[160px/45px] lg:rounded-[210px/60px] xl:rounded-[242.5px/68.5px] border-[4px] lg:border-[5px] xl:border-[6px] border-solid border-[#2c2c2c] rotate-[-2.90deg] bg-blue-500 flex items-center justify-center">
                    <div className="rotate-[-1.23deg] font-display font-semibold text-white text-[18px] lg:text-[26px] xl:text-[30px] text-center tracking-[0] leading-[normal] px-2">
                      Four Pillars of Excellence
                    </div>
                  </div>
                </div>

                {/* Strategy Card*/}
                <div className="absolute top-[30px] lg:top-[40px] xl:top-[20px] left-[20px] lg:left-[60px] xl:left-[120px]">
                  <StrategyCard />
                </div>

                {/* Technology Card*/}
                <div className="absolute top-[15px] lg:top-[20px] xl:top-[5px] right-[20px] lg:right-[60px] xl:right-[120px]">
                  <TechnologyCard />
                </div>
                {/* Design Card */}
                <div className="absolute bottom-[30px] lg:bottom-[40px] left-[20px] lg:left-[60px] xl:left-[120px]">
                  <DesignCard />
                </div>

                {/* Emotion Card */}
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
            <Image
              className="absolute w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] lg:w-[56px] lg:h-[56px] top-[-15px] sm:top-[-18px] lg:top-[-25px] left-[4px]"
              alt="Decorative clip frame element"
              src="/Image/Clip.png"
              width={56}
              height={56}
            />

            <div className="absolute left-1/2 transform -translate-x-1/2 [font-family:'Bricolage_Grotesque',Helvetica] font-bold text-black text-[24px] sm:text-[32px] lg:text-[54px] text-center tracking-[0] leading-[30px] sm:leading-[54px] lg:leading-[96.9px] whitespace-nowrap">
              FAQs
            </div>

            <Image
              className="absolute w-[180px] sm:w-[250px] lg:w-[405px] h-[8px] sm:h-[10px] lg:h-[15px] top-[40px] sm:top-[55px] lg:top-[80px] left-1/2 transform -translate-x-1/2"
              alt="Decorative underline for FAQs heading"
              src="/Image/blue-line.png"
              width={405}
              height={15}
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
}
