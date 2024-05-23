import React from "react";
import Staff from "@/assets/images/Staff Image.png";
export default function GridListCommon({ title }: { title: string }) {
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
    <div className="md:p-16 flex flex-col md:gap-10">
      <p className="md:text-center text-left font-semibold text-xl md:text-4xl px-3">
        {title}
      </p>
      <div className="grid md:grid-cols-4 md:gap-6 grid-cols-2">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-4 p-3">
            <img
              src={item.imageSrc}
              alt={item.title}
              className="object-cover"
            />
            <p className="text-center md:text-2xl">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
