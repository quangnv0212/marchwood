"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Building from "@/assets/images/building.png";
import Image from "next/image";
import LogoWhite from "@/assets/images/logo_white.png";
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

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<any>(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [scrollDirection]);

  return scrollDirection;
}
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const scrollDirection = useScrollDirection();

  const toogleMenu = () => {
    setIsCollapsed(!isCollapsed);
  };
  const listNav = [
    {
      title: "About us",
      link: "/about-us",
    },
    {
      title: "Join us",
      link: "/join-us",
    },
    {
      title: "Job Seekers",
      link: "/job-seekers",
    },
    {
      title: "Resources",
      link: "/resources",
    },
    {
      title: "IR35",
      link: "/ir35",
    },
  ];
  const navRef = useRef<any>(null);

  useEffect(() => {
    const clickHandler = (event: any) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsCollapsed(false);
      }
    };

    document.addEventListener("mousedown", clickHandler);

    return () => {
      document.removeEventListener("mousedown", clickHandler);
    };
  }, []);
  return (
    <nav
      ref={navRef}
      className={`sticky ${
        scrollDirection === "down" ? "-top-24" : "top-0"
      }  bg-primary transition-all duration-500 text-white z-10`}
    >
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
      <div className="flex items-center justify-between md:p-5 md:px-16 p-3">
        <Link href={"/"}>
          <Image
            src={LogoWhite}
            alt=""
            width={150}
            height={150}
            className="md:w-[100px] w-24"
          />
        </Link>
        <div className="desktop">
          <div className="flex items-center font-medium gap-6 capitalize text-base">
            {listNav.map((nav) => (
              <Link
                key={nav.title}
                href={nav.link}
                className={
                  pathname.includes(nav.link) ? "font-bold p-1 rounded-md" : ""
                }
              >
                {nav.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="mobile">
          <button onClick={toogleMenu}>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="absolute w-full">
        {isCollapsed && (
          <div className="flex flex-col gap-3 bg-primary capitalize p-2">
            {listNav.map((nav) => (
              <Link
                key={nav.title}
                className={`hover:bg-slate-500`}
                href={nav.link}
              >
                {nav.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
