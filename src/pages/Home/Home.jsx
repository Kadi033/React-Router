import React from "react";
import { home } from "../../assets";
import "./Home.css";

const Home = () => {
  return (
    <div
      className="bg-cover bg-center w-screen h-screen bg-no-repeat"
      style={{ backgroundImage: `url(${home})` }}
    >
      <div className="flex justify-around items-center h-screen pt-36 text-white">
        <div className="con1">
          <h2 className="text-blue-300 font-barlow-condensed text-[28px] font-normal leading-normal tracking-widest p-2">
            SO, YOU WANT TO TRAVEL TO
          </h2>
          <h1 className="text-white text-[150px] font-normal leading-normal">
            SPACE
          </h1>
          <p className="text-blue-300 font-barlow text-base font-normal leading-8 w-[444px] p-2">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="con2">
          <div className="w-[108px] h-[108px]"></div>
          <div className="w-[274px] h-[274px] rounded-full bg-white flex justify-center items-center">
            <h1 className="text-gray-900 text-2xl font-normal leading-normal tracking-wide">
              EXPLORE
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
