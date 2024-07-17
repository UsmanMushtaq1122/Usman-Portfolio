import React from "react";

import { motion } from "framer-motion";
const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Front End Skill</h2>
        </div>
        <div className='className="mt-14 w-full flex flex-col gap-6'>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">HTML</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <span className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                <span className="absolute -top-7 right-0">90%</span>
              </span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">CSS</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <span className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                <span className="absolute -top-7 right-0">90%</span>
              </span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">tailwind css</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <span className="w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                <span className="absolute -top-7 right-0">60%</span>
              </span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Javascript</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <span className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                <span className="absolute -top-7 right-0">70%</span>
              </span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">React</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <span
                initial={{ x: "-100%", opacity: 0 }}
                className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">85%</span>
              </span>
            </span>
          </div>
        </div>
      </div>

      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            {" "}
            Back End Development
          </h2>
        </div>
        <div className="flex flex-col gap-6">
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Node js</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <span className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                <span className="absolute -top-7 right-0">80%</span>
              </span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Express js</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <span className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                <span className="absolute -top-7 right-0">75%</span>
              </span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">MongoDB</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <span className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                <span className="absolute -top-7 right-0">80%</span>
              </span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">SQL</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <span className="w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                <span className="absolute -top-7 right-0">75%</span>
              </span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">SOFTWARE</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <span className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                <span className="absolute -top-7 right-0">90%</span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
