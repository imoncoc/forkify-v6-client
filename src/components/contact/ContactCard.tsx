import { Button } from "@nextui-org/button";
import { Card, CardFooter } from "@nextui-org/card";
// import { Image } from "@nextui-org/image";
import Image from "next/image";
import React from "react";

interface TContact {
  name: string;
  description: string;
  thumbnail: string;
}

const ContactCard = ({ contact }: { contact: TContact }) => {
  const { name, description, thumbnail } = contact;

  return (
    <Card isFooterBlurred className="border-none w-[260px]" radius="lg">
      <Image
        alt="Woman listing to music"
        className="object-cover p-4"
        height={260}
        src={thumbnail}
        width={260}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-black/80 dark:text-white/80">{name}</p>
        <Button
          className="text-tiny text-white bg-black/20"
          color="default"
          radius="lg"
          size="sm"
          variant="flat"
        >
          {description}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ContactCard;
