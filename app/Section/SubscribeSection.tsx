import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SubscribeSection = () => {
  return (
    <div className="w-[1100px] h-[234px] mx-auto bg-blue-500 shadow-[10px_10px_0px_#000000] relative">
      <img
        className="absolute w-[53px] h-[53px] top-[118px] left-[69px]"
        alt="Mail"
        src="/Icon/mail.svg"
      />

      <div className="absolute top-[106px] left-[172px] [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-white text-[85.4px] text-center tracking-[0] leading-[normal]">
        Subscribe
      </div>

      <div className="absolute top-[213px] left-[68px] [font-family:'Bricolage_Grotesque',Helvetica] font-normal text-white text-[28px] tracking-[0] leading-[normal]">
        Get occasional design resources by email
      </div>

      <div className="absolute w-[531px] h-[95px] top-[107px] left-[695px] bg-[#ffffff] border-[3px] border-solid border-black">
        <Input
          className="w-full h-full bg-transparent border-none text-super-deep-gray text-[29.3px] px-4"
          placeholder="Enter Your E-Mail"
        />
      </div>

      <Button className="absolute w-[202px] top-[110px] left-[1021px] bg-light-orange h-auto">
        <div className="[font-family:'Bricolage_Grotesque',Helvetica] font-bold text-[#2c2c2c] text-[29.3px] tracking-[0] leading-[normal]">
          Subscribe
        </div>
      </Button>

      <div className="absolute w-[540px] top-[220px] left-[686px] [font-family:'Bricolage_Grotesque',Helvetica] font-normal text-white text-xl text-center tracking-[0] leading-[normal]">
        <span className="text-[#ffffff]">
          By subscribing you agree to the Terms of Use, our Privacy Policy and
          our Information collection notice
        </span>
      </div>
    </div>
  );
};

export default SubscribeSection;
