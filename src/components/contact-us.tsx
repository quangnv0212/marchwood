export interface IContactUsProps {}
import LogoContactUs from "@/assets/images/logo_contactus.png";
import Image from "next/image";
export function ContactUs(props: IContactUsProps) {
  return (
    <div className="md:p-[69px] bg-primary text-white flex flex-col">
      <div className="flex flex-col items-center">
        <Image src={LogoContactUs.src} width={200} height={200} alt="" />
      </div>
      <p className="text-[36px] font-semibold">Contact us</p>
      <div className="grid grid-cols-2 gap-[38px] w-full my-11">
        <input
          type="text"
          className="border text-white bg-transparent px-[36px] py-[22px] w-full"
          placeholder="Name"
        />
        <input
          type="text"
          className="border text-white bg-transparent px-[36px] py-[22px] w-full"
          placeholder="Phone"
        />
        <input
          type="text"
          className="border text-white bg-transparent px-[36px] py-[22px] w-full"
          placeholder="Email address"
        />
        <input
          type="text"
          className="border text-white bg-transparent px-[36px] py-[22px] w-full"
          placeholder="Job Title/Company"
        />
      </div>
      <textarea
        placeholder="Your message"
        className="border text-white bg-transparent px-[36px] py-[22px] w-full"
      />
      <div className="flex justify-end pt-[47px]">
        <button className="border px-[100px] py-[22px]">Submit</button>
      </div>
    </div>
  );
}
