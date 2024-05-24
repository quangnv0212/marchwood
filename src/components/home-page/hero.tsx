"use client";
import Building from "@/assets/images/building.png";
import { useState } from "react";
import { HeaderTransparent } from "../header-transparent";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  width: 1200,
};

export function Hero() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div
      style={{
        backgroundImage: `url(${Building.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="md:px-[76px] md:py-[30px] p-4 md:min-h-[80vh] md: md:flex md:flex-col md:gap-16 justify-center"
    >
      <HeaderTransparent />
      <div className="md:px-32 md:pt-20 md:pb-10 p-2 flex justify-between flex-col">
        <p className="text-center md:text-7xl text-2xl text-white font-semibold md:mb-4">
          We are Marchwood.
        </p>
        <p className="text-center md:text-4xl text-2xl text-white font-semibold">
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
