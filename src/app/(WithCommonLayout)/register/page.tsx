/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React from "react";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import registerValidationSchema from "@/src/schemas/register.schema";
import Loading from "@/src/components/UI/Loading";
import { useUserRegistration } from "@/src/hooks/auth.hook";

const register = () => {
  const {
    mutate: handleUserRegistration,
    isPending,
    isError,
  } = useUserRegistration();

  console.log("isError: ", isError);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const userData = {
      ...data,
      role: "user",
      profilePhoto:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    };

    // console.log("inside from user Data: ", userData);
    // registerUser(userData);
    handleUserRegistration(userData);
  };

  return (
    <>
      {isPending && <Loading />}
      <div className="flex h-[calc(100vh-100px)] flex-col items-center justify-center bg-gradient-to-r from-customColor1/10 to-customColor2/10 dark:bg-gradient-to-r dark:from-default-100 dark:to-default-50">
        <h3 className="my-2 text-xl font-bold">Register with FoundX</h3>
        <p className="mb-4">Help Lost Items Find Their Way Home</p>
        <div className="w-[80%] md:w-[60%] lg:w-[50%] xl:w-[35%]">
          <FXForm
            //! Only for development
            defaultValues={{
              name: "Mir Hussain",
              email: "mir@gmail.com",
              phone: "01711223344",
              password: "12345678",
              address: "123 Avenue",
            }}
            resolver={zodResolver(registerValidationSchema)}
            onSubmit={onSubmit}
          >
            <div className="py-3">
              <FXInput label="Name" name="name" size="sm" />
            </div>
            <div className="py-3">
              <FXInput label="Email" name="email" size="sm" />
            </div>
            <div className="py-3">
              <FXInput label="Phone" name="phone" size="sm" />
            </div>
            <div className="py-3">
              <FXInput label="Address" name="address" size="sm" />
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
            <Link className="hover:text-customColorPrimary" href={"/login"}>
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default register;
