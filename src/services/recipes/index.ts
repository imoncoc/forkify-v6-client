"use server";
import { FieldValues } from "react-hook-form";

import envConfig from "@/src/config/envConfig";
import axiosInstance from "@/src/lib/AxiosInstance";

export const addNewRecipe = async (recipe: FieldValues): Promise<any> => {
  try {
    const res = await axiosInstance.post("/recipe", recipe);

    return res.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getAllRecipes = async () => {
  let fetchOptions = {};

  fetchOptions = {
    cache: "no-store",
  };

  const res = await fetch(`${envConfig.baseApi}/recipe`, fetchOptions);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
