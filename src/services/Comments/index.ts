"use server";
import envConfig from "@/src/config/envConfig";
import axiosInstance from "@/src/lib/AxiosInstance";
import { FieldValues } from "react-hook-form";

export const getAllRecipeComments = async (recipeId: string) => {
  let fetchOptions = {};

  fetchOptions = {
    cache: "no-store",
  };

  const res = await fetch(
    `${envConfig.baseApi}/recipes/comments/${recipeId}`,
    fetchOptions
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const addNewComment = async (commentData: FieldValues): Promise<any> => {
  try {
    const res = await axiosInstance.post(
      `/recipes/comment/${commentData?.recipeId}`,
      commentData
    );

    return res.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const deleteComment = async (id: string): Promise<any> => {
  try {
    const res = await axiosInstance.delete(`/recipes/comments/${id}`);

    return res.data;
  } catch (error: any) {
    throw new Error(error);
  }
};
