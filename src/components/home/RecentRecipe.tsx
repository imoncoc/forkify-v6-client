import React from "react";

import nexiosInstance from "@/src/config/nexios.config";
import RecentRecipeCard from "./RecentRecipeCard";

const RecentRecipe = async () => {
  const { data }: any = await nexiosInstance.get(
    "/recipe?limit=6&isDeleted=false",
    {
      cache: "no-store",
      next: {},
    }
  );

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2  md:grid-cols-3 gap-6 mx-4 md:mx-0">
        {data?.data?.result?.map((recipe, index) => (
          <RecentRecipeCard key={recipe._id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecentRecipe;
