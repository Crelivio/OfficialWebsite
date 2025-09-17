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
    <section className="relative w-full px-[90px] mb-16">
      <div className="text-center mb-12">
        <div className="relative inline-block">
          <div className="[font-family:'Bricolage_Grotesque',Helvetica] font-extrabold text-light-gray text-[70px] text-center tracking-[0] leading-[48px] whitespace-nowrap">
            OUR CORE VALUES ✨
          </div>
          <div className="absolute top-[-3px] left-[-5px] [font-family:'Bricolage_Grotesque',Helvetica] font-extrabold text-white text-[70px] text-center tracking-[0] leading-[48px] whitespace-nowrap">
            OUR CORE VALUES ✨
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 xl:gap-20 mb-16">
        {coreValuesData.map((value, index) => (
          <div key={index} className="relative">
            <div className="w-[375px] h-[375px] bg-[#2c2c2c] mb-6">
              <img
                className="w-full h-full object-cover"
                alt={value.title}
                src={value.image}
              />
            </div>

            <Card className="bg-transparent border-none">
              <CardContent className="p-0">
                <div className="flex flex-col items-start justify-center gap-3">
                  <div className="flex items-center justify-between w-full">
                    <div className="font-medium text-white text-2xl xl:text-2xl tracking-[0] leading-[normal] whitespace-nowrap">
                      {value.title}
                    </div>
                    <img
                      className="w-[35px] h-[20px]"
                      alt="Arrow"
                      src="/Icon/Arrow.svg"
                    />
                  </div>

                  <img
                    className="w-full h-px object-cover"
                    alt="Line"
                    src="/Image/Line.png"
                  />

                  <div className="[font-family:'Montserrat',Helvetica] font-medium text-white text-sm tracking-[0] leading-[25px]">
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
