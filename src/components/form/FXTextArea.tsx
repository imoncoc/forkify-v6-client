/* eslint-disable @typescript-eslint/no-unused-vars */
import { Textarea } from "@nextui-org/input";
import { useFormContext, useWatch } from "react-hook-form";

import { IInput } from "@/src/types";

interface IProps extends IInput {
  type?: string;
}

export default function FXTextarea({
  name,
  label,
  variant = "bordered",
}: IProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const currentValue = useWatch({ name });

  return (
    <Textarea
      {...register(name)}
      label={label}
      minRows={6}
      value={currentValue || ""}
      variant={variant}
    />
  );
}
