import React from "react";

import RecipeDetailsCard from "@/src/components/recipe/RecipeDetailsCard";
import { getSingleRecipe } from "@/src/services/recipes";

const RecipeDetailsPage = async ({ params }) => {
  const { data } = await getSingleRecipe(params.id);

  return (
    <div>
      <div className="min-h-screen flex justify-center items-center p-4 bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-700">
        <RecipeDetailsCard recipe={data} />
      </div>
    </div>
  );
};

export default RecipeDetailsPage;
