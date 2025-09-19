import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

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
      <div className="container mx-auto px-4 py-8 sm:py-10 lg:py-12">
        {/* Back to Home Navigation */}
        <div className="mb-6 sm:mb-8">
          <Link href="/" className="inline-block px-3 sm:px-4 lg:px-5 py-2 rounded-lg bg-blue-700 text-white font-semibold hover:bg-blue-800 transition-colors text-[12px] sm:text-[14px] lg:text-[16px]">
            ← Back to Home
          </Link>
        </div>
        {/* Hero Text */}
        <div className="max-w-5xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20">
          <h1 className="[font-family:'Bricolage_Grotesque',Helvetica] font-semibold text-white text-[20px] sm:text-[24px] lg:text-3xl tracking-[1.00px] leading-[32px] sm:leading-[42px] lg:leading-[65px] px-4">
            We transform brands into timeless stories that spark emotion, build
            trust, and scale with clarity, creativity, and purpose.
          </h1>
        </div>

        {/* Hero Image */}
        <div className="mb-8 sm:mb-10">
          <img
            className="w-full max-w-7xl mx-auto h-auto object-cover rounded-lg"
            alt="Man image"
            src="/Image/hero.png"
          />
        </div>

        {/* Brand Section */}
        <div className="mb-12 sm:mb-16">
          <Separator className="mb-6 sm:mb-8 bg-white/20" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
            <div>
              <h2 className="[font-family:'Bricolage_Grotesque',Helvetica] font-semibold text-white text-[24px] sm:text-[30px] lg:text-[36px] leading-[40px] sm:leading-[50px] lg:leading-[60px] mb-4">
                Brand
              </h2>
            </div>

            <div>
              <p className="[font-family:'Bricolage_Grotesque',Helvetica] font-medium text-white text-[12px] sm:text-[13px] lg:text-sm tracking-[1.00px] leading-[22px] sm:leading-[25px] lg:leading-[27px]">
                At Crelivio, we use strategy, design, and digital marketing to
                help brands grow with intention. By combining clear positioning,
                data-driven insights, and creative execution, we build systems
                that strengthen brand identity, attract the right audience, and
                drive measurable business results.
              </p>
            </div>
          </div>

          <Separator className="mt-6 sm:mt-8 bg-white/20" />
        </div>

        {/* What We Do Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <div className="text-center mb-12 sm:mb-14 lg:mb-16 relative">
            <h2 className="[font-family:'Bricolage_Grotesque',Helvetica] font-extrabold text-deep-black text-[28px] sm:text-[35px] lg:text-[45px] leading-[40px] sm:leading-[50px] lg:leading-[60px] absolute inset-0 flex items-center justify-center">
              WHAT WE DO
            </h2>
          </div>
          <div className="h-12 sm:h-16 lg:h-20" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 mb-8 sm:mb-10">
            {services.slice(0, 3).map((service, index) => (
              <div key={index} className="flex flex-col gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-blue-700 rounded-3xl" />
                <h3 className="[font-family:'Bricolage_Grotesque',Helvetica] font-bold text-white text-[16px] sm:text-[18px] lg:text-[20px] leading-6 sm:leading-7 lg:leading-8">
                  {service.title}
                </h3>
                <p className="[font-family:'Montserrat',Helvetica] font-medium text-white text-sm leading-6 line-clamp-3">
                  {service.description}
                </p>
                <Separator className="bg-white/20" />
              </div>
            ))}
          </div>

          {/* Second grid for last two services, same style as first grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {services.slice(3).map((service, index) => (
              <div key={index + 3} className="flex flex-col gap-3">
                <div className="w-12 h-12 bg-blue-700 rounded-3xl" />
                <h3 className="[font-family:'Bricolage_Grotesque',Helvetica] font-bold text-white text-[20px] leading-8">
                  {service.title}
                </h3>
                <p className="[font-family:'Montserrat',Helvetica] font-medium text-white text-sm leading-6 line-clamp-3">
                  {service.description}
                </p>
                <Separator className="bg-white/30" />
              </div>
            ))}
          </div>
        </div>

        {/* Illustration image */}
        <div className="mt-15">
          <img
            className="w-full max-w-7xl mx-auto h-auto object-cover"
            alt="Illustration"
            src="/Image/brand-illustration.png"
          />
        </div>

        {/* How We Work Section */}
        <div className="mt-40">
          <div className="text-center relative bottom-20">
            <h2 className="[font-family:'Bricolage_Grotesque',Helvetica] font-extrabold text-[40px] leading-[60px] absolute inset-0 flex items-center justify-center">
              HOW WE WORK
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-11">
            {processSteps.map((step, index) => (
              <Card
                key={index}
                className="bg-white rounded-none"
              >
                <CardContent className="p-8 flex flex-col gap-[18px] h-full">
                  <div className="[font-family:'Bricolage_Grotesque',Helvetica] font-extrabold text-[#2c2c2c] text-[30px] leading-[normal]">
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
