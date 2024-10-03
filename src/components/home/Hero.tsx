"use client";
/* eslint-disable react/self-closing-comp */
import { motion } from "framer-motion";
import React from "react";
import { Button } from "@nextui-org/button";
import Image from "next/image";

import pizza from "../../assets/pizza.jpg";

const HeroPage = () => {
  return (
    <>
      <section className="bg-white dark:bg-black text-gray-800 dark:text-white relative overflow-hidden">
        {/* Decorative Circle */}
        <motion.div
          animate={{ scale: 1 }}
          className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30 dark:bg-gray-700"
          initial={{ scale: 0 }}
          transition={{ duration: 1.2 }}
        ></motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between">
          {/* Text Section */}
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
          >
            {/* <h1 className="text-5xl font-extrabold mb-6">
              Discover & Share
              <span className="text-customColorPrimary">
                {" "}
                Delicious Recipes
              </span>
            </h1> */}
            <h1 className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-customColor1 via-customColorPrimary to-customColor2 bg-clip-text text-transparent">
              Discover & Share <span className="block">Delicious Recipes</span>
            </h1>
            <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
              Explore a world of mouth-watering recipes, or contribute your own
              creations. Join a community of food lovers sharing their best
              dishes.
            </p>
            <div>
              <motion.div
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* <Button className="bg-gradient-to-r from-customColor2 to-customColor1 text-slate-700 font-medium px-8 py-4 rounded-lg text-lg">
                  Start Cooking
                </Button> */}
                <Button color="warning" size="lg" variant="shadow">
                  Start Cooking
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-1/2 mb-10 lg:mb-0"
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.2 }}
          >
            <Image
              alt="Sports Facility"
              className="rounded-2xl shadow-xl w-full object-cover"
              src={pizza}
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HeroPage;
