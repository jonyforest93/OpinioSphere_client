import React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../ThemeContext";

const CategoryButton = ({ text, onClick, isActive }) => {
    const { isDarkTheme } = useTheme();
    const {t} = useTranslation();
    const handleButtonClick = () => {
        onClick(text);
    };

    return (
        <button className={`font-inter text-base w-21 h-11 px-[18px] py-2.5 rounded-lg 
        ${isDarkTheme ? `${isActive ? 'bg-[#B395F6] bg-opacity-10' : 'bg-backgroundDark text-[#BFC6D2]'}` 
            : `${isActive ? 'bg-gray-100 text-customPurple' : 'bg-white text-gray-500'} bg-backgroundDark`}
        `}
            onClick={handleButtonClick}
        >
            {t(text)}
        </button>
    );
}

export default CategoryButton;