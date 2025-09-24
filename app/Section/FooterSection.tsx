import React from "react";

export const FooterSection = (): React.JSX.Element => {
  return (
    <footer className="w-full h-auto py-6 sm:py-8 lg:h-44">
      <div className="flex flex-col sm:flex-row items-center justify-between h-full px-4 sm:px-8 lg:px-20 xl:px-[105px] gap-4 sm:gap-0">
        <div className="[font-family:'Bricolage_Grotesque',Helvetica] font-semibold text-[#ffffff] text-[14px] sm:text-[16px] lg:text-xl tracking-[0] leading-[normal] text-center sm:text-left">
          © 2025 Crelivio Inc. All rights reserved
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-75 transition-opacity duration-200"
          >
            <img className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] lg:w-[30px] lg:h-[30px]" alt="Facebook" src="/Icon/facebook.svg" />
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-75 transition-opacity duration-200"
          >
            <img className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] lg:w-[30px] lg:h-[30px]" alt="Twitter" src="/Icon/twitter.svg" />
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-75 transition-opacity duration-200"
          >
            <img className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] lg:w-[30px] lg:h-[30px]" alt="Instagram" src="/Icon/instagram.svg" />
          </a>
        </div>
      </div>
    </footer>
  );
};
