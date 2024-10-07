"use server";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

import axiosInstance from "@/src/lib/AxiosInstance";
import envConfig from "@/src/config/envConfig";

export const paymentUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/payment/create", userData);

    return data;
  } catch (error: any) {
    toast.error(error);
  }
};

export const getCheckUserAlreadyPayment = async (email: string) => {
  let fetchOptions = {};

  fetchOptions = {
    cache: "no-store",
  };

  const res = await fetch(
    `${envConfig.baseApi}/payments/check/${email}`,
    fetchOptions
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
