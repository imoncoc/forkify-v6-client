/* eslint-disable prettier/prettier */
"use client";
import { useEffect, useState } from "react";

import RecentRecipeCard from "./RecentRecipeCard";
import { getRecentPost } from "@/src/services/recipes";
import Loading from "../UI/Loading";

const RecentRecipe = async () => {
  const [recipes, setRecipes] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Function to refetch recent posts
  const refetchRecentPosts = async () => {
    setIsLoading(true);
    try {
      const { data } = await getRecentPost();
      setRecipes(data?.result || []);
    } catch (error) {
      console.error("Failed to fetch recent posts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Fetch initial data
    refetchRecentPosts();
  }, []);

  return (
    <>
      <div>
        {isLoading && <Loading />}
        {!isLoading && recipes && (
          <div className="container mx-auto">
            <div className="py-32 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mx-4 md:mx-0">
              {recipes.map((recipe: any) => (
                <RecentRecipeCard
                  key={recipe._id}
                  recipe={recipe}
                  // Passing the refetch function as prop
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default RecentRecipe;
