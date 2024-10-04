/* eslint-disable prettier/prettier */

import RecentRecipeCard from "./RecentRecipeCard";
import { getRecentPost } from "@/src/services/recipes";

const RecentRecipe = async () => {
  const { data } = await getRecentPost();

  return (
    <>
      <div>
        {data && (
          <div className="container mx-auto">
            <div className=" py-32 grid grid-cols-2  md:grid-cols-3 gap-6 mx-4 md:mx-0">
              {data?.result?.map((recipe: any) => (
                <RecentRecipeCard key={recipe._id} recipe={recipe} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default RecentRecipe;
