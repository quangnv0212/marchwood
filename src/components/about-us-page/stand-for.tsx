import React from "react";

export default function StandFor() {
  const data = [
    {
      title: "Empowering partnerships",
      description:
        "We do not just fill positions, we forge strategic partnerships. Through in-depth client understanding and a flair for exceptional talent, we connect organisations with the human capital that ignites success.",
    },
    {
      title: "Championing sustainability",
      description:
        "We believe in the power of purpose-driven recruitment. By leveraging industry expertise and a commitment to sustainability, we help build a future where talent and innovation drive a more responsible and thriving built environment.",
    },
    {
      title: "Fairness for everyone",
      description:
        "Our dedication is unparalleled. We are a team of passionate professionals who combine honesty, transparency, and a relentless pursuit of excellence. We are always available and always listening, ensuring a seamless experience for both clients and candidates.",
    },
  ];
  return (
    <div className="bg-[#192A3E] md:py-24 md:pb-28 flex flex-col gap-5 md:gap-16 p-4">
      <p className="text-[#B1844D] font-semibold md:text-4xl text-3xl text-center">
        What we stand for
      </p>
      <div className="md:grid md:grid-cols-3 flex flex-col gap-7 text-white md:px-28 md:gap-24">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col md:gap-6 gap-2">
            <p className="md:text-4xl text-xl font-semibold text-center md:max-w-96">
              {item.title}
            </p>
            <p className="text-center md:text-xl">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
