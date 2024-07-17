import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="MERN STACK Intern"
            subTitle="IT SOLUTIONS - ( OCT 2023 - FEB 2024)"
            result="Lahore"
            des="During my internship, I had the opportunity to work extensively with the MERN stack, which comprises MongoDB, Express.js, React.js, and Node.js. This experience was instrumental in developing my skills in full-stack web development and understanding the end-to-end process of building scalable and responsive web applications"
          />
          <ResumeCard
            title=" Front-end Developer Intern "
            subTitle="IT SOLUTIONS- (Feb 2023 - April 2023)"
            result="Lahore"
            des="As a front-end developer intern,I gain hands-on experience in designing and developing user-facing applications and websites. This internship  provide  with exposure to industry-standard tools and technologies, allowing  to contribute to real-world projects under the guidance of experienced mentors"
          />
          <ResumeCard
            title="React JS  Intern"
            subTitle="INFOTECH - ( Jun 2023 - August 2023)"
            result="Lahore"
            des=" During internship I Built responsive and dynamic user interfaces for web applications using React.js.Contributed to the development of Ecommerce Web Application.Used React Router to implement client-side routing, enhancing navigation and user experience.Integrated third-party APIs and RESTful services to fetch and display data dynamically.Used Git for version control, maintaining clean commit histories and participating in code reviews"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
