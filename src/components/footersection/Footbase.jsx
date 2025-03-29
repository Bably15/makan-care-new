import React from "react";
import "./Footbase.css";
import facebookIcon from "../../assets/facebook.png";
import twitterIcon from "../../assets/x.png";
import instagramIcon from "../../assets/instagram.png";
import linkedinIcon from "../../assets/pintrest.png";
import youtubeIcon from "../../assets/youtube.png";
import visaIcon from "../../assets/visa.png";
import mastercardIcon from "../../assets/mastercard.png";
import paypalIcon from "../../assets/paypal.png";
import amexIcon from "../../assets/amex.png";
import cbIcon from "../../assets/cartblue.png";

const Footbase = () => {
  return (
    <div className="footer-bottom">
      {/* Social Media Icons */}
      <div className="social-icons">
        <img src={facebookIcon} alt="Facebook" />
        <img src={twitterIcon} alt="Twitter" />
        <img src={instagramIcon} alt="Instagram" />
        <img src={linkedinIcon} alt="LinkedIn" />
        <img src={youtubeIcon} alt="YouTube" />
      </div>

      {/* Copyright Text */}
      <p className="copyright">© 2025 - All Copyright Reserved by MAKANCARE</p>

      {/* Payment Icons */}
      <div className="payment-icons">
        <img src={visaIcon} alt="Visa" />
        <img src={mastercardIcon} alt="Mastercard" />
        <img src={paypalIcon} alt="PayPal" />
        <img src={amexIcon} alt="American Express" />
        <img src={cbIcon} alt="CartBlue" />
      </div>
    </div>
  );
};

export default Footbase;
