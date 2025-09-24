import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const CoreValueSection: React.FC = () => {
  const coreValuesData = [
    {
      title: "Emotional Branding",
      description:
        "We create brands that connect on a relationships between your audience deeper level, building emotional and your identity. ✨",
      image: "/Image/emotion-branding.png",
    },
    {
      title: "Clarity",
      description:
        "Every element serves a purpose. We eliminate confusion and create crystal clear brand communication that resonates. ✨",
      image: "/Image/clarity.png",
    },
    {
      title: "Longetivity",
      description:
        "We build brands that stand the test of time, creating timeless identities that evolve with ur business. ✨",
      image: "/Image/longevity.png",
    },
  ];

  return (
    <section className="relative w-full px-4 sm:px-6 md:px-12 lg:px-20 xl:px-[90px] mb-12 sm:mb-16">
      <div className="text-center mb-8 sm:mb-12">
        <div className="relative inline-block">
          <div className="[font-family:'Bricolage_Grotesque',Helvetica] font-extrabold text-light-gray text-[24px] sm:text-[36px] md:text-[48px] lg:text-[60px] xl:text-[70px] text-center tracking-[0] leading-[28px] sm:leading-[38px] md:leading-[48px] whitespace-nowrap">
            OUR CORE VALUES ✨
          </div>
          <div className="absolute top-[-2px] sm:top-[-3px] left-[-2px] sm:left-[-3px] md:left-[-4px] lg:left-[-5px] [font-family:'Bricolage_Grotesque',Helvetica] font-extrabold text-white text-[24px] sm:text-[36px] md:text-[48px] lg:text-[60px] xl:text-[70px] text-center tracking-[0] leading-[28px] sm:leading-[38px] md:leading-[48px] whitespace-nowrap">
            OUR CORE VALUES ✨
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-20 mb-12 sm:mb-16">
        {coreValuesData.map((value, index) => (
          <div key={index} className="relative flex flex-col items-center">
            <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[300px] lg:max-w-[350px] xl:max-w-[375px] aspect-square bg-[#2c2c2c] mb-4 sm:mb-6">
              <img
                className="w-full h-full object-cover"
                alt={value.title}
                src={value.image}
              />
            </div>

            <Card className="bg-transparent border-none w-full max-w-[280px] sm:max-w-[320px] md:max-w-[300px] lg:max-w-[350px] xl:max-w-[375px]">
              <CardContent className="p-0">
                <div className="flex flex-col items-start justify-center gap-2 sm:gap-3">
                  <div className="flex items-center justify-between w-full">
                    <div className="font-medium text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-2xl tracking-[0] leading-[normal]">
                      {value.title}
                    </div>
                    <img
                      className="w-[25px] sm:w-[30px] lg:w-[35px] h-[15px] sm:h-[18px] lg:h-[20px]"
                      alt="Arrow"
                      src="/Icon/Arrow.svg"
                    />
                  </div>

                  <img
                    className="w-full h-px object-cover"
                    alt="Line"
                    src="/Image/Line.png"
                  />

                  <div className="[font-family:'Montserrat',Helvetica] font-medium text-white text-[12px] sm:text-[13px] lg:text-sm tracking-[0] leading-[20px] sm:leading-[22px] lg:leading-[25px]">
                    {value.description}
                  </div>

                  <img
                    className="w-full h-px object-cover"
                    alt="Line"
                    src="/Image/Line.png"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {/* <CoreValuesSection /> */}
    </section>
  );
};
