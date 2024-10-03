import { Button } from "@nextui-org/button";
import React from "react";

import AboutTeamSection from "@/src/components/aboutUs/AboutTeamSection";

const AboutPage = () => {
  return (
    <>
      <div
        className="relative hero min-h-[640px] xl:min-h-[840px] bg-fixed bg-no-repeat bg-cover bg-center xl:rounded-bl-[290px] z-20"
        style={{
          backgroundImage: `
      linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)),
      url('https://plus.unsplash.com/premium_photo-1661589982036-9485efed6f5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
    `,
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="container mx-auto flex items-end justify-start h-[500px] px-4 sm:px-8 pt-16">
          <div className="text-left max-w-[600px]">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Unleash Your Inner Chef
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-white mt-4">
              Discover delicious recipes and culinary inspiration.
            </p>
            <Button className="mt-6" color="warning" size="lg" variant="shadow">
              Explore Recipes
            </Button>
          </div>
        </div>
      </div>

      <AboutTeamSection />
    </>
  );
};

export default AboutPage;
