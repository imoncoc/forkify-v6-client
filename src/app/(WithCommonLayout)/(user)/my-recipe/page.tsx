/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";

import UserInfo from "@/src/components/profile/UserInfo";
import { useUserGetRecipes } from "@/src/hooks/recipe.hook";
import RecipeTable from "@/src/components/recipe/RecipeTable";

const page = () => {
  const { data: userRecipeData } = useUserGetRecipes();

  console.log(" userRecipeData: ", userRecipeData);

  return (
    <div className="container mx-auto">
      <div className="py-16">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full px-8 md:w-1/5 md:px-0">
            {/* @ts-expect-error Server Component */}
            <UserInfo />
          </div>
          <div className="w-full px-8 md:w-4/5 md:px-0  bg-blue-300">
            <RecipeTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
