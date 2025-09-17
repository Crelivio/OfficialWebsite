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
      bgClasses: "w-[340px] h-[245px] top-[316px] left-[190px] rotate-[15.24deg]",
      imgClasses: "w-[420px] h-[245px] top-[280px] left-[110px]",
      src: "/Image/card2.png",
      alt: "Image",
    },
    {
      bgClasses:
        "w-[334px] h-[221px] top-[430px] left-[-210px] rotate-[-15.27deg]",
      imgClasses: "w-[346px] h-[226px] top-[430px] left-[-210px]",
      src: "/Image/card3.png",
      alt: "Image",
    },
  ];

  return (
    <section className="w-full min-h-[700px] lg:min-h-[750px] xl:min-h-[850px] relative overflow-visible pb-8 lg:pb-10 -mt-8">
      <div className="max-w-7xl mx-auto px-4 lg:px-10 xl:px-20 relative h-full">
        <div className="grid lg:grid-cols-2 items-center h-full">
          {/* Left side - Text content */}
          <div className="flex flex-col">
            <img
              className="w-[40px] h-[42px] -ml-8"
              alt="Vector"
              src="/Icon/bg-vector.svg"
            />
            
            <h1 className="font-display font-extrabold text-[#ffffff] text-3xl lg:text-5xl xl:text-6xl leading-[40px] lg:leading-[50px] xl:leading-[60px]">
              STRATEGIC <br />
              DESIGN, TECH
            </h1>

            <h2 className="font-display font-extrabold text-[#ffffff] text-3xl lg:text-5xl xl:text-6xl leading-[46px] lg:leading-[54px] xl:leading-[64px]">
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
          <div className="relative h-[400px] lg:h-[440px] xl:h-[480px] top-10 right-15 lg:top-14">
            {imageCards.map((card, index) => (
              <React.Fragment key={index}>
                <div
                  className={`absolute bg-[#0259DC] rounded-[38px] ${card.bgClasses}`}
                />
                <img
                  className={`absolute rounded-[35px] border-2 border-solid border-[#ffd7c5] object-cover ${card.imgClasses}`}
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