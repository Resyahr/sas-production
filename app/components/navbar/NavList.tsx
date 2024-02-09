"use client";

//UI
import { Typography } from "@material-tailwind/react";

//NextJS
import Link from "next/link";

const NavList = () => {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-red-600">
      <Typography
        as="li"
        placeholder="Navlink"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        placeholder="Navlink"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          JIS Truck Loading
        </Link>
      </Typography>
      <Typography
        as="li"
        placeholder="Navlink"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Production Calendar PLG
        </Link>
      </Typography>
      <Typography
        as="li"
        placeholder="Navlink"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          href="/cockpick-observer"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Cockpit Tracker
        </Link>
      </Typography>
    </ul>
  );
};

export default NavList;
