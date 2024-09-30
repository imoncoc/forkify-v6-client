import React, { ReactNode } from "react";

import { Navbar } from "@/src/components/UI/navbar";
import Footer from "@/src/components/UI/Footer";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
};

export default layout;
