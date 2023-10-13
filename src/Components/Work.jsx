import React from "react";
import { data } from "../Data/data";

function Work() {
  const project = data;

  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-700">
            Work
          </p>
          <p className="py-6">//Check Out Some of My Recent Works</p>
        </div>
        {/* main card */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          {/* project card */}

          {project.map((curElem, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${curElem.image})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div"
            >
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-2xl font-bold text-gray-300 tracking-wider">
                  {curElem.name}
                </span>
                <div className="pt-8 text-center flex justify-around">
                  <a href={curElem.code}>
                    <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* project car ended */}

          {/* project card2*/}
        </div>
      </div>
    </div>
  );
}

export default Work;
