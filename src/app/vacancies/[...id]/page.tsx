"use client";

import { Header } from "@/components/header";
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
import BackgroundRight from "@/assets/images/background-right.png";
export interface IAppProps {}

export default function App(props: IAppProps) {
  const [isDivVisible, setIsDivVisible] = useState(true);

  return (
    <div>
      <Header />
      <div
        style={{
          backgroundImage: `url(${BackgroundRight.src})`,
          backgroundSize: "cover",
        }}
        className="flex flex-col gap-12 md:p-10 md:px-16 p-3 bg-primary text-white min-h-[60vh]"
      >
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
          </div>
          <button className="border p-2 md:w-1/4">Search</button>
        </div>
      </div>
    </div>
  );
}
