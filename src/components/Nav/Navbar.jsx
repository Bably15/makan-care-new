import React from 'react'
// import site_logo from "../../assets/logo.png";
// import search_icon from "../../assets/search.png";
// import heart_icon from "../../assets/heart.png";
// import cart_icon from "../../assets/cart.png";
// import menu_icon from "../../assets/menu.png";
// import world_icon from "../../assets/world.png";
// import down_arrow from "../../assets/down_arrow.png";
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <div className="navbar">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-links">
          <a href="#">Help Center</a>
          <a href="#">Order Tracking</a>
        </div>
        <div className="top-options">
          <div className="language">
            <img src={world_icon} alt="Language" className="icon" /> English
            <img src={down_arrow} alt="Dropdown" className="icon small-icon" />
          </div>
          <div className="currency">
            USD
            <img src={down_arrow} alt="Dropdown" className="icon small-icon" />
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="main-nav">
        <div className="logo">
          <img src={site_logo} alt="Makan Care Logo" />
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search products here..." />
          <button>
            <img src={search_icon} alt="Search" className="icon" />
            SEARCH
          </button>
        </div>
        <div className="user-actions">
          <a href="#">Login / Register</a>
          <img src={heart_icon} alt="Wishlist" className="icon" />
          <img src={cart_icon} alt="Shopping Cart" className="icon" />
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <button className="categories-btn">
          <img src={menu_icon} alt="Menu" className="icon" />
          SHOP BY CATEGORIES
          <img src={down_arrow} alt="Dropdown" className="icon small-icon" />
        </button>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">New Arrivals</a>
          </li>
          <li>
            <a href="#">More</a>
          </li>
        </ul>
        <div className="promo-text">🚀 Free International Delivery</div>
      </div>
    </div>
    </div>
  )
}

export default Navbar
