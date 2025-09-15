import React from "react";

const BrandingSection = () => {
  const imageCards = [
    {
      bgClasses:
        "w-[354px] h-[241px] top-[23px] left-[370px] rotate-[-7.85deg]",
      imgClasses: "w-[374px] h-[252px] top-[30px] left-[406px]",
      src: "/Image/card1.png",
      alt: "Image",
    },
    {
      bgClasses: "w-[395px] h-[300px] top-72 left-[505px] rotate-[15.24deg]",
      imgClasses: "w-[404px] h-[304px] top-64 left-[470px]",
      src: "/Image/card2.png",
      alt: "Image",
    },
    {
      bgClasses:
        "w-[354px] h-[241px] top-[484px] left-[123px] rotate-[-15.27deg]",
      imgClasses: "w-[367px] h-[247px] top-[481px] left-[131px]",
      src: "/Image/card3.png",
      alt: "Image",
    },
  ];

  return (
    <section className="w-full h-[995px] bg-neutral-900 relative">
      <div className="relative w-[1270px] h-[769px] top-[179px] left-[84px]">
        <h1 className="absolute h-[141px] top-[67px] left-[68px] [font-family:'Bricolage_Grotesque',Helvetica] font-extrabold text-[#ffffff] text-[76px] tracking-[1.00px] leading-[70.4px]">
          STRATEGIC <br />
          DESIGN, TECH
        </h1>

        <img
          className="absolute w-[75px] h-[76px] top-0 left-0"
          alt="Vector"
          src="/Icon/bg-vector.svg"
        />

        <div className="absolute w-[924px] h-[768px] top-px left-[346px]">
          <div className="relative h-[768px]">
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

        <h2 className="absolute h-[151px] top-[217px] left-[75px] [font-family:'Bricolage_Grotesque',Helvetica] font-extrabold text-[#ffffff] text-[80px] tracking-[2.00px] leading-[75.4px]">
          EMOTIONAL <br />
          BRANDING
        </h2>

        <img
          className="absolute w-[417px] h-12 top-[380px] left-[75px]"
          alt="Vector"
          src="/Icon/underline.svg"
        />
      </div>
    </section>
  );
};

export default BrandingSection;