import React, { Suspense } from "react";

import HeroPage from "@/src/components/home/Hero";
import RecentRecipe from "@/src/components/home/RecentRecipe";
import Loading from "@/src/components/UI/Loading";

const page = () => {
  return (
    <>
      <div>
        <HeroPage />

        <Suspense fallback={<Loading />}>
          {/* @ts-expect-error Server Component */}
          <RecentRecipe />
        </Suspense>
      </div>
    </>
  );
};

export default page;
