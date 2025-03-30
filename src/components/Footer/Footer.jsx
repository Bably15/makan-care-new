import React from "react";
import "./Footer.css";
import chat_img from "../../assets/chatbot.png";
import Subscribe from "../subscribebox/Subscribe";
import Footbase from "../footersection/Footbase";
import { Link } from "react-router-dom";
import { APPROUTES } from "../../constants/routes/appRoutes";
const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="footer-container">
                    {/* Column 1 */}
                    <div className="footer-column">
                        <h3>Contact Us</h3>
                        <p>
                            Classyshop - Mega Super Store
                            <br />
                            507-Union Trade Centre
                            <br />
                            Riyadh
                        </p>
                        <p className="footer-mail">
                            <a href="mailto:support@makancare.com">
                                support@makancare.com
                            </a>
                        </p>
                        <p className="footer-phone">
                            <a href="tel:(+966) 9876-543-210">
                                (+966) 9876-543-210
                            </a>
                        </p>
                        <div className="footer-chatbot">
                            <img src={chat_img} alt="" srcset="" />
                            <p>
                                Online Chat
                                <br />
                                Get Expert Help
                            </p>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="footer-column">
                        <h3>Quick Links</h3>
                        <p>
                            <Link to={APPROUTES.CONTACT}>Contact Us</Link>
                        </p>
                        <p>
                            <Link to={APPROUTES.SERVICES}>Services</Link>
                        </p>
                        <p>
                            <Link to={APPROUTES.ABOUT}>About Us</Link>
                        </p>
                        <p>Best Services</p>
                        {/* <p>Shipping & Delivery</p> */}
                        {/* <p>Returns & Exchanges</p> */}
                    </div>

                    {/* Column 3 */}
                    <div className="footer-column">
                        <h3>Our Company</h3>
                        <p>Log in</p>
                        <p>Privacy Policy</p>
                        <p>Terms & Conditions</p>
                        {/* <p>Contact Us</p> */}
                        {/* <p>Shipping & Delivery</p> */}
                        <p>Refund Policy</p>
                    </div>

                    {/* Column 4 */}
                    <div className="footer-column">
                        <>
                            <Subscribe />
                        </>
                    </div>
                </div>
            </footer>
            <>
                <Footbase />
            </>
        </div>
    );
};

export default Footer;
