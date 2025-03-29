import React from "react";
import "./section2.css";
import product_img from "../../assets/small.png";

const Section2 = () => {
  return (
    <div className="second-sec">
      <div className="section-container">
        <h1>Our Products</h1>
      <p>To be launched soon...</p>
        {/* <div className="products-container">
          <div className="product">
            <img src={product_img} alt="Product 1" />
            <p>Multicolored Open-Knit Crewneck</p>
            <span className="price">$79.00</span>
          </div>
          <div className="product">
            <img src={product_img} alt="Product 2" />
            <p>Apple Smart Watch</p>
            <span className="price">$51.04</span>
          </div>
          <div className="product">
            <img src={product_img} alt="Product 3" />
            <p>Cropped Satin Bomber Jacket</p>
            <span className="price">$94.00</span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Section2;
