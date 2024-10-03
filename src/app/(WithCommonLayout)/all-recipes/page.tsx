import React from "react";

import RecentRecipeCard from "@/src/components/home/RecentRecipeCard";
import { getAllRecipes } from "@/src/services/recipes";

const AllRecipesPage = async () => {
  const { data } = await getAllRecipes();

  return (
    <div className="container mx-auto">
      <div className=" py-16 grid grid-cols-2  md:grid-cols-3 gap-6 mx-4 md:mx-0">
        {data?.result?.map((recipe: any) => (
          <RecentRecipeCard key={recipe._id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default AllRecipesPage;
