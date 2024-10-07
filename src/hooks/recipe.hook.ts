import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

import {
  addNewRecipe,
  followOrUnFollow,
  getRecentPost,
  getSingleRecipe,
  getUserRecipe,
  updateRatingsRecipe,
  upVoteRecipe,
} from "../services/recipes";

export const useAddNewRecipe = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["ADD_NEW_RECIPES"],
    mutationFn: async (postData) => await addNewRecipe(postData),
    onSuccess: () => {
      toast.success("Claim Request Created successfully");
    },
    onError(error: any) {
      toast.error(error?.message);
    },
  });
};

export const useUserGetRecipes = () => {
  return useQuery<any, Error>({
    queryKey: ["GET_RECIPES"],
    queryFn: async () => await getUserRecipe(), // Replace with your actual fetch function
  });
};

export const useUserUpVoteRecipe = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["UP_VOTE_RECIPE"],
    mutationFn: async ({ id, userData }) => await upVoteRecipe(id, userData),
    onSuccess: () => {
      toast.success("Added vote successfully");
      // getRecentPost();
    },
    onError(error: any) {
      toast.error(error?.message);
    },
  });
};

export const useUserRatingsRecipe = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["UP_VOTE_RECIPE"],
    mutationFn: async ({ id, userData }) =>
      await updateRatingsRecipe(id, userData),
    onSuccess: () => {
      toast.success("Added ratings successfully");
      // getRecentPost();
    },
    onError(error: any) {
      toast.error(error?.message);
    },
  });
};

export const useFollowOrUnFollow = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["FOLLOW_OR_UNFOLLOW"],
    mutationFn: async (postData) => {
      return await followOrUnFollow(postData);
    },
    onSuccess: () => {
      toast.success("Follow or UnFollow successful");
    },
    onError(error: any) {
      toast.error(error?.message);
    },
  });
};
