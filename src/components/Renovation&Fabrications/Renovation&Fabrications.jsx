import { v4 as uuidv4 } from "uuid";

import Card from "../Card/Card";

import image1 from "../../assets/slide2.png";
import image2 from "../../assets/pic7.png";
import image3 from "../../assets/small.png";

const RenovationsFabrications = () => {
    const services = [
        {
            id: uuidv4(),
            category: "Initech Space",
            name: "Apple Smart Watch / Midnight Aluminum",
            image: image1,
            rating: 4,
            price: "51.04",
            originalPrice: "58.00",
        },
        {
            id: uuidv4(),
            category: "Massive Dynamic",
            name: "BoAt Lite Smartwatch 1.69 Inches HD Display",
            image: image2,
            rating: 5,
            price: "64.17",
            originalPrice: "69.00",
        },
        {
            id: uuidv4(),
            category: "Pro Tech Gear",
            name: "Cropped Satin Bomber Jacket",
            image: image3,
            rating: 1,
            price: "94.00",
            originalPrice: null,
        },
    ];

    return (
        <>
            <div className="w-full py-5">
                <div className="max-w-7xl mx-auto p-4">
                    <div className="flex flex-wrap -mx-2">
                        <div className="w-full flex justify-between">
                            <div>
                                <h2 className="font-medium text-2xl">
                                    Renovation & Fabrications
                                </h2>
                            </div>
                            <div>
                                <button className="border border-gray-200 rounded-full p-2">
                                    {" "}
                                    <i class="fa-solid fa-angle-left"></i>
                                </button>
                                <button className="border border-gray-200 rounded-full p-2">
                                    {" "}
                                    <i class="fa-solid fa-angle-right"></i>{" "}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Products list */}

            <div className="w-full py-5">
                <div className="max-w-7xl mx-auto p-4">
                    <div className="flex flex-wrap -mx-2">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="w-full sm:w-4/12 lg:w-4/12 p-2"
                            >
                                <Card service={service} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default RenovationsFabrications;
