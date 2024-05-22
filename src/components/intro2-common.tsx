import React from "react";
import Work from "@/assets/images/work.png";
import { ButtonCommon } from "./button-common";
export default function Intro2Common() {
  return (
    <div className="md:p-16 md:grid md:grid-cols-2 gap-4 p-3">
      <div className="flex flex-col md:gap-7 gap-4 ">
        <p className="md:text-2xl text-xl font-semibold">IR35</p>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur. Purus purus duis eget interdum
          integer orci enim. Sapien etiam ac porttitor integer eleifend. Turpis
          ut vulputate dolor nam quis. Netus netus elementum molestie duis. Sed
          ultrices morbi aliquam dui. Proin etiam odio scelerisque justo
          elementum elementum volutpat pellentesque velit.
        </p>
        <ButtonCommon>Learn more</ButtonCommon>
      </div>
      <div className="flex justify-center my-5 md:my-0">
        <img src={Work.src} alt="work" />
      </div>
    </div>
  );
}
