import React from "react";

function About() {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right">
            <p className="text-4xl font-bold inline border-b-4 border-pink-700 ">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 mt-6 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p> Hi, I,m Waqar, nice to meet you please take a look around.</p>
          </div>
          <div>
            <p>
              As a recent graduate and aspiring frontend developer, I am
              thrilled to embark on my journey into the world of web
              development. This new chapter in my life is filled with
              excitement, curiosity, and a deep passion for creating captivating
              and user-friendly websites.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
