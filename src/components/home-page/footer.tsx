import React from "react";
import Logo from "@/assets/images/Logo.png";
import Linkedin from "@/assets/images/LI-White.png";
import WhatsApp from "@/assets/images/WA-White.png";
export default function Footer() {
  const socials = [
    {
      name: "LinkedIn",
      src: Linkedin.src,
    },
    {
      name: "WhatsApp",
      src: WhatsApp.src,
    },
  ];
  return (
    <div className="flex justify-between md:p-16 md:px-32 p-4 bg-[#192A3E] text-white">
      <div className="flex flex-col md:gap-10">
        <div className="flex md:gap-4">
          <img src={Logo.src} alt="logo" className="h-10" />
          <button className="border md:p-2 md:px-16">Contact us</button>
        </div>
        <div className="flex md:gap-5">
          {socials.map((social, indx) => (
            <img
              key={indx}
              src={social.src}
              alt={social.name}
              className="h-6"
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col md:gap-3">
        <div className="font-semibold">
          <p className="text-right text-[#B1844D]">We are Marchwood.</p>
          <p className="text-right">
            We connect world-class talent in sustainable building design
            <br />
            with dynamic organisations.
          </p>
        </div>
        <div className="text-right">
          <p>Privacy Policy</p>
          <p>Terms of Business</p>
        </div>
      </div>
    </div>
  );
}
