import React from "react";
import slide from "../../assets/slide3.png";
import gardener from "../../assets/gardener.jpeg";
const Highlight = () => {
    return (
        <>
            <div className="w-full py-5">
                <div className="max-w-7xl mx-auto p-4">
                    {/* <div className="flex flex-wrap -mx-2">
                        <div className="w-full sm:w-6/12 lg:w-6/12 p-2">
                            <img
                                src={slide}
                                alt=""
                                className="w-full object-cover"
                            />
                        </div>
                        <div className="w-full sm:w-6/12 lg:w-6/12 p-2">
                            <img
                                src={gardener}
                                alt="Bathroom Cleaning"
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/30 flex flex-col justify-center p-8 text-white">
                                <h2 className="text-3xl font-medium mb-5">
                                    Wall
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
                    </div> */}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 overflow-hidden">
                        <img
                            src={slide}
                            alt=""
                            className="w-full h-70 object-cover"
                        />
                        <div className="relative h-70 overflow-hidden">
                            <img
                                src={gardener}
                                alt="Bathroom Cleaning"
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/30 flex flex-col justify-center p-8 text-white">
                                <h2 className="text-3xl font-medium mb-5">
                                    Wall
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
                    </div>
                </div>
            </div>
        </>
    );
};

export default Highlight;
