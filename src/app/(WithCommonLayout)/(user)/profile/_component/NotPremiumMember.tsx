import { Button } from "@nextui-org/button";
import { Card, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

import { useUserPayment } from "@/src/hooks/payment.hook";
import { IUser } from "@/src/types";
import { logout } from "@/src/services/AuthService";

const NotPremiumMember = async ({ userInfo }: { userInfo: IUser }) => {
  const { mutate: handlePayment, data } = useUserPayment();

  const handlePaymentButton = async () => {
    const user = {
      name: userInfo.name,
      email: userInfo.email,
      phone: userInfo.phone,
      address: userInfo.address,
    };
    const userData = { user };

    // console.log("handlePaymentButton: ", userData);
    handlePayment(userData);
  };

  if (data && data.success) {
    window.location.href = data.data.payment_url;
    logout();
  }

  return (
    <div>
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-7"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Buy premium membership
          </p>
          <h4 className="text-white/90 font-medium text-xl">
            Easily access all premium recipe.
          </h4>
          <h4 className="text-white/90 font-medium text-xl">$20 / month</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.6)" }}
          src="https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <Image
              alt="Breathing app icon"
              className="rounded-full w-10 h-11 bg-black"
              src="https://nextui.org/images/breathing-app-icon.jpeg"
            />
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">forkify App</p>
              <p className="text-tiny text-white/60">
                Get your premium recipe now
              </p>
            </div>
          </div>
          <Button
            color="warning"
            variant="shadow"
            radius="full"
            size="sm"
            onClick={() => handlePaymentButton()}
          >
            Get premium membership
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default NotPremiumMember;
