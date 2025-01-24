
import { DatePicker } from "@heroui/date-picker";
import { Controller } from "react-hook-form";

import { IInput } from "@/src/types";

interface IProps extends IInput {}

const FXDatePicker = ({ label, name }: IProps) => {
  return (
    <div>
      <Controller
        name={name}
        render={({ field: { value, ...fields } }) => (
          <DatePicker {...fields} label={label} value={value} />
        )}
      />
    </div>
  );
};

export default FXDatePicker;
