"use client";

import { Input } from "@nextui-org/input";
import { useFormContext } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

import { IInput } from "@/src/types";

interface IProps extends IInput {}

export default function FXInputPassword({
  variant = "bordered",
  size = "md",
  required = false,
  type = "text",
  label,
  name,
}: IProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Input
      {...register(name)}
      endContent={
        <button
          aria-label="toggle password visibility"
          className="focus:outline-none"
          type="button"
          onClick={toggleVisibility}
        >
          {isVisible ? (
            <EyeOff className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <Eye className="text-2xl text-default-400 pointer-events-none" />
          )}
          {/* type={isVisible ? "text" : "password"} */}
        </button>
      }
      errorMessage={(errors[name]?.message as string) || ""}
      isInvalid={!!errors[name]}
      label={label}
      required={required}
      size={size}
      type={isVisible ? "text" : "password"}
      variant={variant}
    />
  );
}
