"use client";

//React
import { useEffect, useState } from "react";

//UI
import { Navbar, Collapse, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

//Components
import NavList from "./NavList";

//NextJS
import Link from "next/link";
import Image from "next/image";
/* import { useRouter } from "next/router"; */

//Logo
import logo from "@/public/logo.svg";

const NavigationBar = () => {
  const [openNav, setOpenNav] = useState(false);
  /*   const router = useRouter(); */

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  /*   useEffect(() => {
    const closeMenu = () => {
      setOpenNav(false);
    };

    router.events.on("routeChangeComplete", closeMenu);

    return () => {
      router.events.off("routeChangeComplete", closeMenu);
    };
  }, [router]); */

  return (
    <Navbar
      placeholder="Navigation Bar"
      className="mx-auto max-w-screen-xl px-6 py-3"
    >
      <div className="flex items-center justify-between text-blue-gray-900">
        <Link href="#" className="mr-4 cursor-pointer py-1.5">
          <Image src={logo} alt="Logo" width={100} />
        </Link>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          placeholder="Menu Icon Button"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>

      {/*  <Collapse open={openNav}>
        <NavList />
      </Collapse> */}
      {openNav && <NavList />}
    </Navbar>
  );
};

export default NavigationBar;
