import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const EmotionCard = (): React.JSX.Element => {
  return (
    <Card className="w-full max-w-[270px] bg-blue-500">
      <CardContent className="flex flex-col gap-3 p-4">
        <div className="flex items-center gap-2">
          <h2 className="font-display font-medium text-[#2c2c2c] text-[20px] lg:text-[22px] xl:text-[24px] tracking-[0] leading-[normal]">
            Emotion
          </h2>
          <img
            className="h-[32px] w-[32px] lg:h-[38px] lg:w-[38px] xl:h-[44px] xl:w-[44px] flex-shrink-0"
            alt="Image"
            src="/Icon/emotion-icon.svg"
          />
        </div>
  <p className="font-normal text-[#2c2c2c] text-sm lg:text-base tracking-[0] leading-[normal]">
          Creating meaningful and emotionally resonant experiences that connect
          deeply with audiences, building trust, loyalty, and lasting
          relationships.
        </p>
      </CardContent>
    </Card>
  );
};
