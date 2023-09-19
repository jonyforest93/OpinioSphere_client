import React, {useState} from "react";

const CateroryButton = ({ text, onClick, isActive }) => {
    const handleButtonClick = () => {
        onClick(text);
    };

    return (
        <button className={`font-inter text-base w-21 h-11 px-[18px] py-2.5 rounded-lg 
        ${isActive ? 'bg-gray-100' : 'bg-white'} ${isActive ? 'text-customPurple' : 'text-gray-500'}`}
            onClick={handleButtonClick}
        >
            {text}
        </button>
    );
}

export default CateroryButton;