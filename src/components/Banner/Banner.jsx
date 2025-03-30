import React from "react";
// import "./Banner.css";
import Banner_img from "../../assets/pic5.png";
import { COMMON_CONSTANTS } from "../../constants/common/commonConstants";

const Banner = () => {
    return (
        <div className="relative rounded-lg h-full overflow-hidden">
            <img
                src={Banner_img}
                alt="Electrician Service"
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 text-white flex justify-center p-8 text-black">
                <div className="w-full md:w-6/12 px-2 hidden md:block"></div>
                <div className="w-full md:w-6/12 px-2 my-auto">
                    <p className="mb-5">Big Saving Days Sale</p>
                    <h2 className="text-3xl md:text-5xl font-medium mb-5">
                        Electrician Service at Makan Care
                    </h2>
                    <p className="mb-5">
                        Starting At Only{" "}
                        <strong>{COMMON_CONSTANTS.currency} 150.00</strong>
                    </p>
                    <button className="bg-[#6b4f36] text-white border-none px-4 py-2 rounded-md cursor-pointer uppercase">
                        Shop Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
