import React from "react";
import BrandingSection from "@/app/Section/BrandingSection";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <div className="bg-[#ffffff] w-full min-h-screen">
      {/* header and navigation */}
      <section>
        <BrandingSection />

        {/* Navigation */}

        <div className="flex w-[1223px] items-center justify-between absolute top-12 left-[105px]">
          <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
            <img
              className="relative w-[70px] h-[65px]"
              alt="Vector"
              src="/Icon/logo.svg"
            />
            <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-bold text-[#ffffff] text-[35px] tracking-[0] leading-[normal]">
              Crelivio
            </div>
          </div>
            <div className="inline-flex items-center justify-center gap-16 relative flex-[0_0_auto]">
            <div className="inline-flex items-start gap-[45px] relative flex-[0_0_auto] border border-solid border-black">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-semibold text-[#ffffff] text-[27px] tracking-[0] leading-[normal]">
                ABOUT
              </div>
              <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-semibold text-[#ffffff] text-2xl tracking-[0] leading-[normal]">
                FAQ
              </div>
            </div>
            {/* Button Component */}
            <Button className="flex w-[162px] items-center gap-[8.12px] px-[14.03px] py-[4.43px] relative mt-[-1.50px] mb-[-1.50px] mr-[-1.50px] bg-dark-blue border-[3px] border-solid border-[#83aefa] shadow-[10px_10px_0px_#92cdfe] h-auto">
              <div className="relative w-fit mt-[-1.50px] [font-family:'Bricolage_Grotesque',Helvetica] font-semibold text-[#ffffff] text-[22px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                Contact Us
              </div>
            </Button>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="relative w-full h-full">

      </div>
    </div>
  );
};
export default HomePage;
