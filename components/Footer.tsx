import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="pt-8 pb-16 bg-[#FAF5F5]">
      <div className="flex md:text-3xl justify-center md:space-x-10 space-x-4 text-[20px]">
        <div className="hover:scale-125 duration-200 cursor-pointer text-[#21243D]">
          <FaFacebook />
        </div>
        <div className="hover:scale-125 duration-200 cursor-pointer text-[#21243D]">
          <FaInstagram />
        </div>
        <div className="hover:scale-125 duration-200 cursor-pointer text-[#21243D]">
          <FaTwitter />
        </div>
        <div className="hover:scale-125 duration-200 cursor-pointer text-[#21243D]">
          <FaLinkedin />
        </div>
      </div>
      <p className="text-center sm:text-[22px] leading-8 pt-6 font-semibold text-sm">
        Copyright 2020 All rights reserved
      </p>
    </div>
  );
}
