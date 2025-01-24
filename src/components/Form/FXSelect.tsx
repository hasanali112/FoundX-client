import { Select, SelectItem } from "@heroui/select";
import { useFormContext } from "react-hook-form";

import { IInput } from "@/src/types";

interface IProps extends IInput {
  options: { key: string; label: string }[];
}

const FXSelect = ({
  options,
  name,
  label,
  disabled,
  variant = "bordered",
  size = "md",
}: IProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Select
      variant={variant}
      size={size}
      {...register(name)}
      label={label}
      isDisabled={disabled}
    >
      {options.map((option) => (
        <SelectItem key={option.key}>{option.label}</SelectItem>
      ))}
    </Select>
  );
};

export default FXSelect;
