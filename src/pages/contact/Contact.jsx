import React from "react";

import LOGO from "../../assets/logo.png";
import CONTACT_MAIN_IMG from "../../assets/small.png";

const Contact = () => {
    return (
        <>
            <div className="w-full py-5 pt-14">
                <div className="max-w-5xl mx-auto p-4">
                    <div className="flex flex-wrap justify-between items-center -mx-2">
                        <div className="w-full">
                            <h2 className="text-center text-3xl font-bold text-blue-900">
                                Contact Us
                            </h2>
                            <p className="text-center text-gray-600 mt-2">
                                Let us help you with your queries
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full py-4 sm:py-6">
                <div className="max-w-5xl mx-auto p-4">
                    <div className="flex flex-wrap -mx-2">
                        <div className="w-full sm:w-4/12 bg-gray-200">
                            <div className="flex items-center flex-col">
                                <img
                                    className="max-w-50"
                                    src={LOGO}
                                    alt="logo"
                                />
                                <img
                                    className="object-cover w-full h-80"
                                    src={CONTACT_MAIN_IMG}
                                    alt="contact us"
                                />
                            </div>
                        </div>
                        <div className="w-full sm:w-8/12 bg-gray-100 p-8">
                            <div className="flex justify-between space-x-2 mb-10">
                                <button className="bg-[#654834] text-white px-14 py-2 rounded-3xl">
                                    For General
                                </button>
                                <button className="border border-gray-400 px-10 py-2 rounded-3xl">
                                    Corporate Tie-ups
                                </button>
                            </div>

                            <p className="text-gray-700 mb-4">
                                Got a query?
                                <br />
                                Click on the button below to contact us.
                            </p>
                            <p className="font-bold text-gray-900 mb-5">
                                Fill out this form and we will get in touch.
                            </p>

                            <form className="mt-4">
                                <div className="flex space-x-4 mb-6">
                                    <input
                                        type="text"
                                        placeholder="Full Name*"
                                        className="w-1/2 p-2 border-b border-gray-400 focus:outline-none"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Mobile No.*"
                                        className="w-1/2 p-2 border-b border-gray-400 focus:outline-none"
                                    />
                                </div>
                                <input
                                    type="email"
                                    placeholder="Email*"
                                    className="w-full p-2 mt-4 border-b border-gray-400 focus:outline-none"
                                />
                                <textarea
                                    placeholder="Message"
                                    className="w-full p-2 mt-4 border-b border-gray-400 focus:outline-none"
                                ></textarea>
                                <button
                                    type="submit"
                                    className="bg-[#654834] text-white px-14 py-2 rounded-3xl mt-8"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full py-4 sm:py-10">
                <div className="max-w-5xl mx-auto p-4">
                    <div className="flex flex-wrap justify-between items-center -mx-2">
                        <div className="w-full">
                            <h2 className="text-center text-3xl font-normal">
                                Our Offices
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full py-4 sm:py-10">
                <div className="max-w-5xl mx-auto p-4">
                    <div className="flex flex-wrap justify-between items-center -mx-2">
                        <div className="w-full sm:w-6/12 md:w-4/12 text-center">
                            <h3 className="text-lg font-bold mb-10">
                                REGISTERED OFFICE
                            </h3>
                            <div className="flex flex-col items-center">
                                <div className="bg-[#654834] text-white py-3 px-4 rounded-full mb-5">
                                    <i class="fa-solid fa-location-pin"></i>
                                </div>
                                <div className="border-2 border-blue-900 rounded-3xl w-10"></div>
                            </div>
                            <p className="text-gray-600 mt-7">
                                Brahmawala, 114/1, By Pass Road, Niranjan Pur,
                                Dehradun, Uttarakhand - 248001
                            </p>
                            <a href="#" className="text-blue-600 mt-5 block">
                                View On Google Map
                            </a>
                        </div>

                        <div className="w-full sm:w-6/12 md:w-4/12 text-center">
                            <h3 className="text-lg font-bold mb-10">
                                HEAD OFFICE
                            </h3>
                            <div className="flex flex-col items-center">
                                <div className="bg-[#654834] text-white py-3 px-4 rounded-full mb-5">
                                    <i class="text-xl fa-solid fa-location-dot"></i>
                                </div>
                                <div className="border-2 border-blue-900 rounded-3xl w-10"></div>
                            </div>

                            <p className="text-gray-600 mt-7">
                                Unit No 25A, Tower B2, Spaze I-Tech Park, Sohna
                                Road, Gurugram, Haryana - 122018
                            </p>
                            <a href="#" className="text-blue-600 mt-5 block">
                                View On Google Map
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full py-4 sm:py-10">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231246.92508019574!2d55.09975935196854!3d25.0939660167947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1743191770658!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    allowfullscreen=""
                    loading="lazy"
                    // referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </>
    );
};

export default Contact;
