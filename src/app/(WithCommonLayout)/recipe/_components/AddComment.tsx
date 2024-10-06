"use client";
import { Button } from "@nextui-org/button";
import React from "react";
import { toast } from "sonner";

import FXForm from "@/src/components/form/FXForm";
import FXTextarea from "@/src/components/form/FXTextArea";
import { useUser } from "@/src/context/user.provider";
import { useAddNewComment } from "@/src/hooks/comment.hook";

const AddComment = ({ recipeId }: { recipeId: string }) => {
  const { user } = useUser();
  const { mutate: handleAddNewComment } = useAddNewComment();

  console.log({ user });

  const onSubmit = (data: any) => {
    const userData = {
      comment: data?.comment,
      recipeId: recipeId,
      userId: user?.userId,
    };

    if (userData?.comment?.length === 0) {
      toast.error("Plsease add your comment");

      return;
    }

    console.log({ userData });

    handleAddNewComment(userData);
  };

  return (
    <div className="container mx-auto">
      <div className="w-full md:w-4/5 lg:w-3/5 mx-auto py-8 px-8 md:px-0">
        <div>
          <p className="py-2 text-end">Add your Comment</p>
        </div>
        <FXForm
          //! Only for development

          //   resolver={zodResolver(registerValidationSchema)}
          onSubmit={onSubmit}
        >
          <div className="py-3">
            <FXTextarea label="Comment" name="comment" size="sm" />
          </div>

          <Button
            className="my-3 w-full rounded-md bg-default-900 text-default"
            size="lg"
            type="submit"
          >
            Submit
          </Button>
        </FXForm>
      </div>
    </div>
  );
};

export default AddComment;
