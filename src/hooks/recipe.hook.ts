import { useMutation, useQuery } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

import { addNewRecipe, getUserRecipe } from "../services/recipes";

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
