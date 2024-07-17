import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe, FaBars } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full  py-20  border-b-[1px]  border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="React Js Development"
          des=" A React JS developer is responsible for designing and implementing user interface components for JavaScript-based web applications using the React library."
          icon={<FaBars />}
        />
        <Card
          title="Front End Development"
          des="The role of a front-end developer in the development process is crucial, as they bridge the gap between the design and functionality of a website or web application."
          icon={<AiFillAppstore />}
        />
        <Card
          title="MERN Stack"
          des="As a MERN stack developer,My role involves developing full-stack web applications using MongoDB, Express.js, React.js, and Node.js"
          icon={<SiProgress />}
        />
        <Card
          title="Mobile Development"
          des="As a React Native developer, your role involves creating robust and efficient mobile applications using the React Native framework."
          icon={<FaMobile />}
        />
        <Card
          title="Business Developer"
          des="
A business developer in the software development industry plays a crucial role in driving growth and ensuring the company's success"
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting Websites"
          des="we provide website hosting on handsome packages"
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
};

export default Features;
