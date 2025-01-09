import React from "react";
import Abulhussian from "../assets/Abulhussian.jpeg";

const About = () => {
  return (
    <div className=" md:pb-80 bg-[#0a192f]">
      <div
        name="about "
        className="sm:pt-0  w-full sm:h-screen bg-[#0a192f] text-gray-300  "
      >
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
            <div className="sm:text-right pb-8 pl-4 ">
              <p className="text-4xl font-bold inline border-b-4 border-[#ccd6f6]">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              {/* <p >Delighted to have you here. </p> */}
              <img
                className="w-72 h-72 mx-auto rounded-full"
                src={Abulhussian}
                alt="img"
              ></img>
            </div>
            <div>
              <p className="text-lg tracking-wider">
                I’m a Front-End Developer and tech enthusiast passionate about
                crafting intuitive and engaging user interfaces. I focus on
                building websites that enhance user experience and exceed client
                expectations, whether for individuals, small businesses, or
                large enterprises. My commitment to continuous learning and
                innovation enables me to deliver customized solutions that meet
                each project’s unique needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
