import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const TechnologyCard: React.FC = () => {
  return (
    <Card className="w-full max-w-[270px] bg-blue-500">
      <CardContent className="flex flex-wrap items-start gap-3 p-4">
        <div className="font-display font-medium text-[#2c2c2c] text-[20px] lg:text-[22px] xl:text-[24px] tracking-[0] leading-[normal]">
          Technology
        </div>

        <img
          className="h-[32px] w-[38px] lg:h-[38px] lg:w-[44px] xl:h-[44px] xl:w-[50px]"
          alt="Image"
          src="/Icon/technology-icon.svg"
        />

        <p className="font-normal text-[#2c2c2c] text-sm lg:text-base tracking-[0] leading-[normal]">
          Leveraging advanced technologies and tools to build scalable,
          efficient, and future-ready solutions that enhance performance and
          user engagement.
        </p>
      </CardContent>
    </Card>
  );
};
