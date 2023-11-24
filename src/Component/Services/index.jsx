import React from "react";
import "./style.css";

const Services = () =>{
    return(
        <section id="services">
        <div>
             <h2>Our Services</h2>
            <div className="services-container">

            <div className="service">
                    <img src="image/order.png" alt="" />
                    <p>
                        Place an order easily from us.
                    </p>

                </div>

                <div className="service">
                    <img src="image/deliverguy.png" alt="" />
                    <p>
                        Get free delivery services from us.
                    </p>

                </div>

                <div className="service">
                    <img src="image/consultancy.png" alt="" />
                    <p>
                        Get free consultancy services from us.
                    </p>

                </div>

            </div>
        </div>
        </section>
    )
}
export default Services;