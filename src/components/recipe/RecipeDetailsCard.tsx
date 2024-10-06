"use client";
import { Card, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import React from "react";
import ReactStars from "react-stars";
import { ArrowBigDown, ArrowBigUp } from "lucide-react";

import { TRecipe } from "@/src/types";
import {
  useUserRatingsRecipe,
  useUserUpVoteRecipe,
} from "@/src/hooks/recipe.hook";
import { useUser } from "@/src/context/user.provider";
import { checkUserVote } from "@/src/utils/voteFunction";

const RecipeDetailsCard = ({ recipe }: { recipe: TRecipe }) => {
  const {
    thumbnail,
    title,
    timeFun,
    tags,
    downvote,
    upvote,
    description,
    ingredients,
    _id,
    rating,
  } = recipe;
  const { mutate: handleVoteSystem } = useUserUpVoteRecipe();
  const { mutate: handleRatings } = useUserRatingsRecipe();
  const { user } = useUser();
  const { isUpVote, isDownVote } = checkUserVote(
    user?.userId,
    upvote,
    downvote
  );

  const ratingChanged = (newRating: number) => {
    const id = recipe._id;

    const userData = {
      userId: user?.userId as string,
      ratingValue: newRating as number,
    };

    handleRatings({ id, userData });
  };

  const handleUpvote = async (id: string) => {
    const userData = {
      userId: user?.userId as string,
      isUpvote: true as boolean,
    };

    handleVoteSystem({ id, userData });
  };

  const handleDownVote = (id: string) => {
    const userData = {
      userId: user?.userId as string,
      isDownVote: true as boolean,
    };

    handleVoteSystem({ id, userData });
  };

  return (
    <>
      <Card className="relative w-full max-w-6xl rounded-lg overflow-hidden shadow-lg">
        {/* Car Image with Overlay */}
        <div className="relative">
          <Image
            removeWrapper
            alt={title}
            className="w-full h-[500px] object-cover transition-transform transform hover:scale-110 duration-1000 ease-in-out"
            src={thumbnail}
          />
          {/* Frosted Glass Effect for Text Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex items-end p-6">
            <CardHeader className="space-y-2 backdrop-blur-md bg-white/20 p-4 rounded-lg shadow-md gap-4">
              <h4 className="text-white font-extrabold text-4xl tracking-wider uppercase">
                {title}{" "}
                <span className="text-lg text-white/70">
                  (
                  {tags.map((tag: string, index: number) => (
                    <span key={index}>{tag}</span>
                  ))}
                  )
                </span>
              </h4>
              <div className="w-32 text-white">
                <p>( {timeFun} min )</p>
              </div>
            </CardHeader>
          </div>
        </div>

        {/* Footer Section with Frosted Effect */}
        <CardFooter className="p-8 w-full backdrop-blur-md bg-white/20 dark:bg-gray-800/40 rounded-b-lg shadow-lg border-t border-gray-300 dark:border-gray-600">
          <div className="w-full">
            <p className="mb-4 text-2xl text-customColorPrimary">
              {" "}
              {description}
            </p>
            {/* <div>
            // {recipe?.ingredients((ing: string, ind: number) => (
            //   <p key={ind}>{ing}</p>
            // ))}
          </div> */}
            <ul>
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>

            <div className="flex w-full  gap-4 justify-between py-2">
              <div className="flex gap-2">
                <ArrowBigUp
                  className={`cursor-pointer ${isUpVote && "text-emerald-500"}`}
                  onClick={() => handleUpvote(recipe._id)}
                />
                <span>{upvote.length}</span>
                <ArrowBigDown
                  className={`cursor-pointer ${isDownVote && "text-red-500"}`}
                  onClick={() => handleDownVote(recipe._id)}
                />
                <span>{downvote.length}</span>
              </div>

              <div className="flex justify-center items-center gap-2">
                <ReactStars
                  color2={"#ffd700"}
                  count={5}
                  size={24}
                  value={rating ? rating : 0}
                  onChange={ratingChanged}
                />
                <p>({rating})</p>
              </div>
            </div>
            {/* <div>
            <p>Comments</p>
          </div> */}
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default RecipeDetailsCard;
