"use client";
import AboutUsBanner from "@/assets/images/about-us-banner.png";
import Link from "next/link";
import { HeaderTransparent } from "../header-transparent";
export default function HeroAboutUs() {
  return (
    <>
      {/* {isScrollingUp && <Header />} */}
      <div
        style={{
          backgroundImage: `url(${AboutUsBanner.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="md:p-10 p-4 md:min-h-[80vh] flex flex-col gap-10 py-20 z-0"
      >
        <HeaderTransparent />

        <p className="font-semibold text-white text-base md:text-xl md:pb-10 md:pt-16">
          <Link href={"/"}>HOME</Link> / <Link href={"#"}>ABOUT US</Link>
        </p>
        <p className="text-left md:text-5xl text-2xl text-white font-semibold md:mb-4">
          We are Marchwood.
        </p>
        <p className="text-left md:text-5xl text-xl text-white font-semibold md:w-3/4">
          We connect world-class talent in sustainable building design with
          dynamic organisations.
        </p>
      </div>
    </>
  );
}
