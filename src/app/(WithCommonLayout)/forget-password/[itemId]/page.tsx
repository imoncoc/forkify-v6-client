"use client";
import { Button } from "@nextui-org/button";
import { toast } from "sonner";

import FXForm from "@/src/components/form/FXForm";
import FXInputPassword from "@/src/components/form/FXInputPassword";

const forgetPasswordId = () => {
  const onSubmit = (data: any) => {
    console.log("data", data);
    toast.error("Something went wrong");
  };

  return (
    <div className="flex h-[calc(100vh-100px)] w-full flex-col items-center justify-center bg-gradient-to-r from-customColor1/10 to-customColor2/10 dark:bg-gradient-to-r dark:from-default-100 dark:to-default-50">
      <h3 className="my-2 text-2xl font-bold">Update Password</h3>
      <p className="mb-4">Let’s update!</p>
      <div className="w-[80%] md:w-[60%] lg:w-[50%] xl:w-[35%]">
        <FXForm
          // resolver={zodResolver(loginValidationSchema)}
          onSubmit={onSubmit}
        >
          <div className="py-3">
            <FXInputPassword
              label="Update Password"
              name="password"
              type="password"
            />
          </div>

          <Button
            className="my-3 w-full rounded-md bg-default-900 font-semibold text-default"
            size="lg"
            type="submit"
          >
            Submit
          </Button>
        </FXForm>
      </div>
    </div>
  );
};

export default forgetPasswordId;
