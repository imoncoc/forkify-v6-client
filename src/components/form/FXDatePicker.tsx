import { DatePicker } from "@nextui-org/date-picker";
import { Controller } from "react-hook-form";

import { IInput } from "@/src/types";

interface IProps extends IInput {}

const FXDatePicker = ({ label, name }: IProps) => {
  return (
    <Controller
      name={name}
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
