import React from "react";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectCard";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
} from "../../assets/index";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Portfolio"
          des="Welcome to my portfolio website! As a passionate front-end developer, I specialize in creating visually appealing and highly functional websites. This platform showcases my skills, projects, and professional journey, reflecting my commitment to delivering excellent user experiences "
          src={projectOne}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Our e-commerce website is a one-stop destination for all your shopping needs, offering a wide range of products across various categories. We are dedicated to providing an exceptional online shopping experience with a focus on quality, affordability, and customer satisfaction"
          src={projectTwo}
        />

        <ProjectsCard
          title=" Food Delivery App Design "
          des=" Welcome to our Food Delivery App Design website, where innovation meets convenience. Our expertly crafted app design transforms the way you experience food delivery, offering a seamless, user-friendly interface that brings your favorite meals right to your doorstep. Whether you're a restaurant owner looking to expand your reach or a foodie seeking the best local eats, our design is tailored to meet your needs"
          src={projectThree}
        />
        <ProjectsCard
          title="Crypto DashBoard"
          des=" The Crypto Dashboard Design website offers a cutting-edge solution for cryptocurrency enthusiasts, traders, and investors to manage and monitor their digital assets efficiently. The platform features a sleek, user-friendly design, providing real-time data, advanced analytics, and powerful tools for a seamless crypto management experience"
          src={projectThree}
        />
        <ProjectsCard
          title="Voting App"
          des=" The back-end system for a voting app is responsible for managing data, processing votes, ensuring security, and providing a seamless experience for users. It involves handling user authentication, vote recording, real-time updates, and maintaining the integrity of the voting process."
          src={projectOne}
        />
        <ProjectsCard
          title="Web OS "
          des=" The primary goal is to improve the security posture of web applications by finding and fixing security weaknesses before they can be exploited."
          src={projectFour}
        />
      </div>
    </section>
  );
};

export default Projects;
