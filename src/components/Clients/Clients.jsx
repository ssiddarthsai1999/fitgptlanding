import React from "react";
import "./Clients.css";

const Clients = () => {


  return (
      <div className=" py-24 sm:py-32 overflow-clip">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 lg:w-[1000px] ">
              <h2 className="text-center font-bold text-xl lg:text-2xl md:mb-10 lg:mb-[100px]">
                  Trusted by the world’s most innovative teams
              </h2>
              {/* <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"> */}
              <div className="marquee-container mt-10 flex lg:gap-[10rem] gap-2 ">
                  <div className="marquee-item">
                      <img
                          src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg"
                          alt="Transistor"
                      />
                  </div>
                  <div className="marquee-item">
                      <img
                          className=" "
                          src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg"
                          alt="Reform"
                      />
                  </div>
                  <div className="marquee-item">
                      <img
                          className=" "
                          src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg"
                          alt="Tuple"
                      />
                  </div>
                  <div className="marquee-item">
                      <img
                          className=" "
                          src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg"
                          alt="SavvyCal"
                      />
                  </div>
                  <div className="marquee-item">
                      <img
                          className=" "
                          src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg"
                          alt="Statamic"
                      />
                  </div>
              
              
              </div>
              {/* </div> */}
          </div>
      </div>
  );
};

export default Clients;
