"use client";
import React from "react";

import UserInfo from "@/src/components/profile/UserInfo";
import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import { Button } from "@nextui-org/button";
import FXInputPassword from "@/src/components/form/FXInputPassword";

const EditProfilePage = () => {
  const onSubmit = (data) => {
    console.log("data: ", data);
  };

  return (
    <div className="container mx-auto">
      <div className="py-16">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full px-8 md:w-1/5 md:px-0">
            <UserInfo />
          </div>
          <div className="w-full px-8 md:w-4/5 md:px-0 ">
            <div>
              <p className="text-3xl text-center"> Edit your profile easily</p>
            </div>
            <div className="py-4 px-8">
              <FXForm
                //! Only for development
                defaultValues={{
                  name: "Mir Hussain",
                  email: "mir@gmail.com",
                  phone: "01711223344",
                  password: "12345678",
                  address: "123 Avenue",
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
                  <FXInput label="Phone" name="phone" size="sm" />
                </div>
                <div className="py-3">
                  <FXInput label="Address" name="address" size="sm" />
                </div>
                <div className="py-3">
                  <FXInputPassword
                    label="Update Password"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfilePage;
