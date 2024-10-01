import React from "react";

import UserInfo from "@/src/components/profile/UserInfo";

const ProfilePage = () => {
  return (
    <div className="container mx-auto">
      <div className="py-16">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full px-8 md:w-1/5 md:px-0">
            <UserInfo />
          </div>
          <div className="w-full px-8 md:w-4/5 md:px-0  bg-blue-300">
            right Side
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
