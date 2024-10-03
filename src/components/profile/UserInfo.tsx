"use client";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import React from "react";

import { useUser } from "@/src/context/user.provider";

const UserInfo = async () => {
  const { user } = useUser();

  return (
    <div>
      {user && (
        <Card className="py-4">
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={user?.profilePhoto}
              width={270}
            />
          </CardBody>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-large">{user.name}</h4>
            <p className="text-tiny  font-bold">{user.email}</p>
            <small className="text-default-500">{user.phone}</small>
            <small className="text-default-500">{user.address}</small>
            <p className="text-tiny pt-2">MemberShip</p>
          </CardHeader>
        </Card>
      )}
    </div>
  );
};

export default UserInfo;
