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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import DiscoverySection from "./Section/DiscoverySection";
import SubscribeSection from "./Section/SubscribeSection";

const HomePage = () => {
  return (
    <div className="w-full min-h-screen bg-neutral-900">
      {/* header and navigation */}
      <header className="relative z-50">
        {/* navbar/ Navigation */}
        <div className="flex w-full max-w-7xl mx-auto items-center justify-between py-6 px-20">
          <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
            <img
              className="relative w-[20px] h-[20px] lg:w-[50px] lg:h-[45px]"
              alt="Vector"
              src="/Icon/logo.svg"
            />
            <div className="relative w-fit font-bold text-[#ffffff] text-[20px] lg:text-[25px] tracking-[0] leading-[normal]">
              Crelivio
            </div>
          </div>
          <div className="inline-flex items-center justify-center gap-8 lg:gap-12 relative flex-[0_0_auto]">
            <div className="inline-flex items-start gap-[25px] lg:gap-[35px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-semibold text-[#ffffff] text-[18px] lg:text-[20px] tracking-[0] leading-[normal]">
                ABOUT
              </div>
              <div className="relative w-fit mt-[-1.00px] font-semibold text-[#ffffff] text-[18px] lg:text-[20px] tracking-[0] leading-[normal]">
                FAQ
              </div>
            </div>
            {/* Button Component */}
            <Button className="flex w-[140px] lg:w-[150px] items-center gap-[8.12px] px-[12px] py-[4px] relative mt-[-1.50px] mb-[-1.50px] mr-[-1.50px] bg-blue-800 border-[3px] border-solid border-[#83aefa] shadow-[8px_8px_0px_#92cdfe] lg:shadow-[10px_10px_0px_#92cdfe] h-auto">
              <div className="relative w-fit mt-[-1.50px] font-display font-semibold text-[#ffffff] text-[18px] lg:text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                Contact Us
              </div>
            </Button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="relative">
        <BrandingSection />
        <SubTitle />

        {/* Four Pillars Section with Join Line */}
        <section className="relative w-full bg-neutral-900 py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="relative flex justify-center items-center min-h-[600px] lg:min-h-[700px]">
              {/* Central join line and text */}
              <div className="relative flex flex-col items-center justify-center">
                <img
                  className="w-[380px] h-[450px] lg:w-[420px] lg:h-[500px] xl:w-[474px] xl:h-[568px] object-contain"
                  alt="line"
                  src="/Icon/join-line.svg"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[380px] h-[110px] lg:w-[420px] lg:h-[120px] xl:w-[485px] xl:h-[137px] rounded-[242.5px/68.5px] border-[4px] lg:border-[5px] xl:border-[6px] border-solid border-[#2c2c2c] rotate-[-2.90deg] bg-blue-500 flex items-center justify-center">
                  <div className="rotate-[-1.23deg] font-display font-semibold text-white text-[22px] lg:text-[26px] xl:text-[30px] text-center tracking-[0] leading-[normal]">
                    Four Pillars of Excellence
                  </div>
                </div>
              </div>

              {/* Strategy Card - Top Left */}
              <div className="absolute top-[40px] left-[20px] lg:top-[40px] lg:left-[60px] xl:top-[20px] xl:left-[120px]">
                <StrategyCard />
              </div>

              {/* Technology Card - Top Right */}
              <div className="absolute top-[40px] right-[20px] lg:top-[20px] lg:right-[60px] xl:top-[5px] xl:right-[120px]">
                <TechnologyCard />
              </div>
              {/* Design Card - Bottom Left */}
              <div className="absolute bottom-[20px] lg:bottom-[40px] left-[20px] lg:left-[60px] xl:left-[120px]">
                <DesignCard />
              </div>

              {/* Emotion Card - Bottom Right */}
              <div className="absolute bottom-[20px] lg:bottom-[5px] right-[20px] lg:right-[60px] xl:right-[120px]">
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
        <div className="relative w-full px-4 sm:px-8 lg:px-20 xl:px-[105px] mb-16">
          <div className="w-full max-w-[95vw] sm:max-w-[600px] lg:max-w-[900px] xl:max-w-[1100px] min-h-[350px] lg:min-h-[400px] xl:min-h-[420px] mx-auto bg-[#ffffff] rounded-[32px] lg:rounded-[40px] xl:rounded-[50px] border-4 border-solid border-black relative flex flex-col justify-between">
            <img
              className="absolute w-[56px] h-[56px] top-[-25px] left-[4px]"
              alt="Frame"
              src="/Image/Clip.png"
            />

            <div className="absolute left-1/2 transform -translate-x-1/2 [font-family:'Bricolage_Grotesque',Helvetica] font-bold text-black text-[54px] text-center tracking-[0] leading-[96.9px] whitespace-nowrap">
              FAQs
            </div>

            <img
              className="absolute w-[405px] h-[15px] top-[80px] left-1/2 transform -translate-x-1/2"
              alt="Line"
              src="/Image/blue-line.png"
            />
            <div className="mt-8 lg:mt-10 xl:mt-20">
              <FaqSection />
            </div>

            {/* Decorative elements at the bottom */}
            <div className="absolute w-[30px] h-[30px] left-260 lg:left-210 xl:left-250 top-110 lg:top-105 xl:top-110 rounded-[19.5px] border-4 border-solid border-black bg-blue-500" />
            <div className="absolute w-[70px] h-[70px] left-260 lg:left-210 xl:left-255 top-50 lg:top-85 xl:top-90 rounded-[52px] border-4 border-solid border-black bg-blue-500" />
            <div className="absolute w-5 h-5 left-270 lg:left-220 xl:left-260 top-80 lg:top-75 xl:top-80 rounded-[10px] border-4 border-solid border-black bg-blue-500" />
          </div>
        </div>
        {/* Contact Form Section */}
        <DiscoverySection />
        {/* Subscribe Section */}
        <SubscribeSection />
      </div>
    </div>
  );
};
export default HomePage;
