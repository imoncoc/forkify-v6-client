import React from "react";

import HeroPage from "@/src/components/home/Hero";
import RecentRecipe from "@/src/components/home/RecentRecipe";

const page = () => {
  return (
    <div>
      <HeroPage />
      <RecentRecipe />
    </div>
  );
};

export default page;
