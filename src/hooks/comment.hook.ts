import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

import { addNewComment, deleteComment } from "../services/Comments";

export const useAddNewComment = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["ADD_NEW_COMMENT"],
    mutationFn: async (userData) => await addNewComment(userData),
    onSuccess: () => {
      toast.success("Add comment successful");
    },
    onError(error: any) {
      toast.error(error?.message);
    },
  });
};

export const useDeleteComment = () => {
  return useMutation<any, Error, string, FieldValues>({
    mutationKey: ["DELETE_COMMENT"],
    mutationFn: async (commentId) => await deleteComment(commentId),
    onSuccess: () => {
      toast.success("Deleted comment successful");
    },
    onError(error: any) {
      toast.error(error?.message);
    },
  });
};
