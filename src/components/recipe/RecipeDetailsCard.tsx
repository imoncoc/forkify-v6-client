"use client";
import { Card, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import React from "react";
import ReactStars from "react-stars";

import { TRecipe } from "@/src/types";
import { ArrowBigDown, ArrowBigUp, MessageSquareMore } from "lucide-react";

const RecipeDetailsCard = ({ recipe }: { recipe: TRecipe }) => {
  const ratingChanged = (newRating: number) => {
    console.log(newRating);
  };

  return (
    <Card className="relative w-full max-w-6xl rounded-lg overflow-hidden shadow-lg">
      {/* Car Image with Overlay */}
      <div className="relative">
        <Image
          removeWrapper
          alt={recipe?.title}
          className="w-full h-[500px] object-cover transition-transform transform hover:scale-110 duration-1000 ease-in-out"
          src={recipe?.thumbnail}
        />
        {/* Frosted Glass Effect for Text Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex items-end p-6">
          <CardHeader className="space-y-2 backdrop-blur-md bg-white/20 p-4 rounded-lg shadow-md gap-4">
            <h4 className="text-white font-extrabold text-4xl tracking-wider uppercase">
              {recipe?.title}{" "}
              <span className="text-lg text-white/70">
                (
                {recipe?.tags.map((tag: string, index: number) => (
                  <span key={index}>{tag}</span>
                ))}
                )
              </span>
            </h4>
            <div className="w-32 text-white">
              <p>( {recipe.timeFun} min )</p>
            </div>
          </CardHeader>
        </div>
      </div>

      {/* Footer Section with Frosted Effect */}
      <CardFooter className="p-8 w-full backdrop-blur-md bg-white/20 dark:bg-gray-800/40 rounded-b-lg shadow-lg border-t border-gray-300 dark:border-gray-600">
        <div className="w-full">
          <p className="mb-4"> {recipe.description}</p>
          {/* <div>
            // {recipe?.ingredients((ing: string, ind: number) => (
            //   <p key={ind}>{ing}</p>
            // ))}
          </div> */}
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          <div className="flex w-full  gap-4 justify-between py-2">
            <div className="flex gap-2">
              <ArrowBigUp className="cursor-pointer text-emerald-500" />
              <span>{recipe.upvote.length - recipe.downvote.length}</span>
              <ArrowBigDown className="cursor-pointer" />
            </div>

            <div className="flex justify-center items-center gap-2">
              <ReactStars
                color2={"#ffd700"}
                count={5}
                size={24}
                onChange={ratingChanged}
              />
              <p>({recipe.ratting})</p>
            </div>
          </div>

          <div>
            <p>Comments</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default RecipeDetailsCard;
