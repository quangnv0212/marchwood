import React from "react";
import Unlease from "@/assets/images/unlease.png";
import Drive from "@/assets/images/drive_progress.png";
import Make from "@/assets/images/make_a_different.png";
import Image from "next/image";

export default function WhatWeDo() {
  const listData = [
    {
      title: "Unleash your potential.",
      content:
        "Seize your moment. Discover life-changing opportunities with dynamic organisations in the building services design industry.",
      image: Unlease,
    },
    {
      title: "Drive progress..",
      content:
        "Fuel new possibilities and connect with the human capital that ignites success.",
      image: Drive,
    },
    {
      title: "Make a difference.",
      content:
        "Accelerate your career and earning potential by performing at the highest level.",
      image: Make,
    },
  ];
  return (
    <div className="md:pt-10 p-3">
      <p className="md:text-3xl text-xl mb-3 font-semibold text-center md:px-64 md:pb-10">
        By bringing skilled people together, we unleash potential and drive
        progress for everyone.
      </p>
      <div className="md:grid md:grid-cols-3 flex flex-col md:px-20 items-center gap-4 text-center justify-center">
        {listData.map((data) => (
          <div
            key={data.title}
            className="flex flex-col gap-2 items-start bg-[#182A3E]"
          >
            <Image
              src={data.image.src}
              alt={data.title}
              width={300}
              height={300}
              className="w-full object-cover"
            />
            <div className="md:px-7 md:py-4 flex flex-col p-2 gap-3">
              <p className="md:text-3xl text-white font-semibold text-left md:h-24">
                {data.title}
              </p>
              <p className="text-left text-white md:h-24 mb-2 ">
                {data.content}
              </p>
              <div className="w-full flex justify-center">
                <button className="border border-white md:p-4 p-2 text-white flex-1 mb-2">
                  Search job
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
