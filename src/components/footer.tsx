"use client";
import Linkedin from "@/assets/images/LI-White.png";
import WhatsApp from "@/assets/images/WA-White.png";
import Logo from "@/assets/images/logo.png";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { ContactUs } from "./contact-us";

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

export default function Footer() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const socials = [
    {
      name: "LinkedIn",
      src: Linkedin.src,
    },
    {
      name: "WhatsApp",
      src: WhatsApp.src,
    },
  ];
  return (
    <footer className="flex flex-col gap-10 md:flex-row justify-between md:py-[52px] md:px-[63px] p-4 bg-[#192A3E] text-white">
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
      <div className="flex flex-col md:gap-10 gap-5">
        <div className="flex md:gap-4 justify-between items-center">
          <img src={Logo.src} alt="logo" className="md:w-[91px]" />
          <button
            onClick={handleOpen}
            className="border md:p-2 p-2 md:px-16 md:text-[20px] "
          >
            Contact us
          </button>
        </div>
        <div className="flex md:gap-5 gap-4">
          {socials.map((social, indx) => (
            <img
              key={indx}
              src={social.src}
              alt={social.name}
              className="md:w-[31px]"
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="font-semibold flex flex-col gap-2">
          <p className="md:text-right text-center text-xl text-[#B1844D]">
            We are Marchwood.
          </p>
          <p className="md:text-right text-center">
            We connect world-class talent in sustainable building design with
            dynamic organisations.
          </p>
        </div>
        <div className="md:text-right text-center">
          <p>Privacy Policy</p>
          <p>Terms of Business</p>
        </div>
      </div>
    </footer>
  );
}
