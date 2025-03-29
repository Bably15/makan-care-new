import React from "react";
import "./Product_Site.css";
import OnlyHead from "../OnlyHead/OnlyHead";
import Footer from "../Footer/Footer";
import Lawn from "../../assets/LawnMaintainance.jpeg";
import Plantcare from "../../assets/Plantcare.jpeg";
import Fencing from "../../assets/Fencing.jpeg";

const Product_Site = () => {
  return (
    <div>
      <OnlyHead />
      <div className="product-container">
        <h2 className="product-title">Gardening</h2>
        <p className="product-rating">
          {/* <span className="product-star">⭐</span> 4.84 (3M reviews) */}
        </p>
        <p className="product-price">AED 150.00</p>

        <ul className="product-list">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
            minus nulla maxime dolorem aliquid, quisquam, ullam ipsa ex dolor
            harum praesentium dignissimos modi numquam molestiae cumque dolorum
            non eaque tenetur. Sapiente hic maxime velit eius nobis soluta iste,
            omnis porro deserunt veniam, molestiae culpa non quisquam nihil
            minus quod ad quasi debitis! Iure sequi blanditiis cum, deserunt
            amet temporibus illum.
          </p>
        </ul>

        {/* <button className="product-edit-button">Edit your package</button> */}
        <button className="product-add-button">Add to Cart</button>
        <h3>We also Provide</h3>
        <div className="product-links-container">
          <div className="product-item">
            <a href="#threading" className="product-link">
              <img src={Lawn} alt="Lawn" className="product-image" />
              <p>Lawn Maintainence</p>
            </a>
          </div>
          <div className="product-item">
            <a href="#waxing" className="product-link">
              <img src={Plantcare} alt="PlantCare" className="product-image" />
              <p>Tree & Plant Care</p>
            </a>
          </div>
          <div className="product-item">
            <a href="#facial" className="product-link">
              <img src={Fencing} alt="Fencing" className="product-image" />
              <p>Fencing</p>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product_Site;
