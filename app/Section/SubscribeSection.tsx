import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SubscribeSection = () => {
  return (
    <div className="w-[1100px] h-[234px] mx-auto bg-blue-500 shadow-[10px_10px_0px_#000000] relative mb-20">
      <img
        className="absolute w-[53px] h-[53px] top-[70px] left-[57px]"
        alt="Mail"
        src="/Icon/mail.svg"
      />

      <div className="absolute top-[70px] left-[120px] [font-family:'Clash_Display-Semibold',Helvetica] font-bold text-white text-[45.4px] text-center tracking-[0] leading-[normal]">
        Subscribe
      </div>

      <div className="absolute top-[130px] left-[68px] [font-family:'Bricolage_Grotesque',Helvetica] font-normal text-white text-[18px] tracking-[0] leading-[normal]">
        Get occasional design resources by email
      </div>

      <div className="absolute w-[500px] h-[65px] top-[50px] left-[550px] bg-[#ffffff] border-[3px] border-solid border-black">
        <Input
          className="w-full h-full bg-transparent border-none text-black text-[29.3px] px-4"
          placeholder="Enter Your E-Mail"
        />
      </div>

      <Button className="absolute rounded-none w-[180px] top-[53px] left-[867px] bg-[#ffd6c4] h-[58px] hover:bg-[#ffc4a6] cursor-pointer">
        <div className="[font-family:'Bricolage_Grotesque',Helvetica]  font-bold text-[#2c2c2c] text-[19.3px] tracking-[0] leading-[normal]">
          Subscribe
        </div>
      </Button>

      <div className="absolute w-[400px] top-[130px] left-[610px] [font-family:'Bricolage_Grotesque',Helvetica] font-normal text-white text-sm text-center tracking-[0] leading-[normal]">
        <span className="text-[#ffffff]">
          By subscribing you agree to the Terms of Use, our Privacy Policy and
          our Information collection notice
        </span>
      </div>
    </div>
  );
};

export default SubscribeSection;
