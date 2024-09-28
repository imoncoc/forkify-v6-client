"use client";
import React from "react";
import { Button } from "@nextui-org/button";
import Link from "next/link";

import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";

const register = () => {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex h-[calc(100vh-100px)] flex-col items-center justify-center bg-gradient-to-r from-customColor1/10 to-customColor2/10 dark:bg-gradient-to-r dark:from-default-100 dark:to-default-50">
      <h3 className="my-2 text-xl font-bold">Register with FoundX</h3>
      <p className="mb-4">Help Lost Items Find Their Way Home</p>
      <div className="w-[35%]">
        <FXForm
          //! Only for development
          defaultValues={{
            name: "Mir Hussain",
            email: "mir@gmail.com",
            mobileNumber: "01711223344",
            password: "123456",
          }}
          // resolver={zodResolver(registerValidationSchema)}
          onSubmit={onSubmit}
        >
          <div className="py-3">
            <FXInput label="Name" name="name" size="sm" />
          </div>
          <div className="py-3">
            <FXInput label="Email" name="email" size="sm" />
          </div>
          <div className="py-3">
            <FXInput label="Mobile Number" name="mobileNumber" size="sm" />
          </div>
          <div className="py-3">
            <FXInput
              label="Password"
              name="password"
              size="sm"
              type="password"
            />
          </div>

          <Button
            className="my-3 w-full rounded-md bg-default-900 text-default"
            size="lg"
            type="submit"
          >
            Registration
          </Button>
        </FXForm>
        <div className="text-center">
          Already have an account ?{" "}
          <Link href={"/login"} className="hover:text-customColorPrimary">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default register;
