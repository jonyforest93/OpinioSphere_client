import React from "react";
import { useTranslation } from "react-i18next";

const CategoryButton = ({ text, onClick, isActive }) => {
    const {t} = useTranslation();
    const handleButtonClick = () => {
        onClick(text);
    };

    return (
        <button className={`font-inter text-base w-21 h-11 px-[18px] py-2.5 rounded-lg 
        ${isActive ? 'bg-gray-100 text-customPurple' : 'bg-white text-gray-500'}`}
            onClick={handleButtonClick}
        >
            {t(text)}
        </button>
    );
}

export default CategoryButton;