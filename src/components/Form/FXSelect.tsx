import { Select, SelectItem } from "@heroui/select";
import { useFormContext } from "react-hook-form";

import { IInput } from "@/src/types";

interface IProps extends IInput {
  options: { key: string; label: string }[];
}

const FXSelect = ({ options, name, label }: IProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Select {...register(name)} label={label}>
      {options.map((option) => (
        <SelectItem key={option.key}>{option.label}</SelectItem>
      ))}
    </Select>
  );
};

export default FXSelect;
