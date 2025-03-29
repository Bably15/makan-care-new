import React from "react";
import "./plumbing_product.css";
import OnlyHead from "../OnlyHead/OnlyHead";
import Footer from "../Footer/Footer";
import Plumbing1 from "../../assets/leakrepair.jpg";
import Plumbing2 from "../../assets/Piperepair.jpg";
import Plumbing3 from "../../assets/watergeyser.jpeg";

const Plumbing_Product = () => {
  return (
    <div>
      <OnlyHead />
      <div className="plumbing-product-container">
        <h2 className="product-title">Plumbing</h2>
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
              <img src={Plumbing1} alt="Pipe Repair & Installation" className="product-image" />
              <p>Pipe Repair & Installation</p>
            </a>
          </div>
          <div className="product-item">
            <a href="#waxing" className="product-link">
              <img src={Plumbing2} alt="Faucet & Leak Repair" className="product-image" />
              <p>Faucet & Leak Repair</p>
            </a>
          </div>
          <div className="product-item">
            <a href="#facial" className="product-link">
              <img src={Plumbing3} alt="Water Heater Repair & Installation" className="product-image" />
              <p>Water Heater Repair & Installation</p>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Plumbing_Product;