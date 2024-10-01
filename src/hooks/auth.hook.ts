import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

import {
  forgetPassword,
  loginUser,
  registerUser,
} from "../services/AuthService";

export const useUserRegistration = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_REGISTRATION"],
    mutationFn: async (userData) => await registerUser(userData),
    onSuccess: () => {
      toast.success("User Creation successful");
    },
    onError(error: any) {
      toast.error(error?.message);
    },
  });
};
export const useUserLogin = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_LOGIN"],
    mutationFn: async (userData) => await loginUser(userData),
    onSuccess: () => {
      toast.success("User login successful");
    },
    onError(error: any) {
      toast.error(error?.message);
    },
  });
};
export const useUserForgetPassword = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_FORGET_PASSWORD"],
    mutationFn: async (userData) => await forgetPassword(userData),
    onSuccess: () => {
      toast.success("Email sent successful. Please check Email");
    },
    onError(error: any) {
      toast.error(error?.message);
    },
  });
};
