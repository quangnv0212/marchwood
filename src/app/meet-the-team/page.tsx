import Link from "next/link";
import Philex from "@/assets/images/philex.png";
import Ruler from "@/assets/images/ruler.png";
import BackgroundRight from "@/assets/images/background-right.png";
export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <div
      //   style={{
      //     backgroundImage: `url(${BackgroundRight.src})`,
      //     backgroundSize: "cover",
      //   }}
      className="md:py-[61px] md:px-[79px] text-primary z-50 relative"
    >
      <img
        src={BackgroundRight.src}
        alt=""
        className="absolute top-0 right-0 z-50 h-full"
      />
      <div className="flex md:text-[20px] font-semibold gap-2 md:pb-[37px]">
        <Link href="/">HOME</Link>
        <span>/</span>
        <Link href="#">MEET THE TEAM</Link>
      </div>
      <p className="text-[48px] font-semibold md:pb-[89px]">Meet the team</p>
      <div className="md:h-[500px] bg-primary relative flex justify-end text-white px-[154px] py-[74px] ">
        <img
          src={Philex.src}
          alt=""
          className="absolute -top-36 -left-24 md:w-[600px]"
        />
        <div className="flex flex-col items-end gap-11">
          <p className="text-5xl font-semibold">Phil Hodgson</p>
          <p className="text-[30px] text-[#B1844D]">FOUNDER</p>
          <p className="max-w-[642px] text-right text-[20px]">
            Lorem ipsum dolor sit amet consectetur. Purus purus duis eget
            interdum integer orci enim. Sapien etiam ac porttitor integer
            eleifend. Turpis ut vulputate dolor nam quis.{" "}
          </p>
          <div className="flex gap-[23px]">
            <div className="flex flex-col gap-2">
              <p className="text-[#B1844D] text-[30px] text-right">
                SPECIALIST IN
              </p>
              <p className="text-[20px]">Sustainable Building Design</p>
            </div>
            <img src={Ruler.src} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
