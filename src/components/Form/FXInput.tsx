"use client";

import { useFormContext } from "react-hook-form";
import { Input } from "@heroui/input";

import { IInput } from "@/src/types";


interface IProps extends IInput {}
const FXInput = ({
  variant = "bordered",
  size = "md",
  type = "text",
  label,
  name,
}: IProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <Input
        {...register(name)}
        errorMessage={errors[name] ? (errors[name].message as string) : ""}
        isInvalid={!!errors[name]}
        variant={variant}
        size={size}
        type={type}
        label={label}
      />
    </div>
  );
};

export default FXInput;
