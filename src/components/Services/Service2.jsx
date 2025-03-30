import { v4 as uuidv4 } from "uuid";

import Card from "../Card/Card";
import image1 from "../../assets/slide2.png";
import image2 from "../../assets/pic7.png";
import image3 from "../../assets/small.png";
const Service2 = () => {
    const services = [
        {
            id: uuidv4(),
            category: "Initech Space",
            title: "Apple Smart Watch / Midnight Aluminum",
            image: image1,
            rating: 4,
            price: 51.04,
            originalPrice: 58.0,
        },
        {
            id: uuidv4(),
            category: "Massive Dynamic",
            title: "BoAt Lite Smartwatch 1.69 Inches HD Display",
            image: image2,
            rating: 5,
            price: 64.17,
            originalPrice: 69.0,
        },
        {
            id: uuidv4(),
            category: "Pro Tech Gear",
            title: "Cropped Satin Bomber Jacket",
            image: image3,
            rating: 0,
            price: 94.0,
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
                                    Cleaning & Pest Services
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

export default Service2;
