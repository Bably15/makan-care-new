import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronDown,
    // faFlagUsa,
    // faFlagFrance,
    // faFlagGermany,
    // faFlagSpain,
    // faFlagIndia,
    // faFlagJapan,
} from "@fortawesome/free-solid-svg-icons";

const Dropdown = ({ items, label }) => {
    return (
        <div className="relative inline-block text-left">
            <label className="block text-gray-700 font-medium mb-1">{label}</label>
            <select className="w-full px-2 rounded-lg">
                {items.map((item, index) => (
                    <option key={index} value={item.text} className="flex items-center gap-2">
                        {item.iconBefore} {item.text}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;