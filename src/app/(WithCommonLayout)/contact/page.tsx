import { Button } from "@nextui-org/button";
import React from "react";

import ContactCard from "@/src/components/contact/ContactCard";
import mail from "../../../assets/unknown-mail.png";
import phone from "../../../assets/phone-call.png";
import address from "../../../assets/address-book.png";

const page = () => {
  const contactData = [
    { name: "Email: ", description: "imoncoc0@gmail.com", thumbnail: mail },
    { name: "Phone: ", description: "+8801521-325206", thumbnail: phone },
    {
      name: "Address: ",
      description: "Narayangonj, Dhaka",
      thumbnail: address,
    },
  ];

  return (
    <>
      <div
        className="relative hero min-h-[640px] xl:min-h-[840px] bg-fixed bg-no-repeat bg-cover bg-center xl:rounded-br-[290px] z-20"
        style={{
          backgroundImage: `
      linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)),
      url('https://images.unsplash.com/photo-1528747045269-390fe33c19f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
    `,
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="container mx-auto flex items-end justify-end  h-[500px] px-4 sm:px-8 pt-16">
          <div className="text-right max-w-[600px]">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Get in Touch with Us
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-white mt-4">
              We`d love to hear from you! Reach out for any questions or
              inquiries. Your feedback is important to us.
            </p>
            <Button size="lg" color="primary" variant="shadow" className="mt-6">
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="flex justify-center items-center gap-8  py-32">
          {contactData.map((contact: any) => (
            <ContactCard key={contact.name} contact={contact} />
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
