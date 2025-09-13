import React from "react";

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-10">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[80vh]">
          
          {/* Left side - Hero text */}
          <div className="flex flex-col justify-center space-y-6">
            {/* Vector/Icon */}
            <div className="-ml-9">
              <img
                src="/icon/bg-vector.svg"
                alt="Hero Icon"
                className="h-12 w-12"
              />
            </div>

            {/* Hero Title */}
            <h1 className="text-3xl lg:text-4xl xl:text-6xl font-bold text-white">
              STRATEGIC
              <br />
              <span className="text-white">DESIGN, TECH</span>
              <br />
              <span className="text-white">EMOTIONAL</span>
              <br />
              <span className="text-white">BRANDING</span>
            </h1>

            {/* Underline accent */}
            <div>
              <img src="/icon/underline.svg" alt="Underline Accent" />
            </div>
          </div>

          {/* Right side - Image cards */}
          <div className="relative flex flex-col items-center space-y-4 -mb-36 ">
            {/* Card 1 */}
            <div className="relative w-56 h-36 flex items-center justify-center">
              {/* Rotated background */}
              <div className="absolute inset-0 bg-blue-600 rounded-2xl rotate-6" style={{zIndex: 1}}></div>
              <img
                src="/image/card1.png"
                alt="Team meeting"
                className="w-48 h-32 object-cover rounded-xl shadow-2xl relative"
                style={{zIndex: 2}}
              />
            </div>

            {/* Card 2 */}
            <div className="relative w-56 h-36 flex items-center justify-center">
              <div className="absolute inset-0 bg-blue-700 rounded-2xl -rotate-6" style={{zIndex: 1}}></div>
              <img
                src="/image/card2.png"
                alt="Collaboration"
                className="w-48 h-32 object-cover rounded-xl shadow-2xl relative"
                style={{zIndex: 2}}
              />
            </div>

            {/* Card 3 */}
            <div className="relative w-56 h-36 flex items-center justify-center">
              <div className="absolute inset-0 bg-blue-500 rounded-2xl rotate-3" style={{zIndex: 1}}></div>
              <img
                src="/image/card3.png"
                alt="Consultation"
                className="w-48 h-32 object-cover rounded-xl shadow-2xl relative"
                style={{zIndex: 2}}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;