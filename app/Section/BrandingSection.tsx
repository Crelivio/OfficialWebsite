import React from "react";

const BrandingSection = () => {
  const imageCards = [
    {
      bgClasses:
        "w-[345px] h-[241px] top-[50px] left-[30px] rotate-[-7.85deg]",
      imgClasses: "w-[374px] h-[251px] top-[55px] left-[58px]",
      src: "/Image/card1.png",
      alt: "Image",
    },
    {
      bgClasses: "w-[490px] h-[270px] top-[335px] left-[130px] rotate-[15.24deg]",
      imgClasses: "w-[509px] h-[305px] top-[280px] left-[110px]",
      src: "/Image/card2.png",
      alt: "Image",
    },
    {
      bgClasses:
        "w-[344px] h-[231px] top-[500px] left-[-270px] rotate-[-15.27deg]",
      imgClasses: "w-[366px] h-[246px] top-[510px] left-[-230px]",
      src: "/Image/card3.png",
      alt: "Image",
    },
  ];

  return (
    <section className="w-full min-h-[800px] lg:min-h-[850px] xl:min-h-[995px] relative overflow-visible pb-8 lg:pb-10">
      <div className="max-w-7xl mx-auto relative h-full">
        <div className="grid lg:grid-cols-2 items-center h-full">
          {/* Left side - Text content */}
          <div className="flex flex-col space-y-6">
            <img
              className="w-[70px] h-[71px] -ml-8"
              alt="Vector"
              src="/Icon/bg-vector.svg"
            />
            
            <h1 className="font-display font-extrabold text-[#ffffff] text-[48px] lg:text-[56px] xl:text-[64px] tracking-[1.00px] leading-[44px] lg:leading-[52px] xl:leading-[60px]">
              STRATEGIC <br />
              DESIGN, TECH
            </h1>

            <h2 className="font-display font-extrabold text-[#ffffff] text-[50px] lg:text-[58px] xl:text-[68px] tracking-[2.00px] leading-[46px] lg:leading-[54px] xl:leading-[64px]">
              EMOTIONAL <br />
              BRANDING
            </h2>

            <img
              className="w-[417px] h-12"
              alt="Vector"
              src="/Icon/underline.svg"
            />
          </div>

          {/* Right side - Image cards */}
          <div className="relative h-[500px] lg:h-[550px] xl:h-[600px] top-16 lg:top-20">
            {imageCards.map((card, index) => (
              <React.Fragment key={index}>
                <div
                  className={`absolute bg-[#0259DC] rounded-[30px] ${card.bgClasses}`}
                />
                <img
                  className={`absolute rounded-[30px] border-2 border-solid border-[#ffd7c5] object-cover ${card.imgClasses}`}
                  alt={card.alt}
                  src={card.src}
                />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandingSection;