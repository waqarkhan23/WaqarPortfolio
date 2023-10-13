import React from "react";
import { Link } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";

function Home() {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-700 text-xl sm:text-lg">Hi, My name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Waqar Khan
        </h1>
        <h2 className="text-4xl sm:text-7xl text-[#8892b0]">
          Frontend Web Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm passionate and aspiring front-end developer with a strong
          inclination towards building interactive and user-friendly web
          applications. In this portfolio, I want to showcase my journey as a
          beginner in React.js, sharing the projects and experiences that have
          shaped my learning path.
        </p>
        <div>
          <button className="text-white border-2 px-6 py-3 my-2 group hover:bg-pink-700 flex items-center justify-center hover:border-pink-700">
            <Link to="work" smooth={true} duration={500}>
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
}

export default Home;
