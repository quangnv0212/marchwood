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
      <div className="text-primary">
        <IntroCommon
          description="Marchwood are an innovative recruitment agency who represent world
          class talent in Sustainable Building Design. We combine human
          decision-making and technology to find the best talent our industry
          has to offer, and present this to our loyal customers in a way that
          makes hiring easy. No BS. Just a great service that is easy to access
          and does all of the heavy lifting for you. Navigating the world of
          hiring and making a career move is not easy. There are so many wrong
          turns that can be made. With help from Marchwood, utilising our
          expertise in Sustainable Building Design recruitment, making a wrong
          turn is impossible."
          title="Our story"
          dark
        />
      </div>
      <StandFor />
      <Purpose />
      <SliderComponent title="Meet your consultants" />
      <div className="md:pt-10 p-3">
        <p className="md:text-3xl text-xl mb-3 font-semibold text-left md:text-center md:px-64 md:pb-10">
          What can we do for you?
        </p>
        <div className="md:grid md:grid-cols-3 text-white flex flex-col md:px-20 items-center gap-4 text-center justify-center">
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
      <div className="md:px-40 md:py-10 flex flex-col gap-4 p-3">
        <div className="flex justify-center">
          <Image
            src={Quote}
            alt="quote"
            width={80}
            height={80}
            className="w-16 h-16"
          />
        </div>
        <p className="text-center md:text-3xl text-sm font-semibold">
          “We are passionate about connecting world-class talent in sustainable
          building design with dynamic organisations.”
        </p>
        <p className="text-center">JOE BLOGGS | XXX COMPANY</p>
      </div>
    </div>
  );
}
