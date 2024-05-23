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
      <div className="flex md:w-5/6 flex-col md:gap-6 gap-3 items-start md:p-16 md:py-24">
        <p className="md:text-3xl text-xl font-semibold">{title}</p>
        <div className="text-sm md:text-xl md:w-5/6">{description}</div>
        <div className="md:text-xl">
          {buttonText && <ButtonCommon dark={dark}>{buttonText}</ButtonCommon>}
        </div>
      </div>
      {rightImage}
    </div>
  );
}
