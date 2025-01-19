"use client";

import { Input } from "@heroui/input";
import { useFormContext } from "react-hook-form";

interface IProps {
  variant?: "flat" | "bordered" | "faded" | "underlined";
  size?: "sm" | "md" | "lg";
  type?: string;
  label?: string;
  name: string;
}

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
