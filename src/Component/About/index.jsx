import React from "react";
import "./style.css"

const About = ()=>{
    return(
        <section id="about">
        <div>
              <h2>WHO WE ARE?</h2>
            <div className="about-container">

            <div className="about-image">
                    <img className="lady-about" src="image/bj12.jpeg" alt="" />
                    <div className="mariano-part">
                    <img src="image/mariano.jpg" id="mariano" alt="" />
                    </div>
                  
                  <div className="denny-part">
                  <img src="image/denny.jpg" alt="" id="denny" />
                  </div>
                    

                </div>
             
                <div className="about-text">
                <p>"Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis
                    aute irure dolor in reprehenderit in 
                    voluptate velit esse cillum dolore eu 
                    fugiat nulla pariatur. Excepteur sint 
                    occaecat cupidatat non proident, sunt 
                    in culpa qui officia deserunt mollit 
                    anim id est laborum."
                </p>
                </div>

            </div>

            <h2>OUR VISION</h2>
            <div className="about-container">
             
                <div className="about-text-vision">
                <p>"Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis
                    aute irure dolor in reprehenderit in 
                    voluptate velit esse cillum dolore eu 
                    fugiat nulla pariatur. Excepteur sint 
                    occaecat cupidatat non proident, sunt 
                    in culpa qui officia deserunt mollit 
                    anim id est laborum."
                </p>
                </div>

                <div className="about-image-vision">
                    <img src="image/bj12.jpeg" alt="" />

                </div>

            </div>

            <h2>OUR GOALS</h2>
            <div className="about-container">

            <div className="about-image">
                    <img src="image/bj12.jpeg" alt="" />

                </div>
             
                <div className="about-text">
                <p>"Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis
                    aute irure dolor in reprehenderit in 
                    voluptate velit esse cillum dolore eu 
                    fugiat nulla pariatur. Excepteur sint 
                    occaecat cupidatat non proident, sunt 
                    in culpa qui officia deserunt mollit 
                    anim id est laborum."
                </p>
                </div>

            </div>


        </div>
        </section>
    )
}
export default About;