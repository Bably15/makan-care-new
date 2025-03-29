import React from "react";
import "./Section3.css";
import product_img from "../../assets/small.png";

const Section3 = () => {
  return (
    <div className="second-sec">
      <div className="section-container">
        <div className="products-container">
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
        </div>
      </div>
    </div>
  );
};

export default Section3;
