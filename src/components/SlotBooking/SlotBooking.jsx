import { useState, useRef } from "react";
import { slots } from "../../mocks/slots";
import { useNavigate } from "react-router-dom";
import { APPROUTES } from "../../constants/routes/appRoutes";

const SlotBooking = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const scrollRef = useRef(null);
    const navigate = useNavigate();

    const scrollAmount = 200;

    const handleScrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: -scrollAmount,
                behavior: "smooth",
            });
        }
    };

    const handleScrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: scrollAmount,
                behavior: "smooth",
            });
        }
    };

    const isReadyToCheckout = selectedDate && selectedTime;

    const handleCheckout = () => {
        navigate(APPROUTES.CHECKOUT);
    };

    return (
        <div className="p-4 max-w-md mx-auto py-30 overflow-hidden">
            {/* Header */}
            <div className="flex items-center mb-4">
                <h1 className="text-2xl font-bold">Available Slots</h1>
            </div>

            {/* Question */}
            <h3 className="text-lg font-semibold mb-1">
                When should the professional arrive?
            </h3>
            <p className="text-sm text-gray-500 mb-4">
                Service will take approx. 1 hr & 5 mins
            </p>

            {/* Date Navigation */}
            <div className="flex items-center mb-6 w-full gap-2">
                <button
                    onClick={handleScrollLeft}
                    className="text-xl px-2 disabled:opacity-30 cursor-pointer"
                >
                    ←
                </button>

                <div
                    ref={scrollRef}
                    className="flex gap-3 overflow-x-auto flex-1 px-1 scroll-smooth"
                    style={{ scrollbarWidth: "none" }}
                >
                    {slots.map((item, idx) => (
                        <button
                            key={idx}
                            onClick={() =>
                                item.available && setSelectedDate(item)
                            }
                            className={`w-16 h-16 shrink-0 rounded-lg border text-center p-2 transition-all cursor-pointer ${
                                selectedDate?.date === item.date
                                    ? "border-purple-600 text-purple-600"
                                    : "border-gray-300 text-gray-600"
                            } ${
                                !item.available
                                    ? "opacity-30 cursor-not-allowed"
                                    : ""
                            }`}
                        >
                            <div className="text-sm">{item.day}</div>
                            <div className="text-lg font-medium">
                                {item.date}
                            </div>
                        </button>
                    ))}
                </div>

                <button
                    onClick={handleScrollRight}
                    className="text-xl px-2 disabled:opacity-30 cursor-pointer"
                >
                    →
                </button>
            </div>

            {/* Time Slot Selection */}
            <h4 className="text-md font-medium mb-2">
                Select start time of service
            </h4>
            <div className="grid grid-cols-2 gap-4 mb-6">
                {(selectedDate?.times || []).map((time) => (
                    <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`p-3 rounded-md border cursor-pointer ${
                            selectedTime === time
                                ? "border-purple-600 text-purple-600"
                                : "border-gray-300 text-gray-700"
                        }`}
                    >
                        {time}
                    </button>
                ))}
                {selectedDate && selectedDate.times.length === 0 && (
                    <div className="text-sm text-gray-500 col-span-2">
                        No time slots available
                    </div>
                )}
            </div>

            {/* CTA Button */}
            <button
                disabled={!isReadyToCheckout}
                className={`w-full py-3 text-center rounded-lg font-medium text-white cursor-pointer ${
                    isReadyToCheckout
                        ? "bg-[#6b4f36] hover:bg-stone-900"
                        : "bg-gray-300 cursor-not-allowed"
                }`}
                onClick={handleCheckout}
            >
                Proceed to checkout
            </button>
        </div>
    );
};

export default SlotBooking;
