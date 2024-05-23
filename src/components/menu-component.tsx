import * as React from "react";
import LogoContactUs from "@/assets/images/logo_contactus.png";
import Image from "next/image";
import Link from "next/link";
export interface IMenuComponentProps {}

export function MenuComponent(props: IMenuComponentProps) {
  const data = [
    {
      title: "About us",
      children: [
        {
          title: "Our story",
          to: "/about-us",
        },
        {
          title: "Meet our team",
          to: "/meet-the-team",
        },
      ],
    },
    {
      title: "Job Seekers",
      children: [
        {
          title: "Job Seekers",
          to: "/job-seekers",
        },
        {
          title: "Vacancies",
          to: "/vacancies",
        },
      ],
    },
    {
      title: "Employers",
      children: [
        {
          title: "Accessing the best talent",
          to: "/ir35",
        },
      ],
    },
    {
      title: "Resources",
      children: [
        {
          title: "IR35",
          to: "/ir35",
        },
        {
          title: "Library/ Blog",
          to: "/blog",
        },
      ],
    },
    {
      title: "Join us",
      children: [
        {
          title: "Careers",
          to: "/join-us",
        },
      ],
    },
  ];
  return (
    <div className="md:p-[69px] bg-primary text-white flex flex-col justify-center items-center">
      <div className="flex flex-col items-center pb-[72px]">
        <Image src={LogoContactUs.src} width={200} height={200} alt="" />
      </div>
      <div className="grid grid-cols-4 gap-20">
        {data.map((x) => {
          return (
            <div key={x.title} className="w-[150px]">
              <p className="uppercase text-[20px] border-b-2 py-2 border-[#B1844D]">
                {x.title}
              </p>
              <div className="flex flex-col gap-1 text-white py-[25px]">
                {x.children.map((y) => {
                  return <Link href={y.to}>{y.title}</Link>;
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex ">
        <button className="border px-[100px] py-[22px]">Contact us</button>
      </div>
    </div>
  );
}
