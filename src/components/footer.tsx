import React from "react";
import Logo from "@/assets/images/logo.png";
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
    <footer className="flex flex-col gap-10 md:flex-row justify-between md:p-16 md:px-32 p-4 bg-[#192A3E] text-white">
      <div className="flex flex-col md:gap-10 gap-5">
        <div className="flex md:gap-4 justify-between items-center">
          <img src={Logo.src} alt="logo" className="h-10" />
          <button className="border md:p-2 p-2 md:px-16 ">Contact us</button>
        </div>
        <div className="flex md:gap-5 gap-4">
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
      <div className="flex flex-col gap-3">
        <div className="font-semibold flex flex-col gap-2">
          <p className="md:text-right text-center text-xl text-[#B1844D]">
            We are Marchwood.
          </p>
          <p className="md:text-right text-center">
            We connect world-class talent in sustainable building design with
            dynamic organisations.
          </p>
        </div>
        <div className="md:text-right text-center">
          <p>Privacy Policy</p>
          <p>Terms of Business</p>
        </div>
      </div>
    </footer>
  );
}
