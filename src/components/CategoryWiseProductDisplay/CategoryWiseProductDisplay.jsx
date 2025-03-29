import React from "react";
import "./CategoryWiseProductDisplay.css";

import Lawn from "../../assets/LawnMaintainance.jpeg"; // Replace with actual image path
import PlantCare from "../../assets/Plantcare.jpeg"; // Replace with actual image path
import Fencing from "../../assets/fencing.jpeg"; // Replace with actual image path
import Plumbing1 from "../../assets/leakrepair.jpg";
import Plumbing2 from "../../assets/Piperepair.jpg";
import Plumbing3 from "../../assets/watergeyser.jpeg";
import Electric1 from "../../assets/wiring.jpeg";
import Electric2 from "../../assets/lightrepair.jpg";
import Electric3 from "../../assets/circutrepair.jpg";

const CategoryWiseProductDisplay = () => {
  return (
    <div className="category-container">
      <h2>Gardening</h2>
      <div className="category-grid">
        <div className="product-item">
          <a href="#lawn-maintenance" className="product-link">
            <img src={Lawn} alt="Lawn Maintenance" className="product-image" />
            <p>Lawn Maintenance</p>
            <div className="price-button-container">
              <div className="price-tag">
                <p>SAR 150.00</p>
              </div>
              <button className="request-button">BOOK NOW</button>
            </div>
          </a>
        </div>
        <div className="product-item">
          <a href="#tree-plant-care" className="product-link">
            <img
              src={PlantCare}
              alt="Tree & Plant Care"
              className="product-image"
            />
            <p>Tree & Plant Care</p>
            <div className="price-button-container">
              <div className="price-tag">
                <p>SAR 150.00</p>
              </div>
              <button className="request-button">BOOK NOW</button>
            </div>
          </a>
        </div>
        <div className="product-item">
          <a href="#fencing" className="product-link">
            <img src={Fencing} alt="Fencing" className="product-image" />
            <p>Fencing</p>
            <div className="price-button-container">
              <div className="price-tag">
                <p>SAR 150.00</p>
              </div>
              <button className="request-button">BOOK NOW</button>
            </div>
          </a>
        </div>
      </div>
      <h2>Plumbing</h2>
      <div className="category-grid">
        <div className="product-item">
          <a href="#lawn-maintenance" className="product-link">
            <img
              src={Plumbing2}
              alt="Lawn Maintenance"
              className="product-image"
            />
            <p>Pipes Repair & Installation</p>
            <div className="price-button-container">
              <div className="price-tag">
                <p>SAR 150.00</p>
              </div>
              <button className="request-button">BOOK NOW</button>
            </div>
          </a>
        </div>
        <div className="product-item">
          <a href="#tree-plant-care" className="product-link">
            <img
              src={Plumbing1}
              alt="Tree & Plant Care"
              className="product-image"
            />
            <p>Faucets & Leak Repair</p>
            <div className="price-button-container">
              <div className="price-tag">
                <p>SAR 150.00</p>
              </div>
              <button className="request-button">BOOK NOW</button>
            </div>
          </a>
        </div>
        <div className="product-item">
          <a href="#fencing" className="product-link">
            <img src={Plumbing3} alt="Fencing" className="product-image" />
            <p>Water Heaters Repair & Installation</p>
            <div className="price-button-container">
              <div className="price-tag">
                <p>SAR 150.00</p>
              </div>
              <button className="request-button">BOOK NOW</button>
            </div>
          </a>
        </div>
      </div>
      <br />
      <h2>Electrician</h2>
      <div className="category-grid">
        <div className="product-item">
          <a href="#lawn-maintenance" className="product-link">
            <img
              src={Electric1}
              alt="Lawn Maintenance"
              className="product-image"
            />
            <p>Wiring & Rewiring</p>
            <div className="price-button-container">
              <div className="price-tag">
                <p>SAR 150.00</p>
              </div>
              <button className="request-button">BOOK NOW</button>
            </div>
          </a>
        </div>
        <div className="product-item">
          <a href="#tree-plant-care" className="product-link">
            <img
              src={Electric2}
              alt="Tree & Plant Care"
              className="product-image"
            />
            <p>Lighting Fixture Installation</p>
            <div className="price-button-container">
              <div className="price-tag">
                <p>SAR 150.00</p>
              </div>
              <button className="request-button">BOOK NOW</button>
            </div>
          </a>
        </div>
        <div className="product-item">
          <a href="#fencing" className="product-link">
            <img src={Electric3} alt="Fencing" className="product-image" />
            <p>Circuit Breakering Repair</p>
            <div className="price-button-container">
              <div className="price-tag">
                <p>SAR 150.00</p>
              </div>
              <button className="request-button">BOOK NOW</button>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CategoryWiseProductDisplay;
