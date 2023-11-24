import React from "react";
import "./style.css"

const Products = () =>{
    return(

        <section id="products">
        <div>
            <div className="product-banner">
                {/* <img className="banner" src="image/ban.jpeg" alt="" /> */}
            <h2 className="products-heading">
                See our products
            </h2>

            </div>

            <div className="products-container">
                <div className="product-necklaces">
                    <img src="image/elegante.jpg" alt="" />
                    <div className="product-overlay">

                        <div className="product-text">
                            Classic earrings from England <br />
                            Price: 5,000 Tsh <br />
                            Quantity: 100 pcs

                        </div>

                    </div>
                    <h3>Earrings</h3>

              <button className="button-more"> See more</button>

                </div>

                <div className="product-necklaces">
                    <img src="image/msichana.jpeg" alt="" />

                    <div className="product-overlay">

        <div className="product-text">
         Tanzanite gemstone necklace <br />
         Price: 12,000 Tsh <br />
         Quantity: 100 pcs

        </div>

        </div>

        <h3>Necklaces</h3>

        <button className="button-more"> See more</button>  

                </div>


                <div className="product-necklaces">
                    <img src="image/bj10.jpeg" alt="" />

                    <div className="product-overlay">

<div className="product-text">
    Classic bracelets <br />
    Price: 10000 Tsh <br />
    Quantity: 150 pcs

</div>

</div>

<h3>Bracelets</h3>

<button className="button-more"> See more</button>      

                </div>



                <div className="product-necklaces">
                    <img src="image/watches.jpg" alt="" />

                    <div className="product-overlay">

<div className="product-text">
    Classic watches from Europe <br />
    Price: 20,000 Tsh <br />
    Quantity: 50 pcs

</div>

</div>

<h3>Watches</h3>

<button className="button-more"> See more</button>      

                </div>

                <div className="product-necklaces">
                    <img src="image/necklace.jpg" alt="" />

                    <div className="product-overlay">

<div className="product-text">
    Anklets from Mtwara <br />
    Price: 2,500 Tsh <br />
    Quantity: 200 pcs

</div>

</div>

<h3>Anklets</h3>
                  
<button className="button-more"> See more</button>
                </div>

                <div className="product-necklaces">
                    <img src="image/necklace.jpg" alt="" />

                    <div className="product-overlay">

<div className="product-text">
    Waistchain from Tanga <br />
    Price: 20,000 Tsh <br />
    Quantity: 300 pcs

</div>

</div>

                    {/* <p className="product-jewelry">Necklaces</p> */}
                    <h3>Waist chain</h3>
                    <button className="button-more"> See more</button>
                  

                </div>



            </div>

            

        </div>
        </section>
    )
}

export default Products;