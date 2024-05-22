"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import StaffImage from "@/assets/images/Staff Image.png";

// Import Swiper styles
import "swiper/css";
export default function Consultants() {
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
    <div className="flex flex-col">
      <div className="flex flex-col md:gap-5 gap-3 md:py-6 md:px-10 p-2">
        <p className="text-xl md:text-3xl font-semibold">
          Meet your consultants
        </p>
        <div className="desktop">
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
        <div className="mobile">
          <Swiper spaceBetween={5} slidesPerView={2}>
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
      <div className="flex flex-col md:gap-5 gap-3 md:py-6 md:px-10 p-2">
        <p className="text-xl md:text-3xl font-semibold">Resources</p>
        <div className="desktop">
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
        <div className="mobile">
          <Swiper spaceBetween={5} slidesPerView={2}>
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
    </div>
  );
}
