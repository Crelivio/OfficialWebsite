import React from "react";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-neutral-900 shadow-lg">
      <nav className="flex w-full max-w-7xl mx-auto items-center justify-between py-6 px-20">
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
            <a
              href="/about"
              className="relative w-fit mt-[-1.00px] font-semibold text-[#ffffff] text-[18px] lg:text-[20px] tracking-[0] leading-[normal] hover:underline"
            >
              ABOUT
            </a>
            <button
              className="relative w-fit mt-[-1.00px] font-semibold text-[#ffffff] text-[18px] lg:text-[20px] tracking-[0] leading-[normal] hover:underline bg-transparent border-none cursor-pointer"
              onClick={() => {
                const faqSection = document.getElementById("faq-section");
                if (faqSection)
                  faqSection.scrollIntoView({ behavior: "smooth" });
              }}
            >
              FAQ
            </button>
          </div>
          {/* Button Component */}
          <Button className="flex w-[140px] lg:w-[150px] items-center gap-[8.12px] px-[12px] py-[4px] relative mt-[-1.50px] mb-[-1.50px] mr-[-1.50px] bg-blue-800 border-[3px] border-solid border-[#83aefa] shadow-[8px_8px_0px_#92cdfe] lg:shadow-[10px_10px_0px_#92cdfe] h-auto">
            <div className="relative w-fit mt-[-1.50px] font-display font-semibold text-[#ffffff] text-[18px] lg:text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
              Contact Us
            </div>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default AboutPage;
