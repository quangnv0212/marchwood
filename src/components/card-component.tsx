import Image, { StaticImageData } from "next/image";
import * as React from "react";
import { ButtonCommon } from "./button-common";

export function CardComponent(data: {
  title: string;
  content: string;
  image: StaticImageData;
  dark?: boolean;
}) {
  return (
    <div
      key={data.title}
      className="flex flex-col gap-2 items-start bg-[#182A3E] pb-5"
    >
      <Image
        src={data?.image?.src}
        alt={data.title}
        width={300}
        height={300}
        className="w-full object-cover"
      />
      <div className="md:px-7 md:py-4 flex flex-col p-2 gap-3">
        <p className="md:text-3xl text-white text-base font-semibold text-left md:h-24">
          {data.title}
        </p>
        <p className="text-left text-white md:h-24 mb-2 text-sm ">
          {data.content}
        </p>
        <div className="w-full flex justify-center">
          <ButtonCommon dark={data.dark}>Search job</ButtonCommon>
        </div>
      </div>
    </div>
  );
}
