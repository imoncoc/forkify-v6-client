"use client";
import { Button } from "@nextui-org/button";
import React, { useEffect } from "react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";

import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import loginValidationSchema from "@/src/schemas/login.schemas";
import { useUserLogin } from "@/src/hooks/auth.hook";
import Loading from "@/src/components/UI/Loading";
import { useUser } from "@/src/context/user.provider";
import FXInputPassword from "@/src/components/form/FXInputPassword";

const LoginPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setIsLoading: userLoading } = useUser();

  const redirect = searchParams.get("redirect");
  const { mutate: handleLogin, isPending, isSuccess } = useUserLogin();

  const onSubmit: SubmitHandler<FieldValues> = (userData) => {
    handleLogin(userData);
    userLoading(true);
  };

  useEffect(() => {
    if (!isPending && isSuccess) {
      if (redirect) {
        router.push(redirect);
      } else {
        router.push("/");
      }
    }
  }, [isPending, isSuccess]);

  return (
    <>
      {isPending && <Loading />}
      <div className="flex h-[calc(100vh-100px)] pt-10 w-full flex-col items-center justify-center bg-gradient-to-r from-customColor1/10 to-customColor2/10 dark:bg-gradient-to-r dark:from-default-100 dark:to-default-50">
        <h3 className="my-2 text-2xl font-bold">Login with Forkify</h3>
        <p className="mb-4">Welcome Back! Let&lsquo;s Get Started</p>
        <div className="w-[80%] md:w-[60%] lg:w-[50%] xl:w-[35%]">
          <FXForm
            resolver={zodResolver(loginValidationSchema)}
            onSubmit={onSubmit}
          >
            <div className="py-3">
              <FXInput label="Email" name="email" type="email" />
            </div>
            <div className="py-3">
              <FXInputPassword
                label="Password"
                name="password"
                type="password"
              />
            </div>

            <div className="flex gap-2 justify-end">
              <p className="text-end">Forget your password?</p>
              <Link
                className="text-customColorPrimary hover:text-customColor1"
                href={"/forget-password"}
              >
                Click here
              </Link>
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
            <Link className="hover:text-customColorPrimary" href={"/register"}>
              Register
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
