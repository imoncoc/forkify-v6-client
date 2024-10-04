/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { Suspense } from "react";

import UserInfo from "@/src/components/profile/UserInfo";
import { useUserGetRecipes } from "@/src/hooks/recipe.hook";
import RecipeTable from "@/src/components/recipe/RecipeTable";
import Loading from "@/src/components/UI/Loading";

const page = () => {
  const { data: userRecipeData } = useUserGetRecipes();

  return (
    <div className="">
      <Suspense fallback={<Loading />}>
        {userRecipeData && <RecipeTable userRecipeData={userRecipeData} />}
      </Suspense>
    </div>
  );
};

export default page;
