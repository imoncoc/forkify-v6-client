"use client";

import { Button } from "@nextui-org/button";
import React from "react";
import Link from "next/link";

import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";

const LoginPage = () => {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      {/* {isPending && <Loading />} */}
      <div className="flex h-[calc(100vh-100px)] pt-10 w-full flex-col items-center justify-center bg-gradient-to-r from-customColor1/10 to-customColor2/10 dark:bg-gradient-to-r dark:from-default-100 dark:to-default-50">
        <h3 className="my-2 text-2xl font-bold">Login with FoundX</h3>
        <p className="mb-4">Welcome Back! Let&lsquo;s Get Started</p>
        <div className="w-[80%] md:w-[60%] lg:w-[50%] xl:w-[35%]">
          <FXForm
            // resolver={zodResolver(loginValidationSchema)}
            onSubmit={onSubmit}
          >
            <div className="py-3">
              <FXInput label="Email" name="email" type="email" />
            </div>
            <div className="py-3">
              <FXInput label="Password" name="password" type="password" />
            </div>

            <Button
              className="my-3 w-full rounded-md bg-default-900 font-semibold text-default"
              size="lg"
              type="submit"
            >
              Login
            </Button>
          </FXForm>
          <div className="text-center">
            Don&lsquo;t have account ?{" "}
            <Link href={"/register"} className="hover:text-customColorPrimary">
              Register
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
