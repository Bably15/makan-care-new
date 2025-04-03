import { useEffect, useState } from "react";

const Loader = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return oldProgress + 2;
            });
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-white">
            <div className="flex flex-col items-center mb-4">
                <span className="text-black font-semibold text-lg mt-2">
                    Makan Care
                </span>
            </div>

            <div className="w-64 h-1.5 bg-gray-200 rounded-full">
                <div
                    className="h-full bg-purple-500 rounded-full transition-all"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
        </div>
    );
};

export default Loader;
