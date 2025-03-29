import { useEffect } from "react";
import { ToastType } from "../../constants/enums/toastTypes";

const Toast = ({ type, message, description, onClose, duration = 3000 }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [onClose, duration]);

    return (
        <div className="fixed bottom-5 right-5 max-w-100 bg-white px-4 py-2 border border-gray-200 rounded shadow-lg animate-slide-in">
            <div className="flex justify-between mb-2">
                <span>
                    {type.icon} {message}
                </span>
                <button
                    onClick={onClose}
                    className="hover:text-red-400 cursor-pointer"
                >
                    ✖
                </button>
            </div>
            {description && (
                <div>
                    <p className="mb-0 text-sm text-gray-600">{description}</p>
                </div>
            )}
        </div>
    );
};

export default Toast;
