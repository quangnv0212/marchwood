import Building from "@/assets/images/building.png";
import LogoWhite from "@/assets/images/logo_white.png";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function Hero() {
  return (
    <div
      style={{
        backgroundImage: `url(${Building.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="md:p-10 p-4 md:h-[80vh] md:flex md:flex-col md:gap-16"
    >
      <div className="md:px-32 md:pt-20 md:pb-10 p-2 py-20 flex justify-between flex-col">
        <p className="text-center md:text-7xl text-2xl text-white font-semibold md:mb-4">
          We are Marchwood.
        </p>
        <p className="text-center md:text-4xl text-2xl text-white font-semibold md:px-60">
          We connect world-class talent in sustainable building design with
          dynamic organisations.
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:text-2xl text-base md:gap-20 gap-4 justify-center">
        <button className="md:px-10 md:py-4 p-2 border border-white text-white">
          Looking for work
        </button>
        <button className="md:px-10 md:py-4 p-2 border border-white text-white">
          Looking for talent
        </button>
      </div>
    </div>
  );
}
