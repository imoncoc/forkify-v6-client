import React, { ReactNode } from "react";

import { Navbar } from "@/src/components/UI/navbar";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="">{children}</main>
    </div>
  );
};

export default layout;
