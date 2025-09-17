import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const visionMissionData = [
  {
    id: "vision",
    title: "Our Vision",
    content:
      "At Crelivio we aim to become the go-to creative partner for ambitious brands seeking to make their mark through bold, innovative, and emotionally resonant design experiences.",
    iconSrc: "/Image/vision-icon.png",
    imageSrc: "/Image/mask-group.png",
    imageAlt: "Vision illustration",
    imagePosition: "right",
  },
  {
    id: "mission",
    title: "Our Mission",
    content:
      "To become the go-to creative partner for ambitious brands seeking to make their mark through bold, innovative, and emotionally resonant design experiences.",
    iconSrc: "/Image/vision-icon.png",
    imageSrc: "/Image/mission.png",
    imageAlt: "Mission illustration",
    imagePosition: "left",
  },
];

export const SubTitle: React.FC = () => {
  return (
    <section className="w-full px-6 relative pb-20">
      <img
        className="absolute w-[140px] h-[140px] right-[130px] hidden lg:block"
        alt="Decorative group"
        src="/Image/group.png"
      />

      <div className="max-w-7xl mx-auto px-2 lg:px-8 xl:px-16">
        <header className="mb-8 lg:mb-10">
          <h1 className="max-w-2xl font-display font-extrabold text-white text-3xl md:text-4xl lg:text-[48px] xl:text-[56px] tracking-[-2.00px] leading-tight lg:leading-[54px] xl:leading-[62px]">
            BRAND-FIRST.
            <br />
            PURPOSE-DRIVEN. INNOVATION-LED.
          </h1>
        </header>

        <div className="space-y-8 lg:space-y-12">
          {visionMissionData.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                item.imagePosition === "left" ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full lg:w-auto lg:flex-1 max-w-md xl:max-w-lg">
                <Card className="relative bg-white border-0 shadow-[6px_6px_0px_#0358dc] lg:shadow-[8px_8px_0px_#0358dc] rounded-[24px]">
                  <CardContent className="px-4 py-2 lg:px-6 lg:py-3 xl:px-8 xl:py-4 min-h-[120px] lg:min-h-[140px] xl:min-h-[160px] flex flex-col justify-center relative">
                    <h2 className="font-display font-extrabold text-black text-2xl lg:text-[36px] xl:text-[42px] tracking-[0] leading-tight lg:leading-[42px] xl:leading-[48px] mb-4 lg:mb-6">
                      {item.title}
                    </h2>

                    <p className="font-medium text-black text-base lg:text-[18px] xl:text-[20px] tracking-[0] leading-6 lg:leading-7 xl:leading-8 mb-6 lg:mb-8">
                      {item.content}
                    </p>

                    <div className="flex justify-end">
                      <img
                        className="w-[53px] h-[53px]"
                        alt="Card icon"
                        src={item.iconSrc}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="w-full lg:w-auto lg:flex-1 flex justify-center">
                <img
                  className="w-full max-w-[260px] lg:max-w-[320px] xl:max-w-[380px] h-auto object-contain"
                  alt={item.imageAlt}
                  src={item.imageSrc}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
