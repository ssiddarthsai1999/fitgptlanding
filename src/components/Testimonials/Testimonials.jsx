import React from "react";
import "./Testimonials.css";
import man from "../../assets/man.jpg"
import man1 from "../../assets/man1.jpg"
import man2 from "../../assets/man2.jpg";
const Clients = () => {
    const services = [
        {
            title: "Service 1",
            description: "Description of Service 1.",
            name: "Prabhakar",
            img: man,
        },
        {
            title: "Service 2",
            description: "Description of Service 2.",
            name: "Prabhakar",
            img: man,
        },
        {
            title: "Service 3",
            description: "Description of Service 3.",
            name: "Prabhakar",
            img: man,
        },
        {
            title: "Service 1",
            description: "Description of Service 1.",
            name: "Prabhakar",
            img: man,
        },
    ];

    return (
        <section className=" py-24 sm:py-32 text-white ">
            <h2 className="text-center font-bold text-3xl mb-4">
                "Transform your fitness game with the power of AI - See what
                others have to say!"
            </h2>
            <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
                <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
                        <img className="h-12 self-start" alt="" />
                        <figure className="mt-10 flex flex-auto flex-col justify-between">
                            <blockquote className="text-lg leading-8 ">
                                <h1 className="text-lg font-light">
                                    "As someone with a busy schedule, I
                                    appreciate how this fitness AI model is able
                                    to create workouts that fit my lifestyle. I
                                    can easily adjust the intensity and duration
                                    of the workouts based on my availability and
                                    still get a great workout in."
                                </h1>
                            </blockquote>
                            <figcaption className="mt-10 flex items-center gap-x-6">
                                <img
                                    className="h-14 w-14 rounded-full bg-gray-800 object-cover"
                                    src={man2}
                                    alt=""
                                />
                                <div className="text-base">
                                    <div className="font-semibold text-white">
                                        Judith James
                                    </div>
                                    <div className="mt-1 text-gray-400">
                                        Artist at Tuple
                                    </div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="flex flex-col border-t border-white/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
                        <img className="h-12 self-start" alt="" />
                        <figure className="mt-10 flex flex-auto flex-col justify-between">
                            <blockquote className="text-lg leading-8 font-light ">
                                <p className="text-lg ">
                                    "I've been using this fitness AI model for a
                                    few months now and I have to say, it's been
                                    a game-changer for me. The personalized
                                    workouts and nutrition plans have helped me
                                    reach my fitness goals faster than I ever
                                    thought possible. I highly recommend it!"
                                </p>
                            </blockquote>
                            <figcaption className="mt-10 flex items-center gap-x-6">
                                <img
                                    className="h-14 w-14 rounded-full bg-gray-800 object-cover"
                                    src={man1}
                                    alt=""
                                />
                                <div className="text-base">
                                    <div className="font-semibold text-white">
                                        Andrew Jake
                                    </div>
                                    <div className="mt-1 text-gray-400">
                                        Consulting Manager at Reform
                                    </div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;
