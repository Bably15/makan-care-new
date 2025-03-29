import React from "react";
import "./Banner1.css";
import Bathroomclean from "../../assets/bathroomclean1.png"


const Banner1 = () => {
  return (
    <div className="banner1" style={{ backgroundImage: `url(${Bathroomclean})` }}>
      <div className="overlay"></div>
      <div className="banner-content1">
        {/* <p className="sale-text">Big Saving Days Sale</p> */}
        <h2>Bathroom Cleaning</h2>
        <p className="price-text">
          <strong>AED 150.00</strong>
        </p>
        <p><a href="#"> BOOK NOW</a></p>
        {/* <button className="shop-btn">SHOP NOW</button> */}
      </div>
    </div>
  );
};

export default Banner1;
