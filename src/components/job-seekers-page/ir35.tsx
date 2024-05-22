import React from "react";
import Work from "@/assets/images/work.png";
export default function Ir35() {
  return (
    <div className="md:p-16 md:grid grid-cols-2 gap-4">
      <div className="flex flex-col gap-7">
        <p className="text-2xl font-semibold">IR35</p>
        <p>
          Lorem ipsum dolor sit amet consectetur. Purus purus duis eget interdum
          integer orci enim. Sapien etiam ac porttitor integer eleifend. Turpis
          ut vulputate dolor nam quis. Netus netus elementum molestie duis. Sed
          ultrices morbi aliquam dui. Proin etiam odio scelerisque justo
          elementum elementum volutpat pellentesque velit.
        </p>
        <div className="">
          <button className="border p-2 px-16 border-primary">
            Learn more
          </button>
        </div>
      </div>
      <div className="px-16 ">
        <img src={Work.src} alt="work" />
      </div>
    </div>
  );
}
