import React from "react";
import "./style.css"


const Home = ()=>{
    return(
        <section id="home">
        <div className="background">
            
        <div className="homepage">
       <div>
        <h1>Welcome to Glitzy Doodas</h1>
        {/* <p>The only place where  you can<br /> get good and affordable jewelry.</p> */}
       </div>
        <div>
        <img className="home-image"  src="image/womanj.jpg" alt="" />
            
        </div>
        

        </div>
    </div>
    </section>
    )

}
export default Home;