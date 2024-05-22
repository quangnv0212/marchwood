import MaskGroup from "@/assets/images/Mask group.png";
import Image from "next/image";
import { ButtonCommon } from "../button-common";
export function Story() {
  return (
    <div className="bg-[#192A3E] text-white flex p-3">
      <div className="flex md:w-2/3 flex-col md:gap-4 gap-3 items-start md:p-14">
        <p className="md:text-3xl text-xl font-semibold">Our story</p>
        <p className="text-sm">
          Marchwood are an innovative recruitment agency who represent world
          class talent in Sustainable Building Design. We combine human
          decision-making and technology to find the best talent our industry
          has to offer, and present this to our loyal customers in a way that
          makes hiring easy. No BS. Just a great service that is easy to access
          and does all of the heavy lifting for you.    Navigating the world of
          hiring and making a career move is not easy. There are so many wrong
          turns that can be made. With help from Marchwood, utilising our
          expertise in Sustainable Building Design recruitment, making a wrong
          turn is impossible.{" "}
        </p>
        <ButtonCommon>The Marchwood Way</ButtonCommon>
      </div>
      <div className="w-1/3 desktop">
        <Image
          src={MaskGroup}
          alt="Mask group"
          width={500}
          height={2500}
          className=""
        />
      </div>
    </div>
  );
}
