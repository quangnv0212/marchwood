"use client";
import IcAviation from "@/assets/images/ic_aviation.png";
import IcFilter from "@/assets/images/ic_filter.svg";
import IcLeftArr from "@/assets/images/ic_leftarrow.png";
import IcLocation from "@/assets/images/ic_location.png";
import IcMechanical from "@/assets/images/ic_mechanical.png";
import IcMoney from "@/assets/images/ic_money.png";
import IcPermanent from "@/assets/images/ic_permanance.png";
import IcRightArr from "@/assets/images/ic_rightarrow.png";
import Checkbox from "@mui/material/Checkbox";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

import UploadCV from "@/components/job-seekers-page/uploadCV";
export default function Page() {
  const data = [
    {
      title: "INDUSTRY",
      items: ["Building Services", "Recruitment"],
      isMore: false,
    },
    {
      title: "JOB SECTOR",
      items: [
        "Mechanical Engineering",
        "Electrical Engineering",
        "Public Health",
        "Sustainability",
        "CAD",
      ],
      isMore: true,
    },
    {
      title: "INDUSTRY SECTOR",
      items: ["Aviation", "Commercial", "Data Centres", "Defence", "Education"],
      isMore: true,
    },
    {
      title: "LOCATION",
      items: ["London", "South East", "South West", "Midlands"],
      isMore: true,
    },
    {
      title: "CONTRACT TYPE",
      items: ["Permanent", "Contract", "Temporary", "Freelance"],
      isMore: false,
    },
  ];
  const jobList = [
    {
      title: "Mechanical Engineer",
      location: "SHOREDITCH, LONDON",
      description:
        "Snippet: Lorem ipsum dolor sit amet consectetur. Purus purus duis eget interdum integer orci enim. Sapien etiam ac porttitor...",
    },
    {
      title: "Electrical Engineer",
      location: "SHOREDITCH, LONDON",
      description:
        "Snippet: Lorem ipsum dolor sit amet consectetur. Purus purus duis eget interdum integer orci enim. Sapien etiam ac porttitor...",
    },
    {
      title: "Public Health Engineer",
      location: "SHOREDITCH, LONDON",
      description:
        "Snippet: Lorem ipsum dolor sit amet consectetur. Purus purus duis eget interdum integer orci enim. Sapien etiam ac porttitor...",
    },
    {
      title: "Sustainability Engineer",
      location: "SHOREDITCH, LONDON",
      description:
        "Snippet: Lorem ipsum dolor sit amet consectetur. Purus purus duis eget interdum integer orci enim. Sapien etiam ac porttitor...",
    },
    {
      title: "CAD Engineer",
      location: "SHOREDITCH, LONDON",
      description:
        "Snippet: Lorem ipsum dolor sit amet consectetur. Purus purus duis eget interdum integer orci enim. Sapien etiam ac porttitor...",
    },
  ];
  const benefit = [
    {
      title: "Aviation",
      icon: IcAviation,
    },
    {
      title: "Mechanical",
      icon: IcMechanical,
    },

    {
      title: "Permanent",
      icon: IcPermanent,
    },

    {
      title: "UP TO £100,000",
      icon: IcMoney,
    },
  ];

  const [isDivVisible, setIsDivVisible] = useState(true);
  const divRef = useRef<any>(null);
  useEffect(() => {
    const clickHandler = (event: any) => {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setIsDivVisible(false);
      }
    };

    document.addEventListener("mousedown", clickHandler);

    return () => {
      document.removeEventListener("mousedown", clickHandler);
    };
  }, []);
  return (
    <div className="bg-primary text-white">
      <div className="flex flex-col gap-12 md:p-10 md:px-16 p-3">
        <p className="text-base">
          <Link href={"/"}>HOME</Link> /{" "}
          <Link href={"/vacancies"}>VACANCIES</Link> /{" "}
          <Link href={"#"}>SEARCH RESULTS</Link>
        </p>
        <p className="md:text-3xl text-2xl font-semibold">
          Find your dream job.
        </p>

        <div className="flex md:flex-row flex-col md:gap-8 gap-3">
          <select
            name=""
            id=""
            className="bg-transparent p-2 border md:w-1/3 w-full"
          >
            <option value="">Keyword</option>
          </select>
          <select name="" id="" className="bg-transparent p-2 border md:w-1/3">
            <option value="">Location</option>
          </select>
          <div className="mobile">
            <button
              onClick={() => {
                setIsDivVisible(true);
              }}
              className="flex w-full items-center justify-center gap-3 border p-2"
            >
              <Image
                src={IcFilter.src}
                width={24}
                height={24}
                className="text-white"
                alt=""
              />
              Filter
            </button>
            {isDivVisible && (
              <div ref={divRef} className="bg-white text-primary">
                {data.map((item, idx) => (
                  <div key={idx} className="border text-sm border-primary p-3">
                    <p>{item.title}</p>
                    {item.items.map((item, idx) => (
                      <div key={idx} className="flex items-center">
                        <Checkbox {...label} className="border-white" />
                        <p>{item}</p>
                      </div>
                    ))}
                    {item.isMore && (
                      <button className="border border-primary w-full p-1">
                        More
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
          <button className="border p-2 md:w-1/4">Search</button>
        </div>
      </div>
      <div className="">
        <div className="bg-white md:p-16 text-primary flex md:gap-16">
          <div className="md:w-1/3 flex flex-col gap-3">
            <div className="desktop">
              {data.map((item, idx) => (
                <div key={idx} className="border border-primary  p-6">
                  <p>{item.title}</p>
                  {item.items.map((item, idx) => (
                    <div key={idx} className="flex items-center">
                      <Checkbox {...label} />
                      <p>{item}</p>
                    </div>
                  ))}
                  {item.isMore && (
                    <button className="border border-primary w-full p-3 mt-2">
                      More
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-10 p-3 py-10">
            {jobList.map((job, idx) => (
              <div key={idx} className="flex flex-col gap-4 border-b-2 pb-7">
                <p className="md:text-2xl text-xl font-semibold">{job.title}</p>
                <p className="md:text-lg text-sm flex gap-2 items-center">
                  <img src={IcLocation.src} alt="" />
                  {job.location}
                </p>
                <p className="text-base">{job.description}</p>
                <div className="grid md:grid-cols-4 grid-cols-2 justify-between uppercase">
                  {benefit.map((item, idx) => (
                    <div key={idx} className="flex flex-col gap-2 items-center">
                      <img src={item.icon.src} alt="" />
                      <p>{item.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white text-primary flex justify-center pb-10">
          <button className="border p-3 border-primary px-20 hover:bg-primary hover:text-white">
            View all jobs
          </button>
        </div>
      </div>

      <div className="bg-white text-primary pb-10 text-sm md:text-xl ">
        <div className="flex justify-between md:px-60 p-3">
          <div className="flex gap-2 items-center">
            <img src={IcLeftArr.src} alt="" />
            <p>PREV</p>
          </div>
          <div className="flex gap-3">
            <p className="border text-base font-bold p-1 cursor-pointer px-3 border-[#B1844D]">
              1
            </p>
            <p className="text-base font-bold p-1 px-3 cursor-pointer ">2</p>
            <p className="text-base font-bold p-1 px-3 cursor-pointer ">3</p>
            <p className="text-base font-bold p-1 px-3 cursor-pointer ">4</p>
          </div>
          <div className="flex gap-2 items-center">
            <p>NEXT</p>
            <img src={IcRightArr.src} alt="" />
          </div>
        </div>
      </div>
      <UploadCV title="Apply now" />
    </div>
  );
}
