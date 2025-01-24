import { DatePicker } from "@heroui/date-picker";
import { Controller } from "react-hook-form";

import { IInput } from "@/src/types";

interface IProps extends IInput {}

const FXDatePicker = ({
  label,
  name,
  variant = "bordered",
  size = "md",
}: IProps) => {
  return (
    <div>
      <Controller
        name={name}
        render={({ field: { value, ...fields } }) => (
          <DatePicker
            variant={variant}
            size={size}
            {...fields}
            label={label}
            value={value}
          />
        )}
      />
    </div>
  );
};

export default FXDatePicker;
