import JobSeekersBanner from "@/assets/images/job-seekers-banner.png";
import Link from "next/link";
import { HeaderTransparent } from "../header-transparent";
export default function BannerJobSeekers() {
  const buttons = [
    {
      text: "Search jobs",
      link: "#",
    },
    {
      text: "Submit timesheets",
      link: "#",
    },
  ];
  return (
    <div
      style={{
        backgroundImage: `url(${JobSeekersBanner.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="md:p-10 p-4 md:h-[80vh] flex flex-col gap-10 py-20"
    >
      <HeaderTransparent />
      <div className="flex flex-col justify-center flex-1">
        <p className="font-semibold text-white text-base md:text-xl md:pb-10">
          <Link href={"/"}>HOME</Link> / <Link href={"#"}>JOB SEEKERS</Link>
        </p>
        <p className="text-left md:text-5xl text-2xl text-white font-semibold md:mb-4">
          Unleash your potential.
        </p>
        <div className="flex flex-col md:flex-row md:text-2xl text-base md:gap-20 gap-4">
          {buttons.map((button, index) => (
            <button
              key={index}
              className="md:px-10 md:py-4 border-2 p-2  border-white text-white"
            >
              {button.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
