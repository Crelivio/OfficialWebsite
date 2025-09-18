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
    <div className="w-full h-full px-4 sm:px-8 lg:px-12 xl:px-16 py-6 lg:py-10 flex flex-col justify-center">
      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item, index) => (
          <AccordionItem key={item.id} value={item.id} className="border-none">
            <AccordionTrigger className="hover:no-underline p-0 [&[data-state=open]>div>svg]:rotate-180">
              <div className="flex items-center gap-4 sm:gap-6 lg:gap-8 w-full">
                <div className="[font-family:'Phonk-RegularDEMO',Helvetica] font-extrabold text-black text-[32px] sm:text-[40px] lg:text-[48px] xl:text-[50px] tracking-[0] leading-tight whitespace-nowrap">
                  {item.number}
                </div>
                <div className="flex-1 text-left [font-family:'Bricolage_Grotesque',Helvetica] font-medium text-black text-[22px] sm:text-[28px] lg:text-[36px] xl:text-[40px] tracking-[0] leading-tight">
                  {item.question}
                </div>
                <ChevronUpIcon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 xl:w-[73px] xl:h-[73px] shrink-0 transition-transform duration-200" />
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-0">
              <div className="pt-2 sm:pt-4 text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[22px] text-black">
                {item.content}
              </div>
            </AccordionContent>
            {index < faqItems.length - 1 && (
              <div className="w-full h-[2px] lg:h-[3px] bg-black my-4 lg:my-8"></div>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
