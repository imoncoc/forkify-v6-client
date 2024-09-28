import { DatePicker } from "@nextui-org/date-picker";
import { Controller, useFormContext } from "react-hook-form";

import { IInput } from "@/src/types";

interface IProps extends IInput {}

const FXDatePicker = ({ label, name }: IProps) => {
  return (
    <Controller
      name={name}
      render={({ field: { value, ...fields } }) => (
        <DatePicker
          className="min-w-full sm:min-w-[225px]"
          label={label}
          {...fields}
        />
      )}
    />
  );
};

export default FXDatePicker;
