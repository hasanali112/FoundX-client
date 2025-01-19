import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

import { registerUser } from "../services/AuthService";

export const useUserRegister = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_REGISTRATION"],
    mutationFn: async (userData) => await registerUser(userData),
    onSuccess: () => {
      toast.success("Registration successful!");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
