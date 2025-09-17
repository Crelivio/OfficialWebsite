import React from "react";
import BrandingSection from "@/app/Section/BrandingSection";
import { Button } from "@/components/ui/button";
import { SubTitle } from "./Section/Sub-tiltle";
import { StrategyCard } from "./Card/Strategy";
import { TechnologyCard } from "./Card/Technology";
import { DesignCard } from "./Card/Design";
import { EmotionCard } from "./Card/Emotion";

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

        {/* Join line and center text */}
        <section className="relative w-full bg-neutral-900 py-12 lg:py-14 xl:py-16">
          <div className="max-w-7xl mx-auto px-6">
            {/* Top pillar cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="relative w-full flex justify-center">
                <StrategyCard />
              </div>
              <div className="relative w-full flex justify-center">
                <TechnologyCard />
              </div>
            </div>
            <div className="relative flex flex-col items-center justify-center my-6 lg:my-8">
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

            {/* Bottom pillar cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="relative w-full flex justify-center">
                <DesignCard />
              </div>
              <div className="relative w-full flex justify-center">
                <EmotionCard />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
export default HomePage;
