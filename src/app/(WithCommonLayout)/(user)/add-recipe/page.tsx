"use client";

import React from "react";
import dynamic from "next/dynamic";

import UserInfo from "@/src/components/profile/UserInfo";

// Dynamically import the TipTap editor to avoid SSR issues
const TipTapEditor = dynamic(
  () => import("../../../../components/UI/TipTapEditor"),
  { ssr: false }
);

const Page = () => {
  return (
    <div className="container mx-auto">
      <div className="py-16">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full px-8 md:w-1/5 md:px-0">
            <UserInfo />
          </div>
          <div className="w-full px-8 md:w-4/5 md:px-0">
            <div>
              <p className="text-3xl text-center">Edit Your Recipe Easily</p>
              <div>
                {/* TipTap editor */}
                <TipTapEditor />
                {/* <ReactQuillsComponents /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
