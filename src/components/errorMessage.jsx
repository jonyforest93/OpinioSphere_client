import React, { useState, useEffect } from "react";

const ErrorMessage = ({ message, onClose }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (message) {
            setIsVisible(true);
            const timer = setTimeout(() => {
                setIsVisible(false);
                onClose();
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [message, onClose]);

    return (
        <div>
            {isVisible && (
                <div
                    className="z-50 flex items-center fixed top-3.5 left-1/2 transform -translate-x-1/2 bg-red-500 text-white font-inter font-bold p-4 rounded-lg shadow-md opacity-80 transition-all ease-in-out duration-300">
                    <p>{message}</p>
                    <button
                        className="ml-5 px-4 py-2 rounded-full bg-red-700 text-white text-base"
                        onClick={() => setIsVisible(false)}
                    >
                        x
                    </button>
                </div>
            )}
        </div>
    );
};

export default ErrorMessage;