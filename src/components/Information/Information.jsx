import React from "react";

import robologo from "../../assets/robologo.png";
import Star from "../../assets/Star.svg";

function Information() {
    return (
        <div className="flex flex-col p-2 md:p-4 md:flex-row  ">
            <div className="left md:w-[50%] ">
                <h2 className="font-extrabold text-3xl mb-3 md:mb-8  lg:text-5xl  text-green-400">
                    Get personalized fitness advice with AI.
                </h2>
                <p className="text-md text-justify font-light mb-6 md:mb-10  lg:text-xl">
                    Fit-GPT uses advanced AI technology to provide you with
                    customized fitness advice, tips, and ideas tailored to your
                    unique needs and goals. Whether you're a fitness enthusiast
                    or just starting, fitgpt has got you covered. Get the
                    support you need to achieve your fitness goals today.
                </p>
                <a href="https://fitgpt.netlify.app">
                    <button className="mx-auto justify-center flex  border-2 border-black p-3 rounded-2xl mb-3  text-lg px-10 font-bold">
                        Get Started.
                    </button>
                </a>
            </div>
            <div className="right flex-col flex md:p-5  md:w-[50%]">
                <div className="flex md:mb-5 ">
                    <img className="mr-3" src={Star}></img>
                    <div>
                        {" "}
                        <h2 className="text-md text-justify font-bold   lg:text-xl">
                            Virtual personal trainer.
                        </h2>
                        <p className="text-md text-justify font-xs mb-2  lg:text-lg">
                            The AI model could act as a virtual personal
                            trainer.
                        </p>
                    </div>
                </div>

                <div className="flex md:mb-5">
                    <img className="mr-3" src={Star}></img>
                    <div>
                        {" "}
                        <h2 className="text-md text-justify font-bold lg:text-xl">
                            Adaptive workouts.
                        </h2>
                        <p className="text-md text-justify font-xs mb-2 lg:text-lg">
                            The AI model could adjust the user's workout plan
                            based on their progress.
                        </p>
                    </div>
                </div>

                <div className="flex md:mb-5">
                    <img className="mr-3" src={Star}></img>
                    <div>
                        {" "}
                        <h2 className="text-md text-justify font-bold lg:text-xl">
                            Personalized workout plans.
                        </h2>
                        <p className="text-md text-justify font-xs mb-2 lg:text-lg">
                            The AI model could analyze the user's fitness level,
                            goals, and preferences.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Information;
