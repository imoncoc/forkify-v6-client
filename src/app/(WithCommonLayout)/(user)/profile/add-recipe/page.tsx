"use client";

import React from "react";
import dynamic from "next/dynamic";

import UserInfo from "@/src/components/profile/UserInfo";

// Dynamically import the TipTap editor to avoid SSR issues
const TipTapEditor = dynamic(
  () => import("../../../../../components/UI/TipTapEditor"),
  { ssr: false }
);

const Page = () => {
  return (
    <>
      <div>
        <p className="text-3xl text-center">Edit Your Recipe Easily</p>
        <div>
          {/* TipTap editor */}
          <TipTapEditor />
          {/* <ReactQuillsComponents /> */}
        </div>
      </div>
    </>
  );
};

export default Page;
