"use server";

import { FieldValues } from "react-hook-form";

import axiosInstance from "@/src/libs/AxiosInstance";

export const registerUser = async (userData: FieldValues) => {
  try {
    const res = await axiosInstance.post("/auth/register", userData);

    console.log(res.data);
  } catch (error: any) {
    throw new Error(error);
  }
};
