"use client";
import { TypeAnimation } from "react-type-animation";
import React from "react";





const page = () => {

  const handleDownload = () => {
    const imageUrl = '/cv.jpg'; 
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'image.jpg'; 
    link.click();
  };



  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="row heromain">
            <div className="col-lg-6 herobox1">
              <h1> Hello I'm </h1>
              <TypeAnimation
                sequence={[
                  "MIRZA IJLAL  :)",
                  1000,

                  "Web Developer",
                  1000,

                  "UI/UX Designer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                className="mytype"
                style={{ fontSize: "2em", display: "inline-block" }}
                repeat={Infinity}
              />
              <p>
                "Every code tells a story; I'm just here to bring those stories
                to life."
              </p>

              <button onClick={handleDownload} class="glowing-btn">
                <span class="glowing-txt">
                  Dow<span class="faulty-letter">nload         </span>Cv
                </span>
              </button>
            </div>
            <div className="col-lg-6  box2">
              <div className="underbox2">
              <img className="h1img" src="/my.jpg" alt="" />
              </div>
              
            </div>
          </div>
        </div>
      </div>

     
    
    </>
  );
};

export default page;
