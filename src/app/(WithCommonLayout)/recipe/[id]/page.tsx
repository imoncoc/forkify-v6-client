import React from "react";

import RecipeDetailsCard from "@/src/components/recipe/RecipeDetailsCard";
import { getSingleRecipe } from "@/src/services/recipes";
import RecipeDetailsComment from "@/src/components/recipe/RecipeDetailsComment";
import { useUser } from "@/src/context/user.provider";
import AddComment from "../_components/AddComment";

const RecipeDetailsPage = async ({ params }: any) => {
  const { data } = await getSingleRecipe(params.id);

  return (
    <div>
      <div className="min-h-screen flex justify-center items-center p-4 bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-700">
        <RecipeDetailsCard recipe={data} />
      </div>
      <div className="flex justify-center items-center p-4 bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-700">
        {/* @ts-expect-error Server Component */}
        <RecipeDetailsComment id={data._id} />
      </div>
      <div>
        <AddComment recipeId={params.id} />
      </div>
    </div>
  );
};

export default RecipeDetailsPage;
