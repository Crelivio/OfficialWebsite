import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const StrategyCard = (): React.JSX.Element => {
  return (
    <Card className="w-full max-w-[375px] bg-blue-500">
      <CardContent className="flex flex-col gap-[18px] p-[31px_27px]">
        <div className="flex items-center gap-4">
          <h2 className="font-display font-medium text-[#2c2c2c] text-[28px] lg:text-[32px] xl:text-[36px] tracking-[0] leading-[normal]">
            Strategy
          </h2>
          <img
            className="h-[58px] w-[59px] lg:h-[65px] lg:w-[66px] xl:h-[73px] xl:w-[74px] ml-6 lg:ml-8 xl:ml-10"
            alt="Image"
            src="/Icon/strategy-icon.svg"
          />
        </div>
        <p className="font-normal text-[#2c2c2c] text-base lg:text-lg tracking-[0] leading-[normal]">
          Developing clear, actionable strategies that align with business goals
          and ensure brand growth, market positioning, and long-term success.
        </p>
      </CardContent>
    </Card>
  );
};
