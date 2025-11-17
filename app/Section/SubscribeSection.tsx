"use client";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const SubscribeSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
  };
  return (
    <div className="w-full max-w-[95vw] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[900px] xl:max-w-[1100px] h-auto min-h-[180px] sm:min-h-[200px] lg:min-h-[234px] mx-auto bg-blue-500 shadow-[6px_6px_0px_#000000] sm:shadow-[8px_8px_0px_#000000] lg:shadow-[10px_10px_0px_#000000] relative mb-12 sm:mb-16 lg:mb-20 p-4 sm:p-6 lg:p-0">
      
      {/* Mobile Layout */}
      <div className="block lg:hidden">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="flex items-center gap-3">
            <Image
              className="w-[35px] h-[35px] sm:w-[40px] sm:h-[40px]"
              alt="Mail"
              src="/Icon/mail.svg"
              width={40}
              height={40}
            />
            <div className="[font-family:'Clash_Display-Semibold',Helvetica] font-bold text-white text-[28px] sm:text-[36px] tracking-[0] leading-[normal]">
              Subscribe
            </div>
          </div>
          
          <div className="[font-family:'Bricolage_Grotesque',Helvetica] font-normal text-white text-[14px] sm:text-[16px] tracking-[0] leading-[normal]">
            Get occasional design resources by email
          </div>

          <form onSubmit={handleSubmit} className="w-full max-w-[300px] sm:max-w-[400px] space-y-3">
            <div className="w-full h-[45px] sm:h-[50px] bg-[#ffffff] border-[2px] sm:border-[3px] border-solid border-black">
              <Input
                className="w-full h-full bg-transparent border-none text-black text-[14px] sm:text-[16px] px-3"
                type="email"
                placeholder="Enter Your E-Mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <Button type="submit" className="w-full rounded-none bg-[#ffd6c4] h-[45px] sm:h-[50px] hover:bg-[#ffc4a6] cursor-pointer border-[2px] sm:border-[3px] border-solid border-black">
              <div className="[font-family:'Bricolage_Grotesque',Helvetica] font-bold text-[#2c2c2c] text-[14px] sm:text-[16px] tracking-[0] leading-[normal]">
                Subscribe
              </div>
            </Button>
          </form>

          <div className="max-w-[280px] sm:max-w-[350px] [font-family:'Bricolage_Grotesque',Helvetica] font-normal text-white text-[11px] sm:text-[12px] text-center tracking-[0] leading-[normal]">
            <span className="text-[#ffffff]">
              By subscribing you agree to the Terms of Use, our Privacy Policy and our Information collection notice
            </span>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <Image
          className="absolute w-[53px] h-[53px] top-[70px] left-[57px]"
          alt="Mail"
          src="/Icon/mail.svg"
          width={53}
          height={53}
        />

        <div className="absolute top-[70px] left-[120px] [font-family:'Clash_Display-Semibold',Helvetica] font-bold text-white text-[45.4px] text-center tracking-[0] leading-[normal]">
          Subscribe
        </div>

        <div className="absolute top-[130px] left-[68px] [font-family:'Bricolage_Grotesque',Helvetica] font-normal text-white text-[18px] tracking-[0] leading-[normal]">
          Get occasional design resources by email
        </div>

        <form onSubmit={handleSubmit} className="contents">
          <div className="absolute w-[500px] h-[65px] top-[50px] left-[550px] bg-[#ffffff] border-[3px] border-solid border-black">
            <Input
              className="w-full h-full bg-transparent border-none text-black text-[29.3px] px-4"
              type="email"
              placeholder="Enter Your E-Mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <Button type="submit" className="absolute rounded-none w-[180px] top-[53px] left-[867px] bg-[#ffd6c4] h-[58px] hover:bg-[#ffc4a6] cursor-pointer">
            <div className="[font-family:'Bricolage_Grotesque',Helvetica] font-bold text-[#2c2c2c] text-[19.3px] tracking-[0] leading-[normal]">
              Subscribe
            </div>
          </Button>
        </form>

        <div className="absolute w-[400px] top-[130px] left-[610px] [font-family:'Bricolage_Grotesque',Helvetica] font-normal text-white text-sm text-center tracking-[0] leading-[normal]">
          <span className="text-[#ffffff]">
            By subscribing you agree to the Terms of Use, our Privacy Policy and our Information collection notice
          </span>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
