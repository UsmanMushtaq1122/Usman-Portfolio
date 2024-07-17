import React from "react";
import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion";
const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>

          <div className="border-blue-400">
            <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
              <ResumeCard
                title="BSc in Information technology"
                subTitle="University of Management And Technology (2019 - 2023)"
                result="2.70/4"
                des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
              />
              <ResumeCard
                title="Intermediate"
                subTitle=" Worker Welfare School (Boy's) Rana Town (2017 - 2019)"
                result=" Grade:B"
                des="I done my FSC in pre Enginnering.In fsc i got 677 marks out of 1100"
              />
              <ResumeCard
                title="Matric"
                subTitle="Worker Welfare School (Boy's) Rana Town (2015- 2017)"
                result="Grade: B"
                des="I done my matric with Biology.In matric i got 781 marks out of 1100"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        {/*<div className="py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>

          <div className="border-blue-400">
            <div className="  mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
              <ResumeCard
                title="MERN STACK DEVELOPER"
                subTitle="IT SOLUTIONS - ( OCT 2023 - FEB 2024)"
                result="Lahore"
                des="IT SOLUTIONS hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
              />
              <ResumeCard
                title=" Front-end Developer "
                subTitle="IT SOLUTIONS- (May 2023 - Sep 2023)"
                result="Lahore"
                des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in IT SOLUTION isn't easy."
              />
              <ResumeCard
                title="React JS  Developer"
                subTitle="IT SOLUTIONS - ( Jan 2023 - Feb 2023)"
                result="Lahore"
                des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
              />
            </div>
          </div>
        </div>*/}
      </div>
    </motion.div>
  );
};
export default Education;
