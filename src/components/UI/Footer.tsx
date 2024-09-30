"use client";
import Link from "next/link";
import React from "react";

import logo from "../../assets/logo.png";
import Image from "next/image";
import { TwitterIcon } from "../icons";
import { FacebookIcon, InstagramIcon } from "lucide-react";

const Footer = () => {
  const today = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <footer className="py-16 bg-gradient-to-r from-customColor1 to-customColor2 dark:bg-gradient-to-r dark:from-default-100 dark:to-default-200">
      {/* <!-- Footer Flex Container --> */}
      <div className="container flex flex-col  items-center justify-between mx-auto space-y-16 px-16 md:flex-row md:space-y-0">
        {/* <!-- Logo/Menu Container --> */}
        <div className="flex flex-col items-center justify-between space-y-8 text-lg font-light md:flex-row md:space-y-0 md:space-x-8 text-grayishBlue">
          <Link href={"/"}>
            <div className="flex justify-center items-center gap-2">
              <Image
                className="size-12"
                width={300}
                height={300}
                alt="NextUI hero Image"
                src={logo}
              />
              <p className="text-xl font-bold uppercase text-customColor2">
                {" "}
                Forkify
              </p>
            </div>
          </Link>

          <Link href={"/about-us"} className="uppercase hover:text-strongCyan">
            About Us
          </Link>
          <Link
            href={"/contact-us"}
            className="uppercase hover:text-strongCyan"
          >
            Contact Us
          </Link>
          <Link
            href={"/facility-listing"}
            className="uppercase hover:text-strongCyan"
          >
            Facility Listing
          </Link>
          <Link href={"/booking"} className="uppercase hover:text-strongCyan">
            Booking
          </Link>
        </div>

        {/* <!-- Social Container --> */}
        <div className="flex space-x-6 ">
          {/* <img src={facebookIcon} alt="" className="h-6 hover:bg-lime-500 " /> */}
          {/* <FacebookOutlined
            className="text-2xl text-white hover:text-lightBlue cursor-pointer transition duration-500"
            style={{}}
          />
          <TwitterOutlined className="text-2xl text-white hover:text-lightBlue cursor-pointer transition duration-500" />
          <InstagramOutlined className="text-2xl text-white hover:text-lightBlue cursor-pointer transition duration-500" /> */}
          <div className="flex space-x-10">
            <div className="border p-1 text-orange-200 hover:text-white rounded-md">
              <FacebookIcon
                size={24}
                className="text-orange-200 hover:text-white cursor-pointer transition duration-500"
              />
            </div>
            <div className="border p-1 text-orange-200 hover:text-white rounded-md">
              <TwitterIcon className="text-orange-200 hover:text-white cursor-pointer transition duration-500" />
            </div>
            <div className="border p-1 text-orange-200 hover:text-white rounded-md">
              <InstagramIcon className="text-orange-200 hover:text-white cursor-pointer transition duration-500" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto text-sm  text-slate-600 dark:text-slate-400 mt-12 mb-8">
        <p className="text-center text-grayishBlue">
          Copyright ©{new Date().getFullYear()} All rights reserved by{" "}
          <span className="uppercase text-strongCyan">Md Imon Hossain</span>.
        </p>
        <p className="text-center text-grayishBlue">
          Information refreshed on:{" "}
          <span className="text-lightBlue">{today}</span>{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
