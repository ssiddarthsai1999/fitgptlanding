import React from "react";
import "./Home.css";
import robologo from "../../assets/robologo.png";

function Home() {
  return (
      <div className="flex flex-col md:flex-row p-2 md:p-4">
          <div className="left  md:w-[50%]">
              <h2 className="font-extrabold text-3xl lg:text-5xl mb-3 md:mb-10">
                  The Next Generation Fitness Model.
              </h2>
              <p className="text-md lg:text-xl text-justify font-light mb-6 md:mb-10  ">
                  Whether you're just starting out or a seasoned athlete, fitgpt
                  uses AI to provide tailored fitness plans and advice to help
                  you reach your goals. Say goodbye to generic workout routines
                  and hello to a personalized fitness experience.
              </p>
              <a href="https://fitgpt.netlify.app">
                  <button className="mx-auto justify-center flex  border-2 border-black p-3 rounded-2xl mb-3  text-lg px-10 font-bold">
                      Get Started
                  </button>
              </a>
          </div>
          <div className="right  md:w-[50%]">
              <img
                  className="w-[200px] md:w-[300px] mx-auto"
                  src={robologo}
                  alt="robologo"
              />
          </div>
      </div>
  );
}

export default Home;
