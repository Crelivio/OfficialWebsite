"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function DiscoverySection(): React.JSX.Element {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="relative w-full px-2 sm:px-4 md:px-8 lg:px-20 xl:px-[105px] mb-12 sm:mb-16">
      <div className="text-center mb-5 sm:mb-8">
        <div className="[font-family:'Bricolage_Grotesque',Helvetica] font-medium text-white text-[22px] sm:text-[28px] lg:text-[45px] text-center tracking-[0] leading-[normal] mb-2 sm:mb-4">
          Book a Discovery Call
        </div>
        <div className="[font-family:'Bricolage_Grotesque',Helvetica] font-bold text-white text-[12px] sm:text-[16px] lg:text-[20px] text-center tracking-[0] leading-5 sm:leading-7 px-2 sm:px-4">
          Ready to transform your brand? Let&apos;s create something extraordinary together.
        </div>
      </div>
      <form onSubmit={handleSubmit}>
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 items-start justify-center">
        {/* Left side: Name, Mail, Company stacked vertically */}
        <div className="flex flex-col space-y-3 sm:space-y-4 lg:space-y-8 w-full max-w-[400px] sm:max-w-[500px] lg:max-w-lg mx-auto lg:mx-0">
          <div>
            <div className="w-full h-[44px] sm:h-[54px] lg:h-[70px] border-[2px] sm:border-[3px] border-solid border-[#ffffff] shadow-[4px_4px_0px_#ffffff] sm:shadow-[6px_6px_0px_#ffffff] lg:shadow-[10px_10px_0px_#ffffff]">
              <Input
                className="w-full h-full bg-transparent border-none text-white placeholder-white placeholder:text-[0.8rem] sm:placeholder:text-[0.9rem] lg:placeholder:text-[1rem] placeholder:font-bold placeholder-opacity-100"
                type="text"
                name="name"
                placeholder="Name*"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div>
            <div className="w-full h-[44px] sm:h-[54px] lg:h-[70px] border-[2px] sm:border-[3px] border-solid border-[#ffffff] shadow-[4px_4px_0px_#ffffff] sm:shadow-[6px_6px_0px_#ffffff] lg:shadow-[10px_10px_0px_#ffffff]">
              <Input
                className="w-full h-full bg-transparent border-none text-white placeholder-white placeholder:text-[0.8rem] sm:placeholder:text-[0.9rem] lg:placeholder:text-[1rem] placeholder:font-bold placeholder-opacity-100"
                type="email"
                name="email"
                placeholder="Mail*"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div>
            <div className="w-full h-[44px] sm:h-[54px] lg:h-[70px] border-[2px] sm:border-[3px] border-solid border-[#ffffff] shadow-[4px_4px_0px_#ffffff] sm:shadow-[6px_6px_0px_#ffffff] lg:shadow-[10px_10px_0px_#ffffff]">
              <Input
                className="w-full h-full bg-transparent border-none text-white placeholder-white placeholder:text-[0.8rem] sm:placeholder:text-[0.9rem] lg:placeholder:text-[1rem] placeholder:font-bold placeholder-opacity-100"
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        {/* Right side: Message textarea */}
        <div className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-xl mx-auto lg:mx-0">
          <div className="w-full h-[120px] sm:h-[180px] lg:h-[320px] border-[2px] sm:border-[2px] border-solid border-[#ffffff] shadow-[2px_2px_0px_#ffffff] sm:shadow-[4px_4px_0px_#ffffff] lg:shadow-[5px_5px_0px_#ffffff]">
            <Textarea
              className="w-full h-full bg-transparent border-none text-white resize-none placeholder-white placeholder:text-[0.8rem] sm:placeholder:text-[0.9rem] lg:placeholder:text-[1rem] placeholder:font-bold placeholder-opacity-100"
              name="message"
              placeholder="Message*"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>
      <div className="text-center">
        <Button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-md shadow-lg transition-all duration-200"
        >
          Send Message
        </Button>
      </div>
      </form>
    </div>
  );
}
