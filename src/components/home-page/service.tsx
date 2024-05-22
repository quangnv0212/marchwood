"use client";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import CAD from "@/assets/images/CAD_1 1.png";
import Leadership from "@/assets/images/Leadership.png";
import MEP from "@/assets/images/MEP.png";
import Specialist from "@/assets/images/Special.png";
import Drive from "@/assets/images/drive_progress.png";
import Make from "@/assets/images/make_a_different.png";
import Quote from "@/assets/images/quote.png";
import Unlease from "@/assets/images/unlease.png";
import Image from "next/image";
import { CardComponent } from "../card-component";
export function Service() {
  const dataList = [
    {
      title: "MEP",
      image: MEP,
    },
    {
      title: "Leadership",
      image: Leadership,
    },
    {
      title: "CAD",
      image: CAD,
    },
    {
      title: "Specialist",
      image: Specialist,
    },
  ];
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
    <>
      <div className="md:py-10 p-3">
        <p className="md:text-3xl text-xl mb-3 font-semibold text-center md:pb-10">
          Recruiting permanent and contract roles in building services design
        </p>
        <div className="flex md:gap-2 text-center items-center justify-between md:px-24 px-5">
          {dataList.map((data) => (
            <div
              key={data.title}
              className="flex items-center justify-center flex-col gap-3"
            >
              <Image
                src={data.image.src}
                alt={data.title}
                width={500}
                height={500}
                className="md:w-[200px] md:h-[200px]  w-[70px] h-[70px] object-cover"
              />
              <p>{data.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="md:pt-10 p-3">
        <p className="md:text-3xl text-xl mb-3 font-semibold text-center md:px-64 md:pb-10">
          By bringing skilled people together, we unleash potential and drive
          progress for everyone.
        </p>
        <div className="desktop">
          <div className="px-16">
            <Swiper
              style={{
                zIndex: 0,
              }}
              spaceBetween={5}
              slidesPerView={3}
            >
              {listData.map((data) => (
                <SwiperSlide key={data.title}>
                  <CardComponent
                    title={data.title}
                    content={data.content}
                    image={data.image}
                    dark
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="mobile">
          <div className="p-3">
            <Swiper
              style={{
                zIndex: 0,
              }}
              spaceBetween={5}
              slidesPerView={1}
            >
              {listData.map((data) => (
                <SwiperSlide key={data.title}>
                  <CardComponent
                    title={data.title}
                    content={data.content}
                    image={data.image}
                    dark
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* {listData.map((data) => (
            <CardComponent
              title={data.title}
              content={data.content}
              image={data.image}
              dark
            />
          ))} */}
      </div>
      <div className="md:px-40 md:py-10 flex flex-col gap-4 p-2">
        <div className="flex justify-center">
          <Image src={Quote} alt="quote" width={80} height={80} />
        </div>
        <p className="text-center md:text-3xl text-xl font-semibold">
          “We are passionate about connecting world-class talent in sustainable
          building design with dynamic organisations.”
        </p>
        <p className="text-center">JOE BLOGGS | XXX COMPANY</p>
      </div>
    </>
  );
}
