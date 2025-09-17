import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const EmotionCard = (): React.JSX.Element => {
  return (
    <Card className="w-full max-w-[375px] bg-blue-500">
      <CardContent className="flex flex-col gap-[18px] p-[27px_27px_31px_27px]">
        <div className="flex items-center gap-4">
          <h2 className="font-display font-medium text-[#2c2c2c] text-[28px] lg:text-[32px] xl:text-[36px] tracking-[0] leading-[normal]">
            Emotion
          </h2>
          <img
            className="h-[68px] w-[67px] lg:h-[75px] lg:w-[75px] xl:h-[85px] xl:w-[84px] flex-shrink-0"
            alt="Image"
            src="/Icon/emotion-icon.svg"
          />
        </div>
        <p className="font-normal text-[#2c2c2c] text-base lg:text-lg tracking-[0] leading-[normal]">
          Creating meaningful and emotionally resonant experiences that connect
          deeply with audiences, building trust, loyalty, and lasting
          relationships.
        </p>
      </CardContent>
    </Card>
  );
};
