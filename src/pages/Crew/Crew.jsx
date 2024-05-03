import React, { useState } from "react";
import {
  firstCosmonaut,
  secondCosmonaut,
  thirdCosmonaut,
  fourthCosmonaut,
  crew,
} from "../../assets";

const cosmonautImages = {
  firstCosmonaut: firstCosmonaut,
  secondCosmonaut: secondCosmonaut,
  thirdCosmonaut: thirdCosmonaut,
  fourthCosmonaut: fourthCosmonaut
};

const cosmonautInfo = {
  firstCosmonaut: {
    nick: "Commander",
    name: "Douglas Hurley",
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  secondCosmonaut: {
    nick: "Mission Specialist",
    name: "Mark shuttle",
    description:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  thirdCosmonaut: {
    nick: "Pilot",
    name: "Victor Glover",
    description:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served",
  },
  fourthCosmonaut: {
    nick: "Flight Engineer",
    name: "Anousheh Ansari",
    description:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
  },
};

const Crew = () => {
  const [background, setBackground] = useState(firstCosmonaut);
  const [selectedCosmonaut, setSelectedCosmonaut] = useState("firstCosmonaut");

  const handleChange = (image, cosmonaut) => {
    setBackground(cosmonautImages[image]);
    setSelectedCosmonaut(cosmonaut);
  };

  return (
    <section
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${crew})` }}
    >
      <div className="flex gap-24 justify-center items-center flex-row-reverse h-screen pt-[137px]">
        <div
          className="bg-cover bg-center w-[400px] h-[450px]"
          style={{ backgroundImage: `url(${background})` }}
        />
        <div>
          <div>
            <h2 className="text-white font-Bellefair text-2xl font-normal uppercase opacity-50 pl-10">
              {cosmonautInfo[selectedCosmonaut].nick}
            </h2>
            <h1 className="text-white font-Bellefair text-6xl font-normal pt-5 pl-10">
              {cosmonautInfo[selectedCosmonaut].name}
            </h1>
            <p className="text-blue-300 w-full max-w-[444px] inline-block pt-5 pl-10 font-barlow text-base font-normal leading-[32px]">
              {cosmonautInfo[selectedCosmonaut].description}
            </p>
          </div>
          {[
            "firstCosmonaut",
            "secondCosmonaut",
            "thirdCosmonaut",
            "fourthCosmonaut",
          ].map((cosmonaut, index) => (
            <div
              key={cosmonaut}
              className="opacity-50 hover:opacity-100 duration-75 pl-2 mr-3 cursor-pointer inline-block text-white ml-8 mt-7 font-barlow-condensed text-base font-normal leading-normal tracking-wide"
              onClick={() => handleChange(cosmonaut, cosmonaut)}
            >
              ○
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Crew;
