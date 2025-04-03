import { useState } from "react";

const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-200 rounded-lg shadow-sm">
            <button
                className="w-full text-left p-4 bg-white font-semibold flex justify-between items-center"
                onClick={() => setIsOpen(!isOpen)}
            >
                {title}
                <span>{isOpen ? "▲" : "▼"}</span>
            </button>
            {isOpen && (
                <div className="p-4 text-gray-600 bg-gray-50">{content}</div>
            )}
        </div>
    );
};

export default Accordion;
