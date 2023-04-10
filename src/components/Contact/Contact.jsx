import React from 'react'
import "./Contact.css"

function Contact() {
  return (
      <div className="ContactContainer w-full">
          <div className="ContactContent w-[1280px] mx-auto justify-center flex-col  p-10">
              <h2 className="text-center mb-10">
                  Connect with us for any enquries
              </h2>
              <div className=" w-full flex justify-center gap-10">
                  {" "}
                  <button className="whatsapp text-lg">Whatsapp Us</button>
                  <button className="email text-lg">Email Us</button>
              </div>
          </div>
      </div>
  );
}

export default Contact