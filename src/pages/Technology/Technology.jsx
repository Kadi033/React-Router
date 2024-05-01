import React, { useState } from "react";
import {
  launchRocket,
  spacePort,
  spaceCapsule,
  technology,
} from "../../assets";

const Technology = () => {
  const [background, setBackground] = useState(launchRocket);
  const [selectedTechnology, setSelectedTechnology] = useState("launchRocket");

  const handleChange = (image, technology) => {
    setBackground(eval(image));
    setSelectedTechnology(technology);
  };

  const technologyInfo = {
    launchRocket: {
      name: "Launch Rocket",
      description:
        "Launch rockets are vehicles used to transport cargo or passengers beyond Earth's atmosphere, typically to deliver payloads into space. They come in various sizes and configurations depending on their intended mission.",
    },
    spacePort: {
      name: "Space Port",
      description:
        "A spaceport is a facility used for launching and landing spacecraft, including rockets, spaceplanes, and satellites. They are equipped with launch pads, control centers, and support infrastructure for space missions.",
    },
    spaceCapsule: {
      name: "Space Capsule",
      description:
        "A space capsule is a type of spacecraft that provides life support and protection for astronauts during space travel. It is typically designed to re-enter Earth's atmosphere and safely return astronauts to the surface.",
    },
  };

  return (
    <section
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${technology})` }}
    >
      <div className="flex gap-24 justify-center items-center flex-row-reverse h-screen pt-[137px]">
        <div
          className="bg-cover bg-center w-[400px] h-[450px]"
          style={{ backgroundImage: `url(${background})` }}
        />
        <div>
          <div>
            <h2 className="text-white font-Bellefair text-2xl font-normal uppercase opacity-50 pl-10">
              {technologyInfo[selectedTechnology].name}
            </h2>
            <h1 className="text-white font-Bellefair text-6xl font-normal pt-5 pl-10">
              {technologyInfo[selectedTechnology].name}
            </h1>
            <p className="text-blue-300 w-full max-w-[444px] inline-block pt-5 pl-10 font-barlow text-base font-normal leading-[32px]">
              {technologyInfo[selectedTechnology].description}
            </p>
          </div>
          {["launchRocket", "spacePort", "spaceCapsule"].map(
            (technology, index) => (
              <div
                key={technology}
                className=" opacity-50 hover:opacity-100 duration-75 pl-2 mr-3 cursor-pointer inline-block text-white ml-8 mt-7 font-barlow-condensed text-base font-normal leading-normal tracking-wide"
                onClick={() => handleChange(technology, technology)}
              >
                ○
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Technology;
