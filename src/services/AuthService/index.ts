"use server";

import { FieldValues } from "react-hook-form";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

import axiosInstance from "@/src/lib/AxiosInstance";

export const registerUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/register", userData);

    console.log("data : ", data);

    if (data?.success) {
      cookies().set("accessToken", data?.data?.accessToken);
      cookies().set("refreshToken", data?.data?.refreshToken);
    }

    return data;
  } catch (error: any) {
    console.log(error);
  }
};

export const loginUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/login", userData);

    if (data?.success) {
      cookies().set("accessToken", data?.data?.accessToken);
      cookies().set("refreshToken", data?.data?.refreshToken);
    }

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const UpdateUser = async (userData: FieldValues) => {
  console.log("UpdateUser: ", userData);
  const accessToken = cookies().get("accessToken")?.value;
  let decodedToken = null;

  if (accessToken) {
    decodedToken = await jwtDecode(accessToken);
  }
  console.log("UpdateUser id: ", decodedToken?.userId);

  try {
    const { data } = await axiosInstance.patch(
      `/auth/user/${decodedToken?.userId}`,
      userData
    );

    console.log("UpdateUser after data: ", data);

    if (data?.success) {
      return data;
    } else {
      throw new Error("Something went wrong");
    }
  } catch (error: any) {
    console.log("UpdateUser error error: ", error);
    throw new Error(error);
  }
};
export const forgetPassword = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post(
      "/auth/forget-password",
      userData
    );

    // if (data?.success) {
    //   cookies().set("accessToken", data?.data?.accessToken);
    //   cookies().set("refreshToken", data?.data?.refreshToken);
    // }
    if (data?.success) {
      return data;
    } else {
      throw new Error("Something went wrong");
    }
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getCurrentUser = async () => {
  const accessToken = cookies().get("accessToken")?.value;

  let decodedToken = null;

  if (accessToken) {
    decodedToken = await jwtDecode(accessToken);

    console.log("decodedToken: ", decodedToken);

    return {
      name: decodedToken.name,
      email: decodedToken.email,
      phone: decodedToken.phone,
      profilePhoto: decodedToken.profilePhoto,
      role: decodedToken.role,
      status: decodedToken.status,
      address: decodedToken.address,
      userId: decodedToken.userId,
    };
  }

  return decodedToken;
};

export const logout = () => {
  cookies().delete("accessToken");
  cookies().delete("refreshToken");
};

export const getNewAccessToken = async () => {
  try {
    const refreshToken = cookies().get("refreshToken")?.value;

    const res = await axiosInstance({
      url: "/auth/refresh-token",
      method: "POST",
      withCredentials: true,
      headers: {
        cookies: `refreshToken=${refreshToken}`,
      },
    });

    return res.data;
  } catch (error) {
    throw new Error("Failed to get new access token");
  }
};
