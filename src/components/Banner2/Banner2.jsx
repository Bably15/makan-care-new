import React from "react";
import Kitchenclean from "../../assets/kitchencleanung1.png";

const Banner2 = () => {
    return (
        <div className="relative rounded-lg h-full overflow-hidden">
            <img
                src={Kitchenclean}
                alt="Kitchen Cleaning"
                className="w-full h-full"
            />
            {/* <div className="absolute inset-0 bg-black/30 flex flex-col justify-center p-8 text-white">
        <h2 className="text-3xl font-medium mb-5">Kitchen<br />Cleaning</h2>
        <p className="text-lg mb-2">
          <strong>AED 150.00</strong>
        </p>
        <p>
          <a href="#" className="mt-2 inline-block underline font-semibold rounded-lg transition">
            BOOK NOW
          </a>
        </p>
      </div> */}
        </div>
    );
};

export default Banner2;
