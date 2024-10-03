/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React from "react";
import { Button } from "@nextui-org/button";
import { toast } from "sonner";

import UserInfo from "@/src/components/profile/UserInfo";
import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import FXInputPassword from "@/src/components/form/FXInputPassword";
import { useUser } from "@/src/context/user.provider";
import { useUserUpdate } from "@/src/hooks/auth.hook";
import Loading from "@/src/components/UI/Loading";

const EditProfilePage = () => {
  const { mutate: handleUpdateUser, isPending } = useUserUpdate();
  const { user, setIsLoading: userLoading } = useUser();

  const onSubmit = async (data: any) => {
    const { profilePhoto, password, ...userData } = data;

    if (password) {
      if (password.length < 8) {
        toast.error("Error: Password must be at least 8 characters long.");

        return;
      } else {
        userData.password = password;
      }
    }

    const imageData = data?.profilePhoto[0];

    const formData = new FormData();

    formData.append("data", JSON.stringify(userData));
    if (imageData) {
      formData.append("image", imageData);
    }

    await handleUpdateUser(formData);
    userLoading(true);
  };

  return (
    <>
      {isPending && <Loading />}
      <div className="container mx-auto">
        <div className="py-16">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full px-8 md:w-1/5 md:px-0">
              {/* @ts-expect-error Server Component */}
              <UserInfo />
            </div>
            <div className="w-full px-8 md:w-4/5 md:px-0 ">
              <div>
                <p className="text-3xl text-center">
                  {" "}
                  Edit your profile easily
                </p>
              </div>
              <div className="py-4 px-8">
                <FXForm
                  //! Only for development
                  defaultValues={{
                    name: user?.name,
                    // email: user?.email,
                    phone: user?.phone,
                    password: null,
                    address: user?.address,
                  }}
                  // resolver={zodResolver(registerValidationSchema)}
                  onSubmit={onSubmit}
                >
                  <div className="py-3">
                    <FXInput label="Name" name="name" size="sm" />
                  </div>
                  {/* <div className="py-3">
                  <FXInput label="Email" name="email" size="sm" />
                </div> */}
                  <div className="py-3">
                    <FXInput label="Phone" name="phone" size="sm" />
                  </div>
                  <div className="py-3">
                    <FXInput label="Address" name="address" size="sm" />
                  </div>
                  <div className="py-3">
                    <FXInput
                      label="Image"
                      name="profilePhoto"
                      size="sm"
                      type="file"
                    />
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
                    Update
                  </Button>
                </FXForm>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfilePage;
