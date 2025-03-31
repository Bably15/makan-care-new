import TestimonialCard from "../Card/TestimonialCard";
import user1 from "../../assets/user1.jpg.png";
import user2 from "../../assets/user2.png";
import user3 from "../../assets/user3.png";

const Service2 = () => {
    const clients = [
        {
            name: "Patrick Goodman",
            designation: "Manager",
            image: user1,
            review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text randomised words which dont look even slightly believable",
        },
        {
            name: "Luies",
            designation: "Helper",
            image: user2,
            review: "Galley of type and scrambled it to make a type specimen book Lorem Ipsum is simply dummy text of the printing and typesetting t predefined chunks as necessary, making this the first true generator",
        },
        {
            name: "Jecob Goeckno",
            designation: "Unit Manager",
            image: user3,
            review: "Letraset sheets containing Lorem with desktop publishing printer took a galley Lorem Ipsum is simply dummy text of the printing model sentence structures, to generate Lorem Ipsum which looks",
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
                                    What Our Clients Say
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Products list */}

            <div className="w-full py-5">
                <div className="max-w-7xl mx-auto p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {clients.map((client, index) => (
                            <TestimonialCard key={index} {...client} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service2;
