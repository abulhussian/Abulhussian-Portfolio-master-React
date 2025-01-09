import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Github from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Python from "../assets/python.jpeg";
import Selenium from "../assets/selenium.png";
import sql from "../assets/sql.png";

const Skills = () => {
  return (
    <div className=" md:pt-52 bg-[#0a192f]">
      <div
        name="skills"
        className="bg-[#0a192f] text-gray-300 w-full sm:h-screen sm:pt-0"
      >
        {/* Container */}
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center h-full w-full">
          <div>
            <p className="text-4xl font-bold inline border-b-4 border-[#ccd6f6]">
              Skills
            </p>
            <p className="py-4"> These are the technologies I've worked with</p>
          </div>

          {/* Core Skills Section */}
          <div className="mt-8">
            <p className="text-2xl font-bold text-[#ccd6f6]">Core Skills</p>
            <div className="w-4/5 grid grid-cols-2 sm:grid-cols-3 mx-auto gap-5 text-center py-8">
              <div className="shadow-md py-2 shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={HTML} alt="html icon" />
                <p className="my-4">HTML</p>
              </div>
              <div className="shadow-md py-2 shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={CSS} alt="css icon" />
                <p className="my-4">CSS</p>
              </div>
              <div className="shadow-md py-2 shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={Javascript} alt="js icon" />
                <p className="my-4">Javascript</p>
              </div>
              <div className="shadow-md py-2 shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={ReactImg} alt="react icon" />
                <p className="my-4">ReactJS</p>
              </div>
              <div className="shadow-md py-2 shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={Github} alt="Github icon" />
                <p className="my-4">Github</p>
              </div>
              <div className="shadow-md py-2 shadow-[#040c16] hover:scale-110 duration-500">
                <img
                  className="w-20 mx-auto"
                  src={Tailwind}
                  alt="Tailwind icon"
                />
                <p className="my-4">Tailwind</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-4/5 mx-auto border-t-2 border-gray-500 my-8"></div>

          {/* Additional Skills Section */}
          <div className="mt-8 md:pb-80">
            <p className="text-2xl font-bold text-[#ccd6f6]">
              Additional Knowledge
            </p>
            <p className="py-4">
              These are some additional tools and technologies I have basic
              knowledge of:
            </p>
            <div className="w-4/5 grid grid-cols-2 sm:grid-cols-3 mx-auto gap-5 text-center py-8">
              <div className="shadow-md py-2 shadow-[#040c16] hover:scale-110 duration-500 pt-5">
                <img className="w-20 mx-auto" src={Python} alt="Python icon" />
                <p className="my-4">Python</p>
              </div>
              <div className="shadow-md py-2 shadow-[#040c16] hover:scale-110 duration-500 pt-5">
                <img
                  className="w-20 mx-auto"
                  src={Selenium}
                  alt="Selenium icon"
                />
                <p className="my-4">Selenium (Automation Testing)</p>
              </div>
              <div className="shadow-md py-2 shadow-[#040c16] hover:scale-110 duration-500  pt-5">
                <img className="w-20 mx-auto " src={sql} alt="SQL icon" />
                <p className="my-4">SQL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
