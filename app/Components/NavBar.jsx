import React from "react";

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Logo and Brand */}
        <div className="flex items-center space-x-2">
          <img src="/icon/logo.svg" alt="Crelivio Logo" className="h-9 w-10" />
          <span className="text-white font-bold text-2xl tracking-wide">
            Crelivio
          </span>
        </div>

        {/* Right: Navigation and Button */}
        <div className="flex items-center space-x-8 ml-auto">
          <a
            href="#about"
            className="text-gray-300 uppercase font-medium hover:text-white transition-colors duration-200"
          >
            About
          </a>
          <a
            href="#faq"
            className="text-gray-300 font-medium hover:text-white transition-colors duration-200"
          >
            FAQ
          </a>
          <a
            href="#contact"
            className="ml-6 bg-blue-600 text-white font-semibold px-4 py-1 shadow-lg hover:bg-blue-700 transition-colors duration-200"
            style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
