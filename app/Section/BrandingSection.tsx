import React from "react";
import Image from "next/image";

const BrandingSection = () => {
  const imageCards = [
    {
      bgClasses:
        "w-[140px] h-[100px] sm:w-[180px] sm:h-[130px] md:w-[220px] md:h-[160px] lg:w-[345px] lg:h-[241px] top-[20px] sm:top-[25px] md:top-[30px] lg:top-[50px] left-[10px] sm:left-[15px] md:left-[20px] lg:left-[30px] rotate-[-7.85deg]",
      imgClasses: "w-[155px] h-[110px] sm:w-[195px] sm:h-[140px] md:w-[235px] md:h-[170px] lg:w-[374px] lg:h-[251px] top-[25px] sm:top-[30px] md:top-[35px] lg:top-[55px] left-[25px] sm:left-[30px] md:left-[35px] lg:left-[58px]",
      src: "/Image/card1.png",
      alt: "Brand design card 1",
      width: 374,
      height: 251,
    },
    {
      bgClasses: "w-[140px] h-[105px] sm:w-[180px] sm:h-[135px] md:w-[220px] md:h-[165px] lg:w-[340px] lg:h-[245px] top-[140px] sm:top-[170] md:top-[200px] lg:top-[316px] left-[80px] sm:left-[100px] md:left-[120px] lg:left-[190px] rotate-[15.24deg]",
      imgClasses: "w-[170px] h-[105px] sm:w-[210px] sm:h-[135px] md:w-[250px] md:h-[165px] lg:w-[420px] lg:h-[245px] top-[120px] sm:top-[150px] md:top-[180px] lg:top-[280px] left-[60px] sm:left-[75px] md:left-[90px] lg:left-[110px]",
      src: "/Image/card2.png",
      alt: "Brand design card 2",
      width: 420,
      height: 245,
    },
    {
      bgClasses:
        "w-[140px] h-[95px] sm:w-[180px] sm:h-[125px] md:w-[220px] md:h-[155px] lg:w-[334px] lg:h-[221px] top-[220px] sm:top-[270px] md:top-[320px] lg:top-[430px] left-[-80px] sm:left-[-100px] md:left-[-120px] lg:left-[-210px] rotate-[-15.27deg]",
      imgClasses: "w-[150px] h-[100px] sm:w-[190px] sm:h-[130px] md:w-[230px] md:h-[160px] lg:w-[346px] lg:h-[226px] top-[220px] sm:top-[270px] md:top-[320px] lg:top-[430px] left-[-80px] sm:left-[-100px] md:left-[-120px] lg:left-[-210px]",
      src: "/Image/card3.png",
      alt: "Brand design card 3",
      width: 346,
      height: 226,
    },
  ];

  return (
  <section className="w-full min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[750px] xl:min-h-[850px] relative overflow-visible pb-4 sm:pb-6 lg:pb-10 mt-6 sm:mt-8 md:mt-10 lg:mt-6 xl:mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-20 relative h-full">
        <div className="grid lg:grid-cols-2 items-center h-full gap-6 md:gap-8 lg:gap-0">
          {/* Left side - Text content */}
          <div className="flex flex-col order-1 lg:order-1 text-center lg:text-left px-2 sm:px-0">
            <Image
              className="w-[25px] h-[27px] sm:w-[30px] sm:h-[32px] md:w-[35px] md:h-[37px] lg:w-[40px] lg:h-[42px] -ml-2 sm:-ml-4 md:-ml-6 lg:-ml-8 mx-auto lg:mx-0"
              alt="Vector"
              src="/Icon/bg-vector.svg"
              width={40}
              height={42}
            />
            
            <h1 className="font-display font-extrabold text-[#ffffff] text-[20px] sm:text-[28px] md:text-[32px] lg:text-5xl xl:text-6xl leading-[24px] sm:leading-[32px] md:leading-[38px] lg:leading-[50px] xl:leading-[60px] mt-2">
              STRATEGIC 
              DESIGN, TECH
            </h1>

            <h2 className="font-display font-extrabold text-[#ffffff] text-[20px] sm:text-[28px] md:text-[32px] lg:text-5xl xl:text-6xl leading-[26px] sm:leading-[34px] md:leading-[40px] lg:leading-[54px] xl:leading-[64px] mt-1">
              EMOTIONAL
              BRANDING
            </h2>

            <Image
              className="w-[200px] sm:w-[260px] md:w-[300px] lg:w-[417px] h-[24px] sm:h-[32px] md:h-[36px] lg:h-12 mt-2 mx-auto lg:mx-0"
              alt="Vector"
              src="/Icon/underline.svg"
              width={417}
              height={48}
            />
          </div>

          {/* Right side - Image cards */}
          <div
            className="relative h-[280px] sm:h-[320px] md:h-[360px] lg:h-[440px] xl:h-[480px] order-2 lg:order-2 top-2 sm:top-4 md:top-6 lg:top-14 right-0 sm:right-2 md:right-4 lg:right-15 flex justify-end"
          >
            <div className="relative w-[260px] sm:w-[320px] md:w-[400px] lg:w-full flex justify-center">
              {imageCards.map((card, index) => (
                <React.Fragment key={index}>
                  <div
                    className={`absolute bg-[#0259DC] rounded-[25px] sm:rounded-[30px] lg:rounded-[38px] ${card.bgClasses}`}
                  />
                  <Image
                    className={`absolute rounded-[22px] sm:rounded-[27px] lg:rounded-[35px] border-[1.5px] sm:border-2 border-solid border-[#ffd7c5] object-cover ${card.imgClasses}`}
                    alt={card.alt}
                    src={card.src}
                    width={card.width}
                    height={card.height}
                  />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandingSection;