"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import StaffImage from "@/assets/images/Staff Image.png";

// Import Swiper styles
import "swiper/css";
export default function ConsultantAboutUs() {
  const data = [
    {
      name: "John Doe",
      title: "CEO",
      image: StaffImage.src,
    },
    {
      name: "Jane Doe",
      title: "CTO",
      image: StaffImage.src,
    },
    {
      name: "John Smith",
      title: "CFO",
      image: StaffImage.src,
    },
    {
      name: "Jane Smith",
      title: "COO",
      image: StaffImage.src,
    },
    {
      name: "Jane Smith",
      title: "COO",
      image: StaffImage.src,
    },
  ];
  return (
    <div className="flex flex-col gap-5 py-6 px-10">
      <p className="text-xl md:text-3xl font-semibold">Meet your consultants</p>
      <div className="">
        <Swiper spaceBetween={5} slidesPerView={4}>
          {data.map((consultant) => (
            <SwiperSlide key={consultant.name}>
              <img
                src={consultant.image}
                alt={consultant.name}
                className="object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
