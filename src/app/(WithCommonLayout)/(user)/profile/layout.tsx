import React, { ReactNode } from "react";

import UserInfo from "@/src/components/profile/UserInfo";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="container mx-auto">
      <div className="py-16">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full px-8 md:w-1/5 md:px-0">
            {/* @ts-expect-error Server Component */}
            <UserInfo />
          </div>
          <div className="w-full px-8 md:w-4/5 md:px-0">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default layout;
