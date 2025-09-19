import React from "react";

const BrandingSection = () => {
  const imageCards = [
    {
      bgClasses:
        "w-[200px] h-[140px] sm:w-[250px] sm:h-[180px] lg:w-[345px] lg:h-[241px] top-[30px] sm:top-[40px] lg:top-[50px] left-[15px] sm:left-[20px] lg:left-[30px] rotate-[-7.85deg]",
      imgClasses: "w-[220px] h-[150px] sm:w-[270px] sm:h-[190px] lg:w-[374px] lg:h-[251px] top-[35px] sm:top-[45px] lg:top-[55px] left-[35px] sm:left-[45px] lg:left-[58px]",
      src: "/Image/card1.png",
      alt: "Image",
    },
    {
      bgClasses: "w-[200px] h-[145px] sm:w-[250px] sm:h-[185px] lg:w-[340px] lg:h-[245px] top-[190px] sm:top-[250px] lg:top-[316px] left-[120px] sm:left-[150px] lg:left-[190px] rotate-[15.24deg]",
      imgClasses: "w-[240px] h-[145px] sm:w-[300px] sm:h-[185px] lg:w-[420px] lg:h-[245px] top-[160px] sm:top-[220px] lg:top-[280px] left-[80px] sm:left-[95px] lg:left-[110px]",
      src: "/Image/card2.png",
      alt: "Image",
    },
    {
      bgClasses:
        "w-[200px] h-[130px] sm:w-[250px] sm:h-[170px] lg:w-[334px] lg:h-[221px] top-[300px] sm:top-[380px] lg:top-[430px] left-[-120px] sm:left-[-150px] lg:left-[-210px] rotate-[-15.27deg]",
      imgClasses: "w-[210px] h-[135px] sm:w-[260px] sm:h-[175px] lg:w-[346px] lg:h-[226px] top-[300px] sm:top-[380px] lg:top-[430px] left-[-120px] sm:left-[-150px] lg:left-[-210px]",
      src: "/Image/card3.png",
      alt: "Image",
    },
  ];

  return (
    <section className="w-full min-h-[500px] sm:min-h-[600px] lg:min-h-[750px] xl:min-h-[850px] relative overflow-visible pb-4 sm:pb-6 lg:pb-10 mt-8 sm:mt-10 lg:mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-20 relative h-full">
        <div className="grid lg:grid-cols-2 items-center h-full gap-8 lg:gap-0">
          {/* Left side - Text content */}
          <div className="flex flex-col order-1 lg:order-1 text-center lg:text-left">
            <img
              className="w-[30px] h-[32px] sm:w-[35px] sm:h-[37px] lg:w-[40px] lg:h-[42px] -ml-4 sm:-ml-6 lg:-ml-8 mx-auto lg:mx-0"
              alt="Vector"
              src="/Icon/bg-vector.svg"
            />
            
            <h1 className="font-display font-extrabold text-[#ffffff] text-[24px] sm:text-[36px] lg:text-5xl xl:text-6xl leading-[28px] sm:leading-[42px] lg:leading-[50px] xl:leading-[60px] mt-2">
              STRATEGIC <br />
              DESIGN, TECH
            </h1>

            <h2 className="font-display font-extrabold text-[#ffffff] text-[24px] sm:text-[36px] lg:text-5xl xl:text-6xl leading-[30px] sm:leading-[42px] lg:leading-[54px] xl:leading-[64px] mt-1">
              EMOTIONAL <br />
              BRANDING
            </h2>

            <img
              className="w-[250px] sm:w-[320px] lg:w-[417px] h-[30px] sm:h-[40px] lg:h-12 mt-2 mx-auto lg:mx-0"
              alt="Vector"
              src="/Icon/underline.svg"
            />
          </div>

          {/* Right side - Image cards */}
          <div className="relative h-[350px] sm:h-[400px] lg:h-[440px] xl:h-[480px] order-2 lg:order-2 top-4 sm:top-6 lg:top-14 right-0 sm:right-5 lg:right-15">
            {imageCards.map((card, index) => (
              <React.Fragment key={index}>
                <div
                  className={`absolute bg-[#0259DC] rounded-[25px] sm:rounded-[30px] lg:rounded-[38px] ${card.bgClasses}`}
                />
                <img
                  className={`absolute rounded-[22px] sm:rounded-[27px] lg:rounded-[35px] border-[1.5px] sm:border-2 border-solid border-[#ffd7c5] object-cover ${card.imgClasses}`}
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