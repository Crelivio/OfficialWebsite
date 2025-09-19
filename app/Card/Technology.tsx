import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const TechnologyCard: React.FC = () => {
  return (
    <Card className="w-full max-w-[200px] sm:max-w-[220px] lg:max-w-[270px] bg-blue-500">
      <CardContent className="flex flex-wrap items-start gap-2 sm:gap-3 p-3 sm:p-4">
        <div className="font-display font-medium text-[#2c2c2c] text-[16px] sm:text-[18px] lg:text-[22px] xl:text-[24px] tracking-[0] leading-[normal]">
          Technology
        </div>

        <img
          className="h-[24px] w-[28px] sm:h-[28px] sm:w-[32px] lg:h-[38px] lg:w-[44px] xl:h-[44px] xl:w-[50px]"
          alt="Image"
          src="/Icon/technology-icon.svg"
        />

        <p className="font-normal text-[#2c2c2c] text-[11px] sm:text-[12px] lg:text-base tracking-[0] leading-[normal]">
          Leveraging advanced technologies and tools to build scalable,
          efficient, and future-ready solutions that enhance performance and
          user engagement.
        </p>
      </CardContent>
    </Card>
  );
};
