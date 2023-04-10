import React from 'react'

function Trusted() {
  return (
      <div className="flex  justify-center   w-[100%] mx-auto my-10  ">
          <div className="  md:flex-row flex  flex-col  ">
              <h1 className="text-center font-extrabold text-2xl   lg:text-4xl">
                  380+{" "}
                  <span className="font-medium text-lg mr-6">ACTIVE USERS</span>
              </h1>
              <h1 className="text-center font-extrabold text-2xl  lg:text-4xl">
                  12+{" "}
                  <span className="font-medium text-lg mr-6">
                      TRUSTED BY COMPANIES
                  </span>
              </h1>
              <h1 className="text-center font-extrabold text-2xl  lg:text-4xl">
                  $100K+{" "}
                  <span className="font-medium text-lg mr-6">GENERATIONS</span>
              </h1>
          </div>
      </div>
  );
}

export default Trusted