export interface IIntroCommonProps {
  title: string;
  description: string;
  buttonText?: string;
  dark?: boolean;
  rightImage?: boolean;
}
import MaskGroup from "@/assets/images/Mask group.png";
import Image from "next/image";
import { ButtonCommon } from "./button-common";
export function IntroCommon({
  title,
  description,
  buttonText,
  dark = false,
  rightImage = true,
}: IIntroCommonProps) {
  return (
    <div className="flex p-3">
      <div className="flex md:w-2/3 flex-col md:gap-4 gap-3 items-start md:p-14">
        <p className="md:text-3xl text-xl font-semibold">{title}</p>
        <p className="text-sm">{description}</p>
        {buttonText && <ButtonCommon dark={dark}>{buttonText}</ButtonCommon>}
      </div>
      {rightImage && (
        <div className="w-1/3 desktop">
          <Image
            src={MaskGroup}
            alt="Mask group"
            width={500}
            height={2500}
            className=""
          />
        </div>
      )}
    </div>
  );
}
