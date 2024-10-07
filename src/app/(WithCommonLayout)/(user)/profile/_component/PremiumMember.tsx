import { Button } from "@nextui-org/button";
import { Card, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import React from "react";

const PremiumMember = () => {
  return (
    <div>
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-5"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Thanks for love Forkify
          </p>
          <h4 className=" font-medium text-2xl text-black">Premium Member</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src="https://images.unsplash.com/photo-1487712010531-65e9aa8b4b1a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black text-tiny">Buy Date</p>
            <p className="text-black text-tiny">End Date </p>
          </div>
          <Button
            className="text-tiny"
            color="primary"
            variant="shadow"
            radius="full"
            size="sm"
          >
            Notify Me
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PremiumMember;
