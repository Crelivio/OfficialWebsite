import { ChevronUpIcon } from "lucide-react";
import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FaqSection = (): React.ReactElement => {
  const faqItems = [
    {
      id: "item-1",
      number: "01",
      question: "How does Crelivio work?",
      content: "Crelivio is a creative agency that collaborates with brands to deliver innovative design solutions. We work closely with our clients to understand their vision and goals, and then we craft tailored strategies that combine creativity, technology, and emotional resonance to create impactful brand experiences.",
    },
    {
      id: "item-2",
      number: "02",
      question: "How does your agency approach branding strategy?",
      content: "Our approach to branding strategy is rooted in understanding the core values, mission, and vision of our clients. We conduct thorough market research and competitor analysis to identify unique opportunities for differentiation. From there, we develop a comprehensive branding strategy that encompasses visual identity, messaging, and customer experience to ensure a cohesive and compelling brand presence.",
    },
  ];

  return (
    <div className="w-full h-full pt-14 px-7 sm:px-4 lg:px-12 xl:px-16 py-3 sm:py-5 lg:py-10 flex flex-col justify-center">
      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item, index) => (
          <AccordionItem key={item.id} value={item.id} className={`border-none ${index === 1 ? 'mt-8 sm:mt-8 lg:mt-10' : ''}`}>
            <AccordionTrigger className="hover:no-underline p-0 [&[data-state=open]>div>svg]:rotate-180 min-h-[48px] sm:min-h-[56px] lg:min-h-[72px]">
              <div className="flex items-center gap-1 sm:gap-3 lg:gap-6 xl:gap-8 w-full">
                <div className="[font-family:'Phonk-RegularDEMO',Helvetica] font-extrabold text-black text-[16px] sm:text-[22px] lg:text-[40px] xl:text-[50px] tracking-[0] leading-tight whitespace-nowrap">
                  {item.number}
                </div>
                <div className="flex-1 text-left [font-family:'Bricolage_Grotesque',Helvetica] font-medium text-black text-[13px] sm:text-[16px] lg:text-[28px] xl:text-[36px] tracking-[0] leading-tight">
                  {item.question}
                </div>
                <ChevronUpIcon className="w-5 h-5 sm:w-7 sm:h-7 lg:w-12 lg:h-12 xl:w-[73px] xl:h-[73px] shrink-0 transition-transform duration-200" />
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-0">
              <div className="pt-1 sm:pt-2 lg:pt-4 text-[12px] sm:text-[13px] lg:text-[18px] xl:text-[20px] text-black leading-relaxed">
                {item.content}
              </div>
            </AccordionContent>
            {index < faqItems.length - 1 && (
              <div className="w-full h-[1px] sm:h-[1.5px] lg:h-[3px] bg-black my-2 sm:my-3 lg:my-8"></div>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
