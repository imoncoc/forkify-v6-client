import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

import { addNewRecipe } from "../services/recipes";

export const useAddNewRecipe = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["ADD_CLAIM_REQUEST"],
    mutationFn: async (postData) => await addNewRecipe(postData),
    onSuccess: () => {
      toast.success("Claim Request Created successfully");
    },
    onError(error: any) {
      toast.error(error?.message);
    },
  });
};
