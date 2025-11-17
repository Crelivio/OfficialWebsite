"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Header = () => {
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
    <header className="fixed top-0 left-0 w-full z-50 bg-neutral-900 shadow-lg">
      <nav className="flex w-full max-w-7xl mx-auto items-center justify-between py-3 sm:py-4 lg:py-6 px-4 sm:px-6 lg:px-20">
        {/* Logo */}
        <div
          className="inline-flex items-center justify-center gap-2 relative flex-[0_0_auto] cursor-pointer hover:opacity-80 transition-opacity duration-200"
          onClick={() => window.location.href = '/'}
          title="Go to Home"
        >
          <Image
            className="relative w-[20px] h-[20px] sm:w-[25px] sm:h-[25px] lg:w-[40px] lg:h-[35px]"
            alt="Crelivio logo"
            src="/Icon/logo.svg"
            width={40}
            height={35}
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
          <a href="https://wa.me/message/XOGTHZA3ZIQHI1" target="_blank" rel="noopener noreferrer">
            <Button className="flex w-[110px] lg:w-[140px] items-center gap-2 px-4 py-2 bg-blue-800 border-2 lg:border-3 border-solid border-[#83aefa] shadow-[6px_6px_0px_#92cdfe] lg:shadow-[8px_8px_0px_#92cdfe] hover:shadow-[4px_4px_0px_#92cdfe] lg:hover:shadow-[6px_6px_0px_#92cdfe] transition-all duration-200 h-auto">
              <div className="font-display font-semibold text-[#ffffff] text-[14px] lg:text-[18px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                Contact Us
              </div>
            </Button>
          </a>
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
              <a href="https://wa.me/message/XOGTHZA3ZIQHI1" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-blue-800 border-2 border-solid border-[#83aefa] shadow-[4px_4px_0px_#92cdfe] hover:shadow-[2px_2px_0px_#92cdfe] transition-all duration-200">
                  <div className="font-display font-semibold text-[#ffffff] text-[14px] text-center tracking-[0] leading-[normal]">
                    Contact Us
                  </div>
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

