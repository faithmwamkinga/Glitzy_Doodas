import React from "react";
import "./style.css"

const Contact = ()=>{
    return (
        <section id="contact">
        <div className="contact-container">
           <div>
           <h2>Get in Touch</h2>
           
            <div className="contact-part">
                <div className="contact-left">
                    <img src="image/location-removebg-preview.png" className="contact-icon" alt="" />
                   <p className="address">Posta, Dar-es-Salaam, Tanzania </p> 

                   <img src="image/phone-removebg-preview.png" className="contact-icon" alt="" />
                   <p className="address">+255 788 266 616 <br /> +255 788 605 788 </p> 

                   {/* <img src="" className="contact-icon" alt="" />
                   <p className="address">Posta, Dar-es-Salaam, Tanzania </p>  */}

                </div>

                <div className="contact-left">
                    <form action="" className="contact-form">
                        <input type="text" placeholder="Enter your name" />
                        <label htmlFor="name"></label>
                        <input type="email" placeholder="Enter a valid email eg @emmilysam@gmail.com" />
                        <label htmlFor="email" ></label>
                        <input className ="message" type="message" placeholder="Enter your message"/>
                        <label htmlFor="message"></label>

                        <button className="submit">Submit</button>

                    </form>

                </div>
                </div>
            </div>

        </div>
        </section>
    )
}

export default Contact;