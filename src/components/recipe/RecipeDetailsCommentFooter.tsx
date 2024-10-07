"use client";
import { useUser } from "@/src/context/user.provider";
import { useDeleteComment } from "@/src/hooks/comment.hook";

import { Button } from "@nextui-org/button";
import { CardFooter } from "@nextui-org/card";
import React from "react";

const RecipeDetailsCommentFooter = ({
  commentId,
  userID,
}: {
  commentId: string;
  userID: string;
}) => {
  const { user } = useUser();
  const { mutate: handleToDeleteComment } = useDeleteComment();

  const handleDeleteComment = () => {
    handleToDeleteComment(commentId);
  };

  return (
    <>
      {" "}
      {user?.userId === userID && (
        <CardFooter className="absolute flex gap-4 justify-end  bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <Button radius="full" size="sm">
            Update
          </Button>
          <Button
            color="danger"
            radius="full"
            size="sm"
            onClick={() => handleDeleteComment()}
          >
            Delete
          </Button>
        </CardFooter>
      )}
    </>
  );
};

export default RecipeDetailsCommentFooter;
