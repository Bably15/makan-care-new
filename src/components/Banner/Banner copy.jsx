import React from "react";
import "./Banner.css";
import Banner_img from '../../assets/pic5.png';

const Banner = () => {
  return (
    <div className="banner !h-full" style={{ backgroundImage: `url(${Banner_img})` }}>
      <div className="banner-content">
        <p className="sale-text">Big Saving Days Sale</p>
        <h2>Electrician Service at Makan Care</h2>
        <p className="price-text">
          Starting At Only <strong>AED 150.00</strong>
        </p>
        <button className="shop-btn">BOOK NOW</button>
      </div>
    </div>
  );
};

export default Banner;
