import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const TechnologyCard: React.FC = () => {
  return (
    <Card className="w-full max-w-[375px] bg-blue-500">
      <CardContent className="flex flex-wrap items-start gap-[18px_16px] p-[31px_27px]">
        <div className="w-fit font-display font-medium text-[#2c2c2c] text-[26px] lg:text-[30px] xl:text-[34px] tracking-[0] leading-[normal]">
          Technology
        </div>

        <img
          className="h-[52px] w-[67px] lg:h-[58px] lg:w-[74px] xl:h-[66px] xl:w-[84px]"
          alt="Image"
          src="/Icon/technology-icon.svg"
        />

        <div className="w-[280px] lg:w-[300px] xl:w-[330px] h-[110px] lg:h-[120px] xl:h-[135px] font-normal text-[#2c2c2c] text-base lg:text-lg tracking-[0] leading-[normal]">
          Leveraging advanced technologies and tools to build scalable,
          efficient, and future-ready solutions that enhance performance and
          user engagement.
        </div>
      </CardContent>
    </Card>
  );
};
