import AboutUsBanner from "@/assets/images/about-us-banner.png";
import Link from "next/link";
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
        backgroundImage: `url(${AboutUsBanner.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="md:p-10 p-4 md:h-[80vh] flex flex-col justify-center gap-10 py-20 "
    >
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
  );
}
