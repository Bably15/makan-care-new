import React from "react";
import "./Banner2.css";
import Kitchenclean from "../../assets/kitchencleanung1.png"

const Banner2 = () => {
  return (
    <div className="banner1" style={{ backgroundImage: `url(${Kitchenclean})` }}>
      <div className="overlay"></div>
      <div className="banner-content1">
        {/* <p className="sale-text">Big Saving Days Sale</p> */}
        <h2>Kitchen Cleaning</h2>
        <p className="price-text">
          <strong>AED 150.00</strong>
        </p>
        <p><a href="#"> BOOK NOW</a></p>
        {/* <button className="shop-btn">SHOP NOW</button> */}
      </div>
    </div>
  );
};

export default Banner2;
