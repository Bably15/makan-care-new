import { Link } from "react-router-dom";
import chat_img from "../../assets/chatbot.png";

import facebookIcon from "../../assets/facebook.png";
import twitterIcon from "../../assets/x.png";
import instagramIcon from "../../assets/instagram.png";
import pinterestIcon from "../../assets/pintrest.png";
import youtubeIcon from "../../assets/youtube.png";
import visaIcon from "../../assets/visa.png";
import mastercardIcon from "../../assets/mastercard.png";
import paypalIcon from "../../assets/paypal.png";
import amexIcon from "../../assets/amex.png";
import cbIcon from "../../assets/cartblue.png";

const Footer = () => {
    return (
        <>
            <div className="w-full border border-gray-200 py-20">
                <div className="max-w-7xl mx-auto p-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div>
                            <h3 className="text-lg font-bold mb-7">
                                Contact Us
                            </h3>
                            <p className="text-sm text-gray-400 mb-7">
                                Classyshop - Mega Super Store
                                <br />
                                507-Union Trade Centre
                                <br />
                                Riyadh
                            </p>
                            <p className="text-sm text-gray-400 mb-7">
                                <a href="mailto:support@makancare.com">
                                    support@makancare.com
                                </a>
                            </p>
                            <p className="text-lg mb-7">
                                <a href="tel:(+966) 9876-543-210">
                                    (+966) 9876-543-210
                                </a>
                            </p>
                            <div className="flex text-bold">
                                <img src={chat_img} alt="" className="h-10" />
                                <p className="font-bold mx-3">
                                    Online Chat
                                    <br />
                                    Get Expert Help
                                </p>
                            </div>
                        </div>
                        <div className="border-l-1 border-gray-200 pl-12">
                            <h3 className="text-lg font-bold mb-7">
                                Quick Links
                            </h3>
                            <p className="text-gray-400 mb-3 text-sm">
                                <Link to={"/contact"}>Contact Us</Link>
                            </p>
                            <p className="text-gray-400 mb-3 text-sm">
                                <Link to={"/services"}>Services</Link>
                            </p>
                            <p className="text-gray-400 mb-3 text-sm">
                                <Link to={"/about"}>About Us</Link>
                            </p>
                            <p className="text-gray-400 mb-3 text-sm">
                                <Link to={"/services"}>Best Services</Link>
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-7">
                                Our company
                            </h3>
                            <p className="text-gray-400 mb-3 text-sm">
                                <Link to={"/login"}>Login</Link>
                            </p>
                            <p className="text-gray-400 mb-3 text-sm">
                                <Link to={"/privacy-policy"}>
                                    Privacy Policy
                                </Link>
                            </p>
                            <p className="text-gray-400 mb-3 text-sm">
                                <Link to={"/terms-and-conditions"}>
                                    Terms & Conditions
                                </Link>
                            </p>
                            <p className="text-gray-400 mb-3 text-sm">
                                <Link to={"/refund-policy"}>Refund Policy</Link>
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-7">
                                Subscribe to Our Newsletter
                            </h3>
                            <p className="text-sm text-gray-400 mb-7">
                                Subscribe to our latest newsletter to get news
                                <br />
                                about special discounts.
                            </p>
                            <div className="">
                                <input
                                    type="email"
                                    placeholder="Your Email Address"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                                />

                                <button className="mt-3 p-3 px-10 text-white bg-[#654834] rounded-md hover:bg-stone-600 transition">
                                    SUBSCRIBE
                                </button>

                                <div className="mt-3 flex items-start">
                                    <input
                                        type="checkbox"
                                        id="terms"
                                        className="mt-1 w-4 h-4 border-gray-300 rounded"
                                    />
                                    <label
                                        htmlFor="terms"
                                        className="ml-2 text-gray-600 text-sm"
                                    >
                                        I agree to the
                                        <a href="#" className="underline mx-2">
                                            terms and conditions
                                        </a>
                                        and the
                                        <a href="#" className="underline ms-2">
                                            privacy policy
                                        </a>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full border-t-1 border-gray-200">
                <div className="max-w-7xl mx-auto p-4 py-3">
                    <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4">
                        <div className="flex items-center justify-center sm:justify-start gap-4">
                            <div className="border border-gray-200 p-1 rounded-full">
                                <img
                                    className="w-4"
                                    src={facebookIcon}
                                    alt="Facebook"
                                />
                            </div>
                            <div className="border border-gray-200 p-1 rounded-full">
                                <img
                                    className="w-10"
                                    src={twitterIcon}
                                    alt="twitter"
                                />
                            </div>
                            <div className="border border-gray-200 p-1 rounded-full">
                                <img
                                    className="w-4"
                                    src={instagramIcon}
                                    alt="instagram"
                                />
                            </div>
                            <div className="border border-gray-200 p-1 rounded-full">
                                <img
                                    className="w-4"
                                    src={pinterestIcon}
                                    alt="pinterest"
                                />
                            </div>
                            <div className="border border-gray-200 p-1 rounded-full">
                                <img
                                    className="w-6"
                                    src={youtubeIcon}
                                    alt="youtube"
                                />
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="mb-0 text-sm text-gray-500">
                                © 2025 - All Copyright Reserved by MAKANCARE
                            </p>
                        </div>
                        <div className="flex items-center justify-center sm:justify-end gap-4">
                            <img src={cbIcon} alt="cb" />
                            <img src={visaIcon} alt="visa" />
                            <img src={mastercardIcon} alt="mastercard" />
                            <img src={amexIcon} alt="amex" />
                            <img src={paypalIcon} alt="paypal" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
