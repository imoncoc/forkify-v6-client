import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

interface ITPros {
  imageUrl: string;
  name: string;
  role: string;
  description: string;
}

const NextUICard = ({ imageUrl, name, role, description }: ITPros) => {
  return (
    <Card
      isHoverable
      isPressable
      className="w-full max-w-sm rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out border border-gray-200"
    >
      {/* Card Header */}
      <CardHeader className="flex flex-col items-start p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-t-lg">
        <h4 className="text-lg font-bold text-white">{name}</h4>
        <p className="text-sm text-gray-200">{role}</p>
      </CardHeader>

      {/* Card Image */}
      <div className="relative h-[240px] w-full overflow-hidden">
        <Image
          alt={`${name}'s image`}
          className="object-cover w-full h-full"
          src={imageUrl}
        />
      </div>

      {/* Card Body */}
      <CardBody className="p-4">
        <p className="text-gray-700">{description}</p>
      </CardBody>

      {/* Card Footer */}
      <CardFooter className="p-4 flex justify-center">
        <Button className="shadow-md hover:shadow-lg" color="primary">
          Contact
        </Button>
      </CardFooter>
    </Card>
  );
};

export default NextUICard;
