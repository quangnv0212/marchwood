import IcLeftArr from "@/assets/images/Arrow.png";
import Location1 from "@/assets/images/Location 1.png";
import IcLocation from "@/assets/images/Location 2.svg";
import Mechanical from "@/assets/images/Mechanical.png";
import IcAviation from "@/assets/images/ic_aviation.png";
import IcMechanical from "@/assets/images/ic_mechanical.png";
import IcMoney from "@/assets/images/ic_money.png";
import IcPermanent from "@/assets/images/ic_permanance.png";
import UploadCV from "@/components/job-seekers-page/uploadCV";

export default function Page() {
  const benefit = [
    {
      title: "Aviation",
      icon: IcAviation,
    },
    {
      title: "Mechanical",
      icon: IcMechanical,
    },

    {
      title: "Permanent",
      icon: IcPermanent,
    },

    {
      title: "UP TO £100,000",
      icon: IcMoney,
    },
  ];
  const jobInfo = {
    title: "Salesforce Solution Architect",
    location: "Shoreditch, London",
    contract: "Permanent",
    startDate: "ASAP",
  };
  const similarJobs = [
    {
      title: "Salesforce Solution Architect",
      location: "Shoreditch, London",
    },
    {
      title: "Salesforce Solution Architect",
      location: "Shoreditch, London",
    },
    {
      title: "Salesforce Solution Architect",
      location: "Shoreditch, London",
    },
  ];
  return (
    <>
      <div className="bg-primary text-white md:p-10 md:px-32 flex flex-col gap-3 md:gap-6 p-3">
        <div className="">
          <div className="flex gap-3 font-semibold items-center md:py-10">
            <img src={IcLeftArr.src} alt="" />
            <p className="text-sm">BACK TO SEARCH RESULTS</p>
          </div>
        </div>
        <p className="md:text-4xl text-2xl">Mechanical Engineer</p>
        <div className="flex gap-3 items-center">
          <img src={IcLocation.src} alt="" />
          <p className="text-base">SHOREDITCH, LONDON</p>
        </div>
      </div>
      <div className="bg-white md:p-10 md:px-32 text-primary p-3 flex flex-col gap-10 ">
        <div className="">
          <button className="border w-full md:w-auto border-primary p-2 md:px-16 md:mb-10">
            Apply now
          </button>
        </div>

        <div className="flex md:gap-24 gap-5">
          <div className="flex flex-col gap-4">
            {benefit.map((benefit, idx) => (
              <div key={idx} className="flex gap-3 flex-col items-center">
                <img src={benefit.icon.src} alt="" />
                <p className="uppercase">{benefit.title}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <div className="">
              <p>
                <strong>Job Title</strong>
                <span>: {jobInfo.title}</span>
              </p>
              <p>
                <strong>Location</strong>
                <span>: {jobInfo.location}</span>
              </p>
              <p>
                <strong>Contract</strong>
                <span>: {jobInfo.contract}</span>
              </p>
              <p>
                <strong>Start Date</strong>
                <span>: {jobInfo.startDate}</span>
              </p>
            </div>
            <div className="">
              <p className="font-bold text-2xl mb-3">Role</p>
              <p>
                Lorem ipsum dolor sit amet consectetur. Viverra odio scelerisque
                morbi amet pulvinar. Mauris integer lobortis massa vitae eros.
                Dolor blandit tincidunt aenean ornare vitae massa nunc bibendum.
                Nunc aliquet curabitur nisi dictumst pellentesque blandit. Sed
                sed sem egestas nibh fusce. Mauris elementum vitae fusce
                accumsan sit egestas massa suscipit. Quis purus vulputate
                vestibulum laoreet morbi nulla mus sit sed. Ac amet sed erat
                auctor dolor. Mi neque consectetur libero gravida in velit
                tortor.
              </p>
            </div>
            <div className="">
              <p className="font-bold text-2xl mb-3">Requirements</p>
              <ul>
                <li>Non a maecenas orci volutpat risus.</li>
                <li>Non a maecenas orci volutpat risus.</li>
                <li>Non a maecenas orci volutpat risus.</li>
                <li>Non a maecenas orci volutpat risus.</li>
              </ul>
            </div>
            <div className="">
              <p className="font-bold text-2xl mb-3">Benefits</p>
              <p>
                Lorem ipsum dolor sit amet consectetur. Viverra odio scelerisque
                morbi amet pulvinar. Mauris integer lobortis massa vitae eros.
                Dolor blandit tincidunt aenean ornare vitae massa nunc bibendum.
                Nunc aliquet curabitur nisi dictumst pellentesque blandit. Sed
                sed sem egestas nibh fusce. Mauris elementum vitae fusce
                accumsan sit egestas massa suscipit. Quis purus vulputate
                vestibulum laoreet morbi nulla mus sit sed. Ac amet sed erat
                auctor dolor. Mi neque consectetur libero gravida in velit
                tortor.
              </p>
            </div>
          </div>
        </div>
      </div>
      <UploadCV title="Apply now" />
      <div className="bg-white text-primary md:px-32 md:p-16 p-3">
        <p className="text-2xl font-semibold pb-10">Similar jobs</p>
        <div className="flex flex-col md:flex-row justify-between">
          {similarJobs.map((job, idx) => (
            <div key={idx} className="flex flex-col gap-5 md:gap-3">
              <img src={Mechanical.src} alt="" className="w-28" />
              <p className="font-semibold md:text-xl text-sm">{job.title}</p>
              <div className="flex items-center uppercase">
                <img src={Location1.src} alt="" />
                <p className="md:text-xl text-sm">{job.location}</p>
              </div>
              <button className="border border-primary p-2 md:text-xl text-sm">
                View job
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
