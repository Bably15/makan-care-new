import { createContext, useContext, useState, useCallback } from "react";
import Toast from "../components/Toast/Toast";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const showToast = useCallback(
        (type, message, description, duration = 3000) => {
            const id = Date.now();
            setToasts((prev) => [
                ...prev,
                { id, type, message, description, duration },
            ]);
            setTimeout(() => {
                setToasts((prev) => prev.filter((toast) => toast.id !== id));
            }, duration);
        },
        []
    );

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            <div className="fixed top-5 right-5 z-50 space-y-2">
                {toasts.map((toast) => (
                    <Toast
                        key={toast.id}
                        type={toast.type}
                        message={toast.message}
                        description={toast.description}
                        onClose={() =>
                            setToasts((prev) =>
                                prev.filter((t) => t.id !== toast.id)
                            )
                        }
                        duration={toast.duration}
                    />
                ))}
            </div>
        </ToastContext.Provider>
    );
};

export const useToast = () => useContext(ToastContext);
