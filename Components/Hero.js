"use client";
import { TypeAnimation } from "react-type-animation";
import React from "react";








const Hero = () => {

  const handleDownload = () => {
    const imageUrl = '/cv.jpg'; 
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'image.jpg'; 
    link.click();
  };



  return (
    <>
      <div className="hero" id="Hero">
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
{/* ..................... */}
      <section>
        <div className="aboutdata">
          <div className="container">
            <h1>ABOUT</h1>
            <p>
              My name is Mirza Ijlal, and I am a web developer. 
              <br />
              I reside in karachi pakistan
               and completed my education at sir syed university
              .
            </p>

            <h1>My Expertise:</h1>
            <p>
            I specialize in front-end dev.
            <br />
       I have 3 months of experience in Relevant Field.

              .
            </p>

            <h1>Website's Purpose:</h1>
            <p>
            The primary aim of my website is to share my knowledge and insights in web development.
            <br />
            It serves as a platform to provide valuable resources and solutions to fellow web developers and those interested in the field.

              .
            </p>


            <h1>Mission and Vision:</h1>
            <p>
            My mission is to simplify web development for beginners and empower experienced developers with advanced techniques.
            <br />
            I envision a future where my website is a go-to resource for web development, helping professionals and enthusiasts alike.

              .
            </p>

            <h1>My Passion:

</h1>
            <p>
            My passion lies in creating seamless and user-friendly web experiences.

            <br />
            I've turned my passion into my profession and am dedicated to staying updated with the latest industry trends and technologies.


              .
            </p>


          </div>
        </div>
      </section>
      

      

     
    
    </>
  );
};

export default Hero;
