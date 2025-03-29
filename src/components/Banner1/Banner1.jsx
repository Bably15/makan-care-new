import React from "react";
import "./Banner1.css";
import Bathroomclean from "../../assets/bathroomclean1.png";

const Banner1 = () => {
    return (
        <div className="relative rounded-lg h-full overflow-hidden">
            <img
                src={Bathroomclean}
                alt="Bathroom Cleaning"
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-center p-8 text-black">
                <h2 className="text-3xl font-medium mb-5">
                    Bathroom
                    <br />
                    Cleaning
                </h2>
                <p className="text-lg mb-2">
                    <strong>AED 150.00</strong>
                </p>
                <p>
                    <a
                        href="#"
                        className="mt-2 inline-block underline font-semibold rounded-lg transition"
                    >
                        BOOK NOW
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Banner1;
