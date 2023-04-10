import React from "react";
import first from "../../assets/1.png"
import second from "../../assets/2.jpg";
import third from "../../assets/3.jpg";
import "./Services.css";
const Services = () => {
    const services = [
        {
            title: "Get fit without the hassle.",
            img: first,
            description:
                "Staying fit and healthy shouldn't be a hassle. With fitgpt, get personalized fitness advice, tips, and ideas that are smoothly delivered to you. No more scrolling through endless content—get the information you need to reach your fitness goals.",
        },
        {
            title: "Get personalized fitness advice and achieve your goals with fitgpt.",
            img: second,
            description:
                "Don't waste your time scrolling through endless workout videos and articles that don't apply to you. With fitgpt, get customized fitness advice tailored to your needs and goals. Whether it's tips on nutrition, workout routines, or motivation, we've got you covered. Say goodbye to generic advice and hello to a personalized fitness journey with fitgpt.",
        },
        {
            title: "Personalized nutrition recommendations.",
            img: third,
            description:
                "The fitness AI model could also analyze the user's nutrition data and provide personalized recommendations for healthy eating habits and meal planning..",
        },
    ];

    return (
        <div className="w-full  md:p-5 ">
            <h2 className="text-center mb-2 text-2xl font-bold lg:text-4xl lg:mb-10">
                "Unlock your full potential with our cutting-edge fitness
                services powered by AI!"
            </h2>
            <div className="flex flex-col p-2 lg:flex-row overflow-x-auto justify-center items-center gap-6  ">
                {services.map((service) => (
                    <div className="hover:bg-white/10   overflow-hidden shadow-md hover:shadow-xl border    flex flex-col gap-4 w-[15rem] md:w-[20rem] xl:w-[25rem] max-w-[25rem]   p-5 rounded-2xl servicebg">
                        <h3 className="text-xl font-bold text-white">
                            {service.title}
                        </h3>
                        <h5 className="text-md font-medium text-white">
                            {service.description}
                        </h5>
                        <img
                            src={service.img}
                            className="rounded-md w-[400px] h-[280px]"
                            alt=""
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
