import Link from "next/link";
import React from "react";
import IcArrDown from "@/assets/images/ic_arrdown.png";
import Specialist from "@/assets/images/Special.png";
import Unlease from "@/assets/images/unlease.png";
import Drive from "@/assets/images/drive_progress.png";
import Make from "@/assets/images/make_a_different.png";
import Quote from "@/assets/images/quote.png";
import Image, { StaticImageData } from "next/image";
import { ButtonCommon } from "@/components/button-common";
export default function Page() {
  function CardComponent(data: {
    title: string;
    content: string;
    image: StaticImageData;
  }) {
    return (
      <div
        key={data.title}
        className="flex flex-col gap-2 md:gap-14 items-start bg-[#182A3E] md:pb-20 pb-10"
      >
        <Image
          src={data?.image?.src}
          alt={data.title}
          width={300}
          height={300}
          className=" object-cover w-full"
        />
        <div className="md:px-7 md:py-4 flex flex-col p-2 gap-3 justify-start items-start">
          <p className="md:text-4xl text-white text-base font-semibold text-left">
            IR35
          </p>
          <p className="md:text-4xl text-white text-base font-semibold text-left">
            {data.title}
          </p>
        </div>
        <div className="flex w-full justify-center">
          <button
            className={`hover:bg-black  text-white bg-primary border-white border p-4 md:px-44 text-base md:text-2xl`}
          >
            Read it
          </button>
        </div>
      </div>
    );
  }

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
      image: Unlease,
    },
    {
      title: "Make a difference.",
      content:
        "Accelerate your career and earning potential by performing at the highest level.",
      image: Unlease,
    },
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
      image: Unlease,
    },
    {
      title: "Make a difference.",
      content:
        "Accelerate your career and earning potential by performing at the highest level.",
      image: Unlease,
    },
  ];
  return (
    <div className="p-3 flex flex-col gap-6 md:p-16 md:gap-10">
      <p className="uppercase font-semibold">
        <Link href={"/"}>HOME</Link> / <Link href={"#"}>RESOURCES</Link> / BLOG
      </p>
      <p className="font-semibold text-3xl">Blog</p>
      <select
        className="p-3 w-80 border-primary border-2 flex justify-between items-center"
        name=""
        id=""
      >
        <option value="">Filter</option>
        <option value="">Option 1</option>
        <option value="">Option 2</option>
      </select>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
        {listData.map((data) => (
          <CardComponent
            key={data.content}
            title={data.title}
            content={data.content}
            image={data.image}
          />
        ))}
      </div>
    </div>
  );
}
