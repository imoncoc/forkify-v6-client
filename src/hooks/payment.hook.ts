import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

import { paymentUser } from "../services/Payments";

export const useUserPayment = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_REGISTRATION"],
    mutationFn: async (userData) => await paymentUser(userData),
    onSuccess: (data) => {
      toast.success("Payment link created");

      return data;
    },
    onError(error: any) {
      toast.error(error?.message);
    },
  });
};
