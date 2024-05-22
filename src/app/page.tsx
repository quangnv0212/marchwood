"use client";
import { Hero } from "@/components/home-page/hero";
import { Service } from "@/components/home-page/service";
import { IntroCommon } from "@/components/intro-common";

import { SliderComponent } from "@/components/slider-component";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Service />
      <div className="bg-primary text-white">
        <IntroCommon
          buttonText="The Marchwood Way"
          description="Marchwood are an innovative recruitment agency who represent world
          class talent in Sustainable Building Design. We combine human
          decision-making and technology to find the best talent our industry
          has to offer, and present this to our loyal customers in a way that
          makes hiring easy. No BS. Just a great service that is easy to access
          and does all of the heavy lifting for you.    Navigating the world of
          hiring and making a career move is not easy. There are so many wrong
          turns that can be made. With help from Marchwood, utilising our
          expertise in Sustainable Building Design recruitment, making a wrong
          turn is impossible."
          title="Our story"
          dark={true}
        />
      </div>
      <SliderComponent title="Meet your consultant" />
      <SliderComponent title="Resources" />
    </div>
  );
}
