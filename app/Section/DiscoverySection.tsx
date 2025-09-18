import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function DiscoverySection(): React.JSX.Element {
  return (
    <div className="relative w-full px-[105px] mb-16">
      <div className="text-center mb-8">
        <div className="[font-family:'Bricolage_Grotesque',Helvetica] font-medium text-white text-[45px] text-center tracking-[0] leading-[normal] mb-4">
          Book a Discovery Call
        </div>
        <div className="[font-family:'Bricolage_Grotesque',Helvetica] font-bold text-white text-[20px] text-center tracking-[0] leading-7">
          Ready to transform your brand? Let's create something extraordinary
          together.
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 mb-8 items-start justify-center">
        {/* Left side: Name, Mail, Company stacked vertically */}
        <div className="flex flex-col space-y-8 flex-1 max-w-lg">
          <div>
            <div className="w-full h-[70px] border-[3px] border-solid border-[#ffffff] shadow-[10px_10px_0px_#ffffff]">
              <Input
                className="w-full h-full bg-transparent border-none text-white placeholder-white placeholder:text-[1rem] placeholder:font-bold placeholder-opacity-100"
                type="text"
                placeholder="Name*"
              />
            </div>
          </div>
          <div>
            <div className="w-full h-[70px] border-[3px] border-solid border-[#ffffff] shadow-[10px_10px_0px_#ffffff]">
              <Input
                className="w-full h-full bg-transparent border-none text-white placeholder-white placeholder:text-[1rem] placeholder:font-bold placeholder-opacity-100"
                type="email"
                placeholder="Mail*"
              />
            </div>
          </div>
          <div>
            <div className="w-full h-[70px] border-[3px] border-solid border-[#ffffff] shadow-[10px_10px_0px_#ffffff]">
              <Input
                className="w-full h-full bg-transparent border-none text-white placeholder-white placeholder:text-[1rem] placeholder:font-bold placeholder-opacity-100"
                type="text"
                placeholder="Company Name"
              />
            </div>
          </div>
        </div>
        {/* Right side: Message textarea */}
        <div className="flex-1 max-w-xl">
          <div className="w-full h-[320px] border-[2px] border-solid border-[#ffffff] shadow-[5px_5px_0px_#ffffff]">
            <Textarea
              className="w-full h-full bg-transparent border-none text-white resize-none placeholder-white placeholder:text-[1rem] placeholder:font-bold placeholder-opacity-100"
              placeholder="Message*"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
