import React from "react";
import Footer from "../Footer/Footer";
import "./ContactUs.css";
import OnlyHead from "../OnlyHead/OnlyHead";
import locatiom_img from "../../assets/location.png"
import technician from "../../assets/small.png"
import sitelogo from "../../assets/logo.png"

const ContactUs = () => {
  return (
    <div>
      <OnlyHead />

      <div className="contact-section">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-subtitle">Let us help you with your queries</p>

        <div className="contact-container">
          {/* Left Side */}
          <div className="contact-left">
            <img
              src={sitelogo}
              alt="Makan Care Logo"
              className="contact-logo"
            />
            <img
              src={technician}
              alt="Technician Working"
              className="contact-image"
            />
          </div>

          {/* Right Side */}
          <div className="contact-right">
            <div className="contact-buttons">
              <button className="contact-btn general-btn">For General</button>
              <button className="contact-btn corporate-btn">
                Corporate Tie-ups
              </button>
            </div>
            <p className="contact-query">
              Got a query? 
              <br/>
              Click on the button below to contact us.
            </p>
            <p className="contact-form-title">
              <strong>Fill out this form and we will get in touch.</strong>
            </p>

            <form className="contact-form">
              <div className="contact-input-group">
                <input
                  type="text"
                  placeholder="Full Name*"
                  className="contact-input"
                />
                <input
                  type="text"
                  placeholder="Mobile No.*"
                  className="contact-input"
                />
              </div>
              <input
                type="email"
                placeholder="Email*"
                className="contact-input"
              />
              <textarea
                placeholder="Message"
                className="contact-textarea"
              ></textarea>
              <button type="submit" className="contact-submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="office-locations">
        <h2 className="office-title">Our Offices</h2>

        <div className="office-container">
          {/* Registered Office */}
          <div className="office-box">
            <div className="office-icon">
              <img src={locatiom_img} alt="Registered Office" />
            </div>
            <h3 className="office-heading">REGISTERED OFFICE</h3>
            <p className="office-address">
              Brahmanwala, 114/1, By Pass Road, Niranjan Pur, Dehradun, <br />
              Uttarakhand - 248001
            </p>
            <a
              href="https://www.google.com/maps?q=Dehradun,Uttarakhand"
              target="_blank"
              rel="noopener noreferrer"
              className="office-map-link"
            >
              View On Google Map
            </a>
          </div>

          {/* Head Office */}
          <div className="office-box">
            <div className="office-icon">
              <img src={locatiom_img}  alt="Head Office" />
            </div>
            <h3 className="office-heading">HEAD OFFICE</h3>
            <p className="office-address">
              Unit No 25A, Tower B2, Spaze 1-Tech Park, Sohna Road, <br />
              Gurugram, Haryana - 122018
            </p>
            <a
              href="https://www.google.com/maps?q=Gurugram,Haryana"
              target="_blank"
              rel="noopener noreferrer"
              className="office-map-link"
            >
              View On Google Map
            </a>
          </div>
        </div>

        {/* Full Width Google Map */}
        <div className="office-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448181.1164983939!2d76.81306360282646!3d28.646677179587327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18dc5aa0988d%3A0x4f2bffbe5c6e11c3!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1710000000000"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
