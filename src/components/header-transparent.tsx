"use client";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Building from "@/assets/images/building.png";
import Image from "next/image";
import LogoWhite from "@/assets/images/logo_white.png";
import { useState } from "react";
import { MenuComponent } from "./menu-component";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  width: 1200,
};

export function HeaderTransparent() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <MenuComponent />
        </Box>
      </Modal>
      <div className="flex justify-between">
        <Image
          src={LogoWhite}
          alt=""
          width={150}
          height={150}
          className="md:w-[183px]"
        />
        <button onClick={handleOpen} className="text-white">
          <svg
            className="w-10"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
              fill="#FFFFFF"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
