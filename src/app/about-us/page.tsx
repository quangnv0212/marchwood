import Drive from "@/assets/images/drive_progress.png";
import Make from "@/assets/images/make_a_different.png";
import Quote from "@/assets/images/quote.png";
import Unlease from "@/assets/images/unlease.png";
import HeroAboutUs from "@/components/about-us-page/hero-about-us";
import Purpose from "@/components/about-us-page/purpose";
import StandFor from "@/components/about-us-page/stand-for";
import { CardComponent } from "@/components/card-component";
import { IntroCommon } from "@/components/intro-common";
import { SliderComponent } from "@/components/slider-component";
import BackgroundRight from "@/assets/images/background-right.png";
import BackgroundLeft from "@/assets/images/back-ground-left.png";
import Image from "next/image";

export default function AboutUsPage() {
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
  ];
  return (
    <div className="">
      <HeroAboutUs />
      <div
        style={{
          backgroundImage: `url(${BackgroundRight.src})`,
          backgroundSize: "cover",
        }}
        className="text-primary"
      >
        <IntroCommon
          description={
            <>
              <p>
                Lorem ipsum dolor sit amet consectetur. Purus purus duis eget
                interdum integer orci enim. Sapien etiam ac porttitor integer
                eleifend. Turpis ut vulputate dolor nam quis. Netus netus
                elementum molestie duis. Sed ultrices morbi aliquam dui. Proin
                etiam odio scelerisque justo elementum elementum volutpat
                pellentesque velit.
              </p>
              <br />
              <p>
                Velit non tincidunt netus ac nunc mauris. Sit et mattis non
                vitae tristique id. Molestie at vel tincidunt ut neque at.
                Habitant faucibus sit nam risus a sociis. Pellentesque arcu
                senectus ac vitae tristique ut consequat amet.
              </p>
            </>
          }
          title="Our story"
          dark
        />
      </div>
      <StandFor />
      <div
        style={{
          backgroundImage: `url(${BackgroundLeft.src})`,
          backgroundSize: "cover",
        }}
        className="pb-16"
      >
        <Purpose />
        <SliderComponent title="Meet your consultants" />
        <div className="md:pt-10 p-3">
          <p className="md:text-3xl text-xl mb-3 font-semibold text-left md:text-center md:px-64 md:pb-10">
            What can we do for you?
          </p>
          <div className="grid md:grid-cols-3 text-white md:px-10 items-center gap-4 text-center justify-between">
            {listData.map((data) => (
              <CardComponent
                key={data.title}
                title={data.title}
                content={data.content}
                image={data.image}
                dark
              />
            ))}
          </div>
        </div>
      </div>

      <div className="md:px-40 md:py-24 flex flex-col gap-4 md:gap-7 p-3">
        <div className="flex justify-center">
          <Image
            src={Quote}
            alt="quote"
            width={80}
            height={80}
            className="md:w-32 md:h-32"
          />
        </div>
        <p className="text-center md:text-3xl text-sm font-semibold">
          “We are passionate about connecting world-class talent in sustainable
          building design with dynamic organisations.”
        </p>
        <p className="text-center md:text-2xl">JOE BLOGGS | XXX COMPANY</p>
      </div>
    </div>
  );
}
