import React from "react";

export const FooterSection = (): React.JSX.Element => {
  return (
    <footer className="w-full h-44">
      <div className="flex items-center justify-between h-full px-[105px]">
        <div className="[font-family:'Bricolage_Grotesque',Helvetica] font-semibold text-[#ffffff] text-xl tracking-[0] leading-[normal] text-left">
          © 2025 Crelivio Inc. All rights reserved
        </div>
        <div className="flex items-center gap-2">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img className="w-[30px] h-[30px]" alt="Facebook" src="/Icon/facebook.svg" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img className="w-[30px] h-[30px]" alt="Twitter" src="/Icon/twitter.svg" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img className="w-[30px] h-[30px]" alt="Instagram" src="/Icon/instagram.svg" />
          </a>
        </div>
      </div>
    </footer>
  );
};
