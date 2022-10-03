import React, { useEffect, useState } from "react";

const Banner = () => {
  const [strength, setStrength] = useState(true);
  const [yoga, setYoga] = useState(false);
  const [drills, setDrills] = useState(false);
  const drillHandler = () => {
    let element = document.getElementById("drills");
    if (drills) {
      element.classList.add("basis-1/2");
      element.classList.remove("basis-1/4");
    } else {
      element.classList.add("basis-1/4");
      element.classList.remove("basis-1/2");
    }
  };
  const strengthHandler = () => {
    let element = document.getElementById("strength");
    if (strength) {
      element.classList.add("basis-1/2");
      element.classList.remove("basis-1/4");
    } else {
      element.classList.add("basis-1/4");
      element.classList.remove("basis-1/2");
    }
  };
  const yogaHandler = () => {
    let element = document.getElementById("yoga");
    if (yoga) {
      element.classList.add("basis-1/2");
      element.classList.remove("basis-1/4");
    } else {
      element.classList.add("basis-1/4");
      element.classList.remove("basis-1/2");
    }
  };
  useEffect(() => {
    drillHandler();
    strengthHandler();
    yogaHandler();
  }, [strength, yoga, drills]);

  return (
    <div>
      <div className="flex items-stretch h-full justify-between text-white [&>*]:relative">
        <div
          className="overflow-hidden transition-all ease-in-out duration-500"
          id="strength"
          onMouseEnter={() => {
            setStrength(true);
            setYoga(false);
            setDrills(false);
          }}
        >
          <img
            src="/strength-pic.jpg"
            alt="Strength Training pic"
            className="w-full object-cover min-h-[65vh] brightness-50 rounded-l-xl"
          />
          <span className="absolute top-6 left-10 uppercase font-medium text-xl">
            Strength
          </span>
          {strength ? (
            <img
              src="/right-arrow.svg"
              className="absolute top-6 right-10 h-8 w-8 fill-white"
              alt=""
            />
          ) : null}
        </div>
        <div
          className="overflow-hidden transition-all ease-in-out duration-500"
          id="yoga"
          onMouseEnter={() => {
            setYoga(true);
            setStrength(false);
            setDrills(false);
          }}
        >
          <img
            src="/mobility-pic.jpg"
            alt="Yoga pose pic"
            className="w-full object-cover min-h-[65vh] brightness-50"
          />
          <span className="absolute top-6 left-10 uppercase font-medium text-xl">
            Mobility
          </span>
          {yoga ? (
            <img
              src="/right-arrow.svg"
              className="absolute top-6 right-10 h-8 w-8 fill-white"
              alt=""
            />
          ) : null}
        </div>
        <div
          className="overflow-hidden transition-all ease-in-out duration-500"
          id="drills"
          onMouseEnter={() => {
            setDrills(true);
            setStrength(false);
            setYoga(false);
          }}
        >
          <img
            src="/drills-pic.jpg"
            alt="Exercise drills pic"
            className="w-full object-cover min-h-[65vh] brightness-50 rounded-r-xl"
          />
          <span className="absolute top-6 left-10 uppercase font-medium text-xl">
            Drills
          </span>
          {drills ? (
            <img
              src="/right-arrow.svg"
              className="absolute top-6 right-10 h-8 w-8 fill-white"
              alt=""
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Banner;
