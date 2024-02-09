"use client";

import { Typography } from "@material-tailwind/react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Typography
        as={"h1"}
        placeholder={"Title"}
        className="text-4xl text-center text-red-600 mt-12"
      >
        Home page
      </Typography>
    </div>
  );
}
