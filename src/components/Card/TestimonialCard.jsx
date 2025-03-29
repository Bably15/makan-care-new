const TestimonialCard = ({ image, name, designation, review }) => {
    return (
        <div className="rounded-lg border border-gray-200 p-4 h-full">
            <div className="flex items-center space-x-4 p-3">
                <img
                    src={image}
                    alt={name}
                    className="object-cover w-20 h-20 rounded-full"
                />
                <div>
                    <h3 className="text-lg font-semibold">{name}</h3>
                    <p className="text-sm text-gray-500">{designation}</p>
                </div>
            </div>
            <p className="mt-3 text-gray-600 text-xs/6 text-gray-300 font-normal">
                {review}
            </p>
        </div>
    );
};

export default TestimonialCard;
