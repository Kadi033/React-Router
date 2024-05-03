import React, { useState } from "react";
import { MOON, TITAN, MARS, EUROPA, destinatioon } from "../../assets";
import "./Destination.css";

const planetImages = {
  MOON: MOON,
  TITAN: TITAN,
  MARS: MARS,
  EUROPA: EUROPA
};

function Destination() {
  const [background, setBackground] = useState(MOON);
  const [selectedPlanet, setSelectedPlanet] = useState("MOON");

  const handleChange = (planet, image) => {
    setBackground(planetImages[image]);
    setSelectedPlanet(planet);
  };

  return (
    <section
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${destinatioon})` }}
    >
      <div className="flex gap-24 justify-center items-center h-screen pt-28">
        <div
          className="bg-cover bg-center w-[400px] h-[400px]"
          style={{ backgroundImage: `url(${background})` }}
        />
        <div>
          {["MOON", "MARS", "EUROPA", "TITAN"].map((planet, index) => (
            <div
              key={planet}
              className="destini-hover p-3 cursor-pointer inline-block text-white ml-9 font-barlow-condensed text-base font-normal leading-normal tracking-wide"
              onClick={() => handleChange(planet, planet)}
            >
              {planet}
            </div>
          ))}
          <div>
            {selectedPlanet === "MOON" && (
              <div>
                <h1 className="text-white font-Bellefair text-8xl font-normal pt-5 pl-10">
                  MOON
                </h1>
                <p className="text-blue-300 w-full max-w-[444px] inline-block pt-5 pl-10 font-barlow text-base font-normal leading-[32px]">
                  The Moon is Earth's only natural satellite. At about
                  one-quarter the diameter of Earth (comparable to the width of
                  Australia), it is the largest natural satellite in the Solar
                  System relative to the size of its planet, and the fifth
                  largest satellite in the Solar System overall.
                </p>
                <hr className="w-[400px] mt-5 ml-10" />
                <div className="flex justify-center">
                  <div>
                    <h1 className="text-white w-full max-w-[304px] inline-block pt-5 pl-10 font-barlow text-base font-normal leading-[32px]">
                      AVG. DISTANCE
                    </h1>
                    <h1 className="text-white w-full max-w-[304px] inline-block pt-5 pl-10 font-barlow text-2xl font-normal leading-[32px]">
                      384,400 km
                    </h1>
                  </div>
                  <div>
                    <h1 className="text-white w-full max-w-[304px] inline-block pt-5 pl-10 font-barlow text-base font-normal leading-[32px]">
                      Est. travel time
                    </h1>
                    <h1 className="text-white w-full max-w-[304px] inline-block pt-5 pl-10 font-barlow text-2xl font-normal leading-[32px]">
                      3 days
                    </h1>
                  </div>
                </div>
              </div>
            )}

            {selectedPlanet === "TITAN" && (
              <div>
                <h1 className="text-white font-Bellefair text-8xl font-normal pt-5 pl-10">
                  TITAN
                </h1>
                <p className="text-blue-300 w-full max-w-[444px] inline-block pt-5 pl-10 font-barlow text-base font-normal leading-[32px]">
                  Titan is the largest moon of Saturn and the second-largest
                  natural satellite in the Solar System. It is the only moon
                  known to have a dense atmosphere, and the only known body in
                  space, other than Earth, where clear evidence of stable bodies
                </p>
                <hr className="w-[400px] mt-5 ml-10" />
                <div className="flex justify-center">
                  <div>
                    <h1 className="text-white w-full max-w-[304px] inline-block pt-5 pl-10 font-barlow text-base font-normal leading-[32px]">
                      AVG. DISTANCE
                    </h1>
                    <h1 className="text-white w-full max-w-[304px] inline-block pt-5 pl-10 font-barlow text-2xl font-normal leading-[32px]">
                      1,422,000,000 km
                    </h1>
                  </div>
                  <div>
                    <h1 className="text-white w-full max-w-[304px] inline-block pt-5 pl-10 font-barlow text-base font-normal leading-[32px]">
                      Est. travel time
                    </h1>
                    <h1 className="text-white w-full max-w-[304px] inline-block pt-5 pl-10 font-barlow text-2xl font-normal leading-[32px]">
                      7 years
                    </h1>
                  </div>
                </div>
              </div>
            )}

            {selectedPlanet === "MARS" && (
              <div>
                <h1 className="text-white font-Bellefair text-8xl font-normal pt-5 pl-10">
                  MARS
                </h1>
                <p className="text-blue-300 w-full max-w-[444px] inline-block pt-5 pl-10 font-barlow text-base font-normal leading-[32px]">
                  Mars is the fourth planet from the Sun and the second-smallest
                  planet in the Solar System, being larger than only Mercury. It
                  is often referred to as the "Red Planet" because of its
                  reddish appearance due to iron oxide prevalent on its surface.
                </p>
                <hr className="w-[400px] mt-5 ml-10" />
                <div className="flex justify-center">
                  <div>
                    <h1 className="text-white w-full max-w-[304px] inline-block pt-5 pl-10 font-barlow text-base font-normal leading-[32px]">
                      AVG. DISTANCE
                    </h1>
                    <h1 className="text-white w-full max-w-[304px] inline-block pt-5 pl-10 font-barlow text-2xl font-normal leading-[32px]">
                      225 MIL. km
                    </h1>
                  </div>
                  <div>
                    <h1 className="text-white w-full max-w-[304px] inline-block pt-5 pl-10 font-barlow text-base font-normal leading-[32px]">
                      Est. travel time
                    </h1>
                    <h1 className="text-white w-full max-w-[304px] inline-block pt-5 pl-10 font-barlow text-2xl font-normal leading-[32px]">
                      9 months
                    </h1>
                  </div>
                </div>
              </div>
            )}

            {selectedPlanet === "EUROPA" && (
              <div>
                <h1 className="text-white font-Bellefair text-8xl font-normal pt-5 pl-10">
                  EUROPA
                </h1>
                <p className="text-blue-300 w-full max-w-[444px] inline-block pt-5 pl-10 font-barlow text-base font-normal leading-[32px]">
                  Europa is the smallest of the four Galilean moons orbiting
                  Jupiter. It is believed to have a subsurface ocean of liquid
                  water beneath its icy surface, making it a strong candidate
                  for the existence of extraterrestrial life of surface liquid
                  has been found..
                </p>
                <hr className="w-[400px] mt-5 ml-10" />
                <div className="flex justify-center">
                  <div>
                    <h1 className="text-white w-full max-w-[304px] inline-block pt-5 pl-10 font-barlow text-base font-normal leading-[32px]">
                      AVG. DISTANCE
                    </h1>
                    <h1 className="text-white w-full max-w-[304px] inline-block pt-5 pl-10 font-barlow text-2xl font-normal leading-[32px]">
                      628 MIL. km
                    </h1>
                  </div>
                  <div>
                    <h1 className="text-white w-full max-w-[304px] inline-block pt-5 pl-10 font-barlow text-base font-normal leading-[32px]">
                      Est. travel time
                    </h1>
                    <h1 className="text-white w-full max-w-[304px] inline-block pt-5 pl-10 font-barlow text-2xl font-normal leading-[32px]">
                      3 years
                    </h1>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Destination;
