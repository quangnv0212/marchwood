"use client";
import { Hero } from "@/components/home-page/hero";
import { Service } from "@/components/home-page/service";
import { IntroCommon } from "@/components/intro-common";
import MaskGroup from "@/assets/images/Mask group.png";

import { SliderComponent } from "@/components/slider-component";
import BackgroundLeft from "@/assets/images/back-ground-left.png";
import Image from "next/image";
export default function Home() {
  return (
    <div className="">
      <Hero />
      <Service />
      <div className="bg-primary text-white">
        <IntroCommon
          rightImage={
            <div className="desktop">
              <Image
                src={MaskGroup.src}
                alt="Mask group"
                width={480}
                height={480}
                className="object-cover"
              />
            </div>
          }
          buttonText="The Marchwood Way"
          description={
            <>
              <p>
                Marchwood are an innovative recruitment agency who represent
                world class talent in Sustainable Building Design. We combine
                human decision-making and technology to find the best talent our
                industry has to offer, and present this to our loyal customers
                in a way that makes hiring easy. No BS. Just a great service
                that is easy to access and does all of the heavy lifting for you
              </p>
              <br />
              <p>
                Marchwood are an innovative recruitment agency who represent
                world class talent in Sustainable Building Design. We combine
                human decision-making and technology to find the best talent our
                industry has to offer, and present this to our loyal customers
                in a way that makes hiring easy. No BS. Just a great service
                that is easy to access and does all of the heavy lifting for you
              </p>
            </>
          }
          title="Our story"
          dark={true}
        />
      </div>

      <div
        className="py-10"
        style={{
          backgroundImage: `url(${BackgroundLeft.src})`,
          backgroundSize: "cover",
        }}
      >
        <SliderComponent title="Meet your consultant" />
        <SliderComponent title="Resources" />
      </div>
    </div>
  );
}
