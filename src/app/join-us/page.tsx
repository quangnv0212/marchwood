"use client";

import Work from "@/assets/images/work.png";
import { IntroCommon } from "@/components/intro-common";
import UploadCV from "@/components/job-seekers-page/uploadCV";
import HeroJoinUs from "@/components/join-us-page/hero-join-us";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import BackgroundRight from "@/assets/images/background-right.png";
import BackgroundLeft from "@/assets/images/back-ground-left.png";
import BackgroundLeftWhite from "@/assets/images/background-left-white.png";
import { useState } from "react";
import { Header } from "@/components/header";

export default function JoinUsPage() {
  const CollapseComponent = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
      setOpen(!open);
    };
    return (
      <List
        sx={{
          width: "100%",
          borderBottom: "#B1844D 1px solid ",
          bgcolor: "background.paper",
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton className="border" onClick={handleClick}>
          <ListItemText primary="REASON ONE TITLE" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <p className="p-3 text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur. Turpis mattis egestas diam
            eu purus convallis lacus turpis ac. Fermentum quis ac lacus ultrices
            dignissim quis lectus sem at. Proin ut donec tempor egestas metus ac
            pharetra fermentum nibh. Erat vestibulum erat et sit amet in egestas
            sit amet. Velit mi a magna diam ipsum eget tortor. Malesuada feugiat
            sollicitudin mi ut ipsum maecenas duis accumsan quam.
          </p>
        </Collapse>
      </List>
    );
  };
  const [isActiveTitle, setIsActiveTitle] = useState("REASON ONE TITLE");
  const data = [
    {
      title: "REASON ONE TITLE",
      des: "1Lorem ipsum dolor sit amet consectetur. Turpis mattis egestas diam eu purus convallis lacus turpis ac. Fermentum quis ac lacus ultrices dignissim quis lectus sem at. Proin ut donec tempor egestas metus ac pharetra fermentum nibh. Erat vestibulum erat et sit amet in egestas sit amet. Velit mi a magna diam ipsum eget tortor. Malesuada feugiat sollicitudin mi ut ipsum maecenas duis accumsan quam.",
    },
    {
      title: "REASON TWO TITLE",
      des: "2Lorem ipsum dolor sit amet consectetur. Turpis mattis egestas diam eu purus convallis lacus turpis ac. Fermentum quis ac lacus ultrices dignissim quis lectus sem at. Proin ut donec tempor egestas metus ac pharetra fermentum nibh. Erat vestibulum erat et sit amet in egestas sit amet. Velit mi a magna diam ipsum eget tortor. Malesuada feugiat sollicitudin mi ut ipsum maecenas duis accumsan quam.",
    },
    {
      title: "REASON THREE TITLE",
      des: "3Lorem ipsum dolor sit amet consectetur. Turpis mattis egestas diam eu purus convallis lacus turpis ac. Fermentum quis ac lacus ultrices dignissim quis lectus sem at. Proin ut donec tempor egestas metus ac pharetra fermentum nibh. Erat vestibulum erat et sit amet in egestas sit amet. Velit mi a magna diam ipsum eget tortor. Malesuada feugiat sollicitudin mi ut ipsum maecenas duis accumsan quam.",
    },
    {
      title: "REASON FOUR TITLE",
      des: "4Lorem ipsum dolor sit amet consectetur. Turpis mattis egestas diam eu purus convallis lacus turpis ac. Fermentum quis ac lacus ultrices dignissim quis lectus sem at. Proin ut donec tempor egestas metus ac pharetra fermentum nibh. Erat vestibulum erat et sit amet in egestas sit amet. Velit mi a magna diam ipsum eget tortor. Malesuada feugiat sollicitudin mi ut ipsum maecenas duis accumsan quam.",
    },
  ];
  return (
    <>
      <div>
        <HeroJoinUs />
        <div
          style={{
            backgroundImage: `url(${BackgroundRight.src})`,
            backgroundSize: "cover",
          }}
          className=" text-primary"
        >
          <IntroCommon
            description={
              <>
                <p className="text-sm md:text-base">
                  Marchwood are an innovative recruitment agency who represent
                  world class talent in Sustainable Building Design. We combine
                  human decision-making and technology to find the best talent
                  our industry has to offer, and present this to our loyal
                  customers in a way that turn is impossible.
                </p>
              </>
            }
            title="Clever title"
            dark={true}
          />
        </div>
        <div
          className=""
          style={{
            backgroundImage: `url(${BackgroundLeft.src})`,
            backgroundSize: "cover",
          }}
        >
          <div className="flex flex-col md:grid md:grid-cols-2 md:gap-4 gap-3 p-3 items-start md:justify-between md:p-14">
            <div className="">
              <img className="object-cover" src={Work.src} alt="work" />
            </div>
            <div className="flex flex-col gap-10">
              <p className="md:text-3xl md:text-right text-xl font-semibold">
                Clever Title
              </p>
              <p className="text-sm md:text-base md:text-right">
                Marchwood are an innovative recruitment agency who represent
                world class talent in Sustainable Building Design. We combine
                human decision-making and technology to find the best talent our
                industry has to offer, and present this to our loyal customers
                in a way that turn is impossible.
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundImage: `url(${BackgroundLeft.src})`,
            backgroundSize: "cover",
          }}
          className="flex gap-3 flex-col p-3 md:p-16"
        >
          <div className="flex flex-col gap-3 md:gap-10">
            <p className="md:text-3xl text-xl font-semibold">
              Why join Marchwood
            </p>
            <p className="text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur. Vel aliquet non velit
              fames enim.
            </p>
          </div>
          <div className="mobile">
            <div className="md:p-16">
              <CollapseComponent />
              <CollapseComponent />
              <CollapseComponent />
              <CollapseComponent />
            </div>
          </div>
          <div className="desktop">
            <div className="grid grid-cols-2 gap-8">
              <div className="">
                {data.map((item) => (
                  <div
                    key={item.title}
                    onClick={() => {
                      setIsActiveTitle(item.title);
                    }}
                    className={`p-3 cursor-pointer font-medium  ${
                      isActiveTitle === item.title
                        ? "bg-[#B1844D] text-white"
                        : ""
                    }`}
                  >
                    <p className="md:text-2xl text-xl font-semibold">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>

              <div className="">
                <div className="text-sm md:text-base">
                  {data.map((item) => (
                    <div
                      key={item.title}
                      className={`${
                        isActiveTitle === item.title ? "block" : "hidden"
                      }`}
                    >
                      {item.des}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className=""
          style={{
            backgroundImage: `url(${BackgroundLeftWhite.src})`,
            backgroundSize: "cover",
          }}
        >
          <UploadCV title="Apply to work at Marchwood" />
        </div>
      </div>
    </>
  );
}
