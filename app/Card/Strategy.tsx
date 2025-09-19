import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const StrategyCard = (): React.JSX.Element => {
  return (
    <Card className="w-full max-w-[200px] sm:max-w-[220px] lg:max-w-[270px] bg-blue-500">
      <CardContent className="flex flex-col gap-2 sm:gap-3 p-3 sm:p-4">
        <div className="flex items-center gap-1 sm:gap-2">
          <h2 className="font-display font-medium text-[#2c2c2c] text-[16px] sm:text-[18px] lg:text-[22px] xl:text-[24px] tracking-[0] leading-[normal]">
            Strategy
          </h2>
          <img
            className="h-[24px] w-[24px] sm:h-[28px] sm:w-[28px] lg:h-[38px] lg:w-[38px] xl:h-[44px] xl:w-[44px] ml-1 sm:ml-2 lg:ml-3 xl:ml-4"
            alt="Image"
            src="/Icon/strategy-icon.svg"
          />
        </div>
        <p className="font-normal text-[#2c2c2c] text-[11px] sm:text-[12px] lg:text-base tracking-[0] leading-[normal]">
          Developing clear, actionable strategies that align with business goals
          and ensure brand growth, market positioning, and long-term success.
        </p>
      </CardContent>
    </Card>
  );
};
