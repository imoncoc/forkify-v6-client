"use client";
import React from "react";
import { Card, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";
import { ArrowBigDown, ArrowBigUp, MessageSquareMore } from "lucide-react";
import ReactStars from "react-stars";
import { useRouter } from "next/navigation";

import { TRecipe } from "@/src/types";
import { useUser } from "@/src/context/user.provider";
import { checkUserVote } from "@/src/utils/voteFunction";
import {
  useUserRatingsRecipe,
  useUserUpVoteRecipe,
} from "@/src/hooks/recipe.hook";

// import { getRecentPost, updateRatingsRecipe } from "@/src/services/recipes";

const RecentRecipeCard = ({
  recipe,
  refetchRecentPosts,
}: {
  recipe: TRecipe;
  refetchRecentPosts: () => Promise<void>;
}) => {
  const { thumbnail, title, tags, downvote, upvote, rating } = recipe;
  const { user } = useUser();
  const { mutate: handleVoteSystem } = useUserUpVoteRecipe();
  const { mutate: handleRatings } = useUserRatingsRecipe();

  console.log("RecentRecipeCard: ", recipe);

  const { isUpVote, isDownVote } = checkUserVote(
    user?.userId,
    upvote,
    downvote
  );

  // console.log({ isUpVote, isDownVote });

  // console.log("user: ", user);
  // console.log("recipe: ", recipe);
  const router = useRouter();
  // console.log("recipe: ", recipe);

  const ratingChanged = (newRating: number) => {
    const id = recipe._id;

    const userData = {
      userId: user?.userId as string,
      ratingValue: newRating as number,
    };

    handleRatings({ id, userData });
  };

  const handleViewDetails = (id: string) => {
    console.log("id: ", id);
    router.push(`/recipe/${id}`);
  };

  const handleUpvote = async (id: string) => {
    const userData = {
      userId: user?.userId as string,
      isUpvote: true as boolean,
    };

    await handleVoteSystem({ id, userData });
    console.log("res: ", res);
    refetchRecentPosts();
  };
  const handleDownVote = (id: string) => {
    const userData = {
      userId: user?.userId as string,
      isDownVote: true as boolean,
    };

    handleVoteSystem({ id, userData });
  };

  return (
    <div>
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-7"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <div className="text-tiny w-full flex justify-between  text-white/60 uppercase font-bold">
            <div>
              <Chip color="default" className="text-tiny" variant="faded">
                {tags}
              </Chip>
            </div>
            {recipe.isPremium && (
              <div>
                <Chip color="secondary" className="text-tiny" variant="shadow">
                  {"Premium"}
                </Chip>
              </div>
            )}
          </div>
          <h4 className="text-white/90 font-medium text-xl">{title}</h4>
          <p className="text-tiny">{user?.email}</p>
        </CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src={thumbnail}
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex justify-between flex-grow gap-4 items-center text-white">
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
              <ArrowBigUp
                className={`cursor-pointer ${isUpVote && "text-emerald-500"}`}
                onClick={() => handleUpvote(recipe._id)}
              />
              <span>{recipe.upvote.length}</span>
              <ArrowBigDown
                className={`cursor-pointer ${isDownVote && "text-red-500"}`}
                onClick={() => handleDownVote(recipe._id)}
              />
              <span>{recipe.downvote.length}</span>
            </div>

            <div className="flex justify-center items-center gap-2">
              <ReactStars
                color2={"#ffd700"}
                count={5}
                size={24}
                value={recipe.rating || 0}
                onChange={ratingChanged}
              />
              <p>({recipe.rating || 0})</p>
            </div>
            <div className="flex gap-2 me-2">
              <Button color="primary" radius="full" size="sm" variant="shadow">
                Follow
              </Button>
            </div>
          </div>
          <Button
            color="warning"
            radius="full"
            size="sm"
            variant="shadow"
            onClick={() => handleViewDetails(recipe._id)}
          >
            View Details
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default RecentRecipeCard;
