import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const services = [
  {
    title: "Strategic Brand Development",
    description:
      "Deep-dive research and strategic positioning that gives your brand unshakeable foundation.",
  },
  {
    title: "Brand Communication Strategy",
    description:
      "Voice, tone, and messaging frameworks that speak directly to your audience.",
  },
  {
    title: "Visual Identity Systems",
    description:
      "Logo design, typography, color systems that create instant recognition and lasting impact.",
  },
  {
    title: "Marketing Collateral",
    description:
      "Print and digital materials that amplify your message across every touchpoint.",
  },
  {
    title: "Digital Solutions (Mobile & Web)",
    description:
      "Websites and digital experiences that convert visitors into customers and customers into advocates.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "DISCOVERY",
    description: "Deep research into your market, competitors, and audience.",
  },
  {
    number: "02",
    title: "STRATEGY",
    description: "Strategic positioning and brand architecture development.",
  },
  {
    number: "03",
    title: "IDENTITY",
    description: "Visual identity creation and system development.",
  },
  {
    number: "04",
    title: "ACTIVATION",
    description: "Launch strategy and brand implementation across channels.",
  },
];

export const BrandSection: React.FC = () => {
  return (
    <section className="w-full bg-neutral-900 relative">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Text */}
        <div className="max-w-5xl mx-auto text-center mb-20">
          <h1 className="[font-family:'Bricolage_Grotesque',Helvetica] font-semibold text-white text-3xl tracking-[1.00px] leading-[65px]">
            We transform brands into timeless stories that spark emotion, build
            trust, and scale with clarity, creativity, and purpose.
          </h1>
        </div>

        {/* Hero Image */}
        <div className="mb-20">
          <img
            className="w-full max-w-5xl mx-auto h-auto object-cover"
            alt="Man image"
            src="/Image/hero.png"
          />
        </div>

        {/* Brand Section */}
        <div className="mb-16">
          <Separator className="mb-8 bg-white/20" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="[font-family:'Bricolage_Grotesque',Helvetica] font-semibold text-white text-[46px] leading-[60px] mb-4">
                Brand
              </h2>
            </div>

            <div>
              <p className="[font-family:'Bricolage_Grotesque',Helvetica] font-medium text-white text-lg tracking-[1.00px] leading-[27px]">
                At Crelivio, we use strategy, design, and digital marketing to
                help brands grow with intention. By combining clear positioning,
                data-driven insights, and creative execution, we build systems
                that strengthen brand identity, attract the right audience, and
                drive measurable business results.
              </p>
            </div>
          </div>

          <Separator className="mt-8 bg-white/20" />
        </div>

        {/* What We Do Section */}
        <div className="mb-20">
          <div className="text-center mb-16 relative">
            <h2 className="[font-family:'Bricolage_Grotesque',Helvetica] font-extrabold text-deep-black text-[45px] leading-[60px] absolute inset-0 flex items-center justify-center">
              WHAT WE DO
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.slice(0, 3).map((service, index) => (
              <div key={index} className="flex flex-col gap-3">
                <div className="w-12 h-12 bg-dark-blue rounded-3xl" />
                <h3 className="[font-family:'Bricolage_Grotesque',Helvetica] font-bold text-white text-[25px] leading-8">
                  {service.title}
                </h3>
                <p className="[font-family:'Montserrat',Helvetica] font-medium text-white text-xl leading-6 line-clamp-3">
                  {service.description}
                </p>
                <Separator className="bg-white/20" />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {services.slice(3).map((service, index) => (
              <div key={index + 3} className="flex flex-col gap-3">
                <div className="w-12 h-12 bg-dark-blue rounded-3xl" />
                <h3 className="[font-family:'Bricolage_Grotesque',Helvetica] font-bold text-white text-[25px] leading-8">
                  {service.title}
                </h3>
                <p className="[font-family:'Montserrat',Helvetica] font-medium text-white text-xl leading-6">
                  {service.description}
                </p>
                <Separator className="bg-white/20" />
              </div>
            ))}
          </div>

          <div className="flex justify-end">
            <img className="w-[247px] h-[247px]" alt="Group" src="/group.png" />
          </div>
        </div>

        {/* Illustration Section */}
        {/* <div className="mb-20">
          <div className="bg-white p-8 rounded-lg">
            <div className="relative w-full h-[741px]">
              <img
                className="absolute w-[98.90%] h-[99.81%] top-0 left-0"
                alt="Group"
                src="/group-2.png"
              />
              <div className="absolute w-[99.93%] h-[94.70%] top-[5.30%] left-0">
                <img
                  className="absolute w-full h-[49.64%] top-[50.29%] left-0"
                  alt="Group"
                  src="/group-3.png"
                />
                <img
                  className="absolute w-[43.60%] h-[57.02%] top-0 left-[32.22%]"
                  alt="Group"
                  src="/group-4.png"
                />
                <div className="absolute w-[36.44%] h-[25.94%] top-[18.47%] left-[22.66%]">
                  <div className="absolute w-[47.25%] h-full top-0 left-0">
                    <img
                      className="absolute w-[41.26%] h-[38.56%] top-[4.93%] left-0"
                      alt="Group"
                      src="/group-7.png"
                    />
                    <div className="absolute w-[84.57%] h-[98.90%] top-0 left-[13.55%] rotate-[0.64deg] [-webkit-text-stroke:1px_#92cdfe] [font-family:'Quicksand',Helvetica] font-bold text-transparent text-[32.2px] tracking-[0] leading-[normal]">
                      ?
                    </div>
                  </div>
                  <img
                    className="absolute w-[18.32%] h-[36.23%] top-[16.20%] left-[81.57%]"
                    alt="Group"
                    src="/group-6.png"
                  />
                </div>
                <img
                  className="absolute w-[95.88%] h-[42.32%] top-[3.01%] left-[2.56%]"
                  alt="Group"
                  src="/group-5.png"
                />
              </div>
              <img
                className="absolute w-[97.13%] h-[85.62%] top-[14.38%] left-0"
                alt="Group"
                src="/group-1.png"
              />
            </div>
          </div>
        </div> */}

        {/* How We Work Section */}
        <div>
          <div className="text-center mb-16 relative">
            <h2 className="[font-family:'Bricolage_Grotesque',Helvetica] font-extrabold text-deep-black text-[79px] leading-[60px] absolute inset-0 flex items-center justify-center">
              HOW WE WORK
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-11">
            {processSteps.map((step, index) => (
              <Card
                key={index}
                className="bg-white shadow-[10px_10px_0px_#000000] border-0"
              >
                <CardContent className="p-8 flex flex-col gap-[18px] h-full">
                  <div className="[font-family:'Bricolage_Grotesque',Helvetica] font-extrabold text-[#2c2c2c] text-[59px] leading-[normal]">
                    {step.number}
                  </div>
                  <h3 className="[font-family:'Bricolage_Grotesque',Helvetica] font-extrabold text-super-deep-gray text-[32px] leading-8">
                    {step.title}
                  </h3>
                  <p className="[font-family:'Montserrat',Helvetica] font-medium text-super-deep-gray text-[19px] leading-6 flex-1">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
