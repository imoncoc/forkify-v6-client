"use server";
import { FieldValues } from "react-hook-form";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

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

export const getUserRecipe = async () => {
  const accessToken = cookies().get("accessToken")?.value;
  let decodedToken = null;

  if (accessToken) {
    decodedToken = await jwtDecode(accessToken);
  }

  try {
    const res = await axiosInstance.get(`/user-recipe/${decodedToken?.userId}`);

    return res.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getRecentPost = async () => {
  let fetchOptions = {};

  // fetchOptions = {
  //   cache: "no-store",
  // };
  fetchOptions = {
    next: {
      revalidate: 5,
    },
  };

  const res = await fetch(
    `${envConfig.baseApi}/recipe?limit=6&isDeleted=false`,
    fetchOptions
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const getSingleRecipe = async (id: string) => {
  let fetchOptions = {};

  fetchOptions = {
    cache: "no-store",
  };

  const res = await fetch(`${envConfig.baseApi}/recipe/${id}`, fetchOptions);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const upVoteRecipe = async (
  id: string,
  userData: FieldValues
): Promise<any> => {
  try {
    const res = await axiosInstance.post(`/user-recipe/vote/${id}`, userData);

    return res.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const updateRatingsRecipe = async (
  id: string,
  userData: FieldValues
): Promise<any> => {
  try {
    const res = await axiosInstance.post(
      `/user-recipe/ratings/${id}`,
      userData
    );

    return res.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const followOrUnFollow = async (postData: FieldValues): Promise<any> => {
  try {
    const res = await axiosInstance.post(
      `/auth/user/follow/${postData.userId}`,
      postData?.userData
    );

    return res.data;
  } catch (error: any) {
    throw new Error(error);
  }
};
