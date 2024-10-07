"use client";
import { Button } from "@nextui-org/button";
import { CardFooter } from "@nextui-org/card";
import { ArrowBigDown, ArrowBigUp } from "lucide-react";
import React from "react";
import ReactStars from "react-stars";

import { TRecipe } from "@/src/types";

const RecentRecipeFooter = ({ recipe }: { recipe: TRecipe }) => {
  const ratingChanged = (newRating: number) => {
    console.log(newRating);
  };

  // const handleViewDetails = (id: string) => {
  //   console.log("id: ", id);
  // };

  return (
    <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
      <div className="flex flex-grow gap-2 items-center">
        {/* <Image
              alt="Breathing app icon"
              className="rounded-full w-10 h-11 bg-black"
              src={thumbnail}
            />
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">Breathing App</p>
              <p className="text-tiny text-white/60">
                Get a good night&apos;s sleep.
              </p>
            </div> */}

        <div className="flex gap-2">
          <ArrowBigUp />
          <span>{recipe.upvote.length - recipe.downvote.length}</span>
          <ArrowBigDown />
        </div>
        <div>Comments</div>
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
      <Button color="warning" radius="full" size="sm" variant="shadow">
        View Details
      </Button>
    </CardFooter>
  );
};

export default RecentRecipeFooter;
