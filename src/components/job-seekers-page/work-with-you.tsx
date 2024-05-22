import React from "react";
import Staff from "@/assets/images/Staff Image.png";
export default function WorkWithYou() {
  const data = [
    {
      imageSrc: Staff.src,
      title: "TITLE",
    },
    {
      imageSrc: Staff.src,
      title: "TITLE",
    },
    {
      imageSrc: Staff.src,
      title: "TITLE",
    },
    {
      imageSrc: Staff.src,
      title: "TITLE",
    },
    {
      imageSrc: Staff.src,
      title: "TITLE",
    },
    {
      imageSrc: Staff.src,
      title: "TITLE",
    },
    {
      imageSrc: Staff.src,
      title: "TITLE",
    },
    {
      imageSrc: Staff.src,
      title: "TITLE",
    },
  ];
  return (
    <div className="p-16 flex flex-col gap-10">
      <p className="text-center font-semibold text-xl">
        How we will work with you
      </p>
      <div className="grid grid-cols-4 gap-6">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-4">
            <img src={item.imageSrc} alt={item.title} className="h-20" />
            <p className="text-center">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
