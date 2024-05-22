import React from "react";
import Cloud from "@/assets/images/upload-cloud.png";
export default function UploadCV({ title }: any) {
  return (
    <div className="bg-[#192A3E] text-white md:p-16 text-left p-3 py-10 ">
      <p className="text-2xl text-center mb-10 font-semibold">{title}</p>
      <div className="grid  md:grid-cols-2 gap-6 mb-6">
        <input
          type="text"
          placeholder="Name"
          className="p-3 px-5 border bg-transparent text-white"
        />
        <input
          type="text"
          placeholder="Email address"
          className="p-3 px-5 border bg-transparent text-white"
        />
      </div>
      <div className="border border-white h-30 py-10 flex items-center flex-col gap-5 justify-center">
        <img src={Cloud.src} alt="" className="md:w-16 w-10 h-10 md:h-16 " />
        <p className="text-sm md:text-base">Upload your documents</p>
      </div>
      <div className="flex justify-end">
        <button className="border p-2 md:px-16 md:mt-6 mt-3">Submit</button>
      </div>
    </div>
  );
}
