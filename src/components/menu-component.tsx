"use client";
import LogoContactUs from "@/assets/images/logo_contactus.png";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ContactUs } from "./contact-us";
export interface IMenuComponentProps {}
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  width: 1000,
};

export function MenuComponent(props: IMenuComponentProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const data = [
    {
      title: "About us",
      children: [
        {
          title: "Our story",
          to: "/about-us",
        },
        {
          title: "Meet our team",
          to: "/meet-the-team",
        },
      ],
    },
    {
      title: "Job Seekers",
      children: [
        {
          title: "Job Seekers",
          to: "/job-seekers",
        },
        {
          title: "Vacancies",
          to: "/vacancies",
        },
      ],
    },
    {
      title: "Employers",
      children: [
        {
          title: "Accessing the best talent",
          to: "/ir35",
        },
      ],
    },
    {
      title: "Resources",
      children: [
        {
          title: "IR35",
          to: "/ir35",
        },
        {
          title: "Library/ Blog",
          to: "/blog",
        },
      ],
    },
    {
      title: "Join us",
      children: [
        {
          title: "Careers",
          to: "/join-us",
        },
      ],
    },
  ];
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ContactUs />
        </Box>
      </Modal>
      <div className="md:p-[69px] bg-primary text-white flex flex-col justify-center items-center">
        <div className="flex flex-col items-center pb-[72px]">
          <Image src={LogoContactUs.src} width={200} height={200} alt="" />
        </div>
        <div className="grid grid-cols-4 gap-20">
          {data.map((x) => {
            return (
              <div key={x.title} className="w-[150px]">
                <p className="uppercase text-[20px] border-b-2 py-2 border-[#B1844D]">
                  {x.title}
                </p>
                <div className="flex flex-col gap-1 text-white py-[25px]">
                  {x.children.map((y) => {
                    return (
                      <Link key={y.title} href={y.to}>
                        {y.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex ">
          <button onClick={handleOpen} className="border px-[100px] py-[22px]">
            Contact us
          </button>
        </div>
      </div>
    </>
  );
}
