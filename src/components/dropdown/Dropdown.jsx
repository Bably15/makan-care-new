import { useEffect, useRef, useState } from "react";
// import { AiOutlineDown } from "react-icons/ai";

const Dropdown = ({
    options = [],
    showSelectedLabel,
    selected,
    onSelect,
    label,
    icon,
    containerOverrideClasses = "",
    buttonOverrideClasses = "",
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (option) => {
        onSelect(option);
        setIsOpen(false);
    };

    return (
        <div
            ref={dropdownRef}
            className={`relative w-full ${containerOverrideClasses}`}
        >
            {/* Dropdown Trigger */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center justify-between w-full px-4 py-2 text-sm bg-white rounded-md hover:bg-gray-100 cursor-pointer ${buttonOverrideClasses}`}
            >
                <span className="flex items-center mr-3">
                    {icon && <span className="mr-2">{icon}</span>}
                    {showSelectedLabel && selected ? selected.label : label}
                </span>
                <i class="fa-solid fa-angle-down"></i>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <ul className="absolute left-0 right-0 mt-2 bg-white rounded-md shadow-lg max-h-60 overflow-auto z-10">
                    {options.map((option) => (
                        <li
                            key={option.value}
                            onClick={() => handleSelect(option)}
                            className={`px-4 py-2 cursor-pointer flex items-center hover:bg-gray-100 ${
                                selected?.value === option.value
                                    ? "bg-gray-200 font-normal"
                                    : ""
                            }`}
                        >
                            {option.icon && (
                                <span className="mr-2">{option.icon}</span>
                            )}
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
