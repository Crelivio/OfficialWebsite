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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! We'll get back to you soon.",
        });
        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
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
      {/* Success/Error Message */}
      {submitStatus.type && (
        <div className="text-center mb-4">
          <div
            className={`inline-block px-6 py-3 rounded-md font-bold ${
              submitStatus.type === "success"
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
            }`}
          >
            {submitStatus.message}
          </div>
        </div>
      )}
      <div className="text-center">
        <div className="inline-block">
          <div className="border-[2px] sm:border-[3px] border-solid border-[#ffffff] shadow-[4px_4px_0px_#ffffff] sm:shadow-[6px_6px_0px_#ffffff] lg:shadow-[8px_8px_0px_#ffffff] hover:shadow-[6px_6px_0px_#ffffff] sm:hover:shadow-[8px_8px_0px_#ffffff] lg:hover:shadow-[10px_10px_0px_#ffffff] transition-all duration-200">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-transparent hover:bg-white/10 text-white px-6 sm:px-8 lg:px-12 py-4 sm:py-5 lg:py-6 text-[0.9rem] sm:text-[1rem] lg:text-[1.1rem] font-bold border-none shadow-none h-auto"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </div>
      </div>
      </form>
    </div>
  );
}
