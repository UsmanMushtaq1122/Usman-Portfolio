import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
          <h2 className="text-4xl font-bold">Company Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="React Basics Fundamentals"
            subTitle="udemy"
            result="Success"
            des="This course is designed for those completely new to React, providing a hands-on, interactive approach. It covers core concepts, JSX, event handling, and building a complete app from scratch."
          />
          <ResumeCard
            title="JavaScript - The Complete Guide 2024 (Beginner + Advanced)"
            subTitle="By Maximilian Schwarzmüller on (Udemy)"
            result="Success"
            des="This course is comprehensive, covering everything from the basics to advanced topics. It includes project-driven learning, detailed explanations of core features, and deep dives into how JavaScript works behind the scenes."
          />
          <ResumeCard
            title="React & Redux Complete Course (2024) with Projects"
            subTitle="KgCoding "
            result="Success"
            des="This course covers everything from the basics to advanced concepts in React and Redux. It includes various projects to provide hands-on experience. The course is structured to help you build a solid foundation in React and Redux, making it suitable for learners at different stages​ "
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
