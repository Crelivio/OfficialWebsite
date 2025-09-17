import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const DesignCard = (): React.JSX.Element => {
  return (
    <Card className="w-full max-w-[375px] bg-blue-600">
      <CardContent className="flex flex-col gap-[18px] p-[31px_27px]">
        <div className="flex items-center gap-4">
          <h2 className="font-display font-medium text-[#2c2c2c] text-[32px] lg:text-[36px] xl:text-[42px] tracking-[0] leading-[normal]">
            Design
          </h2>
          <img
            className="h-[65px] w-[67px] lg:h-[72px] lg:w-[75px] xl:h-[81px] xl:w-[84px] flex-shrink-0"
            alt="Image"
            src="/Icon/design-icon.svg"
          />
        </div>
        <p className="font-normal text-[#2c2c2c] text-base lg:text-lg tracking-[0] leading-[normal]">
          Crafting innovative and user-focused designs that blend creativity
          with functionality to deliver impactful visual and digital
          experiences.
        </p>
      </CardContent>
    </Card>
  );
};
