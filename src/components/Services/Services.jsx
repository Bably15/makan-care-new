// import React from "react";
// import Hero from "../../components/hero/Hero";
// import Section1 from "../../components/section1/Section1";
// import Section2 from "../../components/section2/section2";
// import CategoryWiseProductDisplay from "../../components/CategoryWiseProductDisplay/CategoryWiseProductDisplay";
// import BlogSite from "../../components/Blogsite/BlogSite";
// import LastSection from "../../components/LastSection/LastSection";
import ServiceCard from "../ServiceCard/ServiceCard";

// import PACKAGES_IMG from "../../assets/packages.png";
// import WAXING_IMG from "../../assets/waxing.png";
// import FACIAL_AND_CLEANUP_IMG from "../../assets/facial_and_cleanup.png";
// import MANICURE_IMG from "../../assets/manicure.png";
// import PEDICURE_IMG from "../../assets/pedicure.png";
// import THREADING_IMG from "../../assets/threading.png";
// import BLEACH_AND_DETAN from "../../assets/bleach_and_detan.png";
// import HAIR_CARE from "../../assets/hair_care.png";

import CART_IMG from "../../assets/cart2.png";
import DISCOUNT_IMG from "../../assets/discount.png";
import QUALITY_ASSURED_IMG from "../../assets/quality_assured.png";
// import { services } from "../../mocks/services";
import { useSelector } from "react-redux";
import { COMMON_CONSTANTS } from "../../constants/common/commonConstants";

// const listOfServices = [
//     { name: "Packages", image: PACKAGES_IMG },
//     { name: "Waxing", image: WAXING_IMG },
//     { name: "Facial & cleanup", image: FACIAL_AND_CLEANUP_IMG },
//     { name: "Manicure", image: MANICURE_IMG },
//     { name: "Pedicure", image: PEDICURE_IMG },
//     { name: "Threading", image: THREADING_IMG },
//     { name: "Bleach & detan", image: BLEACH_AND_DETAN },
//     { name: "Hair care", image: HAIR_CARE },
// ];

const Services = ({ service }) => {
    const cartData = useSelector((state) => state.cart);
    return (
        <>
            <div className="w-full py-5 pt-14">
                <div className="max-w-7xl mx-auto p-4">
                    <div className="flex flex-wrap -mx-2">
                        <div className="w-full md:w-3/12 p-0 sm:p-5">
                            <h1 className="text-3xl font-bold mb-4">
                                {service?.title}
                            </h1>
                            <div className="border border-blue-900 rounded-3xl w-10 my-6"></div>
                            <p className="text-xs leading-6 text-gray-600 mb-15">
                                {service?.description}
                            </p>

                            <div className="border border-gray-200 rounded-lg p-5">
                                <div className="flex items-center mb-8">
                                    <h3 className="text-sm font-normal mr-3">
                                        Select a service
                                    </h3>
                                    <div className="flex-1 border border-gray-200 rounded-3xl"></div>
                                </div>
                                <div className="grid grid-cols-3 gap-6">
                                    {service?.subcategories &&
                                        service?.subcategories.map(
                                            (service, index) => (
                                                <div
                                                    key={index}
                                                    className="flex flex-col items-center text-center"
                                                >
                                                    <img
                                                        className="mb-3"
                                                        src={service?.image}
                                                        alt={service?.title}
                                                    />
                                                    <p className="text-sm">
                                                        {service?.title}
                                                    </p>
                                                </div>
                                            )
                                        )}
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-6/12 p-0 sm:p-5 border-x-1 border-gray-200">
                            {service?.subcategories.map((service, index) => (
                                <ServiceCard key={index} service={service} />
                            ))}
                        </div>

                        <div className="w-full md:w-3/12 p-0 sm:p-5">
                            <div className="border border-gray-200 rounded-lg p-5 mb-5">
                                {cartData.items.length ? (
                                    <>
                                        <h2 className="text-xl font-bold mb-5">
                                            Cart
                                        </h2>
                                        {cartData.items.map((item) => (
                                            <div
                                                key={item.id}
                                                className="text-sm text-gray-600 flex justify-between gap-4 mb-4"
                                            >
                                                <h3>{item.title}</h3>
                                                <div className="whitespace-nowrap">
                                                    {COMMON_CONSTANTS.currency}{" "}
                                                    {item.price.toFixed(2)}
                                                </div>
                                            </div>
                                        ))}
                                        <div className="border-t-1 border-gray-300 pt-5">
                                            <div className="flex justify-between gap-4">
                                                <h3>Total</h3>
                                                <div className="whitespace-nowrap">
                                                    {COMMON_CONSTANTS.currency}{" "}
                                                    {cartData.totalPrice.toFixed(
                                                        2
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <div className="flex flex-col items-center">
                                        <img
                                            className="mb-5"
                                            src={CART_IMG}
                                            alt="cart icon"
                                        />
                                        <p className="text-xs text-gray-600">
                                            No items in your cart
                                        </p>
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col border border-gray-200 rounded-lg p-5 mb-5">
                                <div className="flex items-start mb-4">
                                    <div className="bg-gray-100 rounded-lg p-2 mb-5 mr-4">
                                        <img
                                            src={DISCOUNT_IMG}
                                            alt="discount"
                                        />
                                    </div>
                                    <div className="text-xs">
                                        <h3 className="font-bold mb-2">
                                            Assured reward from CRED
                                        </h3>
                                        <p className="text-gray-600">
                                            On all online payments
                                        </p>
                                    </div>
                                </div>
                                <div className="font-bold text-[#6E42E5]">
                                    View More Offers
                                </div>
                            </div>
                            <div className="flex items-start border border-gray-200 rounded-lg p-5 mb-5">
                                <div>
                                    <h3 className="text-2xl font-bold mb-5">
                                        UC Promise
                                    </h3>
                                    <ul className="text-xs">
                                        <li className="mb-3">
                                            <i class="fa-solid fa-check mr-2"></i>
                                            4.5+ Rated Beauticians
                                        </li>
                                        <li className="mb-3">
                                            <i class="fa-solid fa-check mr-2"></i>
                                            Luxury Salon Experience
                                        </li>
                                        <li className="mb-3">
                                            <i class="fa-solid fa-check mr-2"></i>
                                            Premium Branded Products
                                        </li>
                                    </ul>
                                </div>

                                <img
                                    src={QUALITY_ASSURED_IMG}
                                    alt="quality assured"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;
