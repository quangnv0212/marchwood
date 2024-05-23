"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import StaffImage from "@/assets/images/Staff Image.png";
import "swiper/css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { useRouter } from "next/navigation";

export interface ISliderCommonProps {
  title: string;
}
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

export function SliderComponent({ title }: ISliderCommonProps) {
  const data = [
    {
      name: "John Doe",
      title: "CEO",
      image: StaffImage.src,
    },
    {
      name: "Jane Doe",
      title: "CTO",
      image: StaffImage.src,
    },
    {
      name: "John Smith",
      title: "CFO",
      image: StaffImage.src,
    },
    {
      name: "Jane Smith",
      title: "COO",
      image: StaffImage.src,
    },
    {
      name: "Jane Smith",
      title: "COO",
      image: StaffImage.src,
    },
  ];
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const router = useRouter();
  return (
    <div className="flex flex-col md:gap-5 gap-3 md:py-6 md:px-10 p-2">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>2</Box>
      </Modal>
      <p className="text-xl md:text-3xl font-semibold">{title}</p>
      <div className="desktop">
        <Swiper
          style={{
            zIndex: 0,
          }}
          spaceBetween={5}
          slidesPerView={4}
        >
          {data.map((consultant) => (
            <SwiperSlide key={consultant.name}>
              <img
                src={consultant.image}
                alt={consultant.name}
                className="object-cover cursor-pointer"
                // onClick={handleOpen}
                onClick={() => {
                  router.push("/meet-the-team");
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mobile">
        <Swiper spaceBetween={5} slidesPerView={2}>
          {data.map((consultant) => (
            <SwiperSlide key={consultant.name}>
              <img
                src={consultant.image}
                alt={consultant.name}
                className="object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
