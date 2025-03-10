import React, { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <div name="home" className="w-full sm:pt-0 pt-12 sm:h-screen bg-[#0a192f]">
      {/*  Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#8892b0]">Hi, Myself</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#ccd6f6]">
          Abulhussian
        </h1>
        <h2 className="text-4xl mt-2 sm:text-6xl font-bold text-[#8892b0]">
          I'm a Frontend Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I specialize in building responsive and user-friendly front-end
          interfaces. My focus is on creating exceptional digital experiences
          for web applications. I leverage modern technologies to enhance
          usability and engagement.
        </p>
        <div>
          <button
            href=""
            className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#8892b0] hover:border-[#8892b0]  "
          >
            <Link onClick={handleClick} to="work" smooth={true} duration={500}>
              View Work
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
