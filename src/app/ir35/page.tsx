import IR35Banner from "@/assets/images/ir35-banner.png";
import Unlease from "@/assets/images/unlease.png";
import { IntroCommon } from "@/components/intro-common";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import CollapseCommon from "@/components/collapse-common";
export default function Ir35() {
  function CardComponent(data: {
    title: string;
    content: string;
    image: StaticImageData;
  }) {
    return (
      <div
        key={data.title}
        className="flex flex-col gap-2 md:gap-14 items-start bg-[#182A3E] md:pb-20 pb-10"
      >
        <Image
          src={data?.image?.src}
          alt={data.title}
          width={300}
          height={300}
          className=" object-cover w-full"
        />
        <div className="md:px-7 md:py-4 flex flex-col p-2 gap-3 justify-start items-start">
          <p className="md:text-4xl text-white text-base font-semibold text-left">
            IR35
          </p>
          <p className="md:text-4xl text-white text-base font-semibold text-left">
            {data.title}
          </p>
        </div>
        <div className="flex w-full justify-center">
          <button
            className={`hover:bg-black  text-white bg-primary border-white border p-4 md:px-44 text-base md:text-2xl`}
          >
            Read it
          </button>
        </div>
      </div>
    );
  }
  const data = [
    { title: "Heading", content: "ABC" },
    { title: "Heading", content: "ABC" },
    { title: "Heading", content: "ABC" },
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
      image: Unlease,
    },
    {
      title: "Make a difference.",
      content:
        "Accelerate your career and earning potential by performing at the highest level.",
      image: Unlease,
    },
  ];
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${IR35Banner.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="md:p-10 p-4 md:h-[80vh] md:flex md:flex-col justify-center "
      >
        <div className="md:pt-20 md:pb-10 p-2 py-20 flex flex-col gap-6">
          <p className="font-semibold text-white text-base md:text-xl md:pb-10">
            <Link href={"/"}>HOME</Link> /{" "}
            <Link href={"resources"}>RESOURCES</Link> /{" "}
            <Link href={"#"}>IR35</Link>
          </p>
          <p className="text-left md:text-5xl text-2xl text-white font-semibold md:mb-4">
            IR35
          </p>
        </div>
      </div>
      <IntroCommon
        title="Clever Title"
        description="
      Lorem ipsum dolor sit amet consectetur. Purus purus duis eget interdum integer orci enim. Sapien etiam ac porttitor integer eleifend. Turpis ut vulputate dolor nam quis. Netus netus elementum molestie duis. Sed ultrices morbi aliquam dui. Proin etiam odio scelerisque justo elementum elementum volutpat pellentesque velit.
      "
      />
      <div className="text-xl md:p-16 p-3 flex flex-col items-center">
        <div className="text-center mb-10 flex gap-2 md:text-3xl flex-col md:flex-row">
          <p className="text-[#B1844D]">RULES FOR CLIENTS </p>
          <p className="desktop">|</p>
          <p>RULES FOR CONTRACTORS</p>
        </div>
        <div className="grid md:grid-cols-3 md:gap-16 gap-4">
          {data.map((item) => (
            <div
              key={item.content}
              className="flex flex-col gap-4 md:items-start items-center"
            >
              <p className="font-semibold text-3xl">Heading</p>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur. Proin scelerisque morbi
                libero et lectus cursus quis nulla. Ultrices arcu sed nullam
                suscipit sodales bibendum vel. Nulla aliquam mattis praesent
                ligula non consectetur risus eget. Arcu ut vestibulum tristique
                urna. Ut varius fermentum non in viverra sed dignissim varius.
                Tempus congue amet dictumst interdum amet adipiscing. Iaculis
                pulvinar auctor lacus lectus sit tincidunt tincidunt cursus.
                Risus pellentesque pharetra orci viverra nunc dictum gravida.
                Sagittis netus enim lacinia turpis cum iaculis et duis aliquam.
              </p>
            </div>
          ))}
        </div>
      </div>
      <CollapseCommon />
      <div className="md:p-16 p-3 flex flex-col md:gap-16 gap-3">
        <p className="font-semibold md:text-3xl text-2xl">The latest on IR35</p>
        <div className="grid md:grid-cols-3 gap-5 text-white font-semibold">
          {listData.map((data) => (
            <CardComponent
              key={data.content}
              title={data.title}
              content={data.content}
              image={data.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
