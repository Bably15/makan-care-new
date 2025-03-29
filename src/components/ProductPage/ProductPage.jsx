import React from "react";
import "./ProductPage.css";
import OnlyHead from "../OnlyHead/OnlyHead";
import Footer from "../Footer/Footer";

const ProductPage = () => {
  return (
    <div>
      <OnlyHead />
      <div className="product-page">
        {/* Product Image */}
        <div className="product-image">
          <img src="/product-image.jpg" alt="Product Name" />
        </div>

        {/* Product Details */}
        <div className="product-details">
          <h1 className="product-title">Gardening</h1>
          <p className="product-description">
            This is an amazing product that offers high quality and performance.
            Perfect for your daily needs!
          </p>
          <h2 className="product-price">AED 15</h2>

          {/* Quantity Selector */}
          {/* <div className="quantity-selector">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div> */}
          {/* Add to Cart Button */}
          <button className="add-to-cart">Add to Cart</button>
        </div>
        <br />
      </div>
      <div className="product-page">
        {/* Product Image */}
        <div className="product-image">
          <img src="/product-image.jpg" alt="Product Name" />
        </div>

        {/* Product Details */}
        <div className="product-details">
          <h1 className="product-title">Gardening</h1>
          <p className="product-description">
            This is an amazing product that offers high quality and performance.
            Perfect for your daily needs!
          </p>
          <h2 className="product-price">AED 15</h2>

          {/* Quantity Selector */}
          {/* <div className="quantity-selector">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div> */}
          {/* Add to Cart Button */}
          <button className="add-to-cart">Add to Cart</button>
        </div>
        <br />
      </div>
      <div className="product-page">
        {/* Product Image */}
        <div className="product-image">
          <img src="/product-image.jpg" alt="Product Name" />
        </div>

        {/* Product Details */}
        <div className="product-details">
          <h1 className="product-title">Gardening</h1>
          <p className="product-description">
            This is an amazing product that offers high quality and performance.
            Perfect for your daily needs!
          </p>
          <h2 className="product-price">AED 15</h2>

          {/* Quantity Selector */}
          {/* <div className="quantity-selector">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div> */}
          {/* Add to Cart Button */}
          <button className="add-to-cart">Add to Cart</button>
        </div>
        <br />
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
