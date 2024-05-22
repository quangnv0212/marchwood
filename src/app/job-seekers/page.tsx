import CollapseCommon from "@/components/collapse-common";
import GridListCommon from "@/components/grid-list-common";
import { IntroCommon } from "@/components/intro-common";
import Intro2Common from "@/components/intro2-common";
import BannerJobSeekers from "@/components/job-seekers-page/banner-job-seekers";
import UploadCV from "@/components/job-seekers-page/uploadCV";

export default function JobSeekers() {
  return (
    <div>
      <BannerJobSeekers />
      <IntroCommon
        title="Clever Title"
        description="
      Lorem ipsum dolor sit amet consectetur. Purus purus duis eget interdum integer orci enim. Sapien etiam ac porttitor integer eleifend. Turpis ut vulputate dolor nam quis. Netus netus elementum molestie duis. Sed ultrices morbi aliquam dui. Proin etiam odio scelerisque justo elementum elementum volutpat pellentesque velit.
      "
        rightImage={false}
      />
      <GridListCommon title="How we will work with you" />
      <Intro2Common />
      <CollapseCommon />
      <UploadCV title="Upload your CV" />
    </div>
  );
}
