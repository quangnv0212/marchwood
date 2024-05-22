import AboutUsBanner from "@/assets/images/about-us-banner.png";
import Link from "next/link";
export default function HeroJoinUs() {
  return (
    <div
      style={{
        backgroundImage: `url(${AboutUsBanner.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="md:p-10 p-4 md:h-[80vh] flex flex-col gap-10 py-20 justify-center"
    >
      <p className="font-semibold text-white text-base md:pb-10 md:text-xl">
        <Link href={"/"}>HOME</Link> / <Link href={"#"}>JOIN US</Link>
      </p>
      <p className="text-left md:text-5xl text-2xl text-white font-semibold md:mb-4">
        Lorem Ipsum
      </p>
    </div>
  );
}
