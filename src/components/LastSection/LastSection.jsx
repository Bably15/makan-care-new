import React from "react";

import picA from "../../assets/p1.png";
import picB from "../../assets/p2.png";
import picC from "../../assets/p3.png";
import picD from "../../assets/p4.png";
import picE from "../../assets/p5.png";
import { COMMON_CONSTANTS } from "../../constants/common/commonConstants";

const data = [
    {
        title: "Fast Service",
        description: `For all Orders Over ${COMMON_CONSTANTS.currency} 50`,
        icon: picA,
    },
    {
        title: "30 Days Warranty",
        description: "For an Exchange Product",
        icon: picB,
    },
    {
        title: "Secured Payment",
        description: "Payment Cards Accepted",
        icon: picC,
    },
    {
        title: "Special Gifts",
        description: "Our First Product Order",
        icon: picD,
    },
    {
        title: "Support 24/7",
        description: "Contact us Anytime",
        icon: picE,
    },
];

const LastSection = () => {
    return (
        <div className="w-full py-5">
            <div className="max-w-7xl mx-auto p-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                    {data.map((product, index) => (
                        <div key={index} className="text-center">
                            <img
                                src={product.icon}
                                alt="p4"
                                className="w-16 h-16 mx-auto"
                            />
                            <h2 className="text-sm font-semibold font-roboto mt-4">
                                {product.title}
                            </h2>
                            <p className="text-sm font-normal text-gray-400 font-roboto mt-4">
                                {product.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// <div className="last-section">
//     <div className="column">
//         <img src={picA} alt="p1" />
//         <p className="bold-text">Fast Service</p>
//         <p>Above AED 20</p>
//     </div>
//     <div className="column">
//         <img src={picB} alt="p2" />
//         <p className="bold-text">Warrenty</p>
//         <p>For all services</p>
//     </div>
//     <div className="column">
//         <img src={picC} alt="p3" />
//         <p className="bold-text">Secured Payment</p>
//         <p>Online/card</p>
//     </div>
//     <div className="column">
//         <img src={picD} alt="p4" />
//         <p className="bold-text">Offers</p>
//         <p>On First Service</p>
//     </div>
//     <div className="column">
//         <img src={picE} alt="p5" />
//         <p className="bold-text">24*7 Support</p>
//         <p>Contact us</p>
//     </div>
// </div>
export default LastSection;
