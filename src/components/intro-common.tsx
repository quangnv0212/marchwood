export interface IIntroCommonProps {
  title: string;
  description: any;
  buttonText?: string;
  dark?: boolean;
  rightImage?: any;
}
import Image from "next/image";
import { ButtonCommon } from "./button-common";
export function IntroCommon({
  title,
  description,
  buttonText,
  dark = false,
  rightImage,
}: IIntroCommonProps) {
  return (
    <div className="flex p-3 md:p-0">
      <div className="flex md:w-5/6 flex-col md:gap-7 gap-3 items-start md:p-[80px] md:py-24">
        <p className="md:text-[36px] text-xl font-semibold">{title}</p>
        <div className="text-sm md:text-[20px] md:w-5/6">{description}</div>
        <div className="md:text-[24px]">
          {buttonText && <ButtonCommon dark={dark}>{buttonText}</ButtonCommon>}
        </div>
      </div>
      {rightImage}
    </div>
  );
}
