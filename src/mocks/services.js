import { v4 as uuidv4 } from "uuid";
import GARDENING_1_IMG from "../assets/gardening_1.jpg";
import GARDENING_2_IMG from "../assets/gardening_2.jpg";
import GARDENING_3_IMG from "../assets/gardening_3.jpg";
import ELECTRICIAN_1_IMG from "../assets/electrician_1.jpg";
import ELECTRICIAN_2_IMG from "../assets/electrician_2.jpg";
import ELECTRICIAN_3_IMG from "../assets/electrician_3.jpg";
import PLUMBING_1_IMG from "../assets/plumbing_1.jpg";
import PLUMBING_2_IMG from "../assets/plumbing_2.jpg";
import PLUMBING_3_IMG from "../assets/plumbing_3.jpeg";

// export const services = [
//     {
//         id: 1,
//         title: "Complete Face Care",
//         rating: "4.84",
//         reviews: "1.7M",
//         price: 667,
//         duration: "1 hr 20 mins",
//         services: [
//             {
//                 type: "Threading",
//                 details: "Eyebrow, Upper lip",
//             },
//             {
//                 type: "Facial",
//                 details: "Crave beauty hydrating banana facial",
//             },
//         ],
//     },
//     {
//         id: 2,
//         title: "Glow Boost Facial",
//         rating: "4.76",
//         reviews: "980K",
//         price: 799,
//         duration: "1 hr 10 mins",
//         services: [
//             {
//                 type: "Facial",
//                 details: "Vitamin C brightening facial",
//             },
//             {
//                 type: "Massage",
//                 details: "Face and neck massage",
//             },
//         ],
//     },
//     {
//         id: 3,
//         title: "Luxury Hair Spa",
//         rating: "4.92",
//         reviews: "2.3M",
//         price: 1199,
//         duration: "1 hr 45 mins",
//         services: [
//             {
//                 type: "Hair Treatment",
//                 details: "Keratin smoothening treatment",
//             },
//             {
//                 type: "Massage",
//                 details: "Scalp nourishment massage",
//             },
//         ],
//     },
//     {
//         id: 4,
//         title: "Relaxing Body Massage",
//         rating: "4.81",
//         reviews: "750K",
//         price: 1499,
//         duration: "1 hr 30 mins",
//         services: [
//             {
//                 type: "Massage",
//                 details: "Deep tissue massage",
//             },
//             {
//                 type: "Aromatherapy",
//                 details: "Lavender essential oil relaxation",
//             },
//         ],
//     },
//     {
//         id: 5,
//         title: "Manicure & Pedicure",
//         rating: "4.78",
//         reviews: "1.2M",
//         price: 899,
//         duration: "1 hr",
//         services: [
//             {
//                 type: "Manicure",
//                 details: "Classic nail grooming and polish",
//             },
//             {
//                 type: "Pedicure",
//                 details: "Foot scrub and massage",
//             },
//         ],
//     },
// ];

export const services = [
    {
        id: uuidv4(),
        title: "Gardening",
        description:
            "Transform your outdoor space with our expert gardening services! Whether you need regular lawn maintenance, professional tree care, or a complete landscape makeover, we've got you covered. Our team ensures your garden stays lush, vibrant, and pest-free all year round. We use eco-friendly techniques and the latest equipment to enhance your green space, making it both beautiful and functional. From small backyard gardens to large estates, we bring expertise and creativity to every project.",
        subcategories: [
            {
                id: uuidv4(),
                title: "Lawn Maintenance",
                description:
                    "A well-maintained lawn adds beauty and value to your property. Our services include mowing, fertilizing, aeration, and weed control to keep your grass green and healthy all year.",
                image: GARDENING_1_IMG,
                rating: 4.5,
                reviews: 120,
                price: 50,
                duration: "2-4 hours",
            },
            {
                id: uuidv4(),
                title: "Tree and Plant Care",
                description:
                    "Healthy trees and plants are essential for a thriving garden. We provide pruning, disease prevention, and nourishment to ensure your plants grow strong and beautiful.",
                image: GARDENING_2_IMG,
                rating: 4.7,
                reviews: 90,
                price: 80,
                duration: "3-6 hours",
            },
            {
                id: uuidv4(),
                title: "Fencing",
                description:
                    "Enhance security and privacy with our durable fencing solutions. We install and maintain fences that complement your garden’s aesthetics while offering protection and boundary definition.",
                image: GARDENING_3_IMG,
                rating: 4.6,
                reviews: 75,
                price: 100,
                duration: "4-8 hours",
            },
        ],
    },
    {
        id: uuidv4(),
        title: "Electrician",
        description:
            "Safe and reliable electrical work is crucial for any home or business. Our skilled electricians provide top-quality services, from wiring to lighting installations, ensuring that your electrical systems function efficiently and safely. We use high-quality materials and follow the latest industry standards to prevent electrical hazards and improve energy efficiency. Whether you need repairs, upgrades, or new installations, our team is ready to assist you with expertise and professionalism.",
        subcategories: [
            {
                id: uuidv4(),
                title: "Wiring & Rewiring",
                description:
                    "Outdated wiring can be a safety hazard. We install new wiring or upgrade existing systems to ensure your home or business is powered safely and efficiently.",
                image: ELECTRICIAN_1_IMG,
                rating: 4.8,
                reviews: 150,
                price: 100,
                duration: "3-6 hours",
            },
            {
                id: uuidv4(),
                title: "Lighting Fixture Installation",
                description:
                    "Brighten up your space with expertly installed lighting. Whether it’s decorative, security, or energy-efficient LED lighting, we provide tailored solutions to fit your needs.",
                image: ELECTRICIAN_2_IMG,
                rating: 4.6,
                reviews: 110,
                price: 50,
                duration: "1-3 hours",
            },
            {
                id: uuidv4(),
                title: "Circuit Breaker Repair",
                description:
                    "A faulty circuit breaker can lead to electrical failures or even fires. We inspect, repair, and replace breakers to keep your electrical system running smoothly and safely.",
                image: ELECTRICIAN_3_IMG,
                rating: 4.7,
                reviews: 95,
                price: 80,
                duration: "2-5 hours",
            },
        ],
    },
    {
        id: uuidv4(),
        title: "Plumbing",
        description:
            "Leaky pipes, clogged drains, or water heater issues? Our professional plumbing services ensure your home or business runs smoothly without unexpected disruptions. We handle everything from small repairs to complete installations with precision and reliability. Using high-quality materials and advanced techniques, we deliver long-lasting solutions for all your plumbing needs.",
        subcategories: [
            {
                id: uuidv4(),
                title: "Pipes Repair & Installation",
                description:
                    "Leaky or broken pipes can cause significant damage if left unattended. Our experts repair and install pipes to maintain a smooth and efficient water supply.",
                image: PLUMBING_1_IMG,
                rating: 4.5,
                reviews: 130,
                price: 70,
                duration: "2-5 hours",
            },
            {
                id: uuidv4(),
                title: "Faucets & Leak Repair",
                description:
                    "Dripping faucets and leaks can waste water and increase bills. We quickly diagnose and fix leaks, ensuring your plumbing system remains efficient and leak-free.",
                image: PLUMBING_2_IMG,
                rating: 4.6,
                reviews: 100,
                price: 50,
                duration: "1-3 hours",
            },
            {
                id: uuidv4(),
                title: "Water Heaters Repair & Installation",
                description:
                    "Enjoy hot water whenever you need it! We install and repair water heaters, ensuring they operate efficiently to provide comfort and convenience.",
                image: PLUMBING_3_IMG,
                rating: 4.7,
                reviews: 85,
                price: 150,
                duration: "3-6 hours",
            },
        ],
    },
];
