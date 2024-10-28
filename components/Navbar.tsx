import React from "react";
import { HiBars3BottomRight } from "react-icons/hi2";

export default function Navbar() {
  return (
    <nav className="flex w-full justify-end bg-[#CFA6A61C] h-20 items-center px-12">
      <ul className="md:flex gap-10 font-[500] text-xl hidden mt-7">
        <li>Works</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
      <li className="block md:hidden text-4xl ">
        <HiBars3BottomRight />
      </li>
    </nav>
  );
}
